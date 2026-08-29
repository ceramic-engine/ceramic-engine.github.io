---
layout: guides
category: guides
menu: Handbook
title: Shaders
permalink: guides/shaders/
---
# Shaders

Shaders are small programs that run on the GPU for every vertex and every pixel drawn. They power visual effects that would be far too expensive on the CPU: blurs, glows, distortions, procedural animations...

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/custom-shader/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/custom-shader/">custom shader</a> example: a plasma computed entirely on the GPU.</div>

## Using a shader on a visual

Every visual has a `shader` property. Assign a `Shader` instance to change how it is drawn. `assets.shader()` returns the **typed** shader class, so you keep access to its typed API:

<div class="codename">Assigning a shader to a visual</div>

```haxe
var myShader = assets.shader(shaders.MyShader);
visual.shader = myShader;
```

Shaders expose **uniforms**: values that your code sets, and that the GPU program reads. In ceramic, shaders are written in Haxe (see [Writing your own shader](#writing-your-own-shader) below), and declare their uniforms as `@param` variables. Say `MyShader`'s fragment shader declares these:

<div class="codename">The @param uniforms declared by MyShader (fragment)</div>

```haxe
class MyShader_Frag extends Frag {

    // The visual's texture (set automatically by ceramic)
    @param var mainTex:Sampler2D;

    // Custom uniforms, set from your code
    @param var time:Float;
    @param var resolution:Vec2;
    @param var tint:Vec4;
    @param var secondaryTexture:Sampler2D;

    // ...

}
```

Each of these `@param` becomes a **typed method** of the same name on the `shaders.MyShader` class, so setting uniforms is checked at compile time:

<div class="codename">Setting these uniforms from your code (typed)</div>

```haxe
myShader.time(elapsed);              // uniform 'time' (Float)
myShader.resolution(width, height);  // uniform 'resolution' (Vec2)
myShader.tint(Color.RED);            // a Vec3/Vec4 uniform also accepts a Color
myShader.secondaryTexture(texture);  // uniform 'secondaryTexture' (Sampler2D)
```

<p class="extra-info">Under the hood these call the generic setters <code>setFloat('time', ...)</code>, <code>setVec2('resolution', ...)</code>, etc. Those string-based setters are still available on any <code>ceramic.Shader</code> if you hold a shader without its concrete type.</p>

<p class="extra-info">A <code>Shader</code> instance carries its uniform values with it. If two visuals need the same shader with <em>different</em> values, clone it: <code>var other:shaders.MyShader = cast myShader.clone();</code> (<code>clone()</code> returns a base <code>Shader</code>, so cast it back to keep the typed API).</p>

## Built-in shaders

Ceramic ships with ready-to-use shaders, exposed as classes in the `shaders` package. Add the ones you use in `preload()` like any other asset:

| Shader | Effect |
|---|---|
| `shaders.GaussianBlur` | Smooth blur (see the [gaussian blur](/examples/gaussian-blur/) example) |
| `shaders.PixelArt` | Crisp pixel art scaling with optional CRT-style effects |
| `shaders.Msdf` | Multi-channel signed distance field fonts (used internally for MSDF text) |
| `shaders.Bloom`, `shaders.Glow`, `shaders.Outline`, `shaders.Fxaa`, `shaders.InnerLight` | Various effects |
| `shaders.TintBlack` | "Tint black" coloring (as popularized by Spine) |

<div class="codename">Using the built-in gaussian blur</div>

```haxe
override function preload() {
    assets.add(shaders.GaussianBlur);
}

override function create() {
    // clone() so we don't mutate the shared cached shader; cast back to the
    // typed class to keep the typed uniform setters
    var blur:shaders.GaussianBlur = cast assets.shader(shaders.GaussianBlur).clone();
    blur.resolution(filter.width, filter.height);
    blur.blurSize(6.0, 6.0);
    filter.shader = blur;
}
```

<p class="extra-info">Shaders are often combined with <a href="/guides/filters/">filters</a>: the filter renders its content to a texture, and the shader processes that texture as a whole (post-processing), instead of processing each visual separately.</p>

## Writing your own shader

Custom shaders are written **in Haxe**, with ceramic's cross-platform shader system (the `shade` plugin). You write a vertex and a fragment class, and they get transpiled at build time to the native shader language of each backend (GLSL for web & native, ShaderLab for Unity...): the same shader runs everywhere.

<div class="codename">src/shaders/Plasma.hx</div>

```haxe
package shaders;

class Plasma extends Shader<Plasma_Vert, Plasma_Frag> {}

class Plasma_Vert extends Vert {

    @param var projectionMatrix:Mat4;
    @param var modelViewMatrix:Mat4;

    @in var vertexPosition:Vec3;
    @in var vertexTCoord:Vec2;
    @in var vertexColor:Vec4;

    @out var tcoord:Vec2;
    @out var color:Vec4;

    function main():Vec4 {
        tcoord = vertexTCoord;
        color = vertexColor;
        return projectionMatrix * modelViewMatrix * vec4(vertexPosition, 1.0);
    }

}

class Plasma_Frag extends Frag {

    @param var mainTex:Sampler2D;

    // Custom uniform, set from Haxe code with the typed time() method
    @param var time:Float;

    @in var tcoord:Vec2;
    @in var color:Vec4;

    function main():Vec4 {
        var wave:Float = sin(tcoord.x * 10.0 + time) * 0.5 + 0.5;
        return color * texture(mainTex, tcoord) * vec4(wave, wave, 1.0, 1.0);
    }

}
```

A few things to note:

* `@param` values are **uniforms**: each becomes a typed setter method on the shader class, as seen [above](#using-a-shader-on-a-visual). `@in`/`@out` declare the vertex attributes and the varyings passed from vertex to fragment.
* The math functions (`sin`, `vec4`, `texture`, `mix`...) come from `shade.Functions`: add an `import.hx` next to your shader with `import shade.*; import shade.Functions.*;`.
* The vertex shader receives the standard attributes (`vertexPosition`, `vertexTCoord`, `vertexColor`) and matrices (`projectionMatrix`, `modelViewMatrix`).

Look at the [custom shader](/examples/custom-shader/) example for a complete shader, including how to forward extra data from the vertex to the fragment shader with an additional `@out` varying.

Then load and use it like any built-in shader. Because `assets.shader()` returns the typed `shaders.Plasma`, its `@param` uniforms are typed methods:

<div class="codename">Loading a custom shader</div>

```haxe
var plasma:shaders.Plasma;

override function preload() {
    // The Plasma class is transpiled and loaded like any shader asset
    assets.add(shaders.Plasma);
}

override function create() {
    plasma = assets.shader(shaders.Plasma);
    quad.shader = plasma;
}

override function update(delta:Float) {
    elapsed += delta;
    plasma.time(elapsed); // typed setter for the 'time' @param
}
```

<p class="extra-info">Because shaders are plain Haxe classes, they are type-checked at compile time, and the multi-texture batching variants are generated automatically for you. No need to maintain separate shader files per platform.</p>

## Related examples

* [Custom shader](/examples/custom-shader/): a plasma shader written in Haxe
* [Gaussian blur](/examples/gaussian-blur/): a built-in shader applied through a filter
* [Pointer in filter](/examples/pointer-in-filter/): interactions inside a filtered hierarchy

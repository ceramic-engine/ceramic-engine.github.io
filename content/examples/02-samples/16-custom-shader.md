---
layout: examples
category: examples
menu: Samples
title: Custom Shader
permalink: examples/custom-shader/
sample: custom-shader
description: A GPU plasma effect with a custom shader written in Haxe, transpiled to each backend and driven by uniforms.
---

A plasma effect computed entirely on the GPU by a custom shader **written in Haxe** (`src/shaders/Plasma.hx`), with ceramic's cross-platform shader system: the same shader class is transpiled to the native shader language of each backend (GLSL, ShaderLab...). Its uniforms are updated from the scene at every frame.

```haxe
// In src/shaders/Plasma.hx: the shader itself, in Haxe
class Plasma extends Shader<Plasma_Vert, Plasma_Frag> {}

class Plasma_Frag extends Frag {

    @param var mainTex:Sampler2D;
    @param var time:Float;       // Custom uniforms, set from Haxe
    @param var resolution:Vec2;

    @in var tcoord:Vec2;
    @in var color:Vec4;

    function main():Vec4 {
        // ... plasma math using sin(), vec3()... (see full source)
    }

}
```

```haxe
// In the scene (plasmaShader is typed as shaders.Plasma):
override function preload() {
    assets.add(shaders.Plasma);
}

override function create() {
    plasmaShader = assets.shader(shaders.Plasma);

    var quad = new Quad();
    quad.size(width, height);
    quad.shader = plasmaShader;
    add(quad);
}

override function update(delta:Float) {
    elapsed += delta;
    // Feed our custom uniforms every frame, using the typed setters
    // generated from the shader's @param declarations
    plasmaShader.time(elapsed);
    plasmaShader.resolution(width, height);
}
```

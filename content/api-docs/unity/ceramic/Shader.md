---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Shader
target: Unity
permalink: api-docs/unity/ceramic/Shader/
---

# Shader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Shader.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.Shader</strong> (Class)</div>

Represents a GPU shader program for custom rendering effects.

Shaders are programs that run on the GPU to transform vertices and
calculate pixel colors. Ceramic uses shaders for all rendering, from
basic sprite drawing to complex visual effects.

Key features:
- Support for vertex and fragment shaders
- Uniform variables for passing data to shaders
- Multiple texture slot support
- Custom vertex attributes
- Automatic shader compilation and linking

Common uses:
- Visual effects (blur, glow, distortion)
- Color manipulation (hue shift, contrast)
- Custom rendering techniques
- Post-processing filters
- Special material effects

Ceramic provides several built-in shaders:
- 'shader:textured' - Standard textured rendering (default)
- 'shader:pixelArt' - High-quality pixel art scaling
- Various effect shaders depending on plugins

```haxe
// Load and apply a custom shader
var shader = assets.shader('myEffect').clone();
shader.setFloat('intensity', 0.5);
shader.setVec2('resolution', screen.width, screen.height);
myVisual.shader = shader;

// Create shader from source (if supported)
#if ceramic_shader_vert_frag
var customShader = Shader.fromSource(
    vertexShaderCode,
    fragmentShaderCode
);
#end

// Animate shader uniforms
app.onUpdate(this, delta -> {
    shader.setFloat('time', Timer.now);
    shader.setColor('tint', Color.fromHSB(
        (Timer.now * 60) % 360, 1, 1
    ));
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/ShaderAsset/">ShaderAsset</a>, Visual.shader, <a href="/api-docs/unity/ceramic/ShaderAttribute/">ShaderAttribute</a></div>


## Instance Members

<div class="signature field-var has-description" id="backendItem"><code><span class="field-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a></code><a class="header-anchor" href="#backendItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The backend-specific shader implementation.
Used internally by the rendering system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ShaderAsset/" class="type-link">ShaderAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shader asset this shader was loaded from.
Null if created programmatically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="attributes"><code><span class="field-name">attributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All vertex attributes used by this shader.
Includes standard attributes (position, texCoord, color)
plus any custom attributes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="customAttributes"><code><span class="field-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom vertex attributes beyond the standard ones.
Used for passing additional per-vertex data to shaders.

<hr class="field-separator" />

<div class="signature field-var has-description" id="customFloatAttributesSize"><code><span class="field-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total size of custom float attributes in the vertex buffer.
Calculated from customAttributes array.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a copy of this shader with independent uniform values.

Useful when you need multiple instances of the same shader
with different parameters.


| Returns | Description |
|---------|-------------|
| [Shader](/api-docs/unity/ceramic/Shader/) | A new shader instance with the same program but separate uniforms |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInt"><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `value` | [Int](/api-docs/unity/Int/) | The integer value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloat"><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `value` | [Float](/api-docs/unity/Float/) | The float value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setColor"><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a color uniform variable (RGB with full alpha).
The color is passed as vec4 with alpha = 1.0.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `color` | [Color](/api-docs/unity/ceramic/Color/) | The color value (alpha ignored) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAlphaColor"><code><span class="field-name">setAlphaColor</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">AlphaColor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAlphaColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a color uniform variable with alpha (RGBA).
The color is passed as vec4 including alpha channel.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `color` | [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | The color value with alpha |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec2"><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec2 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/unity/Float/) | The x component  |
| `y` | [Float](/api-docs/unity/Float/) | The y component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec3"><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec3 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/unity/Float/) | The x component  |
| `y` | [Float](/api-docs/unity/Float/) | The y component  |
| `z` | [Float](/api-docs/unity/Float/) | The z component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec4"><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec4 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/unity/Float/) | The x component  |
| `y` | [Float](/api-docs/unity/Float/) | The y component  |
| `z` | [Float](/api-docs/unity/Float/) | The z component  |
| `w` | [Float](/api-docs/unity/Float/) | The w component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloatArray"><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float array uniform variable.
Useful for passing multiple values or matrices.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform variable name in the shader  |
| `array` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | The array of float values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture"><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a texture uniform variable.

Textures are bound to numbered slots (0, 1, 2, etc.).
Slot 0 is typically used for the main texture.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform sampler2D variable name in the shader  |
| `slot` | [Int](/api-docs/unity/Int/) | The texture slot index (0-based)  |
| `texture` | [Texture](/api-docs/unity/ceramic/Texture/) | The texture to bind, or null to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMat4FromTransform"><code><span class="field-name">setMat4FromTransform</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4FromTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a mat4 uniform variable from a Transform.
Converts the transform to a 4x4 matrix for the shader.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The uniform mat4 variable name in the shader  |
| `transform` | [Transform](/api-docs/unity/ceramic/Transform/) | The transform to convert to matrix |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new shader instance.

Standard vertex attributes are automatically included:
- vertexPosition (vec3): Vertex position in model space
- vertexTCoord (vec2): Texture coordinates
- vertexColor (vec4): Vertex color with alpha



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `backendItem` | [backend.Shader](/api-docs/unity/backend/Shader/) | | Backend-specific shader implementation  |
| `customAttributes` | [ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ShaderAttribute](/api-docs/unity/ceramic/ShaderAttribute/)> | *(optional)* | Optional additional vertex attributes |

## Private Members

<div class="signature field-var no-description" id="textureSlots"><code><span class="field-name">textureSlots</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textureSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="usedTextures"><code><span class="field-name">usedTextures</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


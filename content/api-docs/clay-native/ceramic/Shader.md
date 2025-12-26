---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Shader
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Shader/
---

# Shader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Shader.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Shader</strong> (Class) → <a href="/api-docs/clay-native/shade/Shader/">shade.Shader</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Bloom_Vert__shaders_Bloom_Frag/">shade.Shader__shaders_Bloom_Vert__shaders_Bloom_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Blur_Vert__shaders_Blur_Frag/">shade.Shader__shaders_Blur_Vert__shaders_Blur_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Fxaa_Vert__shaders_Fxaa_Frag/">shade.Shader__shaders_Fxaa_Vert__shaders_Fxaa_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag/">shade.Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Glow_Vert__shaders_Glow_Frag/">shade.Shader__shaders_Glow_Vert__shaders_Glow_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_InnerLight_Vert__shaders_InnerLight_Frag/">shade.Shader__shaders_InnerLight_Vert__shaders_InnerLight_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Msdf_Vert__shaders_Msdf_Frag/">shade.Shader__shaders_Msdf_Vert__shaders_Msdf_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Outline_Vert__shaders_Outline_Frag/">shade.Shader__shaders_Outline_Vert__shaders_Outline_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_PixelArt_Vert__shaders_PixelArt_Frag/">shade.Shader__shaders_PixelArt_Vert__shaders_PixelArt_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_Textured_Vert__shaders_Textured_Frag/">shade.Shader__shaders_Textured_Vert__shaders_Textured_Frag</a>, <a href="/api-docs/clay-native/shade/Shader__shaders_TintBlack_Vert__shaders_TintBlack_Frag/">shade.Shader__shaders_TintBlack_Vert__shaders_TintBlack_Frag</a></div>

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

// Animate shader uniforms
app.onUpdate(this, delta -> {
    shader.setFloat('time', Timer.now);
    shader.setColor('tint', Color.fromHSB(
        (Timer.now * 60) % 360, 1, 1
    ));
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ShaderAsset/">ShaderAsset</a>, Visual.shader, <a href="/api-docs/clay-native/ceramic/ShaderAttribute/">ShaderAttribute</a></div>


## Instance Members

<div class="signature field-var has-description" id="backendItem"><code><span class="field-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">backend.Shader</a></code><a class="header-anchor" href="#backendItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The backend-specific shader implementation.
Used internally by the rendering system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ShaderAsset/" class="type-link">ShaderAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shader asset this shader was loaded from.
Null if created programmatically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="attributes"><code><span class="field-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All vertex attributes used by this shader (except texture slot attribute)
Includes standard attributes (position, texCoord, color)
plus any custom attributes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="baseAttributes"><code><span class="field-name">baseAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#baseAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base standard vertex attributes (position, texCoord, color),
without any custom attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="customAttributes"><code><span class="field-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom vertex attributes beyond the standard ones.
Used for passing additional per-vertex data to shaders.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureIdAttribute"><code><span class="field-name">textureIdAttribute</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a></code><a class="header-anchor" href="#textureIdAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex attribute used to store texture slot (if the shader is a multi-texture shader).

<hr class="field-separator" />

<div class="signature field-var has-description" id="customFloatAttributesSize"><code><span class="field-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total size of custom float attributes in the vertex buffer.
Calculated from customAttributes array.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a copy of this shader with independent uniform values.

Useful when you need multiple instances of the same shader
with different parameters.


| Returns | Description |
|---------|-------------|
| [Shader](/api-docs/clay-native/ceramic/Shader/) | A new shader instance with the same program but separate uniforms |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInt"><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `value` | [Int](/api-docs/clay-native/Int/) | The integer value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloat"><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `value` | [Float](/api-docs/clay-native/Float/) | The float value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec2"><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec2 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/clay-native/Float/) | The x component  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec3"><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec3 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/clay-native/Float/) | The x component  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y component  |
| `z` | [Float](/api-docs/clay-native/Float/) | The z component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec4"><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a vec4 uniform variable.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `x` | [Float](/api-docs/clay-native/Float/) | The x component  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y component  |
| `z` | [Float](/api-docs/clay-native/Float/) | The z component  |
| `w` | [Float](/api-docs/clay-native/Float/) | The w component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloatArray"><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float array uniform variable.
Useful for passing multiple values or matrices.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform variable name in the shader  |
| `array` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> | The array of float values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture"><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a texture uniform variable.

Textures are bound to numbered slots (0, 1, 2, etc.).
Slot 0 is typically used for the main texture.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | | The uniform sampler2D variable name in the shader  |
| `slot` | [Int](/api-docs/clay-native/Int/) | `-1` | The texture slot index (0-based)  |
| `texture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | | The texture to bind, or null to unbind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMat2"><code><span class="field-name">setMat2</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">m00</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m10</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m01</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a mat2 uniform variable (column-major order).


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform mat2 variable name in the shader  |
| `m00` | [Float](/api-docs/clay-native/Float/) | Column 0, row 0  |
| `m10` | [Float](/api-docs/clay-native/Float/) | Column 0, row 1  |
| `m01` | [Float](/api-docs/clay-native/Float/) | Column 1, row 0  |
| `m11` | [Float](/api-docs/clay-native/Float/) | Column 1, row 1 |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMat3"><code><span class="field-name">setMat3</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">m00</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m10</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m20</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m01</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m21</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m02</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m22</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a mat3 uniform variable (column-major order).


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform mat3 variable name in the shader  |
| `m00` | [Float](/api-docs/clay-native/Float/) | Column 0, row 0  |
| `m10` | [Float](/api-docs/clay-native/Float/) | Column 0, row 1  |
| `m20` | [Float](/api-docs/clay-native/Float/) | Column 0, row 2  |
| `m01` | [Float](/api-docs/clay-native/Float/) | Column 1, row 0  |
| `m11` | [Float](/api-docs/clay-native/Float/) | Column 1, row 1  |
| `m21` | [Float](/api-docs/clay-native/Float/) | Column 1, row 2  |
| `m02` | [Float](/api-docs/clay-native/Float/) | Column 2, row 0  |
| `m12` | [Float](/api-docs/clay-native/Float/) | Column 2, row 1  |
| `m22` | [Float](/api-docs/clay-native/Float/) | Column 2, row 2 |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMat4"><code><span class="field-name">setMat4</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">m00</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m10</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m20</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m30</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m01</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m21</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m31</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m02</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m22</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m32</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m03</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m13</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m23</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">m33</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a mat4 uniform variable (column-major order).


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The uniform mat4 variable name in the shader  |
| `m00` | [Float](/api-docs/clay-native/Float/) | Column 0, row 0  |
| `m10` | [Float](/api-docs/clay-native/Float/) | Column 0, row 1  |
| `m20` | [Float](/api-docs/clay-native/Float/) | Column 0, row 2  |
| `m30` | [Float](/api-docs/clay-native/Float/) | Column 0, row 3  |
| `m01` | [Float](/api-docs/clay-native/Float/) | Column 1, row 0  |
| `m11` | [Float](/api-docs/clay-native/Float/) | Column 1, row 1  |
| `m21` | [Float](/api-docs/clay-native/Float/) | Column 1, row 2  |
| `m31` | [Float](/api-docs/clay-native/Float/) | Column 1, row 3  |
| `m02` | [Float](/api-docs/clay-native/Float/) | Column 2, row 0  |
| `m12` | [Float](/api-docs/clay-native/Float/) | Column 2, row 1  |
| `m22` | [Float](/api-docs/clay-native/Float/) | Column 2, row 2  |
| `m32` | [Float](/api-docs/clay-native/Float/) | Column 2, row 3  |
| `m03` | [Float](/api-docs/clay-native/Float/) | Column 3, row 0  |
| `m13` | [Float](/api-docs/clay-native/Float/) | Column 3, row 1  |
| `m23` | [Float](/api-docs/clay-native/Float/) | Column 3, row 2  |
| `m33` | [Float](/api-docs/clay-native/Float/) | Column 3, row 3 |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">baseAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">textureIdAttribute</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ShaderAttribute</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new shader instance.

Standard vertex attributes are automatically included:
- vertexPosition (vec3): Vertex position in model space
- vertexTCoord (vec2): Texture coordinates
- vertexColor (vec4): Vertex color with alpha



| Name | Type | Description |
|------|------|-------------|
| `customAttributes` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[ShaderAttribute](/api-docs/clay-native/ceramic/ShaderAttribute/)> | Optional additional vertex attributes |
| `baseAttributes` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[ShaderAttribute](/api-docs/clay-native/ceramic/ShaderAttribute/)> |  |
| `textureIdAttribute` | [ShaderAttribute](/api-docs/clay-native/ceramic/ShaderAttribute/) |  |

## Private Members

<div class="signature field-var no-description" id="textureSlots"><code><span class="field-name">textureSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textureSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="usedTextures"><code><span class="field-name">usedTextures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveTextureSlot"><code><span class="field-name">resolveTextureSlot</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#resolveTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolve the texture slot for the given name


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The name of the texture uniform  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | The slot or `-1` if not found. |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


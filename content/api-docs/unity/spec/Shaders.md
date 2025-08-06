---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Shaders
target: Unity
permalink: api-docs/unity/spec/Shaders/
---

# Shaders

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Shaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Shaders</strong> (Interface) → <a href="/api-docs/unity/backend/Shaders/">backend.Shaders</a></div>

Backend interface for GPU shader program management.

This interface handles loading, compiling, and managing shader programs
that run on the GPU. Shaders control how vertices are transformed and
how pixels are colored during rendering.

Ceramic supports two shader models:
- Combined shader files (default): Single file with both vertex and fragment shaders
- Separate vert/frag files: When ceramic_shader_vert_frag flag is enabled

Shaders can have uniform parameters (shared across all vertices/pixels) and
custom vertex attributes (per-vertex data). The interface provides methods
to set various types of uniform values.

## Instance Members

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys a shader program and frees its GPU resources.
After calling this, the shader should not be used.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/LoadShaderOptions/" class="type-link">backend.LoadShaderOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads and compiles a shader from a file.
The file format depends on the backend (typically GLSL).


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/unity/String/) | | Path to the shader file (relative to assets)  |
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/unity/ceramic/ShaderAttribute/)> | *(optional)* | Optional array of custom vertex attributes  |
| `options` | [Null](/api-docs/unity/Null/)<[backend.LoadShaderOptions](/api-docs/unity/backend/LoadShaderOptions/)> | *(optional)* | Optional loading configuration  |
| `done` | Function | | Callback invoked with the compiled shader or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a copy of a shader with its own uniform values.
The GPU program is shared, but uniform values can be set independently.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to clone  |

| Returns | Description |
|---------|-------------|
| [backend.Shader](/api-docs/unity/backend/Shader/) | A new shader instance sharing the same GPU program |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInt"><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `value` | [Int](/api-docs/unity/Int/) | The integer value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloat"><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `value` | [Float](/api-docs/unity/Float/) | The float value to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setColor"><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a color uniform value in the shader (as vec4).


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `r` | [Float](/api-docs/unity/Float/) | Red component (0.0 to 1.0)  |
| `g` | [Float](/api-docs/unity/Float/) | Green component (0.0 to 1.0)  |
| `b` | [Float](/api-docs/unity/Float/) | Blue component (0.0 to 1.0)  |
| `a` | [Float](/api-docs/unity/Float/) | Alpha component (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec2"><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 2D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `x` | [Float](/api-docs/unity/Float/) | X component  |
| `y` | [Float](/api-docs/unity/Float/) | Y component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec3"><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 3D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `x` | [Float](/api-docs/unity/Float/) | X component  |
| `y` | [Float](/api-docs/unity/Float/) | Y component  |
| `z` | [Float](/api-docs/unity/Float/) | Z component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVec4"><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 4D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform variable name  |
| `x` | [Float](/api-docs/unity/Float/) | X component  |
| `y` | [Float](/api-docs/unity/Float/) | Y component  |
| `z` | [Float](/api-docs/unity/Float/) | Z component  |
| `w` | [Float](/api-docs/unity/Float/) | W component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFloatArray"><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an array of float uniform values in the shader.
Used for uniform float arrays in GLSL.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The uniform array variable name  |
| `array` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | The array of float values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTexture"><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">backend.Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a texture to a shader sampler uniform.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to modify  |
| `name` | [String](/api-docs/unity/String/) | The sampler uniform variable name  |
| `slot` | [Int](/api-docs/unity/Int/) | The texture unit slot (0-15 typically)  |
| `texture` | [backend.Texture](/api-docs/unity/backend/Texture/) | The texture to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="customFloatAttributesSize"><code><span class="field-name">customFloatAttributesSize</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the total size of custom float attributes per vertex.
This is the sum of all custom attribute sizes defined for the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to query  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The number of floats per vertex for custom attributes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="maxIfStatementsByFragmentShader"><code><span class="field-name">maxIfStatementsByFragmentShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxIfStatementsByFragmentShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the maximum number of if statements supported in fragment shaders.
This varies by GPU and affects shader complexity limits.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The maximum if statement count, or -1 if unlimited |

<hr class="field-separator" />

<div class="signature field-method has-description" id="canBatchWithMultipleTextures"><code><span class="field-name">canBatchWithMultipleTextures</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">backend.Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canBatchWithMultipleTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the shader supports batching with multiple textures.
When true, the shader can render geometry using different textures
in a single draw call by using texture arrays or multi-texturing.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [backend.Shader](/api-docs/unity/backend/Shader/) | The shader to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if multi-texture batching is supported |

<hr class="field-separator" />

<div class="signature field-method has-description" id="supportsHotReloadPath"><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the backend supports hot-reloading of shader files.
When true, shaders can include a `?hot=timestamp` query parameter
to bypass caching and force reloading during development.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if hot-reload paths are supported, false otherwise |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


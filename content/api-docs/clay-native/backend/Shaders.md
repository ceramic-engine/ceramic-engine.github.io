---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Shaders
target: Clay (Native)
permalink: api-docs/clay-native/backend/Shaders/
---

# Shaders

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Shaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Shaders</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/spec/Shaders/">spec.Shaders</a></div>

Clay backend implementation of shader program management.
Handles GLSL shader compilation, multi-texture batching, and cross-platform compatibility.

This class processes shader source code to:
- Enable multi-texture batching for improved performance
- Convert shaders between GLSL ES versions for platform compatibility
- Manage shader uniforms and attributes
- Handle platform-specific shader requirements

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Shader/">ceramic.Shader</a>, <a href="/api-docs/clay-native/backend/ShaderImpl/">ShaderImpl</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="fromSource"><div class="plugin-name">clay</div><code><span class="field-name">fromSource</span><span class="parenthesis">(</span><span class="arg-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#fromSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a shader program from vertex and fragment source code.
Automatically detects and processes multi-texture shaders for batching optimization.

Multi-texture shaders are identified by the `//ceramic:multitexture` comment directive.
The method will:
- Generate texture uniforms based on GPU capabilities
- Convert between GLSL ES versions as needed
- Handle platform-specific shader requirements



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vertSource` | [String](/api-docs/clay-native/String/) | | Vertex shader GLSL source code  |
| `fragSource` | [String](/api-docs/clay-native/String/) | | Fragment shader GLSL source code  |
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/clay-native/ceramic/ShaderAttribute/)> | *(optional)* | Optional custom vertex attributes beyond the standard ones  |

| Returns | Description |
|---------|-------------|
| [Shader](/api-docs/clay-native/backend/Shader/) | Compiled shader program ready for use |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">clay</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys a shader program and releases GPU resources.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | The shader to destroy |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clone"><div class="plugin-name">clay</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a deep copy of a shader program.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | The shader to clone  |

| Returns | Description |
|---------|-------------|
| [Shader](/api-docs/clay-native/backend/Shader/) | A new shader instance with the same properties |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setInt"><div class="plugin-name">clay</div><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an integer uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `value` | [Int](/api-docs/clay-native/Int/) | Integer value to set |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFloat"><div class="plugin-name">clay</div><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `value` | [Float](/api-docs/clay-native/Float/) | Float value to set |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColor"><div class="plugin-name">clay</div><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a color uniform value (vec4) in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `r` | [Float](/api-docs/clay-native/Float/) | Red component (0-1)  |
| `g` | [Float](/api-docs/clay-native/Float/) | Green component (0-1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | Blue component (0-1)  |
| `a` | [Float](/api-docs/clay-native/Float/) | Alpha component (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setVec2"><div class="plugin-name">clay</div><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 2D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `x` | [Float](/api-docs/clay-native/Float/) | X component  |
| `y` | [Float](/api-docs/clay-native/Float/) | Y component |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setVec3"><div class="plugin-name">clay</div><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 3D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `x` | [Float](/api-docs/clay-native/Float/) | X component  |
| `y` | [Float](/api-docs/clay-native/Float/) | Y component  |
| `z` | [Float](/api-docs/clay-native/Float/) | Z component |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setVec4"><div class="plugin-name">clay</div><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 4D vector uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `x` | [Float](/api-docs/clay-native/Float/) | X component  |
| `y` | [Float](/api-docs/clay-native/Float/) | Y component  |
| `z` | [Float](/api-docs/clay-native/Float/) | Z component  |
| `w` | [Float](/api-docs/clay-native/Float/) | W component |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFloatArray"><div class="plugin-name">clay</div><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a float array uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `array` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> | Array of float values |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTexture"><div class="plugin-name">clay</div><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a texture uniform value in the shader.


| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `slot` | [Int](/api-docs/clay-native/Int/) | Texture unit slot (0-based)  |
| `texture` | [Texture](/api-docs/clay-native/backend/Texture/) | Texture to bind |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setMat4FromTransform"><div class="plugin-name">clay</div><code><span class="field-name">setMat4FromTransform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4FromTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a 4x4 matrix uniform from a 2D transform.
Converts the 2D transform to a 4x4 matrix suitable for GPU usage.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | Target shader program  |
| `name` | [String](/api-docs/clay-native/String/) | Uniform variable name  |
| `transform` | [ceramic.Transform](/api-docs/clay-native/ceramic/Transform/) | 2D transformation to convert |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="customFloatAttributesSize"><div class="plugin-name">clay</div><code><span class="field-name">customFloatAttributesSize</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/ShaderImpl/" class="type-link">ShaderImpl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the total size of custom float attributes for a shader.
Used for vertex buffer layout calculations.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [ShaderImpl](/api-docs/clay-native/backend/ShaderImpl/) | The shader to analyze  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Total number of floats needed for custom attributes |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxIfStatementsByFragmentShader"><div class="plugin-name">clay</div><code><span class="field-name">maxIfStatementsByFragmentShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxIfStatementsByFragmentShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the maximum number of if-statements supported by fragment shaders.
Caches the result after first computation.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Maximum if-statements supported |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="canBatchWithMultipleTextures"><div class="plugin-name">clay</div><code><span class="field-name">canBatchWithMultipleTextures</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canBatchWithMultipleTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a shader supports multi-texture batching.
Multi-texture shaders can render multiple textures in a single draw call.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-native/backend/Shader/) | The shader to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the shader supports multi-texture batching |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">clay</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether hot-reloading of shader files is supported.
Clay backend supports watching shader files for changes.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Always returns true for Clay backend |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="SHADER_ATTRIBUTES"><div class="plugin-name">clay</div><code><span class="field-name">SHADER_ATTRIBUTES</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#SHADER_ATTRIBUTES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard shader vertex attributes: position, texture coordinates, color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="SHADER_ATTRIBUTES_MULTITEXTURE"><div class="plugin-name">clay</div><code><span class="field-name">SHADER_ATTRIBUTES_MULTITEXTURE</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#SHADER_ATTRIBUTES_MULTITEXTURE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extended attributes for multi-texture batching, includes texture ID per vertex

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeExtensions"><div class="plugin-name">clay</div><code><span class="field-name">removeExtensions</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#removeExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes OpenGL ES extension directives from shader source.
Used when targeting platforms that don't support or need these extensions.



| Name | Type | Description |
|------|------|-------------|
| `source` | [String](/api-docs/clay-native/String/) | Shader source code  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Source code with extension directives removed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="convertToGLES3"><div class="plugin-name">clay</div><code><span class="field-name">convertToGLES3</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">isFrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#convertToGLES3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts GLSL ES 1.0 shader source to GLSL ES 3.0 syntax.
Handles keyword changes and output variable declarations.

Key conversions:
- `attribute` → `in` (vertex shaders)
- `varying` → `out` (vertex) or `in` (fragment)
- `texture2D` → `texture`
- `gl_FragColor` → custom `fragColor` output



| Name | Type | Description |
|------|------|-------------|
| `source` | [String](/api-docs/clay-native/String/) | Original shader source code  |
| `isFrag` | [Bool](/api-docs/clay-native/Bool/) | True for fragment shaders, false for vertex shaders  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Converted GLSL ES 3.0 compatible source |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="processMultiTextureVertTemplate"><div class="plugin-name">clay</div><code><span class="field-name">processMultiTextureVertTemplate</span><span class="parenthesis">(</span><span class="arg-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">maxTextures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxIfs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#processMultiTextureVertTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes vertex shader template for multi-texture support.
Replaces ceramic-specific comment directives with actual GLSL code.

Directives:
- `//ceramic:multitexture/vertextextureid` → texture ID attribute declaration
- `//ceramic:multitexture/textureid` → texture ID varying declaration
- `//ceramic:multitexture/assigntextureid` → texture ID assignment



| Name | Type | Description |
|------|------|-------------|
| `vertSource` | [String](/api-docs/clay-native/String/) | Vertex shader template source  |
| `maxTextures` | [Int](/api-docs/clay-native/Int/) | Maximum textures supported by GPU  |
| `maxIfs` | [Int](/api-docs/clay-native/Int/) | Maximum if-statements supported by fragment shader  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Processed vertex shader source |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="processMultiTextureFragTemplate"><div class="plugin-name">clay</div><code><span class="field-name">processMultiTextureFragTemplate</span><span class="parenthesis">(</span><span class="arg-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">maxTextures</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxIfs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#processMultiTextureFragTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processes fragment shader template for multi-texture support.
Generates texture sampling code with conditional logic based on texture ID.

Directives:
- `//ceramic:multitexture` → marks shader for processing
- `//ceramic:multitexture/texture` → generates texture uniform declarations
- `//ceramic:multitexture/textureid` → texture ID varying declaration
- `//ceramic:multitexture/if` → starts conditional texture sampling block
- `//ceramic:multitexture/endif` → ends conditional block



| Name | Type | Description |
|------|------|-------------|
| `fragSource` | [String](/api-docs/clay-native/String/) | Fragment shader template source  |
| `maxTextures` | [Int](/api-docs/clay-native/Int/) | Maximum textures supported by GPU  |
| `maxIfs` | [Int](/api-docs/clay-native/Int/) | Maximum if-statements supported by fragment shader  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Processed fragment shader with multi-texture support |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeMaxIfStatementsByFragmentShaderIfNeeded"><div class="plugin-name">clay</div><code><span class="field-name">computeMaxIfStatementsByFragmentShaderIfNeeded</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">maxIfs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">32</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMaxIfStatementsByFragmentShaderIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines the maximum number of if-statements supported by the GPU's fragment shader.
Tests by compiling shaders with varying numbers of conditionals.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `maxIfs` | [Int](/api-docs/clay-native/Int/) | `32` | Starting maximum to test (halves on failure) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="generateIfStatements"><div class="plugin-name">clay</div><code><span class="field-name">generateIfStatements</span><span class="parenthesis">(</span><span class="arg-name">maxIfs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#generateIfStatements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a series of if-else statements for shader compilation testing.
Used to determine GPU conditional complexity limits.



| Name | Type | Description |
|------|------|-------------|
| `maxIfs` | [Int](/api-docs/clay-native/Int/) | Number of if-statements to generate  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | GLSL code with chained if-else statements |


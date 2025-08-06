---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Shaders
target: Unity
permalink: api-docs/unity/backend/Shaders/
---

# Shaders

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Shaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Shaders</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/spec/Shaders/">spec.Shaders</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">unity</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/LoadShaderOptions/" class="type-link">LoadShaderOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/unity/String/) | |
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/unity/ceramic/ShaderAttribute/)> | *(optional)* |
| `options` | [Null](/api-docs/unity/Null/)<[LoadShaderOptions](/api-docs/unity/backend/LoadShaderOptions/)> | *(optional)* |
| `_done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">unity</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clone"><div class="plugin-name">unity</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |

| Returns |
|---------|
| [Shader](/api-docs/unity/backend/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="customFloatAttributesSize"><div class="plugin-name">unity</div><code><span class="field-name">customFloatAttributesSize</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/ShaderImpl/" class="type-link">ShaderImpl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [ShaderImpl](/api-docs/unity/backend/ShaderImpl/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setInt"><div class="plugin-name">unity</div><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloat"><div class="plugin-name">unity</div><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColor"><div class="plugin-name">unity</div><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `r` | [Float](/api-docs/unity/Float/) |
| `g` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |
| `a` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec2"><div class="plugin-name">unity</div><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec3"><div class="plugin-name">unity</div><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec4"><div class="plugin-name">unity</div><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |
| `w` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloatArray"><div class="plugin-name">unity</div><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `array` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTexture"><div class="plugin-name">unity</div><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `slot` | [Int](/api-docs/unity/Int/) |
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMat4FromTransform"><div class="plugin-name">unity</div><code><span class="field-name">setMat4FromTransform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4FromTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |
| `name` | [String](/api-docs/unity/String/) |
| `transform` | [ceramic.Transform](/api-docs/unity/ceramic/Transform/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="maxIfStatementsByFragmentShader"><div class="plugin-name">unity</div><code><span class="field-name">maxIfStatementsByFragmentShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxIfStatementsByFragmentShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canBatchWithMultipleTextures"><div class="plugin-name">unity</div><code><span class="field-name">canBatchWithMultipleTextures</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canBatchWithMultipleTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/unity/backend/Shader/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">unity</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


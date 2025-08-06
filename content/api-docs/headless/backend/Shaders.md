---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Shaders
target: Headless
permalink: api-docs/headless/backend/Shaders/
---

# Shaders

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Shaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Shaders</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Shaders/">spec.Shaders</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="fromSource"><div class="plugin-name">headless</div><code><span class="field-name">fromSource</span><span class="parenthesis">(</span><span class="arg-name">vertSource</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fragSource</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#fromSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `vertSource` | [String](/api-docs/headless/String/) | |
| `fragSource` | [String](/api-docs/headless/String/) | |
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/headless/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/headless/ceramic/ShaderAttribute/)> | *(optional)* |

| Returns |
|---------|
| [Shader](/api-docs/headless/backend/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">headless</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clone"><div class="plugin-name">headless</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |

| Returns |
|---------|
| [Shader](/api-docs/headless/backend/Shader/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setInt"><div class="plugin-name">headless</div><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloat"><div class="plugin-name">headless</div><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColor"><div class="plugin-name">headless</div><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `r` | [Float](/api-docs/headless/Float/) |
| `g` | [Float](/api-docs/headless/Float/) |
| `b` | [Float](/api-docs/headless/Float/) |
| `a` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec2"><div class="plugin-name">headless</div><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec3"><div class="plugin-name">headless</div><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |
| `z` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec4"><div class="plugin-name">headless</div><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |
| `z` | [Float](/api-docs/headless/Float/) |
| `w` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloatArray"><div class="plugin-name">headless</div><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `array` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTexture"><div class="plugin-name">headless</div><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `slot` | [Int](/api-docs/headless/Int/) |
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMat4FromTransform"><div class="plugin-name">headless</div><code><span class="field-name">setMat4FromTransform</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4FromTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |
| `name` | [String](/api-docs/headless/String/) |
| `transform` | [ceramic.Transform](/api-docs/headless/ceramic/Transform/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="customFloatAttributesSize"><div class="plugin-name">headless</div><code><span class="field-name">customFloatAttributesSize</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/ShaderImpl/" class="type-link">ShaderImpl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [ShaderImpl](/api-docs/headless/backend/ShaderImpl/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="maxIfStatementsByFragmentShader"><div class="plugin-name">headless</div><code><span class="field-name">maxIfStatementsByFragmentShader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxIfStatementsByFragmentShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canBatchWithMultipleTextures"><div class="plugin-name">headless</div><code><span class="field-name">canBatchWithMultipleTextures</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canBatchWithMultipleTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [Shader](/api-docs/headless/backend/Shader/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">headless</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


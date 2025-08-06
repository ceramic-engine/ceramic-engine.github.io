---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: ShaderImpl
target: Unity
permalink: api-docs/unity/backend/ShaderImpl/
---

# ShaderImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/ShaderImpl.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.ShaderImpl</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="clone"><div class="plugin-name">unity</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="arg-name">fromShader</span><span class="operator">:</span> <a href="#" class="type-link">ShaderImpl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ShaderImpl</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fromShader` | [ShaderImpl](/api-docs/unity/backend/ShaderImpl/) |

| Returns |
|---------|
| [ShaderImpl](/api-docs/unity/backend/ShaderImpl/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="path"><div class="plugin-name">unity</div><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unityShader"><div class="plugin-name">unity</div><code><span class="field-name">unityShader</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#unityShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="customAttributes"><div class="plugin-name">unity</div><code><span class="field-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="isBatchingMultiTexture"><div class="plugin-name">unity</div><code><span class="field-name">isBatchingMultiTexture</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBatchingMultiTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setInt"><div class="plugin-name">unity</div><code><span class="field-name">setInt</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloat"><div class="plugin-name">unity</div><code><span class="field-name">setFloat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColor"><div class="plugin-name">unity</div><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `r` | [Float](/api-docs/unity/Float/) |
| `g` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |
| `a` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec2"><div class="plugin-name">unity</div><code><span class="field-name">setVec2</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec3"><div class="plugin-name">unity</div><code><span class="field-name">setVec3</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVec4"><div class="plugin-name">unity</div><code><span class="field-name">setVec4</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |
| `w` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFloatArray"><div class="plugin-name">unity</div><code><span class="field-name">setFloatArray</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `array` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTexture"><div class="plugin-name">unity</div><code><span class="field-name">setTexture</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `slot` | [Int](/api-docs/unity/Int/) |
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMat4FromTransform"><div class="plugin-name">unity</div><code><span class="field-name">setMat4FromTransform</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMat4FromTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `transform` | [ceramic.Transform](/api-docs/unity/ceramic/Transform/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">unityShader</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customAttributes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ShaderAttribute/" class="type-link">ceramic.ShaderAttribute</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `unityShader` | [Dynamic](/api-docs/unity/Dynamic/) | |
| `customAttributes` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ceramic.ShaderAttribute](/api-docs/unity/ceramic/ShaderAttribute/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description has-plugin" id="MAX_PARAMS_DIRTY"><div class="plugin-name">unity</div><code><span class="field-name">MAX_PARAMS_DIRTY</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_PARAMS_DIRTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="paramsVersion"><div class="plugin-name">unity</div><code><span class="field-name">paramsVersion</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#paramsVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="intParams"><div class="plugin-name">unity</div><code><span class="field-name">intParams</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#intParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="floatParams"><div class="plugin-name">unity</div><code><span class="field-name">floatParams</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#floatParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorParams"><div class="plugin-name">unity</div><code><span class="field-name">colorParams</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#colorParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vec2Params"><div class="plugin-name">unity</div><code><span class="field-name">vec2Params</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#vec2Params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vec3Params"><div class="plugin-name">unity</div><code><span class="field-name">vec3Params</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#vec3Params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vec4Params"><div class="plugin-name">unity</div><code><span class="field-name">vec4Params</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#vec4Params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="floatArrayParams"><div class="plugin-name">unity</div><code><span class="field-name">floatArrayParams</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#floatArrayParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textureParams"><div class="plugin-name">unity</div><code><span class="field-name">textureParams</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#textureParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textureSlots"><div class="plugin-name">unity</div><code><span class="field-name">textureSlots</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textureSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mat4Params"><div class="plugin-name">unity</div><code><span class="field-name">mat4Params</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#mat4Params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sanitizeUniformName"><div class="plugin-name">unity</div><code><span class="field-name">sanitizeUniformName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#sanitizeUniformName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">unity</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | backend.MaterialData |


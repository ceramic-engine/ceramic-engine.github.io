---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: JsonValue
target: Headless
permalink: api-docs/headless/spine/support/utils/JsonValue/
---

# JsonValue

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/support/utils/JsonValue.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.support.utils.JsonValue</strong> (Interface) → <a href="/api-docs/headless/spine/support/utils/JsonChild/">JsonChild</a>, <a href="/api-docs/headless/spine/support/utils/JsonDynamic/">JsonDynamic</a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="size"><div class="plugin-name">spine</div><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="next"><div class="plugin-name">spine</div><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="child"><div class="plugin-name">spine</div><code><span class="field-name">child</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#child"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">spine</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getAtIndex"><div class="plugin-name">spine</div><code><span class="field-name">getAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#getAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="has"><div class="plugin-name">spine</div><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getChild"><div class="plugin-name">spine</div><code><span class="field-name">getChild</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#getChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getString"><div class="plugin-name">spine</div><code><span class="field-name">getString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `key` | [String](/api-docs/headless/String/) | |
| `defaultValue` | [String](/api-docs/headless/String/) | `null` |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFloat"><div class="plugin-name">spine</div><code><span class="field-name">getFloat</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/Either/" class="type-link">Either</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `key` | [Either](/api-docs/headless/spine/support/utils/Either/)<[Int](/api-docs/headless/Int/), [String](/api-docs/headless/String/)> | |
| `defaultValue` | [Float](/api-docs/headless/Float/) | `0` |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getInt"><div class="plugin-name">spine</div><code><span class="field-name">getInt</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `key` | [String](/api-docs/headless/String/) | |
| `defaultValue` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getBoolean"><div class="plugin-name">spine</div><code><span class="field-name">getBoolean</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getBoolean"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `key` | [String](/api-docs/headless/String/) | |
| `defaultValue` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="require"><div class="plugin-name">spine</div><code><span class="field-name">require</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">JsonValue</a></code><a class="header-anchor" href="#require"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asString"><div class="plugin-name">spine</div><code><span class="field-name">asString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#asString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asFloat"><div class="plugin-name">spine</div><code><span class="field-name">asFloat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#asFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asInt"><div class="plugin-name">spine</div><code><span class="field-name">asInt</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#asInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asFloatArray"><div class="plugin-name">spine</div><code><span class="field-name">asFloatArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/FloatArray/" class="type-link">FloatArray</a></code><a class="header-anchor" href="#asFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [FloatArray](/api-docs/headless/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="asShortArray"><div class="plugin-name">spine</div><code><span class="field-name">asShortArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/ShortArray/" class="type-link">ShortArray</a></code><a class="header-anchor" href="#asShortArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ShortArray](/api-docs/headless/spine/support/utils/ShortArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isString"><div class="plugin-name">spine</div><code><span class="field-name">isString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isArray"><div class="plugin-name">spine</div><code><span class="field-name">isArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |


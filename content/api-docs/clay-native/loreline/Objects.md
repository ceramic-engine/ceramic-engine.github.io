---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Objects
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Objects/
---

# Objects

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Objects.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Objects</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="isFields"><code><span class="field-name">isFields</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getField"><code><span class="field-name">getField</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#getField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-native/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/clay-native/Any/) |
| `name` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFields"><code><span class="field-name">getFields</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-native/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setField"><code><span class="field-name">setField</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-native/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/clay-native/Any/) |
| `name` | [String](/api-docs/clay-native/String/) |
| `value` | [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fieldExists"><code><span class="field-name">fieldExists</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fieldExists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-native/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/clay-native/Any/) |
| `name` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createFields"><code><span class="field-name">createFields</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#createFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `interpreter` | [Interpreter](/api-docs/clay-native/loreline/Interpreter/) | *(optional)* |
| `type` | [String](/api-docs/clay-native/String/) | *(optional)* |
| `node` | [Node](/api-docs/clay-native/loreline/Node/) | *(optional)* |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |


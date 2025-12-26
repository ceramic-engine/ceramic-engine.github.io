---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Objects
target: Unity
permalink: api-docs/unity/loreline/Objects/
---

# Objects

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Objects.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Objects</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="isFields"><code><span class="field-name">isFields</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getField"><code><span class="field-name">getField</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#getField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/unity/Any/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFields"><code><span class="field-name">getFields</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setField"><code><span class="field-name">setField</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/unity/Any/) |
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Any](/api-docs/unity/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fieldExists"><code><span class="field-name">fieldExists</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fieldExists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) |
| `fields` | [Any](/api-docs/unity/Any/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createFields"><code><span class="field-name">createFields</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#createFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `interpreter` | [Interpreter](/api-docs/unity/loreline/Interpreter/) | *(optional)* |
| `type` | [String](/api-docs/unity/String/) | *(optional)* |
| `node` | [Node](/api-docs/unity/loreline/Node/) | *(optional)* |

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


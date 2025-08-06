---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EXTDisjointTimerQuery
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/EXTDisjointTimerQuery/
---

# EXTDisjointTimerQuery

<div class="type-hierarchy"><strong>js.html.webgl.extension.EXTDisjointTimerQuery</strong> (extern class)</div>

The EXT_disjoint_timer_query extension is part of the WebGL API and provides a way to measure the duration of a set of GL commands, without stalling the rendering pipeline.

Documentation [EXT_disjoint_timer_query](https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query></div>


## Static Members

<div class="signature field-var has-description" id="QUERY_COUNTER_BITS_EXT"><code><span class="field-name">QUERY_COUNTER_BITS_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#QUERY_COUNTER_BITS_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `GLint` indicating the number of bits used to hold the query result for the given target.

<hr class="field-separator" />

<div class="signature field-var has-description" id="CURRENT_QUERY_EXT"><code><span class="field-name">CURRENT_QUERY_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CURRENT_QUERY_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `WebGLQuery` object, which is the currently active query for the given target.

<hr class="field-separator" />

<div class="signature field-var has-description" id="QUERY_RESULT_EXT"><code><span class="field-name">QUERY_RESULT_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#QUERY_RESULT_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `GLuint64EXT` containing the query result.

<hr class="field-separator" />

<div class="signature field-var has-description" id="QUERY_RESULT_AVAILABLE_EXT"><code><span class="field-name">QUERY_RESULT_AVAILABLE_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#QUERY_RESULT_AVAILABLE_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `GLboolean` indicating whether or not a query result is available.

<hr class="field-separator" />

<div class="signature field-var has-description" id="TIME_ELAPSED_EXT"><code><span class="field-name">TIME_ELAPSED_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TIME_ELAPSED_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Elapsed time (in nanoseconds).

<hr class="field-separator" />

<div class="signature field-var has-description" id="TIMESTAMP_EXT"><code><span class="field-name">TIMESTAMP_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TIMESTAMP_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current time.

<hr class="field-separator" />

<div class="signature field-var has-description" id="GPU_DISJOINT_EXT"><code><span class="field-name">GPU_DISJOINT_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GPU_DISJOINT_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `GLboolean` indicating whether or not the GPU performed any disjoint operation.

## Instance Members

<div class="signature field-method has-description" id="createQueryEXT"><code><span class="field-name">createQueryEXT</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a></code><a class="header-anchor" href="#createQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `WebGLQuery`.
| Returns |
|---------|
| [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteQueryEXT"><code><span class="field-name">deleteQueryEXT</span><span class="parenthesis">(</span><span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a given `WebGLQuery`.

| Name | Type |
|------|------|
| `query` | [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isQueryEXT"><code><span class="field-name">isQueryEXT</span><span class="parenthesis">(</span><span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if a given object is a `WebGLQuery`.

| Name | Type |
|------|------|
| `query` | [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beginQueryEXT"><code><span class="field-name">beginQueryEXT</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The timer starts when all commands prior to `beginQueryEXT` have been fully executed.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `query` | [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endQueryEXT"><code><span class="field-name">endQueryEXT</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The timer stops when all commands prior to `endQueryEXT` have been fully executed.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queryCounterEXT"><code><span class="field-name">queryCounterEXT</span><span class="parenthesis">(</span><span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#queryCounterEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Records the current time into the corresponding query object.

| Name | Type |
|------|------|
| `query` | [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |
| `target` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getQueryEXT"><code><span class="field-name">getQueryEXT</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getQueryEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns information about a query target.

| Name | Type |
|------|------|
| `target` | [Int](/api-docs/clay-web/Int/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getQueryObjectEXT"><code><span class="field-name">getQueryObjectEXT</span><span class="parenthesis">(</span><span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/Query/" class="type-link">js.html.webgl.Query</a><span class="operator">,</span> <span class="arg-name">pname</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getQueryObjectEXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the state of a query object.

| Name | Type |
|------|------|
| `query` | [js.html.webgl.Query](/api-docs/clay-web/js/html/webgl/Query/) |
| `pname` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |


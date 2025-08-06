---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Performance
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Performance/
---

# Performance

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Performance</strong> (extern class)</div>

The `Performance` interface provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.

Documentation [Performance](https://developer.mozilla.org/en-US/docs/Web/API/Performance) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Performance$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Performance></div>


## Instance Members

<div class="signature field-var has-description" id="timeOrigin"><code><span class="field-name">timeOrigin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timeOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the high resolution timestamp of the start time of the performance measurement.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timing"><code><span class="field-name">timing</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PerformanceTiming/" class="type-link">PerformanceTiming</a></code><a class="header-anchor" href="#timing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `PerformanceTiming` object containing latency-related performance information

<hr class="field-separator" />

<div class="signature field-var has-description" id="navigation"><code><span class="field-name">navigation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PerformanceNavigation/" class="type-link">PerformanceNavigation</a></code><a class="header-anchor" href="#navigation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `PerformanceNavigation` object that provides useful context about the operations included in the times listed in `timing`, including whether the page was a load or a refresh, how many redirections occurred, and so forth.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onresourcetimingbufferfull"><code><span class="field-name">onresourcetimingbufferfull</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onresourcetimingbufferfull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventTarget` which is a callback that will be called when the `resourcetimingbufferfull` event is fired.

<hr class="field-separator" />

<div class="signature field-method has-description" id="now"><code><span class="field-name">now</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#now"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMHighResTimeStamp` representing the number of milliseconds elapsed since a reference instant.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a jsonizer returning a json object representing the `Performance` object.
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEntries"><code><span class="field-name">getEntries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/PerformanceEntry/" class="type-link">PerformanceEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `PerformanceEntry` objects based on the given filter.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[PerformanceEntry](/api-docs/clay-web/js/html/PerformanceEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEntriesByType"><code><span class="field-name">getEntriesByType</span><span class="parenthesis">(</span><span class="arg-name">entryType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/PerformanceEntry/" class="type-link">PerformanceEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEntriesByType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `PerformanceEntry` objects of the given entry type.

| Name | Type |
|------|------|
| `entryType` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[PerformanceEntry](/api-docs/clay-web/js/html/PerformanceEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEntriesByName"><code><span class="field-name">getEntriesByName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">entryType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/PerformanceEntry/" class="type-link">PerformanceEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEntriesByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `PerformanceEntry` objects based on the given name and entry type.

| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `entryType` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[PerformanceEntry](/api-docs/clay-web/js/html/PerformanceEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearResourceTimings"><code><span class="field-name">clearResourceTimings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearResourceTimings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all `PerformanceEntry` with a `PerformanceEntry.entryType` of "`resource`" from the browser's performance data buffer.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setResourceTimingBufferSize"><code><span class="field-name">setResourceTimingBufferSize</span><span class="parenthesis">(</span><span class="arg-name">maxSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setResourceTimingBufferSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the browser's resource timing buffer size to the specified number of "`resource`" `PerformanceEntry.entryType` `PerformanceEntry` objects.

| Name | Type |
|------|------|
| `maxSize` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mark"><code><span class="field-name">mark</span><span class="parenthesis">(</span><span class="arg-name">markName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `DOMHighResTimeStamp` in the browser's performance entry buffer with the given name.

| Name | Type |
|------|------|
| `markName` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearMarks"><code><span class="field-name">clearMarks</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">markName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearMarks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the given mark from the browser's performance entry buffer.

| Name | Type | Default |
|------|------|---------|
| `markName` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="measure"><code><span class="field-name">measure</span><span class="parenthesis">(</span><span class="arg-name">measureName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startMark</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endMark</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#measure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a named `DOMHighResTimeStamp` in the browser's performance entry buffer between two specified marks (known as the start mark and end mark, respectively).

| Name | Type | Default |
|------|------|---------|
| `measureName` | [String](/api-docs/clay-web/String/) | |
| `startMark` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `endMark` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearMeasures"><code><span class="field-name">clearMeasures</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">measureName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearMeasures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the given measure from the browser's performance entry buffer.

| Name | Type | Default |
|------|------|---------|
| `measureName` | [String](/api-docs/clay-web/String/) | *(optional)* |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TimeRanges
target: Clay (Web)
permalink: api-docs/clay-web/js/html/TimeRanges/
---

# TimeRanges

<div class="type-hierarchy"><strong>js.html.TimeRanges</strong> (extern class)</div>

The `TimeRanges` interface is used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the `audio` and `video` elements.

Documentation [TimeRanges](https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges></div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned long` representing the number of time ranges represented by the time range object.

<hr class="field-separator" />

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the time for the start of the range with the specified index.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the time for the end of the specified range.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PerformanceEntry
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PerformanceEntry/
---

# PerformanceEntry

<div class="type-hierarchy"><strong>js.html.PerformanceEntry</strong> (extern class)</div>

The `PerformanceEntry` object encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance `mark` or `measure` (for example by calling the `mark()` method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).

Documentation [PerformanceEntry](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry></div>


## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A value that further specifies the value returned by the `PerformanceEntry.entryType` property. The value of both depends on the subtype. See property page for valid values.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entryType"><code><span class="field-name">entryType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#entryType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the type of performance metric such as, for example, "`mark`". See property page for valid values.

<hr class="field-separator" />

<div class="signature field-var has-description" id="startTime"><code><span class="field-name">startTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#startTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMHighResTimeStamp` representing the starting time for the performance metric.

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMHighResTimeStamp` representing the time value of the duration of the performance event.

<hr class="field-separator" />

<div class="signature field-method no-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |


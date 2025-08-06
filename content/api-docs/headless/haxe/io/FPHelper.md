---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FPHelper
target: Headless
permalink: api-docs/headless/haxe/io/FPHelper/
---

# FPHelper

<div class="type-hierarchy"><strong>haxe.io.FPHelper</strong> (Class)</div>

Helper that converts between floating point and binary representation.
Always works in low-endian encoding.

## Static Members

<div class="signature field-method no-description" id="i32ToFloat"><code><span class="field-name">i32ToFloat</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#i32ToFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="floatToI32"><code><span class="field-name">floatToI32</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#floatToI32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

## Private Members

<div class="signature field-var no-description" id="helper"><code><span class="field-name">helper</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/DataView/" class="type-link">js.lib.DataView</a></code><a class="header-anchor" href="#helper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


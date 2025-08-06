---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TouchInfo
target: Headless
permalink: api-docs/headless/ceramic/TouchInfo/
---

# TouchInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TouchInfo.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TouchInfo</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="touchIndex"><code><span class="field-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#touchIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the input is a touch input, this is the index of the touch.
Otherwise it will be -1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buttonId"><code><span class="field-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#buttonId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the input is a mouse input, this is the id of the mouse button.
Otherwise it will be -1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X coordinate of the input (relative to screen).

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y coordinate of the input (relative to screen).

<hr class="field-separator" />

<div class="signature field-var has-description" id="hits"><code><span class="field-name">hits</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether these info do hit the related visual. This is usually `true`,
Except when we have touch/mouse up events outside of a visual that
initially received a down event.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">hits</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/headless/Int/) | * If the input is a touch input, this is the index of the touch. Otherwise it will be -1. |
| `buttonId` | [Int](/api-docs/headless/Int/) | * If the input is a mouse input, this is the id of the mouse button. Otherwise it will be -1. |
| `x` | [Float](/api-docs/headless/Float/) | * X coordinate of the input (relative to screen). |
| `y` | [Float](/api-docs/headless/Float/) | * Y coordinate of the input (relative to screen). |
| `hits` | [Bool](/api-docs/headless/Bool/) | * Whether these info do hit the related visual. This is usually `true`, Except when we have touch/mouse up events outside of a visual that initially received a down event. |

## Private Members

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


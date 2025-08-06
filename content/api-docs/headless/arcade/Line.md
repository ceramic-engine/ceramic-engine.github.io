---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: Line
target: Headless
permalink: api-docs/headless/arcade/Line/
---

# Line

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/Line.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.Line</strong> (Class)</div>

Represents a line segment with a start and end point.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x1"><div class="plugin-name">arcade</div><code><span class="field-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the start point.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y1"><div class="plugin-name">arcade</div><code><span class="field-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the start point.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x2"><div class="plugin-name">arcade</div><code><span class="field-name">x2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the end point.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y2"><div class="plugin-name">arcade</div><code><span class="field-name">y2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the end point.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="length"><div class="plugin-name">arcade</div><code><span class="field-name">length</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the length of the line segment.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The length of the line segment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fromAngle"><div class="plugin-name">arcade</div><code><span class="field-name">fromAngle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fromAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets this line's start and end points based on the given angle and length.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | The x coordinate of the start point.  |
| `y` | [Float](/api-docs/headless/Float/) | The y coordinate of the start point.  |
| `angle` | [Float](/api-docs/headless/Float/) | The angle in radians.  |
| `length` | [Float](/api-docs/headless/Float/) | The length of the line. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Line instance.



| Name | Type | Description |
|------|------|-------------|
| `x1` | [Float](/api-docs/headless/Float/) | The x coordinate of the start point.  |
| `y1` | [Float](/api-docs/headless/Float/) | The y coordinate of the start point.  |
| `x2` | [Float](/api-docs/headless/Float/) | The x coordinate of the end point.  |
| `y2` | [Float](/api-docs/headless/Float/) | The y coordinate of the end point. |


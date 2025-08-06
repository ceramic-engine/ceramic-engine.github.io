---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: Point
target: Headless
permalink: api-docs/headless/arcade/Point/
---

# Point

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/Point.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.Point</strong> (Class)</div>

A 2D point with x and y coordinates.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">arcade</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of this point.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">arcade</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of this point.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setToPolar"><div class="plugin-name">arcade</div><code><span class="field-name">setToPolar</span><span class="parenthesis">(</span><span class="arg-name">azimuth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">asDegrees</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setToPolar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the x and y values of this Point based on polar coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `azimuth` | [Float](/api-docs/headless/Float/) | | The angle in radians (or degrees if asDegrees is true).  |
| `radius` | [Float](/api-docs/headless/Float/) | `1` | The distance from the origin.  |
| `asDegrees` | [Bool](/api-docs/headless/Bool/) | `false` | Whether the azimuth is given in degrees (true) or radians (false). |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Point instance.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | The x coordinate.  |
| `y` | [Float](/api-docs/headless/Float/) | The y coordinate. |

## Private Members

<div class="signature field-method has-description has-plugin" id="degToRad"><div class="plugin-name">arcade</div><code><span class="field-name">degToRad</span><span class="parenthesis">(</span><span class="arg-name">deg</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#degToRad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts degrees to radians.



| Name | Type | Description |
|------|------|-------------|
| `deg` | [Float](/api-docs/headless/Float/) | The angle in degrees.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The angle in radians. |


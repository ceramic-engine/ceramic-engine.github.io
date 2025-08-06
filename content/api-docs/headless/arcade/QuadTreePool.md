---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: QuadTreePool
target: Headless
permalink: api-docs/headless/arcade/QuadTreePool/
---

# QuadTreePool

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/QuadTree.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.QuadTreePool</strong> (Class)</div>

Object pool for QuadTree instances to reduce garbage collection overhead.

## Instance Members

<div class="signature field-method no-description has-plugin" id="clearPool"><div class="plugin-name">arcade</div><code><span class="field-name">clearPool</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearPool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="create"><div class="plugin-name">arcade</div><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxObjects</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxLevels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/QuadTree/" class="type-link">QuadTree</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/headless/Float/) | |
| `y` | [Float](/api-docs/headless/Float/) | |
| `width` | [Float](/api-docs/headless/Float/) | |
| `height` | [Float](/api-docs/headless/Float/) | |
| `maxObjects` | [Int](/api-docs/headless/Int/) | `10` |
| `maxLevels` | [Int](/api-docs/headless/Int/) | `4` |
| `level` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [QuadTree](/api-docs/headless/arcade/QuadTree/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="recycleAll"><div class="plugin-name">arcade</div><code><span class="field-name">recycleAll</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="recycle"><div class="plugin-name">arcade</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="arg-name">quadTree</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/QuadTree/" class="type-link">QuadTree</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `quadTree` | [QuadTree](/api-docs/headless/arcade/QuadTree/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members


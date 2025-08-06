---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: ArcadeSortGroupRightLeft
target: Headless
permalink: api-docs/headless/ceramic/ArcadeSortGroupRightLeft/
---

# ArcadeSortGroupRightLeft

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/ArcadeSortGroup.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ArcadeSortGroupRightLeft</strong> (Class)</div>

Specialized merge sort implementation for sorting physics bodies.

This class provides a stable, high-performance sort specifically optimized for
Arcade physics collision detection. The implementation is based on Haxe's standard
library merge sort but has been heavily optimized with inlined functions and
specialized comparison logic for physics bodies.

Four different sort orders are provided:
- ArcadeSortGroupLeftRight: Sort by X position ascending (left to right)
- ArcadeSortGroupRightLeft: Sort by X position descending (right to left)
- ArcadeSortGroupTopBottom: Sort by Y position ascending (top to bottom)
- ArcadeSortGroupBottomTop: Sort by Y position descending (bottom to top)

<div class="see"><strong>See:</strong> ArcadeWorld for usage in collision detection</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="sort"><div class="plugin-name">arcade</div><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts an array of visuals by their physics body position.

This operation modifies the array in place and preserves the relative order
of visuals with the same position (stable sort). Visuals without physics
bodies are treated as having position 0.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> | The array of visuals to sort |

## Private Members

<div class="signature field-method has-description has-plugin" id="cmp"><div class="plugin-name">arcade</div><code><span class="field-name">cmp</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two visuals based on their physics body X position (reversed).


| Name | Type | Description |
|------|------|-------------|
| `a` | [Visual](/api-docs/headless/ceramic/Visual/) | First visual to compare  |
| `b` | [Visual](/api-docs/headless/ceramic/Visual/) | Second visual to compare  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | 1 if b.body.x >= a.body.x, -1 otherwise, 0 if either has no body |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rec"><div class="plugin-name">arcade</div><code><span class="field-name">rec</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="doMerge"><div class="plugin-name">arcade</div><code><span class="field-name">doMerge</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len1</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len2</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `pivot` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |
| `len1` | [Int](/api-docs/headless/Int/) |
| `len2` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="rotate"><div class="plugin-name">arcade</div><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `mid` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="gcd"><div class="plugin-name">arcade</div><code><span class="field-name">gcd</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gcd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [Int](/api-docs/headless/Int/) |
| `n` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="upper"><div class="plugin-name">arcade</div><code><span class="field-name">upper</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#upper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |
| `val` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lower"><div class="plugin-name">arcade</div><code><span class="field-name">lower</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lower"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |
| `val` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="swap"><div class="plugin-name">arcade</div><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `i` | [Int](/api-docs/headless/Int/) |
| `j` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="compare"><div class="plugin-name">arcade</div><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `i` | [Int](/api-docs/headless/Int/) |
| `j` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |


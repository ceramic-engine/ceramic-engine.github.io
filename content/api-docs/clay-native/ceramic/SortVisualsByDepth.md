---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SortVisualsByDepth
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SortVisualsByDepth/
---

# SortVisualsByDepth

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SortVisualsByDepth.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SortVisualsByDepth</strong> (Class)</div>

Simplified high-performance stable merge sort for Visual arrays based on depth only.

SortVisualsByDepth provides a streamlined sorting algorithm that orders visuals
purely by their depth property, ignoring other rendering criteria like texture
or blending mode. This makes it faster than SortVisuals when you only need
depth-based ordering.

Key characteristics:
- Sorts by depth only (higher depth values render on top)
- Stable sort: preserves relative order of visuals with equal depth
- Same optimizations as SortVisuals (inlining, unsafe access, insertion sort for small arrays)
- Faster than full SortVisuals when texture batching is not a concern

Use cases:
- UI elements where depth is the primary ordering criterion
- Debug visualizations
- Scenarios where draw call batching is less important than simplicity

Example usage:
```haxe
var visuals:Array<Visual> = [...];
SortVisualsByDepth.sort(visuals); // Sorts in place by depth only
```

<div class="see"><strong>See:</strong> ceramic.SortVisuals For complete rendering order sorting, ceramic.Visual.depth For the depth property</div>


## Static Members

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts an array of Visual objects in place by depth value only.

This is a simplified version of SortVisuals.sort() that only considers
the depth property. Visuals with higher depth values will be sorted
after (rendered on top of) visuals with lower depth values.

The sort is stable, preserving the relative order of visuals with
equal depth values. This operation modifies the array in place.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> | The array of visuals to sort by depth. Modified in place. If null, behavior is undefined. |

## Private Members

<div class="signature field-method has-description" id="cmp"><code><span class="field-name">cmp</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two visuals by depth only.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Visual](/api-docs/clay-native/ceramic/Visual/) | First visual to compare  |
| `b` | [Visual](/api-docs/clay-native/ceramic/Visual/) | Second visual to compare  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | -1 if a has lower depth, 1 if a has higher depth, 0 if equal |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rec"><code><span class="field-name">rec</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `from` | [Int](/api-docs/clay-native/Int/) |
| `to` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doMerge"><code><span class="field-name">doMerge</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `from` | [Int](/api-docs/clay-native/Int/) |
| `pivot` | [Int](/api-docs/clay-native/Int/) |
| `to` | [Int](/api-docs/clay-native/Int/) |
| `len1` | [Int](/api-docs/clay-native/Int/) |
| `len2` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rotate"><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `from` | [Int](/api-docs/clay-native/Int/) |
| `mid` | [Int](/api-docs/clay-native/Int/) |
| `to` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gcd"><code><span class="field-name">gcd</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gcd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [Int](/api-docs/clay-native/Int/) |
| `n` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="upper"><code><span class="field-name">upper</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#upper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `from` | [Int](/api-docs/clay-native/Int/) |
| `to` | [Int](/api-docs/clay-native/Int/) |
| `val` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lower"><code><span class="field-name">lower</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lower"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `from` | [Int](/api-docs/clay-native/Int/) |
| `to` | [Int](/api-docs/clay-native/Int/) |
| `val` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="swap"><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `i` | [Int](/api-docs/clay-native/Int/) |
| `j` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-native/Array/)<[Visual](/api-docs/clay-native/ceramic/Visual/)> |
| `i` | [Int](/api-docs/clay-native/Int/) |
| `j` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |


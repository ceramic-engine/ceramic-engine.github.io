---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SortVisuals
target: Headless
permalink: api-docs/headless/ceramic/SortVisuals/
---

# SortVisuals

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SortVisuals.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SortVisuals</strong> (Class)</div>

High-performance stable merge sort implementation specifically optimized for Visual arrays.

SortVisuals provides a specialized sorting algorithm for rendering order in Ceramic.
It implements a stable merge sort that preserves the relative order of visuals with
equal sorting criteria, which is crucial for consistent rendering behavior across
all platforms.

The sorting criteria hierarchy:
1. Invisible/untouchable visuals are sorted first (behind everything)
2. Render target priority (higher priority renders on top)
3. Depth value (higher depth renders on top)
4. For Quads/Meshes with same depth:
   - Texture index (lower index renders on top for batching efficiency)
   - Blending mode (for draw call batching)

This implementation is heavily optimized:
- All methods are inlined for maximum performance
- Uses unsafe array access to avoid bounds checking
- Switches to insertion sort for small arrays (< 12 elements)
- Custom comparison function optimized for Visual properties

Example usage:
```haxe
var visuals:Array<Visual> = [...];
SortVisuals.sort(visuals); // Sorts in place
```

Note: This class is used internally by the rendering system and typically
doesn't need to be called directly unless implementing custom rendering logic.

Based on Haxe's stable sort implementation with Visual-specific optimizations.

<div class="see"><strong>See:</strong> ceramic.Visual For the visual hierarchy, ceramic.SortVisualsByDepth For depth-only sorting</div>


## Static Members

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts an array of Visual objects in place for optimal rendering order.

This operation modifies the input array directly. The sort is stable,
meaning visuals with equal sorting criteria maintain their relative order.
This is important for predictable rendering when multiple visuals have
the same depth and properties.

The algorithm automatically chooses between merge sort for larger arrays
and insertion sort for small arrays (< 12 elements) for optimal performance.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> | The array of visuals to sort. Modified in place. If null, behavior is undefined. |

## Private Members

<div class="signature field-method has-description" id="cmp"><code><span class="field-name">cmp</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cmp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two visuals for rendering order.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Visual](/api-docs/headless/ceramic/Visual/) | First visual to compare  |
| `b` | [Visual](/api-docs/headless/ceramic/Visual/) | Second visual to compare  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | -1 if a should render before b, 1 if b should render before a, 0 if equal |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rec"><code><span class="field-name">rec</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doMerge"><code><span class="field-name">doMerge</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len1</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len2</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `pivot` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |
| `len1` | [Int](/api-docs/headless/Int/) |
| `len2` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rotate"><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `from` | [Int](/api-docs/headless/Int/) |
| `mid` | [Int](/api-docs/headless/Int/) |
| `to` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gcd"><code><span class="field-name">gcd</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gcd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [Int](/api-docs/headless/Int/) |
| `n` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="upper"><code><span class="field-name">upper</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#upper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


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

<div class="signature field-method no-description" id="lower"><code><span class="field-name">lower</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lower"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


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

<div class="signature field-method no-description" id="swap"><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `i` | [Int](/api-docs/headless/Int/) |
| `j` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">j</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/headless/Array/)<[Visual](/api-docs/headless/ceramic/Visual/)> |
| `i` | [Int](/api-docs/headless/Int/) |
| `j` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |


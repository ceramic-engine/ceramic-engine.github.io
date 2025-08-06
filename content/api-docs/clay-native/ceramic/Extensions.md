---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Extensions
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Extensions/
---

# Extensions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Extensions.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Extensions</strong> (Class)</div>

A collection of static extension methods for common data types.

Extensions provides utility methods that enhance standard Haxe types
with performance optimizations, convenience methods, and cross-platform
compatibility helpers. These methods are designed to be used with
Haxe's "using" syntax for cleaner code.

## Categories

- **Array Extensions**: Performance-optimized array operations
- **String Extensions**: String manipulation utilities
- **Map Extensions**: Enhanced map operations
- **Type Extensions**: Type checking and conversion

## Usage Example

```haxe
using ceramic.Extensions;

// Array extensions
var arr = [1, 2, 3, 4, 5];
arr.shuffle();
var random = arr.randomElement();
var value = arr.unsafeGet(0); // Fast access

// String extensions
var str = "  hello world  ";
var trimmed = str.trim();
var title = str.toTitleCase();
```

## Performance Notes

- unsafeGet/Set methods bypass bounds checking for speed
- Native array operations are used on C++ when available
- Debug builds can enable bounds checking with ceramic_debug_unsafe

<div class="see"><strong>See:</strong> Type-specific extension methods throughout the class</div>


## Static Members

<div class="signature field-method has-description" id="unsafeGet"><code><span class="field-name">unsafeGet</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">unsafeGet.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">unsafeGet.T</span></code><a class="header-anchor" href="#unsafeGet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an array element without bounds checking for maximum performance.

This method provides the fastest possible array access by bypassing
runtime bounds checking. Use only when you're certain the index is valid.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<unsafeGet.T> | The array to access  |
| `index` | [Int](/api-docs/clay-native/Int/) | The index to retrieve (must be 0 <= index < array.length)  |

| Returns | Description |
|---------|-------------|
| unsafeGet.T | The element at the specified index  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unsafeSet"><code><span class="field-name">unsafeSet</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">unsafeSet.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">unsafeSet.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unsafeSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets an array element without bounds checking for maximum performance.

This method provides the fastest possible array mutation by bypassing
runtime bounds checking. Use only when you're certain the index is valid.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<unsafeSet.T> | The array to modify  |
| `index` | [Int](/api-docs/clay-native/Int/) | The index to set (must be 0 <= index < array.length)  |
| `value` | unsafeSet.T | The value to set at the index  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setArrayLength"><code><span class="field-name">setArrayLength</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">setArrayLength.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setArrayLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Efficiently resizes an array to the specified length.

Platform-optimized array resizing that either truncates or extends
the array. When extending, new positions contain null/undefined values.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<setArrayLength.T> | The array to resize  |
| `length` | [Int](/api-docs/clay-native/Int/) | The new length (can be larger or smaller) * ```haxe var arr = [1, 2, 3, 4, 5]; arr.setArrayLength(3); // [1, 2, 3] arr.setArrayLength(5); // [1, 2, 3, null, null] ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="randomElement"><code><span class="field-name">randomElement</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">randomElement.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">randomElement.T</span></code><a class="header-anchor" href="#randomElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a random element from the array.

Uses Math.random() to select an element with uniform distribution.
For empty arrays, this will return undefined/null.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<randomElement.T> | The array to select from  |

| Returns | Description |
|---------|-------------|
| randomElement.T | A random element from the array * ```haxe var colors = ["red", "green", "blue"]; var randomColor = colors.randomElement(); // e.g., "green" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="randomElementExcept"><code><span class="field-name">randomElementExcept</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">randomElementExcept.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">except</span><span class="operator">:</span> <span class="type-name">randomElementExcept.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">unsafe</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">randomElementExcept.T</span></code><a class="header-anchor" href="#randomElementExcept"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a random element contained in the given array that is not equal to the `except` arg.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<randomElementExcept.T> | | The array in which we extract the element from  |
| `except` | randomElementExcept.T | | The element we don't want  |
| `unsafe` | [Bool](/api-docs/clay-native/Bool/) | `false` | If set to `true`, will prevent allocating a new array (and may be faster) but will loop forever if there is no element except the one we don't want  |

| Returns | Description |
|---------|-------------|
| randomElementExcept.T | The random element or `null` if nothing was found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="randomElementMatchingValidator"><code><span class="field-name">randomElementMatchingValidator</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">randomElementMatchingValidator.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">validator</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">randomElementMatchingValidator.T</span></code><a class="header-anchor" href="#randomElementMatchingValidator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a random element contained in the given array that is validated by the provided validator.
If no item is valid, returns null.


| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-native/Array/)<randomElementMatchingValidator.T> | The array in which we extract the element from  |
| `validator` | Function | A function that returns true if the item is valid, false if not  |

| Returns | Description |
|---------|-------------|
| randomElementMatchingValidator.T | The random element or `null` if nothing was found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="shuffle"><code><span class="field-name">shuffle</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">shuffle.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shuffle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shuffles an array in place using the Fisher-Yates algorithm.

This operation modifies the original array, randomizing the order
of all elements with uniform distribution. Each permutation has
equal probability.

<div class="see"><strong>See:</strong> https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle</div>


| Name | Type | Description |
|------|------|-------------|
| `arr` | [Array](/api-docs/clay-native/Array/)<shuffle.T> | The array to shuffle (modified in place) * ```haxe var deck = [1, 2, 3, 4, 5]; deck.shuffle(); trace(deck); // e.g., [3, 1, 5, 2, 4] ``` * |

<hr class="field-separator" />

<div class="signature field-method no-description" id="swapElements"><code><span class="field-name">swapElements</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">swapElements.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index0</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">index1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapElements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/clay-native/Array/)<swapElements.T> |
| `index0` | [Int](/api-docs/clay-native/Int/) |
| `index1` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeNullElements"><code><span class="field-name">removeNullElements</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">removeNullElements.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeNullElements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/clay-native/Array/)<removeNullElements.T> |


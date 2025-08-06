---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Array
target: Clay (Web)
permalink: api-docs/clay-web/Array/
---

# Array

<div class="type-hierarchy"><strong>Array</strong> (extern class) → <a href="/api-docs/clay-web/js/lib/RegExpMatch/">js.lib.RegExpMatch</a></div>

An Array is a storage for values. You can access it using indexes or
with its API.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Array.html, https://haxe.org/manual/lf-array-comprehension.html</div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of `this` Array.

<hr class="field-separator" />

<div class="signature field-method has-description" id="concat"><code><span class="field-name">concat</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#concat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new Array by appending the elements of `a` to the elements of
`this` Array.

This operation does not modify `this` Array.

If `a` is the empty Array `[]`, a copy of `this` Array is returned.

The length of the returned Array is equal to the sum of `this.length`
and `a.length`.

If `a` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `a` | [Array](/api-docs/clay-web/Array/)<Array.T> |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of `this` Array, with `sep` separating
each element.

The result of this operation is equal to `Std.string(this[0]) + sep +
Std.string(this[1]) + sep + ... + sep + Std.string(this[this.length-1])`

If `this` is the empty Array `[]`, the result is the empty String `""`.
If `this` has exactly one element, the result is equal to a call to
`Std.string(this[0])`.

If `sep` is null, the result is unspecified.

| Name | Type |
|------|------|
| `sep` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pop"><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the last element of `this` Array and returns it.

This operation modifies `this` Array in place.

If `this` has at least one element, `this.length` will decrease by 1.

If `this` is the empty Array `[]`, null is returned and the length
remains 0.
| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the element `x` at the end of `this` Array and returns the new
length of `this` Array.

This operation modifies `this` Array in place.

`this.length` increases by 1.

| Name | Type |
|------|------|
| `x` | Array.T |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reverse"><code><span class="field-name">reverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reverse the order of elements of `this` Array.

This operation modifies `this` Array in place.

If `this.length < 2`, `this` remains unchanged.

<hr class="field-separator" />

<div class="signature field-method has-description" id="shift"><code><span class="field-name">shift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#shift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the first element of `this` Array and returns it.

This operation modifies `this` Array in place.

If `this` has at least one element, `this`.length and the index of each
remaining element is decreased by 1.

If `this` is the empty Array `[]`, `null` is returned and the length
remains 0.
| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a shallow copy of the range of `this` Array, starting at and
including `pos`, up to but not including `end`.

This operation does not modify `this` Array.

The elements are not copied and retain their identity.

If `end` is omitted or exceeds `this.length`, it defaults to the end of
`this` Array.

If `pos` or `end` are negative, their offsets are calculated from the
end of `this` Array by `this.length + pos` and `this.length + end`
respectively. If this yields a negative value, 0 is used instead.

If `pos` exceeds `this.length` or if `end` is less than or equals
`pos`, the result is `[]`.

| Name | Type | Default |
|------|------|---------|
| `pos` | [Int](/api-docs/clay-web/Int/) | |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts `this` Array according to the comparison function `f`, where
`f(x,y)` returns 0 if x == y, a positive Int if x > y and a
negative Int if x < y.

This operation modifies `this` Array in place.

The sort operation is not guaranteed to be stable, which means that the
order of equal elements may not be retained. For a stable Array sorting
algorithm, `haxe.ds.ArraySort.sort()` can be used instead.

If `f` is null, the result is unspecified.

| Name | Type |
|------|------|
| `f` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="splice"><code><span class="field-name">splice</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#splice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes `len` elements from `this` Array, starting at and including
`pos`, an returns them.

This operation modifies `this` Array in place.

If `len` is < 0 or `pos` exceeds `this`.length, an empty Array [] is
returned and `this` Array is unchanged.

If `pos` is negative, its value is calculated from the end    of `this`
Array by `this.length + pos`. If this yields a negative value, 0 is
used instead.

If the sum of the resulting values for `len` and `pos` exceed
`this.length`, this operation will affect the elements from `pos` to the
end of `this` Array.

The length of the returned Array is equal to the new length of `this`
Array subtracted from the original length of `this` Array. In other
words, each element of the original `this` Array either remains in
`this` Array or becomes an element of the returned Array.

| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/clay-web/Int/) |
| `len` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of `this` Array.

The result will include the individual elements' String representations
separated by comma. The enclosing [ ] may be missing on some platforms,
use `Std.string()` to get a String representation that is consistent
across platforms.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unshift"><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the element `x` at the start of `this` Array.

This operation modifies `this` Array in place.

`this.length` and the index of each Array element increases by 1.

| Name | Type |
|------|------|
| `x` | Array.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns position of the first occurrence of `x` in `this` Array, searching front to back.

If `x` is found by checking standard equality, the function returns its index.

If `x` is not found, the function returns -1.

If `fromIndex` is specified, it will be used as the starting index to search from,
otherwise search starts with zero index. If it is negative, it will be taken as the
offset from the end of `this` Array to compute the starting index. If given or computed
starting index is less than 0, the whole array will be searched, if it is greater than
or equal to the length of `this` Array, the function returns -1.

| Name | Type | Default |
|------|------|---------|
| `x` | Array.T | |
| `fromIndex` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/iterators/ArrayIterator/" class="type-link">haxe.iterators.ArrayIterator</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator of the Array values.
| Returns |
|---------|
| [haxe.iterators.ArrayIterator](/api-docs/clay-web/haxe/iterators/ArrayIterator/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Array.


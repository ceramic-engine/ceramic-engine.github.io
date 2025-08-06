---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: String
target: Headless
permalink: api-docs/headless/String/
---

# String

<div class="type-hierarchy"><strong>String</strong> (extern class)</div>

The basic String class.

A Haxe String is immutable, it is not possible to modify individual
characters. No method of this class changes the state of `this` String.

Strings can be constructed using the String literal syntax `"string value"`.

String can be concatenated by using the `+` operator. If an operand is not a
String, it is passed through `Std.string()` first.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-String.html</div>


## Static Members

<div class="signature field-method has-description" id="fromCharCode"><code><span class="field-name">fromCharCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#fromCharCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the String corresponding to the character code `code`.

If `code` is negative or has another invalid value, the result is
unspecified.

| Name | Type |
|------|------|
| `code` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of characters in `this` String.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toUpperCase"><code><span class="field-name">toUpperCase</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#toUpperCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a String where all characters of `this` String are upper case.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLowerCase"><code><span class="field-name">toLowerCase</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#toLowerCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a String where all characters of `this` String are lower case.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="charAt"><code><span class="field-name">charAt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#charAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the character at position `index` of `this` String.

If `index` is negative or exceeds `this.length`, the empty String `""`
is returned.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="#" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the position of the leftmost occurrence of `str` within `this`
String.

If `startIndex` is given, the search is performed within the substring
of `this` String starting from `startIndex`.

If `startIndex` exceeds `this.length`, -1 is returned.

If `startIndex` is negative, the result is unspecifed.

Otherwise the search is performed within `this` String. In either case,
the returned position is relative to the beginning of `this` String.

If `str` cannot be found, -1 is returned.

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/headless/String/) | |
| `startIndex` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lastIndexOf"><code><span class="field-name">lastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="#" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the position of the rightmost occurrence of `str` within `this`
String.

If `startIndex` is given, the search is performed within the substring
of `this` String from 0 to `startIndex + str.length`. Otherwise the search
is performed within `this` String. In either case, the returned position
is relative to the beginning of `this` String.

If `startIndex` is negative, the result is unspecifed.

If `str` cannot be found, -1 is returned.

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/headless/String/) | |
| `startIndex` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="split"><code><span class="field-name">split</span><span class="parenthesis">(</span><span class="arg-name">delimiter</span><span class="operator">:</span> <a href="#" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Splits `this` String at each occurrence of `delimiter`.

If `this` String is the empty String `""`, the result is not consistent
across targets and may either be `[]` (on Js, Cpp) or `[""]`.

If `delimiter` is the empty String `""`, `this` String is split into an
Array of `this.length` elements, where the elements correspond to the
characters of `this` String.

If `delimiter` is not found within `this` String, the result is an Array
with one element, which equals `this` String.

If `delimiter` is null, the result is unspecified.

Otherwise, `this` String is split into parts at each occurrence of
`delimiter`. If `this` String starts (or ends) with `delimiter`, the
result `Array` contains a leading (or trailing) empty String `""` element.
Two subsequent delimiters also result in an empty String `""` element.

| Name | Type |
|------|------|
| `delimiter` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the String itself.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="substring"><code><span class="field-name">substring</span><span class="parenthesis">(</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">endIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#substring"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the part of `this` String from `startIndex` to but not including `endIndex`.

If `startIndex` or `endIndex` are negative, 0 is used instead.

If `startIndex` exceeds `endIndex`, they are swapped.

If the (possibly swapped) `endIndex` is omitted or exceeds
`this.length`, `this.length` is used instead.

If the (possibly swapped) `startIndex` exceeds `this.length`, the empty
String `""` is returned.

| Name | Type | Default |
|------|------|---------|
| `startIndex` | [Int](/api-docs/headless/Int/) | |
| `endIndex` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="charCodeAt"><code><span class="field-name">charCodeAt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#charCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the character code at position `index` of `this` String.

If `index` is negative or exceeds `this.length`, `null` is returned.

To obtain the character code of a single character, `"x".code` can be
used instead to inline the character code at compile time. Note that
this only works on String literals of length 1.

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Int](/api-docs/headless/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="substr"><code><span class="field-name">substr</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">String</a></code><a class="header-anchor" href="#substr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `len` characters of `this` String, starting at position `pos`.

If `len` is omitted, all characters from position `pos` to the end of
`this` String are included.

If `pos` is negative, its value is calculated from the end of `this`
String by `this.length + pos`. If this yields a negative value, 0 is
used instead.

If the calculated position + `len` exceeds `this.length`, the characters
from that position to the end of `this` String are returned.

If `len` is negative, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `pos` | [Int](/api-docs/headless/Int/) | |
| `len` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="#" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a copy from a given String.

| Name | Type |
|------|------|
| `string` | [String](/api-docs/headless/String/) |


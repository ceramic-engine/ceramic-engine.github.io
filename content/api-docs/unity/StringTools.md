---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StringTools
target: Unity
permalink: api-docs/unity/StringTools/
---

# StringTools

<div class="type-hierarchy"><strong>StringTools</strong> (Class)</div>

This class provides advanced methods on Strings. It is ideally used with
`using StringTools` and then acts as an [extension](https://haxe.org/manual/lf-static-extension.html)
to the `String` class.

If the first argument to any of the methods is null, the result is
unspecified.

## Static Members

<div class="signature field-method has-description" id="urlEncode"><code><span class="field-name">urlEncode</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#urlEncode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encode an URL by using the standard format.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="urlDecode"><code><span class="field-name">urlDecode</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#urlDecode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decode an URL using the standard format.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="htmlEscape"><code><span class="field-name">htmlEscape</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">quotes</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#htmlEscape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escapes HTML special characters of the string `s`.

The following replacements are made:

- `&` becomes `&amp`;
- `<` becomes `&lt`;
- `>` becomes `&gt`;

If `quotes` is true, the following characters are also replaced:

- `"` becomes `&quot`;
- `'` becomes `&#039`;

| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/unity/String/) | |
| `quotes` | [Bool](/api-docs/unity/Bool/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if `s` contains `value` and  `false` otherwise.

When `value` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `value` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="startsWith"><code><span class="field-name">startsWith</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#startsWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the string `s` starts with the string `start`.

If `start` is `null`, the result is unspecified.

If `start` is the empty String `""`, the result is true.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `start` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endsWith"><code><span class="field-name">endsWith</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the string `s` ends with the string `end`.

If `end` is `null`, the result is unspecified.

If `end` is the empty String `""`, the result is true.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `end` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ltrim"><code><span class="field-name">ltrim</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ltrim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes leading space characters of `s`.

This function internally calls `isSpace()` to decide which characters to
remove.

If `s` is the empty String `""` or consists only of space characters, the
result is the empty String `""`.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rtrim"><code><span class="field-name">rtrim</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#rtrim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes trailing space characters of `s`.

This function internally calls `isSpace()` to decide which characters to
remove.

If `s` is the empty String `""` or consists only of space characters, the
result is the empty String `""`.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="trim"><code><span class="field-name">trim</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#trim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes leading and trailing space characters of `s`.

This is a convenience function for `ltrim(rtrim(s))`.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lpad"><code><span class="field-name">lpad</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#lpad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Concatenates `c` to `s` until `s.length` is at least `l`.

If `c` is the empty String `""` or if `l` does not exceed `s.length`,
`s` is returned unchanged.

If `c.length` is 1, the resulting String length is exactly `l`.

Otherwise the length may exceed `l`.

If `c` is null, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `c` | [String](/api-docs/unity/String/) |
| `l` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replace"><code><span class="field-name">replace</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sub</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">by</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replace all occurrences of the String `sub` in the String `s` by the
String `by`.

If `sub` is the empty String `""`, `by` is inserted after each character
of `s` except the last one. If `by` is also the empty String `""`, `s`
remains unchanged.

If `sub` or `by` are null, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `sub` | [String](/api-docs/unity/String/) |
| `by` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hex"><code><span class="field-name">hex</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">digits</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#hex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes `n` into a hexadecimal representation.

If `digits` is specified, the resulting String is padded with "0" until
its `length` equals `digits`.

| Name | Type | Default |
|------|------|---------|
| `n` | [Int](/api-docs/unity/Int/) | |
| `digits` | [Int](/api-docs/unity/Int/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fastCodeAt"><code><span class="field-name">fastCodeAt</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fastCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the character code at position `index` of String `s`, or an
end-of-file indicator at if `position` equals `s.length`.

This method is faster than `String.charCodeAt()` on some platforms, but
the result is unspecified if `index` is negative or greater than
`s.length`.

End of file status can be checked by calling `StringTools.isEof()` with
the returned value as argument.

This operation is not guaranteed to work if `s` contains the `\0`
character.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `index` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unsafeCodeAt"><code><span class="field-name">unsafeCodeAt</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unsafeCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the character code at position `index` of String `s`, or an
end-of-file indicator at if `position` equals `s.length`.

This method is faster than `String.charCodeAt()` on some platforms, but
the result is unspecified if `index` is negative or greater than
`s.length`.

This operation is not guaranteed to work if `s` contains the `\0`
character.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `index` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEof"><code><span class="field-name">isEof</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `c` represents the end-of-file (EOF) character.

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Private Members

<div class="signature field-method no-description" id="utf16CodePointAt"><code><span class="field-name">utf16CodePointAt</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#utf16CodePointAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `index` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


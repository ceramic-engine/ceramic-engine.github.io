---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Std
target: Clay (Web)
permalink: api-docs/clay-web/Std/
---

# Std

<div class="type-hierarchy"><strong>Std</strong> (Class)</div>

The Std class provides standard methods for manipulating basic types.

## Static Members

<div class="signature field-method has-description" id="isOfType"><code><span class="field-name">isOfType</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOfType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if a value `v` is of the type `t`. Returns `false` if `v` or `t` are null.

If `t` is a class or interface with `@:generic` meta, the result is `false`.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `t` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string"><code><span class="field-name">string</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts any value to a String.

If `s` is of `String`, `Int`, `Float` or `Bool`, its value is returned.

If `s` is an instance of a class and that class or one of its parent classes has
a `toString` method, that method is called. If no such method is present, the result
is unspecified.

If `s` is an enum constructor without argument, the constructor's name is returned. If
arguments exists, the constructor's name followed by the String representations of
the arguments is returned.

If `s` is a structure, the field names along with their values are returned. The field order
and the operator separating field names and values are unspecified.

If s is null, "null" is returned.

| Name | Type |
|------|------|
| `s` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="int"><code><span class="field-name">int</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a `Float` to an `Int`, rounded towards 0.

If `x` is outside of the signed Int32 range, or is `NaN`, `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, the result is unspecified.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseInt"><code><span class="field-name">parseInt</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a `String` to an `Int`.

Leading whitespaces are ignored.

`x` may optionally start with a + or - to denote a postive or negative value respectively.

If the optional sign is followed 0x or 0X, hexadecimal notation is recognized where the following
digits may contain 0-9 and A-F. Both the prefix and digits are case insensitive.

Otherwise `x` is read as decimal number with 0-9 being allowed characters. Octal and binary
notations are not supported.

Parsing continues until an invalid character is detected, in which case the result up to
that point is returned. Scientific notation is not supported. That is `Std.parseInt('10e2')` produces `10`.

If `x` is `null`, the result is `null`.
If `x` cannot be parsed as integer or is empty, the result is `null`.

If `x` starts with a hexadecimal prefix which is not followed by at least one valid hexadecimal
digit, the result is unspecified.

| Name | Type |
|------|------|
| `x` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseFloat"><code><span class="field-name">parseFloat</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parseFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a `String` to a `Float`.

The parsing rules for `parseInt` apply here as well, with the exception of invalid input
resulting in a `NaN` value instead of `null`. Also, hexadecimal support is **not** specified.

Additionally, decimal notation may contain a single `.` to denote the start of the fractions.

It may also end with `e` or `E` followed by optional minus or plus sign and a sequence of
digits (defines exponent to base 10).

| Name | Type |
|------|------|
| `x` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a random integer between 0 included and `x` excluded.

If `x <= 1`, the result is always 0.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:keepInit` | - |


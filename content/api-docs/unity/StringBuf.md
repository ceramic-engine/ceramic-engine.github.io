---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StringBuf
target: Unity
permalink: api-docs/unity/StringBuf/
---

# StringBuf

<div class="type-hierarchy"><strong>StringBuf</strong> (Class)</div>

A String buffer is an efficient way to build a big string by appending small
elements together.

Unlike String, an instance of StringBuf is not immutable in the sense that
it can be passed as argument to functions which modify it by appending more
values.

## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of `this` StringBuf in characters.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">add.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends the representation of `x` to `this` StringBuf.

The exact representation of `x` may vary per platform. To get more
consistent behavior, this function should be called with
Std.string(x).

If `x` is null, the String "null" is appended.

| Name | Type |
|------|------|
| `x` | add.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addSub"><code><span class="field-name">addSub</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends a substring of `s` to `this` StringBuf.

This function expects `pos` and `len` to describe a valid substring of
`s`, or else the result is unspecified. To get more robust behavior,
`this.add(s.substr(pos,len))` can be used instead.

If `s` or `pos` are null, the result is unspecified.

If `len` is omitted or null, the substring ranges from `pos` to the end
of `s`.

| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/unity/String/) | |
| `pos` | [Int](/api-docs/unity/Int/) | |
| `len` | [Int](/api-docs/unity/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addChar"><code><span class="field-name">addChar</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends the character identified by `c` to `this` StringBuf.

If `c` is negative or has another invalid value, the result is
unspecified.

| Name | Type |
|------|------|
| `c` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the content of `this` StringBuf as String.

The buffer is not emptied by this operation.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new StringBuf instance.

This may involve initialization of the internal buffer.

## Private Members

<div class="signature field-var no-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/StringBuilder/" class="type-link">cs.system.text.StringBuilder</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


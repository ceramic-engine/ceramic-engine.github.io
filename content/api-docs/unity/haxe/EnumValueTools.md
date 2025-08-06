---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EnumValueTools
target: Unity
permalink: api-docs/unity/haxe/EnumValueTools/
---

# EnumValueTools

<div class="type-hierarchy"><strong>haxe.EnumValueTools</strong> (extern class)</div>

This class provides advanced methods on enum values. It is ideally used with
`using EnumValueTools` and then acts as an
[extension](https://haxe.org/manual/lf-static-extension.html) to the
`EnumValue` types.

If the first argument to any of the methods is `null`, the result is
unspecified.

## Static Members

<div class="signature field-method has-description" id="equals"><code><span class="field-name">equals</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">equals.T</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">equals.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively compares two enum instances `a` and `b` by value.

Unlike `a == b`, this function performs a deep equality check on the
arguments of the constructors (if there are any).

If `a` or `b` are `null`, the result is unspecified.

| Name | Type |
|------|------|
| `a` | equals.T |
| `b` | equals.T |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getName"><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the constructor name of enum instance `e`.

The result String does not contain any constructor arguments.

If `e` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/unity/EnumValue/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParameters"><code><span class="field-name">getParameters</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the constructor arguments of enum instance `e`.

If `e` has no arguments, the result is `[]`.

Otherwise the result are the values that were used as arguments to `e`,
in the order of their declaration.

If `e` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/unity/EnumValue/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getIndex"><code><span class="field-name">getIndex</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the index of enum instance `e`.

This corresponds to the original syntactic position of `e`. The index of
the first declared constructor is 0, the next one is 1 etc.

If `e` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/unity/EnumValue/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


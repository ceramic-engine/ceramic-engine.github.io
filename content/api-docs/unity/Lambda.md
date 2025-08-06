---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Lambda
target: Unity
permalink: api-docs/unity/Lambda/
---

# Lambda

<div class="type-hierarchy"><strong>Lambda</strong> (Class)</div>

The `Lambda` class is a collection of methods to support functional
programming. It is ideally used with `using Lambda` and then acts as an
extension to Iterable types.

On static platforms, working with the Iterable structure might be slower
than performing the operations directly on known types, such as Array and
List.

If the first argument to any of the methods is null, the result is
unspecified.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Lambda.html</div>


## Static Members

<div class="signature field-method has-description" id="map"><code><span class="field-name">map</span><span class="parenthesis">(</span><span class="arg-name">it</span><span class="operator">:</span> <a href="/api-docs/unity/Iterable/" class="type-link">Iterable</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">map.B</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Array by applying function `f` to all elements of `it`.
The order of elements is preserved.
If `f` is null, the result is unspecified.

| Name | Type |
|------|------|
| `it` | [Iterable](/api-docs/unity/Iterable/) |
| `f` | Function |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<map.B> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">it</span><span class="operator">:</span> <a href="/api-docs/unity/Iterable/" class="type-link">Iterable</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `it` contains an element for which `f` is true.

This function returns true as soon as an element is found for which a
call to `f` returns true.

If no such element is found, the result is false.

If `f` is null, the result is unspecified.

| Name | Type |
|------|------|
| `it` | [Iterable](/api-docs/unity/Iterable/) |
| `f` | Function |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fold"><code><span class="field-name">fold</span><span class="parenthesis">(</span><span class="arg-name">it</span><span class="operator">:</span> <a href="/api-docs/unity/Iterable/" class="type-link">Iterable</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">first</span><span class="operator">:</span> <span class="type-name">fold.B</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">fold.B</span></code><a class="header-anchor" href="#fold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Functional fold on Iterable `it`, using function `f` with start argument
`first`.

If `it` has no elements, the result is `first`.

Otherwise the first element of `it` is passed to `f` alongside `first`.
The result of that call is then passed to `f` with the next element of
`it`, and so on until `it` has no more elements.

If `it` or `f` are null, the result is unspecified.

| Name | Type |
|------|------|
| `it` | [Iterable](/api-docs/unity/Iterable/) |
| `f` | Function |
| `first` | fold.B |

| Returns |
|---------|
| fold.B |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


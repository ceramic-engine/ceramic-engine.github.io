---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NativeArray
target: Unity
permalink: api-docs/unity/cs/NativeArray/
---

# NativeArray

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/Array/">cs.system.Array</a> → <strong>cs.NativeArray</strong> (extern class)</div>

Represents a C# fixed-size Array (`T[]`)

## Static Members

<div class="signature field-method has-description" id="make"><code><span class="field-name">make</span><span class="parenthesis">(</span><span class="arg-name">elements</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">NativeArray</a><span class="operator">&lt;</span><span class="type-name">make.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#make"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new array with the specified elements.

Usage:
```haxe
var elements = NativeArray.make(1,2,3,4,5,6);
```

| Name | Type |
|------|------|
| `elements` | [haxe.extern.Rest](/api-docs/unity/haxe/extern/Rest/) |

| Returns |
|---------|
| [NativeArray](/api-docs/unity/cs/NativeArray/)<make.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reverse"><code><span class="field-name">Reverse</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arr` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |

## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias to array's `Length` property. Returns the size of the array

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/_NativeArray/NativeArrayIterator/" class="type-link">cs._NativeArray.NativeArrayIterator</a><span class="operator">&lt;</span><span class="type-name">cs.NativeArray.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator so it's possible to use `for` with C#'s `NativeArray`
| Returns |
|---------|
| [cs._NativeArray.NativeArrayIterator](/api-docs/unity/cs/_NativeArray/NativeArrayIterator/)<cs.NativeArray.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a new array with size `len`

| Name | Type |
|------|------|
| `len` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


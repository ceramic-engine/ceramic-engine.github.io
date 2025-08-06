---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Array
target: Unity
permalink: api-docs/unity/Array/
---

# Array

<div class="type-hierarchy"><strong>Array</strong> (final class)</div>

## Instance Members

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="concat"><code><span class="field-name">concat</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#concat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Array](/api-docs/unity/Array/)<Array.T> |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | Array.T | |
| `fromIndex` | [Int](/api-docs/unity/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lastIndexOf"><code><span class="field-name">lastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | Array.T | |
| `fromIndex` | [Int](/api-docs/unity/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sep` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pop"><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | Array.T |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reverse"><code><span class="field-name">reverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="shift"><code><span class="field-name">shift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#shift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pos` | [Int](/api-docs/unity/Int/) | |
| `end` | [Int](/api-docs/unity/Int/) | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="splice"><code><span class="field-name">splice</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#splice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |
| `len` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unshift"><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | Array.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insert"><code><span class="field-name">insert</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |
| `x` | Array.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | Array.T |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="map"><code><span class="field-name">map</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">map.S</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<map.S> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <span class="type-name">Array.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | Array.T |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/iterators/ArrayIterator/" class="type-link">haxe.iterators.ArrayIterator</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.iterators.ArrayIterator](/api-docs/unity/haxe/iterators/ArrayIterator/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/iterators/ArrayKeyValueIterator/" class="type-link">haxe.iterators.ArrayKeyValueIterator</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.iterators.ArrayKeyValueIterator](/api-docs/unity/haxe/iterators/ArrayKeyValueIterator/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `len` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description" id="ofNative"><code><span class="field-name">ofNative</span><span class="parenthesis">(</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><span class="type-name">ofNative.X</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ofNative.X</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#ofNative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `native` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<ofNative.X> |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<ofNative.X> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="alloc"><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">alloc.Y</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<alloc.Y> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="concatNative"><code><span class="field-name">concatNative</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><span class="type-name">Array.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#concatNative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<Array.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quicksort"><code><span class="field-name">quicksort</span><span class="parenthesis">(</span><span class="arg-name">lo</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hi</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quicksort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `lo` | [Int](/api-docs/unity/Int/) |
| `hi` | [Int](/api-docs/unity/Int/) |
| `f` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="spliceVoid"><code><span class="field-name">spliceVoid</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#spliceVoid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [Int](/api-docs/unity/Int/) |
| `len` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


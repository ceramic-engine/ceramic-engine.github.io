---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Pointer
target: Clay (Native)
permalink: api-docs/clay-native/cpp/Pointer/
---

# Pointer

<div class="type-hierarchy"><a href="/api-docs/clay-native/cpp/ConstPointer/">ConstPointer</a> → <strong>cpp.Pointer</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="fromRaw"><code><span class="field-name">fromRaw</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><span class="type-name">fromRaw.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">fromRaw.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<fromRaw.T> |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<fromRaw.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromStar"><code><span class="field-name">fromStar</span><span class="parenthesis">(</span><span class="arg-name">star</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">fromStar.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromStar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `star` | [Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<fromStar.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeFromHandle"><code><span class="field-name">nativeFromHandle</span><span class="parenthesis">(</span><span class="arg-name">inHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inKind</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/AutoCast/" class="type-link">AutoCast</a></code><a class="header-anchor" href="#nativeFromHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inHandle` | [Dynamic](/api-docs/clay-native/Dynamic/) | |
| `inKind` | [String](/api-docs/clay-native/String/) | *(optional)* |

| Returns |
|---------|
| [AutoCast](/api-docs/clay-native/cpp/AutoCast/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromHandle"><code><span class="field-name">fromHandle</span><span class="parenthesis">(</span><span class="arg-name">inHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inKind</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">fromHandle.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `inHandle` | [Dynamic](/api-docs/clay-native/Dynamic/) | |
| `inKind` | [String](/api-docs/clay-native/String/) | *(optional)* |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<fromHandle.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPointer"><code><span class="field-name">fromPointer</span><span class="parenthesis">(</span><span class="arg-name">inNativePointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">fromPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inNativePointer` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<fromPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addressOf"><code><span class="field-name">addressOf</span><span class="parenthesis">(</span><span class="arg-name">inVariable</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">Reference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">addressOf.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#addressOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inVariable` | [Reference](/api-docs/clay-native/cpp/Reference/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<addressOf.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endOf"><code><span class="field-name">endOf</span><span class="parenthesis">(</span><span class="arg-name">inVariable</span><span class="operator">:</span> <span class="type-name">endOf.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#endOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inVariable` | endOf.T |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeArrayElem"><code><span class="field-name">nativeArrayElem</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">nativeArrayElem.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inElem</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/AutoCast/" class="type-link">AutoCast</a></code><a class="header-anchor" href="#nativeArrayElem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<nativeArrayElem.T> |
| `inElem` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [AutoCast](/api-docs/clay-native/cpp/AutoCast/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayElem"><code><span class="field-name">arrayElem</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">arrayElem.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inElem</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">arrayElem.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#arrayElem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<arrayElem.T> |
| `inElem` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<arrayElem.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeOfArray"><code><span class="field-name">nativeOfArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">nativeOfArray.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/AutoCast/" class="type-link">AutoCast</a></code><a class="header-anchor" href="#nativeOfArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<nativeOfArray.T> |

| Returns |
|---------|
| [AutoCast](/api-docs/clay-native/cpp/AutoCast/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ofArray"><code><span class="field-name">ofArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ofArray.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">ofArray.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#ofArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<ofArray.T> |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<ofArray.T> |

## Instance Members

<div class="signature field-var no-description" id="ref"><code><span class="field-name">ref</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">Reference</a></code><a class="header-anchor" href="#ref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setAt"><code><span class="field-name">setAt</span><span class="parenthesis">(</span><span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">cpp.Pointer.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inIndex` | [Int](/api-docs/clay-native/Int/) |
| `value` | cpp.Pointer.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toUnmanagedArray"><code><span class="field-name">toUnmanagedArray</span><span class="parenthesis">(</span><span class="arg-name">elementCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#toUnmanagedArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementCount` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toUnmanagedVector"><code><span class="field-name">toUnmanagedVector</span><span class="parenthesis">(</span><span class="arg-name">elementCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#toUnmanagedVector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementCount` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [haxe.ds.Vector](/api-docs/clay-native/haxe/ds/Vector/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inc"><code><span class="field-name">inc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#inc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dec"><code><span class="field-name">dec</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#dec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="incBy"><code><span class="field-name">incBy</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#incBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="decBy"><code><span class="field-name">decBy</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#decBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sub"><code><span class="field-name">sub</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">cpp.Pointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<cpp.Pointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="postIncRef"><code><span class="field-name">postIncRef</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">Reference</a></code><a class="header-anchor" href="#postIncRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Reference](/api-docs/clay-native/cpp/Reference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyArray"><code><span class="field-name">destroyArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:semantics` | variable |


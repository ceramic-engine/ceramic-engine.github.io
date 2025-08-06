---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ConstPointer
target: Clay (Native)
permalink: api-docs/clay-native/cpp/ConstPointer/
---

# ConstPointer

<div class="type-hierarchy"><strong>cpp.ConstPointer</strong> (extern class) → <a href="/api-docs/clay-native/cpp/Pointer/">Pointer</a></div>

## Static Members

<div class="signature field-method no-description" id="fromRaw"><code><span class="field-name">fromRaw</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawConstPointer/" class="type-link">RawConstPointer</a><span class="operator">&lt;</span><span class="type-name">fromRaw.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">fromRaw.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [RawConstPointer](/api-docs/clay-native/cpp/RawConstPointer/)<fromRaw.T> |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<fromRaw.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromStar"><code><span class="field-name">fromStar</span><span class="parenthesis">(</span><span class="arg-name">star</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">fromStar.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromStar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `star` | [Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<fromStar.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPointer"><code><span class="field-name">fromPointer</span><span class="parenthesis">(</span><span class="arg-name">inNativePointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">fromPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inNativePointer` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<fromPointer.T> |

## Instance Members

<div class="signature field-var no-description" id="ptr"><code><span class="field-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">Star</a></code><a class="header-anchor" href="#ptr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <span class="type-name">cpp.ConstPointer.T</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="raw"><code><span class="field-name">raw</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#raw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="constRaw"><code><span class="field-name">constRaw</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawConstPointer/" class="type-link">RawConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#constRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="lt"><code><span class="field-name">lt</span><span class="parenthesis">(</span><span class="arg-name">inOther</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inOther` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="leq"><code><span class="field-name">leq</span><span class="parenthesis">(</span><span class="arg-name">inOther</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#leq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inOther` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gt"><code><span class="field-name">gt</span><span class="parenthesis">(</span><span class="arg-name">inOther</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inOther` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="geq"><code><span class="field-name">geq</span><span class="parenthesis">(</span><span class="arg-name">inOther</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#geq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inOther` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setRaw"><code><span class="field-name">setRaw</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><span class="type-name">setRaw.O</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<setRaw.O> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reinterpret"><code><span class="field-name">reinterpret</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/reinterpret/Other/" class="type-link">reinterpret.Other</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#reinterpret"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<[reinterpret.Other](/api-docs/clay-native/reinterpret/Other/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rawCast"><code><span class="field-name">rawCast</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/rawCast/Other/" class="type-link">rawCast.Other</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#rawCast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[rawCast.Other](/api-docs/clay-native/rawCast/Other/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="at"><code><span class="field-name">at</span><span class="parenthesis">(</span><span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">Reference</a></code><a class="header-anchor" href="#at"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Reference](/api-docs/clay-native/cpp/Reference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inc"><code><span class="field-name">inc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#inc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dec"><code><span class="field-name">dec</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#dec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="incBy"><code><span class="field-name">incBy</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#incBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="decBy"><code><span class="field-name">decBy</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#decBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sub"><code><span class="field-name">sub</span><span class="parenthesis">(</span><span class="arg-name">inT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">cpp.ConstPointer.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inT` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<cpp.ConstPointer.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="postIncVal"><code><span class="field-name">postIncVal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Reference/" class="type-link">Reference</a></code><a class="header-anchor" href="#postIncVal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Reference](/api-docs/clay-native/cpp/Reference/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "cpp/Pointer.h" |
| `:semantics` | variable |


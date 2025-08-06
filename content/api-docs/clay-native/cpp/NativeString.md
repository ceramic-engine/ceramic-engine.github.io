---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NativeString
target: Clay (Native)
permalink: api-docs/clay-native/cpp/NativeString/
---

# NativeString

<div class="type-hierarchy"><strong>cpp.NativeString</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="raw"><code><span class="field-name">raw</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawConstPointer/" class="type-link">RawConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#raw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [RawConstPointer](/api-docs/clay-native/cpp/RawConstPointer/)<[Char](/api-docs/clay-native/cpp/Char/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="c_str"><code><span class="field-name">c_str</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#c_str"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<[Char](/api-docs/clay-native/cpp/Char/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPointer"><code><span class="field-name">fromPointer</span><span class="parenthesis">(</span><span class="arg-name">inPtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inPtr` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<[Char](/api-docs/clay-native/cpp/Char/)> |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromGcPointer"><code><span class="field-name">fromGcPointer</span><span class="parenthesis">(</span><span class="arg-name">inPtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inLen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromGcPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inPtr` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<[Char](/api-docs/clay-native/cpp/Char/)> |
| `inLen` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseFloat"><code><span class="field-name">parseFloat</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parseFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseSubstrFloat"><code><span class="field-name">parseSubstrFloat</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parseSubstrFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseInt"><code><span class="field-name">parseInt</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#parseInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseSubstrInt"><code><span class="field-name">parseSubstrInt</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#parseSubstrInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">inString0</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">inString1</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString0` | [String](/api-docs/clay-native/String/) |
| `inString1` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="utf8CharCodeAt"><code><span class="field-name">utf8CharCodeAt</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#utf8CharCodeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |
| `inIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="utf8Length"><code><span class="field-name">utf8Length</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#utf8Length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="utf8IsValid"><code><span class="field-name">utf8IsValid</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#utf8IsValid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="utf8Sub"><code><span class="field-name">utf8Sub</span><span class="parenthesis">(</span><span class="arg-name">inString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">charStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inLen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#utf8Sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inString` | [String](/api-docs/clay-native/String/) |
| `charStart` | [Int](/api-docs/clay-native/Int/) |
| `inLen` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromPointerLen"><code><span class="field-name">fromPointerLen</span><span class="parenthesis">(</span><span class="arg-name">inPtr</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromPointerLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inPtr` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<[Char](/api-docs/clay-native/cpp/Char/)> |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="utf8DecodeAdvance"><code><span class="field-name">utf8DecodeAdvance</span><span class="parenthesis">(</span><span class="arg-name">reference</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Char/" class="type-link">Char</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#utf8DecodeAdvance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `reference` | [Char](/api-docs/clay-native/cpp/Char/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |


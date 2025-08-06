---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Encoder
target: Unity
permalink: api-docs/unity/cs/system/text/Encoder/
---

# Encoder

<div class="type-hierarchy"><strong>cs.system.text.Encoder</strong> (extern class) → <a href="/api-docs/unity/cs/system/text/Encoding_ForwardingEncoder/">Encoding_ForwardingEncoder</a></div>

## Instance Members

<div class="signature field-var no-description" id="FallbackBuffer"><code><span class="field-name">FallbackBuffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/EncoderFallbackBuffer/" class="type-link">EncoderFallbackBuffer</a></code><a class="header-anchor" href="#FallbackBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Fallback"><code><span class="field-name">Fallback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/EncoderFallback/" class="type-link">EncoderFallback</a></code><a class="header-anchor" href="#Fallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetByteCount"><code><span class="field-name">GetByteCount</span><span class="parenthesis">(</span><span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flush</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetByteCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chars` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `index` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |
| `flush` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetBytes"><code><span class="field-name">GetBytes</span><span class="parenthesis">(</span><span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">charIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">charCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">byteIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flush</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chars` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `charIndex` | [Int](/api-docs/unity/Int/) |
| `charCount` | [Int](/api-docs/unity/Int/) |
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `byteIndex` | [Int](/api-docs/unity/Int/) |
| `flush` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reset"><code><span class="field-name">Reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Convert"><code><span class="field-name">Convert</span><span class="parenthesis">(</span><span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">charIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">charCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">byteIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flush</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">charsUsed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="operator">,</span> <span class="arg-name">bytesUsed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="operator">,</span> <span class="arg-name">completed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Convert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chars` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `charIndex` | [Int](/api-docs/unity/Int/) |
| `charCount` | [Int](/api-docs/unity/Int/) |
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `byteIndex` | [Int](/api-docs/unity/Int/) |
| `byteCount` | [Int](/api-docs/unity/Int/) |
| `flush` | [Bool](/api-docs/unity/Bool/) |
| `charsUsed` | [cs.Out](/api-docs/unity/cs/Out/) |
| `bytesUsed` | [cs.Out](/api-docs/unity/cs/Out/) |
| `completed` | [cs.Out](/api-docs/unity/cs/Out/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |


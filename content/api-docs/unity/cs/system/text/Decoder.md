---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Decoder
target: Unity
permalink: api-docs/unity/cs/system/text/Decoder/
---

# Decoder

<div class="type-hierarchy"><strong>cs.system.text.Decoder</strong> (extern class) → <a href="/api-docs/unity/cs/system/text/Encoding_ForwardingDecoder/">Encoding_ForwardingDecoder</a></div>

## Instance Members

<div class="signature field-var no-description" id="FallbackBuffer"><code><span class="field-name">FallbackBuffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/DecoderFallbackBuffer/" class="type-link">DecoderFallbackBuffer</a></code><a class="header-anchor" href="#FallbackBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Fallback"><code><span class="field-name">Fallback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/DecoderFallback/" class="type-link">DecoderFallback</a></code><a class="header-anchor" href="#Fallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCharCount"><code><span class="field-name">GetCharCount</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetCharCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `index` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetChars"><code><span class="field-name">GetChars</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">byteIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">charIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `byteIndex` | [Int](/api-docs/unity/Int/) |
| `byteCount` | [Int](/api-docs/unity/Int/) |
| `chars` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `charIndex` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reset"><code><span class="field-name">Reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Convert"><code><span class="field-name">Convert</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">byteIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">byteCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">charIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">charCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flush</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">bytesUsed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="operator">,</span> <span class="arg-name">charsUsed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="operator">,</span> <span class="arg-name">completed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Convert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `byteIndex` | [Int](/api-docs/unity/Int/) |
| `byteCount` | [Int](/api-docs/unity/Int/) |
| `chars` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `charIndex` | [Int](/api-docs/unity/Int/) |
| `charCount` | [Int](/api-docs/unity/Int/) |
| `flush` | [Bool](/api-docs/unity/Bool/) |
| `bytesUsed` | [cs.Out](/api-docs/unity/cs/Out/) |
| `charsUsed` | [cs.Out](/api-docs/unity/cs/Out/) |
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


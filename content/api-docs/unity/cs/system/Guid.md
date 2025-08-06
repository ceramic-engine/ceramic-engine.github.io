---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Guid
target: Unity
permalink: api-docs/unity/cs/system/Guid/
---

# Guid

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.Guid</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IComparable_1/">IComparable_1</a>, <a href="/api-docs/unity/cs/system/IEquatable_1/">IEquatable_1</a>, <a href="/api-docs/unity/cs/system/IComparable/">IComparable</a>, <a href="/api-docs/unity/cs/system/IFormattable/">IFormattable</a></div>

## Static Members

<div class="signature field-var no-description" id="Empty"><code><span class="field-name">Empty</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a></code><a class="header-anchor" href="#Empty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="NewGuid"><code><span class="field-name">NewGuid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a></code><a class="header-anchor" href="#NewGuid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Guid](/api-docs/unity/cs/system/Guid/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Guid](/api-docs/unity/cs/system/Guid/) |
| `b` | [Guid](/api-docs/unity/cs/system/Guid/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">Guid</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Guid](/api-docs/unity/cs/system/Guid/) |
| `b` | [Guid](/api-docs/unity/cs/system/Guid/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-method no-description" id="CompareTo"><code><span class="field-name">CompareTo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CompareTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToByteArray"><code><span class="field-name">ToByteArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ToByteArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `b` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:struct` | - |
| `:libType` | - |
| `:csNative` | - |


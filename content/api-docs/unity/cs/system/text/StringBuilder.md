---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: StringBuilder
target: Unity
permalink: api-docs/unity/cs/system/text/StringBuilder/
---

# StringBuilder

<div class="type-hierarchy"><strong>cs.system.text.StringBuilder</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Instance Members

<div class="signature field-var no-description" id="Length"><code><span class="field-name">Length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Capacity"><code><span class="field-name">Capacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Capacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxCapacity"><code><span class="field-name">MaxCapacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MaxCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EnsureCapacity"><code><span class="field-name">EnsureCapacity</span><span class="parenthesis">(</span><span class="arg-name">capacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EnsureCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `capacity` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Remove"><code><span class="field-name">Remove</span><span class="parenthesis">(</span><span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#Remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startIndex` | [Int](/api-docs/unity/Int/) |
| `length` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Replace"><code><span class="field-name">Replace</span><span class="parenthesis">(</span><span class="arg-name">oldChar</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">,</span> <span class="arg-name">newChar</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#Replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `oldChar` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |
| `newChar` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Append"><code><span class="field-name">Append</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#Append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AppendLine"><code><span class="field-name">AppendLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#AppendLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AppendFormat"><code><span class="field-name">AppendFormat</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#AppendFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `format` | [String](/api-docs/unity/String/) |
| `args` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Insert"><code><span class="field-name">Insert</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">StringBuilder</a></code><a class="header-anchor" href="#Insert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |

| Returns |
|---------|
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CopyTo"><code><span class="field-name">CopyTo</span><span class="parenthesis">(</span><span class="arg-name">sourceIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">destinationIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CopyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceIndex` | [Int](/api-docs/unity/Int/) |
| `destination` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `destinationIndex` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">startIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">capacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [String](/api-docs/unity/String/) |
| `startIndex` | [Int](/api-docs/unity/Int/) |
| `length` | [Int](/api-docs/unity/Int/) |
| `capacity` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Enum
target: Unity
permalink: api-docs/unity/cs/system/Enum/
---

# Enum

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.Enum</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IComparable/">IComparable</a>, <a href="/api-docs/unity/cs/system/IConvertible/">IConvertible</a>, <a href="/api-docs/unity/cs/system/IFormattable/">IFormattable</a></div>

## Static Members

<div class="signature field-method no-description" id="GetValues"><code><span class="field-name">GetValues</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">Array</a></code><a class="header-anchor" href="#GetValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Array](/api-docs/unity/cs/system/Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetNames"><code><span class="field-name">GetNames</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetName"><code><span class="field-name">GetName</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefined"><code><span class="field-name">IsDefined</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUnderlyingType"><code><span class="field-name">GetUnderlyingType</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a></code><a class="header-anchor" href="#GetUnderlyingType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Parse"><code><span class="field-name">Parse</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |
| `value` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToObject"><code><span class="field-name">ToObject</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#ToObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |
| `value` | [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Format"><code><span class="field-name">Format</span><span class="parenthesis">(</span><span class="arg-name">enumType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumType` | [Type](/api-docs/unity/cs/system/Type/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `format` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Instance Members

<div class="signature field-method no-description" id="GetTypeCode"><code><span class="field-name">GetTypeCode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetTypeCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CompareTo"><code><span class="field-name">CompareTo</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CompareTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:struct` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |


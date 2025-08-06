---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: SerializationInfo
target: Unity
permalink: api-docs/unity/cs/system/runtime/serialization/SerializationInfo/
---

# SerializationInfo

<div class="type-hierarchy"><strong>cs.system.runtime.serialization.SerializationInfo</strong> (extern final class)</div>

## Instance Members

<div class="signature field-var no-description" id="MemberCount"><code><span class="field-name">MemberCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MemberCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullTypeName"><code><span class="field-name">FullTypeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullTypeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AssemblyName"><code><span class="field-name">AssemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#AssemblyName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddValue"><code><span class="field-name">AddValue</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetValue"><code><span class="field-name">GetValue</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetType"><code><span class="field-name">SetType</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfoEnumerator/" class="type-link">SerializationInfoEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [SerializationInfoEnumerator](/api-docs/unity/cs/system/runtime/serialization/SerializationInfoEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetBoolean"><code><span class="field-name">GetBoolean</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GetBoolean"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetByte"><code><span class="field-name">GetByte</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a></code><a class="header-anchor" href="#GetByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetChar"><code><span class="field-name">GetChar</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a></code><a class="header-anchor" href="#GetChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDateTime"><code><span class="field-name">GetDateTime</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetDateTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDecimal"><code><span class="field-name">GetDecimal</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Decimal/" class="type-link">cs.system.Decimal</a></code><a class="header-anchor" href="#GetDecimal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDouble"><code><span class="field-name">GetDouble</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#GetDouble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInt16"><code><span class="field-name">GetInt16</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Int16/" class="type-link">cs.types.Int16</a></code><a class="header-anchor" href="#GetInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.Int16](/api-docs/unity/cs/types/Int16/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInt32"><code><span class="field-name">GetInt32</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInt64"><code><span class="field-name">GetInt64</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#GetInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSByte"><code><span class="field-name">GetSByte</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Int8/" class="type-link">cs.types.Int8</a></code><a class="header-anchor" href="#GetSByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.Int8](/api-docs/unity/cs/types/Int8/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSingle"><code><span class="field-name">GetSingle</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#GetSingle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetString"><code><span class="field-name">GetString</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUInt16"><code><span class="field-name">GetUInt16</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt16/" class="type-link">cs.types.UInt16</a></code><a class="header-anchor" href="#GetUInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.UInt16](/api-docs/unity/cs/types/UInt16/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUInt32"><code><span class="field-name">GetUInt32</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#GetUInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UInt](/api-docs/unity/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUInt64"><code><span class="field-name">GetUInt64</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt64/" class="type-link">cs.types.UInt64</a></code><a class="header-anchor" href="#GetUInt64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.types.UInt64](/api-docs/unity/cs/types/UInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">converter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/IFormatterConverter/" class="type-link">IFormatterConverter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `converter` | [IFormatterConverter](/api-docs/unity/cs/system/runtime/serialization/IFormatterConverter/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


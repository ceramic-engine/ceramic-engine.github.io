---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: CompareInfo
target: Unity
permalink: api-docs/unity/cs/system/globalization/CompareInfo/
---

# CompareInfo

<div class="type-hierarchy"><strong>cs.system.globalization.CompareInfo</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/serialization/IDeserializationCallback/">cs.system.runtime.serialization.IDeserializationCallback</a></div>

## Static Members

<div class="signature field-method no-description" id="GetCompareInfo"><code><span class="field-name">GetCompareInfo</span><span class="parenthesis">(</span><span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CompareInfo</a></code><a class="header-anchor" href="#GetCompareInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `culture` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [CompareInfo](/api-docs/unity/cs/system/globalization/CompareInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsSortable"><code><span class="field-name">IsSortable</span><span class="parenthesis">(</span><span class="arg-name">ch</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSortable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ch` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LCID"><code><span class="field-name">LCID</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LCID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Compare"><code><span class="field-name">Compare</span><span class="parenthesis">(</span><span class="arg-name">string1</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">string2</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `string1` | [String](/api-docs/unity/String/) |
| `string2` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSortKey"><code><span class="field-name">GetSortKey</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/SortKey/" class="type-link">SortKey</a></code><a class="header-anchor" href="#GetSortKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [SortKey](/api-docs/unity/cs/system/globalization/SortKey/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IndexOf"><code><span class="field-name">IndexOf</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#IndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [String](/api-docs/unity/String/) |
| `value` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsPrefix"><code><span class="field-name">IsPrefix</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsPrefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [String](/api-docs/unity/String/) |
| `prefix` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsSuffix"><code><span class="field-name">IsSuffix</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">suffix</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSuffix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [String](/api-docs/unity/String/) |
| `suffix` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LastIndexOf"><code><span class="field-name">LastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `source` | [String](/api-docs/unity/String/) |
| `value` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


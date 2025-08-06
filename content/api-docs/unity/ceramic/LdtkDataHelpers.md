---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkDataHelpers
target: Unity
permalink: api-docs/unity/ceramic/LdtkDataHelpers/
---

# LdtkDataHelpers

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkDataHelpers</strong> (Class)</div>

## Static Members

<div class="signature field-var has-description has-plugin" id="TO_STRING_MAX_ITEM_LENGTH"><div class="plugin-name">ldtk</div><code><span class="field-name">TO_STRING_MAX_ITEM_LENGTH</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TO_STRING_MAX_ITEM_LENGTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper utilities for LDtk data manipulation.

Provides methods for:
- Converting colors between formats
- Managing circular reference detection in toString methods
- Other utility functions

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="HIDDEN_VALUE"><div class="plugin-name">ldtk</div><code><span class="field-name">HIDDEN_VALUE</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#HIDDEN_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toIntArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toIntArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toIntArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toFloatArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toFloatArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toStringArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toStringArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toStringArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginObjectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">beginObjectToString</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginObjectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endObjectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">endObjectToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endObjectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="objectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">objectToString</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#objectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="colorValueFromCharCode"><div class="plugin-name">ldtk</div><code><span class="field-name">colorValueFromCharCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorValueFromCharCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `code` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


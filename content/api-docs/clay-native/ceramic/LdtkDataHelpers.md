---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkDataHelpers
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LdtkDataHelpers/
---

# LdtkDataHelpers

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkDataHelpers</strong> (Class)</div>

## Static Members

<div class="signature field-var has-description has-plugin" id="TO_STRING_MAX_ITEM_LENGTH"><div class="plugin-name">ldtk</div><code><span class="field-name">TO_STRING_MAX_ITEM_LENGTH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TO_STRING_MAX_ITEM_LENGTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper utilities for LDtk data manipulation.

Provides methods for:
- Converting colors between formats
- Managing circular reference detection in toString methods
- Other utility functions

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="HIDDEN_VALUE"><div class="plugin-name">ldtk</div><code><span class="field-name">HIDDEN_VALUE</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#HIDDEN_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toIntArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toIntArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toIntArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toFloatArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toFloatArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toFloatArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toStringArray"><div class="plugin-name">ldtk</div><code><span class="field-name">toStringArray</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toStringArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginObjectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">beginObjectToString</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginObjectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endObjectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">endObjectToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endObjectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="objectToString"><div class="plugin-name">ldtk</div><code><span class="field-name">objectToString</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#objectToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `raw` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="colorValueFromCharCode"><div class="plugin-name">ldtk</div><code><span class="field-name">colorValueFromCharCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorValueFromCharCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `code` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

## Private Members


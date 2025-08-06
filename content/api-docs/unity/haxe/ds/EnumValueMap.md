---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EnumValueMap
target: Unity
permalink: api-docs/unity/haxe/ds/EnumValueMap/
---

# EnumValueMap

<div class="type-hierarchy"><a href="/api-docs/unity/haxe/ds/BalancedTree/">BalancedTree</a> → <strong>haxe.ds.EnumValueMap</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/haxe/IMap/">haxe.IMap</a></div>

EnumValueMap allows mapping of enum value keys to arbitrary values.

Keys are compared by value and recursively over their parameters. If any
parameter is not an enum value, `Reflect.compare` is used to compare them.

## Private Members

<div class="signature field-method no-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">k1</span><span class="operator">:</span> <a href="/api-docs/unity/EnumValue/" class="type-link">EnumValue</a><span class="operator">,</span> <span class="arg-name">k2</span><span class="operator">:</span> <a href="/api-docs/unity/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `k1` | [EnumValue](/api-docs/unity/EnumValue/) |
| `k2` | [EnumValue](/api-docs/unity/EnumValue/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compareArgs"><code><span class="field-name">compareArgs</span><span class="parenthesis">(</span><span class="arg-name">a1</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">a2</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a1` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> |
| `a2` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compareArg"><code><span class="field-name">compareArg</span><span class="parenthesis">(</span><span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">v2</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareArg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v1` | [Dynamic](/api-docs/unity/Dynamic/) |
| `v2` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


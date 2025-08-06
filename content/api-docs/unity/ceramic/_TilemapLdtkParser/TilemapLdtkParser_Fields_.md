---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: TilemapLdtkParser_Fields_
target: Unity
permalink: api-docs/unity/ceramic/_TilemapLdtkParser/TilemapLdtkParser_Fields_/
---

# TilemapLdtkParser_Fields_

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/TilemapLdtkParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._TilemapLdtkParser.TilemapLdtkParser_Fields_</strong> (final private class)</div>

## Static Members

<div class="signature field-method has-description has-plugin" id="allEqual"><div class="plugin-name">ldtk</div><code><span class="field-name">allEqual</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">allEqual.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">allEqual.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if all elements in an array are equal to a given value.
Used to optimize tilemap data by avoiding storing default values.


| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/unity/Array/)<allEqual.T> | The array to check  |
| `value` | allEqual.T | The value to compare against  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if all elements equal the value |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


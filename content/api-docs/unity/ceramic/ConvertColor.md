---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ConvertColor
target: Unity
permalink: api-docs/unity/ceramic/ConvertColor/
---

# ConvertColor

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ConvertColor.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertColor</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a></div>

Converter for Color fields in fragments and data serialization.

This converter handles Color values by supporting both string representations
(like "#FF0000" or "red") and numeric values (0xFFRRGGBB). The conversion
behavior can be controlled via the `preferStringBasic` property.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/ConvertField/">ConvertField</a>, <a href="/api-docs/unity/ceramic/Color/">Color</a>, <a href="/api-docs/unity/ceramic/Fragment/">Fragment</a></div>


## Instance Members

<div class="signature field-var has-description" id="preferStringBasic"><code><span class="field-name">preferStringBasic</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preferStringBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, colors are serialized as web strings (e.g., "#FF0000").
When false, colors are serialized as numeric values (default).

<hr class="field-separator" />

<div class="signature field-method has-description" id="basicToField"><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a basic value (string or number) to a Color instance.

Supports multiple input formats:
- String: Web color strings like "#FF0000", "rgb(255,0,0)", or named colors like "red"
- Number: Integer color values in 0xRRGGBB format
- null: Returns Color.BLACK as default



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/unity/ceramic/Assets/) | Assets instance for resource loading (unused for colors)  |
| `basic` | [Any](/api-docs/unity/Any/) | The source value to convert (string or number)  |
| `done` | Function | Callback invoked with the converted Color instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldToBasic"><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a Color instance to a basic value for serialization.

The output format depends on the `preferStringBasic` property:
- If true: Returns a web color string like "#FF0000"
- If false: Returns the numeric color value



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/unity/String/) | The name of the field being converted  |
| `value` | [Color](/api-docs/unity/ceramic/Color/) | The Color instance to convert  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/unity/Any/) | Either a web color string or numeric value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new color converter instance.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


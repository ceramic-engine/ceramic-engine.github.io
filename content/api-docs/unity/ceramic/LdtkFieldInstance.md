---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkFieldInstance
target: Unity
permalink: api-docs/unity/ceramic/LdtkFieldInstance/
---

# LdtkFieldInstance

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkFieldInstance</strong> (Class)</div>

An instance of a custom field value.

Represents the actual value of a custom field for an entity or level instance.
The value can be of various types: Int, Float, String, Bool, Color, Enum, etc.

## Instance Members

<div class="signature field-var has-description has-plugin" id="def"><div class="plugin-name">ldtk</div><code><span class="field-name">def</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a></code><a class="header-anchor" href="#def"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related field definition

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">ldtk</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual value of the field instance. The value type varies, depending on `type`.
- For classic types (ie. Integer, Float, Boolean, String, Text and FilePath), you just get the actual value with the expected type.
- For Color, the value is an int value using `0xRRGGBB` format (a `ceramic.Color` value).
- For Enum, the value is a String representing the selected enum value.
- For Point, the value is a `ceramic.Point` object.
- For Tile, the value is a `LdtkTilesetRectangle` object.
- For EntityRef, the value is a corresponding `LdtkEntityInstance` object.
If the field is an array, then this value will also be an array.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tile"><div class="plugin-name">ldtk</div><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetRectangle/" class="type-link">LdtkTilesetRectangle</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional tileset rectangle used to display this field (this can be the field own Tile, or some other Tile guessed from the value, like an Enum). (can be `null`)

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkWorld</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">def</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | *(optional)* |
| `ldtkWorld` | [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* |
| `def` | [LdtkFieldDefinition](/api-docs/unity/ceramic/LdtkFieldDefinition/) | *(optional)* |

## Private Members

<div class="signature field-method no-description has-plugin" id="rawValueToValue"><div class="plugin-name">ldtk</div><code><span class="field-name">rawValueToValue</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ldtkWorld</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rawValue</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#rawValueToValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | *(optional)* |
| `ldtkWorld` | [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | *(optional)* |
| `rawValue` | [Any](/api-docs/unity/Any/) | *(optional)* |
| `type` | [String](/api-docs/unity/String/) | *(optional)* |

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


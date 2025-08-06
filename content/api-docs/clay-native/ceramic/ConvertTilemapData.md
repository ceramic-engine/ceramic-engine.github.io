---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: ConvertTilemapData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ConvertTilemapData/
---

# ConvertTilemapData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/ConvertTilemapData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertTilemapData</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a></div>

Field converter that handles conversion between tilemap asset names (strings)
and TilemapData instances. This converter enables automatic loading of tilemap
data when deserializing entities from fragments or other data sources.

When a string tilemap name is provided, the converter:
1. Uses the Assets system to load the tilemap asset
2. Extracts the TilemapData from the loaded asset
3. Provides the data to the entity field

This converter is automatically registered by the TilemapPlugin and used
whenever a TilemapData field needs to be populated from serialized data.

## Usage Example:
```haxe
// In a fragment or serialized data:
{
    "tilemap": "levels/level1"  // String asset name
}

// Gets converted to:
entity.tilemap = <TilemapData instance>
```

<div class="see"><strong>See:</strong> ConvertField The base interface for field converters, TilemapData The tilemap data structure, TilemapAsset The asset type that contains tilemap data</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="basicToField"><div class="plugin-name">tilemap</div><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a tilemap asset name (string) to a TilemapData instance.
Loads the tilemap asset asynchronously and extracts its data.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns the field being converted  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | The Assets instance to use for loading  |
| `basic` | [String](/api-docs/clay-native/String/) | The tilemap asset name to load  |
| `done` | Function | Callback that receives the loaded TilemapData (or null if loading fails) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fieldToBasic"><div class="plugin-name">tilemap</div><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a TilemapData instance back to its asset name string.
Used when serializing entities that contain tilemap data.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity that owns the field being converted  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `value` | [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) | The TilemapData instance to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The asset name string, or null if the data has no associated asset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new tilemap data converter instance.


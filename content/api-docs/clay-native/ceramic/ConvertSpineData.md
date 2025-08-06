---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: ConvertSpineData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ConvertSpineData/
---

# ConvertSpineData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/ConvertSpineData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertSpineData</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a></div>

Converter for Spine animation data fields in entity components.

This converter handles the serialization and deserialization of SpineData
fields when saving/loading entity data. It automatically loads the corresponding
Spine asset when converting from a string asset name to SpineData.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/SpineData/">SpineData</a>, <a href="/api-docs/clay-native/ceramic/SpineAsset/">SpineAsset</a>, <a href="/api-docs/clay-native/ceramic/ConvertField/">ConvertField</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="basicToField"><div class="plugin-name">spine</div><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a string (asset name) to SpineData by loading the corresponding Spine asset.

This method is called during deserialization when converting saved data back
to runtime SpineData objects. It ensures the Spine asset is loaded before
providing the SpineData to the entity.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity instance that owns the field  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/clay-native/ceramic/Assets/) | The asset manager used to load the Spine asset  |
| `basic` | [String](/api-docs/clay-native/String/) | The string value (asset name) to convert from  |
| `done` | Function | Callback invoked with the loaded SpineData (or null if loading fails) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fieldToBasic"><div class="plugin-name">spine</div><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpineData/" class="type-link">SpineData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts SpineData to a string (asset name) for serialization.

This method extracts the asset name from the SpineData object,
allowing it to be saved as a simple string reference rather than
the full animation data.



| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/clay-native/ceramic/Entity/) | The entity instance that owns the field  |
| `field` | [String](/api-docs/clay-native/String/) | The name of the field being converted  |
| `value` | [SpineData](/api-docs/clay-native/ceramic/SpineData/) | The SpineData value to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The asset name string, or null if the SpineData has no associated asset |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


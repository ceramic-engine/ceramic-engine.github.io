---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkVisual
target: Unity
permalink: api-docs/unity/ceramic/LdtkVisual/
---

# LdtkVisual

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkVisual.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <strong>ceramic.LdtkVisual</strong> (Class)</div>

A default visual implementation to render LDtk entities.

This class automatically creates the appropriate visual representation
for an LDtk entity based on its tile settings and render mode.

Supported tile render modes:
- Cover: Scales tile to cover the entire entity bounds
- FitInside: Scales tile to fit within entity bounds while maintaining aspect ratio
- Repeat: Tiles the texture to fill the entity bounds
- Stretch: Stretches the tile to match entity dimensions
- FullSizeCropped: Shows tile at original size, cropped to entity bounds
- FullSizeUncropped: Shows tile at original size, even if larger than entity
- NineSlice: Uses nine-slice scaling for UI elements

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/LdtkEntityInstance/">LdtkEntityInstance</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkEntity"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkEntity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkEntityInstance/" class="type-link">LdtkEntityInstance</a></code><a class="header-anchor" href="#ldtkEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The LDtk entity instance this visual represents.
Contains all the entity data including position, size, and custom fields.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">ldtkEntity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkEntityInstance/" class="type-link">LdtkEntityInstance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new visual representation for an LDtk entity.
Automatically sets up the appropriate rendering based on the entity's tile settings.


| Name | Type | Description |
|------|------|-------------|
| `ldtkEntity` | [LdtkEntityInstance](/api-docs/unity/ceramic/LdtkEntityInstance/) | The LDtk entity instance to visualize |

## Private Members

<div class="signature field-method has-description has-plugin" id="setup"><div class="plugin-name">ldtk</div><code><span class="field-name">setup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets up the visual representation based on the entity's properties.
Handles positioning, sizing, anchoring, and creates the appropriate
visual elements based on the tile render mode.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


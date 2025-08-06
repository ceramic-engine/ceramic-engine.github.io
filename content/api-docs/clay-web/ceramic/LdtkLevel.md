---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkLevel
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkLevel/
---

# LdtkLevel

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkLevel</strong> (Class)</div>

Represents a single level in an LDtk world.

Contains all the layer instances, entities, and properties for one game level.
Levels can reference external data files in multi-file projects.

Each level has:
- Position in world coordinates
- Background settings
- Layer instances with tiles and entities
- Custom field values

## Instance Members

<div class="signature field-var has-description has-plugin" id="world"><div class="plugin-name">ldtk</div><code><span class="field-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkWorld` object this level belong to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ceramicTilemap"><div class="plugin-name">ldtk</div><code><span class="field-name">ceramicTilemap</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#ceramicTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic tilemap generated from this level

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bgColor"><div class="plugin-name">ldtk</div><code><span class="field-name">bgColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#bgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background color of the level

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bgPos"><div class="plugin-name">ldtk</div><code><span class="field-name">bgPos</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkBackgroundPosition/" class="type-link">LdtkBackgroundPosition</a></code><a class="header-anchor" href="#bgPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position informations of the background image, if there is one. (can be `null`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bgRelPath"><div class="plugin-name">ldtk</div><code><span class="field-name">bgRelPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#bgRelPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The _optional_ relative path to the level background image. (can be null)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="neighbours"><div class="plugin-name">ldtk</div><code><span class="field-name">neighbours</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkLevelNeighbour/" class="type-link">LdtkLevelNeighbour</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#neighbours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array listing all other levels touching this one on the world map.
Only relevant for world layouts where level spatial positioning is manual (ie. GridVania, Free). For Horizontal and Vertical layouts, this array is always empty.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="externalRelPath"><div class="plugin-name">ldtk</div><code><span class="field-name">externalRelPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#externalRelPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This value is not null if the project option "Save levels separately" is enabled. In this case, this relative path points to the level Json file.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldInstances"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array containing this level custom field values.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique instance identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layerInstances"><div class="plugin-name">ldtk</div><code><span class="field-name">layerInstances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layerInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array containing all Layer instances. IMPORTANT: if the project option "Save levels separately" is enabled, this field will be `null`.
This array is sorted in display order: the 1st layer is the top-most and the last is behind.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxWid"><div class="plugin-name">ldtk</div><code><span class="field-name">pxWid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxWid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the level in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pxHei"><div class="plugin-name">ldtk</div><code><span class="field-name">pxHei</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pxHei"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the level in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldDepth"><div class="plugin-name">ldtk</div><code><span class="field-name">worldDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index that represents the "depth" of the level in the world. Default is 0, greater means "above", lower means "below".
This value is mostly used for display only and is intended to make stacking of levels easier to manage.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldX"><div class="plugin-name">ldtk</div><code><span class="field-name">worldX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World X coordinate in pixels.
Only relevant for world layouts where level spatial positioning is manual (ie. GridVania, Free). For Horizontal and Vertical layouts, the value is always -1 here.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldY"><div class="plugin-name">ldtk</div><code><span class="field-name">worldY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World Y coordinate in pixels.
Only relevant for world layouts where level spatial positioning is manual (ie. GridVania, Free). For Horizontal and Vertical layouts, the value is always -1 here.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="ensureLoaded"><div class="plugin-name">ldtk</div><code><span class="field-name">ensureLoaded</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureLoaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unload"><div class="plugin-name">ldtk</div><code><span class="field-name">unload</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layerInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">layerInstance</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#layerInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkLayerInstance](/api-docs/clay-web/ceramic/LdtkLayerInstance/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fieldInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">fieldInstance</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkFieldInstance/" class="type-link">LdtkFieldInstance</a></code><a class="header-anchor" href="#fieldInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkFieldInstance](/api-docs/clay-web/ceramic/LdtkFieldInstance/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mapEntities"><div class="plugin-name">ldtk</div><code><span class="field-name">mapEntities</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mapEntities"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Walk through every entity instance in the level.
Optionally filter by `identifier`. The `callback` will be
called for each matching entity instance.

| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createVisualsForEntities"><div class="plugin-name">ldtk</div><code><span class="field-name">createVisualsForEntities</span><span class="parenthesis">(</span><span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">createVisual</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createVisualsForEntities"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create visuals for every entity instance in the level.
Optionally filter by `identifier`. If provided, the `createVisual` callback
will be called for every entity, and this callback can either return a `Visual`
instance or `null`.

If a visual is created, it will be added at the correct depth
in the `tilemap` object, inside the correct `layer`.

If `createVisual` is not provided, this method will create instances of `LdtkVisual`,
which are built-in visuals that will display entities that are renderable.

| Name | Type | Default |
|------|------|---------|
| `tilemap` | [Tilemap](/api-docs/clay-web/ceramic/Tilemap/) | |
| `identifier` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `createVisual` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/clay-web/ceramic/LdtkData/) | *(optional)* |
| `world` | [LdtkWorld](/api-docs/clay-web/ceramic/LdtkWorld/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

## Private Members


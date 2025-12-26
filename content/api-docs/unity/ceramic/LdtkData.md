---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkData
target: Unity
permalink: api-docs/unity/ceramic/LdtkData/
---

# LdtkData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.LdtkData</strong> (Class)</div>

Root class representing an LDtk project data structure.

This is the main entry point for working with LDtk level data in Ceramic.
It contains all the project definitions, worlds, and levels from an LDtk file.

The data structure is optimized for performance on static targets and provides
easy access to all LDtk entities, layers, and tilesets.

<div class="see"><strong>See:</strong> https://ldtk.io/ for more information about LDtk</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="version"><div class="plugin-name">ldtk</div><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

File format version

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique project identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bgColor"><div class="plugin-name">ldtk</div><code><span class="field-name">bgColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#bgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Project background color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A structure containing all the definitions of this project

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="externalLevels"><div class="plugin-name">ldtk</div><code><span class="field-name">externalLevels</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#externalLevels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, one file will be saved for the project (incl. all its definitions) and one file in a sub-folder for each level.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="toc"><div class="plugin-name">ldtk</div><code><span class="field-name">toc</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/LdtkTocEntry/" class="type-link">LdtkTocEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#toc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All instances of entities that have their exportToToc flag enabled are listed by def identifier here.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worlds"><div class="plugin-name">ldtk</div><code><span class="field-name">worlds</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#worlds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All worlds of this LDtk project

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">ldtk</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapAsset/" class="type-link">TilemapAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related asset (if any)

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">ldtk</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="world"><div class="plugin-name">ldtk</div><code><span class="field-name">world</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a></code><a class="header-anchor" href="#world"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a world by its identifier.


| Name | Type | Description |
|------|------|-------------|
| `identifier` | [String](/api-docs/unity/String/) | The world identifier to search for  |

| Returns | Description |
|---------|-------------|
| [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | The matching LdtkWorld, or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="worldByIid"><div class="plugin-name">ldtk</div><code><span class="field-name">worldByIid</span><span class="parenthesis">(</span><span class="arg-name">iid</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkWorld/" class="type-link">LdtkWorld</a></code><a class="header-anchor" href="#worldByIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a world by its unique instance identifier (IID).


| Name | Type | Description |
|------|------|-------------|
| `iid` | [String](/api-docs/unity/String/) | The world IID to search for  |

| Returns | Description |
|---------|-------------|
| [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | The matching LdtkWorld, or null if not found |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="tocEntry"><div class="plugin-name">ldtk</div><code><span class="field-name">tocEntry</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTocEntry/" class="type-link">LdtkTocEntry</a></code><a class="header-anchor" href="#tocEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [LdtkTocEntry](/api-docs/unity/ceramic/LdtkTocEntry/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="findLayerDef"><div class="plugin-name">ldtk</div><code><span class="field-name">findLayerDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerDefinition/" class="type-link">LdtkLayerDefinition</a></code><a class="header-anchor" href="#findLayerDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [LdtkLayerDefinition](/api-docs/unity/ceramic/LdtkLayerDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="findTilesetDef"><div class="plugin-name">ldtk</div><code><span class="field-name">findTilesetDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#findTilesetDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [LdtkTilesetDefinition](/api-docs/unity/ceramic/LdtkTilesetDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="findEntityDef"><div class="plugin-name">ldtk</div><code><span class="field-name">findEntityDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkEntityDefinition/" class="type-link">LdtkEntityDefinition</a></code><a class="header-anchor" href="#findEntityDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [LdtkEntityDefinition](/api-docs/unity/ceramic/LdtkEntityDefinition/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findLayerInstance"><div class="plugin-name">ldtk</div><code><span class="field-name">findLayerInstance</span><span class="parenthesis">(</span><span class="arg-name">iid</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLayerInstance/" class="type-link">LdtkLayerInstance</a></code><a class="header-anchor" href="#findLayerInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find a layer instance by its iid across all worlds and levels


| Name | Type | Description |
|------|------|-------------|
| `iid` | [String](/api-docs/unity/String/) | The unique instance identifier of the layer  |

| Returns | Description |
|---------|-------------|
| [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) | The layer instance if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loadExternalLevelData</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loadLevelCeramicTilemap</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new LdtkData instance from JSON data.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `json` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* | The parsed LDtk project JSON data  |
| `loadExternalLevelData` | Function | *(optional)* | Optional callback to load external level data when using multi-file projects  |
| `loadLevelCeramicTilemap` | Function | *(optional)* | Optional callback to load Ceramic tilemap for a level |

## Private Members

<div class="signature field-method has-description has-plugin" id="loadExternalLevelData"><div class="plugin-name">ldtk</div><code><span class="field-name">loadExternalLevelData</span><span class="parenthesis">(</span><span class="arg-name">relPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadExternalLevelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used to load external level data

| Name | Type |
|------|------|
| `relPath` | [String](/api-docs/unity/String/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadLevelCeramicTilemap"><div class="plugin-name">ldtk</div><code><span class="field-name">loadLevelCeramicTilemap</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLevelCeramicTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When loading external levels, we also need
a funtion to load the Ceramic tilemap from it.
This is it.

| Name | Type |
|------|------|
| `level` | [LdtkLevel](/api-docs/unity/ceramic/LdtkLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


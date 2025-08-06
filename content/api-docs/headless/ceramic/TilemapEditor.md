---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapEditor
target: Headless
permalink: api-docs/headless/ceramic/TilemapEditor/
---

# TilemapEditor

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapEditor.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.TilemapEditor</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Component/">Component</a></div>

Interactive tilemap editor component that enables in-game tile painting and erasing.

This component can be attached to a Tilemap entity to enable runtime editing functionality,
allowing users to paint tiles with left-click and erase them with right-click. It supports
continuous painting while dragging and interpolates between positions for smooth lines.

## Usage Example

```haxe
// Create a tilemap and enable editing
var tilemap = new Tilemap();
tilemap.tilemapData = myTilemapData;

// Attach editor to allow painting on the 'main' layer
var editor = new TilemapEditor('main', grassTile, emptyTile);
tilemap.component(editor);

// Listen for edit events
editor.onFill(this, index -> {
    trace('Filled tile at index: $index');
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="tilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tilemap/" class="type-link">Tilemap</a></code><a class="header-anchor" href="#tilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tilemap entity this editor is attached to.
Set automatically when used as a component.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layerName"><div class="plugin-name">tilemap</div><code><span class="field-name">layerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#layerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the tilemap layer to edit.
Must match an existing layer in the tilemap data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fillValue"><div class="plugin-name">tilemap</div><code><span class="field-name">fillValue</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapTile/" class="type-link">TilemapTile</a></code><a class="header-anchor" href="#fillValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile value to apply when filling (left-click).
This can be a tile ID from a tileset or a special value.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="eraseValue"><div class="plugin-name">tilemap</div><code><span class="field-name">eraseValue</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapTile/" class="type-link">TilemapTile</a></code><a class="header-anchor" href="#eraseValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile value to apply when erasing (right-click).
Typically 0 to represent an empty tile.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enabled"><div class="plugin-name">tilemap</div><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether editing is currently enabled.
Set to false to temporarily disable user interaction.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">tilemap</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">tilemap</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this editor is attached to a tilemap as a component.
Sets up the necessary event listeners for pointer interaction.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">layerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"main"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fillValue</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapTile/" class="type-link">TilemapTile</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">eraseValue</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapTile/" class="type-link">TilemapTile</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new tilemap editor.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layerName` | [String](/api-docs/headless/String/) | `"main"` | The name of the layer to edit (default: 'main')  |
| `fillValue` | [TilemapTile](/api-docs/headless/ceramic/TilemapTile/) | `1` | The tile value for filling (default: 1)  |
| `eraseValue` | [TilemapTile](/api-docs/headless/ceramic/TilemapTile/) | `0` | The tile value for erasing (default: 0) |

## Private Members

<div class="signature field-var has-description has-plugin" id="buttonDownId"><div class="plugin-name">tilemap</div><code><span class="field-name">buttonDownId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#buttonDownId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ID of the button currently being held down (-1 if none).
0 = left button, 2 = right button.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="buttonDownValue"><div class="plugin-name">tilemap</div><code><span class="field-name">buttonDownValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#buttonDownValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tile value being painted with the current button.
Cached to ensure consistency during drag operations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hoveredTileIndexes"><div class="plugin-name">tilemap</div><code><span class="field-name">hoveredTileIndexes</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a></code><a class="header-anchor" href="#hoveredTileIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map tracking which tiles have been painted during the current drag.
Prevents painting the same tile multiple times in one stroke.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastPaintedX"><div class="plugin-name">tilemap</div><code><span class="field-name">lastPaintedX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastPaintedX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last painted X position in visual coordinates.
Used for interpolating smooth lines when dragging.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastPaintedY"><div class="plugin-name">tilemap</div><code><span class="field-name">lastPaintedY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastPaintedY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last painted Y position in visual coordinates.
Used for interpolating smooth lines when dragging.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tileIndexAtPosition"><div class="plugin-name">tilemap</div><code><span class="field-name">tileIndexAtPosition</span><span class="parenthesis">(</span><span class="arg-name">tilemapData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapData/" class="type-link">TilemapData</a><span class="operator">,</span> <span class="arg-name">layerData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TilemapLayerData/" class="type-link">TilemapLayerData</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileIndexAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the tile index at a given position in visual coordinates.
Takes into account layer offsets and tile dimensions.


| Name | Type | Description |
|------|------|-------------|
| `tilemapData` | [TilemapData](/api-docs/headless/ceramic/TilemapData/) | The tilemap data containing layer information  |
| `layerData` | [TilemapLayerData](/api-docs/headless/ceramic/TilemapLayerData/) | The specific layer data to check against  |
| `x` | [Float](/api-docs/headless/Float/) | The X position in visual coordinates  |
| `y` | [Float](/api-docs/headless/Float/) | The Y position in visual coordinates  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The tile index at the position, or -1 if outside bounds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFill"><div class="plugin-name">tilemap</div><code><span class="field-name">emitFill</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when a tile is filled with the fill value.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/headless/Int/) | The tile index that was filled |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitErase"><div class="plugin-name">tilemap</div><code><span class="field-name">emitErase</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitErase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when a tile is erased with the erase value.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/headless/Int/) | The tile index that was erased |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerDown"><div class="plugin-name">tilemap</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer down events to start tile painting or erasing.
Left-click starts filling tiles, right-click starts erasing.


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | Touch/mouse event information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerUp"><div class="plugin-name">tilemap</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer up events to stop tile painting or erasing.
Cleans up the drag state when the mouse button is released.


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | Touch/mouse event information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerMove"><div class="plugin-name">tilemap</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer move events during tile painting or erasing.
Interpolates between the last and current positions to paint smooth lines,
ensuring no tiles are missed when moving the pointer quickly.


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | Touch/mouse event information |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">tilemap</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">tilemap</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/headless/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


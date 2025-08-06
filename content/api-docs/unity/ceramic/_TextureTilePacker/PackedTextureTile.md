---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PackedTextureTile
target: Unity
permalink: api-docs/unity/ceramic/_TextureTilePacker/PackedTextureTile/
---

# PackedTextureTile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureTilePacker.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/TextureTile/">ceramic.TextureTile</a> → <strong>ceramic._TextureTilePacker.PackedTextureTile</strong> (private class)</div>

Internal texture tile implementation with grid allocation metadata.

PackedTextureTile extends TextureTile with additional information
about its position and size within the packer's grid system. This
allows the packer to track which grid cells are occupied and
properly release them when the tile is no longer needed.

<div class="see"><strong>See:</strong> TextureTilePacker The main packer that manages these tiles</div>


## Instance Members

<div class="signature field-var has-description" id="col"><code><span class="field-name">col</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#col"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The starting column index in the packer's grid.

Zero-based index indicating the leftmost column
occupied by this tile. Set to -1 before allocation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="row"><code><span class="field-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#row"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The starting row index in the packer's grid.

Zero-based index indicating the topmost row
occupied by this tile. Set to -1 before allocation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedCols"><code><span class="field-name">usedCols</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#usedCols"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of grid columns occupied by this tile.

Tiles larger than padWidth span multiple columns.
Always at least 1 for allocated tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedRows"><code><span class="field-name">usedRows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#usedRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of grid rows occupied by this tile.

Tiles larger than padHeight span multiple rows.
Always at least 1 for allocated tiles.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">ceramic.Texture</a><span class="operator">,</span> <span class="arg-name">frameX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new packed texture tile.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [ceramic.Texture](/api-docs/unity/ceramic/Texture/) | The render texture containing this tile  |
| `frameX` | [Float](/api-docs/unity/Float/) | X position in the texture  |
| `frameY` | [Float](/api-docs/unity/Float/) | Y position in the texture  |
| `frameWidth` | [Float](/api-docs/unity/Float/) | Width of the tile  |
| `frameHeight` | [Float](/api-docs/unity/Float/) | Height of the tile |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | ceramic.TextureTilePacker |


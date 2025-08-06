---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepritePalette
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/AsepritePalette/
---

# AsepritePalette

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepritePalette.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepritePalette</strong> (Class)</div>

Represents a color palette from an Aseprite file.

Aseprite supports indexed color mode where each pixel references
a color from a palette. This class stores the palette entries
and provides utilities for color lookup.

The palette is stored as a map from color indices to ARGB color values,
allowing efficient lookup during rendering of indexed color sprites.

<div class="see"><strong>See:</strong> AsepriteData for the parent data structure, PaletteChunk for the raw palette data from the file</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="fromChunk"><div class="plugin-name">ase</div><code><span class="field-name">fromChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/PaletteChunk/" class="type-link">ase.chunks.PaletteChunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AsepritePalette</a></code><a class="header-anchor" href="#fromChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an AsepritePalette from raw palette chunk data.

Converts the palette entries from the file format into an efficient
integer map for color lookups. Colors are packed as 32-bit ARGB values.



| Name | Type | Description |
|------|------|-------------|
| `chunk` | [ase.chunks.PaletteChunk](/api-docs/clay-native/ase/chunks/PaletteChunk/) | The palette chunk from the Aseprite file  |

| Returns | Description |
|---------|-------------|
| [AsepritePalette](/api-docs/clay-native/ceramic/AsepritePalette/) | A new AsepritePalette instance with indexed colors |

## Instance Members

<div class="signature field-var has-description has-plugin" id="entries"><div class="plugin-name">ase</div><code><span class="field-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map from palette index to ARGB color value.
Keys are palette indices (0-255 for 8-bit indexed color).
Values are 32-bit ARGB colors stored as integers.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="chunk"><div class="plugin-name">ase</div><code><span class="field-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/PaletteChunk/" class="type-link">ase.chunks.PaletteChunk</a></code><a class="header-anchor" href="#chunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The raw palette chunk data from the Aseprite file.
Contains additional metadata like color names if present.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ase</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntIntMap/" class="type-link">IntIntMap</a><span class="operator">,</span> <span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/PaletteChunk/" class="type-link">ase.chunks.PaletteChunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `entries` | [IntIntMap](/api-docs/clay-native/ceramic/IntIntMap/) | * Map from palette index to ARGB color value. Keys are palette indices (0-255 for 8-bit indexed color). Values are 32-bit ARGB colors stored as integers. |
| `chunk` | [ase.chunks.PaletteChunk](/api-docs/clay-native/ase/chunks/PaletteChunk/) | * The raw palette chunk data from the Aseprite file. Contains additional metadata like color names if present. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: Palette
target: Clay (Native)
permalink: api-docs/clay-native/ase/Palette/
---

# Palette

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/Palette.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.Palette</strong> (Class)</div>

## Static Members

<div class="signature field-var has-description" id="DB32"><code><span class="field-name">DB32</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#DB32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default palette used by Aseprite when a new file is created

<hr class="field-separator" />

<div class="signature field-method no-description" id="createDefault"><code><span class="field-name">createDefault</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Palette</a></code><a class="header-anchor" href="#createDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Palette](/api-docs/clay-native/ase/Palette/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromRGBA"><code><span class="field-name">fromRGBA</span><span class="parenthesis">(</span><span class="arg-name">rgba</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Palette</a></code><a class="header-anchor" href="#fromRGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a palette from an array of RGBA values

| Name | Type |
|------|------|
| `rgba` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

| Returns |
|---------|
| [Palette](/api-docs/clay-native/ase/Palette/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromChunk"><code><span class="field-name">fromChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/PaletteChunk/" class="type-link">ase.chunks.PaletteChunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Palette</a></code><a class="header-anchor" href="#fromChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create palette from Palette Chunk (0x2019)

| Name | Type |
|------|------|
| `chunk` | [ase.chunks.PaletteChunk](/api-docs/clay-native/ase/chunks/PaletteChunk/) |

| Returns |
|---------|
| [Palette](/api-docs/clay-native/ase/Palette/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromOldChunk"><code><span class="field-name">fromOldChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/OldPaleteChunk/" class="type-link">ase.chunks.OldPaleteChunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Palette</a></code><a class="header-anchor" href="#fromOldChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create palette from Old Plaette Chunk (0x0004)

| Name | Type |
|------|------|
| `chunk` | [ase.chunks.OldPaleteChunk](/api-docs/clay-native/ase/chunks/OldPaleteChunk/) |

| Returns |
|---------|
| [Palette](/api-docs/clay-native/ase/Palette/) |

## Instance Members

<div class="signature field-var no-description" id="entries"><code><span class="field-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ase/PaletteEntry/" class="type-link">PaletteEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="numColors"><code><span class="field-name">numColors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="firstIndex"><code><span class="field-name">firstIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#firstIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

**Deprecated:** No reason to use this. First index will always be `0`

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastIndex"><code><span class="field-name">lastIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

**Deprecated:** No reason to use this. Last index will alway equal to `entries.length - 1`

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEntry"><code><span class="field-name">getEntry</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/PaletteEntry/" class="type-link">PaletteEntry</a></code><a class="header-anchor" href="#getEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

**Deprecated:** One can just use `palette.entries[index]` instead

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [PaletteEntry](/api-docs/clay-native/ase/PaletteEntry/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getRGBA"><code><span class="field-name">getRGBA</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getRGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getARGB"><code><span class="field-name">getARGB</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getARGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toChunk"><code><span class="field-name">toChunk</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ase/chunks/Chunk/" class="type-link">ase.chunks.Chunk</a></code><a class="header-anchor" href="#toChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates the Old Palette Chunk (0x0004) if there are fewer than 256 colors
in the palette and no alpha channel (all alpha values are 0xff). Otherwise,
creates the Palette Chunk (0x2019).
| Returns |
|---------|
| [ase.chunks.Chunk](/api-docs/clay-native/ase/chunks/Chunk/) |

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ase/PaletteEntry/" class="type-link">PaletteEntry</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entries` | [Array](/api-docs/clay-native/Array/)<[PaletteEntry](/api-docs/clay-native/ase/PaletteEntry/)> |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: Ase
target: Unity
permalink: api-docs/unity/ase/Ase/
---

# Ase

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/Ase.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.Ase</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ase/types/Serializable/">ase.types.Serializable</a></div>

Aseprite file format reader/writer

## Static Members

<div class="signature field-method has-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">colorDepth</span><span class="operator">:</span> <a href="/api-docs/unity/ase/types/ColorDepth/" class="type-link">ase.types.ColorDepth</a> <span class="operator">=</span> <span class="default-value">BPP32</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">initialPalette</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Ase</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Ase instance

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Int](/api-docs/unity/Int/) | | File width |
| `height` | [Int](/api-docs/unity/Int/) | | File height |
| `colorDepth` | [ase.types.ColorDepth](/api-docs/unity/ase/types/ColorDepth/) | `BPP32` | (optional, default BPP32) color depth. BPP32, BPP16, BPP8 or INDEXED |
| `initialPalette` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | *(optional)* | (optional) Array of RGBA values for initial palette |

| Returns |
|---------|
| [Ase](/api-docs/unity/ase/Ase/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Ase</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Ase instance by parsing bytes loaded from a file or network

| Name | Type | Description |
|------|------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) | bytes to parse |

| Returns |
|---------|
| [Ase](/api-docs/unity/ase/Ase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="main"><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="header"><code><span class="field-name">header</span><span class="operator">:</span> <a href="/api-docs/unity/ase/AseHeader/" class="type-link">AseHeader</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="frames"><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ase/Frame/" class="type-link">Frame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorDepth"><code><span class="field-name">colorDepth</span><span class="operator">:</span> <a href="/api-docs/unity/ase/types/ColorDepth/" class="type-link">ase.types.ColorDepth</a></code><a class="header-anchor" href="#colorDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only color depth of the file

<hr class="field-separator" />

<div class="signature field-var has-description" id="fileSize"><code><span class="field-name">fileSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Files size in bytes

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstFrame"><code><span class="field-name">firstFrame</span><span class="operator">:</span> <a href="/api-docs/unity/ase/Frame/" class="type-link">Frame</a></code><a class="header-anchor" href="#firstFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sprite width

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sprite height

<hr class="field-separator" />

<div class="signature field-var no-description" id="palette"><code><span class="field-name">palette</span><span class="operator">:</span> <a href="/api-docs/unity/ase/Palette/" class="type-link">Palette</a></code><a class="header-anchor" href="#palette"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="layers"><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ase/Layer/" class="type-link">Layer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="initPalette"><code><span class="field-name">initPalette</span><span class="parenthesis">(</span><span class="arg-name">colors</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initPalette"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize the pallet

| Name | Type | Description |
|------|------|-------------|
| `colors` | [Array](/api-docs/unity/Array/)<[Int](/api-docs/unity/Int/)> | Array of RGBA color values for the new pallet |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFrame"><code><span class="field-name">addFrame</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">copyPrev</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">100</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ase/Frame/" class="type-link">Frame</a></code><a class="header-anchor" href="#addFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a frame to the sprite

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `copyPrev` | [Bool](/api-docs/unity/Bool/) | `false` | if true will copy all the cel from the previous frame |
| `duration` | [Int](/api-docs/unity/Int/) | `100` | Duration of the frame in milliseconds |

| Returns |
|---------|
| [Frame](/api-docs/unity/ase/Frame/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addLayer"><code><span class="field-name">addLayer</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">editable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Ase</a></code><a class="header-anchor" href="#addLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new layer

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/unity/String/) | *(optional)* | (optional) Name for the new layer. If not specified `Layer N` will be used where `N` is the amount of currently existing layers + 1 |
| `visible` | [Bool](/api-docs/unity/Bool/) | `true` | (optional, default `true`) |
| `editable` | [Bool](/api-docs/unity/Bool/) | `true` | (optional, default `true`) |

| Returns |
|---------|
| [Ase](/api-docs/unity/ase/Ase/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts Aseprite data to binary data that can be stored to a file

| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/unity/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-method has-description" id="createHeader"><code><span class="field-name">createHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

https://github.com/aseprite/aseprite/blob/10dda30a15a58d09e561a59594f348b4db3a4405/docs/ase-file-specs.md#old-palette-chunk-0x0004

Aseprite v1.1 saves both chunks (0x0004 and 0x2019) just for backward compatibility.
Aseprite v1.3.5 writes this chunk if the palette doesn't have alpha channel and
contains 256 colors or less (because this chunk is smaller), in other case the new
palette chunk (0x2019) will be used (and the old one is not saved anymore).

<hr class="field-separator" />

<div class="signature field-method no-description" id="createFirstFrame"><code><span class="field-name">createFirstFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createFirstFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="createLayers"><code><span class="field-name">createLayers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createLayers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create layers after ase chunks are loaded

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:expose` | "Ase" |


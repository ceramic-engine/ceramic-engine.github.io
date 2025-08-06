---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: Frame
target: Headless
permalink: api-docs/headless/ase/Frame/
---

# Frame

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/Frame.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.Frame</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ase/types/Serializable/">ase.types.Serializable</a></div>

## Static Members

<div class="signature field-method has-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Ase/" class="type-link">Ase</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Frame</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse bytes to create a new frame

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | | bytes to parse |
| `ase` | [Ase](/api-docs/headless/ase/Ase/) | *(optional)* | (optional) `ase.Ase` instance to attach the frame to |

| Returns |
|---------|
| [Frame](/api-docs/headless/ase/Frame/) |

## Instance Members

<div class="signature field-var no-description" id="ase"><code><span class="field-name">ase</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Ase/" class="type-link">Ase</a></code><a class="header-anchor" href="#ase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="header"><code><span class="field-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/ase/FrameHeader/" class="type-link">FrameHeader</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chunks"><code><span class="field-name">chunks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ase/chunks/Chunk/" class="type-link">ase.chunks.Chunk</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#chunks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chunkTypes"><code><span class="field-name">chunkTypes</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#chunkTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cels"><code><span class="field-name">cels</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#cels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Frame size in bytes

<hr class="field-separator" />

<div class="signature field-method no-description" id="addChunk"><code><span class="field-name">addChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/ase/chunks/Chunk/" class="type-link">ase.chunks.Chunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chunk` | [ase.chunks.Chunk](/api-docs/headless/ase/chunks/Chunk/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cel"><code><span class="field-name">cel</span><span class="parenthesis">(</span><span class="arg-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">replace</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Cel/" class="type-link">Cel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Cel/" class="type-link">Cel</a></code><a class="header-anchor" href="#cel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Access a cel at specific layer

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layerIndex` | [Int](/api-docs/headless/Int/) | | Index of the layer |
| `replace` | [Cel](/api-docs/headless/ase/Cel/) | *(optional)* | Place this cel at a specific layer |

| Returns |
|---------|
| [Cel](/api-docs/headless/ase/Cel/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCel"><code><span class="field-name">createCel</span><span class="parenthesis">(</span><span class="arg-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">xPosition</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">yPosition</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Cel/" class="type-link">Cel</a></code><a class="header-anchor" href="#createCel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create Cel

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layerIndex` | [Int](/api-docs/headless/Int/) | | Index of the layer to create new cel on |
| `width` | [Int](/api-docs/headless/Int/) | | Cel width |
| `height` | [Int](/api-docs/headless/Int/) | | Cel height |
| `xPosition` | [Int](/api-docs/headless/Int/) | *(optional)* | Cel x position |
| `yPosition` | [Int](/api-docs/headless/Int/) | *(optional)* | Cel y position |

| Returns |
|---------|
| [Cel](/api-docs/headless/ase/Cel/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linkCel"><code><span class="field-name">linkCel</span><span class="parenthesis">(</span><span class="arg-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frameIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Cel/" class="type-link">Cel</a></code><a class="header-anchor" href="#linkCel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a linked cel

| Name | Type | Description |
|------|------|-------------|
| `layerIndex` | [Int](/api-docs/headless/Int/) | @param frameIndex |
| `frameIndex` | [Int](/api-docs/headless/Int/) |  |

| Returns |
|---------|
| [Cel](/api-docs/headless/ase/Cel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearCel"><code><span class="field-name">clearCel</span><span class="parenthesis">(</span><span class="arg-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `layerIndex` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createHeader"><code><span class="field-name">createHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeChunk"><code><span class="field-name">removeChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/ase/chunks/Chunk/" class="type-link">ase.chunks.Chunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chunk` | [ase.chunks.Chunk](/api-docs/headless/ase/chunks/Chunk/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toBytes"><code><span class="field-name">toBytes</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#toBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `out` | [haxe.io.BytesOutput](/api-docs/headless/haxe/io/BytesOutput/) | *(optional)* |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/ase/FrameHeader/" class="type-link">FrameHeader</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/headless/ase/Ase/" class="type-link">Ase</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `header` | [FrameHeader](/api-docs/headless/ase/FrameHeader/) | *(optional)* |
| `ase` | [Ase](/api-docs/headless/ase/Ase/) | *(optional)* |

## Private Members


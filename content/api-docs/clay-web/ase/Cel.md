---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: Cel
target: Clay (Web)
permalink: api-docs/clay-web/ase/Cel/
---

# Cel

<div class="view-source"><a href="https://github.com/ceramic-engine/ase/blob/master/src/ase/Cel.hx">View source</a></div>

<div class="type-hierarchy"><strong>ase.Cel</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="chunk"><code><span class="field-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/CelChunk/" class="type-link">ase.chunks.CelChunk</a></code><a class="header-anchor" href="#chunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixelData"><code><span class="field-name">pixelData</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#pixelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uncompressed Bytes representing pixels of the Cel.

- 32 bit ARGB value per pixel for 32 bit color depth
- 16 bit greyscale value 0x0000 = black, 0xffff = white
- 8 bit index value per pixel for Indexed

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixelDataLength"><code><span class="field-name">pixelDataLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pixelDataLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Required length of the data in bytes.
Always equals to width x height x (bpp / 8)

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cel width

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cel height

<hr class="field-separator" />

<div class="signature field-var has-description" id="layerIndex"><code><span class="field-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#layerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layer index

<hr class="field-separator" />

<div class="signature field-var has-description" id="xPosition"><code><span class="field-name">xPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#xPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cel x position

<hr class="field-separator" />

<div class="signature field-var has-description" id="yPosition"><code><span class="field-name">yPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#yPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cel y position

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initalize Cel pixel data

| Name | Type | Description |
|------|------|-------------|
| `width` | [Int](/api-docs/clay-web/Int/) | @param height |
| `height` | [Int](/api-docs/clay-web/Int/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fillColor"><code><span class="field-name">fillColor</span><span class="parenthesis">(</span><span class="arg-name">argb</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `argb` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fillIndex"><code><span class="field-name">fillIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPixel"><code><span class="field-name">getPixel</span><span class="parenthesis">(</span><span class="arg-name">px</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">py</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get pixel color or color index at given position

| Name | Type |
|------|------|
| `px` | [Int](/api-docs/clay-web/Int/) |
| `py` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPixel"><code><span class="field-name">setPixel</span><span class="parenthesis">(</span><span class="arg-name">px</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">py</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set pixel color or color index at given position

| Name | Type | Description |
|------|------|-------------|
| `px` | [Int](/api-docs/clay-web/Int/) | x |
| `py` | [Int](/api-docs/clay-web/Int/) | y |
| `color` | [Int](/api-docs/clay-web/Int/) | ARGB color for 32bpp mode, GGGG color for 16bpp mode and index or GG color for Indexed or 8bpp mode |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPixelData"><code><span class="field-name">setPixelData</span><span class="parenthesis">(</span><span class="arg-name">newData</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">newWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">newHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPixelData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set new pixel data

| Name | Type | Default |
|------|------|---------|
| `newData` | [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) | |
| `newWidth` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `newHeight` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="link"><code><span class="field-name">link</span><span class="parenthesis">(</span><span class="arg-name">frameIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#link"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Make this cel linked to the one located at frameIndex on the same layer

| Name | Type | Description |
|------|------|-------------|
| `frameIndex` | [Int](/api-docs/clay-web/Int/) | Index of the frame with the cel to link to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Cel</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new identical cel
| Returns |
|---------|
| [Cel](/api-docs/clay-web/ase/Cel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/CelChunk/" class="type-link">ase.chunks.CelChunk</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">celType</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/types/CelType/" class="type-link">ase.types.CelType</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Frame/" class="type-link">Frame</a><span class="operator">,</span> <span class="arg-name">layerIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [ase.chunks.CelChunk](/api-docs/clay-web/ase/chunks/CelChunk/) | *(optional)* |
| `celType` | [ase.types.CelType](/api-docs/clay-web/ase/types/CelType/) | *(optional)* |
| `frame` | [Frame](/api-docs/clay-web/ase/Frame/) | |
| `layerIndex` | [Int](/api-docs/clay-web/Int/) | |
| `width` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `height` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="frame"><code><span class="field-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Frame/" class="type-link">Frame</a></code><a class="header-anchor" href="#frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


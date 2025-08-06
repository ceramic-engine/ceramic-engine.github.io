---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteFrameLayer
target: Unity
permalink: api-docs/unity/ceramic/AsepriteFrameLayer/
---

# AsepriteFrameLayer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteFrameLayer.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteFrameLayer</strong> (Class)</div>

Represents a single layer's data within an Aseprite frame.

Aseprite files can contain multiple layers that are composited together
to create the final frame image. This structure holds the pixel data
for one layer within a specific frame.

Layers can have different blend modes, opacity levels, and visibility states
that affect how they are combined with other layers.

<div class="see"><strong>See:</strong> AsepriteFrame for the complete frame data, LayerChunk for layer properties and settings</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="layer"><div class="plugin-name">ase</div><code><span class="field-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/LayerChunk/" class="type-link">ase.chunks.LayerChunk</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layer definition containing properties like name, blend mode,
opacity, and visibility settings.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="celChunk"><div class="plugin-name">ase</div><code><span class="field-name">celChunk</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/CelChunk/" class="type-link">ase.chunks.CelChunk</a></code><a class="header-anchor" href="#celChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The cel (cell) data for this layer in this frame.
Contains position, opacity, and link information.
May be null if this layer has no content in this frame.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pixels"><div class="plugin-name">ase</div><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The pixel data for this layer in RGBA format.
Each pixel uses 4 bytes (R, G, B, A) with values 0-255.
May be null if this layer has no visible content in this frame
or if the cel is linked to another frame.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ase</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ase/chunks/LayerChunk/" class="type-link">ase.chunks.LayerChunk</a><span class="operator">,</span> <span class="arg-name">celChunk</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ase/chunks/CelChunk/" class="type-link">ase.chunks.CelChunk</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `layer` | [ase.chunks.LayerChunk](/api-docs/unity/ase/chunks/LayerChunk/) | * The layer definition containing properties like name, blend mode, opacity, and visibility settings. |
| `celChunk` | [Null](/api-docs/unity/Null/)<[ase.chunks.CelChunk](/api-docs/unity/ase/chunks/CelChunk/)> | * The cel (cell) data for this layer in this frame. Contains position, opacity, and link information. May be null if this layer has no content in this frame. |
| `pixels` | [Null](/api-docs/unity/Null/)<[UInt8Array](/api-docs/unity/ceramic/UInt8Array/)> | * The pixel data for this layer in RGBA format. Each pixel uses 4 bytes (R, G, B, A) with values 0-255. May be null if this layer has no visible content in this frame or if the cel is linked to another frame. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |


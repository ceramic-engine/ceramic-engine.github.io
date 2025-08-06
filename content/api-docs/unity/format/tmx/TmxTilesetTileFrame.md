---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: TmxTilesetTileFrame
target: Unity
permalink: api-docs/unity/format/tmx/TmxTilesetTileFrame/
---

# TmxTilesetTileFrame

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Data.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.TmxTilesetTileFrame</strong> (Class)</div>

Animation frame of a single tile in tileset.

## Instance Members

<div class="signature field-var has-description" id="tileId"><code><span class="field-name">tileId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tileId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The local ID of a tile within the parent tileset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How long (in milliseconds) this frame should be displayed before advancing to the next frame.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">tileId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `tileId` | [Int](/api-docs/unity/Int/) | The local ID of a tile within the parent tileset. |
| `duration` | [Int](/api-docs/unity/Int/) | How long (in milliseconds) this frame should be displayed before advancing to the next frame. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |


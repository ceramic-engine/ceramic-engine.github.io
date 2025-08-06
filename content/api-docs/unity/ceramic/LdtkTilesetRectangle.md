---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkTilesetRectangle
target: Unity
permalink: api-docs/unity/ceramic/LdtkTilesetRectangle/
---

# LdtkTilesetRectangle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkTilesetRectangle</strong> (Class)</div>

This object represents a custom sub rectangle in a Tileset image.

## Instance Members

<div class="signature field-var has-description has-plugin" id="tileset"><div class="plugin-name">ldtk</div><code><span class="field-name">tileset</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related tileset

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">ldtk</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X pixels coordinate of the top-left corner in the Tileset image

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">ldtk</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y pixels coordinate of the top-left corner in the Tileset image

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="w"><div class="plugin-name">ldtk</div><code><span class="field-name">w</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#w"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="h"><div class="plugin-name">ldtk</div><code><span class="field-name">h</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#h"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ceramicTile"><div class="plugin-name">ldtk</div><code><span class="field-name">ceramicTile</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#ceramicTile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a Ceramic texture tile from this tileset rectangle.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/unity/ceramic/LdtkData/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


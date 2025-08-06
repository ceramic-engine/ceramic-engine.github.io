---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkEnumValueDefinition
target: Unity
permalink: api-docs/unity/ceramic/LdtkEnumValueDefinition/
---

# LdtkEnumValueDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkEnumValueDefinition</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkDefinitions` object this enum value def belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileSrcRect"><div class="plugin-name">ldtk</div><code><span class="field-name">tileSrcRect</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileSrcRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array of 4 Int values that refers to the tile in the tileset image: `[ x, y, width, height ]` (can be `null`)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="color"><div class="plugin-name">ldtk</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="id"><div class="plugin-name">ldtk</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enum value

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileId"><div class="plugin-name">ldtk</div><code><span class="field-name">tileId</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tileId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The optional ID of the tile

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">defs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `defs` | [LdtkDefinitions](/api-docs/unity/ceramic/LdtkDefinitions/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/unity/haxe/DynamicAccess/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


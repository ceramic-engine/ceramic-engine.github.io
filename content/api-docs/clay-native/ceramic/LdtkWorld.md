---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkWorld
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LdtkWorld/
---

# LdtkWorld

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkWorld</strong> (Class)</div>

Represents a world in an LDtk project.

A world contains multiple levels arranged according to a specific layout
(Free, GridVania, LinearHorizontal, or LinearVertical).

In multi-world projects, each world acts as a separate game area or chapter.
Single-world projects will have one default world containing all levels.

## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkData"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkData` object this world belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iid"><div class="plugin-name">ldtk</div><code><span class="field-name">iid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#iid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique instance identifer

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="levels"><div class="plugin-name">ldtk</div><code><span class="field-name">levels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#levels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All levels from this world. The order of this array is only relevant in `LinearHorizontal` and `LinearVertical` world layouts (see `worldLayout` value).
Otherwise, you should refer to the `worldX`,`worldY` coordinates of each Level.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldGridWidth"><div class="plugin-name">ldtk</div><code><span class="field-name">worldGridWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldGridWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the world grid in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldGridHeight"><div class="plugin-name">ldtk</div><code><span class="field-name">worldGridHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldGridHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the world grid in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldLayout"><div class="plugin-name">ldtk</div><code><span class="field-name">worldLayout</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkWorldLayout/" class="type-link">LdtkWorldLayout</a></code><a class="header-anchor" href="#worldLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An enum that describes how levels are organized in this project (ie. linearly or in a 2D space).

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="level"><div class="plugin-name">ldtk</div><code><span class="field-name">level</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a></code><a class="header-anchor" href="#level"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="levelByIid"><div class="plugin-name">ldtk</div><code><span class="field-name">levelByIid</span><span class="parenthesis">(</span><span class="arg-name">iid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkLevel/" class="type-link">LdtkLevel</a></code><a class="header-anchor" href="#levelByIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iid` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-native/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | *(optional)* |


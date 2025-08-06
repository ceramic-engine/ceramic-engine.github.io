---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkTocEntry
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkTocEntry/
---

# LdtkTocEntry

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkTocEntry</strong> (Class)</div>

Represents a Table of Contents entry for entities marked with exportToToc.
Provides quick access to all instances of a specific entity type across the project.

## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkData"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkData` object this toc entry belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Entity definition identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="instancesData"><div class="plugin-name">ldtk</div><code><span class="field-name">instancesData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkTocInstanceData/" class="type-link">LdtkTocInstanceData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instancesData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All instances of entities that have their `exportToToc` flag enabled
are listed in this array.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new table of contents entry.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ldtkData` | [LdtkData](/api-docs/clay-web/ceramic/LdtkData/) | *(optional)* | The parent LdtkData object  |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* | The JSON data for this entry |


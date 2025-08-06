---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkTocInstanceData
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/LdtkTocInstanceData/
---

# LdtkTocInstanceData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkTocInstanceData</strong> (Class)</div>

Contains instance data for an entity referenced in the table of contents.
Includes location information to quickly find entities across levels.

## Instance Members

<div class="signature field-var has-description has-plugin" id="tocEntry"><div class="plugin-name">ldtk</div><code><span class="field-name">tocEntry</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTocEntry/" class="type-link">LdtkTocEntry</a></code><a class="header-anchor" href="#tocEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkTocEntry` object this instance data belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fields"><div class="plugin-name">ldtk</div><code><span class="field-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An object containing the values of all entity fields with the `exportToDoc` option enabled.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="widPx"><div class="plugin-name">ldtk</div><code><span class="field-name">widPx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#widPx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="heiPx"><div class="plugin-name">ldtk</div><code><span class="field-name">heiPx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heiPx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="worldX"><div class="plugin-name">ldtk</div><code><span class="field-name">worldX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="worldY"><div class="plugin-name">ldtk</div><code><span class="field-name">worldY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#worldY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="worldIid"><div class="plugin-name">ldtk</div><code><span class="field-name">worldIid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#worldIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="levelIid"><div class="plugin-name">ldtk</div><code><span class="field-name">levelIid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#levelIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="layerIid"><div class="plugin-name">ldtk</div><code><span class="field-name">layerIid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#layerIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="entityIid"><div class="plugin-name">ldtk</div><code><span class="field-name">entityIid</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#entityIid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">tocEntry</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkTocEntry/" class="type-link">LdtkTocEntry</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `tocEntry` | [LdtkTocEntry](/api-docs/clay-native/ceramic/LdtkTocEntry/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-native/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | *(optional)* |


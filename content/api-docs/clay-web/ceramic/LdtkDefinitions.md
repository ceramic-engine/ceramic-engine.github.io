---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkDefinitions
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/LdtkDefinitions/
---

# LdtkDefinitions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkDefinitions</strong> (Class)</div>

Contains all the definitions used in an LDtk project.

This includes:
- Entity definitions
- Layer definitions
- Tileset definitions
- Enum definitions

These definitions describe the structure and rules that levels follow.

## Instance Members

<div class="signature field-var has-description has-plugin" id="ldtkData"><div class="plugin-name">ldtk</div><code><span class="field-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#ldtkData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkData` object these definitions belong to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="entities"><div class="plugin-name">ldtk</div><code><span class="field-name">entities</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkEntityDefinition/" class="type-link">LdtkEntityDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#entities"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All entities definitions, including their custom fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enums"><div class="plugin-name">ldtk</div><code><span class="field-name">enums</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkEnumDefinition/" class="type-link">LdtkEnumDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#enums"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All internal enums

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="externalEnums"><div class="plugin-name">ldtk</div><code><span class="field-name">externalEnums</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkEnumDefinition/" class="type-link">LdtkEnumDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#externalEnums"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Note: external enums are exactly the same as enums,
except they have a relPath to point to an external source file.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layers"><div class="plugin-name">ldtk</div><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkLayerDefinition/" class="type-link">LdtkLayerDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All layer definitions

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="levelFields"><div class="plugin-name">ldtk</div><code><span class="field-name">levelFields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#levelFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All custom fields available to all levels.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tilesets"><div class="plugin-name">ldtk</div><code><span class="field-name">tilesets</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tilesets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All tilesets

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="entity"><div class="plugin-name">ldtk</div><code><span class="field-name">entity</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkEntityDefinition/" class="type-link">LdtkEntityDefinition</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkEntityDefinition](/api-docs/clay-web/ceramic/LdtkEntityDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layer"><div class="plugin-name">ldtk</div><code><span class="field-name">layer</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkLayerDefinition/" class="type-link">LdtkLayerDefinition</a></code><a class="header-anchor" href="#layer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkLayerDefinition](/api-docs/clay-web/ceramic/LdtkLayerDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="tileset"><div class="plugin-name">ldtk</div><code><span class="field-name">tileset</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkTilesetDefinition/" class="type-link">LdtkTilesetDefinition</a></code><a class="header-anchor" href="#tileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkTilesetDefinition](/api-docs/clay-web/ceramic/LdtkTilesetDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="levelField"><div class="plugin-name">ldtk</div><code><span class="field-name">levelField</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkFieldDefinition/" class="type-link">LdtkFieldDefinition</a></code><a class="header-anchor" href="#levelField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkFieldDefinition](/api-docs/clay-web/ceramic/LdtkFieldDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="enumDef"><div class="plugin-name">ldtk</div><code><span class="field-name">enumDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkEnumDefinition/" class="type-link">LdtkEnumDefinition</a></code><a class="header-anchor" href="#enumDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkEnumDefinition](/api-docs/clay-web/ceramic/LdtkEnumDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="externalEnumDef"><div class="plugin-name">ldtk</div><code><span class="field-name">externalEnumDef</span><span class="parenthesis">(</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkEnumDefinition/" class="type-link">LdtkEnumDefinition</a></code><a class="header-anchor" href="#externalEnumDef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identifier` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [LdtkEnumDefinition](/api-docs/clay-web/ceramic/LdtkEnumDefinition/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/clay-web/ceramic/LdtkData/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |


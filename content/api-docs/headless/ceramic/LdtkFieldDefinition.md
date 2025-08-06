---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk
title: LdtkFieldDefinition
target: Headless
permalink: api-docs/headless/ceramic/LdtkFieldDefinition/
---

# LdtkFieldDefinition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ldtk/runtime/src/ceramic/LdtkData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.LdtkFieldDefinition</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="defs"><div class="plugin-name">ldtk</div><code><span class="field-name">defs</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a></code><a class="header-anchor" href="#defs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `LdtkDefinitions` object this field def belongs to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">ldtk</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Human readable value type. Possible values: `Int, Float, String, Bool, Color, ExternEnum.XXX, LocalEnum.XXX, Point, FilePath`

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="identifier"><div class="plugin-name">ldtk</div><code><span class="field-name">identifier</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#identifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User defined unique identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="uid"><div class="plugin-name">ldtk</div><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique Int identifier

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isArray"><div class="plugin-name">ldtk</div><code><span class="field-name">isArray</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if the value is an array of multiple values

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">ldtk</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">ldtk</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">defs</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/LdtkDefinitions/" class="type-link">LdtkDefinitions</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `defs` | [LdtkDefinitions](/api-docs/headless/ceramic/LdtkDefinitions/) | *(optional)* |
| `json` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[Dynamic](/api-docs/headless/Dynamic/)> | *(optional)* |


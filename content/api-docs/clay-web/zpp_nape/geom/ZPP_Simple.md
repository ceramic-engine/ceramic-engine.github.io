---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Simple
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/geom/ZPP_Simple/
---

# ZPP_Simple

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/Simple.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_Simple</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="decompose"><div class="plugin-name">nape</div><code><span class="field-name">decompose</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rets</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#decompose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `poly` | [ZPP_GeomVert](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/) | |
| `rets` | [zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clip_polygon"><div class="plugin-name">nape</div><code><span class="field-name">clip_polygon</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_SimpleVert</a><span class="operator">,</span> <span class="arg-name">rets</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clip_polygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vertices` | [zpp_nape.util.ZPP_Set_ZPP_SimpleVert](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/) |
| `rets` | [zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isSimple"><div class="plugin-name">nape</div><code><span class="field-name">isSimple</span><span class="parenthesis">(</span><span class="arg-name">poly</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSimple"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `poly` | [ZPP_GeomVert](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="sweep"><div class="plugin-name">nape</div><code><span class="field-name">sweep</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_SimpleSweep/" class="type-link">ZPP_SimpleSweep</a></code><a class="header-anchor" href="#sweep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="inthash"><div class="plugin-name">nape</div><code><span class="field-name">inthash</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/FastHash2_Hashable2_Boolfalse/" class="type-link">zpp_nape.util.FastHash2_Hashable2_Boolfalse</a></code><a class="header-anchor" href="#inthash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="vertices"><div class="plugin-name">nape</div><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_SimpleVert</a></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="queue"><div class="plugin-name">nape</div><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_SimpleEvent</a></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ints"><div class="plugin-name">nape</div><code><span class="field-name">ints</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_SimpleEvent</a></code><a class="header-anchor" href="#ints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="list_vertices"><div class="plugin-name">nape</div><code><span class="field-name">list_vertices</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SimpleVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_SimpleVert</a></code><a class="header-anchor" href="#list_vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="list_queue"><div class="plugin-name">nape</div><code><span class="field-name">list_queue</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SimpleEvent/" class="type-link">zpp_nape.util.ZNPList_ZPP_SimpleEvent</a></code><a class="header-anchor" href="#list_queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


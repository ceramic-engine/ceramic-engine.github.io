---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Simplify
target: Headless
permalink: api-docs/headless/zpp_nape/geom/ZPP_Simplify/
---

# ZPP_Simplify

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/Simplify.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_Simplify</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="lessval"><div class="plugin-name">nape</div><code><span class="field-name">lessval</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lessval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |
| `b` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="less"><div class="plugin-name">nape</div><code><span class="field-name">less</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#less"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |
| `b` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="distance"><div class="plugin-name">nape</div><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/" class="type-link">ZPP_SimplifyV</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |
| `a` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |
| `b` | [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="simplify"><div class="plugin-name">nape</div><code><span class="field-name">simplify</span><span class="parenthesis">(</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="operator">,</span> <span class="arg-name">epsilon</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a></code><a class="header-anchor" href="#simplify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `P` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |
| `epsilon` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="stack"><div class="plugin-name">nape</div><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_SimplifyP/" class="type-link">zpp_nape.util.ZNPList_ZPP_SimplifyP</a></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


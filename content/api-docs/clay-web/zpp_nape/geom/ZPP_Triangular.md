---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Triangular
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/geom/ZPP_Triangular/
---

# ZPP_Triangular

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/Triangular.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_Triangular</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="delaunay"><div class="plugin-name">nape</div><code><span class="field-name">delaunay</span><span class="parenthesis">(</span><span class="arg-name">A</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">B</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">C</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">D</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#delaunay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `A` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `B` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `C` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `D` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="optimise"><div class="plugin-name">nape</div><code><span class="field-name">optimise</span><span class="parenthesis">(</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#optimise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `P` | [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="triangulate"><div class="plugin-name">nape</div><code><span class="field-name">triangulate</span><span class="parenthesis">(</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/" class="type-link">ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#triangulate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `P` | [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) |

| Returns |
|---------|
| [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="queue"><div class="plugin-name">nape</div><code><span class="field-name">queue</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_PartitionVertex/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionVertex</a></code><a class="header-anchor" href="#queue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="stack"><div class="plugin-name">nape</div><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_PartitionVertex/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionVertex</a></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="edgeSet"><div class="plugin-name">nape</div><code><span class="field-name">edgeSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_PartitionPair/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_PartitionPair</a></code><a class="header-anchor" href="#edgeSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lt"><div class="plugin-name">nape</div><code><span class="field-name">lt</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `q` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="right_turn"><div class="plugin-name">nape</div><code><span class="field-name">right_turn</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#right_turn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `b` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |
| `c` | [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |


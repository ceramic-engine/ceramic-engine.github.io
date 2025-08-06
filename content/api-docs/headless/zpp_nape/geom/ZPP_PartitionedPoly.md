---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_PartitionedPoly
target: Headless
permalink: api-docs/headless/zpp_nape/geom/ZPP_PartitionedPoly/
---

# ZPP_PartitionedPoly

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/geom/PartitionedPoly.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.geom.ZPP_PartitionedPoly</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="sharedPPList"><div class="plugin-name">nape</div><code><span class="field-name">sharedPPList</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#sharedPPList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="sharedGVList"><div class="plugin-name">nape</div><code><span class="field-name">sharedGVList</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a></code><a class="header-anchor" href="#sharedGVList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getSharedPP"><div class="plugin-name">nape</div><code><span class="field-name">getSharedPP</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#getSharedPP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [zpp_nape.util.ZNPList_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getShared"><div class="plugin-name">nape</div><code><span class="field-name">getShared</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a></code><a class="header-anchor" href="#getShared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="vertices"><div class="plugin-name">nape</div><code><span class="field-name">vertices</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a></code><a class="header-anchor" href="#vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="next"><div class="plugin-name">nape</div><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_PartitionedPoly</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="alloc"><div class="plugin-name">nape</div><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="free"><div class="plugin-name">nape</div><code><span class="field-name">free</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#free"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="init"><div class="plugin-name">nape</div><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `P` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remove_collinear_vertices"><div class="plugin-name">nape</div><code><span class="field-name">remove_collinear_vertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove_collinear_vertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="add_diagonal"><div class="plugin-name">nape</div><code><span class="field-name">add_diagonal</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">q</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_diagonal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |
| `q` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="extract_partitions"><div class="plugin-name">nape</div><code><span class="field-name">extract_partitions</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionedPoly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionedPoly</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extract_partitions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ret` | [zpp_nape.util.ZNPList_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[zpp_nape.util.ZNPList_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="extract"><div class="plugin-name">nape</div><code><span class="field-name">extract</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ret` | [zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">P</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/" class="type-link">ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `P` | [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) | *(optional)* |

## Private Members

<div class="signature field-method no-description has-plugin" id="eq"><div class="plugin-name">nape</div><code><span class="field-name">eq</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#eq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |
| `b` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pull_partitions"><div class="plugin-name">nape</div><code><span class="field-name">pull_partitions</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/" class="type-link">zpp_nape.util.ZNPList_ZPP_PartitionedPoly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a></code><a class="header-anchor" href="#pull_partitions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |
| `ret` | [zpp_nape.util.ZNPList_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) |

| Returns |
|---------|
| [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pull"><div class="plugin-name">nape</div><code><span class="field-name">pull</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a><span class="operator">,</span> <span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/" class="type-link">zpp_nape.util.ZNPList_ZPP_GeomVert</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/" class="type-link">ZPP_PartitionVertex</a></code><a class="header-anchor" href="#pull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |
| `ret` | [zpp_nape.util.ZNPList_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/) |

| Returns |
|---------|
| [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) |


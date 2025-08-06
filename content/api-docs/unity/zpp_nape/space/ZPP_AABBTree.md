---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_AABBTree
target: Unity
permalink: api-docs/unity/zpp_nape/space/ZPP_AABBTree/
---

# ZPP_AABBTree

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/space/DynAABBPhase.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.space.ZPP_AABBTree</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="tmpaabb"><div class="plugin-name">nape</div><code><span class="field-name">tmpaabb</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a></code><a class="header-anchor" href="#tmpaabb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="root"><div class="plugin-name">nape</div><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="inlined_insertLeaf"><div class="plugin-name">nape</div><code><span class="field-name">inlined_insertLeaf</span><span class="parenthesis">(</span><span class="arg-name">leaf</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inlined_insertLeaf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `leaf` | [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="removeLeaf"><div class="plugin-name">nape</div><code><span class="field-name">removeLeaf</span><span class="parenthesis">(</span><span class="arg-name">leaf</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeLeaf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `leaf` | [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="inlined_removeLeaf"><div class="plugin-name">nape</div><code><span class="field-name">inlined_removeLeaf</span><span class="parenthesis">(</span><span class="arg-name">leaf</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inlined_removeLeaf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `leaf` | [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="balance"><div class="plugin-name">nape</div><code><span class="field-name">balance</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a></code><a class="header-anchor" href="#balance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

| Returns |
|---------|
| [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="insertLeaf"><div class="plugin-name">nape</div><code><span class="field-name">insertLeaf</span><span class="parenthesis">(</span><span class="arg-name">leaf</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_AABBNode/" class="type-link">ZPP_AABBNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertLeaf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `leaf` | [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


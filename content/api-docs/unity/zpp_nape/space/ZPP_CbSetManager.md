---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_CbSetManager
target: Unity
permalink: api-docs/unity/zpp_nape/space/ZPP_CbSetManager/
---

# ZPP_CbSetManager

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/space/Space.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.space.ZPP_CbSetManager</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="cbsets"><div class="plugin-name">nape</div><code><span class="field-name">cbsets</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_CbSet/" class="type-link">zpp_nape.util.ZPP_Set_ZPP_CbSet</a></code><a class="header-anchor" href="#cbsets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/" class="type-link">zpp_nape.util.ZNPList_ZPP_CbType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/" class="type-link">zpp_nape.callbacks.ZPP_CbSet</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cbTypes` | [zpp_nape.util.ZNPList_ZPP_CbType](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/) |

| Returns |
|---------|
| [zpp_nape.callbacks.ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remove"><div class="plugin-name">nape</div><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">set</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/" class="type-link">zpp_nape.callbacks.ZPP_CbSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `set` | [zpp_nape.callbacks.ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate"><div class="plugin-name">nape</div><code><span class="field-name">validate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pair"><div class="plugin-name">nape</div><code><span class="field-name">pair</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/" class="type-link">zpp_nape.callbacks.ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/" class="type-link">zpp_nape.callbacks.ZPP_CbSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_CbSetPair/" class="type-link">zpp_nape.callbacks.ZPP_CbSetPair</a></code><a class="header-anchor" href="#pair"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [zpp_nape.callbacks.ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [zpp_nape.callbacks.ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

| Returns |
|---------|
| [zpp_nape.callbacks.ZPP_CbSetPair](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSetPair/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="valid_listener"><div class="plugin-name">nape</div><code><span class="field-name">valid_listener</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_Listener/" class="type-link">zpp_nape.callbacks.ZPP_Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#valid_listener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [zpp_nape.callbacks.ZPP_Listener](/api-docs/unity/zpp_nape/callbacks/ZPP_Listener/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_Space/" class="type-link">ZPP_Space</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `space` | [ZPP_Space](/api-docs/unity/zpp_nape/space/ZPP_Space/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


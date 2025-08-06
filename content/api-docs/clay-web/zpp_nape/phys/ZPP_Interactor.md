---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Interactor
target: Clay (Web)
permalink: api-docs/clay-web/zpp_nape/phys/ZPP_Interactor/
---

# ZPP_Interactor

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/phys/Interactor.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.phys.ZPP_Interactor</strong> (Class) → <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Body/">ZPP_Body</a>, <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Compound/">ZPP_Compound</a>, <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/">zpp_nape.shape.ZPP_Shape</a></div>

## Static Members

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">i1</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_Interactor</a><span class="operator">,</span> <span class="arg-name">i2</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_Interactor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_CallbackSet/" class="type-link">zpp_nape.space.ZPP_CallbackSet</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i1` | [ZPP_Interactor](/api-docs/clay-web/zpp_nape/phys/ZPP_Interactor/) |
| `i2` | [ZPP_Interactor](/api-docs/clay-web/zpp_nape/phys/ZPP_Interactor/) |

| Returns |
|---------|
| [zpp_nape.space.ZPP_CallbackSet](/api-docs/clay-web/zpp_nape/space/ZPP_CallbackSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="int_callback"><div class="plugin-name">nape</div><code><span class="field-name">int_callback</span><span class="parenthesis">(</span><span class="arg-name">set</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/space/ZPP_CallbackSet/" class="type-link">zpp_nape.space.ZPP_CallbackSet</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/callbacks/ZPP_InteractionListener/" class="type-link">zpp_nape.callbacks.ZPP_InteractionListener</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/callbacks/ZPP_Callback/" class="type-link">zpp_nape.callbacks.ZPP_Callback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#int_callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `set` | [zpp_nape.space.ZPP_CallbackSet](/api-docs/clay-web/zpp_nape/space/ZPP_CallbackSet/) |
| `x` | [zpp_nape.callbacks.ZPP_InteractionListener](/api-docs/clay-web/zpp_nape/callbacks/ZPP_InteractionListener/) |
| `cb` | [zpp_nape.callbacks.ZPP_Callback](/api-docs/clay-web/zpp_nape/callbacks/ZPP_Callback/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="outer_i"><div class="plugin-name">nape</div><code><span class="field-name">outer_i</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a></code><a class="header-anchor" href="#outer_i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="id"><div class="plugin-name">nape</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ishape"><div class="plugin-name">nape</div><code><span class="field-name">ishape</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a></code><a class="header-anchor" href="#ishape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ibody"><div class="plugin-name">nape</div><code><span class="field-name">ibody</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Body/" class="type-link">ZPP_Body</a></code><a class="header-anchor" href="#ibody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="icompound"><div class="plugin-name">nape</div><code><span class="field-name">icompound</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Compound/" class="type-link">ZPP_Compound</a></code><a class="header-anchor" href="#icompound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cbsets"><div class="plugin-name">nape</div><code><span class="field-name">cbsets</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CallbackSet/" class="type-link">zpp_nape.util.ZNPList_ZPP_CallbackSet</a></code><a class="header-anchor" href="#cbsets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="group"><div class="plugin-name">nape</div><code><span class="field-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/" class="type-link">zpp_nape.dynamics.ZPP_InteractionGroup</a></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CbType/" class="type-link">zpp_nape.util.ZNPList_ZPP_CbType</a></code><a class="header-anchor" href="#cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cbSet"><div class="plugin-name">nape</div><code><span class="field-name">cbSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbSet/" class="type-link">zpp_nape.callbacks.ZPP_CbSet</a></code><a class="header-anchor" href="#cbSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="wrap_cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">wrap_cbTypes</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/CbTypeList/" class="type-link">nape.callbacks.CbTypeList</a></code><a class="header-anchor" href="#wrap_cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isShape"><div class="plugin-name">nape</div><code><span class="field-name">isShape</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isBody"><div class="plugin-name">nape</div><code><span class="field-name">isBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="isCompound"><div class="plugin-name">nape</div><code><span class="field-name">isCompound</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCompound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="wake"><div class="plugin-name">nape</div><code><span class="field-name">wake</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#wake"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getSpace"><div class="plugin-name">nape</div><code><span class="field-name">getSpace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/zpp_nape/space/ZPP_Space/" class="type-link">zpp_nape.space.ZPP_Space</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Null](/api-docs/clay-web/Null/)<[zpp_nape.space.ZPP_Space](/api-docs/clay-web/zpp_nape/space/ZPP_Space/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setupcbTypes"><div class="plugin-name">nape</div><code><span class="field-name">setupcbTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setupcbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="insert_cbtype"><div class="plugin-name">nape</div><code><span class="field-name">insert_cbtype</span><span class="parenthesis">(</span><span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbType/" class="type-link">zpp_nape.callbacks.ZPP_CbType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insert_cbtype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cb` | [zpp_nape.callbacks.ZPP_CbType](/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbType/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="alloc_cbSet"><div class="plugin-name">nape</div><code><span class="field-name">alloc_cbSet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alloc_cbSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="dealloc_cbSet"><div class="plugin-name">nape</div><code><span class="field-name">dealloc_cbSet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dealloc_cbSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setGroup"><div class="plugin-name">nape</div><code><span class="field-name">setGroup</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/" class="type-link">zpp_nape.dynamics.ZPP_InteractionGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [zpp_nape.dynamics.ZPP_InteractionGroup](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="immutable_midstep"><div class="plugin-name">nape</div><code><span class="field-name">immutable_midstep</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#immutable_midstep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="lookup_group"><div class="plugin-name">nape</div><code><span class="field-name">lookup_group</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/" class="type-link">zpp_nape.dynamics.ZPP_InteractionGroup</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#lookup_group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Null](/api-docs/clay-web/Null/)<[zpp_nape.dynamics.ZPP_InteractionGroup](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copyto"><div class="plugin-name">nape</div><code><span class="field-name">copyto</span><span class="parenthesis">(</span><span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Interactor/" class="type-link">nape.phys.Interactor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyto"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ret` | [nape.phys.Interactor](/api-docs/clay-web/nape/phys/Interactor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="immutable_cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">immutable_cbTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#immutable_cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="wrap_cbTypes_subber"><div class="plugin-name">nape</div><code><span class="field-name">wrap_cbTypes_subber</span><span class="parenthesis">(</span><span class="arg-name">pcb</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/CbType/" class="type-link">nape.callbacks.CbType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#wrap_cbTypes_subber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pcb` | [nape.callbacks.CbType](/api-docs/clay-web/nape/callbacks/CbType/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="wrap_cbTypes_adder"><div class="plugin-name">nape</div><code><span class="field-name">wrap_cbTypes_adder</span><span class="parenthesis">(</span><span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/CbType/" class="type-link">nape.callbacks.CbType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wrap_cbTypes_adder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cb` | [nape.callbacks.CbType](/api-docs/clay-web/nape/callbacks/CbType/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |


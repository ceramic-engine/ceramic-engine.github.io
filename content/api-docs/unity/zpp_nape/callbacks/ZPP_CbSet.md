---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_CbSet
target: Unity
permalink: api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/
---

# ZPP_CbSet

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/callbacks/CbSet.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.callbacks.ZPP_CbSet</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setlt"><div class="plugin-name">nape</div><code><span class="field-name">setlt</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setlt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/" class="type-link">zpp_nape.util.ZNPList_ZPP_CbType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cbTypes` | [zpp_nape.util.ZNPList_ZPP_CbType](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/) |

| Returns |
|---------|
| [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="empty_intersection"><div class="plugin-name">nape</div><code><span class="field-name">empty_intersection</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#empty_intersection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="single_intersection"><div class="plugin-name">nape</div><code><span class="field-name">single_intersection</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/" class="type-link">ZPP_InteractionListener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#single_intersection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `i` | [ZPP_InteractionListener](/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="find_all"><div class="plugin-name">nape</div><code><span class="field-name">find_all</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#find_all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `event` | [Int](/api-docs/unity/Int/) |
| `cb` | Function |

## Instance Members

<div class="signature field-var no-description has-plugin" id="cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/" class="type-link">zpp_nape.util.ZNPList_ZPP_CbType</a></code><a class="header-anchor" href="#cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="count"><div class="plugin-name">nape</div><code><span class="field-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="next"><div class="plugin-name">nape</div><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="id"><div class="plugin-name">nape</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="manager"><div class="plugin-name">nape</div><code><span class="field-name">manager</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/space/ZPP_CbSetManager/" class="type-link">zpp_nape.space.ZPP_CbSetManager</a></code><a class="header-anchor" href="#manager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cbpairs"><div class="plugin-name">nape</div><code><span class="field-name">cbpairs</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbSetPair/" class="type-link">zpp_nape.util.ZNPList_ZPP_CbSetPair</a></code><a class="header-anchor" href="#cbpairs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="listeners"><div class="plugin-name">nape</div><code><span class="field-name">listeners</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_InteractionListener/" class="type-link">zpp_nape.util.ZNPList_ZPP_InteractionListener</a></code><a class="header-anchor" href="#listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="zip_listeners"><div class="plugin-name">nape</div><code><span class="field-name">zip_listeners</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zip_listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bodylisteners"><div class="plugin-name">nape</div><code><span class="field-name">bodylisteners</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_BodyListener/" class="type-link">zpp_nape.util.ZNPList_ZPP_BodyListener</a></code><a class="header-anchor" href="#bodylisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="zip_bodylisteners"><div class="plugin-name">nape</div><code><span class="field-name">zip_bodylisteners</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zip_bodylisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="conlisteners"><div class="plugin-name">nape</div><code><span class="field-name">conlisteners</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_ConstraintListener/" class="type-link">zpp_nape.util.ZNPList_ZPP_ConstraintListener</a></code><a class="header-anchor" href="#conlisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="zip_conlisteners"><div class="plugin-name">nape</div><code><span class="field-name">zip_conlisteners</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zip_conlisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="interactors"><div class="plugin-name">nape</div><code><span class="field-name">interactors</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Interactor/" class="type-link">zpp_nape.util.ZNPList_ZPP_Interactor</a></code><a class="header-anchor" href="#interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="wrap_interactors"><div class="plugin-name">nape</div><code><span class="field-name">wrap_interactors</span><span class="operator">:</span> <a href="/api-docs/unity/nape/phys/InteractorList/" class="type-link">nape.phys.InteractorList</a></code><a class="header-anchor" href="#wrap_interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="constraints"><div class="plugin-name">nape</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Constraint/" class="type-link">zpp_nape.util.ZNPList_ZPP_Constraint</a></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="wrap_constraints"><div class="plugin-name">nape</div><code><span class="field-name">wrap_constraints</span><span class="operator">:</span> <a href="/api-docs/unity/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#wrap_constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="increment"><div class="plugin-name">nape</div><code><span class="field-name">increment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#increment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="decrement"><div class="plugin-name">nape</div><code><span class="field-name">decrement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#decrement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_pairs"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_pairs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_pairs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_listeners"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_listeners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate_listeners"><div class="plugin-name">nape</div><code><span class="field-name">validate_listeners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate_listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="realvalidate_listeners"><div class="plugin-name">nape</div><code><span class="field-name">realvalidate_listeners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#realvalidate_listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_bodylisteners"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_bodylisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_bodylisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate_bodylisteners"><div class="plugin-name">nape</div><code><span class="field-name">validate_bodylisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate_bodylisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="realvalidate_bodylisteners"><div class="plugin-name">nape</div><code><span class="field-name">realvalidate_bodylisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#realvalidate_bodylisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_conlisteners"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_conlisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_conlisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate_conlisteners"><div class="plugin-name">nape</div><code><span class="field-name">validate_conlisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate_conlisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="realvalidate_conlisteners"><div class="plugin-name">nape</div><code><span class="field-name">realvalidate_conlisteners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#realvalidate_conlisteners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="validate"><div class="plugin-name">nape</div><code><span class="field-name">validate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#validate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addConstraint"><div class="plugin-name">nape</div><code><span class="field-name">addConstraint</span><span class="parenthesis">(</span><span class="arg-name">con</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/constraint/ZPP_Constraint/" class="type-link">zpp_nape.constraint.ZPP_Constraint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `con` | [zpp_nape.constraint.ZPP_Constraint](/api-docs/unity/zpp_nape/constraint/ZPP_Constraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addInteractor"><div class="plugin-name">nape</div><code><span class="field-name">addInteractor</span><span class="parenthesis">(</span><span class="arg-name">intx</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/phys/ZPP_Interactor/" class="type-link">zpp_nape.phys.ZPP_Interactor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInteractor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intx` | [zpp_nape.phys.ZPP_Interactor](/api-docs/unity/zpp_nape/phys/ZPP_Interactor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remConstraint"><div class="plugin-name">nape</div><code><span class="field-name">remConstraint</span><span class="parenthesis">(</span><span class="arg-name">con</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/constraint/ZPP_Constraint/" class="type-link">zpp_nape.constraint.ZPP_Constraint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `con` | [zpp_nape.constraint.ZPP_Constraint](/api-docs/unity/zpp_nape/constraint/ZPP_Constraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remInteractor"><div class="plugin-name">nape</div><code><span class="field-name">remInteractor</span><span class="parenthesis">(</span><span class="arg-name">intx</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/phys/ZPP_Interactor/" class="type-link">zpp_nape.phys.ZPP_Interactor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remInteractor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intx` | [zpp_nape.phys.ZPP_Interactor](/api-docs/unity/zpp_nape/phys/ZPP_Interactor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="free"><div class="plugin-name">nape</div><code><span class="field-name">free</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#free"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="alloc"><div class="plugin-name">nape</div><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="compatible"><div class="plugin-name">nape</div><code><span class="field-name">compatible</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/" class="type-link">ZPP_InteractionListener</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_CbSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compatible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [ZPP_InteractionListener](/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/) |
| `a` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |
| `b` | [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


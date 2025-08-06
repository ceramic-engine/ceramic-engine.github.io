---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_InteractionGroup
target: Headless
permalink: api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/
---

# ZPP_InteractionGroup

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/dynamics/InteractionGroup.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.dynamics.ZPP_InteractionGroup</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description has-plugin" id="SHAPE"><div class="plugin-name">nape</div><code><span class="field-name">SHAPE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SHAPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BODY"><div class="plugin-name">nape</div><code><span class="field-name">BODY</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BODY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="outer"><div class="plugin-name">nape</div><code><span class="field-name">outer</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/InteractionGroup/" class="type-link">nape.dynamics.InteractionGroup</a></code><a class="header-anchor" href="#outer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ignore"><div class="plugin-name">nape</div><code><span class="field-name">ignore</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="group"><div class="plugin-name">nape</div><code><span class="field-name">group</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_InteractionGroup</a></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="groups"><div class="plugin-name">nape</div><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_InteractionGroup/" class="type-link">zpp_nape.util.ZNPList_ZPP_InteractionGroup</a></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="wrap_groups"><div class="plugin-name">nape</div><code><span class="field-name">wrap_groups</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/InteractionGroupList/" class="type-link">nape.dynamics.InteractionGroupList</a></code><a class="header-anchor" href="#wrap_groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="interactors"><div class="plugin-name">nape</div><code><span class="field-name">interactors</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Interactor/" class="type-link">zpp_nape.util.ZNPList_ZPP_Interactor</a></code><a class="header-anchor" href="#interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="wrap_interactors"><div class="plugin-name">nape</div><code><span class="field-name">wrap_interactors</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/InteractorList/" class="type-link">nape.phys.InteractorList</a></code><a class="header-anchor" href="#wrap_interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="depth"><div class="plugin-name">nape</div><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setGroup"><div class="plugin-name">nape</div><code><span class="field-name">setGroup</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_InteractionGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [ZPP_InteractionGroup](/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate"><div class="plugin-name">nape</div><code><span class="field-name">invalidate</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `force` | [Bool](/api-docs/headless/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addGroup"><div class="plugin-name">nape</div><code><span class="field-name">addGroup</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_InteractionGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [ZPP_InteractionGroup](/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remGroup"><div class="plugin-name">nape</div><code><span class="field-name">remGroup</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_InteractionGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [ZPP_InteractionGroup](/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addInteractor"><div class="plugin-name">nape</div><code><span class="field-name">addInteractor</span><span class="parenthesis">(</span><span class="arg-name">intx</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Interactor/" class="type-link">zpp_nape.phys.ZPP_Interactor</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addInteractor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intx` | [zpp_nape.phys.ZPP_Interactor](/api-docs/headless/zpp_nape/phys/ZPP_Interactor/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remInteractor"><div class="plugin-name">nape</div><code><span class="field-name">remInteractor</span><span class="parenthesis">(</span><span class="arg-name">intx</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Interactor/" class="type-link">zpp_nape.phys.ZPP_Interactor</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flag</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remInteractor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `intx` | [zpp_nape.phys.ZPP_Interactor](/api-docs/headless/zpp_nape/phys/ZPP_Interactor/) | |
| `flag` | [Int](/api-docs/headless/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


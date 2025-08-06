---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_Listener
target: Clay (Native)
permalink: api-docs/clay-native/zpp_nape/callbacks/ZPP_Listener/
---

# ZPP_Listener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/callbacks/Listener.hx">View source</a></div>

<div class="type-hierarchy"><strong>zpp_nape.callbacks.ZPP_Listener</strong> (Class) → <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_BodyListener/">ZPP_BodyListener</a>, <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_ConstraintListener/">ZPP_ConstraintListener</a>, <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_InteractionListener/">ZPP_InteractionListener</a></div>

## Static Members

<div class="signature field-var no-description has-plugin" id="internal"><div class="plugin-name">nape</div><code><span class="field-name">internal</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#internal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="types"><div class="plugin-name">nape</div><code><span class="field-name">types</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/callbacks/ListenerType/" class="type-link">nape.callbacks.ListenerType</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#types"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="events"><div class="plugin-name">nape</div><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/callbacks/CbEvent/" class="type-link">nape.callbacks.CbEvent</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setlt"><div class="plugin-name">nape</div><code><span class="field-name">setlt</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_Listener</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">ZPP_Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setlt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [ZPP_Listener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_Listener/) |
| `b` | [ZPP_Listener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_Listener/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="outer"><div class="plugin-name">nape</div><code><span class="field-name">outer</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/Listener/" class="type-link">nape.callbacks.Listener</a></code><a class="header-anchor" href="#outer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="id"><div class="plugin-name">nape</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="type"><div class="plugin-name">nape</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="event"><div class="plugin-name">nape</div><code><span class="field-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="precedence"><div class="plugin-name">nape</div><code><span class="field-name">precedence</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#precedence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="body"><div class="plugin-name">nape</div><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_BodyListener/" class="type-link">ZPP_BodyListener</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="constraint"><div class="plugin-name">nape</div><code><span class="field-name">constraint</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_ConstraintListener/" class="type-link">ZPP_ConstraintListener</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#constraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="interaction"><div class="plugin-name">nape</div><code><span class="field-name">interaction</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_InteractionListener/" class="type-link">ZPP_InteractionListener</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#interaction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/zpp_nape/space/ZPP_Space/" class="type-link">zpp_nape.space.ZPP_Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="swapEvent"><div class="plugin-name">nape</div><code><span class="field-name">swapEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_precedence"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_precedence</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_precedence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addedToSpace"><div class="plugin-name">nape</div><code><span class="field-name">addedToSpace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addedToSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="removedFromSpace"><div class="plugin-name">nape</div><code><span class="field-name">removedFromSpace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removedFromSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


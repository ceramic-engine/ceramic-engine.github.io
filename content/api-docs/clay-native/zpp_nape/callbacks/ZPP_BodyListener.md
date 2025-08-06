---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ZPP_BodyListener
target: Clay (Native)
permalink: api-docs/clay-native/zpp_nape/callbacks/ZPP_BodyListener/
---

# ZPP_BodyListener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/zpp_nape/callbacks/Listener.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_Listener/">ZPP_Listener</a> → <strong>zpp_nape.callbacks.ZPP_BodyListener</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="outer_zn"><div class="plugin-name">nape</div><code><span class="field-name">outer_zn</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/BodyListener/" class="type-link">nape.callbacks.BodyListener</a></code><a class="header-anchor" href="#outer_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="options"><div class="plugin-name">nape</div><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_OptionType/" class="type-link">ZPP_OptionType</a></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handler"><div class="plugin-name">nape</div><code><span class="field-name">handler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addedToSpace"><div class="plugin-name">nape</div><code><span class="field-name">addedToSpace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addedToSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="removedFromSpace"><div class="plugin-name">nape</div><code><span class="field-name">removedFromSpace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removedFromSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidate_precedence"><div class="plugin-name">nape</div><code><span class="field-name">invalidate_precedence</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate_precedence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="swapEvent"><div class="plugin-name">nape</div><code><span class="field-name">swapEvent</span><span class="parenthesis">(</span><span class="arg-name">newev</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swapEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newev` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/OptionType/" class="type-link">nape.callbacks.OptionType</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `options` | [nape.callbacks.OptionType](/api-docs/clay-native/nape/callbacks/OptionType/) |
| `event` | [Int](/api-docs/clay-native/Int/) |
| `handler` | Function |

## Private Members

<div class="signature field-method no-description has-plugin" id="immutable_options"><div class="plugin-name">nape</div><code><span class="field-name">immutable_options</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#immutable_options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="cbtype_change"><div class="plugin-name">nape</div><code><span class="field-name">cbtype_change</span><span class="parenthesis">(</span><span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_CbType/" class="type-link">ZPP_CbType</a><span class="operator">,</span> <span class="arg-name">included</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">added</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cbtype_change"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cb` | [ZPP_CbType](/api-docs/clay-native/zpp_nape/callbacks/ZPP_CbType/) |
| `included` | [Bool](/api-docs/clay-native/Bool/) |
| `added` | [Bool](/api-docs/clay-native/Bool/) |


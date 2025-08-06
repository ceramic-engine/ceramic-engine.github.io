---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MainEvent
target: Clay (Native)
permalink: api-docs/clay-native/haxe/MainEvent/
---

# MainEvent

<div class="type-hierarchy"><strong>haxe.MainEvent</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="isBlocking"><code><span class="field-name">isBlocking</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBlocking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the event can lock the process from exiting (default:true)

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextRun"><code><span class="field-name">nextRun</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nextRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="priority"><code><span class="field-name">priority</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#priority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="call"><code><span class="field-name">call</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#call"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call the event. Will do nothing if the event has been stopped.

## Private Members

<div class="signature field-var no-description" id="prev"><code><span class="field-name">prev</span><span class="operator">:</span> <a href="#" class="type-link">MainEvent</a></code><a class="header-anchor" href="#prev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="next"><code><span class="field-name">next</span><span class="operator">:</span> <a href="#" class="type-link">MainEvent</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="f"><code><span class="field-name">f</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |
| `p` | [Int](/api-docs/clay-native/Int/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Immediate
target: Clay (Native)
permalink: api-docs/clay-native/clay/Immediate/
---

# Immediate

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Immediate.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Immediate</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">handleImmediate</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedule a callback that will be run when flush() is called

| Name | Type |
|------|------|
| `handleImmediate` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute and flush every awaiting callback, including the ones that
could have been added with `push()` after executing the existing callbacks.
| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Private Members

<div class="signature field-var no-description" id="immediateCallbacks"><code><span class="field-name">immediateCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#immediateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="immediateCallbacksCapacity"><code><span class="field-name">immediateCallbacksCapacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="immediateCallbacksLen"><code><span class="field-name">immediateCallbacksLen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#immediateCallbacksLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Pool
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Pool/
---

# Pool

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Pool.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Pool</strong> (Class)</div>

A generic object pool utility.

## Instance Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.Pool.T</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an available item if any is ready to be used or `null` if none is available.
| Returns |
|---------|
| ceramic.Pool.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycle"><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">ceramic.Pool.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recycle an existing item so that it can be reused later

| Name | Type |
|------|------|
| `item` | ceramic.Pool.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="availableItems"><code><span class="field-name">availableItems</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">ceramic.Pool.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#availableItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


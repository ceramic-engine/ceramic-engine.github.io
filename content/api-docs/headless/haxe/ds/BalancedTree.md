---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: BalancedTree
target: Headless
permalink: api-docs/headless/haxe/ds/BalancedTree/
---

# BalancedTree

<div class="type-hierarchy"><strong>haxe.ds.BalancedTree</strong> (Class) → <a href="/api-docs/headless/haxe/ds/EnumValueMap/">EnumValueMap</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/haxe/IMap/">haxe.IMap</a></div>

BalancedTree allows key-value mapping with arbitrary keys, as long as they
can be ordered. By default, `Reflect.compare` is used in the `compare`
method, which can be overridden in subclasses.

Operations have a logarithmic average and worst-case cost.

Iteration over keys and values, using `keys` and `iterator` respectively,
are in-order.

## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds `key` to `value`.

If `key` is already bound to a value, that binding disappears.

If `key` is null, the result is unspecified.

| Name | Type |
|------|------|
| `key` | haxe.ds.BalancedTree.K |
| `value` | haxe.ds.BalancedTree.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value `key` is bound to.

If `key` is not bound to any value, `null` is returned.

If `key` is null, the result is unspecified.

| Name | Type |
|------|------|
| `key` | haxe.ds.BalancedTree.K |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<haxe.ds.BalancedTree.V> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterates over the bound values of `this` BalancedTree.

This operation is performed in-order.
| Returns |
|---------|
| [Iterator](/api-docs/headless/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Map.keyValueIterator`
| Returns |
|---------|
| [KeyValueIterator](/api-docs/headless/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterates over the keys of `this` BalancedTree.

This operation is performed in-order.
| Returns |
|---------|
| [Iterator](/api-docs/headless/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new BalancedTree, which is initially empty.

## Private Members

<div class="signature field-var no-description" id="root"><code><span class="field-name">root</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="iteratorLoop"><code><span class="field-name">iteratorLoop</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">iteratorLoop.K</span><span class="operator">,</span> <span class="type-name">iteratorLoop.V</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">acc</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">iteratorLoop.V</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#iteratorLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<iteratorLoop.K, iteratorLoop.V> |
| `acc` | [Array](/api-docs/headless/Array/)<iteratorLoop.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setLoop"><code><span class="field-name">setLoop</span><span class="parenthesis">(</span><span class="arg-name">k</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#setLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `k` | haxe.ds.BalancedTree.K |
| `v` | haxe.ds.BalancedTree.V |
| `node` | [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |

| Returns |
|---------|
| [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keysLoop"><code><span class="field-name">keysLoop</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">acc</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keysLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |
| `acc` | [Array](/api-docs/headless/Array/)<haxe.ds.BalancedTree.K> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="balance"><code><span class="field-name">balance</span><span class="parenthesis">(</span><span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">k</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/TreeNode/" class="type-link">TreeNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="type-name">haxe.ds.BalancedTree.V</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#balance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `l` | [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |
| `k` | haxe.ds.BalancedTree.K |
| `v` | haxe.ds.BalancedTree.V |
| `r` | [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |

| Returns |
|---------|
| [TreeNode](/api-docs/headless/haxe/ds/TreeNode/)<haxe.ds.BalancedTree.K, haxe.ds.BalancedTree.V> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">k1</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="operator">,</span> <span class="arg-name">k2</span><span class="operator">:</span> <span class="type-name">haxe.ds.BalancedTree.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `k1` | haxe.ds.BalancedTree.K |
| `k2` | haxe.ds.BalancedTree.K |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |


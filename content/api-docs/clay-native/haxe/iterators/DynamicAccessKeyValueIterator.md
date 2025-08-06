---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DynamicAccessKeyValueIterator
target: Clay (Native)
permalink: api-docs/clay-native/haxe/iterators/DynamicAccessKeyValueIterator/
---

# DynamicAccessKeyValueIterator

<div class="type-hierarchy"><strong>haxe.iterators.DynamicAccessKeyValueIterator</strong> (Class)</div>

This Key/Value iterator can be used to iterate over `haxe.DynamicAccess`.

## Instance Members

<div class="signature field-method has-description" id="hasNext"><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.hasNext`
| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="next"><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

See `Iterator.next`
| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.DynamicAccessKeyValueIterator.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `access` | [haxe.DynamicAccess](/api-docs/clay-native/haxe/DynamicAccess/)<haxe.iterators.DynamicAccessKeyValueIterator.T> |

## Private Members

<div class="signature field-var no-description" id="access"><code><span class="field-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><span class="type-name">haxe.iterators.DynamicAccessKeyValueIterator.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#access"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="keys"><code><span class="field-name">keys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: List
target: Unity
permalink: api-docs/unity/haxe/ds/List/
---

# List

<div class="type-hierarchy"><strong>haxe.ds.List</strong> (Class)</div>

A linked-list of elements. The list is composed of element container objects
that are chained together. It is optimized so that adding or removing an
element does not imply copying the whole list content every time.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-List.html</div>


## Instance Members

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The length of `this` List.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">haxe.ds.List.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds element `item` at the end of `this` List.

`this.length` increases by 1.

| Name | Type |
|------|------|
| `item` | haxe.ds.List.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">haxe.ds.List.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds element `item` at the beginning of `this` List.

`this.length` increases by 1.

| Name | Type |
|------|------|
| `item` | haxe.ds.List.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pop"><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.List.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first element of `this` List, or null if no elements exist.

The element is removed from `this` List.
| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<haxe.ds.List.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_List/ListIterator/" class="type-link">haxe.ds._List.ListIterator</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.List.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator on the elements of the list.
| Returns |
|---------|
| [haxe.ds._List.ListIterator](/api-docs/unity/haxe/ds/_List/ListIterator/)<haxe.ds.List.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new empty list.

## Private Members

<div class="signature field-var no-description" id="h"><code><span class="field-name">h</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_List/ListNode/" class="type-link">haxe.ds._List.ListNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.List.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#h"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="q"><code><span class="field-name">q</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/_List/ListNode/" class="type-link">haxe.ds._List.ListNode</a><span class="operator">&lt;</span><span class="type-name">haxe.ds.List.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#q"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Deque
target: Clay (Native)
permalink: api-docs/clay-native/sys/thread/Deque/
---

# Deque

<div class="type-hierarchy"><strong>sys.thread.Deque</strong> (Class)</div>

A Deque is a double-ended queue with a `pop` method that can block until
an element is available. It is commonly used to synchronize threads.

## Instance Members

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <span class="type-name">sys.thread.Deque.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an element at the front of `this` Deque.

(Java,Jvm): throws `java.lang.NullPointerException` if `i` is `null`.

| Name | Type |
|------|------|
| `i` | sys.thread.Deque.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pop"><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="arg-name">block</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">sys.thread.Deque.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tries to retrieve an element from the front of `this` Deque.

If an element is available, it is removed from the queue and returned.

If no element is available and `block` is `false`, `null` is returned.

Otherwise, execution blocks until an element is available and returns it.

| Name | Type |
|------|------|
| `block` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<sys.thread.Deque.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Deque instance which is initially empty.

## Private Members

<div class="signature field-var no-description" id="q"><code><span class="field-name">q</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#q"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


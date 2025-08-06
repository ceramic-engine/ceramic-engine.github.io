---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Mutex
target: Clay (Native)
permalink: api-docs/clay-native/sys/thread/Mutex/
---

# Mutex

<div class="type-hierarchy"><strong>sys.thread.Mutex</strong> (Class)</div>

Creates a mutex, which can be used to acquire a temporary lock
to access some ressource. The main difference with a lock is
that a mutex must always be released by the owner thread.

## Instance Members

<div class="signature field-method has-description" id="acquire"><code><span class="field-name">acquire</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#acquire"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current thread acquire the mutex or wait if not available.
The same thread can acquire several times the same mutex but
must release it as many times it has been acquired.

<hr class="field-separator" />

<div class="signature field-method has-description" id="release"><code><span class="field-name">release</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release a mutex that has been acquired by the current thread.
The behavior is undefined if the current thread does not own
the mutex.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a mutex.

## Private Members

<div class="signature field-var no-description" id="m"><code><span class="field-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#m"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


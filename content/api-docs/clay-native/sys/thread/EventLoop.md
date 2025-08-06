---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EventLoop
target: Clay (Native)
permalink: api-docs/clay-native/sys/thread/EventLoop/
---

# EventLoop

<div class="type-hierarchy"><strong>sys.thread.EventLoop</strong> (Class)</div>

An event loop implementation used for `sys.thread.Thread`

## Instance Members

<div class="signature field-method has-description" id="progress"><code><span class="field-name">progress</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#progress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes all pending events.

The returned time stamps can be used with `Sys.time()` for calculations.

Depending on a target platform this method may be non-reentrant. It must
not be called from event callbacks.
| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="loop"><code><span class="field-name">loop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute all pending events.
Wait and execute as many events as the number of times `promise()` was called.
Runs until all repeating events are cancelled and no more events are expected.

Depending on a target platform this method may be non-reentrant. It must
not be called from event callbacks.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="CREATED"><code><span class="field-name">CREATED</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CREATED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mutex"><code><span class="field-name">mutex</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Mutex/" class="type-link">Mutex</a></code><a class="header-anchor" href="#mutex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oneTimeEvents"><code><span class="field-name">oneTimeEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#oneTimeEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oneTimeEventsIdx"><code><span class="field-name">oneTimeEventsIdx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#oneTimeEventsIdx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="waitLock"><code><span class="field-name">waitLock</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/thread/Lock/" class="type-link">Lock</a></code><a class="header-anchor" href="#waitLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="promisedEventsCount"><code><span class="field-name">promisedEventsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#promisedEventsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="regularEvents"><code><span class="field-name">regularEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/thread/_EventLoop/RegularEvent/" class="type-link">sys.thread._EventLoop.RegularEvent</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#regularEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isMainThread"><code><span class="field-name">isMainThread</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMainThread"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


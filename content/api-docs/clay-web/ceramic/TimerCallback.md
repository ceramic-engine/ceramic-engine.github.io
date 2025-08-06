---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TimerCallback
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TimerCallback/
---

# TimerCallback

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Timer.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TimerCallback</strong> (Class)</div>

Internal data structure representing a scheduled timer callback.
Tracks the callback function, timing information, and cancellation state.

## Instance Members

<div class="signature field-var has-description" id="owner"><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The entity that owns this timer. If the owner is destroyed,
the timer is automatically cancelled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="time"><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The next time (in Timer.now units) when this callback should execute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="interval"><code><span class="field-name">interval</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#interval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For repeating timers, the interval between executions.
-1 indicates a one-shot timer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="cleared"><code><span class="field-name">cleared</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#cleared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this timer has been cancelled and should no longer execute.

<hr class="field-separator" />

<div class="signature field-method has-description" id="callback"><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback function to execute when the timer fires.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancel this timer callback.
The callback will not execute again after calling this method.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


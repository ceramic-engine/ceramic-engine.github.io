---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: BackgroundQueue
target: Clay (Web)
permalink: api-docs/clay-web/clay/BackgroundQueue/
---

# BackgroundQueue

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/BackgroundQueue.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.BackgroundQueue</strong> (Class)</div>

An utility to enqueue functions and execute them in background, in a serialized way,
meaning it is garanteed that no function in this queue will be run in parallel. An enqueued
function will always be started after every previous function has finished executing.

## Instance Members

<div class="signature field-var has-description" id="checkInterval"><code><span class="field-name">checkInterval</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#checkInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time interval between each checks to see if there is something to run.

<hr class="field-separator" />

<div class="signature field-method no-description" id="schedule"><code><span class="field-name">schedule</span><span class="parenthesis">(</span><span class="arg-name">fn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#schedule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fn` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">checkInterval</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.05</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `checkInterval` | [Float](/api-docs/clay-web/Float/) | `0.05` |

## Private Members

<div class="signature field-var no-description" id="runsInBackground"><code><span class="field-name">runsInBackground</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#runsInBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="stop"><code><span class="field-name">stop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


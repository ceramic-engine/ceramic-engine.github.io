---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Lock
target: Unity
permalink: api-docs/unity/sys/thread/Lock/
---

# Lock

<div class="type-hierarchy"><strong>sys.thread.Lock</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="wait"><code><span class="field-name">wait</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wait"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `timeout` | [Float](/api-docs/unity/Float/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="release"><code><span class="field-name">release</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="releaseEvent"><code><span class="field-name">releaseEvent</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/ManualResetEvent/" class="type-link">cs.system.threading.ManualResetEvent</a></code><a class="header-anchor" href="#releaseEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="waitCount"><code><span class="field-name">waitCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#waitCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="releaseCount"><code><span class="field-name">releaseCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#releaseCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


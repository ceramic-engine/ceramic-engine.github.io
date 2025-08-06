---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WebIO
target: Clay (Web)
permalink: api-docs/clay-web/clay/web/WebIO/
---

# WebIO

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/web/WebIO.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/base/BaseIO/">clay.base.BaseIO</a> → <strong>clay.web.WebIO</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadData"><code><span class="field-name">loadData</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">binary</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#loadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `binary` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `async` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |

## Private Members

<div class="signature field-var no-description" id="testedElectronRemoteAvailability"><code><span class="field-name">testedElectronRemoteAvailability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testedElectronRemoteAvailability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="electronRemote"><code><span class="field-name">electronRemote</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#electronRemote"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindElectronRemote"><code><span class="field-name">bindElectronRemote</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindElectronRemote"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: BaseAssets
target: Clay (Web)
permalink: api-docs/clay-web/clay/base/BaseAssets/
---

# BaseAssets

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/base/BaseAssets.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.base.BaseAssets</strong> (Class) → <a href="/api-docs/clay-web/clay/web/WebAssets/">clay.web.WebAssets</a></div>

## Instance Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay app

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fullPath"><code><span class="field-name">fullPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fullPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadImage"><code><span class="field-name">loadImage</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#loadImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `components` | [Int](/api-docs/clay-web/Int/) | `4` |
| `async` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: PerformanceNavigation
target: Clay (Web)
permalink: api-docs/clay-web/js/html/PerformanceNavigation/
---

# PerformanceNavigation

<div class="type-hierarchy"><strong>js.html.PerformanceNavigation</strong> (extern class)</div>

The legacy `PerformanceNavigation` interface represents information about how the navigation to the current document was done.

Documentation [PerformanceNavigation](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigation></div>


## Static Members

<div class="signature field-var no-description" id="TYPE_NAVIGATE"><code><span class="field-name">TYPE_NAVIGATE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TYPE_NAVIGATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TYPE_RELOAD"><code><span class="field-name">TYPE_RELOAD</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TYPE_RELOAD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TYPE_BACK_FORWARD"><code><span class="field-name">TYPE_BACK_FORWARD</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TYPE_BACK_FORWARD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TYPE_RESERVED"><code><span class="field-name">TYPE_RESERVED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TYPE_RESERVED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="redirectCount"><code><span class="field-name">redirectCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#redirectCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `unsigned short` representing the number of REDIRECTs done before reaching the page.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a jsonizer returning a json object representing the `PerformanceNavigation` object.
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |


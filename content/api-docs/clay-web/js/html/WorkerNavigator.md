---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WorkerNavigator
target: Clay (Web)
permalink: api-docs/clay-web/js/html/WorkerNavigator/
---

# WorkerNavigator

<div class="type-hierarchy"><strong>js.html.WorkerNavigator</strong> (extern class)</div>

The `WorkerNavigator` interface represents a subset of the `Navigator` interface allowed to be accessed from a `Worker`. Such an object is initialized for each worker and is available via the `WorkerGlobalScope.navigator` property obtained by calling `window.self.navigator`.

Documentation [WorkerNavigator](https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WorkerNavigator></div>


## Instance Members

<div class="signature field-var no-description" id="hardwareConcurrency"><code><span class="field-name">hardwareConcurrency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hardwareConcurrency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="appCodeName"><code><span class="field-name">appCodeName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appCodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="appName"><code><span class="field-name">appName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="appVersion"><code><span class="field-name">appVersion</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform"><code><span class="field-name">platform</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#platform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="userAgent"><code><span class="field-name">userAgent</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#userAgent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="product"><code><span class="field-name">product</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#product"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="language"><code><span class="field-name">language</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#language"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="languages"><code><span class="field-name">languages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#languages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onLine"><code><span class="field-name">onLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#onLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="storage"><code><span class="field-name">storage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StorageManager/" class="type-link">StorageManager</a></code><a class="header-anchor" href="#storage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="taintEnabled"><code><span class="field-name">taintEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#taintEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |


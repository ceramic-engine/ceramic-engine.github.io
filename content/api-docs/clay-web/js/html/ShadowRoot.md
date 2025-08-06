---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ShadowRoot
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ShadowRoot/
---

# ShadowRoot

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DocumentFragment/">DocumentFragment</a> → <strong>js.html.ShadowRoot</strong> (extern class)</div>

The `ShadowRoot` interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree.

Documentation [ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot></div>


## Instance Members

<div class="signature field-var has-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ShadowRootMode/" class="type-link">ShadowRootMode</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mode of the `ShadowRoot` — either `open` or `closed`. This defines whether or not the shadow root's internal features are accessible from JavaScript.

<hr class="field-separator" />

<div class="signature field-var has-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the DOM element the `ShadowRoot` is attached to.

<hr class="field-separator" />

<div class="signature field-var has-description" id="innerHTML"><code><span class="field-name">innerHTML</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#innerHTML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets or returns a reference to the DOM tree inside the `ShadowRoot`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="activeElement"><code><span class="field-name">activeElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#activeElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="styleSheets"><code><span class="field-name">styleSheets</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StyleSheetList/" class="type-link">StyleSheetList</a></code><a class="header-anchor" href="#styleSheets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerLockElement"><code><span class="field-name">pointerLockElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#pointerLockElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fullscreenElement"><code><span class="field-name">fullscreenElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#fullscreenElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementById"><code><span class="field-name">getElementById</span><span class="parenthesis">(</span><span class="arg-name">elementId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#getElementById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementsByTagName"><code><span class="field-name">getElementsByTagName</span><span class="parenthesis">(</span><span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementsByTagNameNS"><code><span class="field-name">getElementsByTagNameNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagNameNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementsByClassName"><code><span class="field-name">getElementsByClassName</span><span class="parenthesis">(</span><span class="arg-name">classNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByClassName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `classNames` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="elementFromPoint"><code><span class="field-name">elementFromPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#elementFromPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="elementsFromPoint"><code><span class="field-name">elementsFromPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#elementsFromPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Element](/api-docs/clay-web/js/html/Element/)> |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DocumentFragment
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DocumentFragment/
---

# DocumentFragment

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.DocumentFragment</strong> (extern class) → <a href="/api-docs/clay-web/js/html/ShadowRoot/">ShadowRoot</a></div>

The `DocumentFragment` interface represents a minimal document object that has no parent. It is used as a lightweight version of `Document` that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

Documentation [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment></div>


## Instance Members

<div class="signature field-var no-description" id="children"><code><span class="field-name">children</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstElementChild"><code><span class="field-name">firstElementChild</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#firstElementChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastElementChild"><code><span class="field-name">lastElementChild</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#lastElementChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="childElementCount"><code><span class="field-name">childElementCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#childElementCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementById"><code><span class="field-name">getElementById</span><span class="parenthesis">(</span><span class="arg-name">elementId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#getElementById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first `Element` node within the DocumentFragment`, in document order, that matches the specified ID.

| Name | Type |
|------|------|
| `elementId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelector"><code><span class="field-name">querySelector</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#querySelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first `Element` node within the `DocumentFragment`, in document order, that matches the specified selectors.

| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelectorAll"><code><span class="field-name">querySelectorAll</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#querySelectorAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `NodeList` of all the `Element` nodes within the `DocumentFragment` that match the specified selectors.

| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [NodeList](/api-docs/clay-web/js/html/NodeList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prepend"><code><span class="field-name">prepend</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>




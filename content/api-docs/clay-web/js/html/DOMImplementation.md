---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMImplementation
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMImplementation/
---

# DOMImplementation

<div class="type-hierarchy"><strong>js.html.DOMImplementation</strong> (extern class)</div>

The `DOMImplementation` interface represent an object providing methods which are not dependent on any particular document. Such an object is returned by the `Document.implementation` property.

Documentation [DOMImplementation](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation></div>


## Instance Members

<div class="signature field-method has-description" id="hasFeature"><code><span class="field-name">hasFeature</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasFeature"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if a given feature is supported or not. This function is unreliable and kept for compatibility purpose alone: except for SVG-related queries, it always returns `true`. Old browsers are very inconsistent in their behavior.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDocumentType"><code><span class="field-name">createDocumentType</span><span class="parenthesis">(</span><span class="arg-name">qualifiedName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">publicId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">systemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentType/" class="type-link">DocumentType</a></code><a class="header-anchor" href="#createDocumentType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns a `DocumentType`.

| Name | Type |
|------|------|
| `qualifiedName` | [String](/api-docs/clay-web/String/) |
| `publicId` | [String](/api-docs/clay-web/String/) |
| `systemId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [DocumentType](/api-docs/clay-web/js/html/DocumentType/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDocument"><code><span class="field-name">createDocument</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">qualifiedName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">doctype</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentType/" class="type-link">DocumentType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#createDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns an `XMLDocument`.

| Name | Type | Default |
|------|------|---------|
| `namespace` | [String](/api-docs/clay-web/String/) | |
| `qualifiedName` | [String](/api-docs/clay-web/String/) | |
| `doctype` | [DocumentType](/api-docs/clay-web/js/html/DocumentType/) | *(optional)* |

| Returns |
|---------|
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createHTMLDocument"><code><span class="field-name">createHTMLDocument</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#createHTMLDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates and returns an HTML `Document`.

| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) |


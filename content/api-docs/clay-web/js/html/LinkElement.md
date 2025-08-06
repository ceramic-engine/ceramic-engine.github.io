---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: LinkElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/LinkElement/
---

# LinkElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">DOMElement</a> → <a href="/api-docs/clay-web/js/html/Element/">Element</a> → <strong>js.html.LinkElement</strong> (extern class)</div>

The `HTMLLinkElement` interface represents reference information for external resources and the relationship of those resources to a document and vice-versa. This object inherits all of the properties and methods of the `HTMLElement` interface.

Documentation [HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement></div>


## Instance Members

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` which represents whether the link is disabled; currently only used with style sheet links.

<hr class="field-separator" />

<div class="signature field-var has-description" id="href"><code><span class="field-name">href</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#href"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the URI for the target resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="crossOrigin"><code><span class="field-name">crossOrigin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#crossOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that corresponds to the CORS setting for this link element. See CORS settings attributes for details.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rel"><code><span class="field-name">rel</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#rel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the forward relationship of the linked resource from the document to the resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="relList"><code><span class="field-name">relList</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#relList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMTokenList` that reflects the `rel` HTML attribute, as a list of tokens.

<hr class="field-separator" />

<div class="signature field-var has-description" id="media"><code><span class="field-name">media</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#media"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing a list of one or more media formats to which the resource applies.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hreflang"><code><span class="field-name">hreflang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hreflang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the language code for the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the MIME type of the linked resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrerPolicy"><code><span class="field-name">referrerPolicy</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrerPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` that reflects the `referrerpolicy` HTML attribute indicating which referrer to use.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sizes"><code><span class="field-name">sizes</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#sizes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMSettableTokenList` that reflects the `sizes` HTML attribute, as a list of tokens.

<hr class="field-separator" />

<div class="signature field-var has-description" id="charset"><code><span class="field-name">charset</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#charset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the character encoding for the target resource.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rev"><code><span class="field-name">rev</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#rev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the reverse relationship of the linked resource from the resource to the document.
Note: Currently the W3C HTML 5.2 spec states that `rev` is no longer obsolete, whereas the WHATWG living standard still has it labeled obsolete. Until this discrepancy is resolved, you should still assume it is obsolete.

<hr class="field-separator" />

<div class="signature field-var has-description" id="target"><code><span class="field-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the name of the target frame to which the resource applies.

<hr class="field-separator" />

<div class="signature field-var no-description" id="integrity"><code><span class="field-name">integrity</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#integrity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="as"><code><span class="field-name">as</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#as"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the type of content being loaded by the HTML link.

<hr class="field-separator" />

<div class="signature field-var no-description" id="sheet"><code><span class="field-name">sheet</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StyleSheet/" class="type-link">StyleSheet</a></code><a class="header-anchor" href="#sheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


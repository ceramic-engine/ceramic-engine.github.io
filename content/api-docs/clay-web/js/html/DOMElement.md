---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMElement/
---

# DOMElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.DOMElement</strong> (extern class) → <a href="/api-docs/clay-web/js/html/Element/">Element</a>, <a href="/api-docs/clay-web/js/html/svg/Element/">js.html.svg.Element</a></div>

`Element` is the most general base class from which all objects in a `Document` inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from `Element`.

Documentation [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Element$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Element></div>


## Instance Members

<div class="signature field-var has-description" id="namespaceURI"><code><span class="field-name">namespaceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#namespaceURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The namespace URI of the element, or `null` if it is no namespace.

Note: In Firefox 3.5 and earlier, HTML elements are in no namespace. In later versions, HTML elements are in the `http://www.w3.org/1999/xhtml` namespace in both HTML and XML trees. `1.9.2`

<hr class="field-separator" />

<div class="signature field-var has-description" id="prefix"><code><span class="field-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#prefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the namespace prefix of the element, or `null` if no prefix is specified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="localName"><code><span class="field-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#localName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` representing the local part of the qualified name of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tagName"><code><span class="field-name">tagName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#tagName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `String` with the name of the tag for the given element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the id of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="className"><code><span class="field-name">className</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#className"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the class of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="classList"><code><span class="field-name">classList</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#classList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMTokenList` containing the list of class attributes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="attributes"><code><span class="field-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NamedNodeMap/" class="type-link">NamedNodeMap</a></code><a class="header-anchor" href="#attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `NamedNodeMap` object containing the assigned attributes of the corresponding HTML element.

<hr class="field-separator" />

<div class="signature field-var no-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lang"><code><span class="field-name">lang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dataset"><code><span class="field-name">dataset</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMStringMap/" class="type-link">DOMStringMap</a></code><a class="header-anchor" href="#dataset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="innerText"><code><span class="field-name">innerText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#innerText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemScope"><code><span class="field-name">itemScope</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#itemScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemType"><code><span class="field-name">itemType</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#itemType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemId"><code><span class="field-name">itemId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#itemId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemRef"><code><span class="field-name">itemRef</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#itemRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemProp"><code><span class="field-name">itemProp</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMTokenList/" class="type-link">DOMTokenList</a></code><a class="header-anchor" href="#itemProp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="properties"><code><span class="field-name">properties</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLPropertiesCollection/" class="type-link">HTMLPropertiesCollection</a></code><a class="header-anchor" href="#properties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="itemValue"><code><span class="field-name">itemValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#itemValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hidden"><code><span class="field-name">hidden</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hidden"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tabIndex"><code><span class="field-name">tabIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tabIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="accessKey"><code><span class="field-name">accessKey</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#accessKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="accessKeyLabel"><code><span class="field-name">accessKeyLabel</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#accessKeyLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="draggable"><code><span class="field-name">draggable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#draggable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="contentEditable"><code><span class="field-name">contentEditable</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#contentEditable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isContentEditable"><code><span class="field-name">isContentEditable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContentEditable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="contextMenu"><code><span class="field-name">contextMenu</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MenuElement/" class="type-link">MenuElement</a></code><a class="header-anchor" href="#contextMenu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="spellcheck"><code><span class="field-name">spellcheck</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#spellcheck"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="style"><code><span class="field-name">style</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CSSStyleDeclaration/" class="type-link">CSSStyleDeclaration</a></code><a class="header-anchor" href="#style"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oncopy"><code><span class="field-name">oncopy</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oncut"><code><span class="field-name">oncut</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpaste"><code><span class="field-name">onpaste</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpaste"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetParent"><code><span class="field-name">offsetParent</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#offsetParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetTop"><code><span class="field-name">offsetTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetLeft"><code><span class="field-name">offsetLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetWidth"><code><span class="field-name">offsetWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetHeight"><code><span class="field-name">offsetHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollTop"><code><span class="field-name">scrollTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Number` representing number of pixels the top of the document is scrolled vertically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollLeft"><code><span class="field-name">scrollLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Number` representing the left scroll offset of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollWidth"><code><span class="field-name">scrollWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the scroll view width of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollHeight"><code><span class="field-name">scrollHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the scroll view height of an element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientTop"><code><span class="field-name">clientTop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the width of the top border of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientLeft"><code><span class="field-name">clientLeft</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the width of the left border of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientWidth"><code><span class="field-name">clientWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the inner width of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clientHeight"><code><span class="field-name">clientHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#clientHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the inner height of the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollTopMax"><code><span class="field-name">scrollTopMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollTopMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the maximum top scroll offset possible for the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollLeftMax"><code><span class="field-name">scrollLeftMax</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollLeftMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Number` representing the maximum left scroll offset possible for the element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="innerHTML"><code><span class="field-name">innerHTML</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#innerHTML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the markup of the element's content.

<hr class="field-separator" />

<div class="signature field-var has-description" id="outerHTML"><code><span class="field-name">outerHTML</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#outerHTML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `DOMString` representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="shadowRoot"><code><span class="field-name">shadowRoot</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ShadowRoot/" class="type-link">ShadowRoot</a></code><a class="header-anchor" href="#shadowRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.

<hr class="field-separator" />

<div class="signature field-var no-description" id="assignedSlot"><code><span class="field-name">assignedSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SlotElement/" class="type-link">SlotElement</a></code><a class="header-anchor" href="#assignedSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="slot"><code><span class="field-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#slot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of the shadow DOM slot the element is inserted in.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onabort"><code><span class="field-name">onabort</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onabort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onblur"><code><span class="field-name">onblur</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onblur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onfocus"><code><span class="field-name">onfocus</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onfocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onauxclick"><code><span class="field-name">onauxclick</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onauxclick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oncanplay"><code><span class="field-name">oncanplay</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncanplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oncanplaythrough"><code><span class="field-name">oncanplaythrough</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncanplaythrough"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onchange"><code><span class="field-name">onchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onclick"><code><span class="field-name">onclick</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onclick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onclose"><code><span class="field-name">onclose</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onclose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oncontextmenu"><code><span class="field-name">oncontextmenu</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncontextmenu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondblclick"><code><span class="field-name">ondblclick</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondblclick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondrag"><code><span class="field-name">ondrag</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragend"><code><span class="field-name">ondragend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragenter"><code><span class="field-name">ondragenter</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragexit"><code><span class="field-name">ondragexit</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragexit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragleave"><code><span class="field-name">ondragleave</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragleave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragover"><code><span class="field-name">ondragover</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondragstart"><code><span class="field-name">ondragstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondragstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondrop"><code><span class="field-name">ondrop</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondurationchange"><code><span class="field-name">ondurationchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondurationchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onemptied"><code><span class="field-name">onemptied</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onemptied"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onended"><code><span class="field-name">onended</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oninput"><code><span class="field-name">oninput</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oninput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="oninvalid"><code><span class="field-name">oninvalid</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oninvalid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onkeydown"><code><span class="field-name">onkeydown</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onkeydown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onkeypress"><code><span class="field-name">onkeypress</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onkeypress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onkeyup"><code><span class="field-name">onkeyup</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onkeyup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onload"><code><span class="field-name">onload</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onloadeddata"><code><span class="field-name">onloadeddata</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadeddata"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onloadedmetadata"><code><span class="field-name">onloadedmetadata</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadedmetadata"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onloadend"><code><span class="field-name">onloadend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onloadstart"><code><span class="field-name">onloadstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onloadstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmousedown"><code><span class="field-name">onmousedown</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmousedown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmouseenter"><code><span class="field-name">onmouseenter</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmouseenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmouseleave"><code><span class="field-name">onmouseleave</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmouseleave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmousemove"><code><span class="field-name">onmousemove</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmousemove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmouseout"><code><span class="field-name">onmouseout</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmouseout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmouseover"><code><span class="field-name">onmouseover</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmouseover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmouseup"><code><span class="field-name">onmouseup</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmouseup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="onwheel"><code><span class="field-name">onwheel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the event handling code for the `wheel` event. This is now implemented on `GlobalEventHandlers.onwheel`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpause"><code><span class="field-name">onpause</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onplay"><code><span class="field-name">onplay</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onplaying"><code><span class="field-name">onplaying</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onplaying"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onprogress"><code><span class="field-name">onprogress</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onprogress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onratechange"><code><span class="field-name">onratechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onratechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onreset"><code><span class="field-name">onreset</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onreset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onresize"><code><span class="field-name">onresize</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onresize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onscroll"><code><span class="field-name">onscroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onscroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onseeked"><code><span class="field-name">onseeked</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onseeked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onseeking"><code><span class="field-name">onseeking</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onseeking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onselect"><code><span class="field-name">onselect</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onselect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onshow"><code><span class="field-name">onshow</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onshow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onstalled"><code><span class="field-name">onstalled</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstalled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onsubmit"><code><span class="field-name">onsubmit</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onsubmit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onsuspend"><code><span class="field-name">onsuspend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onsuspend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontimeupdate"><code><span class="field-name">ontimeupdate</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontimeupdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onvolumechange"><code><span class="field-name">onvolumechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onvolumechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onwaiting"><code><span class="field-name">onwaiting</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwaiting"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onselectstart"><code><span class="field-name">onselectstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onselectstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontoggle"><code><span class="field-name">ontoggle</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontoggle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointercancel"><code><span class="field-name">onpointercancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointercancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerdown"><code><span class="field-name">onpointerdown</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerup"><code><span class="field-name">onpointerup</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointermove"><code><span class="field-name">onpointermove</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointermove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerout"><code><span class="field-name">onpointerout</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerover"><code><span class="field-name">onpointerover</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerenter"><code><span class="field-name">onpointerenter</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerenter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpointerleave"><code><span class="field-name">onpointerleave</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerleave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="ongotpointercapture"><code><span class="field-name">ongotpointercapture</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ongotpointercapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the event handler for the `gotpointercapture` event type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onlostpointercapture"><code><span class="field-name">onlostpointercapture</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onlostpointercapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the event handler for the `lostpointercapture` event type.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onanimationcancel"><code><span class="field-name">onanimationcancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onanimationcancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onanimationend"><code><span class="field-name">onanimationend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onanimationend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onanimationiteration"><code><span class="field-name">onanimationiteration</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onanimationiteration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onanimationstart"><code><span class="field-name">onanimationstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onanimationstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontransitioncancel"><code><span class="field-name">ontransitioncancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontransitioncancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontransitionend"><code><span class="field-name">ontransitionend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontransitionend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontransitionrun"><code><span class="field-name">ontransitionrun</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontransitionrun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontransitionstart"><code><span class="field-name">ontransitionstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontransitionstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onwebkitanimationend"><code><span class="field-name">onwebkitanimationend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwebkitanimationend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onwebkitanimationiteration"><code><span class="field-name">onwebkitanimationiteration</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwebkitanimationiteration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onwebkitanimationstart"><code><span class="field-name">onwebkitanimationstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwebkitanimationstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onwebkittransitionend"><code><span class="field-name">onwebkittransitionend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwebkittransitionend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="previousElementSibling"><code><span class="field-name">previousElementSibling</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#previousElementSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextElementSibling"><code><span class="field-name">nextElementSibling</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#nextElementSibling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="children"><code><span class="field-name">children</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstElementChild"><code><span class="field-name">firstElementChild</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#firstElementChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastElementChild"><code><span class="field-name">lastElementChild</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#lastElementChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="childElementCount"><code><span class="field-name">childElementCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#childElementCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchstart"><code><span class="field-name">ontouchstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchend"><code><span class="field-name">ontouchend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchmove"><code><span class="field-name">ontouchmove</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchmove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchcancel"><code><span class="field-name">ontouchcancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchcancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttributeNames"><code><span class="field-name">getAttributeNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAttributeNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of attribute names from the current element.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttribute"><code><span class="field-name">getAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the value of the named attribute from the current node and returns it as an `Object`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttributeNS"><code><span class="field-name">getAttributeNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAttributeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the value of the attribute with the specified name and namespace, from the current node and returns it as an `Object`.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toggleAttribute"><code><span class="field-name">toggleAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#toggleAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `force` | [Bool](/api-docs/clay-web/Bool/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAttribute"><code><span class="field-name">setAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the value of a named attribute of the current node.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAttributeNS"><code><span class="field-name">setAttributeNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttributeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the value of the attribute with the specified name and namespace, from the current node.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAttribute"><code><span class="field-name">removeAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the named attribute from the current node.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAttributeNS"><code><span class="field-name">removeAttributeNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAttributeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the attribute with the specified name and namespace, from the current node.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasAttribute"><code><span class="field-name">hasAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if the element has the specified attribute or not.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasAttributeNS"><code><span class="field-name">hasAttributeNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAttributeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if the element has the specified attribute, in the specified namespace, or not.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasAttributes"><code><span class="field-name">hasAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating if the element has one or more HTML attributes present.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="closest"><code><span class="field-name">closest</span><span class="parenthesis">(</span><span class="arg-name">selector</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#closest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Element` which is the closest ancestor of the current element (or the current element itself) which matches the selectors given in parameter.

| Name | Type |
|------|------|
| `selector` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matches"><code><span class="field-name">matches</span><span class="parenthesis">(</span><span class="arg-name">selector</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Boolean` indicating whether or not the element would be selected by the specified selector string.

| Name | Type |
|------|------|
| `selector` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="webkitMatchesSelector"><code><span class="field-name">webkitMatchesSelector</span><span class="parenthesis">(</span><span class="arg-name">selector</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#webkitMatchesSelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selector` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementsByTagName"><code><span class="field-name">getElementsByTagName</span><span class="parenthesis">(</span><span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` containing all descendant elements, of a particular tag name, from the current element.

| Name | Type |
|------|------|
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementsByTagNameNS"><code><span class="field-name">getElementsByTagNameNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagNameNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` containing all descendant elements, of a particular tag name and namespace, from the current element.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementsByClassName"><code><span class="field-name">getElementsByClassName</span><span class="parenthesis">(</span><span class="arg-name">classNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByClassName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a live `HTMLCollection` that contains all descendants of the current element that possess the list of classes given in the parameter.

| Name | Type |
|------|------|
| `classNames` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertAdjacentElement"><code><span class="field-name">insertAdjacentElement</span><span class="parenthesis">(</span><span class="arg-name">where</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#insertAdjacentElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a given element node at a given position relative to the element it is invoked upon.

| Name | Type |
|------|------|
| `where` | [String](/api-docs/clay-web/String/) |
| `element` | [Element](/api-docs/clay-web/js/html/Element/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertAdjacentText"><code><span class="field-name">insertAdjacentText</span><span class="parenthesis">(</span><span class="arg-name">where</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertAdjacentText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a given text node at a given position relative to the element it is invoked upon.

| Name | Type |
|------|------|
| `where` | [String](/api-docs/clay-web/String/) |
| `data` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPointerCapture"><code><span class="field-name">setPointerCapture</span><span class="parenthesis">(</span><span class="arg-name">pointerId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPointerCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Designates a specific element as the capture target of future pointer events.

| Name | Type |
|------|------|
| `pointerId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="releasePointerCapture"><code><span class="field-name">releasePointerCapture</span><span class="parenthesis">(</span><span class="arg-name">pointerId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releasePointerCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Releases (stops) pointer capture that was previously set for a specific `PointerEvent`.

| Name | Type |
|------|------|
| `pointerId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasPointerCapture"><code><span class="field-name">hasPointerCapture</span><span class="parenthesis">(</span><span class="arg-name">pointerId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasPointerCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pointerId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCapture"><code><span class="field-name">setCapture</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">retargetToElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets up mouse event capture, redirecting all mouse events to this element.

| Name | Type | Default |
|------|------|---------|
| `retargetToElement` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="releaseCapture"><code><span class="field-name">releaseCapture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttributeNode"><code><span class="field-name">getAttributeNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#getAttributeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the node representation of the named attribute from the current node and returns it as an `Attr`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAttributeNode"><code><span class="field-name">setAttributeNode</span><span class="parenthesis">(</span><span class="arg-name">newAttr</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#setAttributeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the node representation of the named attribute from the current node.

| Name | Type |
|------|------|
| `newAttr` | [Attr](/api-docs/clay-web/js/html/Attr/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAttributeNode"><code><span class="field-name">removeAttributeNode</span><span class="parenthesis">(</span><span class="arg-name">oldAttr</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#removeAttributeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the node representation of the named attribute from the current node.

| Name | Type |
|------|------|
| `oldAttr` | [Attr](/api-docs/clay-web/js/html/Attr/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAttributeNodeNS"><code><span class="field-name">getAttributeNodeNS</span><span class="parenthesis">(</span><span class="arg-name">namespaceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#getAttributeNodeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the node representation of the attribute with the specified name and namespace, from the current node and returns it as an `Attr`.

| Name | Type |
|------|------|
| `namespaceURI` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setAttributeNodeNS"><code><span class="field-name">setAttributeNodeNS</span><span class="parenthesis">(</span><span class="arg-name">newAttr</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#setAttributeNodeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the node representation of the attribute with the specified name and namespace, from the current node.

| Name | Type |
|------|------|
| `newAttr` | [Attr](/api-docs/clay-web/js/html/Attr/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="click"><code><span class="field-name">click</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#click"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="focus"><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



<hr class="field-separator" />

<div class="signature field-method has-description" id="blur"><code><span class="field-name">blur</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



<hr class="field-separator" />

<div class="signature field-method has-description" id="getClientRects"><code><span class="field-name">getClientRects</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectList/" class="type-link">DOMRectList</a></code><a class="header-anchor" href="#getClientRects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
| Returns |
|---------|
| [DOMRectList](/api-docs/clay-web/js/html/DOMRectList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoundingClientRect"><code><span class="field-name">getBoundingClientRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRect/" class="type-link">DOMRect</a></code><a class="header-anchor" href="#getBoundingClientRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the size of an element and its position relative to the viewport.
| Returns |
|---------|
| [DOMRect](/api-docs/clay-web/js/html/DOMRect/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollIntoView"><code><span class="field-name">scrollIntoView</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">arg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollIntoView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the page until the element gets into the view.

| Name | Type | Default |
|------|------|---------|
| `arg` | [Bool](/api-docs/clay-web/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scroll"><code><span class="field-name">scroll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scrollTo"><code><span class="field-name">scrollTo</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scrollBy"><code><span class="field-name">scrollBy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertAdjacentHTML"><code><span class="field-name">insertAdjacentHTML</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertAdjacentHTML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses the text as HTML or XML and inserts the resulting nodes into the tree in the position given.

| Name | Type |
|------|------|
| `position` | [String](/api-docs/clay-web/String/) |
| `text` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelector"><code><span class="field-name">querySelector</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#querySelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first `Node` which matches the specified selector string relative to the element.

| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelectorAll"><code><span class="field-name">querySelectorAll</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#querySelectorAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `NodeList` of nodes which match the specified selector string relative to the element.

| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [NodeList](/api-docs/clay-web/js/html/NodeList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attachShadow"><code><span class="field-name">attachShadow</span><span class="parenthesis">(</span><span class="arg-name">shadowRootInitDict</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ShadowRootInit/" class="type-link">ShadowRootInit</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ShadowRoot/" class="type-link">ShadowRoot</a></code><a class="header-anchor" href="#attachShadow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attatches a shadow DOM tree to the specified element and returns a reference to its `ShadowRoot`.

| Name | Type |
|------|------|
| `shadowRootInitDict` | [ShadowRootInit](/api-docs/clay-web/js/html/ShadowRootInit/) |

| Returns |
|---------|
| [ShadowRoot](/api-docs/clay-web/js/html/ShadowRoot/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="requestFullscreen"><code><span class="field-name">requestFullscreen</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/FullscreenOptions/" class="type-link">FullscreenOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#requestFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronously asks the browser to make the element full-screen.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[FullscreenOptions](/api-docs/clay-web/js/html/FullscreenOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="requestPointerLock"><code><span class="field-name">requestPointerLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#requestPointerLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows to asynchronously ask for the pointer to be locked on the given element.

<hr class="field-separator" />

<div class="signature field-method has-description" id="animate"><code><span class="field-name">animate</span><span class="parenthesis">(</span><span class="arg-name">keyframes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Animation/" class="type-link">Animation</a></code><a class="header-anchor" href="#animate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shortcut method to create and run an animation on an element. Returns the created Animation object instance.

| Name | Type | Default |
|------|------|---------|
| `keyframes` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `options` | [Float](/api-docs/clay-web/Float/) | *(optional)* |

| Returns |
|---------|
| [Animation](/api-docs/clay-web/js/html/Animation/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAnimations"><code><span class="field-name">getAnimations</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/AnimationFilter/" class="type-link">AnimationFilter</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Animation/" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of Animation objects currently active on the element.

| Name | Type | Default |
|------|------|---------|
| `filter` | [Null](/api-docs/clay-web/Null/)<[AnimationFilter](/api-docs/clay-web/js/html/AnimationFilter/)> | *(optional)* |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Animation](/api-docs/clay-web/js/html/Animation/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="before"><code><span class="field-name">before</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#before"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="after"><code><span class="field-name">after</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#after"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceWith"><code><span class="field-name">replaceWith</span><span class="parenthesis">(</span><span class="arg-name">nodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodes` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertQuadFromNode"><code><span class="field-name">convertQuadFromNode</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Text/" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a></code><a class="header-anchor" href="#convertQuadFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `quad` | [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertRectFromNode"><code><span class="field-name">convertRectFromNode</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectReadOnly/" class="type-link">DOMRectReadOnly</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Text/" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuad/" class="type-link">DOMQuad</a></code><a class="header-anchor" href="#convertRectFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `rect` | [DOMRectReadOnly](/api-docs/clay-web/js/html/DOMRectReadOnly/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertPointFromNode"><code><span class="field-name">convertPointFromNode</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPointInit/" class="type-link">DOMPointInit</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Text/" class="type-link">Text</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ConvertCoordinateOptions/" class="type-link">ConvertCoordinateOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#convertPointFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `point` | [DOMPointInit](/api-docs/clay-web/js/html/DOMPointInit/) | |
| `from` | [Text](/api-docs/clay-web/js/html/Text/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/)> | *(optional)* |

| Returns |
|---------|
| [DOMPoint](/api-docs/clay-web/js/html/DOMPoint/) |

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


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Document
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Document/
---

# Document

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <strong>js.html.Document</strong> (extern class) → <a href="/api-docs/clay-web/js/html/HTMLDocument/">HTMLDocument</a></div>

The `Document` interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.`HTMLElement`

Documentation [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Document$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Document></div>


## Instance Members

<div class="signature field-var has-description" id="implementation"><code><span class="field-name">implementation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMImplementation/" class="type-link">DOMImplementation</a></code><a class="header-anchor" href="#implementation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the DOM implementation associated with the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="URL"><code><span class="field-name">URL</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#URL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the document location as a string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="documentURI"><code><span class="field-name">documentURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#documentURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the document location as a string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="compatMode"><code><span class="field-name">compatMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#compatMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether the document is rendered in quirks or strict mode.

<hr class="field-separator" />

<div class="signature field-var has-description" id="characterSet"><code><span class="field-name">characterSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#characterSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the character set being used by the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="charset"><code><span class="field-name">charset</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#charset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias of `Document.characterSet`. Use this property instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="inputEncoding"><code><span class="field-name">inputEncoding</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#inputEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias of `Document.characterSet`. Use this property instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentType"><code><span class="field-name">contentType</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#contentType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Content-Type from the MIME Header of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="doctype"><code><span class="field-name">doctype</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentType/" class="type-link">DocumentType</a></code><a class="header-anchor" href="#doctype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the Document Type Definition (DTD) of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="documentElement"><code><span class="field-name">documentElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#documentElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `Element` that is a direct child of the document. For HTML documents, this is normally the `HTMLElement` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="location"><code><span class="field-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Location/" class="type-link">Location</a></code><a class="header-anchor" href="#location"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the URI of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="referrer"><code><span class="field-name">referrer</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#referrer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the URI of the page that linked to this page.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastModified"><code><span class="field-name">lastModified</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the date on which the document was last modified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="readyState"><code><span class="field-name">readyState</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#readyState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns loading status of the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets or gets the title of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets/sets directionality (rtl/ltr) of the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="body"><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `body` or `frameset` node of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="head"><code><span class="field-name">head</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HeadElement/" class="type-link">HeadElement</a></code><a class="header-anchor" href="#head"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `head` element of the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="images"><code><span class="field-name">images</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#images"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the images in the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="embeds"><code><span class="field-name">embeds</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#embeds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the embedded `embed` elements within the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="plugins"><code><span class="field-name">plugins</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#plugins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the available plugins.

<hr class="field-separator" />

<div class="signature field-var has-description" id="links"><code><span class="field-name">links</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#links"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of all the hyperlinks in the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="forms"><code><span class="field-name">forms</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#forms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the `form` elements within the current document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scripts"><code><span class="field-name">scripts</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#scripts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all the `script` elements on the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultView"><code><span class="field-name">defaultView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#defaultView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the window object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onreadystatechange"><code><span class="field-name">onreadystatechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onreadystatechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `readystatechange` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onbeforescriptexecute"><code><span class="field-name">onbeforescriptexecute</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onbeforescriptexecute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `beforescriptexecute` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onafterscriptexecute"><code><span class="field-name">onafterscriptexecute</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onafterscriptexecute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `afterscriptexecute` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onselectionchange"><code><span class="field-name">onselectionchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onselectionchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `selectionchange` event is raised.

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentScript"><code><span class="field-name">currentScript</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#currentScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchors"><code><span class="field-name">anchors</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#anchors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of all of the anchors in the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="applets"><code><span class="field-name">applets</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#applets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an ordered list of the applets within a document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullscreen"><code><span class="field-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` when the document is in `Using_full-screen_mode`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="fullscreenEnabled"><code><span class="field-name">fullscreenEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullscreenEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="onfullscreenchange"><code><span class="field-name">onfullscreenchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onfullscreenchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `fullscreenchange` event is raised.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onfullscreenerror"><code><span class="field-name">onfullscreenerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onfullscreenerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `fullscreenerror` event is raised.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onpointerlockchange"><code><span class="field-name">onpointerlockchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerlockchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `pointerlockchange` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onpointerlockerror"><code><span class="field-name">onpointerlockerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpointerlockerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `pointerlockerror` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hidden"><code><span class="field-name">hidden</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hidden"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

…

<hr class="field-separator" />

<div class="signature field-var has-description" id="visibilityState"><code><span class="field-name">visibilityState</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VisibilityState/" class="type-link">VisibilityState</a></code><a class="header-anchor" href="#visibilityState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `string` denoting the visibility state of the document. Possible values are `visible`,  `hidden`,  `prerender`, and `unloaded`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onvisibilitychange"><code><span class="field-name">onvisibilitychange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onvisibilitychange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `EventHandler` representing the code to be called when the `visibilitychange` event is raised.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectedStyleSheetSet"><code><span class="field-name">selectedStyleSheetSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#selectedStyleSheetSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns which style sheet set is currently in use.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastStyleSheetSet"><code><span class="field-name">lastStyleSheetSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lastStyleSheetSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of the style sheet set that was last enabled. Has the value `null` until the style sheet is changed by setting the value of `document.selectedStyleSheetSet`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preferredStyleSheetSet"><code><span class="field-name">preferredStyleSheetSet</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#preferredStyleSheetSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the preferred style sheet set as specified by the page author.

<hr class="field-separator" />

<div class="signature field-var has-description" id="styleSheetSets"><code><span class="field-name">styleSheetSets</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMStringList/" class="type-link">DOMStringList</a></code><a class="header-anchor" href="#styleSheetSets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the style sheet sets available on the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollingElement"><code><span class="field-name">scrollingElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#scrollingElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the `Element` that scrolls the document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeline"><code><span class="field-name">timeline</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentTimeline/" class="type-link">DocumentTimeline</a></code><a class="header-anchor" href="#timeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

…

<hr class="field-separator" />

<div class="signature field-var no-description" id="rootElement"><code><span class="field-name">rootElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/SVGElement/" class="type-link">js.html.svg.SVGElement</a></code><a class="header-anchor" href="#rootElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="oncopy"><code><span class="field-name">oncopy</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `copy` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="oncut"><code><span class="field-name">oncut</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#oncut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `cut` event.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onpaste"><code><span class="field-name">onpaste</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpaste"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Represents the event handling code for the `paste` event.

<hr class="field-separator" />

<div class="signature field-var no-description" id="activeElement"><code><span class="field-name">activeElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#activeElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="styleSheets"><code><span class="field-name">styleSheets</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StyleSheetList/" class="type-link">StyleSheetList</a></code><a class="header-anchor" href="#styleSheets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerLockElement"><code><span class="field-name">pointerLockElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#pointerLockElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullscreenElement"><code><span class="field-name">fullscreenElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#fullscreenElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The element that's currently in full screen mode for this document.

<hr class="field-separator" />

<div class="signature field-var no-description" id="fonts"><code><span class="field-name">fonts</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontFaceSet/" class="type-link">FontFaceSet</a></code><a class="header-anchor" href="#fonts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

Represents the event handling code for the `wheel` event.

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

<div class="signature field-var no-description" id="ongotpointercapture"><code><span class="field-name">ongotpointercapture</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ongotpointercapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onlostpointercapture"><code><span class="field-name">onlostpointercapture</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onlostpointercapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-method has-description" id="getElementsByTagName"><code><span class="field-name">getElementsByTagName</span><span class="parenthesis">(</span><span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of elements with the given tag name.

| Name | Type |
|------|------|
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementsByTagNameNS"><code><span class="field-name">getElementsByTagNameNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByTagNameNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of elements with the given tag name and namespace.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `localName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementsByClassName"><code><span class="field-name">getElementsByClassName</span><span class="parenthesis">(</span><span class="arg-name">classNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLCollection/" class="type-link">HTMLCollection</a></code><a class="header-anchor" href="#getElementsByClassName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of elements with the given class name.

| Name | Type |
|------|------|
| `classNames` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementById"><code><span class="field-name">getElementById</span><span class="parenthesis">(</span><span class="arg-name">elementId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#getElementById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createElement"><code><span class="field-name">createElement</span><span class="parenthesis">(</span><span class="arg-name">localName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ElementCreationOptions/" class="type-link">ElementCreationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new element with the given tag name.

| Name | Type | Default |
|------|------|---------|
| `localName` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ElementCreationOptions](/api-docs/clay-web/js/html/ElementCreationOptions/)> | *(optional)* |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createElementNS"><code><span class="field-name">createElementNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">qualifiedName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ElementCreationOptions/" class="type-link">ElementCreationOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#createElementNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new element with the given tag name and namespace URI.

| Name | Type | Default |
|------|------|---------|
| `namespace` | [String](/api-docs/clay-web/String/) | |
| `qualifiedName` | [String](/api-docs/clay-web/String/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ElementCreationOptions](/api-docs/clay-web/js/html/ElementCreationOptions/)> | *(optional)* |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDocumentFragment"><code><span class="field-name">createDocumentFragment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DocumentFragment/" class="type-link">DocumentFragment</a></code><a class="header-anchor" href="#createDocumentFragment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new document fragment.
| Returns |
|---------|
| [DocumentFragment](/api-docs/clay-web/js/html/DocumentFragment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTextNode"><code><span class="field-name">createTextNode</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Text/" class="type-link">Text</a></code><a class="header-anchor" href="#createTextNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a text node.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Text](/api-docs/clay-web/js/html/Text/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createComment"><code><span class="field-name">createComment</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Comment/" class="type-link">Comment</a></code><a class="header-anchor" href="#createComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new comment node and returns it.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Comment](/api-docs/clay-web/js/html/Comment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createProcessingInstruction"><code><span class="field-name">createProcessingInstruction</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ProcessingInstruction/" class="type-link">ProcessingInstruction</a></code><a class="header-anchor" href="#createProcessingInstruction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `ProcessingInstruction` object.

| Name | Type |
|------|------|
| `target` | [String](/api-docs/clay-web/String/) |
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [ProcessingInstruction](/api-docs/clay-web/js/html/ProcessingInstruction/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="importNode"><code><span class="field-name">importNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">deep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#importNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a clone of a node from an external document.

| Name | Type | Default |
|------|------|---------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `deep` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="adoptNode"><code><span class="field-name">adoptNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#adoptNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adopt node from an external document.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createEvent"><code><span class="field-name">createEvent</span><span class="parenthesis">(</span><span class="arg-name">interface_</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Event/" class="type-link">Event</a></code><a class="header-anchor" href="#createEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an event object.

| Name | Type |
|------|------|
| `interface_` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Event](/api-docs/clay-web/js/html/Event/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createRange"><code><span class="field-name">createRange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Range/" class="type-link">Range</a></code><a class="header-anchor" href="#createRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `Range` object.
| Returns |
|---------|
| [Range](/api-docs/clay-web/js/html/Range/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createNodeIterator"><code><span class="field-name">createNodeIterator</span><span class="parenthesis">(</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">whatToShow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">cast 4294967295</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeIterator/" class="type-link">NodeIterator</a></code><a class="header-anchor" href="#createNodeIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `NodeIterator` object.

| Name | Type | Default |
|------|------|---------|
| `root` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `whatToShow` | [Int](/api-docs/clay-web/Int/) | `cast 4294967295` |
| `filter` | Function | *(optional)* |

| Returns |
|---------|
| [NodeIterator](/api-docs/clay-web/js/html/NodeIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTreeWalker"><code><span class="field-name">createTreeWalker</span><span class="parenthesis">(</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">whatToShow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">cast 4294967295</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TreeWalker/" class="type-link">TreeWalker</a></code><a class="header-anchor" href="#createTreeWalker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `TreeWalker` object.

| Name | Type | Default |
|------|------|---------|
| `root` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `whatToShow` | [Int](/api-docs/clay-web/Int/) | `cast 4294967295` |
| `filter` | Function | *(optional)* |

| Returns |
|---------|
| [TreeWalker](/api-docs/clay-web/js/html/TreeWalker/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCDATASection"><code><span class="field-name">createCDATASection</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CDATASection/" class="type-link">CDATASection</a></code><a class="header-anchor" href="#createCDATASection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CDATA node and returns it.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [CDATASection](/api-docs/clay-web/js/html/CDATASection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAttribute"><code><span class="field-name">createAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#createAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Attr` object and returns it.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAttributeNS"><code><span class="field-name">createAttributeNS</span><span class="parenthesis">(</span><span class="arg-name">namespace</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Attr/" class="type-link">Attr</a></code><a class="header-anchor" href="#createAttributeNS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new attribute node in a given namespace and returns it.

| Name | Type |
|------|------|
| `namespace` | [String](/api-docs/clay-web/String/) |
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Attr](/api-docs/clay-web/js/html/Attr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementsByName"><code><span class="field-name">getElementsByName</span><span class="parenthesis">(</span><span class="arg-name">elementName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#getElementsByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [NodeList](/api-docs/clay-web/js/html/NodeList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasFocus"><code><span class="field-name">hasFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the focus is currently located anywhere inside the specified document.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="releaseCapture"><code><span class="field-name">releaseCapture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseCapture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Releases the current mouse capture if it's on an element in this document.

<hr class="field-separator" />

<div class="signature field-method has-description" id="exitFullscreen"><code><span class="field-name">exitFullscreen</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exitFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests that the element on this document which is currently being presented in fullscreen mode
be taken out of fullscreen mode, restoring the previous state of the screen.
| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Void](/api-docs/clay-web/Void/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exitPointerLock"><code><span class="field-name">exitPointerLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exitPointerLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release the pointer lock.

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableStyleSheetsForSet"><code><span class="field-name">enableStyleSheetsForSet</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableStyleSheetsForSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables the style sheets for the specified style sheet set.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="caretPositionFromPoint"><code><span class="field-name">caretPositionFromPoint</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CaretPosition/" class="type-link">CaretPosition</a></code><a class="header-anchor" href="#caretPositionFromPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [CaretPosition](/api-docs/clay-web/js/html/CaretPosition/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelector"><code><span class="field-name">querySelector</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#querySelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Element](/api-docs/clay-web/js/html/Element/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="querySelectorAll"><code><span class="field-name">querySelectorAll</span><span class="parenthesis">(</span><span class="arg-name">selectors</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/NodeList/" class="type-link">NodeList</a></code><a class="header-anchor" href="#querySelectorAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selectors` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [NodeList](/api-docs/clay-web/js/html/NodeList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAnimations"><code><span class="field-name">getAnimations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Animation/" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of all `Animation` objects currently in effect, whose target elements are descendants of the `document`.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Animation](/api-docs/clay-web/js/html/Animation/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTouch"><code><span class="field-name">createTouch</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EventTarget/" class="type-link">EventTarget</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">identifier</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pageX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pageY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">screenY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clientY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rotationAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Touch/" class="type-link">Touch</a></code><a class="header-anchor" href="#createTouch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `Touch` object.

| Name | Type | Default |
|------|------|---------|
| `view` | [Window](/api-docs/clay-web/js/html/Window/) | *(optional)* |
| `target` | [EventTarget](/api-docs/clay-web/js/html/EventTarget/) | *(optional)* |
| `identifier` | [Int](/api-docs/clay-web/Int/) | `0` |
| `pageX` | [Int](/api-docs/clay-web/Int/) | `0` |
| `pageY` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenX` | [Int](/api-docs/clay-web/Int/) | `0` |
| `screenY` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientX` | [Int](/api-docs/clay-web/Int/) | `0` |
| `clientY` | [Int](/api-docs/clay-web/Int/) | `0` |
| `radiusX` | [Int](/api-docs/clay-web/Int/) | `0` |
| `radiusY` | [Int](/api-docs/clay-web/Int/) | `0` |
| `rotationAngle` | [Float](/api-docs/clay-web/Float/) | `0.0` |
| `force` | [Float](/api-docs/clay-web/Float/) | `0.0` |

| Returns |
|---------|
| [Touch](/api-docs/clay-web/js/html/Touch/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTouchList"><code><span class="field-name">createTouchList</span><span class="parenthesis">(</span><span class="arg-name">touches</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Touch/" class="type-link">Touch</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchList/" class="type-link">TouchList</a></code><a class="header-anchor" href="#createTouchList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a `TouchList` object.

| Name | Type |
|------|------|
| `touches` | [Array](/api-docs/clay-web/Array/)<[Touch](/api-docs/clay-web/js/html/Touch/)> |

| Returns |
|---------|
| [TouchList](/api-docs/clay-web/js/html/TouchList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSelection"><code><span class="field-name">getSelection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Selection/" class="type-link">Selection</a></code><a class="header-anchor" href="#getSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Selection](/api-docs/clay-web/js/html/Selection/) |

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

<hr class="field-separator" />

<div class="signature field-method has-description" id="createExpression"><code><span class="field-name">createExpression</span><span class="parenthesis">(</span><span class="arg-name">expression</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resolver</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/XPathExpression/" class="type-link">XPathExpression</a></code><a class="header-anchor" href="#createExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `expression` | [String](/api-docs/clay-web/String/) | |
| `resolver` | Function | *(optional)* |

| Returns |
|---------|
| [XPathExpression](/api-docs/clay-web/js/html/XPathExpression/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createNSResolver"><code><span class="field-name">createNSResolver</span><span class="parenthesis">(</span><span class="arg-name">nodeResolver</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#createNSResolver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodeResolver` | [Node](/api-docs/clay-web/js/html/Node/) |

| Returns |
|---------|
| [Node](/api-docs/clay-web/js/html/Node/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluate"><code><span class="field-name">evaluate</span><span class="parenthesis">(</span><span class="arg-name">expression</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">contextNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resolver</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/XPathResult/" class="type-link">XPathResult</a></code><a class="header-anchor" href="#evaluate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `expression` | [String](/api-docs/clay-web/String/) | |
| `contextNode` | [Node](/api-docs/clay-web/js/html/Node/) | |
| `resolver` | Function | *(optional)* |
| `type` | [Int](/api-docs/clay-web/Int/) | `0` |
| `result` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [XPathResult](/api-docs/clay-web/js/html/XPathResult/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>




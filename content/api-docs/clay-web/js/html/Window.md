---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Window
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Window/
---

# Window

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.Window</strong> (extern class)</div>

The `Window` interface represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window.

Documentation [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Window$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Window></div>


## Instance Members

<div class="signature field-var has-description" id="window"><code><span class="field-name">window</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#window"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the current window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="self"><code><span class="field-name">self</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#self"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an object reference to the window object itself.

<hr class="field-separator" />

<div class="signature field-var has-description" id="document"><code><span class="field-name">document</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#document"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the document that the window contains.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets/sets the name of the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="location"><code><span class="field-name">location</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Location/" class="type-link">Location</a></code><a class="header-anchor" href="#location"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets/sets the location, or current URL, of the window object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="history"><code><span class="field-name">history</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/History/" class="type-link">History</a></code><a class="header-anchor" href="#history"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the history object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="locationbar"><code><span class="field-name">locationbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#locationbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the locationbar object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="menubar"><code><span class="field-name">menubar</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#menubar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the menubar object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="personalbar"><code><span class="field-name">personalbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#personalbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the personalbar object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollbars"><code><span class="field-name">scrollbars</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#scrollbars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the scrollbars object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="statusbar"><code><span class="field-name">statusbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#statusbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the statusbar object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="toolbar"><code><span class="field-name">toolbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BarProp/" class="type-link">BarProp</a></code><a class="header-anchor" href="#toolbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the toolbar object, whose visibility can be toggled in the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets/sets the text in the statusbar at the bottom of the browser.

<hr class="field-separator" />

<div class="signature field-var has-description" id="closed"><code><span class="field-name">closed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property indicates whether the current window is closed or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="event"><code><span class="field-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#event"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current event, which is the event currently being handled by the JavaScript code's context, or `undefined` if no event is currently being handled. The `Event` object passed directly to event handlers should be used instead whenever possible.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frames"><code><span class="field-name">frames</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of the subframes in the current window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of frames in the window. See also `window.frames`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="top"><code><span class="field-name">top</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#top"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the topmost window in the window hierarchy. This property is read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="opener"><code><span class="field-name">opener</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#opener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the window that opened this current window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parent"><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the parent of the current window or subframe.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameElement"><code><span class="field-name">frameElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#frameElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the element in which the window is embedded, or null if the window is not embedded.

<hr class="field-separator" />

<div class="signature field-var has-description" id="navigator"><code><span class="field-name">navigator</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Navigator/" class="type-link">Navigator</a></code><a class="header-anchor" href="#navigator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the navigator object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="console"><code><span class="field-name">console</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ConsoleInstance/" class="type-link">ConsoleInstance</a></code><a class="header-anchor" href="#console"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the console object which provides access to the browser's debugging console.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screen"><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Screen/" class="type-link">Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the screen object associated with the window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="innerWidth"><code><span class="field-name">innerWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#innerWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="innerHeight"><code><span class="field-name">innerHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#innerHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollX"><code><span class="field-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of pixels that the document has already been scrolled horizontally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageXOffset"><code><span class="field-name">pageXOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageXOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias for `window.scrollX`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollY"><code><span class="field-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of pixels that the document has already been scrolled vertically.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageYOffset"><code><span class="field-name">pageYOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageYOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias for `window.scrollY`

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenX"><code><span class="field-name">screenX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#screenX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the horizontal distance of the left border of the user's browser from the left side of the screen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screenY"><code><span class="field-name">screenY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#screenY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the vertical distance of the top border of the user's browser from the top side of the screen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="outerWidth"><code><span class="field-name">outerWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#outerWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the width of the outside of the browser window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="outerHeight"><code><span class="field-name">outerHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#outerHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the height of the outside of the browser window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="performance"><code><span class="field-name">performance</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Performance/" class="type-link">Performance</a></code><a class="header-anchor" href="#performance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Performance` object, which includes the `Performance.timing` and `Performance.navigation` attributes, each of which is an object providing performance-related data. See also Using Navigation Timing for additional information and examples.

<hr class="field-separator" />

<div class="signature field-var has-description" id="devicePixelRatio"><code><span class="field-name">devicePixelRatio</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#devicePixelRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the ratio between physical pixels and device independent pixels in the current display.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollMaxX"><code><span class="field-name">scrollMaxX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum offset that the window can be scrolled to horizontally, that is the document width minus the viewport width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollMaxY"><code><span class="field-name">scrollMaxY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scrollMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum offset that the window can be scrolled to vertically (i.e., the document height minus the viewport height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullScreen"><code><span class="field-name">fullScreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property indicates whether the window is displayed in full screen or not.

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondevicemotion"><code><span class="field-name">ondevicemotion</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondevicemotion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondeviceorientation"><code><span class="field-name">ondeviceorientation</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondeviceorientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onabsolutedeviceorientation"><code><span class="field-name">onabsolutedeviceorientation</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onabsolutedeviceorientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondeviceproximity"><code><span class="field-name">ondeviceproximity</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondeviceproximity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onuserproximity"><code><span class="field-name">onuserproximity</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onuserproximity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ondevicelight"><code><span class="field-name">ondevicelight</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ondevicelight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the content element in the current window. Since Firefox 57 (initially Nightly-only), both versions are only available from chrome (privileged) code, and not available to the web anymore.

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientation"><code><span class="field-name">orientation</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#orientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the orientation in degrees (in 90 degree increments) of the viewport relative to the device's natural orientation.

<hr class="field-separator" />

<div class="signature field-var no-description" id="onorientationchange"><code><span class="field-name">onorientationchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onorientationchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="crypto"><code><span class="field-name">crypto</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Crypto/" class="type-link">Crypto</a></code><a class="header-anchor" href="#crypto"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the browser crypto object.

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

<div class="signature field-var no-description" id="onwheel"><code><span class="field-name">onwheel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onwheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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

<div class="signature field-var has-description" id="speechSynthesis"><code><span class="field-name">speechSynthesis</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SpeechSynthesis/" class="type-link">SpeechSynthesis</a></code><a class="header-anchor" href="#speechSynthesis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `SpeechSynthesis` object, which is the entry point into using Web Speech API speech synthesis functionality.

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchstart"><code><span class="field-name">ontouchstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchend"><code><span class="field-name">ontouchend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchmove"><code><span class="field-name">ontouchmove</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchmove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ontouchcancel"><code><span class="field-name">ontouchcancel</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ontouchcancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onafterprint"><code><span class="field-name">onafterprint</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onafterprint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onbeforeprint"><code><span class="field-name">onbeforeprint</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onbeforeprint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onhashchange"><code><span class="field-name">onhashchange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onhashchange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onlanguagechange"><code><span class="field-name">onlanguagechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onlanguagechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmessage"><code><span class="field-name">onmessage</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onmessageerror"><code><span class="field-name">onmessageerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmessageerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onoffline"><code><span class="field-name">onoffline</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onoffline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ononline"><code><span class="field-name">ononline</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#ononline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpagehide"><code><span class="field-name">onpagehide</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpagehide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpageshow"><code><span class="field-name">onpageshow</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpageshow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onpopstate"><code><span class="field-name">onpopstate</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpopstate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onstorage"><code><span class="field-name">onstorage</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onunload"><code><span class="field-name">onunload</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onunload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="localStorage"><code><span class="field-name">localStorage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Storage/" class="type-link">Storage</a></code><a class="header-anchor" href="#localStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.

<hr class="field-separator" />

<div class="signature field-var no-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="isSecureContext"><code><span class="field-name">isSecureContext</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSecureContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether a context is capable of using features that require secure contexts.

<hr class="field-separator" />

<div class="signature field-var no-description" id="indexedDB"><code><span class="field-name">indexedDB</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/idb/Factory/" class="type-link">js.html.idb.Factory</a></code><a class="header-anchor" href="#indexedDB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="caches"><code><span class="field-name">caches</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CacheStorage/" class="type-link">CacheStorage</a></code><a class="header-anchor" href="#caches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="sessionStorage"><code><span class="field-name">sessionStorage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Storage/" class="type-link">Storage</a></code><a class="header-anchor" href="#sessionStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.

<hr class="field-separator" />

<div class="signature field-method no-description" id="onerror"><code><span class="field-name">onerror</span><span class="parenthesis">(</span><span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Event/" class="type-link">Event</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `` | [haxe.extern.EitherType](/api-docs/clay-web/haxe/extern/EitherType/)<[Event](/api-docs/clay-web/js/html/Event/), [String](/api-docs/clay-web/String/)> |
| `` | [String](/api-docs/clay-web/String/) |
| `` | [Int](/api-docs/clay-web/Int/) |
| `` | [Int](/api-docs/clay-web/Int/) |
| `` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="onbeforeunload"><code><span class="field-name">onbeforeunload</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#onbeforeunload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Closes the current window.

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method stops window loading.

<hr class="field-separator" />

<div class="signature field-method has-description" id="focus"><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets focus on the current window.

<hr class="field-separator" />

<div class="signature field-method has-description" id="blur"><code><span class="field-name">blur</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets focus away from the window.

<hr class="field-separator" />

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">features</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Window</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens a new window.

| Name | Type | Default |
|------|------|---------|
| `url` | [String](/api-docs/clay-web/String/) | `""` |
| `target` | [String](/api-docs/clay-web/String/) | `""` |
| `features` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [Window](/api-docs/clay-web/js/html/Window/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="alert"><code><span class="field-name">alert</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays an alert dialog.

| Name | Type |
|------|------|
| `message` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="confirm"><code><span class="field-name">confirm</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#confirm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays a dialog with a message that the user needs to respond to.

| Name | Type | Default |
|------|------|---------|
| `message` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prompt"><code><span class="field-name">prompt</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">default_</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#prompt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the text entered by the user in a prompt dialog.

| Name | Type | Default |
|------|------|---------|
| `message` | [String](/api-docs/clay-web/String/) | `""` |
| `default_` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens the Print Dialog to print the current document.

<hr class="field-separator" />

<div class="signature field-method has-description" id="postMessage"><code><span class="field-name">postMessage</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">targetOrigin</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transfer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#postMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides a secure means for one window to send a string of data to another window, which need not be within the same domain as the first.

| Name | Type | Default |
|------|------|---------|
| `message` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `targetOrigin` | [String](/api-docs/clay-web/String/) | |
| `transfer` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="captureEvents"><code><span class="field-name">captureEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#captureEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registers the window to capture all events of the specified type.

<hr class="field-separator" />

<div class="signature field-method has-description" id="releaseEvents"><code><span class="field-name">releaseEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Releases the window from trapping events of a specific type.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSelection"><code><span class="field-name">getSelection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Selection/" class="type-link">Selection</a></code><a class="header-anchor" href="#getSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the selection object representing the selected item(s).
| Returns |
|---------|
| [Selection](/api-docs/clay-web/js/html/Selection/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getComputedStyle"><code><span class="field-name">getComputedStyle</span><span class="parenthesis">(</span><span class="arg-name">elt</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pseudoElt</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CSSStyleDeclaration/" class="type-link">CSSStyleDeclaration</a></code><a class="header-anchor" href="#getComputedStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets computed style for the specified element. Computed style indicates the computed values of all CSS properties of the element.

| Name | Type | Default |
|------|------|---------|
| `elt` | [Element](/api-docs/clay-web/js/html/Element/) | |
| `pseudoElt` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [CSSStyleDeclaration](/api-docs/clay-web/js/html/CSSStyleDeclaration/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchMedia"><code><span class="field-name">matchMedia</span><span class="parenthesis">(</span><span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaQueryList/" class="type-link">MediaQueryList</a></code><a class="header-anchor" href="#matchMedia"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `MediaQueryList` object representing the specified media query string.

| Name | Type |
|------|------|
| `query` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [MediaQueryList](/api-docs/clay-web/js/html/MediaQueryList/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="moveTo"><code><span class="field-name">moveTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the window to the specified coordinates.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="moveBy"><code><span class="field-name">moveBy</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves the current window by a specified amount.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resizeTo"><code><span class="field-name">resizeTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resizeTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamically resizes window.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resizeBy"><code><span class="field-name">resizeBy</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resizeBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resizes the current window by a certain amount.

| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scroll"><code><span class="field-name">scroll</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the window to a particular place in the document.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollTo"><code><span class="field-name">scrollTo</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls to a particular set of coordinates in the document.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollBy"><code><span class="field-name">scrollBy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollToOptions/" class="type-link">ScrollToOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollBy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the document in the window by the given amount.

| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="requestAnimationFrame"><code><span class="field-name">requestAnimationFrame</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#requestAnimationFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells the browser that an animation is in progress, requesting that the browser schedule a repaint of the window for the next animation frame.

| Name | Type |
|------|------|
| `callback` | Function |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cancelAnimationFrame"><code><span class="field-name">cancelAnimationFrame</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancelAnimationFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables you to cancel a callback previously scheduled with `Window.requestAnimationFrame`.

| Name | Type |
|------|------|
| `handle` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDefaultComputedStyle"><code><span class="field-name">getDefaultComputedStyle</span><span class="parenthesis">(</span><span class="arg-name">elt</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">Element</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pseudoElt</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CSSStyleDeclaration/" class="type-link">CSSStyleDeclaration</a></code><a class="header-anchor" href="#getDefaultComputedStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets default computed style for the specified element, ignoring author stylesheets.

| Name | Type | Default |
|------|------|---------|
| `elt` | [Element](/api-docs/clay-web/js/html/Element/) | |
| `pseudoElt` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [CSSStyleDeclaration](/api-docs/clay-web/js/html/CSSStyleDeclaration/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollByLines"><code><span class="field-name">scrollByLines</span><span class="parenthesis">(</span><span class="arg-name">numLines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollOptions/" class="type-link">ScrollOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollByLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the document by the given number of lines.

| Name | Type | Default |
|------|------|---------|
| `numLines` | [Int](/api-docs/clay-web/Int/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollOptions](/api-docs/clay-web/js/html/ScrollOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollByPages"><code><span class="field-name">scrollByPages</span><span class="parenthesis">(</span><span class="arg-name">numPages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ScrollOptions/" class="type-link">ScrollOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollByPages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scrolls the current document by the specified number of pages.

| Name | Type | Default |
|------|------|---------|
| `numPages` | [Int](/api-docs/clay-web/Int/) | |
| `options` | [Null](/api-docs/clay-web/Null/)<[ScrollOptions](/api-docs/clay-web/js/html/ScrollOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sizeToContent"><code><span class="field-name">sizeToContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sizeToContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sizes the window according to its content.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateCommands"><code><span class="field-name">updateCommands</span><span class="parenthesis">(</span><span class="arg-name">action</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sel</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Selection/" class="type-link">Selection</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateCommands"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the state of commands of the current chrome window (UI).

| Name | Type | Default |
|------|------|---------|
| `action` | [String](/api-docs/clay-web/String/) | |
| `sel` | [Selection](/api-docs/clay-web/js/html/Selection/) | *(optional)* |
| `reason` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="find"><code><span class="field-name">find</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">caseSensitive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">backwards</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wrapAround</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wholeWord</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">searchInFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">showDialog</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#find"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Searches for a given string in a window.

| Name | Type | Default |
|------|------|---------|
| `str` | [String](/api-docs/clay-web/String/) | `""` |
| `caseSensitive` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `backwards` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `wrapAround` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `wholeWord` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `searchInFrames` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `showDialog` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dump"><code><span class="field-name">dump</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dump"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes a message to the console.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="structuredClone"><code><span class="field-name">structuredClone</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">structuredClone.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">structuredClone.T</span></code><a class="header-anchor" href="#structuredClone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a deep clone of a given value using the structured clone algorithm.

| Name | Type | Default |
|------|------|---------|
| `value` | structuredClone.T | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| structuredClone.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setResizable"><code><span class="field-name">setResizable</span><span class="parenthesis">(</span><span class="arg-name">resizable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setResizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggles a user's ability to resize a window.

| Name | Type |
|------|------|
| `resizable` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="btoa"><code><span class="field-name">btoa</span><span class="parenthesis">(</span><span class="arg-name">btoa</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#btoa"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `btoa` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="atob"><code><span class="field-name">atob</span><span class="parenthesis">(</span><span class="arg-name">atob</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#atob"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `atob` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTimeout"><code><span class="field-name">setTimeout</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">unused</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handler` | [String](/api-docs/clay-web/String/) | |
| `timeout` | [Float](/api-docs/clay-web/Float/) | `0` |
| `unused` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearTimeout"><code><span class="field-name">clearTimeout</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handle` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInterval"><code><span class="field-name">setInterval</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">unused</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handler` | [String](/api-docs/clay-web/String/) | |
| `timeout` | [Float](/api-docs/clay-web/Float/) | `0` |
| `unused` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearInterval"><code><span class="field-name">clearInterval</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `handle` | [Int](/api-docs/clay-web/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createImageBitmap"><code><span class="field-name">createImageBitmap</span><span class="parenthesis">(</span><span class="arg-name">aImage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageElement/" class="type-link">ImageElement</a><span class="operator">,</span> <span class="arg-name">aOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">aLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">aFormat</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageBitmapFormat/" class="type-link">ImageBitmapFormat</a><span class="operator">,</span> <span class="arg-name">aLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ChannelPixelLayout/" class="type-link">ChannelPixelLayout</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/ImageBitmap/" class="type-link">ImageBitmap</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#createImageBitmap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aImage` | [ImageElement](/api-docs/clay-web/js/html/ImageElement/) |
| `aOffset` | [Int](/api-docs/clay-web/Int/) |
| `aLength` | [Int](/api-docs/clay-web/Int/) |
| `aFormat` | [ImageBitmapFormat](/api-docs/clay-web/js/html/ImageBitmapFormat/) |
| `aLayout` | [Array](/api-docs/clay-web/Array/)<[ChannelPixelLayout](/api-docs/clay-web/js/html/ChannelPixelLayout/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[ImageBitmap](/api-docs/clay-web/js/html/ImageBitmap/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fetch"><code><span class="field-name">fetch</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Request/" class="type-link">Request</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">init</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/RequestInit/" class="type-link">RequestInit</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Response/" class="type-link">Response</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fetch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `input` | [Request](/api-docs/clay-web/js/html/Request/) | |
| `init` | [Null](/api-docs/clay-web/Null/)<[RequestInit](/api-docs/clay-web/js/html/RequestInit/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[Response](/api-docs/clay-web/js/html/Response/)> |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SVGElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/SVGElement/
---

# SVGElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">js.html.Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">js.html.DOMElement</a> → <a href="/api-docs/clay-web/js/html/svg/Element/">Element</a> → <a href="/api-docs/clay-web/js/html/svg/GraphicsElement/">GraphicsElement</a> → <strong>js.html.svg.SVGElement</strong> (extern class)</div>

The `SVGSVGElement` interface provides access to the properties of `svg` elements, as well as methods to manipulate them. This interface contains also various miscellaneous commonly-used utility methods, such as matrix operations and the ability to control the time of redraw on visual rendering devices.

Documentation [SVGSVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement></div>


## Static Members

<div class="signature field-var no-description" id="SVG_ZOOMANDPAN_UNKNOWN"><code><span class="field-name">SVG_ZOOMANDPAN_UNKNOWN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ZOOMANDPAN_UNKNOWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_ZOOMANDPAN_DISABLE"><code><span class="field-name">SVG_ZOOMANDPAN_DISABLE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ZOOMANDPAN_DISABLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_ZOOMANDPAN_MAGNIFY"><code><span class="field-name">SVG_ZOOMANDPAN_MAGNIFY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_ZOOMANDPAN_MAGNIFY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedLength/" class="type-link">AnimatedLength</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGAnimatedLength` corresponding to the `x` attribute of the given `svg` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedLength/" class="type-link">AnimatedLength</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGAnimatedLength` corresponding to the `y` attribute of the given `svg` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedLength/" class="type-link">AnimatedLength</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGAnimatedLength` corresponding to the `width` attribute of the given `svg` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedLength/" class="type-link">AnimatedLength</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGAnimatedLength` corresponding to the `height` attribute of the given `svg` element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="useCurrentView"><code><span class="field-name">useCurrentView</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useCurrentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The initial view (i.e., before magnification and panning) of the current innermost SVG document fragment can be either the "standard" view, i.e., based on attributes on the `svg` element such as `viewBox`) or on a "custom" view (i.e., a hyperlink into a particular `view` or other element). If the initial view is the "standard" view, then this attribute is `false`. If the initial view is a "custom" view, then this attribute is `true`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentScale"><code><span class="field-name">currentScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

On an outermost `svg` element, this float attribute indicates the current scale factor relative to the initial view to take into account user magnification and panning operations. DOM attributes `currentScale` and `currentTranslate` are equivalent to the 2x3 matrix `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]`. If "magnification" is enabled (i.e., `zoomAndPan="magnify"`), then the effect is as if an extra transformation were placed at the outermost level on the SVG document fragment (i.e., outside the outermost `svg` element).

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentTranslate"><code><span class="field-name">currentTranslate</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#currentTranslate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGPoint` representing the translation factor that takes into account user "magnification" corresponding to an outermost `svg` element. The behavior is undefined for svg elements that are not at the outermost level.

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewBox"><code><span class="field-name">viewBox</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedRect/" class="type-link">AnimatedRect</a></code><a class="header-anchor" href="#viewBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="preserveAspectRatio"><code><span class="field-name">preserveAspectRatio</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedPreserveAspectRatio/" class="type-link">AnimatedPreserveAspectRatio</a></code><a class="header-anchor" href="#preserveAspectRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="zoomAndPan"><code><span class="field-name">zoomAndPan</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#zoomAndPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="suspendRedraw"><code><span class="field-name">suspendRedraw</span><span class="parenthesis">(</span><span class="arg-name">maxWaitMilliseconds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#suspendRedraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Takes a time-out value which indicates that redraw shall not occur until:
the corresponding unsuspendRedraw() call has been made, an unsuspendRedrawAll() call has been made, or its timer has timed out.

In environments that do not support interactivity (e.g., print media), then redraw shall not be suspended. Calls to `suspendRedraw()` and `unsuspendRedraw()` should, but need not be, made in balanced pairs.

To suspend redraw actions as a collection of SVG DOM changes occur, precede the changes to the SVG DOM with a method call similar to:

suspendHandleID = suspendRedraw(maxWaitMilliseconds);

and follow the changes with a method call similar to:

unsuspendRedraw(suspendHandleID);

Note that multiple suspendRedraw calls can be used at once and that each such method call is treated independently of the other suspendRedraw method calls.

| Name | Type |
|------|------|
| `maxWaitMilliseconds` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unsuspendRedraw"><code><span class="field-name">unsuspendRedraw</span><span class="parenthesis">(</span><span class="arg-name">suspendHandleID</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unsuspendRedraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels a specified `suspendRedraw()` by providing a unique suspend handle ID that was returned by a previous `suspendRedraw()` call.

| Name | Type |
|------|------|
| `suspendHandleID` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unsuspendRedrawAll"><code><span class="field-name">unsuspendRedrawAll</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unsuspendRedrawAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels all currently active `suspendRedraw()` method calls. This method is most useful at the very end of a set of SVG DOM calls to ensure that all pending `suspendRedraw()` method calls have been cancelled.

<hr class="field-separator" />

<div class="signature field-method has-description" id="forceRedraw"><code><span class="field-name">forceRedraw</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forceRedraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

In rendering environments supporting interactivity, forces the user agent to immediately redraw all regions of the viewport that require updating.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pauseAnimations"><code><span class="field-name">pauseAnimations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pauseAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Suspends (i.e., pauses) all currently running animations that are defined within the SVG document fragment corresponding to this `svg` element, causing the animation clock corresponding to this document fragment to stand still until it is unpaused.

<hr class="field-separator" />

<div class="signature field-method has-description" id="unpauseAnimations"><code><span class="field-name">unpauseAnimations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unpauseAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unsuspends (i.e., unpauses) currently running animations that are defined within the SVG document fragment, causing the animation clock to continue from the time at which it was suspended.

<hr class="field-separator" />

<div class="signature field-method has-description" id="animationsPaused"><code><span class="field-name">animationsPaused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#animationsPaused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if this SVG document fragment is in a paused state.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCurrentTime"><code><span class="field-name">getCurrentTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getCurrentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current time in seconds relative to the start time for the current SVG document fragment. If getCurrentTime is called before the document timeline has begun (for example, by script running in a `script` element before the document's SVGLoad event is dispatched), then 0 is returned.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCurrentTime"><code><span class="field-name">setCurrentTime</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCurrentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adjusts the clock for this SVG document fragment, establishing a new current time. If `setCurrentTime` is called before the document timeline has begun (for example, by script running in a `script` element before the document's SVGLoad event is dispatched), then the value of seconds in the last invocation of the method gives the time that the document will seek to once the document timeline has begun.

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deselectAll"><code><span class="field-name">deselectAll</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deselectAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unselects any selected objects, including any selections of text strings and type-in bars.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGNumber"><code><span class="field-name">createSVGNumber</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Number/" class="type-link">Number</a></code><a class="header-anchor" href="#createSVGNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGNumber` object outside of any document trees. The object is initialized to a value of zero.
| Returns |
|---------|
| [Number](/api-docs/clay-web/js/html/svg/Number/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGLength"><code><span class="field-name">createSVGLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Length/" class="type-link">Length</a></code><a class="header-anchor" href="#createSVGLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGLength` object outside of any document trees. The object is initialized to a value of zero user units.
| Returns |
|---------|
| [Length](/api-docs/clay-web/js/html/svg/Length/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGAngle"><code><span class="field-name">createSVGAngle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Angle/" class="type-link">Angle</a></code><a class="header-anchor" href="#createSVGAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGAngle` object outside of any document trees. The object is initialized to a value of zero degrees (unitless).
| Returns |
|---------|
| [Angle](/api-docs/clay-web/js/html/svg/Angle/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGPoint"><code><span class="field-name">createSVGPoint</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#createSVGPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGPoint` object outside of any document trees. The object is initialized to the point (0,0) in the user coordinate system.
| Returns |
|---------|
| [Point](/api-docs/clay-web/js/html/svg/Point/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGMatrix"><code><span class="field-name">createSVGMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a></code><a class="header-anchor" href="#createSVGMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGMatrix` object outside of any document trees. The object is initialized to the identity matrix.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGRect"><code><span class="field-name">createSVGRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Rect/" class="type-link">Rect</a></code><a class="header-anchor" href="#createSVGRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGRect` object outside of any document trees. The object is initialized such that all values are set to 0 user units.
| Returns |
|---------|
| [Rect](/api-docs/clay-web/js/html/svg/Rect/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGTransform"><code><span class="field-name">createSVGTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#createSVGTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGTransform` object outside of any document trees. The object is initialized to an identity matrix transform (`SVG_TRANSFORM_MATRIX`).
| Returns |
|---------|
| [Transform](/api-docs/clay-web/js/html/svg/Transform/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSVGTransformFromMatrix"><code><span class="field-name">createSVGTransformFromMatrix</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#createSVGTransformFromMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an `SVGTransform` object outside of any document trees. The object is initialized to the given matrix transform (i.e., `SVG_TRANSFORM_MATRIX`). The values from the parameter matrix are copied, the matrix parameter is not adopted as `SVGTransform::matrix`.

| Name | Type |
|------|------|
| `matrix` | [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

| Returns |
|---------|
| [Transform](/api-docs/clay-web/js/html/svg/Transform/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getElementById"><code><span class="field-name">getElementById</span><span class="parenthesis">(</span><span class="arg-name">elementId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Element/" class="type-link">js.html.Element</a></code><a class="header-anchor" href="#getElementById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Searches this SVG document fragment (i.e., the search is restricted to a subset of the document tree) for an Element whose id is given by elementId. If an Element is found, that Element is returned. If no such element exists, returns null. Behavior is not defined if more than one element has this id.

| Name | Type |
|------|------|
| `elementId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [js.html.Element](/api-docs/clay-web/js/html/Element/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: GraphicsElement
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/GraphicsElement/
---

# GraphicsElement

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">js.html.Node</a> → <a href="/api-docs/clay-web/js/html/DOMElement/">js.html.DOMElement</a> → <a href="/api-docs/clay-web/js/html/svg/Element/">Element</a> → <strong>js.html.svg.GraphicsElement</strong> (extern class) → <a href="/api-docs/clay-web/js/html/svg/ImageElement/">ImageElement</a>, <a href="/api-docs/clay-web/js/html/svg/SVGElement/">SVGElement</a></div>

The `SVGGraphicsElement` interface represents SVG elements whose primary purpose is to directly render graphics into a group.

Documentation [SVGGraphicsElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement></div>


## Instance Members

<div class="signature field-var has-description" id="transform"><code><span class="field-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/AnimatedTransformList/" class="type-link">AnimatedTransformList</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `SVGAnimatedTransformList` reflecting the computed value of the `transform` property and its corresponding `transform` attribute of the given element.

<hr class="field-separator" />

<div class="signature field-var no-description" id="nearestViewportElement"><code><span class="field-name">nearestViewportElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#nearestViewportElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="farthestViewportElement"><code><span class="field-name">farthestViewportElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Element/" class="type-link">Element</a></code><a class="header-anchor" href="#farthestViewportElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="requiredFeatures"><code><span class="field-name">requiredFeatures</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/StringList/" class="type-link">StringList</a></code><a class="header-anchor" href="#requiredFeatures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="requiredExtensions"><code><span class="field-name">requiredExtensions</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/StringList/" class="type-link">StringList</a></code><a class="header-anchor" href="#requiredExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="systemLanguage"><code><span class="field-name">systemLanguage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/StringList/" class="type-link">StringList</a></code><a class="header-anchor" href="#systemLanguage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBBox"><code><span class="field-name">getBBox</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">aOptions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/svg/BoundingBoxOptions/" class="type-link">BoundingBoxOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Rect/" class="type-link">Rect</a></code><a class="header-anchor" href="#getBBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMRect` representing the computed bounding box of the current element.

| Name | Type | Default |
|------|------|---------|
| `aOptions` | [Null](/api-docs/clay-web/Null/)<[BoundingBoxOptions](/api-docs/clay-web/js/html/svg/BoundingBoxOptions/)> | *(optional)* |

| Returns |
|---------|
| [Rect](/api-docs/clay-web/js/html/svg/Rect/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCTM"><code><span class="field-name">getCTM</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a></code><a class="header-anchor" href="#getCTM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMMatrix` representing the matrix that transforms the current element's coordinate system to its SVG viewport's coordinate system.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getScreenCTM"><code><span class="field-name">getScreenCTM</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a></code><a class="header-anchor" href="#getScreenCTM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMMatrix` representing the matrix that transforms the current element's coordinate system to the coordinate system of the SVG viewport for the SVG document fragment.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTransformToElement"><code><span class="field-name">getTransformToElement</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="#" class="type-link">GraphicsElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a></code><a class="header-anchor" href="#getTransformToElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [GraphicsElement](/api-docs/clay-web/js/html/svg/GraphicsElement/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasExtension"><code><span class="field-name">hasExtension</span><span class="parenthesis">(</span><span class="arg-name">extension</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasExtension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `extension` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |


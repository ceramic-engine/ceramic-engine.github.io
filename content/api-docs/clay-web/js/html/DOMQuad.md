---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DOMQuad
target: Clay (Web)
permalink: api-docs/clay-web/js/html/DOMQuad/
---

# DOMQuad

<div class="type-hierarchy"><strong>js.html.DOMQuad</strong> (extern class)</div>

A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral. Returning `DOMQuad`s lets `getBoxQuads()` return accurate information even when arbitrary 2D or 3D transforms are present. It has a handy `bounds` attribute returning a `DOMRectReadOnly` for those cases where you just want an axis-aligned bounding rectangle.

Documentation [DOMQuad](https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/DOMQuad></div>


## Instance Members

<div class="signature field-var has-description" id="p1"><code><span class="field-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#p1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

are `DOMPoint` objects for each of the `DOMQuad` object's four corners.

<hr class="field-separator" />

<div class="signature field-var no-description" id="p2"><code><span class="field-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#p2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="p3"><code><span class="field-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#p3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="p4"><code><span class="field-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMPoint/" class="type-link">DOMPoint</a></code><a class="header-anchor" href="#p4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bounds"><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectReadOnly/" class="type-link">DOMRectReadOnly</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBounds"><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectReadOnly/" class="type-link">DOMRectReadOnly</a></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMRect` object with the coordinates and dimensions of the `DOMQuad` object.
| Returns |
|---------|
| [DOMRectReadOnly](/api-docs/clay-web/js/html/DOMRectReadOnly/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMQuadJSON/" class="type-link">DOMQuadJSON</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a JSON representation of the `DOMQuad` object.
| Returns |
|---------|
| [DOMQuadJSON](/api-docs/clay-web/js/html/DOMQuadJSON/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRectReadOnly/" class="type-link">DOMRectReadOnly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rect` | [DOMRectReadOnly](/api-docs/clay-web/js/html/DOMRectReadOnly/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: AnimatedString
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/AnimatedString/
---

# AnimatedString

<div class="type-hierarchy"><strong>js.html.svg.AnimatedString</strong> (extern class)</div>

The `SVGAnimatedString` interface represents string attributes which can be animated from each SVG declaration. You need to create SVG attribute before doing anything else, everything should be declared inside this.

Documentation [SVGAnimatedString](https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString></div>


## Instance Members

<div class="signature field-var has-description" id="baseVal"><code><span class="field-name">baseVal</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#baseVal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is a `DOMString` representing the base value. The base value of the given attribute before applying any animations. Setter throws DOMException.

<hr class="field-separator" />

<div class="signature field-var has-description" id="animVal"><code><span class="field-name">animVal</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#animVal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is a `DOMString` representing the animation value. If the given attribute or property is being animated it contains the current animated value of the attribute or property. If the given attribute or property is not currently being animated, it contains the same value as baseVal.


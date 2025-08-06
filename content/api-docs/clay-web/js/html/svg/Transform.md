---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Transform
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/Transform/
---

# Transform

<div class="type-hierarchy"><strong>js.html.svg.Transform</strong> (extern class)</div>

`SVGTransform` is the interface for one of the component transformations within an `SVGTransformList`; thus, an `SVGTransform` object corresponds to a single component (e.g., `scale(…)` or `matrix(…)`) within a `transform` attribute.

Documentation [SVGTransform](https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGTransform></div>


## Static Members

<div class="signature field-var no-description" id="SVG_TRANSFORM_UNKNOWN"><code><span class="field-name">SVG_TRANSFORM_UNKNOWN</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_UNKNOWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_MATRIX"><code><span class="field-name">SVG_TRANSFORM_MATRIX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_MATRIX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_TRANSLATE"><code><span class="field-name">SVG_TRANSFORM_TRANSLATE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_TRANSLATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_SCALE"><code><span class="field-name">SVG_TRANSFORM_SCALE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_SCALE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_ROTATE"><code><span class="field-name">SVG_TRANSFORM_ROTATE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_ROTATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_SKEWX"><code><span class="field-name">SVG_TRANSFORM_SKEWX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_SKEWX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SVG_TRANSFORM_SKEWY"><code><span class="field-name">SVG_TRANSFORM_SKEWY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SVG_TRANSFORM_SKEWY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="matrix"><code><span class="field-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a></code><a class="header-anchor" href="#matrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="angle"><code><span class="field-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMatrix"><code><span class="field-name">setMatrix</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">Matrix</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `matrix` | [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTranslate"><code><span class="field-name">setTranslate</span><span class="parenthesis">(</span><span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTranslate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tx` | [Float](/api-docs/clay-web/Float/) |
| `ty` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setScale"><code><span class="field-name">setScale</span><span class="parenthesis">(</span><span class="arg-name">sx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">sy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sx` | [Float](/api-docs/clay-web/Float/) |
| `sy` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRotate"><code><span class="field-name">setRotate</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |
| `cx` | [Float](/api-docs/clay-web/Float/) |
| `cy` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSkewX"><code><span class="field-name">setSkewX</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkewX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSkewY"><code><span class="field-name">setSkewY</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkewY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |


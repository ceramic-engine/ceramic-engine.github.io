---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Matrix
target: Clay (Web)
permalink: api-docs/clay-web/js/html/svg/Matrix/
---

# Matrix

<div class="type-hierarchy"><strong>js.html.svg.Matrix</strong> (extern class)</div>

Many of SVG's graphics operations utilize 2x3 matrices of the form:

Documentation [SVGMatrix](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix></div>


## Instance Members

<div class="signature field-var has-description" id="a"><code><span class="field-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the a component of the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the b component of the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="c"><code><span class="field-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#c"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the c component of the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="d"><code><span class="field-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the d component of the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="e"><code><span class="field-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#e"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the e component of the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="f"><code><span class="field-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#f"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A float representing the f component of the matrix.

<hr class="field-separator" />

<div class="signature field-method has-description" id="multiply"><code><span class="field-name">multiply</span><span class="parenthesis">(</span><span class="arg-name">secondMatrix</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#multiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs matrix multiplication. This matrix is post-multiplied by another matrix, returning the resulting new matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `secondMatrix` | [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inverse"><code><span class="field-name">inverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#inverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the inverse matrix as `SVGMatrix`.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translate"><code><span class="field-name">translate</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#translate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a translation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scale"><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">scaleFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a uniform scale transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `scaleFactor` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleNonUniform"><code><span class="field-name">scaleNonUniform</span><span class="parenthesis">(</span><span class="arg-name">scaleFactorX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaleFactorY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#scaleNonUniform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a non-uniform scale transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `scaleFactorX` | [Float](/api-docs/clay-web/Float/) |
| `scaleFactorY` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rotate"><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rotateFromVector"><code><span class="field-name">rotateFromVector</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#rotateFromVector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a rotation transformation on the current matrix and returns the resulting matrix as `SVGMatrix`. The rotation angle is determined by taking (+/-) atan(y/x). The direction of the vector (x, y) determines whether the positive or negative angle value is used.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flipX"><code><span class="field-name">flipX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#flipX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies the transformation [-1 0 0 1 0 0] and returns the resulting matrix as `SVGMatrix`.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flipY"><code><span class="field-name">flipY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#flipY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies the transformation [1 0 0 -1 0 0] and returns the resulting matrix as `SVGMatrix`.
| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skewX"><code><span class="field-name">skewX</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#skewX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a skewX transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skewY"><code><span class="field-name">skewY</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Matrix</a></code><a class="header-anchor" href="#skewY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Post-multiplies a skewY transformation on the current matrix and returns the resulting matrix as `SVGMatrix`.

| Name | Type |
|------|------|
| `angle` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) |


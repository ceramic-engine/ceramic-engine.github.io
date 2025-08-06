---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Path2D
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Path2D/
---

# Path2D

<div class="type-hierarchy"><strong>js.html.Path2D</strong> (extern class)</div>

The `Path2D` interface of the Canvas 2D API is used to declare paths that are then later used on `CanvasRenderingContext2D` objects. The path methods of the `CanvasRenderingContext2D` interface are present on this interface as well and are allowing you to create paths that you can retain and replay as required on a canvas.

Documentation [Path2D](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Path2D$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Path2D></div>


## Instance Members

<div class="signature field-method has-description" id="addPath"><code><span class="field-name">addPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="#" class="type-link">Path2D</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transformation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/svg/Matrix/" class="type-link">js.html.svg.Matrix</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a path to the current path.

| Name | Type | Default |
|------|------|---------|
| `path` | [Path2D](/api-docs/clay-web/js/html/Path2D/) | |
| `transformation` | [js.html.svg.Matrix](/api-docs/clay-web/js/html/svg/Matrix/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="closePath"><code><span class="field-name">closePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="moveTo"><code><span class="field-name">moveTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lineTo"><code><span class="field-name">lineTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lineTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quadraticCurveTo"><code><span class="field-name">quadraticCurveTo</span><span class="parenthesis">(</span><span class="arg-name">cpx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cpy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quadraticCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cpx` | [Float](/api-docs/clay-web/Float/) |
| `cpy` | [Float](/api-docs/clay-web/Float/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bezierCurveTo"><code><span class="field-name">bezierCurveTo</span><span class="parenthesis">(</span><span class="arg-name">cp1x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp1y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp2x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp2y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bezierCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cp1x` | [Float](/api-docs/clay-web/Float/) |
| `cp1y` | [Float](/api-docs/clay-web/Float/) |
| `cp2x` | [Float](/api-docs/clay-web/Float/) |
| `cp2y` | [Float](/api-docs/clay-web/Float/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="arcTo"><code><span class="field-name">arcTo</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arcTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/clay-web/Float/) |
| `y1` | [Float](/api-docs/clay-web/Float/) |
| `x2` | [Float](/api-docs/clay-web/Float/) |
| `y2` | [Float](/api-docs/clay-web/Float/) |
| `radius` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rect"><code><span class="field-name">rect</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `w` | [Float](/api-docs/clay-web/Float/) |
| `h` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="arc"><code><span class="field-name">arc</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">anticlockwise</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | |
| `y` | [Float](/api-docs/clay-web/Float/) | |
| `radius` | [Float](/api-docs/clay-web/Float/) | |
| `startAngle` | [Float](/api-docs/clay-web/Float/) | |
| `endAngle` | [Float](/api-docs/clay-web/Float/) | |
| `anticlockwise` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ellipse"><code><span class="field-name">ellipse</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radiusX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radiusY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">anticlockwise</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ellipse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | |
| `y` | [Float](/api-docs/clay-web/Float/) | |
| `radiusX` | [Float](/api-docs/clay-web/Float/) | |
| `radiusY` | [Float](/api-docs/clay-web/Float/) | |
| `rotation` | [Float](/api-docs/clay-web/Float/) | |
| `startAngle` | [Float](/api-docs/clay-web/Float/) | |
| `endAngle` | [Float](/api-docs/clay-web/Float/) | |
| `anticlockwise` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">pathString</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pathString` | [String](/api-docs/clay-web/String/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Graphics
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Graphics/
---

# Graphics

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Graphics.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <strong>ceramic.Graphics</strong> (Class)</div>

Immediate-mode graphics API for Ceramic, similar to Canvas 2D or Flash Graphics.

Graphics provides a familiar drawing API while efficiently managing memory through
Ceramic's pooling system. It internally uses Mesh, Quad, Line, and Arc objects
which are recycled between frames to minimize garbage collection.

Features:
- Basic shape drawing (rectangles, circles, polygons)
- Line and path drawing with configurable styles
- Bezier and quadratic curves
- Fill and stroke operations
- Efficient object pooling for all visuals

Example usage:
```haxe
var graphics = new Graphics();

// Draw a filled rectangle
graphics.beginFill(Color.RED);
graphics.drawRect(10, 10, 100, 50);
graphics.endFill();

// Draw a stroked circle
graphics.lineStyle(2, Color.BLUE);
graphics.drawCircle(100, 100, 30);

// Draw a path
graphics.moveTo(10, 10);
graphics.lineTo(50, 30);
graphics.quadraticCurveTo(100, 20, 150, 50);

// Clear and reuse next frame
graphics.clear();
```

## Instance Members

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear all graphics and recycle visuals to pools

<hr class="field-separator" />

<div class="signature field-method has-description" id="lineStyle"><code><span class="field-name">lineStyle</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lineStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the line style for subsequent drawing operations.
Call with no arguments or thickness <= 0 to disable stroking.

| Name | Type | Default |
|------|------|---------|
| `thickness` | [Float](/api-docs/clay-web/Float/) | `0` |
| `color` | [Color](/api-docs/clay-web/ceramic/Color/) | `null` |
| `alpha` | [Float](/api-docs/clay-web/Float/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beginFill"><code><span class="field-name">beginFill</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginFill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begin a fill for subsequent shape operations

| Name | Type | Default |
|------|------|---------|
| `color` | [Color](/api-docs/clay-web/ceramic/Color/) | `null` |
| `alpha` | [Float](/api-docs/clay-web/Float/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endFill"><code><span class="field-name">endFill</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

End the current fill operation

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawRect"><code><span class="field-name">drawRect</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a rectangle

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `width` | [Float](/api-docs/clay-web/Float/) |
| `height` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawCircle"><code><span class="field-name">drawCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sides</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a circle

| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | |
| `y` | [Float](/api-docs/clay-web/Float/) | |
| `radius` | [Float](/api-docs/clay-web/Float/) | |
| `sides` | [Int](/api-docs/clay-web/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawArc"><code><span class="field-name">drawArc</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">startAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endAngle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sides</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawArc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw an arc

| Name | Type | Default |
|------|------|---------|
| `x` | [Float](/api-docs/clay-web/Float/) | |
| `y` | [Float](/api-docs/clay-web/Float/) | |
| `radius` | [Float](/api-docs/clay-web/Float/) | |
| `startAngle` | [Float](/api-docs/clay-web/Float/) | |
| `endAngle` | [Float](/api-docs/clay-web/Float/) | |
| `sides` | [Int](/api-docs/clay-web/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawTriangle"><code><span class="field-name">drawTriangle</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a triangle

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/clay-web/Float/) |
| `y1` | [Float](/api-docs/clay-web/Float/) |
| `x2` | [Float](/api-docs/clay-web/Float/) |
| `y2` | [Float](/api-docs/clay-web/Float/) |
| `x3` | [Float](/api-docs/clay-web/Float/) |
| `y3` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawPolygon"><code><span class="field-name">drawPolygon</span><span class="parenthesis">(</span><span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a polygon from an array of points

| Name | Type |
|------|------|
| `points` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="moveTo"><code><span class="field-name">moveTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#moveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Move the drawing position to a new point

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lineTo"><code><span class="field-name">lineTo</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lineTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a line from the current position to a new point

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawLine"><code><span class="field-name">drawLine</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a line between two points

| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/clay-web/Float/) |
| `y1` | [Float](/api-docs/clay-web/Float/) |
| `x2` | [Float](/api-docs/clay-web/Float/) |
| `y2` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="quadraticCurveTo"><code><span class="field-name">quadraticCurveTo</span><span class="parenthesis">(</span><span class="arg-name">cpx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cpy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quadraticCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a quadratic Bezier curve

| Name | Type |
|------|------|
| `cpx` | [Float](/api-docs/clay-web/Float/) |
| `cpy` | [Float](/api-docs/clay-web/Float/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bezierCurveTo"><code><span class="field-name">bezierCurveTo</span><span class="parenthesis">(</span><span class="arg-name">cp1x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp1y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp2x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cp2y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bezierCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a cubic Bezier curve

| Name | Type |
|------|------|
| `cp1x` | [Float](/api-docs/clay-web/Float/) |
| `cp1y` | [Float](/api-docs/clay-web/Float/) |
| `cp2x` | [Float](/api-docs/clay-web/Float/) |
| `cp2y` | [Float](/api-docs/clay-web/Float/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawPath"><code><span class="field-name">drawPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw all accumulated path segments

<hr class="field-separator" />

<div class="signature field-method has-description" id="closePath"><code><span class="field-name">closePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the current path

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="activeMeshes"><code><span class="field-name">activeMeshes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active meshes currently being displayed

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeQuads"><code><span class="field-name">activeQuads</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active quads currently being displayed

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeLines"><code><span class="field-name">activeLines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Line/" class="type-link">Line</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active lines currently being displayed

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeArcs"><code><span class="field-name">activeArcs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Arc/" class="type-link">Arc</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#activeArcs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active arcs currently being displayed

<hr class="field-separator" />

<div class="signature field-var has-description" id="pooledMeshes"><code><span class="field-name">pooledMeshes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pooledMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pooled meshes ready for reuse

<hr class="field-separator" />

<div class="signature field-var has-description" id="pooledQuads"><code><span class="field-name">pooledQuads</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pooledQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pooled quads ready for reuse

<hr class="field-separator" />

<div class="signature field-var has-description" id="pooledLines"><code><span class="field-name">pooledLines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Line/" class="type-link">Line</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pooledLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pooled lines ready for reuse

<hr class="field-separator" />

<div class="signature field-var has-description" id="pooledArcs"><code><span class="field-name">pooledArcs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Arc/" class="type-link">Arc</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pooledArcs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pooled arcs ready for reuse

<hr class="field-separator" />

<div class="signature field-var has-description" id="fillColor"><code><span class="field-name">fillColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#fillColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current fill color

<hr class="field-separator" />

<div class="signature field-var has-description" id="fillAlpha"><code><span class="field-name">fillAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fillAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current fill alpha

<hr class="field-separator" />

<div class="signature field-var has-description" id="filling"><code><span class="field-name">filling</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#filling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether we're currently filling

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineThickness"><code><span class="field-name">lineThickness</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineThickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current line thickness

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineColor"><code><span class="field-name">lineColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#lineColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current line color

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineAlpha"><code><span class="field-name">lineAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current line alpha

<hr class="field-separator" />

<div class="signature field-var has-description" id="stroking"><code><span class="field-name">stroking</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stroking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether we have an active line style for stroking

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentPath"><code><span class="field-name">currentPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#currentPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current path being built

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentX"><code><span class="field-name">currentX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current X position for path operations

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentY"><code><span class="field-name">currentY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Y position for path operations

<hr class="field-separator" />

<div class="signature field-var has-description" id="pathSegments"><code><span class="field-name">pathSegments</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#pathSegments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Path segments for complex shapes

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentDepth"><code><span class="field-name">currentDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current depth value for ordering visuals.
Incremented for each visual added to ensure proper render order.
Strokes are given higher depth than fills to render on top.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMesh"><code><span class="field-name">getMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a></code><a class="header-anchor" href="#getMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a mesh from the pool or create a new one
| Returns |
|---------|
| [Mesh](/api-docs/clay-web/ceramic/Mesh/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getQuad"><code><span class="field-name">getQuad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#getQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a quad from the pool or create a new one
| Returns |
|---------|
| [Quad](/api-docs/clay-web/ceramic/Quad/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLine"><code><span class="field-name">getLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Line/" class="type-link">Line</a></code><a class="header-anchor" href="#getLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a line from the pool or create a new one
| Returns |
|---------|
| [Line](/api-docs/clay-web/ceramic/Line/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getArc"><code><span class="field-name">getArc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Arc/" class="type-link">Arc</a></code><a class="header-anchor" href="#getArc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an arc from the pool or create a new one
| Returns |
|---------|
| [Arc](/api-docs/clay-web/ceramic/Arc/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fillRect"><code><span class="field-name">fillRect</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a filled rectangle using a mesh with 4 vertices.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `width` | [Float](/api-docs/clay-web/Float/) |
| `height` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strokeRect"><code><span class="field-name">strokeRect</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#strokeRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw a stroked rectangle outline using a mesh with 8 vertices.
More efficient than using 4 Line objects.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `width` | [Float](/api-docs/clay-web/Float/) |
| `height` | [Float](/api-docs/clay-web/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


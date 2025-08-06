---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Shape
target: Clay (Web)
permalink: api-docs/clay-web/nape/shape/Shape/
---

# Shape

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/shape/Shape.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/nape/phys/Interactor/">nape.phys.Interactor</a> → <strong>nape.shape.Shape</strong> (Class) → <a href="/api-docs/clay-web/nape/shape/Circle/">Circle</a>, <a href="/api-docs/clay-web/nape/shape/Polygon/">Polygon</a></div>

Base type for Nape Shape's

## Static Members

<div class="signature field-var has-description has-plugin" id="zpp_internalAlloc"><div class="plugin-name">nape</div><code><span class="field-name">zpp_internalAlloc</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_internalAlloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/" class="type-link">zpp_nape.shape.ZPP_Shape</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="type"><div class="plugin-name">nape</div><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/shape/ShapeType/" class="type-link">ShapeType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Type of shape.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body"><div class="plugin-name">nape</div><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/phys/Body/" class="type-link">nape.phys.Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Body this Shape is assigned to.
<br/><br/>
This value can be set to add Shape to the given Body, and set to null
to remove it from its present Body.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="castCircle"><div class="plugin-name">nape</div><code><span class="field-name">castCircle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/shape/Circle/" class="type-link">Circle</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#castCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Faster equivalent to casting this to Circle type

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="castPolygon"><div class="plugin-name">nape</div><code><span class="field-name">castPolygon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/shape/Polygon/" class="type-link">Polygon</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#castPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Faster equivalent to casting this to Polygon type

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldCOM"><div class="plugin-name">nape</div><code><span class="field-name">worldCOM</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldCOM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World space centre of mass of this Shape.
<br/><br/>
This value can be accessed even if Shape is not in a Body, but
attempting to query the values of it will return an error in debug
builds unless the Shape is in a Body.
<br/><br/>
This Vec2 is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localCOM"><div class="plugin-name">nape</div><code><span class="field-name">localCOM</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localCOM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local space centre of mass of this Shape.
<br/><br/>
This Vec2 can be set and is equivalent to performing the necessary
translation of the Shape in local coordinates, and also equivalent
to <code>this.localCOM.set(value)</code>.
<br/>
Setting this value whilst this shape is part of a static Body that
is part of a Space is not permitted.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="area"><div class="plugin-name">nape</div><code><span class="field-name">area</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#area"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Area of the Hhape.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inertia"><div class="plugin-name">nape</div><code><span class="field-name">inertia</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inertia"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Non-mass weighted moment of inertia for Shape.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angDrag"><div class="plugin-name">nape</div><code><span class="field-name">angDrag</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of angular fluid drag for this Shape.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="material"><div class="plugin-name">nape</div><code><span class="field-name">material</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Material/" class="type-link">nape.phys.Material</a></code><a class="header-anchor" href="#material"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Material used by this shape.

@default new Material()

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">nape</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

InteractionFilter used by this shape.

@default new InteractionFilter()

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fluidProperties"><div class="plugin-name">nape</div><code><span class="field-name">fluidProperties</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/FluidProperties/" class="type-link">nape.phys.FluidProperties</a></code><a class="header-anchor" href="#fluidProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

FluidProperties used by this shape.
<br/><br/>
This object provides information for buoyancy and fluid drag computations
when this shape is interacting as a fluid.

@default new FluidProperties();

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fluidEnabled"><div class="plugin-name">nape</div><code><span class="field-name">fluidEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fluidEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this shape is able to interact as a fluid.
<br/><br/>
Unless this field is true, this Shape can never interact as a fluid.
<br/><br/>
Just because this field is true however, does not mean this shape will always
interact as a fluid, the final result is down to the combination of
InteractionFilters on the pairing of shapes and sensory interaction
takes higher priority.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sensorEnabled"><div class="plugin-name">nape</div><code><span class="field-name">sensorEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sensorEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this shape is able to interact as sensor.
<br/><br/>
Unless this field is true, this Shape can never interact as a sensor.
<br/><br/>
Just because this field is true however, does not mean this shape will always
interact as a sensor, the final result is down to the combination of
InteractionFilters on the pairing of shapes. Sensor interaction has highest priority.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bounds"><div class="plugin-name">nape</div><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/AABB/" class="type-link">nape.geom.AABB</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World space bounding box for this shape.
<br/><br/>
This value can be accessed even if the Shape is not part of a Body,
however attempting to query its values would result in an error in
debug builds.
<br/><br/>
This AABB is immutable.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isCircle"><div class="plugin-name">nape</div><code><span class="field-name">isCircle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Faster equivalent to <code>type == ShapeType.CIRCLE</code>


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if shape is a Circle type. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isPolygon"><div class="plugin-name">nape</div><code><span class="field-name">isPolygon</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPolygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Faster equivalent to <code>type == ShapeType.POLYGON</code>


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if shape is a Polygon type. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="translate"><div class="plugin-name">nape</div><code><span class="field-name">translate</span><span class="parenthesis">(</span><span class="arg-name">translation</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shape</a></code><a class="header-anchor" href="#translate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translate this shape in its local coordinate system.
<br/><br/>
This is equivalent to: <code>shape.localCOM.addeq(displacement)</code>



| Name | Type | Description |
|------|------|-------------|
| `translation` | [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | The local translation to apply to Shape.  |

| Returns | Description |
|---------|-------------|
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | A reference to 'this' Shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scale"><div class="plugin-name">nape</div><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">scalex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaley</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shape</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale this shape in its local coordinate system.
<br/><br/>
For Circle shapes, scalex and scaley must be exactly equal.



| Name | Type | Description |
|------|------|-------------|
| `scalex` | [Float](/api-docs/clay-web/Float/) | The x-coordinate scaling to apply to Shape.  |
| `scaley` | [Float](/api-docs/clay-web/Float/) | The y-coordinate scaling to apply to Shape.  |

| Returns | Description |
|---------|-------------|
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | A reference to 'this' Shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rotate"><div class="plugin-name">nape</div><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shape</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate this shape in its local coordinate system.



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/clay-web/Float/) | The number of radians to rotate this Shape by in a clockwise direction.  |

| Returns | Description |
|---------|-------------|
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | A reference to 'this' Shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transform"><div class="plugin-name">nape</div><code><span class="field-name">transform</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Mat23/" class="type-link">nape.geom.Mat23</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shape</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply local transformation matrix to Shape.
<br/><br/>
For Circle shapes, the matrix must be equiorthogonal.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [nape.geom.Mat23](/api-docs/clay-web/nape/geom/Mat23/) | The matrix to transform Shape by.  |

| Returns | Description |
|---------|-------------|
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | A reference to 'this' Shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="contains"><div class="plugin-name">nape</div><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Test containment of world-space coordinate in Shape.
<br/><br/>
This Shape must be part of a Body so that world coordinates are
defined.



| Name | Type | Description |
|------|------|-------------|
| `point` | [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | The point to check for containment.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if point is contained within the Shape.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Shape</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce an exact copy of this Shape.
<br/><br/>
The copied shape will be identical with the copied Shape's userData
object being assigned the same fields as 'this' Shape with the same
values copied over by reference for object types.


| Returns | Description |
|---------|-------------|
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | A copy of this shape. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


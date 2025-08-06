---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Material
target: Unity
permalink: api-docs/unity/nape/phys/Material/
---

# Material

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/Material.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.phys.Material</strong> (final class)</div>

Material property providing physical attributes to a Shape.

## Static Members

<div class="signature field-method has-description has-plugin" id="wood"><div class="plugin-name">nape</div><code><span class="field-name">wood</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#wood"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a wood style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(0.4,0.2,0.38,0.7,0.005)</code> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="steel"><div class="plugin-name">nape</div><code><span class="field-name">steel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#steel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a steel style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(0.2,0.57,0.74,7.8,0.001)</code> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ice"><div class="plugin-name">nape</div><code><span class="field-name">ice</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#ice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a ice style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(0.3,0.03,0.1,0.9,0.0001)</code> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rubber"><div class="plugin-name">nape</div><code><span class="field-name">rubber</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#rubber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a rubber style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(0.8,1.0,1.4,1.5,0.01)</code> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="glass"><div class="plugin-name">nape</div><code><span class="field-name">glass</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#glass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a glass style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(0.4,0.4,0.94,2.6,0.002)</code> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sand"><div class="plugin-name">nape</div><code><span class="field-name">sand</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#sand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Predefined constructor for a sand style Material.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | <code>new Material(-1.0,0.45,0.6,1.6,16.0)</code> |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/phys/ZPP_Material/" class="type-link">zpp_nape.phys.ZPP_Material</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shapes"><div class="plugin-name">nape</div><code><span class="field-name">shapes</span><span class="operator">:</span> <a href="/api-docs/unity/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of all active shapes using this object.
<br/><br/>
Activeness of a shape in the sense that the Shape's Body is inside of a Space.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="elasticity"><div class="plugin-name">nape</div><code><span class="field-name">elasticity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elasticity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Elasticity of material.
<br/><br/>
This property may take any value. Coeffecients of elasticity are combined
by taking their average, and then clamping to the range [0,1]. In this way
you may give very large values (even infinites) to this property to bias
the result of combining elasticities.
<br/><br/>
A combined, clamped value of 0 results in no bouncing whatsoever.
<br/>
A combine, clamped value of 1 results in complete elasticity where if
possible, the objects will not lose any energy at all.

@default 0.0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dynamicFriction"><div class="plugin-name">nape</div><code><span class="field-name">dynamicFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dynamicFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of dynamic friction for material.
<br/><br/>
This property may take any zero or positive value. Coeffecients of
dynamicFriction are combined by taking the square root of their product.
<br/><br/>
The higher this value the more quickly objects will slow down from speed
when sliding.

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="staticFriction"><div class="plugin-name">nape</div><code><span class="field-name">staticFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#staticFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of static friction for material.
<br/><br/>
This property may take any zero or positive value. Coeffecients of
staticFriction are combined by taking the square root of their product.
<br/><br/>
The higher this value the more quickly objects will come to rest once moving
very slowly, and the harder it will be to cause the objcet to begin to slide.

@default 2

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="density"><div class="plugin-name">nape</div><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density of Shape's using this Material.
<br/><br/>
This property has units of g/pixel/pixel, not Kg/pixel/pixel for the
simple reason that we get more reasonable values like 1 instead of 0.001
to attain reasonable mass values for Bodys.

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rollingFriction"><div class="plugin-name">nape</div><code><span class="field-name">rollingFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rollingFriction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Coeffecient of rolling friction for circle interactions.
<br/><br/>
This property may take any zero or positive value. Coeffecients of
staticFriction are combined by taking the square root of their product.
<br/><br/>
The higher this value, the more quickly a rolling circle - which would
otherwise roll forever ignoring drag and numerical issues - will come to
rest.

@default 0.01

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Material</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this Material object.
<br/><br/>
The copied object will be identical in all properties with the the
copied userData being assigned the same fields as 'this' Shape with the
same values copied over by reference for object types.


| Returns | Description |
|---------|-------------|
| [Material](/api-docs/unity/nape/phys/Material/) | The copied Material. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">elasticity</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">dynamicFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">staticFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">2.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rollingFriction</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.001</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Material object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `elasticity` | [Float](/api-docs/unity/Float/) | `0.0` | The coeffecient of elasticity for material. (default 0.0)  |
| `dynamicFriction` | [Float](/api-docs/unity/Float/) | `1.0` | The coeffecient of dynamic friction for material. (default 1.0)  |
| `staticFriction` | [Float](/api-docs/unity/Float/) | `2.0` | The coeffecient of static friction for material. (default 2.0)  |
| `density` | [Float](/api-docs/unity/Float/) | `1` | The density of the shape using this material in units of g/pixel/pixel. (default 1.0)  |
| `rollingFriction` | [Float](/api-docs/unity/Float/) | `0.001` | The coeffecient of rolling friction for material used in circle friction computations. (default 0.001)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


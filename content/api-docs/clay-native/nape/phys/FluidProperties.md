---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: FluidProperties
target: Clay (Native)
permalink: api-docs/clay-native/nape/phys/FluidProperties/
---

# FluidProperties

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/FluidProperties.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.phys.FluidProperties</strong> (final class)</div>

FluidProperties providing shared parameters for fluid interaction.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/phys/ZPP_FluidProperties/" class="type-link">zpp_nape.phys.ZPP_FluidProperties</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shapes"><div class="plugin-name">nape</div><code><span class="field-name">shapes</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/ShapeList/" class="type-link">nape.shape.ShapeList</a></code><a class="header-anchor" href="#shapes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of all active shapes using this object.
<br/><br/>
Activeness of a shape in the sense that the Shape's Body is inside of a Space.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="density"><div class="plugin-name">nape</div><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density of fluid.
<br/><br/>
This value, like Material density is of g/pixel/pixel.
@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="viscosity"><div class="plugin-name">nape</div><code><span class="field-name">viscosity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viscosity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viscosity of fluid.
<br/><br/>
This value is used in drag comutations, the higher the viscosity the
more quickly objects will come to rest in the fluid.
@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravity"><div class="plugin-name">nape</div><code><span class="field-name">gravity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gravity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local gravity for buoyancy computations.
<br/><br/>
When this value is not null, it will be used in place of the Space gravity
when performing buoyancy computations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">FluidProperties</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this FluidProperties object.
<br/><br/>
The copied object will be identical in all properties with the the
copied userData being assigned the same fields as 'this' Shape with the
same values copied over by reference for object types.


| Returns | Description |
|---------|-------------|
| [FluidProperties](/api-docs/clay-native/nape/phys/FluidProperties/) | The copied FluidProperties. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">viscosity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new FluidProperties objects.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `density` | [Float](/api-docs/clay-native/Float/) | `1` | The density of the fluid in g/px/px. (default 1)  |
| `viscosity` | [Float](/api-docs/clay-native/Float/) | `1` | The viscosity of the fluid for drag computations in kg/px/s (default 1)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


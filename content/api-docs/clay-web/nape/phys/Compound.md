---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Compound
target: Clay (Web)
permalink: api-docs/clay-web/nape/phys/Compound/
---

# Compound

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/Compound.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/nape/phys/Interactor/">Interactor</a> → <strong>nape.phys.Compound</strong> (final class)</div>

Compound represents a grouping of physics objects into a single object.
<br/><br/>
This compound owns its constituents and works in the callback system and with
respect to adding/removing from a Space as a single object.
<pre>
____Cmp1_____
/    /    &#92;   &#92;
Body1 Body2--Joint Cmp2
|     |        &#92;  |
Shp1  Shp2        Body3
|
Shp3
</pre>
For example if you have a complex car built with several bodies and
constraints you might store this in a Compound providing an easy way
of removing/adding/copying the Car as well as being able to get a single
callback for when the car collides with something.
<br/><br/>
When you add a compound to a Space, all of it's constituents get added
and furthermore, those constituents cannot be added seperately.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/phys/ZPP_Compound/" class="type-link">zpp_nape.phys.ZPP_Compound</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bodies"><div class="plugin-name">nape</div><code><span class="field-name">bodies</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/BodyList/" class="type-link">BodyList</a></code><a class="header-anchor" href="#bodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of bodies directly owned by this Compound.
<br/><br/>
This list does not include those bodies belonging to sub-compounds.

@default []

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraints"><div class="plugin-name">nape</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of constraints directly owned by this Compound.
<br/><br/>
This list does not include those constraints belonging to sub-compounds.

@default []

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compounds"><div class="plugin-name">nape</div><code><span class="field-name">compounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/CompoundList/" class="type-link">CompoundList</a></code><a class="header-anchor" href="#compounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of compounds directly owned by this Compound.
<br/><br/>
This list does not include those compounds belonging to sub-compounds.

@default []

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compound"><div class="plugin-name">nape</div><code><span class="field-name">compound</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">Compound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#compound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compound that this compound belongs to.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="space"><div class="plugin-name">nape</div><code><span class="field-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Space this compound belongs to.
<br/><br/>
This value is immutable when this compound belongs to another parent Compound.

@default null

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Compound</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce an exact copy of this Compound.
<br/><br/>
This copy will remap owned constraints so that their body properties
refer to the newly copied bodies also owned by this compound.
<br/><br/>
If this compound tree contains any constraints that make references
to outside of this compound; then these properties will be made null.
<pre>
____Cmp1____               [Cmp2.copy()]
/    /        &#92;
Body1 Body2___     Cmp2        null    Cmp2'
|     |     &#92;     /  &#92;         &#92;    /    &#92;
Shp1  Shp2     Joint--Body3       Joint'--Body3'
|                   |
Shp3               Shp3'
</pre>
For instance if copying Cmp1 then all is well, but if we copy Cmp2 the
copied Joint will have one of it's body references null as that body is
not owned directly, or indirectly by the compound.
| Returns |
|---------|
| [Compound](/api-docs/clay-web/nape/phys/Compound/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="breakApart"><div class="plugin-name">nape</div><code><span class="field-name">breakApart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#breakApart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Breaking compound apart in-place.
<br/><br/>
This method will destroy the compound, moving all of it's components
to the assigned Space if this is the root compound, otherwise to the
parent compound.
<br/><br/>
Apart from being easier than doing this manually it also means that we
do not have to temporarigly remove objects from the space meaning that
things like PreListener ignored interactions will be unaffected.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitBodies"><div class="plugin-name">nape</div><code><span class="field-name">visitBodies</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitBodies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method to iterate over all bodies contained directly or indirectly by
this Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The method to apply to each Body.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitConstraints"><div class="plugin-name">nape</div><code><span class="field-name">visitConstraints</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method to iterate over all constraints contained directly or indirectly by
this Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The method to apply to each Constraint.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visitCompounds"><div class="plugin-name">nape</div><code><span class="field-name">visitCompounds</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visitCompounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Method to iterate over all compounds contained directly or indirectly by
this Compound.



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The method to apply to each Compound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="COM"><div class="plugin-name">nape</div><code><span class="field-name">COM</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#COM"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute centre of mass of Compound.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `weak` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, the returned Vec2 will be automatically released to the object pool when passed as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | The centre of mass of compound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="translate"><div class="plugin-name">nape</div><code><span class="field-name">translate</span><span class="parenthesis">(</span><span class="arg-name">translation</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Compound</a></code><a class="header-anchor" href="#translate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translate entire compound.
<br/><br/>
This is equivalent to: <code>compound.visitBodies(function (b) b.translate(translation))</code>



| Name | Type | Description |
|------|------|-------------|
| `translation` | [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | The translation to apply to the Compound.  |

| Returns | Description |
|---------|-------------|
| [Compound](/api-docs/clay-web/nape/phys/Compound/) | A reference to this Compound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rotate"><div class="plugin-name">nape</div><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">centre</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Compound</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate entire compound about a point.
<br/><br/>
This is equivalent to: <code>compound.visitBodies(function (b) b.rotate(centre, angle))</code>



| Name | Type | Description |
|------|------|-------------|
| `centre` | [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | The centre of rotation in world coordinates.  |
| `angle` | [Float](/api-docs/clay-web/Float/) | The clockwise angle of rotation in radians.  |

| Returns | Description |
|---------|-------------|
| [Compound](/api-docs/clay-web/nape/phys/Compound/) | A reference to this Compound.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Compound.

@result The constructed Compound.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


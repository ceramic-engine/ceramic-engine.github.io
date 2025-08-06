---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Vec2
target: Unity
permalink: api-docs/unity/nape/geom/Vec2/
---

# Vec2

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Vec2.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Vec2</strong> (final class)</div>

2 Dimensional vector.
<br/><br/>
Note that in many cases of a Vec2 object being returned by a Nape function
the Vec2 object will be marked internally as an 'immutable' Vec2. This will
always be documented and trying to mutate such a Vec2 will result in an
error being thrown.
<br/><br/>
Vec2 objects can make use of a global object pool, attempting to make use
of a disposed Vec2 will also result in an error with the object pool
working in a FILO order to increase the likelihood of such misuse being
caught.
<br/><br/>
Additionally Vec2 objects can be created as 'weak'. Passing a weak Vec2 to
any Nape function as an argument will result in the automatic disposal of
the Vec2 once the method has finished with it. There may be exceptions to
this rule which will also be documented; a notable case being the appending
of a weak Vec2 to a Nape Vec2List in which case the disposal of the weak
Vec2 is performed when that Vec2List is handed to a Nape function instead.
<br/><br/>
Example:
<pre>
var vertices = Polygon.box(20, 20, true);
var polygon = new Polygon(vertices);
</pre>
In this example, passing <code>true</code> to the Polygon.box method means
that we will be returned a Vec2List containing only 'weak' Vec2s. Upon
passing this Vec2List to the Polygon constructor, all of the Vec2s from
that list will be automatically disposed.

## Static Members

<div class="signature field-method has-description has-plugin" id="weak"><div class="plugin-name">nape</div><code><span class="field-name">weak</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#weak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate a weak Vec2 from global object pool.
<br/><br/>
This object which will be automaticaly released back to the object pool
when supplied as an argument to a Nape function.
<br/><br/>
Note that <code>Vec2.weak(x, y)</code> is exactly equivalent to <code>
Vec2.get(x, y, true)</code>.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | `0` | The x coordinate for the vector. (default 0)  |
| `y` | [Float](/api-docs/unity/Float/) | `0` | The y coordiante for the vector. (default 0)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The allocated weak Vec2 with given x/y values. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates a Vec2 from the global object pool.
<br/><br/>
Note that <code>Vec2.get(x, y, true)</code> is exactly equivalent to
<code>Vec2.weak(x, y)</code> and should be preferred.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | `0` | The x coordinate for the vector. (default 0)  |
| `y` | [Float](/api-docs/unity/Float/) | `0` | The y coordinate for the vector. (default 0)  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then a weak Vec2 will be allocated which will be automatically released to object pool when passed as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The allocated, possibly weak Vec2 with given x/y values. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fromPolar"><div class="plugin-name">nape</div><code><span class="field-name">fromPolar</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#fromPolar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate a Vec2 given polar coordinates.
<br/><br/>
This Vec2 will be allocated from the global object pool.
<br/><br/>
This method will assign x/y values equal respectively to:
<code>length&#42Math.cos(angle)</code>,
<code>length&#42Math.sin(angle)</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `length` | [Float](/api-docs/unity/Float/) | | The length of the Vec2. This value may be negative.  |
| `angle` | [Float](/api-docs/unity/Float/) | | The angle of the Vec2 as measured in radians clockwise from the positive x axis.  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then a weak Vec2 will be allocated which will be automatically released to the object pool when passed as an argument to any Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak Vec2 allocated with given polar values. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dsq"><div class="plugin-name">nape</div><code><span class="field-name">dsq</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dsq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute square distance between two points.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The first point Vec2.  |
| `b` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The second point Vec2.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Squared distance between points.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="distance"><div class="plugin-name">nape</div><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute distance between two points.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The first point Vec2.  |
| `b` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The second point Vec2.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Distance between points.  |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_Vec2/" class="type-link">zpp_nape.geom.ZPP_Vec2</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_disp"><div class="plugin-name">nape</div><code><span class="field-name">zpp_disp</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_disp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">nape</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

x coordinate of vector.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">nape</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

y coordinate of vector.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="length"><div class="plugin-name">nape</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of this Vec2.
<br/><br/>
This value can be set and may be set to negative values so that
<code>vec.length &#42= -1</code> is a valid - if sub-optimal - way of
negating a Vec2.

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angle"><div class="plugin-name">nape</div><code><span class="field-name">angle</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angle of this Vec2.

Measured in radians as measured clockwise from the positive x axis.
The value will be given in the range -pi to pi.
<br/><br/>
If the x/y values of this Vec2 are both 0, then the angle value will
default to 0.
<br/><br/>
This value can also be set (to any value) so that <code>vec.angle +=
Math.PI</code> is a valid - if sub-optimial - way of negating a Vec2.

@default 0

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">nape</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Release this Vec2 to global object pool.
<br/><br/>
Once diposed this Vec2
will be accessible to Nape internals for re-allocation and should
not be touched (Good practice would be to set any references to this
Vec2 to null to help ensure this).
<br/><br/>
In debug mode, should you attempt to access this Vec2 after disposal
and the Vec2 is still in the object pool, you will be given an Error.
The object pool operates on a First-In-Last-Out principal in debug
mode to help catch these sort of errors.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this Vec2.
<br/><br/>
The Vec2 will be allocated from the global object pool.
<br/><br/>
As would be expected, if you produce a copy of an 'immutable' Vec2, then
the copy will be 'mutable'.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then a weak Vec2 will be allocated which will be automatically released to the object pool when passed as an argument to any Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak copy of this Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lsq"><div class="plugin-name">nape</div><code><span class="field-name">lsq</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lsq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute squared length of this Vec2.
<br/><br/>
This is exactly the same as performing <code>vec.length &#42
vec.length</code> except for being more effecient.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The squared length of this Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="set"><div class="plugin-name">nape</div><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of this Vec2 to those of the argument.
<br/><br/>
Note that <code>vec.set(p)</code> is semantically equivalent to
<code>vec.setxy(p.x, p.y)</code>.



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The Vec2 to set the values of this Vec2 with.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to 'this' Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setxy"><div class="plugin-name">nape</div><code><span class="field-name">setxy</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#setxy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of this Vec2 given pair of x/y values.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | The x value to set this Vec2's x value to.  |
| `y` | [Float](/api-docs/unity/Float/) | The y value to set this Vec2's y value to.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to 'this' Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="rotate"><div class="plugin-name">nape</div><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate Vec2 in-place by given number of radians..
<br/><br/>
Rotation performed in the clockwise direction.
<br/><br/>
The Vec2 will be mutated, with it's new x/y values being the result
of the rotation.



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/unity/Float/) | The number of radians to rotate Vec2 by in the clockwise direction.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to 'this' Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reflect"><div class="plugin-name">nape</div><code><span class="field-name">reflect</span><span class="parenthesis">(</span><span class="arg-name">vec</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#reflect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reflect given Vec2 in plane whose normal is this Vec2.
<br/><br/>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vec` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | | The vector to be reflected.  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true, the returned Vec2 will be automatically released to object pool when used in another Nape function (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The reflected Vec2.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="normalise"><div class="plugin-name">nape</div><code><span class="field-name">normalise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#normalise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normalise this vector.
<br/><br/>
Equivalent to setting the length of the vector to 1, and also to the
(less-optimal) <code>this.set(this.unit())</code>.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to 'this' vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unit"><div class="plugin-name">nape</div><code><span class="field-name">unit</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#unit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return normalisation of this vector.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the allocated Vec2 will be automatically released to the global object pool when used as an argument to a Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A copy of this vector, normalised.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="add"><div class="plugin-name">nape</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add another vector to this vector.
<br/><br/>
Returns a newly allocated vector so that
this vector is not modified.
<br/><br/>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | | The vector to add to this vector. This value can not be null  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the returned vector will be automatically released to the global object pool when used as an argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak vector representing the sum of this and the input vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addMul"><div class="plugin-name">nape</div><code><span class="field-name">addMul</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="arg-name">scalar</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#addMul"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a multiple of a vector to this vector.
<br/><br/>
This operation is equivalent to:
<pre>
this.add(vector.mul(scalar, true));
</pre>
<br/><br/>
Returns a newly allocated vector so that
this vector is not modified.
<br/><br/>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | | The vector to add to this vector. This value can not be null  |
| `scalar` | [Float](/api-docs/unity/Float/) | | The scalar multiplier for the vector being added.  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the returned vector will be automatically released to the global object pool when used as an argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak vector representing the sum of this and the input vector by scalar multiplier.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sub"><div class="plugin-name">nape</div><code><span class="field-name">sub</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Subtract another vector from this vector.
<br/><br/>
Returns a newly allocated vector so that this vector is not mutated.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | | The vector to subtract from this vector. This value can not be null  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the returned vector will be automatically released to the global object pool when used as an argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak vector representing the subtraction of the input vector from this vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mul"><div class="plugin-name">nape</div><code><span class="field-name">mul</span><span class="parenthesis">(</span><span class="arg-name">scalar</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#mul"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply this vector with a number.
<br/><br/>
Returns a newly allocated vector so that this vector is not mutated.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `scalar` | [Float](/api-docs/unity/Float/) | | The number to multiply this vector with.  |
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the returned vector will be automatically released to the global object pool when used as an argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weak vector representing the multiplication of this vector and the input number.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addeq"><div class="plugin-name">nape</div><code><span class="field-name">addeq</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#addeq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add another vector into this vector.
<br/><br/>
This vector is mutated to be the result of the operation.
<br/><br/>
Semantically equivalent to (the less optimal)
<code>vec1.set(vec1.add(vec2))</code>



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The vector to add into this vector.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to this vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="subeq"><div class="plugin-name">nape</div><code><span class="field-name">subeq</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#subeq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Subtract another vector from this vector.
<br/><br/>
This vector is mutated to be the result of the operation.
<br/><br/>
Semantically equivalent to (the less optimal)
<code>vec1.set(vec1.sub(vec2))</code>



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The vector to subtract from this vector.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to this vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="muleq"><div class="plugin-name">nape</div><code><span class="field-name">muleq</span><span class="parenthesis">(</span><span class="arg-name">scalar</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#muleq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply this vector with a number.
<br/><br/>
This vector is mutated to be the result of the operation.
<br/><br/>
Semantically equivalent to (the less optimal)
<code>vec.set(vec.mul(scalar))</code>



| Name | Type | Description |
|------|------|-------------|
| `scalar` | [Float](/api-docs/unity/Float/) | The number to multiply this vector with.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | A reference to this vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dot"><div class="plugin-name">nape</div><code><span class="field-name">dot</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dot product with another vector.
<br/><br/>
The dot product is equal to the product of the length of each
vector, multiplied by the cosine of the smallest angle between them.
<br/><br/>
If one of the vectors is of length 1. Then the dot product is the
length of the projection of the other vector onto it which may be
computed (assuming 'this' is of length 1) like:
<code>vec1.mul(vec1.dot(vec2))</code>



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The vector to compute dot product with.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The dot product of this vector and the other.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cross"><div class="plugin-name">nape</div><code><span class="field-name">cross</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cross"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cross product with another vector.
<br/><br/>
Also known as the perp-dot product, this operation represents
the determinant of the matrix formed by having the 2 columns
as the two vectors. This is also the z-value of a 3D cross product
if you extend the input vectors with a z-value of 0.
<br/><br/>
Though not technically a cross-product in the way a 3D cross product
is, it shares many mathematical similarities.
<br/><br/>
If one of the vectors is of length 1. Then the cross product is the
length of the projection of the other vector onto the
right-perpendicular of the unit vector.
<br/><br/>
The cross and dot product are related like:
<code>vec1.cross(vec2) == vec1.perp().dot(vec2)</code>
Hence the name 'perp-dot'
<br/><br/>
Another useful property is that if the cross-product of two vectors
is 0, then the vectors are collinear, if positive then the second
vector is 'to the right' of the first vector, and if negative then
the second vector is 'to the left' of the first vector.



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec2](/api-docs/unity/nape/geom/Vec2/) | The vector to compute cross product with.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The cross product of this vector and the other.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="perp"><div class="plugin-name">nape</div><code><span class="field-name">perp</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec2</a></code><a class="header-anchor" href="#perp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The right-perpendicular to this vector.
<br/><br/>
Computes the result of rotating this vector by 90 degrees clockwise
returning a newly allocated vector.
<br/><br/>
This is semantically equivalent to (the less optimal)
<code>vec.copy().rotate(Math.PI/2)</code>
<br/><br/>
The cross and dot product are related like:
<code>vec1.cross(vec2) == vec1.perp().dot(vec2)</code>
Hence the name 'perp-dot'



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true then the returned vector will be automatically released to the global object pool when used as an argument to another Nape function. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | The possibly weakly allocated, right-perpendicular to this vector.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Vec2.
<br/><br/>
This constructor will obviously not make use of
the global object pool: <code>Vec2.get</code> should be used in
preference noting that <code>new Vec2(x, y)</code> is semantically
equivalent to <code>Vec2.get(x, y)</code>.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | `0` | The x coordinate for the vector. (default 0)  |
| `y` | [Float](/api-docs/unity/Float/) | `0` | The y coordinate for the vector. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


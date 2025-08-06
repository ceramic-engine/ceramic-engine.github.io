---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Mat23
target: Clay (Native)
permalink: api-docs/clay-native/nape/geom/Mat23/
---

# Mat23

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Mat23.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Mat23</strong> (final class)</div>

2D Matrix class representing affine transformations:
<pre>
[ a  b  tx ]
[ c  d  ty ]
[ 0  0  1  ]
</pre>

Note that in AS3, flash.geom.Matrix has 'b' and 'c' swapped! so if you are
converting between flash.geom.Matrix and nape.geom.Mat23 you should use the
methods provided to avoid any mistakes with this.


## Static Members

<div class="signature field-method has-description has-plugin" id="rotation"><div class="plugin-name">nape</div><code><span class="field-name">rotation</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a Mat23 representing a clockwise rotation.

<pre>
[ cos angle  -sin angle  0 ]
[ sin angle   cos angle  0 ]
</pre>



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/clay-native/Float/) | The clockwise rotation in radians  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The rotation matrix. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="translation"><div class="plugin-name">nape</div><code><span class="field-name">translation</span><span class="parenthesis">(</span><span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#translation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a Mat23 representing a translation

<pre>
[ 1  0  tx ]
[ 0  1  ty ]
</pre>



| Name | Type | Description |
|------|------|-------------|
| `tx` | [Float](/api-docs/clay-native/Float/) | The x translation.  |
| `ty` | [Float](/api-docs/clay-native/Float/) | The y translation.  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The translation matrix. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scale"><div class="plugin-name">nape</div><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">sx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">sy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a Mat23 representing a scaling

<pre>
[ sx  0  0 ]
[ 0  sy  0 ]
</pre>



| Name | Type | Description |
|------|------|-------------|
| `sx` | [Float](/api-docs/clay-native/Float/) | The x factor of scaling.  |
| `sy` | [Float](/api-docs/clay-native/Float/) | The y factor of scaling.  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The scaling matrix. |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_Mat23/" class="type-link">zpp_nape.geom.ZPP_Mat23</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="a"><div class="plugin-name">nape</div><code><span class="field-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (1,1) entry in Mat23:
<br/><br/>
<pre>
[ a  .  . ]
[ .  .  . ]
</pre>

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="b"><div class="plugin-name">nape</div><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (1,2) entry in Mat23:
<br/><br/>
<pre>
[ .  b  . ]
[ .  .  . ]
</pre>

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="c"><div class="plugin-name">nape</div><code><span class="field-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#c"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (2,1) entry in Mat23:
<br/><br/>
<pre>
[ .  .  . ]
[ c  .  . ]
</pre>

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="d"><div class="plugin-name">nape</div><code><span class="field-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (2,2) entry in Mat23:
<br/><br/>
<pre>
[ .  .  . ]
[ .  d  . ]
</pre>

@default 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tx"><div class="plugin-name">nape</div><code><span class="field-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (1,3) entry in Mat23 which represents x translation
<br/><br/>
<pre>
[ .  .  tx ]
[ .  .  .  ]
</pre>

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ty"><div class="plugin-name">nape</div><code><span class="field-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (2,3) entry in Mat23 which represents y translation
<br/><br/>
<pre>
[ .  .  .  ]
[ .  .  ty ]
</pre>

@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="determinant"><div class="plugin-name">nape</div><code><span class="field-name">determinant</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#determinant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(readonly) The determinant of this matrix.
<br/><br/>
This represents the factor of change in area
for a region of the plane after transformation by matrix.
<br/><br/>
A determinant of 0 signifies that the matrix is not invertible.
<br/><br/>
A negative determinant signifies that for example, a clockwise wound
polygon would be transformed into a counter-clockwise polygon.

@default 1

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce copy of this Mat23


| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The new Mat23 representing copy of this. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="set"><div class="plugin-name">nape</div><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of matrix from another.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The matrix to copy values from.  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | A reference to this Mat23.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setAs"><div class="plugin-name">nape</div><code><span class="field-name">setAs</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#setAs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of matrix from numbers.
<br/><br/>
So that: <code>mat.setAs(...)</code> is
semantically equivalent to: <code>mat.set(new Mat23(...))</code>
<br/><br/>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `a` | [Float](/api-docs/clay-native/Float/) | `1.0` | The value to which the (1,1) entry will be set (default 1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | `0.0` | The value to which the (1,2) entry will be set (default 0)  |
| `c` | [Float](/api-docs/clay-native/Float/) | `0.0` | The value to which the (2,1) entry will be set (default 0)  |
| `d` | [Float](/api-docs/clay-native/Float/) | `1.0` | The value to which the (2,2) entry will be set (default 1)  |
| `tx` | [Float](/api-docs/clay-native/Float/) | `0.0` | The value to which the (1,3) entry will be set (default 0)  |
| `ty` | [Float](/api-docs/clay-native/Float/) | `0.0` | The value to which the (2,3) entry will be set (default 0)  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | A reference to this Mat23. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reset"><div class="plugin-name">nape</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset matrix to identity.
<br/><br/>
Equivalent to calling setAs with default argument values.
<br/><br/>

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | A reference to this Mat23. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="singular"><div class="plugin-name">nape</div><code><span class="field-name">singular</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#singular"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if the matrix is singular.
This check is based on computing the condition number of the matrix
by the Frobenius norm, and comparing against 2 / epsilon.
<br/><br/>
If matrix is singular, then inversion of the matrix cannot be performed


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True, if matrix is singular. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="inverse"><div class="plugin-name">nape</div><code><span class="field-name">inverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#inverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the inverse of this matrix, returning the inverse in a new
Mat23 object.
<br/><br/>
The inverse is such that mat.concat(mat.inverse()) is the identity
matrix, as well as mat.inverse().concat(mat)


| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The inverse matrix.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transpose"><div class="plugin-name">nape</div><code><span class="field-name">transpose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#transpose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the transpose of this matrix, returning the transpose in a new
Mat23 object.
<br/><br/>
Technically speaking, we cannot transpose a matrix if the tx/ty values
are non-zero as the implicit bottom row of matrix must be (0, 0, 1)
so the tx/ty values of output matrix are set so that should the main
2x2 block of the matrix be orthogonal (Representing a rotation), then
the transpose will be able to act as the matrix inverse.
<pre>
var mat = Mat23.rotation(..).concat(Mat23.translation(...));
trace(mat.concat(mat.transpose())); // Identity matrix
trace(mat.concat(mat.inverse())); // Identity matrix
</pre>
If the main 2x2 block of matrix is 'not' orthogonal, then the transpose
will not be equal to the inverse.


| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The transposed matrix. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="concat"><div class="plugin-name">nape</div><code><span class="field-name">concat</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#concat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Concatenate matrices (left-multiplication), returning new Mat23.
<br/><br/>
<code>mat1.concat(mat2)</code> is the transformation that first
performs transformation represented by mat1, followed by transformation
represented by mat2.
<br/>



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | Matrix to concatenate with.  |

| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | The result of the concatenation.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transform"><div class="plugin-name">nape</div><code><span class="field-name">transform</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">noTranslation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a Vec2 by this matrix in new Vec2.
<br/><br/>
The Vec2 object will be allocated form the global object pool.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The Vec2 to transform by this matrix.  |
| `noTranslation` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then the input Vec2 will be treat as a vector, rather than a point with the tx/ty values treat as 0. (default false)  |
| `weak` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then the allocated Vec2 will be automatically released to global object pool when used as an argument to a Nape function.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The result of the transformation as a newly allocated (possibly weak) Vec2. (default false)  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="inverseTransform"><div class="plugin-name">nape</div><code><span class="field-name">inverseTransform</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">noTranslation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#inverseTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform inverse transformation with Vec2, returning new Vec2.
<br/><br/>
The matrix inverse will be performed implicitly and should this
method be called many times for the same Mat23, it would be better
to instead compute the matrix inverse only once.
<br/><br/>
The new Vec2 will be allocated from the global object pool.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `point` | [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | | The Vec2 to transform.  |
| `noTranslation` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true then the input Vec2 will be treat as a vector instead of a point, treating the tx/ty values of this Mat23 as though they were 0. (default false)  |
| `weak` | [Bool](/api-docs/clay-native/Bool/) | `false` | If true, then the allocated Vec2 will be automatically released to global object pool when used as an argument to a Nape function.  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The result of the transformation as a newly allocated (possibly weak) Vec2. (default false)  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="equiorthogonal"><div class="plugin-name">nape</div><code><span class="field-name">equiorthogonal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equiorthogonal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if matrix is equiorthogonal
<br/><br/>
This is a term I invented after
failing to find an existing name. It describes that this matrix maps
circles into other circles (of not necessarigly the same radius). In
otherwords the matrix can be decomposed into a rotation, translation
and scaling of equal x/y factors.
<br/><br/>
This property is required for any Mat23 that is used to transform a
Circle, or any Body containing a Circle, or to transform a Debug view.
<br/><br/>
This is a weaker property than orthogonality which describes a mapping
to a circle of equal radius.
<br/><br/>
Mathematically speaking a matrix is equiorthogonal iff.
<code>transpose(M) * M = kI</code> for some non-zero scalar k.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if matrix is equiorthogonal. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="orthogonal"><div class="plugin-name">nape</div><code><span class="field-name">orthogonal</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#orthogonal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine if matrix is orthogonal
<br/><br/>
This property describes a matrix
which maps circles into other circles of equal radius. In otherwords
the matrix can be decomposed into a rotation and a translation.
<br/><br/>
Mathematically speaking a matrix is orthogonal iff.
<code>transpose(M) * M = I</code>.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if matrix is orthogonal. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="equiorthogonalise"><div class="plugin-name">nape</div><code><span class="field-name">equiorthogonalise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#equiorthogonalise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Equiorthogonalise matrix.
<br/><br/>
We do this by finding the 'nearest' orthogonal matrix;
scaling the basis vectors of matrix to their mean length
and applying an equal and opposite rotation to each basis vector to
make them perpendicular.


| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | A reference to this Mat23.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="orthogonalise"><div class="plugin-name">nape</div><code><span class="field-name">orthogonalise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mat23</a></code><a class="header-anchor" href="#orthogonalise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Orthogonalise matrix.
<br/><br/>
We do this by finding the 'nearest' orthogonal matrix;
normalising the basis vectors of matrix
and applying an equal and opposite rotation to each basis vector to
make them perpendicular.


| Returns | Description |
|---------|-------------|
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | A reference to this Mat23.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct new Mat23.
<br/><br/>
<pre>
[ a  b  tx ]
[ c  d  ty ]
</pre>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `a` | [Float](/api-docs/clay-native/Float/) | `1.0` | The (1,1) entry in matrix (default 1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | `0.0` | The (1,2) entry in matrix (default 0)  |
| `c` | [Float](/api-docs/clay-native/Float/) | `0.0` | The (2,1) entry in matrix (default 0)  |
| `d` | [Float](/api-docs/clay-native/Float/) | `1.0` | The (2,2) entry in matrix (default 1)  |
| `tx` | [Float](/api-docs/clay-native/Float/) | `0.0` | The (1,3) entry in matrix (default 0)  |
| `ty` | [Float](/api-docs/clay-native/Float/) | `0.0` | The (2,3) entry in matrix (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


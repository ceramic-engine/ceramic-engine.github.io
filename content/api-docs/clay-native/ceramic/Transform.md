---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Transform
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Transform/
---

# Transform

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Transform.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Transform</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Events/">tracker.Events</a></div>

Transform holds matrix data to make 2d rotate, translate, scale and skew transformations.
Angles are in degrees.

This class represents a 2D affine transformation matrix used for positioning,
rotating, scaling, and skewing visual objects. The matrix is stored in the
following format:

```
| a | c | tx |
| b | d | ty |
| 0 | 0 | 1  |
```

Where:
- `a` and `d` control scaling and rotation
- `b` and `c` control skewing and rotation
- `tx` and `ty` control translation (position)

Example usage:
```haxe
var transform = new Transform();
transform.translate(100, 50);    // Move to (100, 50)
transform.rotate(Math.PI / 4);   // Rotate 45 degrees
transform.scale(2, 2);           // Double the size

// Apply to a point
var newX = transform.transformX(10, 20);
var newY = transform.transformY(10, 20);
```

The Transform class includes change tracking to optimize rendering pipelines
and supports decomposition into individual components (position, scale, rotation, skew).

## Instance Members

<div class="signature field-var no-description" id="changedDirty"><code><span class="field-name">changedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#changedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="a"><code><span class="field-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#a"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (0,0) element of the matrix, affects horizontal scaling and rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="b"><code><span class="field-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#b"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (1,0) element of the matrix, affects vertical skewing and rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="c"><code><span class="field-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#c"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (0,1) element of the matrix, affects horizontal skewing and rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="d"><code><span class="field-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#d"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The (1,1) element of the matrix, affects vertical scaling and rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tx"><code><span class="field-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal translation (x position) in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ty"><code><span class="field-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertical translation (y position) in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="changed"><code><span class="field-name">changed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#changed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the transform has changed since the last change event.
Call computeChanged() to update this value.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitChange"><code><span class="field-name">emitChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when any transform property changes.
Useful for invalidating caches or triggering re-renders.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeChanged"><code><span class="field-name">computeChanged</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if the transform has changed by comparing current values to previous values.
Updates the `changed` property. Call this before checking `changed` to ensure
the value is up to date.

<hr class="field-separator" />

<div class="signature field-method has-description" id="cleanChangedState"><code><span class="field-name">cleanChangedState</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cleanChangedState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the change tracking state.
After calling this, `changed` will be false until the transform is modified again.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a copy of this transform.

| Returns | Description |
|---------|-------------|
| [Transform](/api-docs/clay-native/ceramic/Transform/) | A new Transform with the same matrix values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="concat"><code><span class="field-name">concat</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#concat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Concatenate (multiply) this transform with another transform.
The result is stored in this transform. This is equivalent to:
`this = this * m`



| Name | Type | Description |
|------|------|-------------|
| `m` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The transform to concatenate with this one |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decompose"><code><span class="field-name">decompose</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/DecomposedTransform/" class="type-link">DecomposedTransform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/DecomposedTransform/" class="type-link">DecomposedTransform</a></code><a class="header-anchor" href="#decompose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decompose the transform matrix into its component parts.
Extracts position, scale, rotation, and skew from the matrix.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `output` | [DecomposedTransform](/api-docs/clay-native/ceramic/DecomposedTransform/) | *(optional)* | Optional DecomposedTransform to store the result (creates new if null)  |

| Returns | Description |
|---------|-------------|
| [DecomposedTransform](/api-docs/clay-native/ceramic/DecomposedTransform/) | The decomposed transform containing x, y, scaleX, scaleY, rotation, skewX, skewY |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFromDecomposed"><code><span class="field-name">setFromDecomposed</span><span class="parenthesis">(</span><span class="arg-name">decomposed</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/DecomposedTransform/" class="type-link">DecomposedTransform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFromDecomposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this transform from decomposed values.
Rebuilds the matrix from position, scale, rotation, and skew components.



| Name | Type | Description |
|------|------|-------------|
| `decomposed` | [DecomposedTransform](/api-docs/clay-native/ceramic/DecomposedTransform/) | The decomposed transform values to apply |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFromValues"><code><span class="field-name">setFromValues</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skewX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skewY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pivotX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pivotY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFromValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this transform from individual component values.
Rebuilds the matrix from position, scale, rotation, skew, and pivot.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | `0` | X position  |
| `y` | [Float](/api-docs/clay-native/Float/) | `0` | Y position  |
| `scaleX` | [Float](/api-docs/clay-native/Float/) | `1` | Horizontal scale factor  |
| `scaleY` | [Float](/api-docs/clay-native/Float/) | `1` | Vertical scale factor  |
| `rotation` | [Float](/api-docs/clay-native/Float/) | `0` | Rotation angle in radians  |
| `skewX` | [Float](/api-docs/clay-native/Float/) | `0` | Horizontal skew angle in radians  |
| `skewY` | [Float](/api-docs/clay-native/Float/) | `0` | Vertical skew angle in radians  |
| `pivotX` | [Float](/api-docs/clay-native/Float/) | `0` | X coordinate of the pivot point  |
| `pivotY` | [Float](/api-docs/clay-native/Float/) | `0` | Y coordinate of the pivot point |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFromInterpolated"><code><span class="field-name">setFromInterpolated</span><span class="parenthesis">(</span><span class="arg-name">transform1</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a><span class="operator">,</span> <span class="arg-name">transform2</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a><span class="operator">,</span> <span class="arg-name">ratio</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFromInterpolated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this transform by interpolating between two other transforms.
Useful for animations and transitions.



| Name | Type | Description |
|------|------|-------------|
| `transform1` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The starting transform (used when ratio = 0)  |
| `transform2` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The ending transform (used when ratio = 1)  |
| `ratio` | [Float](/api-docs/clay-native/Float/) | The interpolation factor (0 to 1) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deltaTransformX"><code><span class="field-name">deltaTransformX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaTransformX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a vector's X component without translation.
Useful for transforming directions or deltas.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | The X component of the vector  |
| `y` | [Float](/api-docs/clay-native/Float/) | The Y component of the vector  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The transformed X component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deltaTransformY"><code><span class="field-name">deltaTransformY</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deltaTransformY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a vector's Y component without translation.
Useful for transforming directions or deltas.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | The X component of the vector  |
| `y` | [Float](/api-docs/clay-native/Float/) | The Y component of the vector  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The transformed Y component |

<hr class="field-separator" />

<div class="signature field-method has-description" id="equals"><code><span class="field-name">equals</span><span class="parenthesis">(</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if this transform equals another transform.
Compares all matrix elements for exact equality.



| Name | Type | Description |
|------|------|-------------|
| `transform` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The transform to compare with  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | true if all matrix elements are equal |

<hr class="field-separator" />

<div class="signature field-method has-description" id="identity"><code><span class="field-name">identity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#identity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset this transform to the identity matrix.
The identity matrix has no translation, rotation, scale, or skew.
Equivalent to: a=1, b=0, c=0, d=1, tx=0, ty=0

<hr class="field-separator" />

<div class="signature field-method has-description" id="invert"><code><span class="field-name">invert</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invert this transform matrix.
The inverted matrix can be used to reverse transformations.
If the matrix is not invertible (determinant = 0), sets to a degenerate state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="rotate"><code><span class="field-name">rotate</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rotate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotate the transform by the specified angle.
The rotation is applied relative to the current transform.



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/clay-native/Float/) | The rotation angle in radians (use degrees * Math.PI / 180 to convert) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scale"><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale the transform by the specified factors.
The scaling is applied relative to the current transform.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Horizontal scale factor  |
| `y` | [Float](/api-docs/clay-native/Float/) | Vertical scale factor |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translate"><code><span class="field-name">translate</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#translate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translate (move) the transform by the specified offset.
The translation is applied relative to the current transform.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Horizontal offset in pixels  |
| `y` | [Float](/api-docs/clay-native/Float/) | Vertical offset in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skew"><code><span class="field-name">skew</span><span class="parenthesis">(</span><span class="arg-name">skewX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">skewY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skew"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply skew transformation.
Skewing shears the coordinate space along the X and Y axes.



| Name | Type | Description |
|------|------|-------------|
| `skewX` | [Float](/api-docs/clay-native/Float/) | Horizontal skew angle in radians  |
| `skewY` | [Float](/api-docs/clay-native/Float/) | Vertical skew angle in radians |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRotation"><code><span class="field-name">setRotation</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the rotation and uniform scale directly.
This replaces the current rotation and scale, discarding any skew.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `angle` | [Float](/api-docs/clay-native/Float/) | | The rotation angle in radians  |
| `scale` | [Float](/api-docs/clay-native/Float/) | `1` | Uniform scale factor (default: 1) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTo"><code><span class="field-name">setTo</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set all matrix values directly.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Float](/api-docs/clay-native/Float/) | Horizontal scaling/rotation component  |
| `b` | [Float](/api-docs/clay-native/Float/) | Vertical skewing/rotation component  |
| `c` | [Float](/api-docs/clay-native/Float/) | Horizontal skewing/rotation component  |
| `d` | [Float](/api-docs/clay-native/Float/) | Vertical scaling/rotation component  |
| `tx` | [Float](/api-docs/clay-native/Float/) | Horizontal translation  |
| `ty` | [Float](/api-docs/clay-native/Float/) | Vertical translation |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setToTransform"><code><span class="field-name">setToTransform</span><span class="parenthesis">(</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="#" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setToTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy all values from another transform.



| Name | Type | Description |
|------|------|-------------|
| `transform` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The transform to copy from |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a string representation of the transform.
Includes both matrix values and decomposed components.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | String representation for debugging |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformX"><code><span class="field-name">transformX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#transformX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a point's X coordinate.
Applies the full transformation including translation.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | The X coordinate of the point  |
| `y` | [Float](/api-docs/clay-native/Float/) | The Y coordinate of the point  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The transformed X coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformY"><code><span class="field-name">transformY</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#transformY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a point's Y coordinate.
Applies the full transformation including translation.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | The X coordinate of the point  |
| `y` | [Float](/api-docs/clay-native/Float/) | The Y coordinate of the point  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The transformed Y coordinate |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindEvents"><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Transform matrix.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `a` | [Float](/api-docs/clay-native/Float/) | `1` | Horizontal scaling/rotation component (default: 1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | `0` | Vertical skewing/rotation component (default: 0)  |
| `c` | [Float](/api-docs/clay-native/Float/) | `0` | Horizontal skewing/rotation component (default: 0)  |
| `d` | [Float](/api-docs/clay-native/Float/) | `1` | Vertical scaling/rotation component (default: 1)  |
| `tx` | [Float](/api-docs/clay-native/Float/) | `0` | Horizontal translation (default: 0)  |
| `ty` | [Float](/api-docs/clay-native/Float/) | `0` | Vertical translation (default: 0) |

## Private Members

<div class="signature field-method no-description" id="didEmitChange"><code><span class="field-name">didEmitChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.TransformPool |


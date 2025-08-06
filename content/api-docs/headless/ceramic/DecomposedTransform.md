---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: DecomposedTransform
target: Headless
permalink: api-docs/headless/ceramic/DecomposedTransform/
---

# DecomposedTransform

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/DecomposedTransform.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.DecomposedTransform</strong> (Class)</div>

Decomposed transform holds rotation, translation, scale, skew and pivot informations.
Provided by Transform.decompose() method.
Angles are in radians.

This class represents a 2D transformation broken down into its individual
components, making it easier to understand and manipulate complex transformations.
It's particularly useful for animation, debugging, and converting between
different transformation representations.

## Components

- **Translation**: x, y position
- **Rotation**: Angle in radians
- **Scale**: Horizontal and vertical scaling factors
- **Skew**: Horizontal and vertical shearing
- **Pivot**: Center point for transformations

## Usage Example

```haxe
// Decompose a transform matrix
var transform = new Transform();
transform.translate(100, 50);
transform.rotate(Math.PI / 4);
transform.scale(2, 1.5);

var decomposed = new DecomposedTransform();
transform.decompose(decomposed);

trace('Position: ${decomposed.x}, ${decomposed.y}');
trace('Rotation: ${decomposed.rotation} radians');
trace('Scale: ${decomposed.scaleX}, ${decomposed.scaleY}');
```

<div class="see"><strong>See:</strong> ceramic.Transform For matrix operations and decomposition, ceramic.Visual For applying transforms to visuals</div>


## Instance Members

<div class="signature field-var has-description" id="pivotX"><code><span class="field-name">pivotX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X coordinate of the pivot point.
The pivot is the center point around which rotation and scaling occur.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="pivotY"><code><span class="field-name">pivotY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pivotY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y coordinate of the pivot point.
The pivot is the center point around which rotation and scaling occur.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X position (horizontal translation).
This is the final position after all transformations are applied.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y position (vertical translation).
This is the final position after all transformations are applied.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotation"><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotation angle in radians.
Positive values rotate clockwise.
Default: 0

```haxe
decomposed.rotation = Math.PI / 2; // 90 degrees
decomposed.rotation = Math.PI;     // 180 degrees
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleX"><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal scaling factor.
Values > 1 stretch horizontally, < 1 compress.
Negative values flip horizontally.
Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleY"><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical scaling factor.
Values > 1 stretch vertically, < 1 compress.
Negative values flip vertically.
Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewX"><code><span class="field-name">skewX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal skew angle in radians.
Shears the shape horizontally.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewY"><code><span class="field-name">skewY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical skew angle in radians.
Shears the shape vertically.
Default: 0

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new decomposed transform with default values.
All values are initialized to identity transform.

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of the decomposed transform.
Useful for debugging and logging transformation values.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | String in format: "(pos=x,y pivot=px,py rotation=r scale=sx,sy skew=skx,sky)" |


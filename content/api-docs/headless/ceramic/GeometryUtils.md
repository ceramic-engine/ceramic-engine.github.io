---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: GeometryUtils
target: Headless
permalink: api-docs/headless/ceramic/GeometryUtils/
---

# GeometryUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/GeometryUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.GeometryUtils</strong> (Class)</div>

A collection of static utility functions for 2D geometric calculations.

GeometryUtils provides essential geometric operations commonly needed in 2D games
and applications, including point-in-shape tests, distance calculations, angle
computations, and polygon analysis.

All methods are static and optimized for performance, making them suitable for
real-time applications like collision detection, input handling, and visual effects.

Common use cases:
- Hit testing: Determine if a mouse/touch point is inside a shape
- Collision detection: Check if circles or other shapes intersect
- Movement: Calculate distances and angles for object positioning
- Rendering: Determine winding order for proper triangle rendering

Example usage:
```haxe
// Check if mouse is inside a triangle
if (GeometryUtils.pointInTriangle(mouseX, mouseY, v1.x, v1.y, v2.x, v2.y, v3.x, v3.y)) {
    trace("Mouse is inside triangle!");
}

// Calculate distance between two points
var dist = GeometryUtils.distance(player.x, player.y, enemy.x, enemy.y);
if (dist < 50) {
    trace("Enemy is nearby!");
}

// Get angle between player and target
var angle = GeometryUtils.angleTo(player.x, player.y, target.x, target.y);
player.rotation = angle;
```

<div class="see"><strong>See:</strong> ceramic.Visual For shape rendering, ceramic.Transform For coordinate transformations, ceramic.Triangulate For polygon triangulation</div>


## Static Members

<div class="signature field-method has-description" id="pointInTriangle"><code><span class="field-name">pointInTriangle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ay</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bx</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">by</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointInTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether a point lies inside a triangle using the sign method.

This method uses the sign of the cross product to determine if a point is on the
same side of all three edges of the triangle. It handles edge cases where the
point lies exactly on an edge.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | The x-coordinate of the point to test  |
| `y` | [Float](/api-docs/headless/Float/) | The y-coordinate of the point to test  |
| `ax` | [Float](/api-docs/headless/Float/) | The x-coordinate of the first triangle vertex  |
| `ay` | [Float](/api-docs/headless/Float/) | The y-coordinate of the first triangle vertex  |
| `bx` | [Float](/api-docs/headless/Float/) | The x-coordinate of the second triangle vertex  |
| `by` | [Float](/api-docs/headless/Float/) | The y-coordinate of the second triangle vertex  |
| `cx` | [Float](/api-docs/headless/Float/) | The x-coordinate of the third triangle vertex  |
| `cy` | [Float](/api-docs/headless/Float/) | The y-coordinate of the third triangle vertex  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if the point is inside or on the edge of the triangle, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pointInRectangle"><code><span class="field-name">pointInRectangle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rectX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rectY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rectWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rectHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointInRectangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether a point lies inside an axis-aligned rectangle.

The rectangle is defined by its top-left corner position and dimensions.
Points exactly on the left or top edges are considered inside, while points
on the right or bottom edges are considered outside.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | The x-coordinate of the point to test  |
| `y` | [Float](/api-docs/headless/Float/) | The y-coordinate of the point to test  |
| `rectX` | [Float](/api-docs/headless/Float/) | The x-coordinate of the rectangle's top-left corner  |
| `rectY` | [Float](/api-docs/headless/Float/) | The y-coordinate of the rectangle's top-left corner  |
| `rectWidth` | [Float](/api-docs/headless/Float/) | The width of the rectangle  |
| `rectHeight` | [Float](/api-docs/headless/Float/) | The height of the rectangle  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if the point is inside the rectangle, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pointInCircle"><code><span class="field-name">pointInCircle</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cx</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointInCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether a point lies inside or on a circle.

Uses the squared distance formula to avoid the expensive square root operation,
making this method very efficient for collision detection.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | The x-coordinate of the point to test  |
| `y` | [Float](/api-docs/headless/Float/) | The y-coordinate of the point to test  |
| `cx` | [Float](/api-docs/headless/Float/) | The x-coordinate of the circle's center  |
| `cy` | [Float](/api-docs/headless/Float/) | The y-coordinate of the circle's center  |
| `radius` | [Float](/api-docs/headless/Float/) | The radius of the circle  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if the point is inside or on the circle, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="intersectCircles"><code><span class="field-name">intersectCircles</span><span class="parenthesis">(</span><span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">r1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersectCircles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether two circles intersect or touch.

Two circles intersect if the distance between their centers is less than or
equal to the sum of their radii. This method uses squared distances to avoid
the expensive square root operation.



| Name | Type | Description |
|------|------|-------------|
| `x0` | [Float](/api-docs/headless/Float/) | The x-coordinate of the first circle's center  |
| `y0` | [Float](/api-docs/headless/Float/) | The y-coordinate of the first circle's center  |
| `r0` | [Float](/api-docs/headless/Float/) | The radius of the first circle  |
| `x1` | [Float](/api-docs/headless/Float/) | The x-coordinate of the second circle's center  |
| `y1` | [Float](/api-docs/headless/Float/) | The y-coordinate of the second circle's center  |
| `r1` | [Float](/api-docs/headless/Float/) | The radius of the second circle  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if the circles intersect or touch, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="distance"><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the Euclidean distance between two points.

This method computes the actual distance value using the square root of the
sum of squared differences. For performance-critical code where you only need
to compare distances, consider using `squareDistance()` instead.



| Name | Type | Description |
|------|------|-------------|
| `x1` | [Float](/api-docs/headless/Float/) | The x-coordinate of the first point  |
| `y1` | [Float](/api-docs/headless/Float/) | The y-coordinate of the first point  |
| `x2` | [Float](/api-docs/headless/Float/) | The x-coordinate of the second point  |
| `y2` | [Float](/api-docs/headless/Float/) | The y-coordinate of the second point  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The distance between the two points |

<hr class="field-separator" />

<div class="signature field-method has-description" id="squareDistance"><code><span class="field-name">squareDistance</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#squareDistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the squared Euclidean distance between two points.

This method returns the square of the distance, avoiding the expensive square
root operation. It's ideal for comparing distances or checking if a distance
is within a threshold, as the relative ordering is preserved.

Example:
```haxe
// Instead of:
if (distance(x1, y1, x2, y2) < 100) { ... }

// Use:
if (squareDistance(x1, y1, x2, y2) < 100 * 100) { ... }
```



| Name | Type | Description |
|------|------|-------------|
| `x1` | [Float](/api-docs/headless/Float/) | The x-coordinate of the first point  |
| `y1` | [Float](/api-docs/headless/Float/) | The y-coordinate of the first point  |
| `x2` | [Float](/api-docs/headless/Float/) | The x-coordinate of the second point  |
| `y2` | [Float](/api-docs/headless/Float/) | The y-coordinate of the second point  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The squared distance between the two points |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angleTo"><code><span class="field-name">angleTo</span><span class="parenthesis">(</span><span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the angle from one point to another in degrees.

The angle is measured clockwise from the positive Y-axis (up), making 0° point
upward, 90° point right, 180° point down, and 270° point left. This convention
matches Ceramic's visual rotation system.



| Name | Type | Description |
|------|------|-------------|
| `x0` | [Float](/api-docs/headless/Float/) | The x-coordinate of the starting point  |
| `y0` | [Float](/api-docs/headless/Float/) | The y-coordinate of the starting point  |
| `x1` | [Float](/api-docs/headless/Float/) | The x-coordinate of the target point  |
| `y1` | [Float](/api-docs/headless/Float/) | The y-coordinate of the target point  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The angle in degrees (0-360), measured clockwise from up |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angleDelta"><code><span class="field-name">angleDelta</span><span class="parenthesis">(</span><span class="arg-name">angle0</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">angle1</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the shortest angular difference between two angles in degrees.

This method always returns the shortest path between two angles, which will
be between -180 and 180 degrees. Positive values indicate clockwise rotation,
negative values indicate counter-clockwise rotation.

Example:
```haxe
angleDelta(350, 10) // Returns 20 (not 340)
angleDelta(10, 350) // Returns -20 (not -340)
```



| Name | Type | Description |
|------|------|-------------|
| `angle0` | [Float](/api-docs/headless/Float/) | The starting angle in degrees  |
| `angle1` | [Float](/api-docs/headless/Float/) | The target angle in degrees  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The angular difference in degrees (-180 to 180) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clampDegrees"><code><span class="field-name">clampDegrees</span><span class="parenthesis">(</span><span class="arg-name">deg</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clampDegrees"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normalizes an angle to be within the range [0, 360).

This method wraps angles to ensure they fall within the standard 0-360 degree
range. Negative angles are wrapped to their positive equivalents, and angles
greater than or equal to 360 are reduced by multiples of 360.

Examples:
```haxe
clampDegrees(-90)  // Returns 270
clampDegrees(450)  // Returns 90
clampDegrees(360)  // Returns 0
```



| Name | Type | Description |
|------|------|-------------|
| `deg` | [Float](/api-docs/headless/Float/) | The angle in degrees to normalize  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The normalized angle in the range [0, 360) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="angleDirection"><code><span class="field-name">angleDirection</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#angleDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an angle in degrees to a unit direction vector.

The resulting vector has a magnitude of 1 and points in the direction of the
given angle. The angle is measured clockwise from the positive Y-axis (up),
matching Ceramic's visual rotation system.

Example:
```haxe
var direction = new Point();
GeometryUtils.angleDirection(0, direction);   // direction = (0, -1) - pointing up
GeometryUtils.angleDirection(90, direction);  // direction = (1, 0)  - pointing right
GeometryUtils.angleDirection(180, direction); // direction = (0, 1)  - pointing down
```



| Name | Type | Description |
|------|------|-------------|
| `angle` | [Float](/api-docs/headless/Float/) | The angle in degrees (0° = up, 90° = right, etc.)  |
| `result` | [Point](/api-docs/headless/ceramic/Point/) | The Point object to store the resulting direction vector  |

| Returns | Description |
|---------|-------------|
| [Point](/api-docs/headless/ceramic/Point/) | The result object for method chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isClockwise"><code><span class="field-name">isClockwise</span><span class="parenthesis">(</span><span class="arg-name">vertices</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isClockwise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines the winding order of a polygon's vertices.

This method uses the shoelace formula to calculate the signed area of the polygon.
The sign of the area indicates the winding order: negative for clockwise,
positive for counter-clockwise.

Winding order is important for:
- Determining front/back faces in rendering
- Proper triangulation of polygons
- Collision detection algorithms



| Name | Type | Description |
|------|------|-------------|
| `vertices` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | Array of polygon vertices in the format [x0,y0,x1,y1,x2,y2,...]  |
| `offset` | [Int](/api-docs/headless/Int/) | Starting index in the vertices array (must be even)  |
| `count` | [Int](/api-docs/headless/Int/) | Number of array elements to process (must be even, minimum 6 for a triangle)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if vertices are ordered clockwise, `false` if counter-clockwise |


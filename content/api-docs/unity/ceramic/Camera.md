---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Camera
target: Unity
permalink: api-docs/unity/ceramic/Camera/
---

# Camera

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Camera.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.Camera</strong> (Class)</div>

A flexible camera system for 2D games.

Camera provides smooth scrolling, target following, boundary constraints,
and various effects for controlling the viewport in your game world.

Features:
- Smooth target following with configurable speed and curves
- Dead zones to reduce camera movement for small target changes
- Content boundary clamping to keep camera within level bounds
- Zoom support
- Friction and braking near boundaries
- Anchor points for different camera behaviors

The camera doesn't render anything itself - instead, you apply its
transform to your game visuals to create the scrolling effect.

```haxe
// Create a camera following the player
var camera = new Camera(screen.width, screen.height);
camera.followTarget = true;
camera.trackSpeedX = 15;
camera.trackSpeedY = 10;

// In update loop
camera.target(player.x, player.y);
camera.update(delta);

// Apply transform to layer
gameLayer.transform = camera.contentTransform;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Visual/">Visual</a></div>


## Instance Members

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Camera x position in world coordinates.
This is the left edge of what the camera sees.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Camera y position in world coordinates.
This is the top edge of what the camera sees.

<hr class="field-separator" />

<div class="signature field-var has-description" id="followTarget"><code><span class="field-name">followTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#followTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, the camera smoothly follows the target position.
Use target() or targetX/targetY to set what to follow.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clampToContentBounds"><code><span class="field-name">clampToContentBounds</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clampToContentBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, camera will try to stay inside content bounds.
When the viewport is larger than content, camera will be centered.
Useful for keeping the camera within level boundaries.

<hr class="field-separator" />

<div class="signature field-var has-description" id="brakeNearBoundsX"><code><span class="field-name">brakeNearBoundsX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brakeNearBoundsX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Percentage of viewport width where camera will "brake" to stay inside content bounds

<hr class="field-separator" />

<div class="signature field-var has-description" id="brakeNearBoundsY"><code><span class="field-name">brakeNearBoundsY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brakeNearBoundsY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Percentage of viewport height where camera will "brake" to stay inside content bounds

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetX"><code><span class="field-name">targetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target x position

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetY"><code><span class="field-name">targetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target y position

<hr class="field-separator" />

<div class="signature field-var has-description" id="trackSpeedX"><code><span class="field-name">trackSpeedX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackSpeedX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracking x speed factor

<hr class="field-separator" />

<div class="signature field-var has-description" id="trackSpeedY"><code><span class="field-name">trackSpeedY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackSpeedY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracking y speed factor

<hr class="field-separator" />

<div class="signature field-var has-description" id="trackCurve"><code><span class="field-name">trackCurve</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#trackCurve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Affects the smoothness of camera tracking.
Lower values (0.1-0.5) create more easing/lag.
Higher values (0.8-1.0) create more direct following.
Must be between 0 (exclusive) and 1 (inclusive).

<hr class="field-separator" />

<div class="signature field-var has-description" id="zoom"><code><span class="field-name">zoom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#zoom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Camera zoom level.
1.0 = normal size
2.0 = zoomed in 2x (objects appear larger)
0.5 = zoomed out (objects appear smaller)

<hr class="field-separator" />

<div class="signature field-var has-description" id="deadZoneX"><code><span class="field-name">deadZoneX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deadZoneX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal dead zone as percentage of viewport width (0-1).
Camera won't move until target moves outside this zone.
Reduces camera jitter from small movements.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deadZoneY"><code><span class="field-name">deadZoneY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deadZoneY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical dead zone as percentage of viewport height (0-1).
Camera won't move until target moves outside this zone.
Reduces camera jitter from small movements.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frictionX"><code><span class="field-name">frictionX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frictionX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal friction.
More the value is below 1.0, higher is the friction.

<hr class="field-separator" />

<div class="signature field-var has-description" id="frictionY"><code><span class="field-name">frictionY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frictionY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical friction.
More the value is below 1.0, higher is the friction.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentX"><code><span class="field-name">contentX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content x (top left corner) position

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentY"><code><span class="field-name">contentY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content y (top left corner) position

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentWidth"><code><span class="field-name">contentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content width

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentHeight"><code><span class="field-name">contentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content height

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportWidth"><code><span class="field-name">viewportWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewportWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viewport width: the visible area width for this camera.
Usually set to screen width or render area width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewportHeight"><code><span class="field-name">viewportHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewportHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Viewport height: the visible area height for this camera.
Usually set to screen height or render area height.

<hr class="field-separator" />

<div class="signature field-var has-description" id="movementThreshold"><code><span class="field-name">movementThreshold</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#movementThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A threshold value to stop the camera if its movement is lower than this value

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentTranslateX"><code><span class="field-name">contentTranslateX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentTranslateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translation X that should be applied to the
content so that the camera is pointing to the correct area.
This value is computed by the camera when it is updated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentTranslateY"><code><span class="field-name">contentTranslateY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentTranslateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Translation Y that should be applied to the
content so that the camera is pointing to the correct area
This value is computed by the camera when it is updated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentTransform"><code><span class="field-name">contentTransform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#contentTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transform to apply to the content
in order to reflect camera position.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pos"><code><span class="field-name">pos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set camera x & y position


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | * |
| `y` | [Float](/api-docs/unity/Float/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="brakeNearBounds"><code><span class="field-name">brakeNearBounds</span><span class="parenthesis">(</span><span class="arg-name">brakeNearBoundsX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">brakeNearBoundsY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#brakeNearBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set `brakeNearBoundsX`& `brakeNearBoundsY`


| Name | Type | Description |
|------|------|-------------|
| `brakeNearBoundsX` | [Float](/api-docs/unity/Float/) | * |
| `brakeNearBoundsY` | [Float](/api-docs/unity/Float/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="target"><code><span class="field-name">target</span><span class="parenthesis">(</span><span class="arg-name">targetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">targetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#target"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set `targetX` & `targetY`, which define the position the camera may follow if `followTarget` is `true`


| Name | Type | Description |
|------|------|-------------|
| `targetX` | [Float](/api-docs/unity/Float/) | * |
| `targetY` | [Float](/api-docs/unity/Float/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stabilize"><code><span class="field-name">stabilize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">maxUpdates</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">128</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thresholdX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.01</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thresholdY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.01</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stabilize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `maxUpdates` | [Int](/api-docs/unity/Int/) | `128` |
| `delta` | [Float](/api-docs/unity/Float/) | `0.1` |
| `thresholdX` | [Float](/api-docs/unity/Float/) | `0.01` |
| `thresholdY` | [Float](/api-docs/unity/Float/) | `0.01` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateContentTransform"><code><span class="field-name">updateContentTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateContentTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="hasPrevTransform"><code><span class="field-name">hasPrevTransform</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasPrevTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="averageFrameTime"><code><span class="field-name">averageFrameTime</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#averageFrameTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="angleTo"><code><span class="field-name">angleTo</span><span class="parenthesis">(</span><span class="arg-name">x0</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y0</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x0` | [Float](/api-docs/unity/Float/) |
| `y0` | [Float](/api-docs/unity/Float/) |
| `x1` | [Float](/api-docs/unity/Float/) |
| `y1` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="internalUpdate"><code><span class="field-name">internalUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#internalUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


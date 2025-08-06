---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: World
target: Clay (Native)
permalink: api-docs/clay-native/arcade/World/
---

# World

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/World.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.World</strong> (Class) → <a href="/api-docs/clay-native/ceramic/ArcadeWorld/">ceramic.ArcadeWorld</a></div>

The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods.

## Instance Members

<div class="signature field-var has-description has-plugin" id="gravityX"><div class="plugin-name">arcade</div><code><span class="field-name">gravityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The World gravity X setting. Defaults to 0 (no gravity).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravityY"><div class="plugin-name">arcade</div><code><span class="field-name">gravityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The World gravity Y setting. Defaults to 0 (no gravity).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsX"><div class="plugin-name">arcade</div><code><span class="field-name">boundsX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bounds x position inside of which the physics world exists.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsY"><div class="plugin-name">arcade</div><code><span class="field-name">boundsY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bounds y position inside of which the physics world exists.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsWidth"><div class="plugin-name">arcade</div><code><span class="field-name">boundsWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bounds width inside of which the physics world exists.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsHeight"><div class="plugin-name">arcade</div><code><span class="field-name">boundsHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bounds height inside of which the physics world exists.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionNone"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionNone</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionNone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Which edges of the World bounds Bodies can collide against when `collideWorldBounds` is `true`.
For example checkCollisionDown = false means Bodies cannot collide with the World.bounds.bottom.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionUp"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionUp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether Bodies can collide with the World upper bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionDown"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionDown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether Bodies can collide with the World lower bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionLeft"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionLeft</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether Bodies can collide with the World left bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkCollisionRight"><div class="plugin-name">arcade</div><code><span class="field-name">checkCollisionRight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkCollisionRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether Bodies can collide with the World right bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxObjects"><div class="plugin-name">arcade</div><code><span class="field-name">maxObjects</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxObjects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used by the QuadTree to set the maximum number of objects per quad.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxLevels"><div class="plugin-name">arcade</div><code><span class="field-name">maxLevels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxLevels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used by the QuadTree to set the maximum number of iteration levels.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlapBias"><div class="plugin-name">arcade</div><code><span class="field-name">overlapBias</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlapBias"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A value added to the delta values during collision checks. Increase it to prevent sprite tunneling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="forceX"><div class="plugin-name">arcade</div><code><span class="field-name">forceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#forceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true World.separate will always separate on the X axis before Y. Otherwise it will check gravity totals first.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sortDirection"><div class="plugin-name">arcade</div><code><span class="field-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/SortDirection/" class="type-link">SortDirection</a></code><a class="header-anchor" href="#sortDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used when colliding a Body vs. a Group, or a Group vs. a Group, this defines the direction the sort is based on. Default is `LEFT_RIGHT`.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skipQuadTree"><div class="plugin-name">arcade</div><code><span class="field-name">skipQuadTree</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipQuadTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true` the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via `Body.skipQuadTree`.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isPaused"><div class="plugin-name">arcade</div><code><span class="field-name">isPaused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPaused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true` the `Body.preUpdate` method will be skipped, halting all motion for all bodies. Note that other methods such as `collide` will still work, so be careful not to call them on paused bodies.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxObjectsWithoutQuadTree"><div class="plugin-name">arcade</div><code><span class="field-name">maxObjectsWithoutQuadTree</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxObjectsWithoutQuadTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When colliding/overlapping with groups. Use a quad tree if we reach this threshold value

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tileBias"><div class="plugin-name">arcade</div><code><span class="field-name">tileBias</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tileBias"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A value added to the delta values during collision with tiles. Adjust this if you get tunneling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="elapsed"><div class="plugin-name">arcade</div><code><span class="field-name">elapsed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Elapsed time since last tick.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="elapsedMS"><div class="plugin-name">arcade</div><code><span class="field-name">elapsedMS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elapsedMS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getQuadTree"><div class="plugin-name">arcade</div><code><span class="field-name">getQuadTree</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/QuadTree/" class="type-link">QuadTree</a></code><a class="header-anchor" href="#getQuadTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a QuadTree object configured for this world.
IMPORTANT: you must release it with `releaseQuadTree()`
when you are done using it and the items it returned.

| Returns | Description |
|---------|-------------|
| [QuadTree](/api-docs/clay-native/arcade/QuadTree/) | QuadTree |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="releaseQuadTree"><div class="plugin-name">arcade</div><code><span class="field-name">releaseQuadTree</span><span class="parenthesis">(</span><span class="arg-name">quadTree</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/QuadTree/" class="type-link">QuadTree</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseQuadTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `quadTree` | [QuadTree](/api-docs/clay-native/arcade/QuadTree/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBounds"><div class="plugin-name">arcade</div><code><span class="field-name">setBounds</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the size of this physics world.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Top left most corner of the world.  |
| `y` | [Float](/api-docs/clay-native/Float/) | Top left most corner of the world.  |
| `width` | [Float](/api-docs/clay-native/Float/) | New width of the world.  |
| `height` | [Float](/api-docs/clay-native/Float/) | New height of the world. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="enableBody"><div class="plugin-name">arcade</div><code><span class="field-name">enableBody</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an Arcade Physics body on the given game object.

A game object can only have 1 physics body active at any one time, and it can't be changed until the body is nulled.

When you add an Arcade Physics body to an object it will automatically add the object into its parent Groups hash array.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | The body to enable. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateMotion"><div class="plugin-name">arcade</div><code><span class="field-name">updateMotion</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateMotion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called automatically by a Physics body, it updates all motion related values on the Body unless `World.isPaused` is `true`.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | The Body object to be updated. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeVelocity"><div class="plugin-name">arcade</div><code><span class="field-name">computeVelocity</span><span class="parenthesis">(</span><span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Axis/" class="type-link">Axis</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">velocity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">acceleration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">drag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">10000</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computeVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.
Based on a function in Flixel by @ADAMATOMIC



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `axis` | [Axis](/api-docs/clay-native/arcade/Axis/) | | 0 for nothing, 1 for horizontal, 2 for vertical.  |
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | | The Body object to be updated.  |
| `velocity` | [Float](/api-docs/clay-native/Float/) | | Any component of velocity (e.g. 20).  |
| `acceleration` | [Float](/api-docs/clay-native/Float/) | | Rate at which the velocity is changing.  |
| `drag` | [Float](/api-docs/clay-native/Float/) | | Really kind of a deceleration, this is how much the velocity changes if Acceleration is not set.  |
| `max` | [Float](/api-docs/clay-native/Float/) | `10000` | An absolute value cap for the velocity.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The altered Velocity value. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlap"><div class="plugin-name">arcade</div><code><span class="field-name">overlap</span><span class="parenthesis">(</span><span class="arg-name">element1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Collidable/" class="type-link">Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">element2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Collidable/" class="type-link">Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `element1` | [Collidable](/api-docs/clay-native/arcade/Collidable/) | |
| `element2` | [Collidable](/api-docs/clay-native/arcade/Collidable/) | *(optional)* |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="overlapBodyVsBody"><div class="plugin-name">arcade</div><code><span class="field-name">overlapBodyVsBody</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for overlaps between two bodies. The objects can be Bodies or Groups.
Unlike `collide` the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.



| Name | Type | Default |
|------|------|---------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if an overlap occurred otherwise false. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapGroupVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapGroupVsGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapGroupVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `group2` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">overlapGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapBodyVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapBodyVsGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collide"><div class="plugin-name">arcade</div><code><span class="field-name">collide</span><span class="parenthesis">(</span><span class="arg-name">element1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Collidable/" class="type-link">Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">element2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Collidable/" class="type-link">Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `element1` | [Collidable](/api-docs/clay-native/arcade/Collidable/) | |
| `element2` | [Collidable](/api-docs/clay-native/arcade/Collidable/) | *(optional)* |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collideBodyVsBody"><div class="plugin-name">arcade</div><code><span class="field-name">collideBodyVsBody</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for collision between two bodies and separates them if colliding. If you don't require separation then use `overlap` instead.



| Name | Type | Default |
|------|------|---------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if a collision occurred otherwise false. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideGroupVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideGroupVsGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideGroupVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `group2` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">collideGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideBodyVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideBodyVsGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | |
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sort"><div class="plugin-name">arcade</div><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/SortDirection/" class="type-link">SortDirection</a> <span class="operator">=</span> <span class="default-value">SortDirection.INHERIT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method will sort a Groups hash array.

If the Group has `sortDirection` set it will use the sort direction defined.

Otherwise if the sortDirection parameter is undefined, or Group.sortDirection is null, it will use World.sortDirection.

By changing Group.sortDirection you can customise each Group to sort in a different order.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | | The Group to sort.  |
| `sortDirection` | [SortDirection](/api-docs/clay-native/arcade/SortDirection/) | `SortDirection.INHERIT` | The sort direction used to sort this Group. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="intersects"><div class="plugin-name">arcade</div><code><span class="field-name">intersects</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check for intersection against two bodies.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | The first Body object to check.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | The second Body object to check.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if they intersect, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getObjectsAtLocation"><div class="plugin-name">arcade</div><code><span class="field-name">getObjectsAtLocation</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Group/" class="type-link">Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callbackArg</span><span class="operator">:</span> <span class="type-name">getObjectsAtLocation.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getObjectsAtLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given a Group and a location this will check to see which Group children overlap with the coordinates.
Each child will be sent to the given callback for further processing.
Note that the children are not checked for depth order, but simply if they overlap the coordinate or not.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | | The x coordinate to check.  |
| `y` | [Float](/api-docs/clay-native/Float/) | | The y coordinate to check.  |
| `group` | [Group](/api-docs/clay-native/arcade/Group/) | | The Group to check.  |
| `callback` | Function | *(optional)* | A callback function that is called if the object overlaps the coordinates. The callback will be sent two parameters: the callbackArg and the Body that overlapped the location.  |
| `callbackArg` | getObjectsAtLocation.T | *(optional)* | An argument to pass to the callback.  |
| `output` | [Array](/api-docs/clay-native/Array/)<[Body](/api-docs/clay-native/arcade/Body/)> | *(optional)* | An optional array to store the results in.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[Body](/api-docs/clay-native/arcade/Body/)> | An array of the Bodies from the Group that overlapped the coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="moveToDestination"><div class="plugin-name">arcade</div><code><span class="field-name">moveToDestination</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#moveToDestination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Move the given body towards the destination body at a steady velocity.
If you specify a maxTime then it will adjust the speed (overwriting what you set) so it arrives at the destination in that number of seconds.
Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.
Note: The body does not continuously track the target. If the target changes location during transit the body will not modify its course.
Note: The body doesn't stop moving once it reaches the destination coordinates.
Note: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move.  |
| `destination` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move towards. Must have x/y properties.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will move, in pixels per second (default is 60 pixels/sec)  |
| `maxTime` | [Float](/api-docs/clay-native/Float/) | `0` | Time given in milliseconds (1000 = 1 sec). If set the speed is adjusted so the object will arrive at destination in the given number of ms.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle (in radians) that the object should be visually set to in order to match its new velocity. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="moveToXY"><div class="plugin-name">arcade</div><code><span class="field-name">moveToXY</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#moveToXY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Move the given body towards the x/y coordinates at a steady velocity.
If you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.
Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.
Note: The body does not continuously track the target. If the target changes location during transit the body will not modify its course.
Note: The body doesn't stop moving once it reaches the destination coordinates.
Note: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move.  |
| `x` | [Float](/api-docs/clay-native/Float/) | | The x coordinate to move towards.  |
| `y` | [Float](/api-docs/clay-native/Float/) | | The y coordinate to move towards.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will move, in pixels per second (default is 60 pixels/sec)  |
| `maxTime` | [Float](/api-docs/clay-native/Float/) | `0` | Time given in milliseconds (1000 = 1 sec). If set the speed is adjusted so the object will arrive at destination in the given number of ms.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle (in radians) that the object should be visually set to in order to match its new velocity. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="velocityFromAngle"><div class="plugin-name">arcade</div><code><span class="field-name">velocityFromAngle</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#velocityFromAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
One way to use this is: velocityFromAngle(angle, 200, point) which will set the values directly to the point and not create a new Point object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `angle` | [Float](/api-docs/clay-native/Float/) | | The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will move, in pixels per second sq.  |
| `point` | [Point](/api-docs/clay-native/arcade/Point/) | *(optional)* | The Point object in which the x and y properties will be set to the calculated velocity.  |

| Returns | Description |
|---------|-------------|
| [Point](/api-docs/clay-native/arcade/Point/) | A Point where point.x contains the velocity x value and point.y contains the velocity y value. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="velocityFromRotation"><div class="plugin-name">arcade</div><code><span class="field-name">velocityFromRotation</span><span class="parenthesis">(</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#velocityFromRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given the rotation (in radians) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
One way to use this is: velocityFromRotation(rotation, 200, point) which will set the values directly to the point and not create a new Point object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `rotation` | [Float](/api-docs/clay-native/Float/) | | The angle in radians.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will move, in pixels per second sq.  |
| `point` | [Point](/api-docs/clay-native/arcade/Point/) | *(optional)* | The Point object in which the x and y properties will be set to the calculated velocity.  |

| Returns | Description |
|---------|-------------|
| [Point](/api-docs/clay-native/arcade/Point/) | A Point where point.x contains the velocity x value and point.y contains the velocity y value. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="accelerationFromRotation"><div class="plugin-name">arcade</div><code><span class="field-name">accelerationFromRotation</span><span class="parenthesis">(</span><span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#accelerationFromRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.
One way to use this is: accelerationFromRotation(rotation, 200, point) which will set the values directly to the point and not create a new Point object.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `rotation` | [Float](/api-docs/clay-native/Float/) | | The angle in radians.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will move, in pixels per second sq.  |
| `point` | [Point](/api-docs/clay-native/arcade/Point/) | *(optional)* | The Point object in which the x and y properties will be set to the calculated acceleration.  |

| Returns | Description |
|---------|-------------|
| [Point](/api-docs/clay-native/arcade/Point/) | A Point where point.x contains the acceleration x value and point.y contains the acceleration y value. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="accelerateToDestination"><div class="plugin-name">arcade</div><code><span class="field-name">accelerateToDestination</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">xSpeedMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1000</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ySpeedMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1000</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerateToDestination"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the acceleration.x/y property on the body so it will move towards the target at the given speed (in pixels per second sq.)
You must give a maximum speed value, beyond which the body won't go any faster.
Note: The body does not continuously track the target. If the target changes location during transit the body will not modify its course.
Note: The body doesn't stop moving once it reaches the destination coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move.  |
| `destination` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move towards. Must have x/y properties.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will accelerate in pixels per second.  |
| `xSpeedMax` | [Float](/api-docs/clay-native/Float/) | `1000` | The maximum x velocity the body can reach.  |
| `ySpeedMax` | [Float](/api-docs/clay-native/Float/) | `1000` | The maximum y velocity the body can reach.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle (in radians) that the object should be visually set to in order to match its new trajectory. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="accelerateToXY"><div class="plugin-name">arcade</div><code><span class="field-name">accelerateToXY</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">xSpeedMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1000</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ySpeedMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1000</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerateToXY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the acceleration.x/y property on the body so it will move towards the x/y coordinates at the given speed (in pixels per second sq.)
You must give a maximum speed value, beyond which the body won't go any faster.
Note: The body does not continuously track the target. If the target changes location during transit the body will not modify its course.
Note: The body doesn't stop moving once it reaches the destination coordinates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | | The body to move.  |
| `x` | [Float](/api-docs/clay-native/Float/) | | The x coordinate to accelerate towards.  |
| `y` | [Float](/api-docs/clay-native/Float/) | | The y coordinate to accelerate towards.  |
| `speed` | [Float](/api-docs/clay-native/Float/) | `60` | The speed it will accelerate in pixels per second.  |
| `xSpeedMax` | [Float](/api-docs/clay-native/Float/) | `1000` | The maximum x velocity the body can reach.  |
| `ySpeedMax` | [Float](/api-docs/clay-native/Float/) | `1000` | The maximum y velocity the body can reach.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle (in radians) that the object should be visually set to in order to match its new trajectory. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="distanceBetween"><div class="plugin-name">arcade</div><code><span class="field-name">distanceBetween</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useCenter</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceBetween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the distance between two bodies.

If objects aren't nested or they share a parent's offset, you can calculate the distance between their
centers with the `useCenter` argument.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `source` | [Body](/api-docs/clay-native/arcade/Body/) | | The Body to test from.  |
| `target` | [Body](/api-docs/clay-native/arcade/Body/) | | The Body to test to.  |
| `useCenter` | [Bool](/api-docs/clay-native/Bool/) | `false` | Calculate the distance using the centerX and centerY coordinates.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The distance between the source and target objects. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="distanceToXY"><div class="plugin-name">arcade</div><code><span class="field-name">distanceToXY</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceToXY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the distance between a body and the given x/y coordinates.
The calculation is made from the body's x/y coordinate. This may be the top-left.
If you need to calculate from the center of a body instead use `distanceBetween` with the `useCenter` argument.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test from.  |
| `x` | [Float](/api-docs/clay-native/Float/) | The x coordinate to move towards.  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y coordinate to move towards.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The distance between the object and the x/y coordinates. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="closest"><div class="plugin-name">arcade</div><code><span class="field-name">closest</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">targets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useCenter</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a></code><a class="header-anchor" href="#closest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

From a set of bodies, find the one closest to a source body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `source` | [Body](/api-docs/clay-native/arcade/Body/) | | The Body distances will be measured from.  |
| `targets` | [Array](/api-docs/clay-native/Array/)<[Body](/api-docs/clay-native/arcade/Body/)> | | The Bodies whose distances to the source will be compared.  |
| `world` | [Bool](/api-docs/clay-native/Bool/) | `false` | Calculate the distance using World coordinates (true), or Object coordinates (false, the default). If `useCenter` is true, this value is ignored.  |
| `useCenter` | [Bool](/api-docs/clay-native/Bool/) | `false` | Calculate the distance using the centerX and centerY coordinates. If true, this value overrides the `world` argument.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/clay-native/arcade/Body/) | The first target closest to the origin. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="farthest"><div class="plugin-name">arcade</div><code><span class="field-name">farthest</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">targets</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useCenter</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a></code><a class="header-anchor" href="#farthest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

From a set of bodies, find the one farthest from a source body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `source` | [Body](/api-docs/clay-native/arcade/Body/) | | The Body distances will be measured from.  |
| `targets` | [Array](/api-docs/clay-native/Array/)<[Body](/api-docs/clay-native/arcade/Body/)> | | The Bodies whose distances to the source will be compared.  |
| `useCenter` | [Bool](/api-docs/clay-native/Bool/) | `false` | Calculate the distance using the centerX and centerY coordinates.  |

| Returns | Description |
|---------|-------------|
| [Body](/api-docs/clay-native/arcade/Body/) | The target farthest from the origin. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="angleBetween"><div class="plugin-name">arcade</div><code><span class="field-name">angleBetween</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleBetween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the angle in radians between two bodies.



| Name | Type | Description |
|------|------|-------------|
| `source` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test from.  |
| `target` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test to.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle in radians between the source and target bodies. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="angleBetweenCenters"><div class="plugin-name">arcade</div><code><span class="field-name">angleBetweenCenters</span><span class="parenthesis">(</span><span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleBetweenCenters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the angle in radians between centers of two bodies.



| Name | Type | Description |
|------|------|-------------|
| `source` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test from.  |
| `target` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test to.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle in radians between the source and target bodies. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="angleToXY"><div class="plugin-name">arcade</div><code><span class="field-name">angleToXY</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angleToXY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the angle in radians between a body and the given x/y coordinate.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | The Body to test from.  |
| `x` | [Float](/api-docs/clay-native/Float/) | The x coordinate to get the angle to.  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y coordinate to get the angle to.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The angle in radians between body.x/y to x/y |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">boundsX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `boundsX` | [Float](/api-docs/clay-native/Float/) |
| `boundsY` | [Float](/api-docs/clay-native/Float/) |
| `boundsWidth` | [Float](/api-docs/clay-native/Float/) |
| `boundsHeight` | [Float](/api-docs/clay-native/Float/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="HALF_PI"><div class="plugin-name">arcade</div><code><span class="field-name">HALF_PI</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#HALF_PI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quadTrees"><div class="plugin-name">arcade</div><code><span class="field-name">quadTrees</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/arcade/QuadTree/" class="type-link">QuadTree</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#quadTrees"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The world QuadTree objects.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quadTreePool"><div class="plugin-name">arcade</div><code><span class="field-name">quadTreePool</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/QuadTreePool/" class="type-link">QuadTreePool</a></code><a class="header-anchor" href="#quadTreePool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A shared internal pool used by every QuadTree.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="distance"><div class="plugin-name">arcade</div><code><span class="field-name">distance</span><span class="parenthesis">(</span><span class="arg-name">x1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y1</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">x2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y2</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x1` | [Float](/api-docs/clay-native/Float/) |
| `y1` | [Float](/api-docs/clay-native/Float/) |
| `x2` | [Float](/api-docs/clay-native/Float/) |
| `y2` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clamp"><div class="plugin-name">arcade</div><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-native/Float/) |
| `min` | [Float](/api-docs/clay-native/Float/) |
| `max` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getCollidableType"><div class="plugin-name">arcade</div><code><span class="field-name">getCollidableType</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Collidable/" class="type-link">Collidable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getCollidableType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [Collidable](/api-docs/clay-native/arcade/Collidable/) |

| Returns |
|---------|
| [Class](/api-docs/clay-native/Class/)<[Dynamic](/api-docs/clay-native/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separate"><div class="plugin-name">arcade</div><code><span class="field-name">separate</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The core separation function to separate two physics bodies.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | | The first Body object to separate.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | | The second Body object to separate.  |
| `processCallback` | Function | *(optional)* | A callback function that lets you perform additional checks against the two objects if they overlap. If this function is set then the bodies will only be collided if it returns true.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | | Just run an overlap or a full collision.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Returns true if the bodies collided, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="circleBodyIntersects"><div class="plugin-name">arcade</div><code><span class="field-name">circleBodyIntersects</span><span class="parenthesis">(</span><span class="arg-name">circle</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#circleBodyIntersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks to see if a circular Body intersects with a Rectangular Body.



| Name | Type | Description |
|------|------|-------------|
| `circle` | [Body](/api-docs/clay-native/arcade/Body/) | The Body with `isCircle` set.  |
| `body` | [Body](/api-docs/clay-native/arcade/Body/) | The Body with `isCircle` not set (i.e. uses Rectangle shape)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Returns true if the bodies intersect, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separateCircle"><div class="plugin-name">arcade</div><code><span class="field-name">separateCircle</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separateCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The core separation function to separate two circular physics bodies.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | The first Body to separate. Must have `Body.isCircle` true and a positive `radius`.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | The second Body to separate. Must have `Body.isCircle` true and a positive `radius`.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Returns true if the bodies were separated or overlap, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getOverlapX"><div class="plugin-name">arcade</div><code><span class="field-name">getOverlapX</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getOverlapX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the horizontal overlap between two Bodies and sets their properties accordingly, including:
`touchingLeft`, `touchingRight` and `overlapX`.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | | The first Body to separate.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | | The second Body to separate.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | Is this an overlap only check, or part of separation?  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Returns the amount of horizontal overlap between the two bodies. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getOverlapY"><div class="plugin-name">arcade</div><code><span class="field-name">getOverlapY</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getOverlapY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the vertical overlap between two Bodies and sets their properties accordingly, including:
`touchingUp`, `touchingDown` and `overlapY`.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | | The first Body to separate.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | | The second Body to separate.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | `false` | Is this an overlap only check, or part of separation?  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Returns the amount of vertical overlap between the two bodies. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separateX"><div class="plugin-name">arcade</div><code><span class="field-name">separateX</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The core separation function to separate two physics bodies on the x axis.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | The first Body to separate.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | The second Body to separate.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Returns true if the bodies were separated or overlap, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separateY"><div class="plugin-name">arcade</div><code><span class="field-name">separateY</span><span class="parenthesis">(</span><span class="arg-name">body1</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">body2</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">Body</a><span class="operator">,</span> <span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The core separation function to separate two physics bodies on the y axis.



| Name | Type | Description |
|------|------|-------------|
| `body1` | [Body](/api-docs/clay-native/arcade/Body/) | The first Body to separate.  |
| `body2` | [Body](/api-docs/clay-native/arcade/Body/) | The second Body to separate.  |
| `overlapOnly` | [Bool](/api-docs/clay-native/Bool/) | If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | Returns true if the bodies were separated or overlap, otherwise false. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">arcade</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |


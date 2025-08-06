---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: ArcadeWorld
target: Unity
permalink: api-docs/unity/ceramic/ArcadeWorld/
---

# ArcadeWorld

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/ArcadeWorld.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/arcade/World/">arcade.World</a> → <strong>ceramic.ArcadeWorld</strong> (Class)</div>

Extended physics world that integrates Arcade physics with Ceramic's visual system.

This class extends the base arcade.World to provide seamless collision detection
between Ceramic visuals, groups, bodies, and tilemaps. It handles the complex
type resolution needed to make different Ceramic object types work with the
physics engine.

Key features:
- Automatic type detection for Visual, Group, Body, and Tilemap objects
- Optimized collision detection with quadtree spatial partitioning
- Support for both overlap (trigger) and collide (solid) interactions
- Integration with tilemap plugin for tile-based collisions
- Specialized sorting algorithms for broad-phase optimization

Usage example:
```haxe
var world = arcade.world;
world.gravity.y = 800;

// Collide two visuals
world.collide(player, enemy, (body1, body2) -> {
    trace("Player hit enemy!");
});

// Check overlaps with a group
world.overlap(player, collectibles, (body1, body2) -> {
    // Collect the item
});
```

<div class="see"><strong>See:</strong> arcade.World for base physics world functionality, ArcadeSystem for the system that manages worlds</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="overlap"><div class="plugin-name">arcade</div><code><span class="field-name">overlap</span><span class="parenthesis">(</span><span class="arg-name">element1</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Collidable/" class="type-link">arcade.Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">element2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Collidable/" class="type-link">arcade.Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for overlaps between collidable elements without separating them.

Overlaps are useful for triggers, collectibles, and other non-solid interactions.
The overlap callback is called for each pair of overlapping bodies.

Supports all combinations of:
- Visual vs Visual
- Visual/Body vs Group
- Group vs Group
- Any vs Tilemap/TilemapLayer (with tilemap plugin)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `element1` | [arcade.Collidable](/api-docs/unity/arcade/Collidable/) | | First element to check  |
| `element2` | [arcade.Collidable](/api-docs/unity/arcade/Collidable/) | *(optional)* | Second element to check (or null to check element1 against itself)  |
| `overlapCallback` | Function | *(optional)* | Called for each overlapping pair (body1, body2)  |
| `processCallback` | Function | *(optional)* | Optional filter to exclude certain pairs from overlap  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any overlaps occurred |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="overlapGroupVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapGroupVsGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapGroupVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for overlaps between all bodies in two arcade groups.

This optimized implementation uses temporary arrays to avoid modification
during iteration and applies sorting for broad-phase optimization.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `group1` | [arcade.Group](/api-docs/unity/arcade/Group/) | | First group of bodies  |
| `group2` | [arcade.Group](/api-docs/unity/arcade/Group/) | | Second group of bodies  |
| `overlapCallback` | Function | *(optional)* | Called for each overlapping pair  |
| `processCallback` | Function | *(optional)* | Optional filter callback  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any overlaps occurred |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">overlapGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="overlapBodyVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapBodyVsGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for overlaps between a single body and all bodies in a group.

Uses quadtree spatial partitioning for large groups to improve performance.
Only bodies near the target body are checked for overlap.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | | The body to check  |
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | | The group of bodies to check against  |
| `overlapCallback` | Function | *(optional)* | Called for each overlap  |
| `processCallback` | Function | *(optional)* | Optional filter callback  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any overlaps occurred |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapCeramicGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">overlapCeramicGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapCeramicGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapBodyVsCeramicGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapBodyVsCeramicGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsCeramicGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collide"><div class="plugin-name">arcade</div><code><span class="field-name">collide</span><span class="parenthesis">(</span><span class="arg-name">element1</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Collidable/" class="type-link">arcade.Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">element2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Collidable/" class="type-link">arcade.Collidable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for collisions between collidable elements and separates them.

Collisions prevent objects from overlapping by pushing them apart.
The collide callback is called for each pair of colliding bodies after separation.

Supports all combinations of:
- Visual vs Visual
- Visual/Body vs Group
- Group vs Group
- Any vs Tilemap/TilemapLayer (with tilemap plugin)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `element1` | [arcade.Collidable](/api-docs/unity/arcade/Collidable/) | | First element to check  |
| `element2` | [arcade.Collidable](/api-docs/unity/arcade/Collidable/) | *(optional)* | Second element to check (or null to check element1 against itself)  |
| `collideCallback` | Function | *(optional)* | Called for each colliding pair after separation (body1, body2)  |
| `processCallback` | Function | *(optional)* | Optional filter to exclude certain pairs from collision  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any collisions occurred |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideGroupVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideGroupVsGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideGroupVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `group2` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">collideGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideBodyVsGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideBodyVsGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideCeramicGroupVsItself"><div class="plugin-name">arcade</div><code><span class="field-name">collideCeramicGroupVsItself</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideCeramicGroupVsItself"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideBodyVsCeramicGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideBodyVsCeramicGroup</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsCeramicGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sortCeramicGroup"><div class="plugin-name">arcade</div><code><span class="field-name">sortCeramicGroup</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/SortDirection/" class="type-link">arcade.SortDirection</a> <span class="operator">=</span> <span class="default-value">SortDirection.INHERIT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortCeramicGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts a Ceramic visual group for optimized collision detection.

Sorting bodies by position allows the collision system to exit early
when checking pairs, significantly improving performance for large groups.

Uses specialized merge sort implementations optimized for each direction.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | | The group to sort  |
| `sortDirection` | [arcade.SortDirection](/api-docs/unity/arcade/SortDirection/) | `SortDirection.INHERIT` | The direction to sort (or INHERIT to use group/world setting) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">boundsX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">boundsHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ArcadeWorld with the specified bounds.

The world bounds define the area where physics simulation occurs.
Bodies outside these bounds may not collide properly.



| Name | Type | Description |
|------|------|-------------|
| `boundsX` | [Float](/api-docs/unity/Float/) | Left edge of the world  |
| `boundsY` | [Float](/api-docs/unity/Float/) | Top edge of the world  |
| `boundsWidth` | [Float](/api-docs/unity/Float/) | Width of the world  |
| `boundsHeight` | [Float](/api-docs/unity/Float/) | Height of the world |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collideBodyVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">collideBodyVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs collision detection and separation between a body and a tilemap.

Only checks tiles that the body overlaps with for efficiency.
Each colliding tile is treated as a solid immovable body.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | | The physics body to collide  |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | | The tilemap to collide against  |
| `collideCallback` | Function | *(optional)* | Called for each tile collision  |
| `processCallback` | Function | *(optional)* | Optional filter for specific tiles  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any collisions occurred |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapBodyVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapBodyVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideBodyVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">collideBodyVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideBodyVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapBodyVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapBodyVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapBodyVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideCeramicGroupVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">collideCeramicGroupVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideCeramicGroupVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideCeramicGroupVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">collideCeramicGroupVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideCeramicGroupVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideArcadeGroupVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">collideArcadeGroupVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideArcadeGroupVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideArcadeGroupVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">collideArcadeGroupVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideArcadeGroupVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapCeramicGroupVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapCeramicGroupVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapCeramicGroupVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapCeramicGroupVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapCeramicGroupVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapCeramicGroupVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapArcadeGroupVsTilemap"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapArcadeGroupVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapArcadeGroupVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapArcadeGroupVsTilemapLayer"><div class="plugin-name">tilemap</div><code><span class="field-name">overlapArcadeGroupVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapArcadeGroupVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Private Members

<div class="signature field-var has-description has-plugin" id="tileBody"><div class="plugin-name">arcade</div><code><span class="field-name">tileBody</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a></code><a class="header-anchor" href="#tileBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reusable body instance for tilemap collisions.

Instead of creating a new body for each tile collision, we reuse
this single instance for performance. The body is configured as
immovable and its position/size is updated for each tile.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getCollidableType"><div class="plugin-name">arcade</div><code><span class="field-name">getCollidableType</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Collidable/" class="type-link">arcade.Collidable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getCollidableType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines the actual type of a collidable element for proper collision routing.

This method resolves Ceramic's visual types to their base classes so the
collision system can handle them appropriately. For example, all Visual
subclasses (Quad, Mesh, etc.) are treated as Visual for collision purposes.



| Name | Type | Description |
|------|------|-------------|
| `element` | [arcade.Collidable](/api-docs/unity/arcade/Collidable/) | The collidable element to identify  |

| Returns | Description |
|---------|-------------|
| [Class](/api-docs/unity/Class/)<[Dynamic](/api-docs/unity/Dynamic/)> | The base class type for collision handling |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="overlapCeramicGroupVsCeramicGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapCeramicGroupVsCeramicGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapCeramicGroupVsCeramicGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for overlaps between all visuals in two Ceramic groups.

Extracts physics bodies from visuals and performs overlap checks.
Handles null bodies gracefully.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `group1` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | | First group of visuals  |
| `group2` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | | Second group of visuals  |
| `overlapCallback` | Function | *(optional)* | Called for each overlapping pair  |
| `processCallback` | Function | *(optional)* | Optional filter callback  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if any overlaps occurred |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="overlapCeramicGroupVsArcadeGroup"><div class="plugin-name">arcade</div><code><span class="field-name">overlapCeramicGroupVsArcadeGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlapCeramicGroupVsArcadeGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `group2` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `overlapCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideCeramicGroupVsCeramicGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideCeramicGroupVsCeramicGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideCeramicGroupVsCeramicGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `group2` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collideCeramicGroupVsArcadeGroup"><div class="plugin-name">arcade</div><code><span class="field-name">collideCeramicGroupVsArcadeGroup</span><span class="parenthesis">(</span><span class="arg-name">group1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Group/" class="type-link">Group</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">group2</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Group/" class="type-link">arcade.Group</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideCeramicGroupVsArcadeGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `group1` | [Group](/api-docs/unity/ceramic/Group/)<[Visual](/api-docs/unity/ceramic/Visual/)> | |
| `group2` | [arcade.Group](/api-docs/unity/arcade/Group/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="separateBodyVsTilemap"><div class="plugin-name">arcade</div><code><span class="field-name">separateBodyVsTilemap</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">tilemap</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tilemap/" class="type-link">Tilemap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separateBodyVsTilemap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | |
| `tilemap` | [Tilemap](/api-docs/unity/ceramic/Tilemap/) | |
| `collideCallback` | Function | *(optional)* |
| `processCallback` | Function | *(optional)* |
| `overlapOnly` | [Bool](/api-docs/unity/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separateBodyVsTilemapLayer"><div class="plugin-name">arcade</div><code><span class="field-name">separateBodyVsTilemapLayer</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">arcade.Body</a><span class="operator">,</span> <span class="arg-name">layer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TilemapLayer/" class="type-link">TilemapLayer</a><span class="operator">,</span> <span class="arg-name">collideCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">processCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">overlapOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#separateBodyVsTilemapLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Core tilemap collision implementation for a single layer.

This method:
1. Calculates which tiles the body overlaps
2. Creates a temporary immovable body for each solid tile
3. Performs collision/overlap detection
4. Handles special cases like connected tiles and slopes



| Name | Type | Description |
|------|------|-------------|
| `body` | [arcade.Body](/api-docs/unity/arcade/Body/) | The body to check  |
| `layer` | [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | The tilemap layer  |
| `collideCallback` | Function | Called for each collision  |
| `processCallback` | Function | Optional filter  |
| `overlapOnly` | [Bool](/api-docs/unity/Bool/) | If true, only detect overlaps without separation |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


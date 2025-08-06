---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Group
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Group/
---

# Group

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Group.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Group</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/arcade/Collidable/">arcade.Collidable</a></div>

A container for managing collections of entities as a single unit.

Group provides a way to organize and manage multiple entities together, treating
them as a cohesive collection. The group itself is an entity, allowing it to be
part of the entity lifecycle and receive destroy events.

Key features:
- Automatic cleanup: When items are destroyed, they're automatically removed from the group
- Lifecycle management: Destroying the group destroys all contained items
- Type-safe: Generic type parameter ensures all items are of the same entity type
- Global registration: Groups are automatically registered with the app for management
- Arcade physics support: When the arcade plugin is enabled, groups can participate in collision detection

Common use cases:
- Managing collections of game objects (enemies, bullets, pickups)
- Organizing UI elements that should be treated as a unit
- Batch operations on multiple entities
- Collision detection between groups of objects (with arcade plugin)

Example usage:
```haxe
// Create a group for enemies
var enemies = new Group<Enemy>("enemies");

// Add enemies to the group
var enemy = new Enemy();
enemies.add(enemy);

// Check if an enemy is in the group
if (enemies.contains(enemy)) {
    trace("Enemy is in group");
}

// Iterate through all enemies
for (enemy in enemies.items) {
    enemy.update(delta);
}

// Clear all enemies (destroys them)
enemies.clear();
```


## Instance Members

<div class="signature field-var has-description" id="items"><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><span class="type-name">ceramic.Group.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only array of all items currently in this group.

This array provides safe read-only access to the group's contents. Use the
`add()` and `remove()` methods to modify the group's contents.

Example:
```haxe
// Iterate through all items
for (item in group.items) {
    item.doSomething();
}

// Get the number of items
var count = group.items.length;
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">ceramic.Group.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an item to this group.

The item will be automatically removed from the group if it gets destroyed.
Attempting to add an item that's already in the group will log a warning
and the item won't be added again.



| Name | Type | Description |
|------|------|-------------|
| `item` | ceramic.Group.T | The entity to add to this group |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">ceramic.Group.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an item from this group.

This method removes the item from the group's items array and unregisters
the destroy listener. The item itself is not destroyed. Attempting to remove
an item that's not in the group will log a warning.



| Name | Type | Description |
|------|------|-------------|
| `item` | ceramic.Group.T | The entity to remove from this group |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">ceramic.Group.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks whether an item is currently in this group.



| Name | Type | Description |
|------|------|-------------|
| `item` | ceramic.Group.T | The entity to check for  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the item is in the group, `false` otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes and destroys all items in this group.

This method iterates through all items, removes their destroy listeners,
destroys each item, and then clears the items array. It uses a temporary
array from the pool to avoid issues with concurrent modification during
the destroy process.

After calling this method, the group will be empty and all previously
contained entities will be destroyed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys this group and all items it contains.

This method:
1. Calls the parent destroy method
2. Removes the group from the app's group registry
3. Destroys all items in the group via clear()

After destruction, the group should not be used.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Group instance.

The group is automatically registered with the application's group management
system upon creation.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional identifier for the group. Useful for debugging and finding specific groups. |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sortDirection"><div class="plugin-name">arcade</div><code><span class="field-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/clay-web/arcade/SortDirection/" class="type-link">arcade.SortDirection</a></code><a class="header-anchor" href="#sortDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The order items are sorted before using the group to overlap or collide with other collidables.

This property is only available when the arcade physics plugin is enabled and affects
how items within the group are ordered during collision detection. Sorting can improve
collision detection performance and ensure consistent behavior.

Only relevant on groups of visuals when using arcade physics for collision detection.

<div class="see"><strong>See:</strong> arcade.SortDirection For available sorting options</div>


## Private Members

<div class="signature field-method has-description" id="itemDestroyed"><code><span class="field-name">itemDestroyed</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#itemDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal callback triggered when an item in the group is destroyed.
Automatically removes the destroyed item from the group.



| Name | Type | Description |
|------|------|-------------|
| `item` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity that was destroyed |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


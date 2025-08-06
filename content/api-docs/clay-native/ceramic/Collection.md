---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Collection
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Collection/
---

# Collection

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Collection.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Collection</strong> (Abstract)</div>

A type-safe collection for managing CollectionEntry items.

Collection provides an efficient way to store and access items by ID,
with support for:
- Fast lookup by string ID
- Array-like indexing
- Iteration support
- Random element selection
- Collection combining and filtering

Collections are particularly useful for managing game entities that need
to be accessed both by ID and by index.

Example usage:
```haxe
var enemies = new Collection<Enemy>();
enemies.push(new Enemy("goblin1"));
enemies.push(new Enemy("goblin2"));

// Access by ID
var goblin = enemies.get("goblin1");

// Access by index
var firstEnemy = enemies[0];

// Iterate
for (enemy in enemies) {
    enemy.update();
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/CollectionEntry/">CollectionEntry</a>, <a href="/api-docs/clay-native/ceramic/CollectionUtils/">CollectionUtils</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | - |
| `:keepSub` | - |


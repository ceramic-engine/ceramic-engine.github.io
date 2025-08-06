---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: EntityData
target: Unity
permalink: api-docs/unity/ceramic/EntityData/
---

# EntityData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/EntityData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.EntityData</strong> (Class)</div>

Static utilities for managing dynamic data on entities.

EntityData provides a convenient API for attaching and retrieving
arbitrary data on any entity using the DynamicData component system.
This is useful for storing metadata, game state, or configuration
without modifying entity classes.

## Features

- **Automatic Component Management**: Creates DynamicData component as needed
- **Fluent API**: Get or set data in a single call
- **Type Flexible**: Store any data structure
- **Memory Efficient**: Removes component when data is cleared

## Usage Examples

```haxe
// Set data on an entity
var sprite = new Quad();
EntityData.data(sprite, {
    health: 100,
    speed: 5.0,
    inventory: ["sword", "potion"]
});

// Get data from entity
var data = EntityData.data(sprite);
trace(data.health); // 100

// Update existing data
data.health = 80;
data.powerUp = true;

// Remove all data
EntityData.removeData(sprite);
```

## Design Pattern

This utility follows the extension method pattern, providing
functionality that could conceptually be part of Entity but is
kept separate to avoid bloating the core class.

<div class="see"><strong>See:</strong> ceramic.DynamicData For the underlying component, ceramic.Entity#component For direct component access</div>


## Static Members

<div class="signature field-method has-description" id="removeData"><code><span class="field-name">removeData</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the dynamic data component from an entity.

This completely removes the 'data' component if it exists and
is a DynamicData instance. After calling this, the entity will
have no associated dynamic data.



| Name | Type | Description |
|------|------|-------------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) | The entity to remove data from * ```haxe // Clean up entity data EntityData.removeData(myEntity); * // Now returns empty object on next access var data = EntityData.data(myEntity); // {} ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="data"><code><span class="field-name">data</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets or sets dynamic data on an entity.

This method serves dual purposes:
- When called with just an entity, returns existing data (creating if needed)
- When called with entity and data, sets/replaces the data

The data is stored in a DynamicData component with key 'data'.
If no component exists, one is created automatically.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) | | The entity to get/set data on  |
| `data` | [Any](/api-docs/unity/Any/) | *(optional)* | Optional data to set. If provided, replaces existing data. If not provided and no data exists, an empty object {} is created.  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | The entity's dynamic data object * ```haxe // First access creates empty data var data = EntityData.data(player); data.score = 0; data.name = "Player 1"; * // Set complete data object EntityData.data(enemy, { type: "goblin", health: 50, damage: 10 }); * // Get existing data var enemyData = EntityData.data(enemy); trace(enemyData.type); // "goblin" ``` |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


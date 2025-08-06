---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: DynamicData
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/DynamicData/
---

# DynamicData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/DynamicData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.DynamicData</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

A flexible component for attaching arbitrary data to entities.

DynamicData provides a way to associate any type of data with an entity
without modifying the entity's class. This is useful for storing metadata,
configuration, or temporary state that doesn't warrant a dedicated component.

## Features

- **Lazy Initialization**: Data object created only when accessed
- **Type Flexible**: Can store any Dynamic data structure
- **Component Pattern**: Can be attached to any entity
- **Memory Efficient**: No allocation until data is needed

## Usage Examples

```haxe
// Attach custom data to an entity
var sprite = new Quad();
var data = new DynamicData({
    health: 100,
    speed: 5.0,
    name: "Player"
});
sprite.component("dynamicData", data);

// Access data later
var data = sprite.component("dynamicData", DynamicData);
trace(data.data.health); // 100

// Lazy initialization
var emptyData = new DynamicData();
emptyData.data.score = 0; // Creates {} automatically
```

## Common Use Cases

- Game object properties (health, score, inventory)
- UI element configuration
- Temporary animation state
- Debug information
- Plugin-specific data

<div class="see"><strong>See:</strong> ceramic.Component For the component system, ceramic.Entity#component For attaching components</div>


## Instance Members

<div class="signature field-var has-description" id="hasData"><code><span class="field-name">hasData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this component currently has data assigned.
Returns true if data has been set or accessed (triggering lazy init).


<hr class="field-separator" />

<div class="signature field-var has-description" id="data"><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dynamic data stored in this component.

On first access, automatically initializes to an empty object {}
if no data was previously set. This allows for convenient property
assignment without null checks.

```haxe
var dynData = new DynamicData();
dynData.data.score = 100; // Auto-creates {}
dynData.data.name = "Player";

// Or set entire object
dynData.data = {
    x: 100,
    y: 200,
    items: ["sword", "shield"]
};
```

<hr class="field-separator" />

<div class="signature field-var no-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new DynamicData component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `data` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* | Optional initial data to store. If not provided, data will be lazily initialized on first access. * ```haxe // With initial data var data1 = new DynamicData({level: 1, xp: 0}); * // Without initial data (lazy init) var data2 = new DynamicData(); ``` |

## Private Members

<div class="signature field-method has-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this component is bound to an entity.
Currently empty as DynamicData doesn't require special binding logic.

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


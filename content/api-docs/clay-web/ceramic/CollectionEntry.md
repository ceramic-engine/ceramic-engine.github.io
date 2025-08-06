---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: CollectionEntry
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/CollectionEntry/
---

# CollectionEntry

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/CollectionEntry.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionEntry</strong> (Class) → <a href="/api-docs/clay-web/ceramic/ValueEntry/">ValueEntry</a></div>

Base class for entries that can be stored in a Collection.

CollectionEntry provides:
- Automatic unique ID generation
- Runtime index for fast integer-based identification
- Flexible data deserialization from raw data (CSV, JSON, etc.)
- Type conversion for common data types

When creating custom collection entries, extend this class and add
your specific fields. The FieldInfoMacro will automatically generate
type information for proper deserialization.

Example usage:
```haxe
class EnemyEntry extends CollectionEntry {
    public var health:Int = 100;
    public var damage:Float = 10.5;
    public var isFlying:Bool = false;
    public var enemyType:EnemyType; // Enum support
}

// Create from raw data (e.g., from CSV)
var enemy = new EnemyEntry();
enemy.setRawData({
    id: "goblin1",
    health: "50",
    damage: "5.5",
    isFlying: "true",
    enemyType: "GOBLIN"
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Collection/">Collection</a>, <a href="/api-docs/clay-web/ceramic/FieldInfo/">FieldInfo</a></div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this entry.
Auto-generated if not provided in constructor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional human-readable name for this entry.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A unique runtime index for this collection entry instance.

Warning: This index is not persistent and will vary between app runs!
Use it only for fast runtime lookups, never for saving/loading data.
For persistent identification, use the 'id' field instead.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRawData"><code><span class="field-name">setRawData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets entry fields from raw data, with automatic type conversion.

Supports conversion from strings (e.g., CSV data) to:
- Bool: "true"/"false", "yes"/"no", "1"/"0"
- Int: Numeric strings
- Float: Numeric strings (accepts comma as decimal separator)
- Color: Integer color values
- String: Any value (null becomes null)
- Enum: Case-insensitive enum constructor names

Fields marked with @skipEmpty meta will be skipped if the raw value is null or empty.



| Name | Type | Description |
|------|------|-------------|
| `data` | [Dynamic](/api-docs/clay-web/Dynamic/) | Object containing field names and raw values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRawField"><code><span class="field-name">setRawField</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">rawValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setRawField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override this method to handle custom field deserialization.

Return true to skip default type conversion for the field.
Useful for complex types or custom parsing logic.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The field name  |
| `rawValue` | [Dynamic](/api-docs/clay-web/Dynamic/) | The raw value to process  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if field was handled, false to use default conversion |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CollectionEntry.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional unique identifier (auto-generated if not provided)  |
| `name` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional human-readable name |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:keepSub` | - |


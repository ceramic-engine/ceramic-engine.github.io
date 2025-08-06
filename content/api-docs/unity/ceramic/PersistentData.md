---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PersistentData
target: Unity
permalink: api-docs/unity/ceramic/PersistentData/
---

# PersistentData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/PersistentData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.PersistentData</strong> (Class)</div>

Provides a simple key-value storage system for persisting data between application sessions.

PersistentData automatically saves and loads data to platform-specific storage locations,
making it ideal for game saves, user preferences, and other data that needs to survive
app restarts. The data is serialized using Haxe's built-in serialization format.

Storage locations vary by platform:
- Desktop: Application data directory
- Mobile: App-specific storage
- Web: LocalStorage or similar

Example usage:
```haxe
// Create or load persistent storage
var saveData = new PersistentData("game_save");

// Store various data types
saveData.set("playerLevel", 5);
saveData.set("playerName", "Hero");
saveData.set("inventory", ["sword", "shield", "potion"]);
saveData.set("position", {x: 100, y: 200});

// Save to disk
saveData.save();

// Later, retrieve the data
var level = saveData.get("playerLevel"); // 5
var items:Array<String> = saveData.get("inventory");

// Check if data exists
if (saveData.exists("playerName")) {
    trace("Welcome back, " + saveData.get("playerName"));
}
```

Note: The data is stored in a platform-specific location with the prefix "persistent_"
followed by the provided ID. Be mindful of storage limitations on different platforms.

<div class="see"><strong>See:</strong> ceramic.Settings For application-wide settings, ceramic.Files For direct file system access</div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unique identifier for this persistent data storage.
This ID is used as part of the filename when saving/loading data.
Once created, the ID cannot be changed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a value from persistent storage.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The key to look up  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | The stored value, or null if the key doesn't exist |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores a value in persistent storage.

The value can be any serializable type including primitives,
arrays, anonymous objects, and class instances that support
Haxe serialization. Changes are only persisted when save() is called.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The key to store the value under  |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) | The value to store (must be serializable) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a key-value pair from persistent storage.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The key to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all key-value pairs from persistent storage.

This clears the in-memory data but doesn't affect the saved
file until save() is called.

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a key exists in persistent storage.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/unity/String/) | The key to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the key exists, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of all keys in persistent storage.

Useful for iterating over all stored data or checking
what data is available.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | Array of all keys currently in storage |

<hr class="field-separator" />

<div class="signature field-method has-description" id="save"><code><span class="field-name">save</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#save"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saves the current data to persistent storage.

This method must be called to persist any changes made with set(),
remove(), or clear(). The data is serialized and written to a
platform-specific storage location.

Note: Saving is not automatic - you must explicitly call this method
when you want to persist changes. Consider saving at appropriate
points like level completion, settings changes, or app pause/exit.

Example:
```haxe
var save = new PersistentData("player");
save.set("score", 1000);
save.set("level", 5);
save.save(); // Don't forget to save!
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new PersistentData instance with the specified ID.

If data with this ID was previously saved, it will be automatically
loaded from storage. If loading fails (due to corruption or format
changes), a warning is logged and empty storage is initialized.



| Name | Type | Description |
|------|------|-------------|
| `id` | [String](/api-docs/unity/String/) | Unique identifier for this storage. Used as part of the filename (stored as "persistent_[id]"). Should contain only filename-safe characters. |

## Private Members

<div class="signature field-var no-description" id="internalData"><code><span class="field-name">internalData</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#internalData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


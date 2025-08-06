---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: DatabaseAsset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/DatabaseAsset/
---

# DatabaseAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/DatabaseAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a> → <strong>ceramic.DatabaseAsset</strong> (Class)</div>

Asset for loading CSV database files.

DatabaseAsset loads CSV (Comma-Separated Values) files and parses them
into an array of dynamic objects, where each row becomes an object with
properties based on the CSV headers.

Features:
- Automatic CSV parsing with header detection
- Support for both comma and semicolon separators
- Quoted string handling with escape sequences
- Hot-reload support for database files
- Each row accessible as a dynamic object

CSV Format:
- First row must contain column headers (field names)
- Supports comma (,) or semicolon (;) as separators
- String values can be quoted with double quotes
- Use "" to escape quotes within quoted strings

```haxe
// Load a CSV database
var dbAsset = new DatabaseAsset('enemies');
dbAsset.path = 'data/enemies.csv';
dbAsset.onComplete(this, success -> {
    if (success) {
        // Access the parsed data
        for (row in dbAsset.database) {
            trace('Enemy: ${row.get("name")} HP: ${row.get("hp")}');
        }
        // Find specific entries
        var boss = dbAsset.database.find(row -> row.get("type") == "boss");
    }
});
assets.addAsset(dbAsset);
assets.load();
```

Example CSV content:
```csv
name,hp,damage,type
Goblin,10,5,normal
Orc,20,10,normal
"Dragon King",100,50,boss
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a>, <a href="/api-docs/clay-web/ceramic/Csv/">Csv</a></div>


## Instance Members

<div class="signature field-var has-description" id="database"><code><span class="field-name">database</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#database"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parsed database as an array of dynamic objects.
Each object represents a row, with properties matching the CSV headers.
Will be null until the asset is successfully loaded.

Access values using the get() method:
```haxe
var name = row.get("name");
var hp = Std.parseInt(row.get("hp"));
```

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateDatabase"><code><span class="field-name">invalidateDatabase</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDatabase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads the CSV database file from the specified path.

The file is loaded as text and then parsed using the CSV parser.
The parsing automatically detects whether comma or semicolon is used
as the separator based on the first line.

On success, the database property will contain the parsed data.
On failure (file not found or parse error), the asset status becomes BROKEN.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the database asset and clears the loaded data from memory.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-web/String/) | |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="unobservedDatabase"><code><span class="field-name">unobservedDatabase</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedDatabase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDatabaseChange"><code><span class="field-name">emitDatabaseChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDatabaseChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when database field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/clay-web/Array/)<[haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[String](/api-docs/clay-web/String/)>> |
| `previous` | [Array](/api-docs/clay-web/Array/)<[haxe.DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/)<[String](/api-docs/clay-web/String/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when asset files change on disk (hot-reload support).
Automatically reloads the database if its CSV file has been modified.


| Name | Type | Description |
|------|------|-------------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of current files and their modification times  |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> | Map of previous files and their modification times |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


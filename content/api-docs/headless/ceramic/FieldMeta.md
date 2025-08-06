---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FieldMeta
target: Headless
permalink: api-docs/headless/ceramic/FieldMeta/
---

# FieldMeta

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FieldMeta.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.FieldMeta</strong> (Class)</div>

Runtime reflection utility for accessing field metadata.

This class provides methods to query metadata annotations on fields at runtime.
In Haxe, metadata (annotations starting with @) can be attached to fields, methods,
and classes at compile time. This utility leverages Haxe's RTTI (Runtime Type
Information) system to access that metadata at runtime.

The class maintains internal caches for performance and supports both recursive
(including parent classes) and non-recursive metadata lookup.

Common use cases include:
- Checking if a field has specific metadata annotations
- Retrieving metadata values for serialization/deserialization
- Implementing custom binding or validation systems

Example:
```haxe
@serialize
@range(0, 100)
public var health:Float = 100;

// At runtime:
var hasSer = FieldMeta.hasMeta(Player, "health", "serialize"); // true
var meta = FieldMeta.getMeta(Player, "health");
var range = meta.get("range"); // [0, 100]
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/haxe/rtti/Meta/">haxe.rtti.Meta</a></div>


## Static Members

<div class="signature field-method has-description" id="hasMeta"><code><span class="field-name">hasMeta</span><span class="parenthesis">(</span><span class="arg-name">clazz</span><span class="operator">:</span> <a href="/api-docs/headless/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">meta</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasMeta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a field has a specific metadata annotation (class-based overload).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `clazz` | [Class](/api-docs/headless/Class/)<[Dynamic](/api-docs/headless/Dynamic/)> | | The class containing the field  |
| `field` | [String](/api-docs/headless/String/) | | The name of the field to check  |
| `meta` | [String](/api-docs/headless/String/) | | The metadata name to look for  |
| `recursive` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to include parent classes in the search (default: true)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the field has the specified metadata |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMeta"><code><span class="field-name">getMeta</span><span class="parenthesis">(</span><span class="arg-name">clazz</span><span class="operator">:</span> <a href="/api-docs/headless/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getMeta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves all metadata for a field (class-based overload).

Returns a map containing all metadata annotations and their values for the
specified field. The map keys are metadata names and values are the metadata
parameters (if any).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `clazz` | [Class](/api-docs/headless/Class/)<[Dynamic](/api-docs/headless/Dynamic/)> | | The class containing the field  |
| `field` | [String](/api-docs/headless/String/) | | The name of the field to get metadata for  |
| `recursive` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to include parent classes in the search (default: true)  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyMap](/api-docs/headless/ceramic/ReadOnlyMap/)<[String](/api-docs/headless/String/), [Dynamic](/api-docs/headless/Dynamic/)> | A read-only map of metadata names to values, or null if field not found |

## Private Members

<div class="signature field-var has-description" id="metaMap"><code><span class="field-name">metaMap</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#metaMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for non-recursive metadata lookups.
Structure: className -> fieldName -> metaName -> metaValue

<hr class="field-separator" />

<div class="signature field-var has-description" id="metaMapRecursive"><code><span class="field-name">metaMapRecursive</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#metaMapRecursive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for recursive metadata lookups (including parent classes).
Structure: className -> fieldName -> metaName -> metaValue


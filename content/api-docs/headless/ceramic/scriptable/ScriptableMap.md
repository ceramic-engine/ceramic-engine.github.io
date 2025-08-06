---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableMap
target: Headless
permalink: api-docs/headless/ceramic/scriptable/ScriptableMap/
---

# ScriptableMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableMap</strong> (Interface)</div>

Scriptable interface for Map to expose key-value mapping functionality to scripts.

This interface provides a temporary wrapper around Haxe's Map abstract type
until the ExportApi macro can properly extract methods from abstracts.
In scripts, this type is exposed as `Map<K,V>`.

Maps are key-value data structures that allow efficient storage and retrieval
of values based on unique keys. The implementation automatically selects the
most efficient underlying data structure based on the key type.

## Usage in Scripts

```haxe
// Create a string-to-number map
var scores = new Map<String, Int>();

// Add entries
scores.set("Alice", 100);
scores.set("Bob", 85);
scores.set("Charlie", 92);

// Get values
var aliceScore = scores.get("Alice"); // 100
var daveScore = scores.get("Dave");   // null (not found)

// Check existence
if (scores.exists("Bob")) {
    trace("Bob has a score");
}

// Remove entries
scores.remove("Charlie");

// Iterate over keys
for (name in scores.keys()) {
    trace(name + ": " + scores.get(name));
}

// Iterate over values
for (score in scores) {
    trace("Score: " + score);
}

// Clear all entries
scores.clear();
```

## Key Types

Maps support various key types:
- String keys: Most common, good performance
- Int keys: Very fast lookups
- Object keys: Uses object identity for comparison
- Enum keys: Compared by value

<div class="see"><strong>See:</strong> haxe.ds.Map The actual Haxe Map implementation</div>


## Instance Members

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.K</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps `key` to `value`.

If `key` already has a mapping, the previous value disappears.

If `key` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `key` | ceramic.scriptable.ScriptableMap.K |
| `value` | ceramic.scriptable.ScriptableMap.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.V</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current mapping of `key`.

If no such mapping exists, `null` is returned.

Note that a check like `map.get(key) == null` can hold for two reasons:

1. the map has no mapping for `key`
2. the map has a mapping with a value of `null`

If it is important to distinguish these cases, `exists()` should be
used.

If `key` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `key` | ceramic.scriptable.ScriptableMap.K |

| Returns |
|---------|
| ceramic.scriptable.ScriptableMap.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if `key` has a mapping, false otherwise.

If `key` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `key` | ceramic.scriptable.ScriptableMap.K |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.scriptable.ScriptableMap.K</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the mapping of `key` and returns true if such a mapping existed,
false otherwise.

If `key` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `key` | ceramic.scriptable.ScriptableMap.K |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an Iterator over the keys of `this` Map.

The order of keys is undefined.
| Returns |
|---------|
| [Iterator](/api-docs/headless/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an Iterator over the values of `this` Map.

The order of values is undefined.
| Returns |
|---------|
| [Iterator](/api-docs/headless/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyValueIterator"><code><span class="field-name">keyValueIterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/KeyValueIterator/" class="type-link">KeyValueIterator</a></code><a class="header-anchor" href="#keyValueIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an Iterator over the keys and values of `this` Map.

The order of values is undefined.
| Returns |
|---------|
| [KeyValueIterator](/api-docs/headless/KeyValueIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all keys from `this` Map.


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ReadOnlyMap
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ReadOnlyMap/
---

# ReadOnlyMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ReadOnlyMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ReadOnlyMap</strong> (Abstract)</div>

A read-only view of a Map that prevents modification.

ReadOnlyMap is an abstract over a regular Map that only exposes
non-modifying operations. This provides compile-time safety when
passing maps to code that should not modify them.

Note: The underlying Map can still be modified through other references.
Use the `original` property to access the mutable Map at your own risk.

Example usage:
```haxe
var scores = new Map<String, Int>();
scores["player1"] = 100;

// Pass as read-only
function displayScores(scores:ReadOnlyMap<String, Int>) {
    trace(scores["player1"]); // OK
    // scores["player1"] = 200; // Compile error!
}

displayScores(scores);
```


## Type Conversions

**From:**
- `[Map](/api-docs/clay-web/Map/)`

**To:**
- `[Map](/api-docs/clay-web/Map/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | get, exists, keys, toString |


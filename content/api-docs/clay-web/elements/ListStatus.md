---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ListStatus
target: Clay (Web)
permalink: api-docs/clay-web/elements/ListStatus/
---

# ListStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ListStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ListStatus</strong> (Abstract)</div>

Abstract wrapper for tracking list view state changes and item operations.

ListStatus provides a type-safe interface for monitoring changes in a ListView
through a WindowItem. It tracks various state changes like selection changes,
item list modifications, and item operations (trash, lock, unlock, duplicate).

This abstract type implements implicit conversion to Bool, returning true when
any changes have occurred (either selection or items changed).

Features:
- Tracks selection changes
- Monitors item list modifications
- Provides access to lists of items by operation type
- Efficient change detection
- Read-only access to change arrays

Example usage:
```haxe
var status:ListStatus = windowItem;
if (status.selectedChanged) {
    // Handle selection change
}
if (status.itemsChanged) {
    // Handle item list changes
}
var trashedItems = status.trashedItems;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItem/">WindowItem</a>, <a href="/api-docs/clay-web/elements/ListView/">ListView</a></div>


## Type Conversions

**From:**
- `[elements.WindowItem](/api-docs/clay-web/elements/WindowItem/)`

**To:**
- `[Bool](/api-docs/clay-web/Bool/)`


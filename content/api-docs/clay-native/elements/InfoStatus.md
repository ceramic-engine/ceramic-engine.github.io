---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: InfoStatus
target: Clay (Native)
permalink: api-docs/clay-native/elements/InfoStatus/
---

# InfoStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/InfoStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.InfoStatus</strong> (Abstract)</div>

Represents the status of an informational dialog or notification.

This abstract type encodes the dialog's state as an integer:
- `-2`: Dialog was canceled
- `-1`: Dialog is still pending/incomplete
- `0`: Dialog completed successfully
- Other values: Custom status codes

## Usage Example

```haxe
var status = new InfoStatus(-1); // Pending

if (!status.complete) {
    // Dialog still open
}

if (status.canceled) {
    // User canceled the dialog
}

if (status) { // toBool() returns true for value 0
    // Dialog completed successfully
}
```

## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`


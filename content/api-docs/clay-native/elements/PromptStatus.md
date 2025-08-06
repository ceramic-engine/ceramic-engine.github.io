---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: PromptStatus
target: Clay (Native)
permalink: api-docs/clay-native/elements/PromptStatus/
---

# PromptStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/PromptStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.PromptStatus</strong> (Abstract)</div>

Abstract type for tracking the completion status of prompt dialogs.

PromptStatus provides a type-safe way to represent and check the state
of prompt dialogs, including whether they are pending, completed, or canceled.
It uses integer values internally with specific meanings:

- Negative values indicate special states (-1 = pending, -2 = canceled)
- Zero or positive values indicate completion with the chosen button index

The type provides implicit conversion to Bool, returning true when the
prompt is complete (not pending).

Example usage:
```haxe
var status:PromptStatus = -1; // Pending
if (status.complete) {
    // Handle completion
}
if (status.canceled) {
    // Handle cancellation
}
if (status) {
    // Equivalent to status.complete
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/PendingDialog/">PendingDialog</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`


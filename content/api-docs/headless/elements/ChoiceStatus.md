---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ChoiceStatus
target: Headless
permalink: api-docs/headless/elements/ChoiceStatus/
---

# ChoiceStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ChoiceStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ChoiceStatus</strong> (Abstract)</div>

Represents the status of a choice selection with special states.

This abstract type encodes choice selection results as integers:
- Values >= 0: The index of the selected choice
- Value -1: No selection made yet (pending)
- Value -2: Selection was canceled

The type can be implicitly converted to Bool (returns true if a valid choice was made),
making it convenient for checking if a selection was successful.

Example usage:
```haxe
var status:ChoiceStatus = showChoiceDialog();
if (status) { // Implicitly checks if a valid choice was made
    trace("Selected option: " + status.index);
} else if (status.canceled) {
    trace("User canceled the selection");
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/ListStatus/">ListStatus</a>, <a href="/api-docs/headless/elements/ConfirmStatus/">ConfirmStatus</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`


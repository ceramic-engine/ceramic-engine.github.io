---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: CheckStatus
target: Unity
permalink: api-docs/unity/elements/CheckStatus/
---

# CheckStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/CheckStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.CheckStatus</strong> (Abstract)</div>

Represents the status of a checkbox or toggle control with change tracking.

This abstract type efficiently packs both the checked state and whether
the state just changed into a single integer using bit flags:
- Bit 0: Whether the checkbox is checked
- Bit 1: Whether the state changed in the current frame

The type can be implicitly converted to Bool (returns true if changed),
making it convenient for change detection in conditionals.

Example usage:
```haxe
var status:CheckStatus = getCheckboxStatus();
if (status) { // Implicitly checks if changed
    if (status.justChecked) {
        trace("Checkbox was just checked!");
    } else if (status.justUnchecked) {
        trace("Checkbox was just unchecked!");
    }
}
```

## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


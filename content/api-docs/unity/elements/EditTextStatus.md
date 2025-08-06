---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: EditTextStatus
target: Unity
permalink: api-docs/unity/elements/EditTextStatus/
---

# EditTextStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/EditTextStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.EditTextStatus</strong> (Abstract)</div>

Represents the status of text editing operations using bit flags.

This abstract type efficiently encodes multiple boolean states related to
text field interactions. It tracks whether the text has changed, was
submitted (e.g., by pressing Enter), or lost focus (blurred).

The status can be implicitly converted to Bool, returning true if the
text has changed.

Bit layout:
- Bit 0: changed - Text content has been modified
- Bit 1: submitted - User pressed Enter or similar submit action
- Bit 2: blurred - Text field lost focus

Example usage:
```haxe
var status = textField.getStatus();
if (status.changed) {
    saveChanges();
}
if (status.submitted) {
    processSubmission();
}
```

<div class="see"><strong>See:</strong> TextFieldView For text input fields, BaseTextFieldView For autocomplete text fields</div>


## Type Conversions

**From:**
- `[Int](/api-docs/unity/Int/)`

**To:**
- `[Int](/api-docs/unity/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


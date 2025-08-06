---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: LabelPosition
target: Headless
permalink: api-docs/headless/elements/LabelPosition/
---

# LabelPosition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/LabelPosition.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.LabelPosition</strong> (Abstract)</div>

Enumeration defining the position of a label relative to its associated view.

Used by LabeledView and other UI components to control the spatial relationship
between labels and their corresponding input fields or views.

Values:
- LEFT: Label appears to the left of the view
- RIGHT: Label appears to the right of the view

Example usage:
```haxe
var labeledField = new LabeledView(textField);
labeledField.labelPosition = LEFT;  // Label on the left side
labeledField.labelPosition = RIGHT; // Label on the right side
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/LabeledView/">LabeledView</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: RelatedToFieldView
target: Clay (Native)
permalink: api-docs/clay-native/elements/RelatedToFieldView/
---

# RelatedToFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/RelatedToFieldView.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.RelatedToFieldView</strong> (Interface) → <a href="/api-docs/clay-native/elements/ColorPickerView/">ColorPickerView</a></div>

Interface for views that are related to or associated with a FieldView.

This interface allows views to declare their relationship to a specific
FieldView, enabling coordinated behavior, focus management, and event
handling between related UI components.

Common use cases include:
- Buttons or icons that should trigger actions on a related field
- Labels that should focus their associated input field when clicked
- Validation indicators that show the status of a specific field
- Popup menus or dropdowns that are bound to a particular field

Example implementation:
```haxe
class MyButton extends Button implements RelatedToFieldView {
    var field:FieldView;
    public function new(field:FieldView) {
        super();
        this.field = field;
    }
    public function relatedFieldView():FieldView {
        return field;
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/FieldView/">FieldView</a>, <a href="/api-docs/clay-native/elements/LabeledView/">LabeledView</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="relatedFieldView"><div class="plugin-name">elements</div><code><span class="field-name">relatedFieldView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#relatedFieldView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the FieldView that this view is related to.

This method should return the specific FieldView instance that this
view is associated with for coordination of behavior, focus management,
or other interactive features.


| Returns | Description |
|---------|-------------|
| [FieldView](/api-docs/clay-native/elements/FieldView/) | The related FieldView instance |


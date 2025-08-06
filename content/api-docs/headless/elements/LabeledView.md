---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: LabeledView
target: Headless
permalink: api-docs/headless/elements/LabeledView/
---

# LabeledView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/LabeledView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/headless/ceramic/View/">ceramic.View</a> → <a href="/api-docs/headless/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/headless/ceramic/RowLayout/">ceramic.RowLayout</a> → <strong>elements.LabeledView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/tracker/Observable/">tracker.Observable</a></div>

A container that pairs a text label with any view, providing flexible label positioning.

LabeledView creates a horizontal layout containing a text label and a generic view of type T.
The label can be positioned either to the left or right of the view, and the label's
width can be customized. When the label is clicked, it automatically focuses the contained
view if it's a FieldView.

Features:
- Generic type parameter allows any view type
- Configurable label positioning (LEFT or RIGHT)
- Adjustable label width
- Automatic focus delegation from label to view
- Theme integration for consistent styling
- Optional container wrapper for complex layouts
- Automatic disabled state synchronization

Example usage:
```haxe
var textField = new TextFieldView();
var labeledField = new LabeledView(textField);
labeledField.label = "Name:";
labeledField.labelPosition = LEFT;
labeledField.labelWidth = 100;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/LabelPosition/">LabelPosition</a>, <a href="/api-docs/headless/elements/FieldView/">FieldView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this labeled view

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="label"><div class="plugin-name">elements</div><code><span class="field-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text content displayed in the label

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the labeled view is disabled (automatically synced with contained view)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="view"><div class="plugin-name">elements</div><code><span class="field-name">view</span><span class="operator">:</span> <span class="type-name">elements.LabeledView.T</span></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The main view being labeled

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelPosition"><div class="plugin-name">elements</div><code><span class="field-name">labelPosition</span><span class="operator">:</span> <a href="/api-docs/headless/elements/LabelPosition/" class="type-link">LabelPosition</a></code><a class="header-anchor" href="#labelPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The position of the label relative to the view (LEFT or RIGHT)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelWidth"><div class="plugin-name">elements</div><code><span class="field-name">labelWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#labelWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The fixed width of the label (default: 70)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelViewWidth"><div class="plugin-name">elements</div><code><span class="field-name">labelViewWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#labelViewWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Direct access to the label's view width (convenience property)

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLabel"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLabel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <span class="type-name">elements.LabeledView.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useContainer</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new LabeledView instance.

Initializes the layout with a text label and the provided view. Sets up
automatic styling updates, focus delegation, and proper positioning.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `view` | elements.LabeledView.T | | The view to be labeled  |
| `useContainer` | [Bool](/api-docs/headless/Bool/) | `false` | Whether to wrap the view in a container (default: false) |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLabel"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLabel</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="containerView"><div class="plugin-name">elements</div><code><span class="field-name">containerView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/RowLayout/" class="type-link">ceramic.RowLayout</a></code><a class="header-anchor" href="#containerView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional container view for more complex layouts

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="useContainer"><div class="plugin-name">elements</div><code><span class="field-name">useContainer</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use a container wrapper around the main view

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelText"><div class="plugin-name">elements</div><code><span class="field-name">labelText</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#labelText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal TextView instance that displays the label text

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">LabeledView</a><span class="operator">&lt;</span><span class="type-name">elements.LabeledView.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [LabeledView](/api-docs/headless/elements/LabeledView/)<elements.LabeledView.T> |
| `fromSerializedField` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/headless/elements/Theme/) |
| `previous` | [Theme](/api-docs/headless/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLabelChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLabelChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLabelChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when label field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/headless/String/) |
| `previous` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleLabelClick"><div class="plugin-name">elements</div><code><span class="field-name">handleLabelClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleLabelClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles click events on the label text.

When the label is clicked and the view is not disabled,
automatically focuses the contained view if it's a FieldView.
This provides intuitive interaction where clicking the label
activates the associated input field.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateLabel"><div class="plugin-name">elements</div><code><span class="field-name">updateLabel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the label text content.

This method is called automatically when the label property changes
to synchronize the displayed text with the current label value.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">updateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the disabled state by checking the contained view.

Automatically synchronizes the disabled state of this labeled view
with the disabled state of the contained view. If the view has a
'disabled' property that is true, this labeled view becomes disabled.
Uses unobserve/reobserve to prevent observation cycles.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual styling of the label based on theme and state.

Applies the appropriate text color and font from the current theme:
- Uses darkTextColor when disabled, lightTextColor when enabled
- Always uses the medium font from the theme
Falls back to the global context theme if no custom theme is set.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


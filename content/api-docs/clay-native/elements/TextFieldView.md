---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TextFieldView
target: Clay (Native)
permalink: api-docs/clay-native/elements/TextFieldView/
---

# TextFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TextFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-native/elements/FieldView/">FieldView</a> → <a href="/api-docs/clay-native/elements/BaseTextFieldView/">BaseTextFieldView</a> → <strong>elements.TextFieldView</strong> (Class)</div>

A flexible text input field view with support for various input types and validation.

This class extends BaseTextFieldView to provide a complete text field implementation
with support for different input types (text, numeric, file/directory dialogs),
styling options, placeholder text, and various layout configurations.

## Features

- Multiple input types: TEXT, NUMERIC, DIR, FILE
- Placeholder text support
- Multiline text editing
- Text alignment options
- Disabled state handling
- Theme-based styling
- Dialog integration for file/directory selection (when plugin_dialogs is available)

## Input Types

- `TEXT`: Standard text input
- `NUMERIC`: Numeric input with validation
- `DIR`: Directory picker (requires plugin_dialogs)
- `FILE`: File picker (requires plugin_dialogs)

## Usage Examples

```haxe
// Create a basic text field
var textField = new TextFieldView(TEXT);
textField.placeholder = "Enter your name";
textField.textAlign = CENTER;

// Create a numeric field
var numericField = new TextFieldView(NUMERIC);
numericField.placeholder = "Enter a number";

// Create a multiline text area
var textArea = new TextFieldView(TEXT);
textArea.multiline = true;
textArea.placeholder = "Enter description";

#if plugin_dialogs
// Create a directory picker
var dirField = new TextFieldView(DIR("Select Project Directory"));

// Create a file picker
var fileField = new TextFieldView(FILE("Select Image", [
    { name: "Images", extensions: ["png", "jpg", "gif"] }
]));
#end
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/BaseTextFieldView/">BaseTextFieldView</a>, <a href="/api-docs/clay-native/elements/TextFieldKind/">TextFieldKind</a>, <a href="/api-docs/clay-native/elements/Theme/">Theme</a>, <a href="/api-docs/clay-native/elements/InputStyle/">InputStyle</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme used for styling this text field.
If null, the context's default theme will be used.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="multiline"><div class="plugin-name">elements</div><code><span class="field-name">multiline</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this text field supports multiline text input.
When true, the text field will accept and display multiple lines of text.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="placeholder"><div class="plugin-name">elements</div><code><span class="field-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#placeholder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The placeholder text displayed when the field is empty.
This text provides a hint to the user about what to enter.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual style of the input field.
Controls the appearance and rendering style of the text field.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/InputStyle/">InputStyle</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textAlign"><div class="plugin-name">elements</div><code><span class="field-name">textAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#textAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text alignment within the field.
Controls how text is aligned horizontally within the input area.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the text field is disabled.
When disabled, the field cannot be edited or interacted with.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="kind"><div class="plugin-name">elements</div><code><span class="field-name">kind</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of text field, determining its input behavior.
This is set during construction and cannot be changed afterward.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePlaceholder"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePlaceholder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePlaceholder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTextAlign"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTextAlign</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Focuses the text field, making it ready for text input.
If the field is disabled, this method has no effect.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">kind</span><span class="operator">:</span> <span class="type-name">Anonymous</span> <span class="operator">=</span> <span class="default-value">TEXT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new text field view.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | Anonymous | `TEXT` | The type of text field to create (TEXT, NUMERIC, DIR, FILE) |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPlaceholder"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPlaceholder</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedPlaceholder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTextAlign"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTextAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layers"><div class="plugin-name">elements</div><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LayersLayout/" class="type-link">ceramic.LayersLayout</a></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layers layout container for organizing visual elements.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="placeholderView"><div class="plugin-name">elements</div><code><span class="field-name">placeholderView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#placeholderView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text view used to display the placeholder text.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPlaceholderChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPlaceholderChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPlaceholderChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when placeholder field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTextAlignChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTextAlignChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextAlignChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when textAlign field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clipText"><div class="plugin-name">elements</div><code><span class="field-name">clipText</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips the text to fit within the specified dimensions.

@private

| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | The width to clip to  |
| `height` | [Float](/api-docs/clay-native/Float/) | The height to clip to  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleStopEditText"><div class="plugin-name">elements</div><code><span class="field-name">handleStopEditText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleStopEditText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles when text editing stops.
Releases focus if there are no active suggestions.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePlaceholder"><div class="plugin-name">elements</div><code><span class="field-name">updatePlaceholder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePlaceholder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the placeholder display based on current state.
The placeholder is shown when the field is empty and either unfocused or disabled.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the text field based on the current theme and state.
Applies different styling for OVERLAY vs DEFAULT input styles,
and handles disabled and focused states.
@private

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorFieldView
target: Unity
permalink: api-docs/unity/elements/ColorFieldView/
---

# ColorFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/unity/elements/FieldView/">FieldView</a> → <strong>elements.ColorFieldView</strong> (Class)</div>

A color input field with an integrated color picker popup.

This field provides multiple ways to input colors:
- Direct hex color input (#RRGGBB format)
- Visual color preview box that opens a color picker when clicked
- Full-featured color picker with HSB/HSLuv spectrum and sliders

The field validates hex input in real-time and shows a live preview.
The color picker appears as a floating popup positioned intelligently
to stay within screen bounds.

Features:
- Hex color validation with automatic formatting
- Live color preview
- Floating color picker with triangle pointer
- Smart positioning to avoid screen edges
- Keyboard shortcuts (Escape to close, Enter/Space to toggle)
- Theme-aware styling
- Disabled state support

Example usage:
```haxe
var colorField = new ColorFieldView();
colorField.value = Color.BLUE;
colorField.setValue = (field, color) -> {
    myObject.color = color;
};
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/ColorPickerView/">ColorPickerView</a>, <a href="/api-docs/unity/elements/FieldView/">FieldView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme to use for styling. If null, uses the global context theme.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">elements</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current color value.
Updates the hex display and color preview when changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the field is disabled.
Disabled fields cannot be edited and appear dimmed.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setValue"><div class="plugin-name">elements</div><code><span class="field-name">setValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">ColorFieldView</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook function called when the color value changes.
Override this to handle color changes.



| Name | Type | Description |
|------|------|-------------|
| `field` | [ColorFieldView](/api-docs/unity/elements/ColorFieldView/) | The color field that changed  |
| `value` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | The new color value |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePickerVisible"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePickerVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePickerVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Focuses the field and activates text editing.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">elements</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hitsSelfOrDerived"><div class="plugin-name">elements</div><code><span class="field-name">hitsSelfOrDerived</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitsSelfOrDerived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="usesScanCode"><div class="plugin-name">elements</div><code><span class="field-name">usesScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scanCode` | [ceramic.ScanCode](/api-docs/unity/ceramic/ScanCode/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="usesKeyCode"><div class="plugin-name">elements</div><code><span class="field-name">usesKeyCode</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyCode` | [ceramic.KeyCode](/api-docs/unity/ceramic/KeyCode/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ColorFieldView.

Initializes:
- Hex color text input with # prefix
- Color preview box
- Hidden color picker container
- Keyboard shortcuts and event handlers
- Theme-based styling

## Private Members

<div class="signature field-var has-description has-plugin" id="RE_HEX_COLOR"><div class="plugin-name">elements</div><code><span class="field-name">RE_HEX_COLOR</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_HEX_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression to validate complete 6-digit hex color codes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_HEX_COLOR_ANY_LENGTH"><div class="plugin-name">elements</div><code><span class="field-name">RE_HEX_COLOR_ANY_LENGTH</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_HEX_COLOR_ANY_LENGTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression to validate partial hex color input.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedValue</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pickerVisible"><div class="plugin-name">elements</div><code><span class="field-name">pickerVisible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pickerVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the color picker popup is currently visible.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPickerVisible"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPickerVisible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedPickerVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="keyBindings"><div class="plugin-name">elements</div><code><span class="field-name">keyBindings</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/KeyBindings/" class="type-link">ceramic.KeyBindings</a></code><a class="header-anchor" href="#keyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="container"><div class="plugin-name">elements</div><code><span class="field-name">container</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/RowLayout/" class="type-link">ceramic.RowLayout</a></code><a class="header-anchor" href="#container"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textView"><div class="plugin-name">elements</div><code><span class="field-name">textView</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#textView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textPrefixView"><div class="plugin-name">elements</div><code><span class="field-name">textPrefixView</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#textPrefixView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="editText"><div class="plugin-name">elements</div><code><span class="field-name">editText</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/EditText/" class="type-link">ceramic.EditText</a></code><a class="header-anchor" href="#editText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorPreview"><div class="plugin-name">elements</div><code><span class="field-name">colorPreview</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#colorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pickerContainer"><div class="plugin-name">elements</div><code><span class="field-name">pickerContainer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#pickerContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pickerView"><div class="plugin-name">elements</div><code><span class="field-name">pickerView</span><span class="operator">:</span> <a href="/api-docs/unity/elements/ColorPickerView/" class="type-link">ColorPickerView</a></code><a class="header-anchor" href="#pickerView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bubbleTriangle"><div class="plugin-name">elements</div><code><span class="field-name">bubbleTriangle</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BiBorderedTriangle/" class="type-link">BiBorderedTriangle</a></code><a class="header-anchor" href="#bubbleTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bubbleTopBorderLeft"><div class="plugin-name">elements</div><code><span class="field-name">bubbleTopBorderLeft</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#bubbleTopBorderLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bubbleTopBorderRight"><div class="plugin-name">elements</div><code><span class="field-name">bubbleTopBorderRight</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#bubbleTopBorderRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="updatingFromPicker"><div class="plugin-name">elements</div><code><span class="field-name">updatingFromPicker</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#updatingFromPicker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="editingThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">editingThisFrame</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editingThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when value field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPickerVisibleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPickerVisibleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPickerVisibleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when pickerVisible field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus loss by validating and correcting the hex input.
If the input is empty or invalid, resets to the current color value.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layoutContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updatePickerVisibility"><div class="plugin-name">elements</div><code><span class="field-name">updatePickerVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePickerVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updatePickerPosition"><div class="plugin-name">elements</div><code><span class="field-name">updatePickerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePickerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateEditingThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">updateEditingThisFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateEditingThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layoutPickerContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutPickerContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutPickerContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindKeyBindings"><div class="plugin-name">elements</div><code><span class="field-name">bindKeyBindings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromEditText"><div class="plugin-name">elements</div><code><span class="field-name">updateFromEditText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromEditText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Validates and processes hex color input from the text field.
Handles various input formats (#RRGGBB, 0xRRGGBB, RRGGBB).
Updates the color value if valid, otherwise reverts to current value.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/unity/String/) | The input text to validate |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleStopEditText"><div class="plugin-name">elements</div><code><span class="field-name">handleStopEditText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleStopEditText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromValue"><div class="plugin-name">elements</div><code><span class="field-name">updateFromValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the UI elements to reflect the current color value.
Updates the hex text display and color preview box.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="togglePickerVisible"><div class="plugin-name">elements</div><code><span class="field-name">togglePickerVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#togglePickerVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePickerContainer"><div class="plugin-name">elements</div><code><span class="field-name">updatePickerContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePickerContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates or destroys the color picker popup based on visibility state.
Handles picker creation, positioning, and color synchronization.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


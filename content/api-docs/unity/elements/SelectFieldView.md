---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: SelectFieldView
target: Unity
permalink: api-docs/unity/elements/SelectFieldView/
---

# SelectFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/SelectFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/unity/elements/FieldView/">FieldView</a> → <strong>elements.SelectFieldView</strong> (Class)</div>

A dropdown selection field that allows users to choose from a predefined list of options.

SelectFieldView provides a text-based dropdown interface with keyboard navigation support.
It displays the currently selected value and shows a dropdown list when activated. The field
supports null values, keyboard shortcuts, and intelligent positioning of the dropdown list.

Key features:
- Dropdown list with hover and click selection
- Keyboard navigation (Arrow keys, Enter, Space, Escape)
- Support for null values with custom text
- Auto-positioning above/below based on available space
- Focus management and escape handling
- Clipping support for scrollable containers

Usage example:
```haxe
var selectField = new SelectFieldView();
selectField.list = ['Option 1', 'Option 2', 'Option 3'];
selectField.nullValueText = 'Choose an option...';
selectField.value = 'Option 1';
selectField.onValueChange(this, (value, prev) -> {
    trace('Selected: ' + value);
});
add(selectField);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this select field. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">elements</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently selected value. Can be null if no value is selected

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="list"><div class="plugin-name">elements</div><code><span class="field-name">list</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#list"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of available options to choose from

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nullValueText"><div class="plugin-name">elements</div><code><span class="field-name">nullValueText</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#nullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text to display when value is null. If null, empty text is shown

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual style of the field (DEFAULT, OVERLAY, or MINIMAL)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipList"><div class="plugin-name">elements</div><code><span class="field-name">clipList</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clipList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to clip the dropdown list to scrollable container bounds

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setValue"><div class="plugin-name">elements</div><code><span class="field-name">setValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">SelectFieldView</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook called when the field value changes.

Override this function to implement custom behavior when the value is set.
The default implementation does nothing.



| Name | Type | Description |
|------|------|-------------|
| `field` | [SelectFieldView](/api-docs/unity/elements/SelectFieldView/) | The select field instance  |
| `value` | [String](/api-docs/unity/String/) | The new value being set |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateList"><div class="plugin-name">elements</div><code><span class="field-name">invalidateList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateNullValueText"><div class="plugin-name">elements</div><code><span class="field-name">invalidateNullValueText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateNullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateListVisible"><div class="plugin-name">elements</div><code><span class="field-name">invalidateListVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateListVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus events for the field.

Currently delegates to parent focus behavior. Text editing is disabled
for select fields in favor of dropdown selection.

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

Creates a new SelectFieldView.

Sets up the field container, text display, dropdown positioning,
keyboard navigation, and all necessary event handlers.

## Private Members

<div class="signature field-var has-description has-plugin" id="MAX_LIST_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">MAX_LIST_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_LIST_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum height of the dropdown list in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ITEM_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">ITEM_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ITEM_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of each item in the dropdown list

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedValue</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedList"><div class="plugin-name">elements</div><code><span class="field-name">unobservedList</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedNullValueText"><div class="plugin-name">elements</div><code><span class="field-name">unobservedNullValueText</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedNullValueText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listVisible"><div class="plugin-name">elements</div><code><span class="field-name">listVisible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the dropdown list is currently visible

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedListVisible"><div class="plugin-name">elements</div><code><span class="field-name">unobservedListVisible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedListVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="container"><div class="plugin-name">elements</div><code><span class="field-name">container</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/RowLayout/" class="type-link">ceramic.RowLayout</a></code><a class="header-anchor" href="#container"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Container for the field display elements

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textView"><div class="plugin-name">elements</div><code><span class="field-name">textView</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#textView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text view displaying the current selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listView"><div class="plugin-name">elements</div><code><span class="field-name">listView</span><span class="operator">:</span> <a href="/api-docs/unity/elements/SelectListView/" class="type-link">SelectListView</a></code><a class="header-anchor" href="#listView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dropdown list view component

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listContainer"><div class="plugin-name">elements</div><code><span class="field-name">listContainer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#listContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Container for positioning the dropdown list

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tip"><div class="plugin-name">elements</div><code><span class="field-name">tip</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Line/" class="type-link">ceramic.Line</a></code><a class="header-anchor" href="#tip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Arrow/triangle indicator showing dropdown availability

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listIsAbove"><div class="plugin-name">elements</div><code><span class="field-name">listIsAbove</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listIsAbove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the dropdown list is positioned above the field

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="listVisibleThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">listVisibleThisFrame</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listVisibleThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks if list was visible in the current frame for input handling

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when value field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitListChange"><div class="plugin-name">elements</div><code><span class="field-name">emitListChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitListChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when list field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[String](/api-docs/unity/String/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNullValueTextChange"><div class="plugin-name">elements</div><code><span class="field-name">emitNullValueTextChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNullValueTextChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when nullValueText field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitListVisibleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitListVisibleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitListVisibleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when listVisible field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layouts the field container and clips text to fit available space.

Ensures the displayed text doesn't overflow into the dropdown arrow area
by clipping it to the available width minus arrow space.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutListContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutListContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutListContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layouts the dropdown list container.

Sizes the list view to match the field width and calculated height
based on the number of available options.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="listHeight"><div class="plugin-name">elements</div><code><span class="field-name">listHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#listHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the optimal height for the dropdown list.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Height in pixels, limited by MAX_LIST_HEIGHT |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromValue"><div class="plugin-name">elements</div><code><span class="field-name">updateFromValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the displayed text based on the current value.

Shows the selected value or the null value text if no value is selected.
Sanitizes the display text by trimming whitespace and replacing newlines.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateListVisibility"><div class="plugin-name">elements</div><code><span class="field-name">updateListVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateListVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateListPosition"><div class="plugin-name">elements</div><code><span class="field-name">updateListPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateListPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateListVisibleThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">updateListVisibleThisFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateListVisibleThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toggleListVisible"><div class="plugin-name">elements</div><code><span class="field-name">toggleListVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toggleListVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggles the visibility of the dropdown list.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateListContainer"><div class="plugin-name">elements</div><code><span class="field-name">updateListContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateListContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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


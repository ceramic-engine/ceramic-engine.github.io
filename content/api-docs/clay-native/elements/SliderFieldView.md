---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: SliderFieldView
target: Clay (Native)
permalink: api-docs/clay-native/elements/SliderFieldView/
---

# SliderFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/SliderFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-native/elements/FieldView/">FieldView</a> → <a href="/api-docs/clay-native/elements/BaseTextFieldView/">BaseTextFieldView</a> → <strong>elements.SliderFieldView</strong> (Class)</div>

A numeric input field with an integrated slider for intuitive value adjustment.

SliderFieldView combines a text input field with a horizontal slider, allowing users
to either type values directly or drag the slider handle. The component supports
numeric ranges, rounding precision, and can be disabled. The slider provides visual
feedback and makes it easy to explore value ranges.

Key features:
- Text input with numeric validation
- Integrated horizontal slider with draggable handle
- Configurable min/max value ranges
- Precision rounding support
- Keyboard focus and tab navigation
- Optional text input disabling (slider-only mode)
- Visual feedback for hover, focus, and disabled states

Usage example:
```haxe
var slider = new SliderFieldView(0, 100); // min: 0, max: 100
slider.value = 50;
slider.round = 1; // round to integers
slider.enabledTextInput = true;
slider.onValueChange(this, (value, prev) -> {
    trace('Value changed to: ' + value);
});
add(slider);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this slider field. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">elements</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current numeric value of the slider

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="minValue"><div class="plugin-name">elements</div><code><span class="field-name">minValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum allowed value for the slider

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxValue"><div class="plugin-name">elements</div><code><span class="field-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum allowed value for the slider

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enabledTextInput"><div class="plugin-name">elements</div><code><span class="field-name">enabledTextInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabledTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the text input portion is enabled for direct typing

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual style of the field (DEFAULT, OVERLAY, or MINIMAL)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the entire slider field is disabled and non-interactive

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="round"><div class="plugin-name">elements</div><code><span class="field-name">round</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#round"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Precision for value rounding.

- `-1`: No rounding (default)
- `1`: Round to integers
- `10`: Round to tenths (0.1)
- `100`: Round to hundredths (0.01)
- etc.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMinValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMinValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMinValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMaxValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMaxValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMaxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateEnabledTextInput"><div class="plugin-name">elements</div><code><span class="field-name">invalidateEnabledTextInput</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateEnabledTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus events for the slider field.

When the field gains focus, the text input is also focused for immediate editing.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SliderFieldView with the specified value range.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `minValue` | [Float](/api-docs/clay-native/Float/) | `0` | Minimum value for the slider (default: 0)  |
| `maxValue` | [Float](/api-docs/clay-native/Float/) | `1` | Maximum value for the slider (default: 1) |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMinValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMinValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedMinValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMaxValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMaxValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedMaxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedEnabledTextInput"><div class="plugin-name">elements</div><code><span class="field-name">unobservedEnabledTextInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedEnabledTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sliderContainer"><div class="plugin-name">elements</div><code><span class="field-name">sliderContainer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#sliderContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Container view for the slider track and handle

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sliderSquare"><div class="plugin-name">elements</div><code><span class="field-name">sliderSquare</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#sliderSquare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The draggable handle/indicator of the slider

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when value field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMinValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMinValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMinValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when minValue field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMaxValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMaxValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMaxValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when maxValue field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitEnabledTextInputChange"><div class="plugin-name">elements</div><code><span class="field-name">emitEnabledTextInputChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEnabledTextInputChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when enabledTextInput field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

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

<div class="signature field-method no-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clipText"><div class="plugin-name">elements</div><code><span class="field-name">clipText</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips the text display to fit within the available text area.



| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | Available width for text  |
| `height` | [Float](/api-docs/clay-native/Float/) | Available height for text |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutSliderContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutSliderContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutSliderContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions the slider handle based on the current value.

Calculates the handle position as a proportion of the value within the min/max range,
accounting for container padding and handle width.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleStopEditText"><div class="plugin-name">elements</div><code><span class="field-name">handleStopEditText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleStopEditText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateFromValue"><div class="plugin-name">elements</div><code><span class="field-name">updateFromValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyRound"><div class="plugin-name">elements</div><code><span class="field-name">applyRound</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#applyRound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies rounding to a value based on the round precision setting.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/clay-native/Float/) | The value to round  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | The rounded value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleSliderDown"><div class="plugin-name">elements</div><code><span class="field-name">handleSliderDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSliderDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles mouse/touch down events on the slider.

Starts slider interaction, sets initial value, and begins tracking pointer movement.



| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse interaction information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleSliderMove"><div class="plugin-name">elements</div><code><span class="field-name">handleSliderMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSliderMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer movement during slider dragging.

Updates the slider value based on the current pointer position.



| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse interaction information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleSliderUp"><div class="plugin-name">elements</div><code><span class="field-name">handleSliderUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSliderUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer release events, ending slider interaction.

Removes pointer tracking listeners when slider dragging ends.



| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse interaction information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setValueFromSliderX"><div class="plugin-name">elements</div><code><span class="field-name">setValueFromSliderX</span><span class="parenthesis">(</span><span class="arg-name">sliderX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setValueFromSliderX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a horizontal slider position to a value within the min/max range.

Calculates the proportional value based on slider position, applies range limits
and rounding, then updates the field value.



| Name | Type | Description |
|------|------|-------------|
| `sliderX` | [Float](/api-docs/clay-native/Float/) | Horizontal position within the slider container |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


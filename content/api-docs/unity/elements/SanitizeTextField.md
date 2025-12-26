---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: SanitizeTextField
target: Unity
permalink: api-docs/unity/elements/SanitizeTextField/
---

# SanitizeTextField

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/SanitizeTextField.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.SanitizeTextField</strong> (Class)</div>

Advanced text field sanitization utility with mathematical operation support.

SanitizeTextField provides comprehensive text field value sanitization for
numeric inputs with support for mathematical operations, range constraints,
and intelligent formatting. It handles both integer and floating-point
values with configurable precision and validation.

Features:
- Integer and float value sanitization with min/max constraints
- Mathematical expression evaluation (+, -, *, /)
- Configurable rounding and precision control
- Real-time and completion-based formatting
- Automatic value clamping to specified ranges
- Empty value handling with default assignment
- Regex-based input cleaning and validation

Example usage:
```haxe
// Sanitize integer input
SanitizeTextField.setTextValueToInt(field, "123", 0, 1000);

// Sanitize float with math operations
SanitizeTextField.setTextValueToFloat(field, "10+5", 0.0, 100.0, 10, true);

// Handle mathematical expressions
var hasOp = SanitizeTextField.applyFloatOrIntOperationsIfNeeded(
    field, "25*2", 0.0, 1000.0, false, 1
);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/BaseTextFieldView/">BaseTextFieldView</a>, <a href="/api-docs/unity/elements/Sanitize/">Sanitize</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="CLOSURE_CACHE_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">CLOSURE_CACHE_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CLOSURE_CACHE_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the closure cache for performance optimization

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextValueToInt"><div class="plugin-name">elements</div><code><span class="field-name">setTextValueToInt</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">textValue</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextValueToInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sanitizes and sets an integer value to a text field with range validation.

Parses the text input as an integer, validates it within the specified
range, and updates both the field's value and display text. Handles
empty input gracefully by preserving the trimmed text.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to update  |
| `textValue` | [String](/api-docs/unity/String/) | The text input to parse  |
| `minValue` | [Int](/api-docs/unity/Int/) | Minimum allowed integer value  |
| `maxValue` | [Int](/api-docs/unity/Int/) | Maximum allowed integer value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setEmptyToInt"><div class="plugin-name">elements</div><code><span class="field-name">setEmptyToInt</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setEmptyToInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a default integer value when the field is empty.

Assigns a default value of 0 (clamped to the valid range) when
the text field is empty or needs a default value.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to update  |
| `minValue` | [Int](/api-docs/unity/Int/) | Minimum allowed integer value  |
| `maxValue` | [Int](/api-docs/unity/Int/) | Maximum allowed integer value  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The assigned default value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextValueToFloat"><div class="plugin-name">elements</div><code><span class="field-name">setTextValueToFloat</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">textValue</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">round</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">finishing</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextValueToFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sanitizes and sets a float value to a text field with advanced formatting.

Parses the text input as a float with intelligent formatting that preserves
decimal editing state. Supports comma-to-period conversion, range validation,
and configurable rounding. The finishing parameter controls whether to apply
final formatting or preserve the user's editing state.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to update  |
| `textValue` | [String](/api-docs/unity/String/) | The text input to parse  |
| `minValue` | [Float](/api-docs/unity/Float/) | Minimum allowed float value  |
| `maxValue` | [Float](/api-docs/unity/Float/) | Maximum allowed float value  |
| `round` | [Int](/api-docs/unity/Int/) | Rounding factor (1 = integer, >1 = decimal places)  |
| `finishing` | [Bool](/api-docs/unity/Bool/) | Whether to apply final formatting (true) or preserve editing state (false) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setEmptyToFloat"><div class="plugin-name">elements</div><code><span class="field-name">setEmptyToFloat</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">round</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#setEmptyToFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a default float value when the field is empty.

Assigns a default value of 0.0 (clamped to the valid range and rounded
according to the specified precision) when the text field is empty.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to update  |
| `minValue` | [Float](/api-docs/unity/Float/) | Minimum allowed float value  |
| `maxValue` | [Float](/api-docs/unity/Float/) | Maximum allowed float value  |
| `round` | [Int](/api-docs/unity/Int/) | Rounding factor (1 = integer, >1 = decimal places)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The assigned default value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextValueToEmptyFloat"><div class="plugin-name">elements</div><code><span class="field-name">setTextValueToEmptyFloat</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextValueToEmptyFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets a text field to display '0' for empty float values.

Simple utility method to set the text field to display '0' and
trigger a text value invalidation for UI updates.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to reset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyFloatOrIntOperationsIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">applyFloatOrIntOperationsIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/elements/BaseTextFieldView/" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">textValue</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">castToInt</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">round</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#applyFloatOrIntOperationsIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates and applies mathematical operations in text input.

Detects mathematical expressions in the text input (+, -, *, /) and
evaluates them, then applies the result to the field. Supports both
integer and float operations with proper range validation and rounding.

The method looks for operators in the text and attempts to parse the
operands on either side. If the operation is valid, it computes the
result and updates the field. If the operation is invalid but one
operand is valid, it uses that operand as the value.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | The text field to update  |
| `textValue` | [String](/api-docs/unity/String/) | The text input potentially containing math operations  |
| `minValue` | [Float](/api-docs/unity/Float/) | Minimum allowed value  |
| `maxValue` | [Float](/api-docs/unity/Float/) | Maximum allowed value  |
| `castToInt` | [Bool](/api-docs/unity/Bool/) | Whether to treat the result as an integer  |
| `round` | [Int](/api-docs/unity/Int/) | Rounding factor for float values  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | `true` if a mathematical operation was found and processed, `false` otherwise |

## Private Members

<div class="signature field-var has-description has-plugin" id="RE_NUMERIC_PREFIX"><div class="plugin-name">elements</div><code><span class="field-name">RE_NUMERIC_PREFIX</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_NUMERIC_PREFIX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression for matching numeric prefixes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_NON_DIGIT_OR_DOT"><div class="plugin-name">elements</div><code><span class="field-name">RE_NON_DIGIT_OR_DOT</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_NON_DIGIT_OR_DOT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression for matching non-digit and non-dot characters

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_SPACES"><div class="plugin-name">elements</div><code><span class="field-name">RE_SPACES</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_SPACES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression for matching spaces (from TextUtils)

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


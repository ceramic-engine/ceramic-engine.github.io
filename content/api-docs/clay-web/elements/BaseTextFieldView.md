---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: BaseTextFieldView
target: Clay (Web)
permalink: api-docs/clay-web/elements/BaseTextFieldView/
---

# BaseTextFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/BaseTextFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-web/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-web/elements/FieldView/">FieldView</a> → <strong>elements.BaseTextFieldView</strong> (Class) → <a href="/api-docs/clay-web/elements/SliderFieldView/">SliderFieldView</a>, <a href="/api-docs/clay-web/elements/TextFieldView/">TextFieldView</a></div>

Base class for text field UI elements with autocomplete functionality.

Provides a foundation for text input fields with features like:
- Text editing with EditText integration
- Autocomplete suggestions with fuzzy search
- Keyboard navigation for suggestions
- Customizable value submission and validation
- Integration with the field system for UI forms

This is an abstract base class meant to be extended by concrete implementations
like TextFieldView, ColorFieldView, etc.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/TextFieldView/">TextFieldView</a>, <a href="/api-docs/clay-web/elements/ColorFieldView/">ColorFieldView</a>, <a href="/api-docs/clay-web/elements/SelectFieldView/">SelectFieldView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="textValue"><div class="plugin-name">elements</div><code><span class="field-name">textValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#textValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current text value displayed in the field

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autocompleteCandidates"><div class="plugin-name">elements</div><code><span class="field-name">autocompleteCandidates</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#autocompleteCandidates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of autocomplete suggestion candidates.
When set, enables autocomplete functionality with fuzzy search.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autocompleteDelay"><div class="plugin-name">elements</div><code><span class="field-name">autocompleteDelay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#autocompleteDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delay in seconds before showing autocomplete suggestions after typing

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autocompleteMaxResults"><div class="plugin-name">elements</div><code><span class="field-name">autocompleteMaxResults</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#autocompleteMaxResults"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of autocomplete suggestions to display

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autocompleteOnFocus"><div class="plugin-name">elements</div><code><span class="field-name">autocompleteOnFocus</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autocompleteOnFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to show autocomplete suggestions when the field gains focus

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipSuggestions"><div class="plugin-name">elements</div><code><span class="field-name">clipSuggestions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clipSuggestions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to clip suggestions dropdown to scrolling container bounds

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTextValue"><div class="plugin-name">elements</div><code><span class="field-name">setTextValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">textValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook called when the text value changes.
Updates the internal text value and calls setValue.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/clay-web/elements/BaseTextFieldView/) | The field instance (this)  |
| `textValue` | [String](/api-docs/clay-web/String/) | The new text value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setValue"><div class="plugin-name">elements</div><code><span class="field-name">setValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">BaseTextFieldView</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook for setting the underlying value from text.
Override this to convert text to the appropriate data type.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/clay-web/elements/BaseTextFieldView/) | The field instance (this)  |
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) | The value to set (typically string) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setEmptyValue"><div class="plugin-name">elements</div><code><span class="field-name">setEmptyValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">BaseTextFieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEmptyValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook for clearing/resetting the field value.
Override this to handle empty field state.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/clay-web/elements/BaseTextFieldView/) | The field instance (this) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="submit"><div class="plugin-name">elements</div><code><span class="field-name">submit</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">BaseTextFieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook called when the user submits the field (e.g., pressing Enter).
Override this to handle form submission or value confirmation.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BaseTextFieldView](/api-docs/clay-web/elements/BaseTextFieldView/) | The field instance (this) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTextValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTextValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTextValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">elements</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hitsSelfOrDerived"><div class="plugin-name">elements</div><code><span class="field-name">hitsSelfOrDerived</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitsSelfOrDerived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="usesScanCode"><div class="plugin-name">elements</div><code><span class="field-name">usesScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scanCode` | [ceramic.ScanCode](/api-docs/clay-web/ceramic/ScanCode/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="usesKeyCode"><div class="plugin-name">elements</div><code><span class="field-name">usesKeyCode</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyCode` | [ceramic.KeyCode](/api-docs/clay-web/ceramic/KeyCode/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

## Private Members

<div class="signature field-var has-description has-plugin" id="MAX_LIST_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">MAX_LIST_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_LIST_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum height of the autocomplete suggestions dropdown in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="FORCED_SUGGESTION_FULL_LIST_UNDER_COUNT"><div class="plugin-name">elements</div><code><span class="field-name">FORCED_SUGGESTION_FULL_LIST_UNDER_COUNT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FORCED_SUGGESTION_FULL_LIST_UNDER_COUNT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When forcing suggestions display, show all candidates if fewer than this count

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ITEM_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">ITEM_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ITEM_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of each suggestion item in the dropdown

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTextValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTextValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedTextValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="editingThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">editingThisFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editingThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag tracking if text is being edited in the current frame

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="suggestionsVisibleThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsVisibleThisFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#suggestionsVisibleThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag tracking if suggestions are visible in the current frame

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="keyBindings"><div class="plugin-name">elements</div><code><span class="field-name">keyBindings</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/KeyBindings/" class="type-link">ceramic.KeyBindings</a></code><a class="header-anchor" href="#keyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key bindings for text selection and autocomplete shortcuts

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textView"><div class="plugin-name">elements</div><code><span class="field-name">textView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#textView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The TextView component for displaying text

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="editText"><div class="plugin-name">elements</div><code><span class="field-name">editText</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/EditText/" class="type-link">ceramic.EditText</a></code><a class="header-anchor" href="#editText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The EditText component for text input when focused

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="processedAutocompleteCandidates"><div class="plugin-name">elements</div><code><span class="field-name">processedAutocompleteCandidates</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#processedAutocompleteCandidates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Processed candidates with normalized search strings

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="suggestionsView"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsView</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/SelectListView/" class="type-link">SelectListView</a></code><a class="header-anchor" href="#suggestionsView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dropdown list view for showing suggestions

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="suggestionsContainer"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#suggestionsContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Container view for positioning the suggestions dropdown

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="suggestions"><div class="plugin-name">elements</div><code><span class="field-name">suggestions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#suggestions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current filtered list of suggestions to display

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transformTextForCompletion"><div class="plugin-name">elements</div><code><span class="field-name">transformTextForCompletion</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#transformTextForCompletion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms text for autocomplete matching.
Replaces spaces with underscores for better fuzzy matching.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | The text to transform  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The transformed text |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTextValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTextValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when textValue field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleAutocompleteOnFocus"><div class="plugin-name">elements</div><code><span class="field-name">handleAutocompleteOnFocus</span><span class="parenthesis">(</span><span class="arg-name">focused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">prevFocused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleAutocompleteOnFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `focused` | [Bool](/api-docs/clay-web/Bool/) |
| `prevFocused` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cancelAutoComplete"><div class="plugin-name">elements</div><code><span class="field-name">cancelAutoComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancelAutoComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Timer cancellation function for autocomplete delay

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleEditTextSubmit"><div class="plugin-name">elements</div><code><span class="field-name">handleEditTextSubmit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleEditTextSubmit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateFromEditText"><div class="plugin-name">elements</div><code><span class="field-name">updateFromEditText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromEditText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateFromTextValue"><div class="plugin-name">elements</div><code><span class="field-name">updateFromTextValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromTextValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateAutocompleteSuggestions"><div class="plugin-name">elements</div><code><span class="field-name">updateAutocompleteSuggestions</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateAutocompleteSuggestions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the autocomplete suggestions based on current text.
Uses fuzzy search to filter candidates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `force` | [Bool](/api-docs/clay-web/Bool/) | `false` | Whether to force showing suggestions even with empty/full matches |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="suggestionsKeyDown"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#suggestionsKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/clay-web/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="suggestionsValueChange"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsValueChange</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">prevValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#suggestionsValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [String](/api-docs/clay-web/String/) |
| `prevValue` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="suggestionsValueClick"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsValueClick</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#suggestionsValueClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="suggestionDeepScore"><div class="plugin-name">elements</div><code><span class="field-name">suggestionDeepScore</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">query</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#suggestionDeepScore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | [String](/api-docs/clay-web/String/) |
| `query` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layoutSuggestionsContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutSuggestionsContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutSuggestionsContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="suggestionsHeight"><div class="plugin-name">elements</div><code><span class="field-name">suggestionsHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#suggestionsHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateSuggestionsPosition"><div class="plugin-name">elements</div><code><span class="field-name">updateSuggestionsPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSuggestionsPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateThisFrameFlags"><div class="plugin-name">elements</div><code><span class="field-name">updateThisFrameFlags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateThisFrameFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateSuggestionsVisibility"><div class="plugin-name">elements</div><code><span class="field-name">updateSuggestionsVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSuggestionsVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearSuggestions"><div class="plugin-name">elements</div><code><span class="field-name">clearSuggestions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearSuggestions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindKeyBindings"><div class="plugin-name">elements</div><code><span class="field-name">bindKeyBindings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets up keyboard shortcuts for the text field.
- Cmd/Ctrl+A: Select all text
- Cmd/Ctrl+Space: Force show autocomplete suggestions

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new BaseTextFieldView.
Sets up update handlers and autocomplete functionality.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


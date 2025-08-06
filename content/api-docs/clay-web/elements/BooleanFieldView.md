---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: BooleanFieldView
target: Clay (Web)
permalink: api-docs/clay-web/elements/BooleanFieldView/
---

# BooleanFieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/BooleanFieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-web/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-web/elements/FieldView/">FieldView</a> → <strong>elements.BooleanFieldView</strong> (Class)</div>

A toggle switch UI element for boolean (true/false) values.

Displays as a sliding switch that can be toggled between on and off states.
Supports keyboard navigation (Space to toggle, Enter for on, Backspace/Delete for off)
and mouse/touch interaction.

The visual style adapts based on the `inputStyle` property:
- DEFAULT: Standard switch with background
- OVERLAY: Transparent background, suitable for overlays
- MINIMAL: Minimal style with just borders

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/FieldView/">FieldView</a>, <a href="/api-docs/clay-web/elements/InputStyle/">InputStyle</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this field

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="value"><div class="plugin-name">elements</div><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current boolean value (true = on, false = off)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual style of the switch (DEFAULT, OVERLAY, or MINIMAL)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the switch is disabled (non-interactive)

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setValue"><div class="plugin-name">elements</div><code><span class="field-name">setValue</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="#" class="type-link">BooleanFieldView</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hook called when the boolean value changes.
Override this to handle value updates.



| Name | Type | Description |
|------|------|-------------|
| `field` | [BooleanFieldView](/api-docs/clay-web/elements/BooleanFieldView/) | The field instance (this)  |
| `value` | [Bool](/api-docs/clay-web/Bool/) | The new boolean value |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new BooleanFieldView with a toggle switch.
Sets up the visual components and interaction handlers.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="switchContainer"><div class="plugin-name">elements</div><code><span class="field-name">switchContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#switchContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Container view for the switch background

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="switchSquare"><div class="plugin-name">elements</div><code><span class="field-name">switchSquare</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#switchSquare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sliding square indicator within the switch

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-web/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-web/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when value field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutSwitchContainer"><div class="plugin-name">elements</div><code><span class="field-name">layoutSwitchContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutSwitchContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions the switch indicator based on the current value.
Slides to the right when true, left when false.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyDown"><div class="plugin-name">elements</div><code><span class="field-name">handleKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles keyboard input for the switch.
- Space: Toggle value
- Enter: Set to true
- Backspace/Delete: Set to false



| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/clay-web/ceramic/Key/) | The key event |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toggleValue"><div class="plugin-name">elements</div><code><span class="field-name">toggleValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toggleValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggles the boolean value between true and false.
Calls the setValue hook with the new value.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the switch based on theme and state.
Applies different colors and borders for focused, disabled, and value states.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: FieldSystem
target: Clay (Web)
permalink: api-docs/clay-web/elements/FieldSystem/
---

# FieldSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/FieldSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/System/">ceramic.System</a> → <strong>elements.FieldSystem</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

Central system for managing field focus in the Elements UI framework.

FieldSystem tracks which field view currently has focus, handling focus transitions
and notifications. It integrates with Ceramic's visual focus system to determine
when a FieldView or related component gains or loses focus.

The system automatically updates every frame during the early update phase,
checking the currently focused visual and walking up its parent hierarchy to
find any FieldView instances. It also handles RelatedToFieldView components
that should transfer focus to their related field.

Features:
- Automatic focus tracking based on Ceramic's screen focus
- Support for nested field views and related components
- Focus change notifications to field views
- Frame-delayed focus updates for smooth transitions

Usage:
```haxe
// Access the shared instance
var focusedField = FieldSystem.shared.focusedField;

// Listen for focus changes
FieldSystem.shared.onFocusedFieldChange(this, (field, prevField) -> {
    trace('Focus changed from $prevField to $field');
});
```

<div class="see"><strong>See:</strong> FieldView for the base field view implementation, RelatedToFieldView for components that delegate focus</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">elements</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">FieldSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared singleton instance of the FieldSystem.

This instance is lazily created on first access and manages
field focus across the entire application.

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focusedField"><div class="plugin-name">elements</div><code><span class="field-name">focusedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#focusedField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently focused field view.

This property is observable and will trigger change events when
focus moves between fields. It will be null when no field has focus.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focusedFieldThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">focusedFieldThisFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#focusedFieldThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The field that has focus for the current frame.

This property provides a stable reference to the focused field during
a single frame, even if focus changes are pending. It's useful for
avoiding focus flicker during transitions.

@readonly

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocusedField"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocusedField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocusedField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocusedFieldThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocusedFieldThisFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocusedFieldThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFocusedField"><div class="plugin-name">elements</div><code><span class="field-name">updateFocusedField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFocusedField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the currently focused field based on screen focus.

This method:
1. Gets the currently focused visual from the screen
2. Walks up the parent hierarchy looking for FieldView instances
3. Handles RelatedToFieldView components that delegate focus
4. Updates the focused field and notifies any previous field of focus loss

The method temporarily disables observation during the update to prevent
infinite loops from reactive updates.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new FieldSystem instance.

The system is configured to run early in the update cycle (order 50)
to ensure focus state is updated before field views process input.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedFocusedField"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocusedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#unobservedFocusedField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFocusedFieldThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocusedFieldThisFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#unobservedFocusedFieldThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">FieldSystem</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [FieldSystem](/api-docs/clay-web/elements/FieldSystem/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedFieldChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedFieldChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedFieldChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focusedField field changes.

| Name | Type |
|------|------|
| `current` | [FieldView](/api-docs/clay-web/elements/FieldView/) |
| `previous` | [FieldView](/api-docs/clay-web/elements/FieldView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedFieldThisFrameChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedFieldThisFrameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedFieldThisFrameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focusedFieldThisFrame field changes.

| Name | Type |
|------|------|
| `current` | [FieldView](/api-docs/clay-web/elements/FieldView/) |
| `previous` | [FieldView](/api-docs/clay-web/elements/FieldView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleFocusedFieldChange"><div class="plugin-name">elements</div><code><span class="field-name">handleFocusedFieldChange</span><span class="parenthesis">(</span><span class="arg-name">focusedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="operator">,</span> <span class="arg-name">prevFocusedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FieldView/" class="type-link">FieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleFocusedFieldChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus field changes, managing frame-delayed updates.

When focus is gained, the update is immediate. When focus is lost,
the update is delayed until the end of the frame to prevent flicker.



| Name | Type | Description |
|------|------|-------------|
| `focusedField` | [FieldView](/api-docs/clay-web/elements/FieldView/) | The newly focused field (may be null)  |
| `prevFocusedField` | [FieldView](/api-docs/clay-web/elements/FieldView/) | The previously focused field (may be null) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFocusedFieldThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">updateFocusedFieldThisFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFocusedFieldThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the focused field reference for the current frame.

This method is called at the end of the frame when focus is lost,
ensuring smooth transitions without visual artifacts.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="earlyUpdate"><div class="plugin-name">elements</div><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Early update callback that checks for focus changes.

Called every frame before regular updates to ensure focus state
is current when field views process their logic.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last update in seconds |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


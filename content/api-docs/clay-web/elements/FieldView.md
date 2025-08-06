---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: FieldView
target: Clay (Web)
permalink: api-docs/clay-web/elements/FieldView/
---

# FieldView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/FieldView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-web/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <strong>elements.FieldView</strong> (Class) → <a href="/api-docs/clay-web/elements/BaseTextFieldView/">BaseTextFieldView</a>, <a href="/api-docs/clay-web/elements/BooleanFieldView/">BooleanFieldView</a>, <a href="/api-docs/clay-web/elements/ColorFieldView/">ColorFieldView</a>, <a href="/api-docs/clay-web/elements/SelectFieldView/">SelectFieldView</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/elements/TabFocusable/">TabFocusable</a>, <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

Base class for interactive field views in the Elements UI framework.

FieldView provides a foundation for creating focusable input fields that integrate
with the field focus system. It handles:
- Focus management and visual feedback
- Tab navigation support
- Automatic scrolling to ensure visibility when focused
- Integration with the global FieldSystem

Subclasses should override `didLostFocus()` to handle cleanup when focus is lost.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/FieldSystem/">FieldSystem</a>, <a href="/api-docs/clay-web/elements/TabFocusable/">TabFocusable</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focused"><div class="plugin-name">elements</div><code><span class="field-name">focused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#focused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this field currently has focus.

This is a computed property that checks with the global FieldSystem
to determine if this field is the currently focused field.


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowItem"><div class="plugin-name">elements</div><code><span class="field-name">windowItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/WindowItem/" class="type-link">WindowItem</a></code><a class="header-anchor" href="#windowItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this field is managed by a WindowItem, this is the WindowItem.
Used for window-specific field management and coordination.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocused"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives focus to this field.

Sets this field as the screen's focused visual and ensures
it's visible within any containing scrollable area.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="makeVisibleInForm"><div class="plugin-name">elements</div><code><span class="field-name">makeVisibleInForm</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#makeVisibleInForm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures this field is visible within its containing scrollable form.

If the field is inside a ScrollingLayout, this method will automatically
scroll the container to make the field fully visible. The method adds
8 pixels of padding above and below the field for better visual appearance.

If the field is not inside a scrollable container, this method does nothing.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="allowsTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">allowsTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowsTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this field can receive focus through tab navigation.

Fields are focusable by tab unless they have a 'disabled' property set to true.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the field can be focused via tab, `false` if disabled |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tabFocus"><div class="plugin-name">elements</div><code><span class="field-name">tabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives focus to this field via tab navigation.

Called by the tab focus system when this field is selected
through keyboard navigation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="escapeTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">escapeTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#escapeTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes focus from this field when escaping tab navigation.

Called when the user presses Escape to exit tab navigation mode.
Only clears focus if this field currently has focus.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hitsSelfOrDerived"><div class="plugin-name">elements</div><code><span class="field-name">hitsSelfOrDerived</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitsSelfOrDerived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests if the given coordinates hit this field.

Used by the tab focus system to determine if a pointer event
occurred within this field's bounds.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | The x coordinate to test  |
| `y` | [Float](/api-docs/clay-web/Float/) | The y coordinate to test  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the coordinates are within this field's bounds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesScanCode"><div class="plugin-name">elements</div><code><span class="field-name">usesScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if this field uses the specified scan code.

Fields consume ESCAPE and ENTER keys when focused to handle
field-specific actions like canceling or confirming input.



| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ceramic.ScanCode](/api-docs/clay-web/ceramic/ScanCode/) | The scan code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if this field uses the scan code when focused |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesKeyCode"><div class="plugin-name">elements</div><code><span class="field-name">usesKeyCode</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if this field uses the specified key code.

Fields consume ESCAPE and ENTER keys when focused to handle
field-specific actions like canceling or confirming input.



| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [ceramic.KeyCode](/api-docs/clay-web/ceramic/KeyCode/) | The key code to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if this field uses the key code when focused |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new FieldView instance.

Initializes the field with:
- Transparent background
- Horizontal layout direction
- Pointer event handling for focus
- Focus change tracking

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedFocused"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focusedThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">focusedThisFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#focusedThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks whether this field had focus during the current frame.
Used for keyboard input handling to prevent key conflicts.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">FieldView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [FieldView](/api-docs/clay-web/elements/FieldView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focused field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleFocusedChange"><div class="plugin-name">elements</div><code><span class="field-name">handleFocusedChange</span><span class="parenthesis">(</span><span class="arg-name">focused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">prevFocused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleFocusedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus state changes.
Updates the focusedThisFrame flag immediately when gaining focus,
and defers the update until end of frame when losing focus.



| Name | Type | Description |
|------|------|-------------|
| `focused` | [Bool](/api-docs/clay-web/Bool/) | The new focus state  |
| `prevFocused` | [Bool](/api-docs/clay-web/Bool/) | The previous focus state |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFocusedThisFrame"><div class="plugin-name">elements</div><code><span class="field-name">updateFocusedThisFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFocusedThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the focusedThisFrame flag at the end of the frame.
Called when the field loses focus to ensure proper state tracking.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScrollingLayout"><div class="plugin-name">elements</div><code><span class="field-name">getScrollingLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/ScrollingLayout/" class="type-link">ScrollingLayout</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getScrollingLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the containing ScrollingLayout by traversing up the visual hierarchy.


| Returns | Description |
|---------|-------------|
| [ScrollingLayout](/api-docs/clay-web/elements/ScrollingLayout/)<[ceramic.View](/api-docs/clay-web/ceramic/View/)> | The parent ScrollingLayout if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="didLostFocus"><div class="plugin-name">elements</div><code><span class="field-name">didLostFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didLostFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this field loses focus.

This method is called by the FieldSystem when focus moves to another field
or when focus is cleared. Subclasses should override this method to perform
any necessary cleanup, such as:
- Hiding virtual keyboards
- Committing pending changes
- Updating visual state

@allow elements.FieldSystem

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindPointerEvents"><div class="plugin-name">elements</div><code><span class="field-name">bindPointerEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindPointerEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets up pointer event handling to make this field focusable.

By binding to the pointer down event, this field becomes eligible
to receive focus when clicked or tapped.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Button
target: Clay (Native)
permalink: api-docs/clay-native/elements/Button/
---

# Button

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Button.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/TextView/">ceramic.TextView</a> → <strong>elements.Button</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/elements/TabFocusable/">TabFocusable</a>, <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

A clickable button UI element with text content.

Extends TextView to display text and adds click interaction, keyboard support,
and visual feedback for hover and pressed states. Supports two visual styles:
- DEFAULT: Standard button with solid background
- OVERLAY: Transparent button suitable for overlays

Features:
- Mouse/touch click support
- Keyboard navigation (Tab to focus, Enter to click)
- Visual feedback for hover, pressed, focused, and disabled states
- Customizable theme integration
- Transform animation when pressed

<div class="see"><strong>See:</strong> TextView, Click, <a href="/api-docs/clay-native/elements/TabFocusable/">TabFocusable</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this button

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowItem"><div class="plugin-name">elements</div><code><span class="field-name">windowItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/WindowItem/" class="type-link">WindowItem</a></code><a class="header-anchor" href="#windowItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this field is managed by a WindowItem, this is the WindowItem.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pressed"><div class="plugin-name">elements</div><code><span class="field-name">pressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the button is currently pressed (mouse/touch down)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual style of the button (DEFAULT or OVERLAY)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enabled"><div class="plugin-name">elements</div><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the button is enabled and can be interacted with

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focused"><div class="plugin-name">elements</div><code><span class="field-name">focused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#focused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed property that returns true if this button has keyboard focus.
Updates automatically when focus changes.


<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateEnabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocused"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHover"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHover</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateEnterPressed"><div class="plugin-name">elements</div><code><span class="field-name">invalidateEnterPressed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateEnterPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives keyboard focus to this button.
The button will respond to keyboard events when focused.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="allowsTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">allowsTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowsTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns whether this button can receive tab focus.
Only enabled buttons can be tab-focused.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if tab focus is allowed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tabFocus"><div class="plugin-name">elements</div><code><span class="field-name">tabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this button receives tab focus.
Gives keyboard focus to the button.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="escapeTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">escapeTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#escapeTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when escape is pressed while this button has focus.
Removes focus from the button.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Button with default styling and interaction handlers.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="click"><div class="plugin-name">elements</div><code><span class="field-name">click</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Click/" class="type-link">ceramic.Click</a></code><a class="header-anchor" href="#click"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Click detection component for mouse/touch interaction

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedEnabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFocused"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hover"><div class="plugin-name">elements</div><code><span class="field-name">hover</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks mouse hover state

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHover"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHover</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enterPressed"><div class="plugin-name">elements</div><code><span class="field-name">enterPressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enterPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks Enter key press state for visual feedback

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedEnterPressed"><div class="plugin-name">elements</div><code><span class="field-name">unobservedEnterPressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedEnterPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Button</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Button](/api-docs/clay-native/elements/Button/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClick"><div class="plugin-name">elements</div><code><span class="field-name">emitClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the button is clicked (via mouse, touch, or Enter key)

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitEnabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitEnabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEnabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when enabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focused field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hover field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitEnterPressedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitEnterPressedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEnterPressedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when enterPressed field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyDown"><div class="plugin-name">elements</div><code><span class="field-name">handleKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles key down events.
Triggers click on Enter key when focused.



| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/clay-native/ceramic/Key/) | The key event |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleKeyUp"><div class="plugin-name">elements</div><code><span class="field-name">handleKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [ceramic.Key](/api-docs/clay-native/ceramic/Key/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the button's visual appearance based on its state.
Applies different styles for hover, pressed, focused, and disabled states.
Includes a subtle transform animation when pressed.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


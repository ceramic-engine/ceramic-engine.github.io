---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Scrollbar
target: Unity
permalink: api-docs/unity/elements/Scrollbar/
---

# Scrollbar

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Scrollbar.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <strong>elements.Scrollbar</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

A basic scrollbar visual component that provides visual feedback for scrollable content.

The Scrollbar displays as a rectangular indicator that changes appearance based on
user interaction (hover, press states). It consists of an inner quad with configurable
insets and responds to pointer events for interactive feedback.

Usage example:
```haxe
var scrollbar = new Scrollbar();
scrollbar.size(12, 100);
scrollbar.inset(1, 1, 1, 1); // top, right, bottom, left
add(scrollbar);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this scrollbar. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHover"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHover</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePressed"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePressed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="inset"><div class="plugin-name">elements</div><code><span class="field-name">inset</span><span class="parenthesis">(</span><span class="arg-name">insetTop</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">insetRight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">insetBottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">insetLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the insets for the inner quad on all sides.



| Name | Type | Description |
|------|------|-------------|
| `insetTop` | [Float](/api-docs/unity/Float/) | Top inset in pixels  |
| `insetRight` | [Float](/api-docs/unity/Float/) | Right inset in pixels  |
| `insetBottom` | [Float](/api-docs/unity/Float/) | Bottom inset in pixels  |
| `insetLeft` | [Float](/api-docs/unity/Float/) | Left inset in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Scrollbar instance.

Sets up the inner quad with default insets, configures pointer event handlers
for hover and press states, and initializes with a default size of 12x12 pixels.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hover"><div class="plugin-name">elements</div><code><span class="field-name">hover</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the mouse pointer is currently hovering over the scrollbar

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHover"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHover</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pressed"><div class="plugin-name">elements</div><code><span class="field-name">pressed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the scrollbar is currently being pressed/clicked

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPressed"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPressed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetLeft"><div class="plugin-name">elements</div><code><span class="field-name">insetLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left inset for the inner quad relative to the scrollbar bounds

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetRight"><div class="plugin-name">elements</div><code><span class="field-name">insetRight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right inset for the inner quad relative to the scrollbar bounds

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetTop"><div class="plugin-name">elements</div><code><span class="field-name">insetTop</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top inset for the inner quad relative to the scrollbar bounds

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetBottom"><div class="plugin-name">elements</div><code><span class="field-name">insetBottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bottom inset for the inner quad relative to the scrollbar bounds

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quad"><div class="plugin-name">elements</div><code><span class="field-name">quad</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#quad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The inner quad that provides the visual appearance of the scrollbar

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Scrollbar</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Scrollbar](/api-docs/unity/elements/Scrollbar/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hover field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPressedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPressedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPressedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when pressed field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the scrollbar based on current state.

Colors the inner quad differently based on pressed/hover states:
- Pressed: Darker color (50% interpolation between background and text)
- Hover: Medium color (25% interpolation)
- Normal: Light background color

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


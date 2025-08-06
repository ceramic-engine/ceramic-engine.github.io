---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Separator
target: Unity
permalink: api-docs/unity/elements/Separator/
---

# Separator

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Separator.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <strong>elements.Separator</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

A horizontal line separator for visually dividing content sections.

Separator renders as a horizontal line positioned in the center of its container,
with customizable thickness. It's commonly used in layouts to create visual
separation between groups of related content.

The separator automatically centers itself vertically within its bounds and
extends the full width of the container.

Usage example:
```haxe
var separator = new Separator();
separator.size(200, 10);
separator.thickness = 2;
add(separator);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this separator. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="thickness"><div class="plugin-name">elements</div><code><span class="field-name">thickness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#thickness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of the separator line in pixels.

Setting this property triggers a layout update to apply the new thickness.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Separator.

Sets up the line quad with transparent background and initializes
automatic style updates based on theme changes.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quad"><div class="plugin-name">elements</div><code><span class="field-name">quad</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#quad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The quad that renders the separator line

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Separator</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Separator](/api-docs/unity/elements/Separator/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions and sizes the separator line.

Centers the line vertically within the container and stretches it
to fill the full width with the specified thickness.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the separator based on the current theme.

Sets the line color using the theme's medium border color.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


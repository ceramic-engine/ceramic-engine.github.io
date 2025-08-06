---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: FormLayout
target: Clay (Native)
permalink: api-docs/clay-native/elements/FormLayout/
---

# FormLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/FormLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/clay-native/ceramic/ColumnLayout/">ceramic.ColumnLayout</a> → <strong>elements.FormLayout</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

A specialized column layout designed for forms in the Elements UI framework.

FormLayout extends ColumnLayout to provide form-specific styling and behavior:
- Automatic background rendering for form sections
- Integrated tab focus navigation
- Theme-aware styling with proper spacing and padding
- Support for custom item backgrounds and window backgrounds

The layout automatically divides the form into three background sections:
- Top background (above first item)
- Individual item backgrounds (optional, between items)
- Bottom background (below last item)

<div class="see"><strong>See:</strong> ColumnLayout, <a href="/api-docs/clay-native/elements/TabFocus/">TabFocus</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme for this form. If null, uses the global context theme.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tabFocus"><div class="plugin-name">elements</div><code><span class="field-name">tabFocus</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TabFocus/" class="type-link">TabFocus</a></code><a class="header-anchor" href="#tabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tab focus component for keyboard navigation within the form.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">elements</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the form layout and all its background components.

Cleans up:
- All item background quads
- Top background quad
- Bottom background quad

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new FormLayout instance.

Initializes the form with:
- Non-transparent background
- Tab focus navigation
- Automatic style and background updates

## Private Members

<div class="signature field-var has-description has-plugin" id="EMPTY_ARRAY"><div class="plugin-name">elements</div><code><span class="field-name">EMPTY_ARRAY</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#EMPTY_ARRAY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Empty array constant used for reflection method calls.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="backgroundTop"><div class="plugin-name">elements</div><code><span class="field-name">backgroundTop</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#backgroundTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background quad for the top section of the form.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="backgrounds"><div class="plugin-name">elements</div><code><span class="field-name">backgrounds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">ceramic.Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backgrounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of background quads for individual form items.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="backgroundBottom"><div class="plugin-name">elements</div><code><span class="field-name">backgroundBottom</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#backgroundBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background quad for the bottom section of the form.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">FormLayout</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [FormLayout](/api-docs/clay-native/elements/FormLayout/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs form layout, positioning all backgrounds and items.

The layout process:
1. Calls parent layout to position items
2. Updates background components
3. Positions top background from top edge to first item
4. Positions item backgrounds centered on each item
5. Positions bottom background from last item to bottom edge

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeBackgrounds"><div class="plugin-name">elements</div><code><span class="field-name">computeBackgrounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeBackgrounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes and updates all background components based on current theme settings.

This method:
- Creates or updates background quads as needed
- Applies theme colors and alpha values
- Respects individual item theme overrides
- Handles items that render their own backgrounds
- Activates/deactivates backgrounds based on theme settings

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the form's visual style based on the current theme.

Applies:
- Background color from theme
- Item spacing for proper form layout
- Padding around form content

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


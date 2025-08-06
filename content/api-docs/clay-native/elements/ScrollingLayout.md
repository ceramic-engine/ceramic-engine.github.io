---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ScrollingLayout
target: Clay (Native)
permalink: api-docs/clay-native/elements/ScrollingLayout/
---

# ScrollingLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ScrollingLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/ScrollView/">ceramic.ScrollView</a> → <strong>elements.ScrollingLayout</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

A scrollable container that wraps a layout view with optional filtering and borders.

ScrollingLayout provides a scrollable viewport for any layout view, with additional
features like density-aware filtering, automatic scrolling bounds management, and
optional view culling for performance optimization.

Key features:
- Generic layout view support (any View subclass)
- Automatic content sizing and scroll bounds
- Optional border rendering
- View culling for large lists (via checkChildrenOfView)
- Platform-specific scroll behavior (touch vs desktop)

Usage example:
```haxe
var layout = new ColumnLayout();
var scrollingLayout = new ScrollingLayout(layout, true); // with borders
scrollingLayout.size(300, 200);
scrollingLayout.checkChildrenOfView = layout; // enable view culling
add(scrollingLayout);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this scrolling layout. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layoutView"><div class="plugin-name">elements</div><code><span class="field-name">layoutView</span><span class="operator">:</span> <span class="type-name">elements.ScrollingLayout.T</span></code><a class="header-anchor" href="#layoutView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The wrapped layout view that provides the scrollable content

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="checkChildrenOfView"><div class="plugin-name">elements</div><code><span class="field-name">checkChildrenOfView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#checkChildrenOfView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional view whose children will be culled when outside the visible area.

When set, children of this view that are completely outside the scroll viewport
will have their visibility set to false for performance optimization. This is
particularly useful for large lists or grids.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density-aware filter for crisp rendering at different screen densities

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">layoutView</span><span class="operator">:</span> <span class="type-name">elements.ScrollingLayout.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">withBorders</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ScrollingLayout wrapping the provided layout view.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `layoutView` | elements.ScrollingLayout.T | | The layout view to make scrollable  |
| `withBorders` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether to add visual borders (top border on content, bottom border on container) |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ScrollingLayout</a><span class="operator">&lt;</span><span class="type-name">elements.ScrollingLayout.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ScrollingLayout](/api-docs/clay-native/elements/ScrollingLayout/)<elements.ScrollingLayout.T> |
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

Performs layout of the scrolling content and manages scroll bounds.

This method:
- Sizes the filter and scroller to match the container
- Computes the layout view size based on scroll direction
- Ensures scroll position stays within valid bounds
- Updates content view size to match layout view

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePostUpdate"><div class="plugin-name">elements</div><code><span class="field-name">handlePostUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePostUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles post-update logic including view culling and density updates.

Updates the filter density for crisp rendering and performs view culling
if checkChildrenOfView is set. Views outside the visible scroll area
are hidden for performance.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time delta since last update |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style based on the current theme.

Currently only updates the border alpha for window-style borders.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerPaletteColorView
target: Clay (Web)
permalink: api-docs/clay-web/elements/ColorPickerPaletteColorView/
---

# ColorPickerPaletteColorView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerPaletteColorView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <strong>elements.ColorPickerPaletteColorView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A single color swatch in a color picker palette.
This view represents an individual color that can be selected, dragged, and dropped
within a color palette interface.

Features:
- Click to select the color
- Long press for additional actions (e.g., delete, edit)
- Drag and drop to reorder colors in the palette
- Visual feedback for press and drag states

The view maintains a square aspect ratio and provides transform-based
visual feedback when pressed or dragged.

@event click Emitted when the color is clicked
@event drop Emitted when the color is dropped after dragging
@event longPress Emitted when the color is long-pressed

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragDrop"><div class="plugin-name">elements</div><code><span class="field-name">dragDrop</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/DragDrop/" class="type-link">DragDrop</a></code><a class="header-anchor" href="#dragDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Drag and drop component for palette reordering

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragging"><div class="plugin-name">elements</div><code><span class="field-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this color swatch is currently being dragged

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorValue"><div class="plugin-name">elements</div><code><span class="field-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#colorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color value represented by this swatch.
Setting this updates the visual appearance.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">ceramic.Color</a> <span class="operator">=</span> <span class="default-value">Color.WHITE</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new palette color swatch.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `colorValue` | [ceramic.Color](/api-docs/clay-web/ceramic/Color/) | `Color.WHITE` | The color to display (default: white) |

## Private Members

<div class="signature field-var has-description has-plugin" id="PALETTE_COLOR_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">PALETTE_COLOR_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PALETTE_COLOR_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard size for palette color swatches in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="click"><div class="plugin-name">elements</div><code><span class="field-name">click</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Click/" class="type-link">ceramic.Click</a></code><a class="header-anchor" href="#click"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Click detection component for color selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="longPress"><div class="plugin-name">elements</div><code><span class="field-name">longPress</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/LongPress/" class="type-link">ceramic.LongPress</a></code><a class="header-anchor" href="#longPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Long press detection for context actions

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerPaletteColorView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClick"><div class="plugin-name">elements</div><code><span class="field-name">emitClick</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerPaletteColorView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

click event

| Name | Type |
|------|------|
| `instance` | [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDrop"><div class="plugin-name">elements</div><code><span class="field-name">emitDrop</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerPaletteColorView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

drop event

| Name | Type |
|------|------|
| `instance` | [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLongPress"><div class="plugin-name">elements</div><code><span class="field-name">emitLongPress</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerPaletteColorView</a><span class="operator">,</span> <span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

longPress event

| Name | Type |
|------|------|
| `instance` | [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) |
| `info` | [ceramic.TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual transform based on interaction state.
- Dragging: follows drag position
- Pressed: slight downward offset
- Normal: no offset

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindDraggingDepth"><div class="plugin-name">elements</div><code><span class="field-name">bindDraggingDepth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindDraggingDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures dragged colors appear above other elements.
Temporarily increases depth during drag operations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">getDraggingVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerPaletteColorView</a></code><a class="header-anchor" href="#getDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides the visual to be dragged (the swatch itself).

| Returns | Description |
|---------|-------------|
| [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) | This color swatch view |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="releaseDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">releaseDraggingVisual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when drag operation ends.
No cleanup needed as the swatch drags itself.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) | The visual that was dragged |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleDraggingChange"><div class="plugin-name">elements</div><code><span class="field-name">handleDraggingChange</span><span class="parenthesis">(</span><span class="arg-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">wasDragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleDraggingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles drag state changes and emits drop event when dragging ends.


| Name | Type | Description |
|------|------|-------------|
| `dragging` | [Bool](/api-docs/clay-web/Bool/) | Current dragging state  |
| `wasDragging` | [Bool](/api-docs/clay-web/Bool/) | Previous dragging state |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">elements</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this color swatch.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String in format "ColorPickerPaletteColorView(#RRGGBB)" |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


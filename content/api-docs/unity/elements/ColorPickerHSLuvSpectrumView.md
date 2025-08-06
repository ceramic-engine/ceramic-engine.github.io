---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerHSLuvSpectrumView
target: Unity
permalink: api-docs/unity/elements/ColorPickerHSLuvSpectrumView/
---

# ColorPickerHSLuvSpectrumView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerHSLuvSpectrumView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <strong>elements.ColorPickerHSLuvSpectrumView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

A vertical spectrum view for HSLuv color selection showing lightness values.
This component displays a gradient from light to dark (top to bottom) for a
specific hue and saturation combination in the HSLuv color space.

The spectrum provides:
- Vertical gradient showing lightness from 100% (top) to 0% (bottom)
- Interactive pointer for selecting lightness values
- Visual feedback with contrasting border colors for visibility

Used in conjunction with ColorPickerHSLuvGradientView to provide complete
HSLuv color selection capabilities.

@event updateHueFromPointer Emitted when lightness is updated via pointer interaction

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movingPointer"><div class="plugin-name">elements</div><code><span class="field-name">movingPointer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Observable flag indicating the pointer is being dragged

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lightness"><div class="plugin-name">elements</div><code><span class="field-name">lightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current lightness value (0-1).
Updates the pointer position when changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hue"><div class="plugin-name">elements</div><code><span class="field-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The hue value in degrees (0-360) used for the spectrum.
Changing this regenerates the gradient colors.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="saturation"><div class="plugin-name">elements</div><code><span class="field-name">saturation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#saturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The saturation value (0-1) used for the spectrum.
Changing this regenerates the gradient colors.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMovingPointer"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMovingPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMovingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new HSLuv spectrum view for lightness selection.
Initializes the gradient mesh and horizontal pointer.

## Private Members

<div class="signature field-var has-description has-plugin" id="PRECISION"><div class="plugin-name">elements</div><code><span class="field-name">PRECISION</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PRECISION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of gradient segments for smooth lightness transitions

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMovingPointer"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMovingPointer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedMovingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spectrum"><div class="plugin-name">elements</div><code><span class="field-name">spectrum</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">ceramic.Mesh</a></code><a class="header-anchor" href="#spectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mesh that renders the lightness gradient

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lightnessPointer"><div class="plugin-name">elements</div><code><span class="field-name">lightnessPointer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Border/" class="type-link">ceramic.Border</a></code><a class="header-anchor" href="#lightnessPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual pointer indicating the current lightness selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spectrumColorsDirty"><div class="plugin-name">elements</div><code><span class="field-name">spectrumColorsDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#spectrumColorsDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag to defer spectrum color updates until next frame

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerHSLuvSpectrumView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ColorPickerHSLuvSpectrumView](/api-docs/unity/elements/ColorPickerHSLuvSpectrumView/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateHueFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">emitUpdateHueFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateHueFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

updateHueFromPointer event

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMovingPointerChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMovingPointerChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMovingPointerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when movingPointer field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initSpectrum"><div class="plugin-name">elements</div><code><span class="field-name">initSpectrum</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initSpectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the spectrum mesh with vertices and indices.
Creates a vertical gradient with the specified precision.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateSpectrumColors"><div class="plugin-name">elements</div><code><span class="field-name">updateSpectrumColors</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSpectrumColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the spectrum mesh colors based on current hue and saturation.
Creates a smooth gradient from light to dark in HSLuv space.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePointerFromLightness"><div class="plugin-name">elements</div><code><span class="field-name">updatePointerFromLightness</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerFromLightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the pointer position based on the current lightness value.
Positions the pointer vertically with light at top, dark at bottom.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles layout updates when the view is resized.
Scales the spectrum mesh and adjusts pointer dimensions.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="colorWithLightness"><div class="plugin-name">elements</div><code><span class="field-name">colorWithLightness</span><span class="parenthesis">(</span><span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AlphaColor/" class="type-link">ceramic.AlphaColor</a></code><a class="header-anchor" href="#colorWithLightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a color with the specified lightness using current hue and saturation.


| Name | Type | Description |
|------|------|-------------|
| `lightness` | [Float](/api-docs/unity/Float/) | The lightness value (0-1)  |

| Returns | Description |
|---------|-------------|
| [ceramic.AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | The resulting color in HSLuv space with full opacity |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerDown"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer down events to begin lightness selection.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerMove"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer move events during lightness selection.
Sets the moving flag and updates the lightness value.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerUp"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer up events to end lightness selection.
Clears the moving flag and finalizes the selection.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateHueFromTouchInfo"><div class="plugin-name">elements</div><code><span class="field-name">updateHueFromTouchInfo</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateHueFromTouchInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the lightness value based on touch/mouse position.
Converts vertical position to lightness (top=1, bottom=0).


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | Touch/mouse information containing screen coordinates |

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


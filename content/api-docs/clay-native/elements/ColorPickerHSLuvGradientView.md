---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerHSLuvGradientView
target: Clay (Native)
permalink: api-docs/clay-native/elements/ColorPickerHSLuvGradientView/
---

# ColorPickerHSLuvGradientView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerHSLuvGradientView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <strong>elements.ColorPickerHSLuvGradientView</strong> (Class)</div>

A color picker gradient view using the HSLuv color space for perceptually uniform color selection.
HSLuv is a human-friendly alternative to HSL that maintains perceptual uniformity across hue
and saturation changes, making color selection more intuitive.

The gradient displays:
- Hue along the horizontal axis (0-360 degrees)
- Saturation along the vertical axis (100% at top, 0% at bottom)
- Lightness controlled externally and applied uniformly

Users can select colors by clicking/dragging on the gradient, with a visual pointer
indicating the current selection. The pointer automatically adjusts its color for
visibility based on the lightness value.

@event updateColorFromPointer Emitted when the color is updated via pointer interaction

## Instance Members

<div class="signature field-var has-description has-plugin" id="colorValue"><div class="plugin-name">elements</div><code><span class="field-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#colorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently selected color value.
Setting this updates the gradient and pointer position.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lightness"><div class="plugin-name">elements</div><code><span class="field-name">lightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The lightness value (0-1) applied uniformly across the gradient.
This is typically controlled by an external spectrum/slider.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateGradientColors"><div class="plugin-name">elements</div><code><span class="field-name">updateGradientColors</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateGradientColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the gradient mesh colors based on the current lightness value.
Regenerates all vertex colors to reflect the HSLuv color space.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `lightness` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Optional new lightness value (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="savePointerPosition"><div class="plugin-name">elements</div><code><span class="field-name">savePointerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#savePointerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saves the current pointer position for later restoration.
Useful when temporarily moving the pointer during spectrum adjustments.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="restorePointerPosition"><div class="plugin-name">elements</div><code><span class="field-name">restorePointerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restorePointerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores the pointer to its previously saved position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSaturationFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">getSaturationFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSaturationFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the saturation value based on the pointer's vertical position.

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Saturation value (0-1), where 1 is at the top |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHueFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">getHueFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getHueFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the hue value based on the pointer's horizontal position.

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Hue value in degrees (0-360) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new HSLuv gradient color picker view.
Initializes the gradient mesh and selection pointer.

## Private Members

<div class="signature field-var has-description has-plugin" id="PRECISION_X"><div class="plugin-name">elements</div><code><span class="field-name">PRECISION_X</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PRECISION_X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of horizontal segments in the gradient mesh for hue precision

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="PRECISION_Y"><div class="plugin-name">elements</div><code><span class="field-name">PRECISION_Y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PRECISION_Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of vertical segments in the gradient mesh for saturation precision

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movingSpectrum"><div class="plugin-name">elements</div><code><span class="field-name">movingSpectrum</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingSpectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag indicating the spectrum (lightness) is being adjusted

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gradient"><div class="plugin-name">elements</div><code><span class="field-name">gradient</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Mesh/" class="type-link">ceramic.Mesh</a></code><a class="header-anchor" href="#gradient"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mesh that renders the HSLuv gradient

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorPointer"><div class="plugin-name">elements</div><code><span class="field-name">colorPointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Border/" class="type-link">ceramic.Border</a></code><a class="header-anchor" href="#colorPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual pointer indicating the current color selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetPointerColor"><div class="plugin-name">elements</div><code><span class="field-name">targetPointerColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#targetPointerColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target color for pointer border animation

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointerColorTween"><div class="plugin-name">elements</div><code><span class="field-name">pointerColorTween</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Tween/" class="type-link">ceramic.Tween</a></code><a class="header-anchor" href="#pointerColorTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween for animating pointer color changes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movingPointer"><div class="plugin-name">elements</div><code><span class="field-name">movingPointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating the pointer is being dragged

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="savedPointerX"><div class="plugin-name">elements</div><code><span class="field-name">savedPointerX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#savedPointerX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saved X position of the pointer for restoration

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="savedPointerY"><div class="plugin-name">elements</div><code><span class="field-name">savedPointerY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#savedPointerY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saved Y position of the pointer for restoration

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter container for the gradient content

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateColorFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">emitUpdateColorFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateColorFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

updateColorFromPointer event

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="colorWithHueAndSaturation"><div class="plugin-name">elements</div><code><span class="field-name">colorWithHueAndSaturation</span><span class="parenthesis">(</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AlphaColor/" class="type-link">ceramic.AlphaColor</a></code><a class="header-anchor" href="#colorWithHueAndSaturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a color with the specified hue and saturation using the current lightness.


| Name | Type | Description |
|------|------|-------------|
| `hue` | [Float](/api-docs/clay-native/Float/) | Hue value in degrees (0-360)  |
| `saturation` | [Float](/api-docs/clay-native/Float/) | Saturation value (0-1)  |

| Returns | Description |
|---------|-------------|
| [ceramic.AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | The resulting color with full opacity |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePointerFromColor"><div class="plugin-name">elements</div><code><span class="field-name">updatePointerFromColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerFromColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the pointer position based on the current color value.
Also adjusts the pointer border color for visibility.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles layout updates when the view is resized.
Scales the gradient mesh and updates pointer position accordingly.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerDown"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer down events to begin color selection.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerMove"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer move events during color selection.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerUp"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer up events to end color selection.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateColorFromTouchInfo"><div class="plugin-name">elements</div><code><span class="field-name">updateColorFromTouchInfo</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateColorFromTouchInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the selected color based on touch/mouse position.
Converts screen coordinates to hue/saturation values and updates the color.


| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | Touch/mouse information containing screen coordinates |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerHSBGradientView
target: Unity
permalink: api-docs/unity/elements/ColorPickerHSBGradientView/
---

# ColorPickerHSBGradientView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerHSBGradientView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <strong>elements.ColorPickerHSBGradientView</strong> (Class)</div>

A gradient color selector for HSB (Hue, Saturation, Brightness) color space.

This view displays a 2D gradient where:
- X-axis represents saturation (0-100%)
- Y-axis represents brightness (100-0%, inverted)
- The gradient is tinted with the current hue

The view features:
- Interactive pointer for selecting saturation and brightness
- Two gradient layers: tint (hue-based) and black overlay
- Smooth pointer color transitions (white on dark areas, black on light)
- Pixel-perfect rendering with nearest neighbor filtering

This component is typically used within ColorPickerView as part of the
HSB color selection interface.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/ColorPickerView/">ColorPickerView</a>, <a href="/api-docs/unity/elements/ColorPickerHSBSpectrumView/">ColorPickerHSBSpectrumView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="colorValue"><div class="plugin-name">elements</div><code><span class="field-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#colorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current color value represented by the gradient.
Setting this updates the gradient tint and pointer position.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hue"><div class="plugin-name">elements</div><code><span class="field-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current hue value (0-360 degrees) used to tint the gradient.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateTintColor"><div class="plugin-name">elements</div><code><span class="field-name">updateTintColor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTintColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the gradient tint based on the current or provided hue.
The tint color is applied to the right side of the gradient.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `hue` | [Float](/api-docs/unity/Float/) | *(optional)* | Optional new hue value (0-360). If not provided, uses current hue. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="savePointerPosition"><div class="plugin-name">elements</div><code><span class="field-name">savePointerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#savePointerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saves the current pointer position for later restoration.
Used when temporarily moving the pointer during spectrum changes.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="restorePointerPosition"><div class="plugin-name">elements</div><code><span class="field-name">restorePointerPosition</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restorePointerPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores the pointer to its previously saved position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBrightnessFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">getBrightnessFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getBrightnessFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the brightness value (0-1) from the pointer's Y position.
Brightness is inverted (top = 100%, bottom = 0%).


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The brightness value clamped between 0 and 1 |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSaturationFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">getSaturationFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getSaturationFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the saturation value (0-1) from the pointer's X position.
Saturation increases from left (0%) to right (100%).


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The saturation value clamped between 0 and 1 |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new HSB gradient view.

Initializes:
- Two gradient meshes (tint and black overlay)
- Interactive color pointer
- Nearest neighbor filtering for crisp rendering
- Pointer event handlers

## Private Members

<div class="signature field-var has-description has-plugin" id="movingSpectrum"><div class="plugin-name">elements</div><code><span class="field-name">movingSpectrum</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingSpectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag indicating if the spectrum is being moved.
Used to coordinate animations with ColorPickerView.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="blackGradient"><div class="plugin-name">elements</div><code><span class="field-name">blackGradient</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">ceramic.Mesh</a></code><a class="header-anchor" href="#blackGradient"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tintGradient"><div class="plugin-name">elements</div><code><span class="field-name">tintGradient</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">ceramic.Mesh</a></code><a class="header-anchor" href="#tintGradient"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorPointer"><div class="plugin-name">elements</div><code><span class="field-name">colorPointer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Border/" class="type-link">ceramic.Border</a></code><a class="header-anchor" href="#colorPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="targetPointerColor"><div class="plugin-name">elements</div><code><span class="field-name">targetPointerColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#targetPointerColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pointerColorTween"><div class="plugin-name">elements</div><code><span class="field-name">pointerColorTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">ceramic.Tween</a></code><a class="header-anchor" href="#pointerColorTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="movingPointer"><div class="plugin-name">elements</div><code><span class="field-name">movingPointer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="savedPointerX"><div class="plugin-name">elements</div><code><span class="field-name">savedPointerX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#savedPointerX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="savedPointerY"><div class="plugin-name">elements</div><code><span class="field-name">savedPointerY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#savedPointerY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateColorFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">emitUpdateColorFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateColorFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the color is updated via pointer interaction.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePointerFromColor"><div class="plugin-name">elements</div><code><span class="field-name">updatePointerFromColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerFromColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the pointer position and color based on the current color value.
Also handles smooth color transitions when the pointer moves between
light and dark areas of the gradient.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerDown"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerMove"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerUp"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateColorFromTouchInfo"><div class="plugin-name">elements</div><code><span class="field-name">updateColorFromTouchInfo</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateColorFromTouchInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the color based on touch/pointer position.
Calculates saturation and brightness from the pointer coordinates
and emits an update event.



| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | Touch information containing pointer coordinates |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


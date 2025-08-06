---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerHSBSpectrumView
target: Clay (Web)
permalink: api-docs/clay-web/elements/ColorPickerHSBSpectrumView/
---

# ColorPickerHSBSpectrumView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerHSBSpectrumView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <strong>elements.ColorPickerHSBSpectrumView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A vertical hue spectrum selector for HSB color space.

This view displays a vertical gradient showing the full color spectrum
from 0° to 360° (red to red through the rainbow). Users can select
a hue by clicking or dragging along the spectrum.

Features:
- Smooth gradient mesh with configurable precision
- Interactive pointer with black/white borders for visibility
- Vertical layout (top = 360°/0° red, bottom = 0°/360° red)
- Observable pointer movement state

The spectrum is rendered as a mesh with multiple colored segments
for smooth color transitions. The precision can be adjusted via
the PRECISION constant.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/ColorPickerView/">ColorPickerView</a>, <a href="/api-docs/clay-web/elements/ColorPickerHSBGradientView/">ColorPickerHSBGradientView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movingPointer"><div class="plugin-name">elements</div><code><span class="field-name">movingPointer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the pointer is currently being moved.
Observable property for coordinating with other components.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hue"><div class="plugin-name">elements</div><code><span class="field-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current hue value (0-360 degrees).
Setting this updates the pointer position.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMovingPointer"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMovingPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMovingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new HSB spectrum view.

Initializes:
- Gradient mesh with color spectrum
- Horizontal pointer with contrasting borders
- Pointer event handlers

## Private Members

<div class="signature field-var has-description has-plugin" id="PRECISION"><div class="plugin-name">elements</div><code><span class="field-name">PRECISION</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PRECISION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of color segments in the spectrum gradient.
Higher values create smoother gradients.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMovingPointer"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMovingPointer</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedMovingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spectrum"><div class="plugin-name">elements</div><code><span class="field-name">spectrum</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">ceramic.Mesh</a></code><a class="header-anchor" href="#spectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mesh displaying the color spectrum gradient.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="huePointer"><div class="plugin-name">elements</div><code><span class="field-name">huePointer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Border/" class="type-link">ceramic.Border</a></code><a class="header-anchor" href="#huePointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal line pointer indicating the selected hue.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerHSBSpectrumView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ColorPickerHSBSpectrumView](/api-docs/clay-web/elements/ColorPickerHSBSpectrumView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateHueFromPointer"><div class="plugin-name">elements</div><code><span class="field-name">emitUpdateHueFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateHueFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the hue is updated via pointer interaction.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMovingPointerChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMovingPointerChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMovingPointerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when movingPointer field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initSpectrum"><div class="plugin-name">elements</div><code><span class="field-name">initSpectrum</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initSpectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the spectrum gradient mesh.
Creates a vertical gradient with segments for each hue value,
distributed according to the PRECISION constant.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updatePointerFromHue"><div class="plugin-name">elements</div><code><span class="field-name">updatePointerFromHue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerFromHue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the pointer position based on the current hue value.
The pointer moves vertically with 0° at the bottom and 360° at the top.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lays out the spectrum and pointer to fit the view dimensions.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="colorWithHue"><div class="plugin-name">elements</div><code><span class="field-name">colorWithHue</span><span class="parenthesis">(</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AlphaColor/" class="type-link">ceramic.AlphaColor</a></code><a class="header-anchor" href="#colorWithHue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a color with maximum saturation and brightness for the given hue.



| Name | Type | Description |
|------|------|-------------|
| `hue` | [Float](/api-docs/clay-web/Float/) | The hue value in degrees (0-360)  |

| Returns | Description |
|---------|-------------|
| [ceramic.AlphaColor](/api-docs/clay-web/ceramic/AlphaColor/) | An AlphaColor with the specified hue at full saturation/brightness |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerDown"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerMove"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePointerUp"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateHueFromTouchInfo"><div class="plugin-name">elements</div><code><span class="field-name">updateHueFromTouchInfo</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateHueFromTouchInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the hue based on touch/pointer position.
Calculates the hue from the Y coordinate (inverted so top = 360°).



| Name | Type | Description |
|------|------|-------------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) | Touch information containing pointer coordinates |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


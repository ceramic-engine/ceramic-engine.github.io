---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ColorPickerView
target: Clay (Native)
permalink: api-docs/clay-native/elements/ColorPickerView/
---

# ColorPickerView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ColorPickerView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/LayersLayout/">ceramic.LayersLayout</a> → <strong>elements.ColorPickerView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/elements/RelatedToFieldView/">RelatedToFieldView</a>, <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

A comprehensive color picker interface combining multiple color selection methods.

This view provides:
- HSB/HSL color gradient with hue spectrum
- HSLuv perceptually uniform color space option
- RGB numeric input fields (0-255)
- HSL/HSLuv numeric input fields (H: 0-360, S/L: 0-100%)
- Saved color palette with drag-and-drop reordering
- Color mode switching between HSL and HSLuv

The picker automatically synchronizes all input methods - changing the color
through any interface updates all others. Users can save frequently used
colors to a palette for quick access.

Layout:
- Left: Gradient picker and spectrum
- Center: RGB input fields
- Right: HSL/HSLuv input fields and buttons
- Bottom: Saved color palette (when colors exist)

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional custom theme for this picker

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorValue"><div class="plugin-name">elements</div><code><span class="field-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#colorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently selected color value (read-only, use setColor methods to change)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorFieldView"><div class="plugin-name">elements</div><code><span class="field-name">colorFieldView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorFieldView/" class="type-link">ColorFieldView</a></code><a class="header-anchor" href="#colorFieldView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Associated color field view that this picker is editing (optional)

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateColorValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateColorValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateColorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDraggingColorPreview"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDraggingColorPreview</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDraggingColorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDraggingColorDropIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDraggingColorDropIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDraggingColorDropIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePaletteHeight"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePaletteHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePaletteHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePaletteColorPreviews"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePaletteColorPreviews</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePaletteColorPreviews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColorFromRGB"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromRGB</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromRGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the selected color from RGB values.
Updates all UI elements to reflect the new color.


| Name | Type | Description |
|------|------|-------------|
| `r` | [Int](/api-docs/clay-native/Int/) | Red component (0-255)  |
| `g` | [Int](/api-docs/clay-native/Int/) | Green component (0-255)  |
| `b` | [Int](/api-docs/clay-native/Int/) | Blue component (0-255) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColorFromHSL"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSL</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the selected color from HSL values.
Updates all UI elements to reflect the new color.


| Name | Type | Description |
|------|------|-------------|
| `h` | [Float](/api-docs/clay-native/Float/) | Hue in degrees (0-360)  |
| `s` | [Float](/api-docs/clay-native/Float/) | Saturation (0-1)  |
| `l` | [Float](/api-docs/clay-native/Float/) | Lightness (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColorFromHSB"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSB</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the selected color from HSB/HSV values.
Updates all UI elements to reflect the new color.


| Name | Type | Description |
|------|------|-------------|
| `h` | [Float](/api-docs/clay-native/Float/) | Hue in degrees (0-360)  |
| `s` | [Float](/api-docs/clay-native/Float/) | Saturation (0-1)  |
| `b` | [Float](/api-docs/clay-native/Float/) | Brightness/Value (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColorFromHSLuv"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSLuv</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSLuv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the selected color from HSLuv values.
HSLuv provides perceptually uniform color selection.


| Name | Type | Description |
|------|------|-------------|
| `h` | [Float](/api-docs/clay-native/Float/) | Hue in degrees (0-360)  |
| `s` | [Float](/api-docs/clay-native/Float/) | Saturation (0-1)  |
| `l` | [Float](/api-docs/clay-native/Float/) | Lightness (0-1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="relatedFieldView"><div class="plugin-name">elements</div><code><span class="field-name">relatedFieldView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/FieldView/" class="type-link">FieldView</a></code><a class="header-anchor" href="#relatedFieldView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the associated field view for this color picker.
Used for contextual positioning and updates.

| Returns | Description |
|---------|-------------|
| [FieldView](/api-docs/clay-native/elements/FieldView/) | The related ColorFieldView or null |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">colorFieldView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorFieldView/" class="type-link">ColorFieldView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new color picker view.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `colorFieldView` | [ColorFieldView](/api-docs/clay-native/elements/ColorFieldView/) | *(optional)* | Optional associated color field for context |

## Private Members

<div class="signature field-var has-description has-plugin" id="FIELD_ROW_WIDTH"><div class="plugin-name">elements</div><code><span class="field-name">FIELD_ROW_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FIELD_ROW_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of input field rows

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="FIELD_ADVANCE"><div class="plugin-name">elements</div><code><span class="field-name">FIELD_ADVANCE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FIELD_ADVANCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical spacing between fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="BUTTON_ADVANCE"><div class="plugin-name">elements</div><code><span class="field-name">BUTTON_ADVANCE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#BUTTON_ADVANCE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical spacing for buttons

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="FIELD_Y_GAP"><div class="plugin-name">elements</div><code><span class="field-name">FIELD_Y_GAP</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FIELD_Y_GAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional gap between field groups

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="PADDING"><div class="plugin-name">elements</div><code><span class="field-name">PADDING</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PADDING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

General padding for the picker

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="GRADIENT_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">GRADIENT_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#GRADIENT_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the main color gradient square

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="SPECTRUM_WIDTH"><div class="plugin-name">elements</div><code><span class="field-name">SPECTRUM_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#SPECTRUM_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the hue/lightness spectrum bar

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="PALETTE_COLOR_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">PALETTE_COLOR_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PALETTE_COLOR_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of palette color swatches

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="PALETTE_COLOR_GAP"><div class="plugin-name">elements</div><code><span class="field-name">PALETTE_COLOR_GAP</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#PALETTE_COLOR_GAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gap between palette colors

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedColorValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedColorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedColorValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="draggingColorPreview"><div class="plugin-name">elements</div><code><span class="field-name">draggingColorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a></code><a class="header-anchor" href="#draggingColorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed property that returns the palette color currently being dragged.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDraggingColorPreview"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDraggingColorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a></code><a class="header-anchor" href="#unobservedDraggingColorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="draggingColorDropIndex"><div class="plugin-name">elements</div><code><span class="field-name">draggingColorDropIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#draggingColorDropIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the palette index where a dragged color should be dropped.
Uses distance calculation to find the nearest palette slot.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDraggingColorDropIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDraggingColorDropIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedDraggingColorDropIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paletteHeight"><div class="plugin-name">elements</div><code><span class="field-name">paletteHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#paletteHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the palette area

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPaletteHeight"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPaletteHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedPaletteHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hsluv"><div class="plugin-name">elements</div><code><span class="field-name">hsluv</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use HSLuv color space instead of HSL

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paletteColors"><div class="plugin-name">elements</div><code><span class="field-name">paletteColors</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#paletteColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User's saved palette colors

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hsbGradientView"><div class="plugin-name">elements</div><code><span class="field-name">hsbGradientView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerHSBGradientView/" class="type-link">ColorPickerHSBGradientView</a></code><a class="header-anchor" href="#hsbGradientView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSB color gradient view for saturation and brightness selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hsbSpectrumView"><div class="plugin-name">elements</div><code><span class="field-name">hsbSpectrumView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerHSBSpectrumView/" class="type-link">ColorPickerHSBSpectrumView</a></code><a class="header-anchor" href="#hsbSpectrumView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSB spectrum view for hue selection (vertical color bar)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hsluvGradientView"><div class="plugin-name">elements</div><code><span class="field-name">hsluvGradientView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerHSLuvGradientView/" class="type-link">ColorPickerHSLuvGradientView</a></code><a class="header-anchor" href="#hsluvGradientView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv perceptually uniform gradient view for saturation and lightness selection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hsluvSpectrumView"><div class="plugin-name">elements</div><code><span class="field-name">hsluvSpectrumView</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerHSLuvSpectrumView/" class="type-link">ColorPickerHSLuvSpectrumView</a></code><a class="header-anchor" href="#hsluvSpectrumView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HSLuv spectrum view for lightness selection (vertical lightness bar)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbRedField"><div class="plugin-name">elements</div><code><span class="field-name">rgbRedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#rgbRedField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for red color component (0-255)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbGreenField"><div class="plugin-name">elements</div><code><span class="field-name">rgbGreenField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#rgbGreenField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for green color component (0-255)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbBlueField"><div class="plugin-name">elements</div><code><span class="field-name">rgbBlueField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#rgbBlueField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for blue color component (0-255)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbRedFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">rgbRedFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#rgbRedFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the red field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbGreenFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">rgbGreenFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#rgbGreenFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the green field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbBlueFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">rgbBlueFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#rgbBlueFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the blue field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rgbLabel"><div class="plugin-name">elements</div><code><span class="field-name">rgbLabel</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#rgbLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Header label displaying "RGB" above the RGB input fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslHueField"><div class="plugin-name">elements</div><code><span class="field-name">hslHueField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#hslHueField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for hue component in HSL/HSLuv mode (0-360 degrees)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslSaturationField"><div class="plugin-name">elements</div><code><span class="field-name">hslSaturationField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#hslSaturationField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for saturation component in HSL/HSLuv mode (0-100%)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslLightnessField"><div class="plugin-name">elements</div><code><span class="field-name">hslLightnessField</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#hslLightnessField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input field for lightness component in HSL/HSLuv mode (0-100%)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslHueFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">hslHueFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hslHueFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the hue field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslSaturationFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">hslSaturationFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hslSaturationFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the saturation field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslLightnessFieldValue"><div class="plugin-name">elements</div><code><span class="field-name">hslLightnessFieldValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hslLightnessFieldValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached text value of the lightness field to detect changes and prevent feedback loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslLabel"><div class="plugin-name">elements</div><code><span class="field-name">hslLabel</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#hslLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Header label displaying "HSL" or "HSLuv" above the HSL input fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="updatingColor"><div class="plugin-name">elements</div><code><span class="field-name">updatingColor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#updatingColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Counter to prevent infinite update loops when synchronizing color values across UI elements

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hslFieldsLocked"><div class="plugin-name">elements</div><code><span class="field-name">hslFieldsLocked</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hslFieldsLocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lock counter to prevent HSL field updates during manual field edits

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paletteAddButton"><div class="plugin-name">elements</div><code><span class="field-name">paletteAddButton</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Button/" class="type-link">Button</a></code><a class="header-anchor" href="#paletteAddButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Button to add current color to palette or remove it if already exists

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorModeButton"><div class="plugin-name">elements</div><code><span class="field-name">colorModeButton</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Button/" class="type-link">Button</a></code><a class="header-anchor" href="#colorModeButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Button to switch between HSL and HSLuv color space modes

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastDraggingColorDropIndex"><div class="plugin-name">elements</div><code><span class="field-name">lastDraggingColorDropIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastDraggingColorDropIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index where the last palette color drag operation should drop the color

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastDraggingColorPreview"><div class="plugin-name">elements</div><code><span class="field-name">lastDraggingColorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a></code><a class="header-anchor" href="#lastDraggingColorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the palette color view that was last being dragged

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paletteColorPreviews"><div class="plugin-name">elements</div><code><span class="field-name">paletteColorPreviews</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#paletteColorPreviews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of visual previews for each color in the user's saved palette

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPaletteColorPreviews"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPaletteColorPreviews</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedPaletteColorPreviews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ColorPickerView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ColorPickerView](/api-docs/clay-native/elements/ColorPickerView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitColorValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitColorValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitColorValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when colorValue field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/clay-native/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/clay-native/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDraggingColorPreviewChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDraggingColorPreviewChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDraggingColorPreviewChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when draggingColorPreview field changes.

| Name | Type |
|------|------|
| `current` | [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |
| `previous` | [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDraggingColorDropIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDraggingColorDropIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDraggingColorDropIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when draggingColorDropIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPaletteHeightChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPaletteHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPaletteHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when paletteHeight field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPaletteColorPreviewsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPaletteColorPreviewsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPaletteColorPreviewsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when paletteColorPreviews field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/clay-native/Array/)<[ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/)> |
| `previous` | [Array](/api-docs/clay-native/Array/)<[ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getColorPickerWidth"><div class="plugin-name">elements</div><code><span class="field-name">getColorPickerWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getColorPickerWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateSize"><div class="plugin-name">elements</div><code><span class="field-name">updateSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initRGBFields"><div class="plugin-name">elements</div><code><span class="field-name">initRGBFields</span><span class="parenthesis">(</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#initRGBFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offsetX` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initHSLFields"><div class="plugin-name">elements</div><code><span class="field-name">initHSLFields</span><span class="parenthesis">(</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#initHSLFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offsetX` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initPaletteUI"><div class="plugin-name">elements</div><code><span class="field-name">initPaletteUI</span><span class="parenthesis">(</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initPaletteUI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offsetX` | [Float](/api-docs/clay-native/Float/) |
| `offsetY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateRGBFields"><div class="plugin-name">elements</div><code><span class="field-name">updateRGBFields</span><span class="parenthesis">(</span><span class="arg-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateRGBFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `colorValue` | [ceramic.Color](/api-docs/clay-native/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateHSLFields"><div class="plugin-name">elements</div><code><span class="field-name">updateHSLFields</span><span class="parenthesis">(</span><span class="arg-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateHSLFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `colorValue` | [ceramic.Color](/api-docs/clay-native/ceramic/Color/) | |
| `hue` | [Float](/api-docs/clay-native/Float/) | *(optional)* |
| `saturation` | [Float](/api-docs/clay-native/Float/) | *(optional)* |
| `lightness` | [Float](/api-docs/clay-native/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateGradientAndSpectrum"><div class="plugin-name">elements</div><code><span class="field-name">updateGradientAndSpectrum</span><span class="parenthesis">(</span><span class="arg-name">colorValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateGradientAndSpectrum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `colorValue` | [ceramic.Color](/api-docs/clay-native/ceramic/Color/) | |
| `hue` | [Float](/api-docs/clay-native/Float/) | *(optional)* |
| `saturation` | [Float](/api-docs/clay-native/Float/) | *(optional)* |
| `lightness` | [Float](/api-docs/clay-native/Float/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColorFromRGBFields"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromRGBFields</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromRGBFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColorFromHSLFieldHue"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSLFieldHue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSLFieldHue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColorFromHSLFieldSaturation"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSLFieldSaturation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSLFieldSaturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setColorFromHSLFieldLightness"><div class="plugin-name">elements</div><code><span class="field-name">setColorFromHSLFieldLightness</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorFromHSLFieldLightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createTextField"><div class="plugin-name">elements</div><code><span class="field-name">createTextField</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">applyValue</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">100</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#createTextField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `applyValue` | Function | *(optional)* |
| `minValue` | [Int](/api-docs/clay-native/Int/) | `0` |
| `maxValue` | [Int](/api-docs/clay-native/Int/) | `100` |

| Returns |
|---------|
| [TextFieldView](/api-docs/clay-native/elements/TextFieldView/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="saveColor"><div class="plugin-name">elements</div><code><span class="field-name">saveColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="switchColorMode"><div class="plugin-name">elements</div><code><span class="field-name">switchColorMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#switchColorMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateColorPreviews"><div class="plugin-name">elements</div><code><span class="field-name">updateColorPreviews</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateColorPreviews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateFromColorDrop"><div class="plugin-name">elements</div><code><span class="field-name">updateFromColorDrop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromColorDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createColorPreview"><div class="plugin-name">elements</div><code><span class="field-name">createColorPreview</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a></code><a class="header-anchor" href="#createColorPreview"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePaletteColorClick"><div class="plugin-name">elements</div><code><span class="field-name">handlePaletteColorClick</span><span class="parenthesis">(</span><span class="arg-name">colorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePaletteColorClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `colorPreview` | [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePaletteColorDrop"><div class="plugin-name">elements</div><code><span class="field-name">handlePaletteColorDrop</span><span class="parenthesis">(</span><span class="arg-name">colorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePaletteColorDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `colorPreview` | [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handlePaletteColorLongPress"><div class="plugin-name">elements</div><code><span class="field-name">handlePaletteColorLongPress</span><span class="parenthesis">(</span><span class="arg-name">colorPreview</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/ColorPickerPaletteColorView/" class="type-link">ColorPickerPaletteColorView</a><span class="operator">,</span> <span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePaletteColorLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `colorPreview` | [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) |
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


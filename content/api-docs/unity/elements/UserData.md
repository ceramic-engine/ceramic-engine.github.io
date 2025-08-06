---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: UserData
target: Unity
permalink: api-docs/unity/elements/UserData/
---

# UserData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/UserData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/tracker/Model/">tracker.Model</a> → <strong>elements.UserData</strong> (Class)</div>

Persistent user data model for storing application-specific user preferences and state.

This class extends Model to provide serializable storage for user settings,
window configurations, and other persistent application data. It manages
window positioning/sizing data and color palette preferences with built-in
methods for manipulation.

## Features

- Persistent window data storage with automatic serialization
- Color palette management with add/remove/move operations
- Color picker mode preferences (HSLuv vs HSB)
- Automatic duplicate prevention for palette colors

## Usage Examples

```haxe
// Create or load user data
var userData = new UserData();

// Add colors to palette
userData.addPaletteColor(Color.RED);
userData.addPaletteColor(Color.BLUE, false); // Allow duplicates

// Manage color palette
userData.movePaletteColor(0, 2); // Move first color to third position
userData.removePaletteColor(1);  // Remove color at index 1

// Configure color picker
userData.colorPickerHsluv = true; // Use HSLuv color space
```

<div class="see"><strong>See:</strong> Model, <a href="/api-docs/unity/elements/WindowData/">WindowData</a>, Color</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="windowsData"><div class="plugin-name">elements</div><code><span class="field-name">windowsData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ceramic.ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/elements/WindowData/" class="type-link">WindowData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#windowsData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Storage for window-specific data mapped by window identifiers.

Each window can have its own persistent data including position, size,
visibility state, and other window-specific preferences. The data is
automatically serialized and restored between application sessions.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/WindowData/">WindowData</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="colorPickerHsluv"><div class="plugin-name">elements</div><code><span class="field-name">colorPickerHsluv</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorPickerHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use HSLuv color space in color pickers.

When true, color pickers will use the HSLuv color space which provides
perceptually uniform lightness. When false, traditional HSB/HSV color
space is used. This preference affects the behavior of color selection
interfaces throughout the application.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paletteColors"><div class="plugin-name">elements</div><code><span class="field-name">paletteColors</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#paletteColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of colors in the user's custom color palette.

This palette allows users to save frequently used colors for quick access
in color pickers and other color selection interfaces. Colors can be added,
removed, and reordered using the provided methods.

<div class="see"><strong>See:</strong> addPaletteColor, removePaletteColor, movePaletteColor</div>


<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWindowsData"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWindowsData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowsData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateColorPickerHsluv"><div class="plugin-name">elements</div><code><span class="field-name">invalidateColorPickerHsluv</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateColorPickerHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidatePaletteColors"><div class="plugin-name">elements</div><code><span class="field-name">invalidatePaletteColors</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePaletteColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addPaletteColor"><div class="plugin-name">elements</div><code><span class="field-name">addPaletteColor</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forbidDuplicate</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPaletteColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a color to the user's palette.

Appends the specified color to the end of the palette array. By default,
duplicate colors are not allowed and will be rejected with a warning.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | | The color to add to the palette  |
| `forbidDuplicate` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to prevent adding duplicate colors (default: true) * ## Examples ```haxe // Add a unique color (default behavior) userData.addPaletteColor(Color.RED); * // Allow duplicate colors userData.addPaletteColor(Color.RED, false); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="movePaletteColor"><div class="plugin-name">elements</div><code><span class="field-name">movePaletteColor</span><span class="parenthesis">(</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">toIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#movePaletteColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves a color from one position to another in the palette.

Reorders the palette by moving the color at the specified source index
to the target index. All other colors shift positions accordingly.



| Name | Type | Description |
|------|------|-------------|
| `fromIndex` | [Int](/api-docs/unity/Int/) | The current index of the color to move  |
| `toIndex` | [Int](/api-docs/unity/Int/) | The target index where the color should be moved * ## Examples ```haxe // Move the first color to the third position userData.movePaletteColor(0, 2); * // Move the last color to the beginning var lastIndex = userData.paletteColors.length - 1; userData.movePaletteColor(lastIndex, 0); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removePaletteColor"><div class="plugin-name">elements</div><code><span class="field-name">removePaletteColor</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removePaletteColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a color from the palette at the specified index.

Deletes the color at the given index from the palette array.
All subsequent colors shift down by one position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The index of the color to remove * ## Examples ```haxe // Remove the first color userData.removePaletteColor(0); * // Remove the last color var lastIndex = userData.paletteColors.length - 1; userData.removePaletteColor(lastIndex); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new UserData instance.
Initializes the model with default values for all properties.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedWindowsData"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWindowsData</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ceramic.ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/elements/WindowData/" class="type-link">WindowData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedWindowsData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedColorPickerHsluv"><div class="plugin-name">elements</div><code><span class="field-name">unobservedColorPickerHsluv</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedColorPickerHsluv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedPaletteColors"><div class="plugin-name">elements</div><code><span class="field-name">unobservedPaletteColors</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedPaletteColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWindowsDataChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWindowsDataChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ceramic.ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/elements/WindowData/" class="type-link">WindowData</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyMap/" class="type-link">ceramic.ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/unity/elements/WindowData/" class="type-link">WindowData</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowsDataChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowsData field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [WindowData](/api-docs/unity/elements/WindowData/)> |
| `previous` | [ceramic.ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/)<[String](/api-docs/unity/String/), [WindowData](/api-docs/unity/elements/WindowData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitColorPickerHsluvChange"><div class="plugin-name">elements</div><code><span class="field-name">emitColorPickerHsluvChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitColorPickerHsluvChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when colorPickerHsluv field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitPaletteColorsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitPaletteColorsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPaletteColorsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when paletteColors field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ceramic.Color](/api-docs/unity/ceramic/Color/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[ceramic.Color](/api-docs/unity/ceramic/Color/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |


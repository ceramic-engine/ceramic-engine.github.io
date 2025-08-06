---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BitmapFont
target: Headless
permalink: api-docs/headless/ceramic/BitmapFont/
---

# BitmapFont

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BitmapFont.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.BitmapFont</strong> (Class)</div>

A bitmap font implementation that handles both regular bitmap fonts and MSDF (Multi-channel Signed Distance Field) fonts.
This class manages font textures, character data, kerning, and optional pre-rendering of characters.
It supports multiple texture pages and custom shaders, particularly useful for MSDF fonts.

## Instance Members

<div class="signature field-var has-description" id="pages"><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps texture page IDs to their corresponding textures.
A bitmap font can span multiple texture pages to accommodate large character sets.

<hr class="field-separator" />

<div class="signature field-var has-description" id="face"><code><span class="field-name">face</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#face"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The font face name (e.g. "Arial", "Roboto").
This is metadata from the font file.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointSize"><code><span class="field-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point size the font was generated at.
This is the reference size for all metrics in the font data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="baseSize"><code><span class="field-name">baseSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#baseSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The base size used during font generation.
Often the same as pointSize but can differ based on the font tool used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="chars"><code><span class="field-name">chars</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontCharacter/" class="type-link">BitmapFontCharacter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#chars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of character codes to their corresponding glyph data.
Each character contains texture coordinates, size, and offset information.

<hr class="field-separator" />

<div class="signature field-var has-description" id="charCount"><code><span class="field-name">charCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#charCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total number of characters defined in this font.
Useful for statistics and validation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineHeight"><code><span class="field-name">lineHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The recommended line height for this font in pixels.
Used for vertical spacing between lines of text.

<hr class="field-separator" />

<div class="signature field-var has-description" id="kernings"><code><span class="field-name">kernings</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#kernings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Kerning data for character pairs.
First level maps from first character to second character to kerning amount.
Kerning adjusts spacing between specific character pairs for better appearance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="msdf"><code><span class="field-name">msdf</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#msdf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates if this font is an MSDF (Multi-channel Signed Distance Field) font.
MSDF fonts provide superior scaling quality compared to regular bitmap fonts.

<hr class="field-separator" />

<div class="signature field-var has-description" id="spaceChar"><code><span class="field-name">spaceChar</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFontCharacter/" class="type-link">BitmapFontCharacter</a></code><a class="header-anchor" href="#spaceChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached reference to the space character (ASCII 32).
Used for efficient spacing calculations in text rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageShaders"><code><span class="field-name">pageShaders</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#pageShaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom shaders used for rendering characters, stored per texture page.
Automatically set up for MSDF fonts using ceramic's MSDF shader.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preRenderedPages"><code><span class="field-name">preRenderedPages</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#preRenderedPages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-rendered textures for different font sizes, stored per page and size.
Used to optimize rendering performance by caching commonly used sizes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Asset/" class="type-link">Asset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the asset that created this font.
Used for proper resource management.

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cleans up all resources associated with this font including textures,
shaders, and pre-rendered pages.

<hr class="field-separator" />

<div class="signature field-method has-description" id="needsToPreRenderAtSize"><code><span class="field-name">needsToPreRenderAtSize</span><span class="parenthesis">(</span><span class="arg-name">pixelSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#needsToPreRenderAtSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the font needs to be pre-rendered at a specific pixel size.


| Name | Type | Description |
|------|------|-------------|
| `pixelSize` | [Int](/api-docs/headless/Int/) | The target size in pixels  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if pre-rendering is needed, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="preRenderAtSize"><code><span class="field-name">preRenderAtSize</span><span class="parenthesis">(</span><span class="arg-name">pixelSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#preRenderAtSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-renders the font at a specific pixel size.
Useful for optimizing rendering performance for frequently used sizes.


| Name | Type | Description |
|------|------|-------------|
| `pixelSize` | [Int](/api-docs/headless/Int/) | The target size in pixels  |
| `done` | Function | Callback function called when pre-rendering is complete |

<hr class="field-separator" />

<div class="signature field-method has-description" id="kerning"><code><span class="field-name">kerning</span><span class="parenthesis">(</span><span class="arg-name">first</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">second</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#kerning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the kerning amount between two characters.
Kerning improves text appearance by adjusting the space between specific character pairs.


| Name | Type | Description |
|------|------|-------------|
| `first` | [Int](/api-docs/headless/Int/) | The character code of the first glyph  |
| `second` | [Int](/api-docs/headless/Int/) | The character code of the second glyph  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The kerning amount (0 if no kerning is defined) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">fontData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFontData/" class="type-link">BitmapFontData</a><span class="operator">,</span> <span class="arg-name">pages</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new BitmapFont instance.


| Name | Type | Description |
|------|------|-------------|
| `fontData` | [BitmapFontData](/api-docs/headless/ceramic/BitmapFontData/) | The font data containing metrics and character information  |
| `pages` | [Map](/api-docs/headless/Map/) | A map of texture file paths to their corresponding textures  |

## Private Members

<div class="signature field-var has-description" id="fontData"><code><span class="field-name">fontData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFontData/" class="type-link">BitmapFontData</a></code><a class="header-anchor" href="#fontData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The core data structure containing all font information including
character metrics, kerning data, and texture coordinates.

<hr class="field-separator" />

<div class="signature field-method has-description" id="preRenderPage"><code><span class="field-name">preRenderPage</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixelsSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#preRenderPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method to pre-render a specific texture page at given size.


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/headless/Int/) | The texture page ID  |
| `pixelsSize` | [Int](/api-docs/headless/Int/) | The target size in pixels  |
| `done` | Function | Callback function called when pre-rendering is complete |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


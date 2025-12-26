---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BitmapFontData
target: Headless
permalink: api-docs/headless/ceramic/BitmapFontData/
---

# BitmapFontData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BitmapFontData.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BitmapFontData</strong> (Class)</div>

Complete data structure containing all information about a bitmap font.

BitmapFontData stores everything needed to render text with a bitmap font:
character definitions, texture page references, kerning pairs, and metrics.
This data is typically loaded from font definition files (like BMFont format)
and used to construct a BitmapFont instance.

The data includes:
- Font metadata (face name, sizes)
- Character definitions with texture coordinates and metrics
- Texture page information for multi-page fonts
- Kerning data for improved character spacing
- Optional distance field data for high-quality scaling

```haxe
var fontData:BitmapFontData = {
    face: "Arial",
    pointSize: 32,
    baseSize: 32,
    lineHeight: 40,
    chars: new IntMap(),
    pages: [{id: 0, file: "arial_0.png"}],
    kernings: new IntMap()
};
```

<div class="see"><strong>See:</strong> BitmapFont The font class that uses this data, BitmapFontParser For loading font data from files</div>


## Instance Members

<div class="signature field-var has-description" id="face"><code><span class="field-name">face</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#face"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the font face (e.g., "Arial", "Helvetica").
This identifies the typeface family.

<hr class="field-separator" />

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Path to the directory containing the font files.
Used to resolve relative paths for texture pages.
Can be null or empty for fonts in the root directory.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointSize"><code><span class="field-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Font size in points at which the glyphs were rendered.
This is the reference size for all metrics. When rendering
at different sizes, metrics are scaled proportionally.

<hr class="field-separator" />

<div class="signature field-var has-description" id="baseSize"><code><span class="field-name">baseSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#baseSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base size of the font in pixels.
Usually matches pointSize but may differ depending on
the tool used to generate the bitmap font.

<hr class="field-separator" />

<div class="signature field-var has-description" id="chars"><code><span class="field-name">chars</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontCharacter/" class="type-link">BitmapFontCharacter</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#chars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of all characters in the font, indexed by Unicode code point.
Each character contains texture coordinates, size, and positioning data.
Missing characters will not be present in the map.

<hr class="field-separator" />

<div class="signature field-var has-description" id="charCount"><code><span class="field-name">charCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#charCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total number of characters defined in this font.
This count includes all glyphs across all texture pages.
Useful for validation and statistics.

<hr class="field-separator" />

<div class="signature field-var has-description" id="distanceField"><code><span class="field-name">distanceField</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontDistanceFieldData/" class="type-link">BitmapFontDistanceFieldData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#distanceField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional distance field data for SDF (Signed Distance Field) fonts.
When present, indicates this is an MSDF font that can be scaled
without quality loss. Null for regular bitmap fonts.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/BitmapFontDistanceFieldData/">BitmapFontDistanceFieldData</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="pages"><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontDataPage/" class="type-link">BitmapFontDataPage</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of texture pages containing the font glyphs.
Large fonts may span multiple textures to fit all characters.
Pages are referenced by index in BitmapFontCharacter.page.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineHeight"><code><span class="field-name">lineHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recommended line height in pixels.
This is the vertical distance between baselines of consecutive
lines of text. Includes ascent, descent, and line gap.

<hr class="field-separator" />

<div class="signature field-var has-description" id="kernings"><code><span class="field-name">kernings</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#kernings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Kerning information for character pairs.

Kerning adjusts the spacing between specific character pairs
for better visual appearance (e.g., "AV" vs "AA").

Structure: kernings[firstChar][secondChar] = adjustment
- First key: Unicode code point of the first character
- Second key: Unicode code point of the second character
- Value: Horizontal adjustment in pixels (usually negative)

```haxe
var kernValue = kernings.get(65)?.get(86); // Kerning for "AV"
if (kernValue != null) cursorX += kernValue;
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="smooth"><code><span class="field-name">smooth</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#smooth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the font uses smoothing (bilinear filtering).
When true, the font texture uses smooth interpolation for scaling.
When false, uses nearest neighbor filtering for pixel-perfect rendering.
Defaults to true for XML/BMFont formats, false for Construct 3 format.

<hr class="field-separator" />

<div class="signature field-var has-description" id="aa"><code><span class="field-name">aa</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#aa"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the font uses anti-aliasing.
When true, the font glyphs were rendered with anti-aliasing.
When false, the font has hard pixel edges.
Defaults to true for XML/BMFont formats, false for Construct 3 format.

<hr class="field-separator" />

<div class="signature field-var has-description" id="needsReparsing"><code><span class="field-name">needsReparsing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#needsReparsing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag for Construct 3 fonts that need re-parsing after image loading.
When true, the font data needs to be re-parsed with actual image dimensions.
This is used for two-stage parsing of Construct 3 fonts.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rawFontData"><code><span class="field-name">rawFontData</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#rawFontData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the raw font data text for re-parsing.
Only populated for fonts that need re-parsing (e.g., Construct 3 fonts).

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">face</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">baseSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">chars</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontCharacter/" class="type-link">BitmapFontCharacter</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">charCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">distanceField</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontDistanceFieldData/" class="type-link">BitmapFontDistanceFieldData</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">pages</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/BitmapFontDataPage/" class="type-link">BitmapFontDataPage</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">lineHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">kernings</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">smooth</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aa</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">needsReparsing</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rawFontData</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/BitmapFontDistanceFieldData/">BitmapFontDistanceFieldData</a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `face` | [String](/api-docs/headless/String/) | | * The name of the font face (e.g., "Arial", "Helvetica"). This identifies the typeface family. |
| `path` | [String](/api-docs/headless/String/) | | * Path to the directory containing the font files. Used to resolve relative paths for texture pages. Can be null or empty for fonts in the root directory. |
| `pointSize` | [Float](/api-docs/headless/Float/) | | * Font size in points at which the glyphs were rendered. This is the reference size for all metrics. When rendering at different sizes, metrics are scaled proportionally. |
| `baseSize` | [Float](/api-docs/headless/Float/) | | * Base size of the font in pixels. Usually matches pointSize but may differ depending on the tool used to generate the bitmap font. |
| `chars` | [IntMap](/api-docs/headless/ceramic/IntMap/)<[BitmapFontCharacter](/api-docs/headless/ceramic/BitmapFontCharacter/)> | | * Map of all characters in the font, indexed by Unicode code point. Each character contains texture coordinates, size, and positioning data. Missing characters will not be present in the map. |
| `charCount` | [Int](/api-docs/headless/Int/) | | * Total number of characters defined in this font. This count includes all glyphs across all texture pages. Useful for validation and statistics. |
| `distanceField` | [Null](/api-docs/headless/Null/)<[BitmapFontDistanceFieldData](/api-docs/headless/ceramic/BitmapFontDistanceFieldData/)> | | * Optional distance field data for SDF (Signed Distance Field) fonts. When present, indicates this is an MSDF font that can be scaled without quality loss. Null for regular bitmap fonts.  |
| `pages` | [Array](/api-docs/headless/Array/)<[BitmapFontDataPage](/api-docs/headless/ceramic/BitmapFontDataPage/)> | | * Array of texture pages containing the font glyphs. Large fonts may span multiple textures to fit all characters. Pages are referenced by index in BitmapFontCharacter.page. |
| `lineHeight` | [Float](/api-docs/headless/Float/) | | * Recommended line height in pixels. This is the vertical distance between baselines of consecutive lines of text. Includes ascent, descent, and line gap. |
| `kernings` | [IntMap](/api-docs/headless/ceramic/IntMap/)<[IntFloatMap](/api-docs/headless/ceramic/IntFloatMap/)> | | * Kerning information for character pairs. * Kerning adjusts the spacing between specific character pairs for better visual appearance (e.g., "AV" vs "AA"). * Structure: kernings[firstChar][secondChar] = adjustment - First key: Unicode code point of the first character - Second key: Unicode code point of the second character - Value: Horizontal adjustment in pixels (usually negative) * ```haxe var kernValue = kernings.get(65)?.get(86); // Kerning for "AV" if (kernValue != null) cursorX += kernValue; ``` |
| `smooth` | [Null](/api-docs/headless/Null/)<[Bool](/api-docs/headless/Bool/)> | *(optional)* | * Whether the font uses smoothing (bilinear filtering). When true, the font texture uses smooth interpolation for scaling. When false, uses nearest neighbor filtering for pixel-perfect rendering. Defaults to true for XML/BMFont formats, false for Construct 3 format. |
| `aa` | [Null](/api-docs/headless/Null/)<[Bool](/api-docs/headless/Bool/)> | *(optional)* | * Whether the font uses anti-aliasing. When true, the font glyphs were rendered with anti-aliasing. When false, the font has hard pixel edges. Defaults to true for XML/BMFont formats, false for Construct 3 format. |
| `needsReparsing` | [Null](/api-docs/headless/Null/)<[Bool](/api-docs/headless/Bool/)> | *(optional)* | * Internal flag for Construct 3 fonts that need re-parsing after image loading. When true, the font data needs to be re-parsed with actual image dimensions. This is used for two-stage parsing of Construct 3 fonts. |
| `rawFontData` | [Null](/api-docs/headless/Null/)<[String](/api-docs/headless/String/)> | *(optional)* | * Stores the raw font data text for re-parsing. Only populated for fonts that need re-parsing (e.g., Construct 3 fonts). |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


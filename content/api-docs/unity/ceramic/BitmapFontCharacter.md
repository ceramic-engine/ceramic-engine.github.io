---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: BitmapFontCharacter
target: Unity
permalink: api-docs/unity/ceramic/BitmapFontCharacter/
---

# BitmapFontCharacter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/BitmapFontCharacter.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.BitmapFontCharacter</strong> (Class)</div>

Represents a single character (glyph) in a bitmap font.

This data structure stores all the metrics and texture coordinates needed
to correctly render a character from a bitmap font texture atlas. Each
character has position data for locating it in the texture, size information,
and rendering offsets for proper alignment.

The character metrics follow standard font terminology:
- Texture coordinates (x, y, width, height) define the glyph's location in the atlas
- Offsets (xOffset, yOffset) position the glyph relative to the baseline
- Advance (xAdvance) determines cursor movement after rendering

```haxe
var charA = font.chars.get(65); // Get letter 'A'
var texture = font.pages.get(charA.page);

// Render a single character with a quad.
// This is just for reference. In practice,
// you'd rather use Text class with a bitmap font
quad.texture = texture;
quad.frameX = charA.x;
quad.frameY = charA.y;
quad.frameWidth = charA.width;
quad.frameHeight = charA.height;
quad.pos(cursorX + charA.xOffset, cursorY + charA.yOffset);

// Move cursor for next character
cursorX += charA.xAdvance;
```

<div class="see"><strong>See:</strong> BitmapFont The font class that contains these characters, BitmapFontData The complete font data structure, Text To render text using a bitmap font</div>


## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The character's Unicode code point.

This is the numeric representation of the character, e.g.:
- 65 for 'A'
- 32 for space
- 8364 for '€'

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x-coordinate of the character in the texture atlas.

This is the left edge of the character's bounding box
within the texture, measured in pixels from the texture's origin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y-coordinate of the character in the texture atlas.

This is the top edge of the character's bounding box
within the texture, measured in pixels from the texture's origin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the character in the texture atlas.

This is the horizontal size of the character's bounding box
in pixels. May include padding depending on font generation settings.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the character in the texture atlas.

This is the vertical size of the character's bounding box
in pixels. May include padding depending on font generation settings.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xOffset"><code><span class="field-name">xOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal offset for rendering this character.

This value adjusts the character's position relative to the
current cursor position. Positive values move the character right,
negative values move it left. Used for proper glyph alignment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yOffset"><code><span class="field-name">yOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertical offset for rendering this character.

This value adjusts the character's position relative to the
text baseline. Positive values move the character down,
negative values move it up. Essential for proper vertical alignment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xAdvance"><code><span class="field-name">xAdvance</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xAdvance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal advance width for this character.

This is the distance to move the cursor after rendering this
character, before rendering the next one. Includes the character
width plus any additional spacing. Does not include kerning.

<hr class="field-separator" />

<div class="signature field-var has-description" id="page"><code><span class="field-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#page"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture page index where this character is stored.

Bitmap fonts can span multiple texture pages to accommodate
large character sets. This index identifies which texture
contains this particular character's image data.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">xOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">yOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">xAdvance</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `id` | [Int](/api-docs/unity/Int/) | * The character's Unicode code point. * This is the numeric representation of the character, e.g.: - 65 for 'A' - 32 for space - 8364 for '€' |
| `x` | [Float](/api-docs/unity/Float/) | * The x-coordinate of the character in the texture atlas. * This is the left edge of the character's bounding box within the texture, measured in pixels from the texture's origin. |
| `y` | [Float](/api-docs/unity/Float/) | * The y-coordinate of the character in the texture atlas. * This is the top edge of the character's bounding box within the texture, measured in pixels from the texture's origin. |
| `width` | [Float](/api-docs/unity/Float/) | * The width of the character in the texture atlas. * This is the horizontal size of the character's bounding box in pixels. May include padding depending on font generation settings. |
| `height` | [Float](/api-docs/unity/Float/) | * The height of the character in the texture atlas. * This is the vertical size of the character's bounding box in pixels. May include padding depending on font generation settings. |
| `xOffset` | [Float](/api-docs/unity/Float/) | * The horizontal offset for rendering this character. * This value adjusts the character's position relative to the current cursor position. Positive values move the character right, negative values move it left. Used for proper glyph alignment. |
| `yOffset` | [Float](/api-docs/unity/Float/) | * The vertical offset for rendering this character. * This value adjusts the character's position relative to the text baseline. Positive values move the character down, negative values move it up. Essential for proper vertical alignment. |
| `xAdvance` | [Float](/api-docs/unity/Float/) | * The horizontal advance width for this character. * This is the distance to move the cursor after rendering this character, before rendering the next one. Includes the character width plus any additional spacing. Does not include kerning. |
| `page` | [Int](/api-docs/unity/Int/) | * The texture page index where this character is stored. * Bitmap fonts can span multiple texture pages to accommodate large character sets. This index identifies which texture contains this particular character's image data. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |


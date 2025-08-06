---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Text
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Text/
---

# Text

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Text.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <strong>ceramic.Text</strong> (Class)</div>

A visual to layout and display text.
Works with UTF-8 strings.

## Instance Members

<div class="signature field-var has-description" id="glyphQuads"><code><span class="field-name">glyphQuads</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/GlyphQuad/" class="type-link">GlyphQuad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#glyphQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of glyph quads used to render the text.
Each quad represents a single character glyph.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numLines"><code><span class="field-name">numLines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of lines in the rendered text.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the text.
Default is white.

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text content to display.
Must not be null.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointSize"><code><span class="field-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The font size in points.
Default is 20.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lineHeight"><code><span class="field-name">lineHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The line height multiplier.
1.0 means default line height, 2.0 means double line height, etc.
Default is 1.0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="letterSpacing"><code><span class="field-name">letterSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#letterSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional spacing between letters in pixels.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description" id="font"><code><span class="field-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#font"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bitmap font used to render the text.
If null, the default font will be used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipTextX"><code><span class="field-name">clipTextX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTextX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X coordinate for text clipping.
Set to -1 to disable clipping on this axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipTextY"><code><span class="field-name">clipTextY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTextY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y coordinate for text clipping.
Set to -1 to disable clipping on this axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipTextWidth"><code><span class="field-name">clipTextWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTextWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width for text clipping.
Set to -1 to disable clipping on this axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipTextHeight"><code><span class="field-name">clipTextHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clipTextHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height for text clipping.
Set to -1 to disable clipping on this axis.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preRenderedSize"><code><span class="field-name">preRenderedSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#preRenderedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-rendered size for MSDF fonts.
Set to -1 to disable pre-rendering.
When set to a positive value, the font will be pre-rendered at this size, which
can be useful to improve performances and reduce draw calls in some situations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text alignment (LEFT, CENTER, or RIGHT).
Default is LEFT.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fitWidth"><code><span class="field-name">fitWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fitWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, text will be displayed with line breaks
as needed so that it fits in the requested width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxLineDiff"><code><span class="field-name">maxLineDiff</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxLineDiff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum difference in line widths when using fitWidth.
Set to -1 to disable line balancing.
When set, the text will try to balance line widths to be more uniform.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clipText"><code><span class="field-name">clipText</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clipText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set text clipping bounds.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | The x coordinate of the clipping rectangle  |
| `y` | [Float](/api-docs/clay-web/Float/) | The y coordinate of the clipping rectangle  |
| `width` | [Float](/api-docs/clay-web/Float/) | The width of the clipping rectangle  |
| `height` | [Float](/api-docs/clay-web/Float/) | The height of the clipping rectangle |

<hr class="field-separator" />

<div class="signature field-method has-description" id="glyphCode"><code><span class="field-name">glyphCode</span><span class="parenthesis">(</span><span class="arg-name">charCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#glyphCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If provided, will be called for each glyph to display, giving the chance
to override the character code to display.
This can be used for example to display password-like fields, when used with `EditText` component:

```haxe
var text = new Text();
text.glyphCode = (_, _) -> '*'.code;
text.content = 'Som2 pas!wOrd';
```

| Name | Type |
|------|------|
| `charCode` | [Int](/api-docs/clay-web/Int/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute and layout the text content.
This method recalculates all glyph positions and updates the visual size.

<hr class="field-separator" />

<div class="signature field-method has-description" id="lineForYPosition"><code><span class="field-name">lineForYPosition</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lineForYPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the line number matching the given y position.



| Name | Type | Description |
|------|------|-------------|
| `y` | [Float](/api-docs/clay-web/Float/) | The y position relative to this Text visual  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The line number (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="posInLineForX"><code><span class="field-name">posInLineForX</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#posInLineForX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the character index position relative to a line at the requested x value.



| Name | Type | Description |
|------|------|-------------|
| `line` | [Int](/api-docs/clay-web/Int/) | The line number (0-based)  |
| `x` | [Float](/api-docs/clay-web/Float/) | The x position relative to this Text visual  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The character position within the line |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexForPosInLine"><code><span class="field-name">indexForPosInLine</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">posInLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexForPosInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the global character index from the given line and position within that line.



| Name | Type | Description |
|------|------|-------------|
| `line` | [Int](/api-docs/clay-web/Int/) | The line number (0-based)  |
| `posInLine` | [Int](/api-docs/clay-web/Int/) | The position within the line  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The global character index in the content string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="xPositionAtIndex"><code><span class="field-name">xPositionAtIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xPositionAtIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an x position from the given character index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The global character index in the content string  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | The x position relative to this Text visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lineForIndex"><code><span class="field-name">lineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the line number of the character at the given index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The global character index in the content string  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The line number (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="posInLineForIndex"><code><span class="field-name">posInLineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#posInLineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a character index position relative to its line from its global index position.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The global character index in the content string  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The position within the line |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitGlyphQuadsChange"><code><span class="field-name">emitGlyphQuadsChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGlyphQuadsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the glyph quads change.

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleTexturesDensityChange"><code><span class="field-name">handleTexturesDensityChange</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTexturesDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Float](/api-docs/clay-web/Float/) |
| `_` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleWidth"><code><span class="field-name">scaleWidth</span><span class="parenthesis">(</span><span class="arg-name">targetWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale the text width to match the target width.
Only adjusts scaleX to match the requested width.



| Name | Type | Description |
|------|------|-------------|
| `targetWidth` | [Float](/api-docs/clay-web/Float/) | The desired width |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleHeight"><code><span class="field-name">scaleHeight</span><span class="parenthesis">(</span><span class="arg-name">targetHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale the text height to match the target height.
Only adjusts scaleY to match the requested height.



| Name | Type | Description |
|------|------|-------------|
| `targetHeight` | [Float](/api-docs/clay-web/Float/) | The desired height |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeGlyphQuads"><code><span class="field-name">computeGlyphQuads</span><span class="parenthesis">(</span><span class="arg-name">fitWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxLineDiff</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fixedNumLines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeGlyphQuads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute glyph quads for rendering.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fitWidth` | [Float](/api-docs/clay-web/Float/) | | The width to fit text into (-1 for no fitting)  |
| `maxLineDiff` | [Float](/api-docs/clay-web/Float/) | | The maximum difference in line widths for balancing  |
| `fixedNumLines` | [Int](/api-docs/clay-web/Int/) | `-1` | Fixed number of lines to use (-1 for automatic)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The number of lines in the laid out text |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fontDestroyed"><code><span class="field-name">fontDestroyed</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fontDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal callback when the font is destroyed.
Resets the font to the default font.

| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


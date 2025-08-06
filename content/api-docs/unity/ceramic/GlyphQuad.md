---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: GlyphQuad
target: Unity
permalink: api-docs/unity/ceramic/GlyphQuad/
---

# GlyphQuad

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/GlyphQuad.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <strong>ceramic.GlyphQuad</strong> (Class)</div>

A specialized Quad that represents a single rendered glyph (character) in text rendering.

GlyphQuad extends Quad to add text-specific metadata and tracking information.
Each instance represents one visible character in a Text display, containing
both the visual representation (texture from the font atlas) and metadata
about the character's position within the text.

This class is primarily used internally by the Text class for efficient
glyph management, pooling, and event handling. Each glyph can be individually
positioned, styled, and tracked.

```haxe
// Typically created internally by Text, but can be accessed:
text.onGlyphQuadsChange(this, (glyphQuads) -> {
    for (quad in glyphQuads) {
        trace('Character ${quad.char} at position ${quad.index}');
        trace('Line ${quad.line}, position in line: ${quad.posInLine}');
    }
});
```

<div class="see"><strong>See:</strong> Text The main text rendering class that manages GlyphQuads, BitmapFontCharacter The glyph data this quad represents</div>


## Instance Members

<div class="signature field-var has-description" id="char"><code><span class="field-name">char</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#char"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The character string this quad represents.

Usually a single character, but can be multiple characters for
ligatures or composed characters. Null if the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyph"><code><span class="field-name">glyph</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/BitmapFontCharacter/" class="type-link">BitmapFontCharacter</a></code><a class="header-anchor" href="#glyph"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the bitmap font character data.

Contains texture coordinates, metrics, and other rendering information
for this specific glyph from the font atlas.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The absolute character index in the source text.

This is the position of the character in the original text string,
starting from 0. Useful for mapping glyphs back to text positions.
Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="posInLine"><code><span class="field-name">posInLine</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#posInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The character's position within its line.

Zero-based index indicating this character's position on the current
line of text. Resets to 0 at the start of each new line.
Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="line"><code><span class="field-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The line number this character appears on.

Zero-based line index for multi-line text. Increments with each
line break in the rendered text. Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="code"><code><span class="field-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Unicode code point of the character.

The numeric representation of the character (e.g., 65 for 'A').
Useful for character-specific logic or debugging.
Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphX"><code><span class="field-name">glyphX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glyphX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x-coordinate where this glyph starts in text layout.

This is the horizontal position where the glyph begins, before
applying any character-specific offsets. In the text's local
coordinate space. Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphY"><code><span class="field-name">glyphY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glyphY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y-coordinate where this glyph starts in text layout.

This is the vertical position (baseline) where the glyph is placed,
before applying any character-specific offsets. In the text's local
coordinate space. Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-var has-description" id="glyphAdvance"><code><span class="field-name">glyphAdvance</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#glyphAdvance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal advance width for this glyph.

The distance to advance the cursor after rendering this character,
including the character width and spacing. Does not include kerning
with the next character. Set to -1 when the quad is not active.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears this glyph quad and prepares it for reuse.

Emits the clear event before calling the parent clear method,
allowing listeners to perform cleanup. This is typically called
when the quad is returned to a pool or when text content changes.

## Private Members

<div class="signature field-method has-description" id="emitClear"><code><span class="field-name">emitClear</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="#" class="type-link">GlyphQuad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when this glyph quad is cleared or recycled.

This event fires before the quad is returned to the pool or destroyed,
allowing cleanup of any references or custom data attached to the glyph.



| Name | Type | Description |
|------|------|-------------|
| `quad` | [GlyphQuad](/api-docs/unity/ceramic/GlyphQuad/) | The GlyphQuad being cleared |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this GlyphQuad for debugging.

Includes the character, index, line number, and position information
in a compact format suitable for logging or debugging text layout issues.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A string like "GlyphQuad(c=A,i=0,l=0,x=10.5,y=20.0)" |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


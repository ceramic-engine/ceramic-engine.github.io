---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasParser
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TextureAtlasParser/
---

# TextureAtlasParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TextureAtlasParser</strong> (Class)</div>

Parser for texture atlas definition files in multiple formats.

TextureAtlasParser reads and parses atlas definition files that describe
how images are packed into texture pages. It supports:
- LibGDX/Spine text format (.atlas)
- Starling/Sparrow XML format (.xml)
- Automatic format detection based on content

The parser extracts:
- Page definitions with texture file references
- Region coordinates and dimensions
- Trimming information (offsets and original sizes)
- Rotation data for optimally packed regions
- Filtering modes per page

```haxe
// Parse LibGDX format atlas
var atlasData = Assets.text('sprites.atlas');
var atlas = TextureAtlasParser.parse(atlasData);

// Load textures for each page
for (page in atlas.pages) {
    page.texture = Assets.texture(page.name);
}

// Compute UV coordinates
atlas.computeFrames();
```

<div class="see"><strong>See:</strong> TextureAtlas The resulting atlas structure, TextureAtlasRegion Individual regions parsed from the file, AtlasAsset For automatic loading and parsing</div>


## Static Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">rawTextureAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a texture atlas definition file into a TextureAtlas instance.

Automatically detects the format based on content:
- XML format: Starts with '<' (Starling/Sparrow)
- Text format: LibGDX/Spine format

The parser handles:
- Multiple pages with different textures
- Regions with trimming and rotation
- Filter settings per page
- Automatic file extension stripping from region names



| Name | Type | Description |
|------|------|-------------|
| `rawTextureAtlas` | [String](/api-docs/clay-native/String/) | The raw text content of the atlas file  |

| Returns | Description |
|---------|-------------|
| [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) | Parsed TextureAtlas ready for texture assignment  |

## Private Members

<div class="signature field-method has-description" id="convertXmlTextureAtlas"><code><span class="field-name">convertXmlTextureAtlas</span><span class="parenthesis">(</span><span class="arg-name">rawTextureAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#convertXmlTextureAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts Starling/Sparrow XML format to LibGDX text format.

This internal method transforms XML atlas definitions into the
text-based format that the main parser understands. It extracts:
- Image path from root element
- SubTexture elements with coordinates
- Frame offsets for trimmed sprites
- Rotation flags



| Name | Type | Description |
|------|------|-------------|
| `rawTextureAtlas` | [String](/api-docs/clay-native/String/) | XML content to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Equivalent atlas data in text format  |


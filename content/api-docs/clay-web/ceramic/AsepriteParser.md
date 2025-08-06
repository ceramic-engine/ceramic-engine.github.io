---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteParser
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteParser/
---

# AsepriteParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteParser</strong> (Class)</div>

Parser for Aseprite (.ase/.aseprite) animation files.

This class provides utilities to parse Aseprite files and convert them into
formats usable by the Ceramic engine. It handles layer compositing, frame
extraction, texture atlas packing, and sprite sheet generation.

Key features:
- Parses all Aseprite data including frames, layers, tags, slices, and palettes
- Composites layers with proper blend modes and opacity
- Detects and deduplicates identical frames to save memory
- Packs frames into texture atlases for efficient rendering
- Generates sprite sheets for animation playback (when sprite plugin is enabled)
- Supports indexed color mode with palette lookups
- Handles premultiplied alpha for correct blending

The parser supports all standard Aseprite blend modes including:
Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge,
Color Burn, Hard Light, Soft Light, Difference, Exclusion,
Hue, Saturation, Color, Luminosity, Addition, Subtract, and Divide.

<div class="see"><strong>See:</strong> AsepriteData for the parsed data structure, AsepriteBlendFuncs for blend mode implementations</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="parseAse"><div class="plugin-name">ase</div><code><span class="field-name">parseAse</span><span class="parenthesis">(</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Ase/" class="type-link">ase.Ase</a><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">atlasPacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">singleFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">premultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteData/" class="type-link">AsepriteData</a></code><a class="header-anchor" href="#parseAse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an Aseprite file and returns structured data for use in Ceramic.

This method processes all frames, composites layers, detects duplicates,
and optionally packs frames into a texture atlas.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ase` | [ase.Ase](/api-docs/clay-web/ase/Ase/) | | The raw Aseprite file data to parse  |
| `prefix` | [String](/api-docs/clay-web/String/) | | Prefix for naming texture regions in the atlas (e.g., "player")  |
| `atlasPacker` | [TextureAtlasPacker](/api-docs/clay-web/ceramic/TextureAtlasPacker/) | *(optional)* | Optional texture atlas packer to add frames to  |
| `singleFrame` | [Int](/api-docs/clay-web/Int/) | `-1` | If >= 0, only parse up to this frame number (for partial loading)  |
| `premultiplyAlpha` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether to premultiply alpha for correct GPU blending (default: true)  |
| `options` | AnonStruct | *(optional)* | Optional parsing options: - layers: Array of layer names to include (null = all visible layers)  |

| Returns | Description |
|---------|-------------|
| [AsepriteData](/api-docs/clay-web/ceramic/AsepriteData/) | Parsed AsepriteData containing frames, tags, layers, and atlas references |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseTextureFromAsepriteData"><div class="plugin-name">ase</div><code><span class="field-name">parseTextureFromAsepriteData</span><span class="parenthesis">(</span><span class="arg-name">asepriteData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteData/" class="type-link">AsepriteData</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#parseTextureFromAsepriteData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a texture from a specific frame in parsed Aseprite data.

This method is useful when you need a standalone texture from a single frame
rather than using the texture atlas. It handles frame deduplication and
proper positioning of trimmed frames.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `asepriteData` | [AsepriteData](/api-docs/clay-web/ceramic/AsepriteData/) | | The parsed Aseprite data  |
| `frame` | [Int](/api-docs/clay-web/Int/) | | Frame index to extract (0-based)  |
| `density` | [Float](/api-docs/clay-web/Float/) | `1` | Texture density for high-DPI displays (default: 1)  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-web/ceramic/Texture/) | A new Texture containing the frame's pixels, or null if frame not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseGridTextureFromAsepriteData"><div class="plugin-name">ase</div><code><span class="field-name">parseGridTextureFromAsepriteData</span><span class="parenthesis">(</span><span class="arg-name">asepriteData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteData/" class="type-link">AsepriteData</a><span class="operator">,</span> <span class="arg-name">frameStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frameEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">texHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">padding</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#parseGridTextureFromAsepriteData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a grid texture containing multiple frames from Aseprite data.

This method arranges frames in a grid layout within a single texture,
useful for sprite sheets or tile sets that need a specific layout.
Frames are arranged left-to-right, top-to-bottom with configurable spacing.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `asepriteData` | [AsepriteData](/api-docs/clay-web/ceramic/AsepriteData/) | | The parsed Aseprite data  |
| `frameStart` | [Int](/api-docs/clay-web/Int/) | | First frame index to include (0-based)  |
| `frameEnd` | [Int](/api-docs/clay-web/Int/) | | Last frame index to include (inclusive)  |
| `texWidth` | [Int](/api-docs/clay-web/Int/) | | Width of the output texture  |
| `texHeight` | [Int](/api-docs/clay-web/Int/) | | Height of the output texture  |
| `spacing` | [Int](/api-docs/clay-web/Int/) | `0` | Pixels between frames (default: 0)  |
| `padding` | [Int](/api-docs/clay-web/Int/) | `0` | Pixels of padding around the entire grid (default: 0)  |
| `density` | [Float](/api-docs/clay-web/Float/) | `1` | Texture density for high-DPI displays (default: 1)  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-web/ceramic/Texture/) | A new Texture containing the frame grid  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseSheetFromAsepriteData"><div class="plugin-name">sprite</div><code><span class="field-name">parseSheetFromAsepriteData</span><span class="parenthesis">(</span><span class="arg-name">asepriteData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteData/" class="type-link">AsepriteData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#parseSheetFromAsepriteData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a sprite sheet from parsed Aseprite data.

This method generates a SpriteSheet with animations based on the tags
defined in the Aseprite file. Each tag becomes an animation with proper
frame sequencing, durations, and loop settings.

The sprite sheet uses the texture atlas from the AsepriteData for
efficient rendering of animations.

Only available when the sprite plugin is enabled.



| Name | Type | Description |
|------|------|-------------|
| `asepriteData` | [AsepriteData](/api-docs/clay-web/ceramic/AsepriteData/) | The parsed Aseprite data containing frames and tags  |

| Returns | Description |
|---------|-------------|
| [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) | A new SpriteSheet ready for animation playback |

## Private Members

<div class="signature field-method has-description has-plugin" id="parseAseFramePixels"><div class="plugin-name">ase</div><code><span class="field-name">parseAseFramePixels</span><span class="parenthesis">(</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Ase/" class="type-link">ase.Ase</a><span class="operator">,</span> <span class="arg-name">palette</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepritePalette/" class="type-link">AsepritePalette</a><span class="operator">,</span> <span class="arg-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ase/chunks/LayerChunk/" class="type-link">ase.chunks.LayerChunk</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteFrame/" class="type-link">AsepriteFrame</a><span class="operator">,</span> <span class="arg-name">allFrameLayers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AsepriteFrameLayer/" class="type-link">AsepriteFrameLayer</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">filterLayers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#parseAseFramePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses and composites pixel data for a single frame.

This internal method handles the complex task of:
- Extracting cel data from each layer
- Handling linked cels that reference other frames
- Computing the packed bounds by trimming transparent pixels
- Compositing layers with blend modes and opacity



| Name | Type | Description |
|------|------|-------------|
| `ase` | [ase.Ase](/api-docs/clay-web/ase/Ase/) | The Aseprite file data  |
| `palette` | [AsepritePalette](/api-docs/clay-web/ceramic/AsepritePalette/) | Color palette for indexed color mode  |
| `layers` | [Array](/api-docs/clay-web/Array/)<[ase.chunks.LayerChunk](/api-docs/clay-web/ase/chunks/LayerChunk/)> | Array of layer definitions  |
| `frame` | [AsepriteFrame](/api-docs/clay-web/ceramic/AsepriteFrame/) | The frame to parse pixels for  |
| `allFrameLayers` | [Array](/api-docs/clay-web/Array/)<[Array](/api-docs/clay-web/Array/)<[AsepriteFrameLayer](/api-docs/clay-web/ceramic/AsepriteFrameLayer/)>> | Accumulated frame layer data for linked cel lookups  |
| `filterLayers` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Optional array of layer names to include (null = all visible) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixels"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixels</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">blendMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/LayerBlendMode/" class="type-link">ase.chunks.LayerBlendMode</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `blendMode` | [ase.chunks.LayerBlendMode](/api-docs/clay-web/ase/chunks/LayerBlendMode/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsNormal"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsNormal</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsMultiply"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsMultiply</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsMultiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsScreen"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsScreen</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsOverlay"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsOverlay</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsOverlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsDarken"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsDarken</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsDarken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsLighten"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsLighten</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsLighten"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsColorDodge"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsColorDodge</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsColorDodge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsColorBurn"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsColorBurn</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsColorBurn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsHardLight"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsHardLight</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsHardLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsSoftLight"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsSoftLight</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsSoftLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsDifference"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsDifference</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsDifference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsExclusion"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsExclusion</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsExclusion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsHue"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsHue</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsHue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsSaturation"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsSaturation</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsSaturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsColor"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsColor</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsLuminosity"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsLuminosity</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsLuminosity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsAddition"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsAddition</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsAddition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsSubtract"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsSubtract</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsSubtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="blendAseFrameLayerPixelsDivide"><div class="plugin-name">ase</div><code><span class="field-name">blendAseFrameLayerPixelsDivide</span><span class="parenthesis">(</span><span class="arg-name">srcBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">srcBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="arg-name">dstBufferWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">opacity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blendAseFrameLayerPixelsDivide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `srcBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `dstBuffer` | [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) |
| `dstBufferWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcX` | [Int](/api-docs/clay-web/Int/) |
| `srcY` | [Int](/api-docs/clay-web/Int/) |
| `srcWidth` | [Int](/api-docs/clay-web/Int/) |
| `srcHeight` | [Int](/api-docs/clay-web/Int/) |
| `dstX` | [Int](/api-docs/clay-web/Int/) |
| `dstY` | [Int](/api-docs/clay-web/Int/) |
| `opacity` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseAseCelPixels"><div class="plugin-name">ase</div><code><span class="field-name">parseAseCelPixels</span><span class="parenthesis">(</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Ase/" class="type-link">ase.Ase</a><span class="operator">,</span> <span class="arg-name">palette</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepritePalette/" class="type-link">AsepritePalette</a><span class="operator">,</span> <span class="arg-name">celChunk</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/CelChunk/" class="type-link">ase.chunks.CelChunk</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#parseAseCelPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts pixel data from a cel chunk.

Handles different color depths:
- 32-bit RGBA: Direct pixel data
- 16-bit Grayscale+Alpha: Converted to RGBA
- 8-bit Indexed: Palette lookup to RGBA



| Name | Type | Description |
|------|------|-------------|
| `ase` | [ase.Ase](/api-docs/clay-web/ase/Ase/) | The Aseprite file data for color depth info  |
| `palette` | [AsepritePalette](/api-docs/clay-web/ceramic/AsepritePalette/) | Color palette for indexed color mode  |
| `celChunk` | [ase.chunks.CelChunk](/api-docs/clay-web/ase/chunks/CelChunk/) | The cel containing compressed pixel data  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) | RGBA pixel data as UInt8Array |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteData
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteData/
---

# AsepriteData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.AsepriteData</strong> (Class)</div>

Data structure containing parsed Aseprite file information.

This class holds all the data extracted from an Aseprite (.ase/.aseprite) file,
including frames, layers, tags, slices, and palette information. It manages
the texture atlas used to pack frame images and optionally creates sprite sheets
for animation playback.

The data is typically created by AsepriteParser and can be used to:
- Access individual frames and their pixel data
- Create animated sprites using tags
- Extract slice information for UI elements
- Access layer data for compositing

<div class="see"><strong>See:</strong> AsepriteParser for loading Aseprite files, AsepriteFrame for frame data structure, Sprite for animation playback (when sprite plugin is enabled)</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="ase"><div class="plugin-name">ase</div><code><span class="field-name">ase</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Ase/" class="type-link">ase.Ase</a></code><a class="header-anchor" href="#ase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The raw Aseprite format file data.
Contains low-level file structure information from the ase library.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="palette"><div class="plugin-name">ase</div><code><span class="field-name">palette</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepritePalette/" class="type-link">AsepritePalette</a></code><a class="header-anchor" href="#palette"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color palette extracted from the Aseprite file.
For indexed color mode sprites, this defines the available colors.
For RGB mode sprites, this may be null or unused.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tags"><div class="plugin-name">ase</div><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Animation tags defined in the Aseprite file.
Tags mark frame ranges that can be played as animations.
Keys are tag names, values contain frame range and loop information.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slices"><div class="plugin-name">ase</div><code><span class="field-name">slices</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#slices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Slices defined in the Aseprite file.
Slices mark rectangular regions that can be used for 9-slice scaling
or to define UI element boundaries.
Keys are slice names, values contain bounds and pivot data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layers"><div class="plugin-name">ase</div><code><span class="field-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ase/chunks/LayerChunk/" class="type-link">ase.chunks.LayerChunk</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#layers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layer information from the Aseprite file.
Layers are composited together to create the final frames.
Array is ordered from bottom to top layer.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duration"><div class="plugin-name">ase</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total duration of the complete animation in seconds.
This is the sum of all frame durations in the sprite.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="prefix"><div class="plugin-name">ase</div><code><span class="field-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#prefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prefix used for naming texture regions in the atlas.
Frame regions are named as "prefix#frameNumber".
This allows multiple Aseprite files to share the same atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frames"><div class="plugin-name">ase</div><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AsepriteFrame/" class="type-link">AsepriteFrame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All frames extracted from the Aseprite file.
Each frame contains the composited image data and timing information.
Frames are ordered by frame number (0-based).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlasPacker"><div class="plugin-name">ase</div><code><span class="field-name">atlasPacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a></code><a class="header-anchor" href="#atlasPacker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture atlas packer used to pack frame images.
This optimally arranges all frames into texture pages to minimize
texture switches during rendering.
May be null if frames are not packed into an atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlas"><div class="plugin-name">ase</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture atlas containing all packed frames.
This is a convenience accessor for atlasPacker.atlas.
Returns null if frames are not packed into an atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="imageAsset"><div class="plugin-name">ase</div><code><span class="field-name">imageAsset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ImageAsset/" class="type-link">ImageAsset</a></code><a class="header-anchor" href="#imageAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image asset that loaded this Aseprite data.
Kept for reference counting and automatic cleanup.
May be null if data was created programmatically.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">ase</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys this AsepriteData and all associated resources.
This includes:
- The sprite sheet (if sprite plugin is enabled)
- Texture regions in the atlas
- Associated sprite and image assets

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ase</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">ase</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Ase/" class="type-link">ase.Ase</a><span class="operator">,</span> <span class="arg-name">palette</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepritePalette/" class="type-link">AsepritePalette</a><span class="operator">,</span> <span class="arg-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="arg-name">slices</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="arg-name">layers</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ase/chunks/LayerChunk/" class="type-link">ase.chunks.LayerChunk</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AsepriteFrame/" class="type-link">AsepriteFrame</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">atlasPacker</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/TextureAtlasPacker/" class="type-link">TextureAtlasPacker</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">imageAsset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ImageAsset/" class="type-link">ImageAsset</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sheet</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">spriteAsset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteAsset/" class="type-link">SpriteAsset</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ase` | [ase.Ase](/api-docs/clay-web/ase/Ase/) | | * The raw Aseprite format file data. Contains low-level file structure information from the ase library. Create a new entity. |
| `palette` | [AsepritePalette](/api-docs/clay-web/ceramic/AsepritePalette/) | | * The color palette extracted from the Aseprite file. For indexed color mode sprites, this defines the available colors. For RGB mode sprites, this may be null or unused. |
| `tags` | [Map](/api-docs/clay-web/Map/) | | * Animation tags defined in the Aseprite file. Tags mark frame ranges that can be played as animations. Keys are tag names, values contain frame range and loop information. |
| `slices` | [Map](/api-docs/clay-web/Map/) | | * Slices defined in the Aseprite file. Slices mark rectangular regions that can be used for 9-slice scaling or to define UI element boundaries. Keys are slice names, values contain bounds and pivot data. |
| `layers` | [Array](/api-docs/clay-web/Array/)<[ase.chunks.LayerChunk](/api-docs/clay-web/ase/chunks/LayerChunk/)> | | * Layer information from the Aseprite file. Layers are composited together to create the final frames. Array is ordered from bottom to top layer. |
| `duration` | [Float](/api-docs/clay-web/Float/) | | * Total duration of the complete animation in seconds. This is the sum of all frame durations in the sprite. |
| `prefix` | [String](/api-docs/clay-web/String/) | | * Prefix used for naming texture regions in the atlas. Frame regions are named as "prefix#frameNumber". This allows multiple Aseprite files to share the same atlas. |
| `frames` | [Array](/api-docs/clay-web/Array/)<[AsepriteFrame](/api-docs/clay-web/ceramic/AsepriteFrame/)> | | * All frames extracted from the Aseprite file. Each frame contains the composited image data and timing information. Frames are ordered by frame number (0-based). |
| `atlasPacker` | [Null](/api-docs/clay-web/Null/)<[TextureAtlasPacker](/api-docs/clay-web/ceramic/TextureAtlasPacker/)> | *(optional)* | * The texture atlas packer used to pack frame images. This optimally arranges all frames into texture pages to minimize texture switches during rendering. May be null if frames are not packed into an atlas. |
| `imageAsset` | [Null](/api-docs/clay-web/Null/)<[ImageAsset](/api-docs/clay-web/ceramic/ImageAsset/)> | *(optional)* | * The image asset that loaded this Aseprite data. Kept for reference counting and automatic cleanup. May be null if data was created programmatically. |
| `sheet` | [Null](/api-docs/clay-web/Null/)<[SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/)> | *(optional)* | * The sprite sheet created from the Aseprite frames. This provides animation playback functionality when the sprite plugin is enabled. Automatically destroyed when the AsepriteData is destroyed. |
| `spriteAsset` | [Null](/api-docs/clay-web/Null/)<[SpriteAsset](/api-docs/clay-web/ceramic/SpriteAsset/)> | *(optional)* | * The sprite asset that loaded this Aseprite data. Used when the Aseprite file is loaded as a sprite asset. Kept for reference counting and automatic cleanup. |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sheet"><div class="plugin-name">sprite</div><code><span class="field-name">sheet</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#sheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sprite sheet created from the Aseprite frames.
This provides animation playback functionality when the sprite plugin is enabled.
Automatically destroyed when the AsepriteData is destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spriteAsset"><div class="plugin-name">sprite</div><code><span class="field-name">spriteAsset</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteAsset/" class="type-link">SpriteAsset</a></code><a class="header-anchor" href="#spriteAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sprite asset that loaded this Aseprite data.
Used when the Aseprite file is loaded as a sprite asset.
Kept for reference counting and automatic cleanup.

## Private Members

<div class="signature field-method has-description has-plugin" id="destroySheet"><div class="plugin-name">ase</div><code><span class="field-name">destroySheet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroySheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the sprite sheet if it exists.
Ensures the atlas reference is cleared before destruction
to prevent double-freeing of texture resources.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:structInit` | - |


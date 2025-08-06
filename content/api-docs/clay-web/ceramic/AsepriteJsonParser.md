---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: AsepriteJsonParser
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteJsonParser/
---

# AsepriteJsonParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/AsepriteJsonParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteJsonParser</strong> (Class)</div>

Parser for Aseprite JSON format sprite sheets.
Converts Aseprite JSON data into Ceramic's TextureAtlas and SpriteSheet structures.

Supports:
- Frame extraction with trimming and rotation
- Animation sequences from frame tags
- Directional playback (forward, reverse, pingpong)
- Frame timing information

Note: Only supports the array format for frames, not the hash format.

## Static Members

<div class="signature field-method has-description has-plugin" id="isAsepriteJson"><div class="plugin-name">sprite</div><code><span class="field-name">isAsepriteJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAsepriteJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if the provided JSON data is in Aseprite format.


| Name | Type | Description |
|------|------|-------------|
| `json` | [Dynamic](/api-docs/clay-web/Dynamic/) | The JSON data to validate  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if this is valid Aseprite JSON with frames as an array |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseAtlasFromJson"><div class="plugin-name">sprite</div><code><span class="field-name">parseAtlasFromJson</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteJson/" class="type-link">AsepriteJson</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#parseAtlasFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse Aseprite JSON data into a TextureAtlas.
Creates texture regions for each frame in the sprite sheet.


| Name | Type | Description |
|------|------|-------------|
| `data` | [AsepriteJson](/api-docs/clay-web/ceramic/AsepriteJson/) | The Aseprite JSON data  |

| Returns | Description |
|---------|-------------|
| [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | A TextureAtlas containing all frame regions |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseSheetFromJson"><div class="plugin-name">sprite</div><code><span class="field-name">parseSheetFromJson</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/AsepriteJson/" class="type-link">AsepriteJson</a><span class="operator">,</span> <span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#parseSheetFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse Aseprite JSON data into a SpriteSheet with animations.
Creates animation sequences from frame tags with proper timing.


| Name | Type | Description |
|------|------|-------------|
| `data` | [AsepriteJson](/api-docs/clay-web/ceramic/AsepriteJson/) | The Aseprite JSON data  |
| `atlas` | [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | The TextureAtlas containing frame regions  |

| Returns | Description |
|---------|-------------|
| [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) | A SpriteSheet with all animations configured |

## Private Members

<div class="signature field-var has-description has-plugin" id="didLogHashWarning"><div class="plugin-name">sprite</div><code><span class="field-name">didLogHashWarning</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didLogHashWarning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag to prevent spamming warnings about unsupported formats.


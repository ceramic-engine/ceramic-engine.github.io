---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteSheetParser
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpriteSheetParser/
---

# SpriteSheetParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSheetParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpriteSheetParser</strong> (Class)</div>

Generic sprite sheet data parser with auto-detection.
Automatically identifies the format of sprite sheet data and
delegates to the appropriate parser.

Currently supports:
- Aseprite JSON format (detected by JSON structure)

The parser is extensible - new formats can be added by checking
for format-specific markers and delegating to appropriate parsers.

## Static Members

<div class="signature field-method has-description has-plugin" id="parseAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">parseAtlas</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#parseAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse sprite sheet data into a TextureAtlas.
Auto-detects the format and uses the appropriate parser.


| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | Raw sprite sheet data text  |

| Returns | Description |
|---------|-------------|
| [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | Parsed TextureAtlas, or null if format is not recognized |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseSheet"><div class="plugin-name">sprite</div><code><span class="field-name">parseSheet</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#parseSheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse sprite sheet data into a SpriteSheet with animations.
Auto-detects the format and uses the appropriate parser.


| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | Raw sprite sheet data text  |
| `atlas` | [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | The TextureAtlas to use for this sheet  |

| Returns | Description |
|---------|-------------|
| [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) | Parsed SpriteSheet with animations, or null if format is not recognized |


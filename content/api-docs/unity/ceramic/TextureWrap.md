---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureWrap
target: Unity
permalink: api-docs/unity/ceramic/TextureWrap/
---

# TextureWrap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureWrap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TextureWrap</strong> (Abstract)</div>

Texture wrapping modes for handling UV coordinates outside the 0-1 range.

TextureWrap determines how textures behave when UV coordinates exceed
their normal bounds during rendering. This is essential for:
- Tiling patterns and backgrounds
- Seamless textures
- Edge handling in texture atlases
- Special effects requiring texture repetition

The wrap mode affects both horizontal (U) and vertical (V) directions
independently, though Ceramic typically applies the same mode to both axes.

```haxe
// Create a tiling background
var background = new Quad();
background.texture = assets.texture('pattern.png');
background.texture.wrapS = REPEAT;
background.texture.wrapT = REPEAT;

// Scale UV coordinates to create tiling
background.scaleUV(10, 10); // 10x10 tile pattern
```

<div class="see"><strong>See:</strong> Texture.wrapS Horizontal wrap mode property, Texture.wrapT Vertical wrap mode property</div>


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:enum` | - |


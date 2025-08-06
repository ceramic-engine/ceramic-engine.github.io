---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: AsepriteJson
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteJson/
---

# AsepriteJson

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/AsepriteJson.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteJson</strong> (Typedef)</div>

Data structure representing the JSON format exported by Aseprite.
This format contains sprite sheet metadata including frame information,
animations (frame tags), layers, and slices.

Example JSON (Aseprite array format):
```json
{
  "frames": [
    {
      "filename": "hero 0.png",
      "frame": {"x": 0, "y": 0, "w": 32, "h": 32},
      "rotated": false,
      "trimmed": true,
      "spriteSourceSize": {"x": 4, "y": 2, "w": 24, "h": 30},
      "sourceSize": {"w": 32, "h": 32},
      "duration": 100
    },
    {
      "filename": "hero 1.png",
      "frame": {"x": 32, "y": 0, "w": 32, "h": 32},
      "rotated": false,
      "trimmed": true,
      "spriteSourceSize": {"x": 4, "y": 2, "w": 24, "h": 30},
      "sourceSize": {"w": 32, "h": 32},
      "duration": 100
    },
    {
      "filename": "hero 2.png",
      "frame": {"x": 64, "y": 0, "w": 32, "h": 32},
      "rotated": false,
      "trimmed": true,
      "spriteSourceSize": {"x": 4, "y": 2, "w": 24, "h": 30},
      "sourceSize": {"w": 32, "h": 32},
      "duration": 100
    },
    {
      "filename": "hero 3.png",
      "frame": {"x": 96, "y": 0, "w": 32, "h": 32},
      "rotated": false,
      "trimmed": true,
      "spriteSourceSize": {"x": 4, "y": 2, "w": 24, "h": 30},
      "sourceSize": {"w": 32, "h": 32},
      "duration": 100
    }
  ],
  "meta": {
    "app": "aseprite",
    "version": "1.3.1",
    "image": "hero-spritesheet.png",
    "format": "RGBA8888",
    "size": {"w": 128, "h": 32},
    "scale": "1",
    "frameTags": [
      {
        "name": "idle",
        "from": 0,
        "to": 1,
        "direction": "forward"
      },
      {
        "name": "walk",
        "from": 2,
        "to": 3,
        "direction": "forward"
      }
    ],
    "layers": [
      {
        "name": "Body",
        "opacity": 255,
        "blendMode": "normal"
      }
    ],
    "slices": []
  }
}
```

Note: This parser only supports the JSON array format. When exporting from Aseprite,
use File > Export Sprite Sheet and select "JSON data" with "Array" format.
While designed for Aseprite, any tool can generate compatible JSON following this structure.


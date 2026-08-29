---
layout: examples
category: examples
menu: Samples
title: Sprite Animation
permalink: examples/sprite-animation/
sample: sprite-animation
description: Animate characters from a sprite sheet built in code with the sprite plugin, switch animations and playback speed.
---

Animate characters from a sprite sheet grid using the `sprite` plugin. Press **SPACE** (or click) to switch character, **W**/**I** to toggle walk/idle, **1-4** to change the playback speed.

```haxe
// Build a sprite sheet from a texture, in code
var sheet = new SpriteSheet();
sheet.texture = assets.texture(Images.CHARACTERS);
sheet.grid(24, 24);
sheet.addGridAnimation('idle', [0], 0);
sheet.addGridAnimation('walk', [0, 1], 0.15);

// Create a sprite playing an animation
var sprite = new Sprite();
sprite.sheet = sheet;
sprite.animation = 'walk';
add(sprite);
```

Sheets can also be loaded from aseprite files with the `ase` plugin.

(Assets from [Kenney Game Assets](https://www.kenney.nl/assets/pixel-platformer))

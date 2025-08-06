---
layout: guides
category: guides
menu: Handbook
title: Sprites
permalink: guides/sprites/
---
# Sprites

Sprites are a fundamental building block for 2D games. In Ceramic, the `Sprite` visual displays animations from sprite sheets, supporting frame-by-frame animation playback with timing control, easing, and automatic size computation.

A summary:

* `Sprite` is a specialized `Visual` that plays animations from sprite sheet data.

* Sprite sheets can be loaded from various formats including Aseprite `.ase`/`.aseprite` file, JSON exports, grid-based layouts or custom definitions.

* Animations play automatically with configurable speed, looping, and easing.

* Sprites are part of the **sprite** plugin which needs to be enabled in your project.

## Basic sprite usage

Here's how to create and display an animated sprite:

<div class="codename">Loading and displaying a sprite</div>

```haxe
import ceramic.Scene;
import ceramic.Sprite;

class MySpriteScene extends Scene {

    override function preload() {

        // Load sprite sheet data
        assets.add(Sprites.CHARACTER);

    }

    override function create() {

        // Create a sprite
        var sprite = new Sprite();

        // Assign the loaded sprite sheet
        sprite.sheet = assets.sheet(Sprites.CHARACTER);

        // Set anchor and position
        sprite.anchor(0.5, 1);
        sprite.pos(100, 200);

        // Enable looping
        sprite.loop = true;

        // Play an animation
        sprite.animation = "walk";

        // Add to scene
        add(sprite);

    }

}
```

## Creating sprite sheets

Ceramic supports multiple ways to create sprite sheets:

### From Aseprite

Ceramic can load Aseprite files directly using the **ase** plugin:

```haxe
// Load .ase or .aseprite file directly
assets.add(Sprites.CHARACTER); // character.ase in assets folder
```

This is the recommended approach as it:
- Automatically extracts all animations from your Aseprite tags
- Preserves frame timing information
- No manual export step needed

<p class="extra-info">Make sure both <strong>sprite</strong> and <strong>ase</strong> plugin are enabled in your project to use <code>.ase</code>/<code>.aseprite</code> files directly. Your animation tags in Aseprite will become the animation names you can play in Ceramic.</p>

Alternatively, you can export JSON from Aseprite:

1. Create your animations in Aseprite with tagged frames
2. Export as "Sprite Sheet" with JSON data enabled and using JSON Array export.
3. Rename the exported `.json` file to `.sprite` extension
4. Place both the `.png` and `.sprite` files in your `assets/` folder

<p class="extra-info">Any external software could become compatible with Ceramic as well if it exports that same JSON format. Take a look at the <a href="/api-docs/clay-native/ceramic/AsepriteJson/">AsepriteJson</a> reference to get an example of JSON</p>

### Grid-based sprite sheets

For simple grid-based sprite sheets where all frames have the same size, you can create the animation directly from a texture:

```haxe
// Create a sprite sheet manually
var sheet = new SpriteSheet();

// Set the texture
sheet.texture = assets.texture(Images.SPRITES);

// Define grid dimensions (width, height per frame)
sheet.grid(32, 32);

// Add animations by specifying grid indices
sheet.addGridAnimation("idle", 0, 3, 0.2);    // frames 0-3, 0.2s per frame
sheet.addGridAnimation("walk", 4, 11, 0.1);   // frames 4-11, 0.1s per frame
sheet.addGridAnimation("jump", 12, 15, 0.15); // frames 12-15, 0.15s per frame

// Use with a sprite
sprite.sheet = sheet;
sprite.animation = "walk";
```

## Controlling animations

Sprites provide several properties to control playback:

```haxe
// Play/pause animation
sprite.paused = false;

// Control playback speed (1.0 = normal, 2.0 = double speed)
sprite.timeScale = 1.5;

// Enable/disable looping
sprite.loop = true;

// Apply easing to the animation timeline,
// making a linear animation feel different
sprite.easing = Easing.QUAD_IN_OUT;

// Manually set playback time (in seconds)
sprite.time = 0.5;

// Get the current animation name
trace(sprite.animationName); // "walk"
```

## Sprite sizing

By default, sprites automatically resize to match their current animation frame:

```haxe
// Enable automatic sizing (default)
sprite.autoComputeSize = true;

// Or manually control the size
sprite.autoComputeSize = false;
sprite.size(64, 64);

// Adjust frame offset for fine-tuning
sprite.frameOffset(5, -10);
```

## Advanced usage

### Manual update control

For cases where you need precise control over animation timing:

```haxe
// Disable automatic updates
sprite.autoUpdate = false;

// Update manually in your game loop
override function update(delta:Float) {
    // Custom update logic
    if (shouldAnimate) {
        sprite.update(delta * customSpeed);
    }
}
```

### Working with texture atlases

Sprites work seamlessly with texture atlases. You can use atlases and sprites to display static non-animated regions (with full support of region offsets), and you can create sprite sheets from atlases that you can use on sprite objects to display animations!

<div class="codename">Load the atlas</div>

```haxe
// Load a texture atlas (in scene preload())
assets.add(Atlas.GAME_SPRITES);
```

<div class="codename">Use an atlas region</div>

```haxe
// Get an atlas
var atlas = assets.atlas(Atlas.GAME_SPRITES);

// Assign a region (not animated) to a sprite
sprite.region = atlas.region("wall");
```

<div class="codename">Create a sprite sheet from the atlas</div>

```haxe
// Alternatively, create sprite sheet from atlas regions
var sheet = new SpriteSheet();
sheet.atlas = atlas;

// Add animations using atlas region names
var walkFrames = [
    atlas.region("character_walk_1"),
    atlas.region("character_walk_2"),
    atlas.region("character_walk_3"),
    atlas.region("character_walk_4")
];

// Create animation from regions
var walkAnim = new SpriteSheetAnimation();
walkAnim.name = "walk";
walkAnim.frames = [for (region in walkFrames) {
    var frame = new SpriteSheetFrame();
    frame.frame = region;
    frame.duration = 0.1;
    frame;
}];

sheet.addAnimation(walkAnim);

// Use the sheet on the sprite
sprite.sheet = sheet;
sprite.animation = "walk";
```

## Tips

* Reuse sprite sheets across multiple sprite instances - they're designed to be shared.

## See also

* [Visuals](/guides/visuals/) - Learn about the Visual base class
* [Assets](/guides/assets/) - Understand asset loading (for loading sprites)
---
layout: guides
category: guides
menu: Handbook
title: Cameras
permalink: guides/cameras/
---
# Cameras

When your world is larger than the screen, you need a camera: something that decides which part of the world is visible, follows the player smoothly, and stops at the world's edges. **Ceramic** provides a [Camera](/api-docs/clay-native/ceramic/Camera/) class that handles all of this.

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/camera-follow/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/camera-follow/">camera follow</a> example. Move with WASD or arrow keys.</div>

## How it works

`Camera` is not a visual: it's a small computation object. You describe your **viewport** (the visible area, usually your scene size) and your **content** (the world bounds), you give it a **target** to follow, and it computes a `Transform` that you assign to the visual containing your world:

<div class="codename">Setting up a camera</div>

```haxe
// The layer that contains everything the camera moves
var world = new Layer();
add(world);

var camera = new Camera();

// The camera computes a transform: assign it to the world layer.
// From now on, moving the camera moves the world.
world.transform = camera.contentTransform;
```

Then, at every frame (typically in your scene's `update()`, or in `app.onPostUpdate()` to be sure everything else moved first):

<div class="codename">Updating the camera every frame</div>

```haxe
// Describe the viewport (what we see) and the content (the world)
camera.viewportWidth = width;
camera.viewportHeight = height;
camera.contentX = 0;
camera.contentY = 0;
camera.contentWidth = WORLD_WIDTH;
camera.contentHeight = WORLD_HEIGHT;

// Follow the player
camera.followTarget = true;
camera.target(player.x, player.y);

// Let the camera compute its transform
camera.update(delta);
```

<p class="extra-info">Why manual updates? Because a camera usually needs to run <strong>after</strong> the gameplay moved everything, and different games have different update orders. By calling <code>camera.update(delta)</code> yourself, you stay in control. The <a href="/examples/pixel-platformer/">pixel platformer</a> example uses <code>app.onPostUpdate()</code> for that.</p>

## Smooth tracking and dead zone

The camera doesn't teleport to its target: it tracks it smoothly. Several properties let you tune the feel:

| Property | Role |
|---|---|
| `trackSpeedX` / `trackSpeedY` | How fast the camera catches up with its target |
| `trackCurve` | The shape of the catch-up motion |
| `deadZoneX` / `deadZoneY` | A zone around the center where the target can move without the camera reacting |
| `zoom` | Magnification factor |
| `clampToContentBounds` | Whether the camera stops at the content edges (enabled by default) |
| `brakeNearBoundsX` / `brakeNearBoundsY` | Slow down the camera when approaching bounds |

<div class="codename">Tuning the camera</div>

```haxe
camera.deadZoneX = 0.1;
camera.deadZoneY = 0.15;
camera.trackSpeedX = 80;
camera.trackCurve = 0.3;
camera.zoom = 1.5;
```

## Starting at a stable position

When the scene starts, you usually want the camera already centered on its target instead of traveling to it. A simple trick is to update it once with a very large delta:

<div class="codename">Snapping the camera on start</div>

```haxe
// A very big delta makes the camera converge immediately
updateCamera(99999);
```

## Related examples

* [Camera follow](/examples/camera-follow/): a minimal, focused camera setup
* [Pixel platformer](/examples/pixel-platformer/): a camera in a real game, combined with tilemaps and physics

---
layout: examples
category: examples
menu: Basics
title: Camera Follow
permalink: examples/camera-follow/
sample: camera-follow
description: A camera smoothly following a player inside a large world, with dead zone and content bounds, using the Camera class.
---

Move around with **WASD** or **arrow keys**: the `Camera` smoothly follows the player inside a large world, with a dead zone and clamping to the content bounds.

```haxe
var camera = new Camera();

// The camera computes a transform that we assign to our world layer
world.transform = camera.contentTransform;

// Each frame: describe the viewport & content, target the player,
// then let the camera update its transform
camera.viewportWidth = width;
camera.viewportHeight = height;
camera.contentWidth = WORLD_WIDTH;
camera.contentHeight = WORLD_HEIGHT;
camera.followTarget = true;
camera.target(player.x, player.y);
camera.update(delta);
```

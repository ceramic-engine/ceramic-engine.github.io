---
layout: examples
category: examples
menu: Samples
title: BunnyMark
permalink: examples/bunnymark/
sample: bunnymark
description: A benchmark with bunnies, adding thousands of bouncing quads on screen to stress the renderer.
---

<p class="extra-info">Hold the left mouse button (or touch the screen) to add more bunnies. Right click pauses or resumes the movement.</p>

<p class="extra-info">This sample does <strong>not</strong> tell you how Ceramic performs in a real game, and should not be used to answer that question. A real game does much more than moving quads around, and its performance depends on many other things. What it is useful for is comparing one version of Ceramic with another, or measuring raw rendering performance, even if that is far from real world use.</p>

A **bunnymark** is a *benchmark with bunnies*: each bunny is a textured `Quad` that bounces around the screen, and new bunnies are added 64 at a time while the pointer is held down. The counter at the top right shows the current FPS and the number of bunnies, so you can see how many quads can be moved and drawn before the frame rate drops.

```haxe
class Bunny extends Quad {

    public var velocityX:Float = 0;

    public var velocityY:Float = 0;

}

override function update(delta:Float) {

    // Add bunnies while the pointer is down
    if (screen.isPointerDown) {
        for (i in 0...64) {
            createBunny();
        }
    }

    // Move every bunny, bouncing on the screen edges
    for (bunny in bunnies) {
        bunny.velocityY += gravity * delta;
        bunny.x += bunny.velocityX * delta;
        bunny.y += bunny.velocityY * delta;
        // ...
    }

}
```

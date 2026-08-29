---
layout: examples
category: examples
menu: Samples
title: Scene Transitions
permalink: examples/scene-transitions/
sample: scene-transitions
description: Navigate between scenes with a custom "push" transition, by overriding Scene's fadeIn() and fadeOut() methods.
---

Navigate between two scenes with a custom transition. When the main scene is replaced, Ceramic plays the fade-out of the old scene and the fade-in of the new one **at the same time**: overriding `fadeIn()` and `fadeOut()` is all it takes.

Here both scenes slide by the exact same amount, with the same easing and duration: the outgoing scene exits to the left while the incoming one enters from the right, edge to edge. Because they move in lockstep, they never overlap (a "push" transition), and the whole thing still takes a single slide.

```haxe
class TransitionScene extends Scene {

    static final DURATION = 0.5;

    override function fadeIn(done:()->Void) {
        // Enter from the right, fully opaque
        x = width;
        Tween.start(this, QUAD_EASE_IN_OUT, DURATION, 0, 1, (value, time) -> {
            x = width * (1 - value);
        }).onceComplete(this, done);
    }

    override function fadeOut(done:()->Void) {
        // Exit to the left, in lockstep with the incoming scene
        Tween.start(this, QUAD_EASE_IN_OUT, DURATION, 0, 1, (value, time) -> {
            x = -width * value;
        }).onceComplete(this, done);
    }

}

// Then, switching scenes triggers the transitions:
app.scenes.main = new GameScene();
```

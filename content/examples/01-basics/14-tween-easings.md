---
layout: examples
category: examples
menu: Basics
title: Tween Easings
permalink: examples/tween-easings/
sample: tween-easings
description: A gallery displaying every tween easing available in Ceramic, side by side.
---

A gallery displaying every tween `Easing` available in Ceramic, side by side.

```haxe
// Tween.start() is the low level way of creating tweens
Tween.start(this, ELASTIC_EASE_OUT, 1.5, 0, 1, (value, time) -> {
    dot.x = trackStartX + trackWidth * value;
});

// On visuals, you can also use the tween() shorthand
visual.tween(BOUNCE_EASE_OUT, 0.5, 0, 300, (value, time) -> {
    visual.y = value;
});
```

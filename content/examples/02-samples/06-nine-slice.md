---
layout: examples
category: examples
menu: Samples
title: Nine-Slice
permalink: examples/nine-slice/
sample: nine-slice
---

A sample that demonstrates how to use `ceramic.NineSlice` visual to scale a texture with fixed borders.

```haxe
// Create NineSlice object
nineSlice = new NineSlice();
nineSlice.texture = assets.texture(Images.YELLOW_BUTTON);
nineSlice.slice(
    5, // top
    6, // right
    9, // bottom
    6 // left
);

// Set it to the position and size you want
nineSlice.pos(10, 10);
nineSlice.size(350, 150);
```

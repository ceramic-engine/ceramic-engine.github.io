---
layout: examples
category: examples
menu: Samples
title: Brush to Texture
permalink: examples/brush-to-texture/
sample: brush-to-texture
description: A little painting app that accumulates brush strokes into a RenderTexture using stamp().
---

A little painting app: drag to paint! Each brush stroke is stamped into a `RenderTexture` that accumulates everything drawn so far. Press **C** or click **[ clear ]** to erase.

```haxe
// A render texture that only updates when we stamp() into it
var renderTexture = new RenderTexture(width, height);
renderTexture.autoRender = false;
renderTexture.clearOnRender = false;

// A quad displaying it
var canvas = new Quad();
canvas.texture = renderTexture;
add(canvas);

// Stamp a (not displayed) brush visual into the texture
renderTexture.stamp(brush, () -> {
    // Stamped! The texture now contains the brush content
});

// Erase everything
renderTexture.clear(Color.WHITE, 0, () -> {});
```

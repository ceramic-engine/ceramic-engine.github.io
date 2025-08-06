---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ImageViewScaling
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImageViewScaling/
---

# ImageViewScaling

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ImageViewScaling.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImageViewScaling</strong> (Enum)</div>

Defines scaling modes for ImageView to control how images are sized within their bounds.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ImageView/">ImageView</a></div>


## Constructors

### CUSTOM

```haxe
CUSTOM
```

Uses a custom scale factor specified by imageScale property.
The image is scaled by the exact factor regardless of view bounds.
Useful for pixel-perfect rendering or specific zoom levels.

```haxe
imageView.scaling = CUSTOM;
imageView.imageScale = 2.0; // Double size
```

### FIT

```haxe
FIT
```

Scales the image to fit within the view bounds while maintaining aspect ratio.
The entire image will be visible, but there may be empty space if the
aspect ratios don't match. This is the default mode.

```haxe
imageView.scaling = FIT;
// Image will be fully visible within bounds
```

### FILL

```haxe
FILL
```

Scales the image to fill the entire view bounds while maintaining aspect ratio.
The image will cover the entire area, but parts may be cropped if the
aspect ratios don't match. Centers the image and crops edges as needed.

```haxe
imageView.scaling = FILL;
// Image will cover entire view, may be cropped
```

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |


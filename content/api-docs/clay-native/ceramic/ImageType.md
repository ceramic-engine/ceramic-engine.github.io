---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ImageType
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImageType/
---

# ImageType

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ImageType.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImageType</strong> (Abstract)</div>

Supported image file formats for loading and exporting images.

ImageType represents the different image formats that Ceramic can work with.
These formats are used when loading image assets, exporting render textures,
or specifying expected file types for image operations.

The enum is implemented as an abstract over String, allowing:
- Direct string conversion for file extensions
- Type-safe image format specification
- Easy integration with file system operations

```haxe
// Loading images with specific types
var texture = app.assets.texture('logo.png');

// Exporting render texture
renderTexture.exportToFile('screenshot.png', PNG);

// Checking file type
var extension = Path.extension(filename);
var imageType:ImageType = extension; // Auto-converts from string
```

<div class="see"><strong>See:</strong> ImageAsset For loading image files, RenderTexture.exportToFile For saving images, Texture The loaded image representation</div>


## Type Conversions

**From:**
- `[String](/api-docs/clay-native/String/)`

**To:**
- `[String](/api-docs/clay-native/String/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


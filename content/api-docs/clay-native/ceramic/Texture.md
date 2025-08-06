---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Texture
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Texture/
---

# Texture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Texture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Texture</strong> (Class) → <a href="/api-docs/clay-native/ceramic/RenderTexture/">RenderTexture</a></div>

A texture represents an image loaded in GPU memory ready for rendering.

Textures are the foundation for displaying images in Ceramic. They can be:
- Loaded from image files (PNG, JPG, etc.)
- Created from pixel data
- Generated as render targets
- Extracted from texture atlases

Features:
- Automatic density handling for different screen resolutions
- Filtering modes (NEAREST for pixel art, LINEAR for smooth scaling)
- Wrap modes for texture coordinates outside 0-1 range
- Reference counting through asset management
- Automatic cleanup when destroyed

Textures are typically obtained through asset loading rather than
created directly:

```haxe
// Load texture through assets
var texture = assets.texture('hero');

// Apply to a quad
var quad = new Quad();
quad.texture = texture;

// Configure for pixel art
texture.filter = NEAREST;

// Create texture from pixels
var pixels = Pixels.create(100, 100, Color.RED);
var texture = Texture.fromPixels(pixels);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ImageAsset/">ImageAsset</a>, <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a>, <a href="/api-docs/clay-native/ceramic/TextureAtlas/">TextureAtlas</a></div>


## Static Members

<div class="signature field-method has-description" id="fromPixels"><code><span class="field-name">fromPixels</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Texture</a></code><a class="header-anchor" href="#fromPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new texture from raw pixel data.
Useful for procedural texture generation or image manipulation.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | | Width of the texture in logical units  |
| `height` | [Float](/api-docs/clay-native/Float/) | | Height of the texture in logical units  |
| `pixels` | [UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | | Pixel buffer in RGBA format (4 bytes per pixel)  |
| `density` | [Float](/api-docs/clay-native/Float/) | `1` | Texture density/scale (default: 1.0)  |

| Returns | Description |
|---------|-------------|
| [Texture](/api-docs/clay-native/ceramic/Texture/) | A new Texture instance ```haxe var pixels = new UInt8Array(100 * 100 * 4); // Fill with red color for (i in 0...100*100) { pixels[i*4] = 255; // R pixels[i*4+1] = 0; // G pixels[i*4+2] = 0; // B pixels[i*4+3] = 255; // A } var texture = Texture.fromPixels(100, 100, pixels); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromBytes"><code><span class="field-name">fromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/backend/LoadTextureOptions/" class="type-link">backend.LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new texture from PNG or JPEG data.
Asynchronously decodes the image data and creates a texture.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) | | The PNG or JPEG data as bytes  |
| `density` | [Float](/api-docs/clay-native/Float/) | `1` | Texture density/scale (default: 1.0)  |
| `options` | [Null](/api-docs/clay-native/Null/)<[backend.LoadTextureOptions](/api-docs/clay-native/backend/LoadTextureOptions/)> | *(optional)* | Additional loading options (backend-specific)  |
| `done` | Function | | Callback receiving the loaded texture, or null if it failed ```haxe var imageBytes = Files.getBytes('custom.png'); Texture.fromBytes(imageBytes, 1.0, null, texture -> { if (texture != null) { quad.texture = texture; } }); ``` |

## Instance Members

<div class="signature field-var has-description" id="isRenderTexture"><code><span class="field-name">isRenderTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this texture is a render target.
Render textures can be drawn to using RenderTexture class.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asRenderTexture"><code><span class="field-name">asRenderTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#asRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this is a render texture, returns the RenderTexture instance.
Otherwise null.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textureId"><code><span class="field-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/TextureId/" class="type-link">backend.TextureId</a></code><a class="header-anchor" href="#textureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture ID used by the underlying graphics API (OpenGL, etc.).
This is backend-specific and mainly used for debugging or advanced usage.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeWidth"><code><span class="field-name">nativeWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nativeWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The native pixel width of the texture in GPU memory.
This is the actual texture size, not affected by density scaling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeHeight"><code><span class="field-name">nativeHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nativeHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The native pixel height of the texture in GPU memory.
This is the actual texture size, not affected by density scaling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeWidthActual"><code><span class="field-name">nativeWidthActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nativeWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual allocated width of the texture in GPU memory.
May be larger than nativeWidth if the backend requires power-of-two dimensions.
Use this for advanced texture coordinate calculations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeHeightActual"><code><span class="field-name">nativeHeightActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nativeHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual allocated height of the texture in GPU memory.
May be larger than nativeHeight if the backend requires power-of-two dimensions.
Use this for advanced texture coordinate calculations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The logical width of the texture after density scaling.
This is what you use for positioning and sizing visuals.
Calculated as: nativeWidth / density

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The logical height of the texture after density scaling.
This is what you use for positioning and sizing visuals.
Calculated as: nativeHeight / density

<hr class="field-separator" />

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture density (scale factor).
Used for supporting different screen resolutions:
- 1.0 = standard resolution
- 2.0 = retina/high-dpi (@2x assets)
- 3.0 = extra high density (@3x assets)
Changing this updates width/height accordingly.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture filtering mode.
- LINEAR: Smooth interpolation (default, good for photos)
- NEAREST: No interpolation (good for pixel art)
Change this based on your art style and scaling needs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wrapS"><code><span class="field-name">wrapS</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">TextureWrap</a></code><a class="header-anchor" href="#wrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal texture wrap mode for UV coordinates outside 0-1 range.
- CLAMP: Clamp to edge pixels (default)
- REPEAT: Tile the texture
- MIRROR: Tile with alternating mirrors

<hr class="field-separator" />

<div class="signature field-var has-description" id="wrapT"><code><span class="field-name">wrapT</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">TextureWrap</a></code><a class="header-anchor" href="#wrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical texture wrap mode for UV coordinates outside 0-1 range.
- CLAMP: Clamp to edge pixels (default)
- REPEAT: Tile the texture
- MIRROR: Tile with alternating mirrors

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendItem"><code><span class="field-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">backend.Texture</a></code><a class="header-anchor" href="#backendItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The backend-specific texture resource.
This is managed internally by Ceramic.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asset"><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ImageAsset/" class="type-link">ImageAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image asset this texture was loaded from, if any.
Automatically destroyed when the texture is destroyed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setWrap"><code><span class="field-name">setWrap</span><span class="parenthesis">(</span><span class="arg-name">wrapS</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">TextureWrap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wrapT</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureWrap/" class="type-link">TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for setting both wrapS and wrapT at the same time.
Possible values: `CLAMP`, `REPEAT`, `MIRROR`


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `wrapS` | [TextureWrap](/api-docs/clay-native/ceramic/TextureWrap/) | | horizontal wrap mode  |
| `wrapT` | [TextureWrap](/api-docs/clay-native/ceramic/TextureWrap/) | *(optional)* | vertical wrap mode |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="fetchPixels"><code><span class="field-name">fetchPixels</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#fetchPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fetch the current pixel data from this texture.
Reads pixels from GPU memory (can be slow).


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `result` | [Null](/api-docs/clay-native/Null/)<[UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/)> | *(optional)* | Optional array to store results (will be allocated if null)  |

| Returns | Description |
|---------|-------------|
| [UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | Array containing RGBA pixel data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="submitPixels"><code><span class="field-name">submitPixels</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update this texture with new pixel data.
Uploads pixels to GPU memory.
The pixel array must match the texture's dimensions.


| Name | Type | Description |
|------|------|-------------|
| `pixels` | [UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | RGBA pixel data to upload |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toPng"><code><span class="field-name">toPng</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reversePremultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Export texture as PNG data and save it to the given file path.
Useful for screenshots or texture debugging.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/clay-native/String/) | | The png file path where to save the image (`'/path/to/image.png'`)  |
| `reversePremultiplyAlpha` | [Bool](/api-docs/clay-native/Bool/) | `true` |  |
| `done` | Function | | Called when the png has been exported |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texture/" class="type-link">backend.Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Texture from a backend texture resource.
Usually you don't call this directly - use asset loading or fromPixels/fromBytes.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `backendItem` | [backend.Texture](/api-docs/clay-native/backend/Texture/) | | The backend texture resource  |
| `density` | [Float](/api-docs/clay-native/Float/) | `-1` | Texture density (-1 uses screen density) |

## Private Members

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


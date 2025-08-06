---
layout: api-docs
category: api-docs
subCategory: doc
menu: Gif
title: GifCapture
target: Headless
permalink: api-docs/headless/ceramic/GifCapture/
---

# GifCapture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/gif/runtime/src/ceramic/GifCapture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.GifCapture</strong> (Class)</div>

Captures the screen content and creates animated GIF files.

This utility allows recording gameplay or animations from your Ceramic app
and exporting them as GIF files. It supports frame blending for smooth
animations and configurable frame rates.

## Features

- Screen capture to animated GIF
- Configurable frame rates and duration
- Frame blending for smoother animations
- Automatic file saving
- Real-time capture with fixed delta time

## Usage Example

```haxe
var capture = new GifCapture();

// Start capturing for 5 seconds at 30 FPS
capture.captureScreen(1, 1.0, 30, 5.0, "recording.gif");

// Listen for completion
capture.onFinish(this, () -> {
    trace("GIF saved!");
});

// Or manually stop capture
app.onceDelay(this, 3.0, () -> {
    var bytes = capture.finish("manual-stop.gif");
    trace("Captured " + bytes.length + " bytes");
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Pixels/">Pixels</a>, <a href="/api-docs/headless/gif/GifEncoder/">gif.GifEncoder</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="captureScreen"><div class="plugin-name">gif</div><code><span class="field-name">captureScreen</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">imagesPerFrame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">middleFactor</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">gifFps</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">50</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#captureScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts capturing the screen content to create an animated GIF.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `imagesPerFrame` | [Int](/api-docs/headless/Int/) | `1` | Number of screen captures to blend per GIF frame (higher = smoother)  |
| `middleFactor` | [Float](/api-docs/headless/Float/) | `1` | Blending weight for middle frames (0-1, affects smoothness)  |
| `gifFps` | [Int](/api-docs/headless/Int/) | `50` | Target frame rate for the output GIF  |
| `duration` | [Float](/api-docs/headless/Float/) | `-1` | Duration to capture in seconds (-1 to capture until manually stopped)  |
| `path` | [String](/api-docs/headless/String/) | *(optional)* | Optional file path to save the GIF (can also be specified in finish()) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="finish"><div class="plugin-name">gif</div><code><span class="field-name">finish</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#finish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finishes the GIF capture and saves the file.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | [String](/api-docs/headless/String/) | *(optional)* | Optional file path to save the GIF (overrides path from captureScreen)  |

| Returns | Description |
|---------|-------------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | The encoded GIF data as bytes |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">gif</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cleans up resources and restores settings.
Automatically stops capture if still running.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">gif</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new GIF capture instance.

## Private Members

<div class="signature field-var has-description has-plugin" id="screenFps"><div class="plugin-name">gif</div><code><span class="field-name">screenFps</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#screenFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal frame rate for screen capture

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gifFps"><div class="plugin-name">gif</div><code><span class="field-name">gifFps</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gifFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Output GIF frame rate

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duration"><div class="plugin-name">gif</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Duration to capture in seconds (-1 for manual stop)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="elapsed"><div class="plugin-name">gif</div><code><span class="field-name">elapsed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Elapsed capture time

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="capturing"><div class="plugin-name">gif</div><code><span class="field-name">capturing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#capturing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether currently capturing

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frameNumber"><div class="plugin-name">gif</div><code><span class="field-name">frameNumber</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#frameNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current frame number

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="encoder"><div class="plugin-name">gif</div><code><span class="field-name">encoder</span><span class="operator">:</span> <a href="/api-docs/headless/gif/GifEncoder/" class="type-link">gif.GifEncoder</a></code><a class="header-anchor" href="#encoder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

GIF encoder instance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="output"><div class="plugin-name">gif</div><code><span class="field-name">output</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Output stream for GIF data

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">gif</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Capture width in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">gif</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Capture height in pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="prevOverrideDelta"><div class="plugin-name">gif</div><code><span class="field-name">prevOverrideDelta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevOverrideDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Previous delta time override value

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pendingPath"><div class="plugin-name">gif</div><code><span class="field-name">pendingPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#pendingPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Path to save the GIF file

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pendingPixelsList"><div class="plugin-name">gif</div><code><span class="field-name">pendingPixelsList</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingPixelsList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of captured pixel buffers for blending

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mixedPixels"><div class="plugin-name">gif</div><code><span class="field-name">mixedPixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#mixedPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buffer for mixed/blended pixels

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="middleFactor"><div class="plugin-name">gif</div><code><span class="field-name">middleFactor</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#middleFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Blending factor for middle frames

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="imagesPerFrame"><div class="plugin-name">gif</div><code><span class="field-name">imagesPerFrame</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#imagesPerFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of screen captures per GIF frame

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFinish"><div class="plugin-name">gif</div><code><span class="field-name">emitFinish</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when GIF capture has finished.
Called after the file has been saved and encoding is complete.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


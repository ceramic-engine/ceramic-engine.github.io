---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: ScreenCapture
target: Unity
permalink: api-docs/unity/unityengine/ScreenCapture/
---

# ScreenCapture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/ScreenCapture.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.ScreenCapture</strong> (extern class)</div>

Utility class for capturing screenshots of the game view.
Provides various methods to capture screen content to files or textures.

In Ceramic applications, this can be used for:
- Creating screenshots for debugging or sharing
- Capturing frames for video recording
- Generating thumbnails or previews
- Creating visual effects (e.g., pause menu backgrounds)

Note: Screenshots capture the rendered frame after all post-processing.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/unityengine/Texture2D/">Texture2D</a>, <a href="/api-docs/unity/unityengine/RenderTexture/">RenderTexture</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="CaptureScreenshot"><div class="plugin-name">unity</div><code><span class="field-name">CaptureScreenshot</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">superSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CaptureScreenshot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures a screenshot and saves it to a file.



| Name | Type | Description |
|------|------|-------------|
| `filename` | [String](/api-docs/unity/String/) | Path to save the screenshot. Supports: - Relative paths (saved in persistent data) - Absolute paths (requires permissions) - Extensions: .png, .jpg, .exr, .tga  |
| `superSize` | [Int](/api-docs/unity/Int/) | Resolution multiplier (1-32): - 1 = Native resolution - 2 = 2x resolution (4x pixels) - 4 = 4x resolution (16x pixels) * Capturing at 2x resolution: ```haxe ScreenCapture.CaptureScreenshot("screenshot.png", 2); ``` * Note: Executes at end of frame. File I/O may cause frame hitch. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="CaptureScreenshotAsTexture"><div class="plugin-name">unity</div><code><span class="field-name">CaptureScreenshotAsTexture</span><span class="parenthesis">(</span><span class="arg-name">superSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Texture2D/" class="type-link">Texture2D</a></code><a class="header-anchor" href="#CaptureScreenshotAsTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures a screenshot directly to a Texture2D.
Useful for in-game use without file I/O.



| Name | Type | Description |
|------|------|-------------|
| `superSize` | [Int](/api-docs/unity/Int/) | Resolution multiplier (1-32)  |

| Returns | Description |
|---------|-------------|
| [Texture2D](/api-docs/unity/unityengine/Texture2D/) | New Texture2D containing the screenshot * Creating a pause menu background: ```haxe var screenshot = ScreenCapture.CaptureScreenshotAsTexture(1); pauseBackground.texture = screenshot; ``` * Important: Remember to destroy the texture when done to avoid memory leaks. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="CaptureScreenshotIntoRenderTexture"><div class="plugin-name">unity</div><code><span class="field-name">CaptureScreenshotIntoRenderTexture</span><span class="parenthesis">(</span><span class="arg-name">renderTexture</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/RenderTexture/" class="type-link">RenderTexture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CaptureScreenshotIntoRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures a screenshot into an existing RenderTexture.
Most efficient method as it reuses existing GPU memory.



| Name | Type | Description |
|------|------|-------------|
| `renderTexture` | [RenderTexture](/api-docs/unity/unityengine/RenderTexture/) | Target RenderTexture (must be created) Size determines capture resolution * Continuous capture for effects: ```haxe // In update loop ScreenCapture.CaptureScreenshotIntoRenderTexture(myRT); // Use myRT for blur, transitions, etc. ``` * Note: RenderTexture must have compatible format and be currently allocated (not released). |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


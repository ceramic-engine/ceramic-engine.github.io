---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Screen
target: Clay (Native)
permalink: api-docs/clay-native/backend/Screen/
---

# Screen

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Screen.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Screen</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Events/">tracker.Events</a></div>

Clay backend screen and window management implementation.

This class handles screen-related operations including:
- Window dimensions and display properties
- Window title and fullscreen state management
- Screenshot capture functionality (texture, PNG, raw pixels)
- Mouse and touch input event handling
- Audio context resumption on web platforms

Platform-specific features:
- Web: HTML5 Canvas and Electron integration for fullscreen
- Desktop (SDL): Direct OpenGL framebuffer reading for screenshots
- Mobile: Touch input event handling and audio context management

## Instance Members

<div class="signature field-method has-description has-plugin" id="getWidth"><div class="plugin-name">clay</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current screen width in pixels.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Screen width in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHeight"><div class="plugin-name">clay</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current screen height in pixels.

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Screen height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDensity"><div class="plugin-name">clay</div><code><span class="field-name">getDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current screen pixel density/scale factor.

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | Pixel density (1.0 = standard, 2.0 = retina/high-DPI, etc.) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBackground"><div class="plugin-name">clay</div><code><span class="field-name">setBackground</span><span class="parenthesis">(</span><span class="arg-name">background</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the window background color.

Note: This method is currently unused as background clearing
is handled directly in the draw loop.



| Name | Type | Description |
|------|------|-------------|
| `background` | [Int](/api-docs/clay-native/Int/) | Background color as integer |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setWindowTitle"><div class="plugin-name">clay</div><code><span class="field-name">setWindowTitle</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the window title text.


| Name | Type | Description |
|------|------|-------------|
| `title` | [String](/api-docs/clay-native/String/) | New window title |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setWindowFullscreen"><div class="plugin-name">clay</div><code><span class="field-name">setWindowFullscreen</span><span class="parenthesis">(</span><span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the window fullscreen state.

On web platforms, this checks for Electron runner integration
and uses native fullscreen if available, otherwise falls back
to HTML5 fullscreen API.



| Name | Type | Description |
|------|------|-------------|
| `fullscreen` | [Bool](/api-docs/clay-native/Bool/) | True to enable fullscreen, false to disable |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToTexture"><div class="plugin-name">clay</div><code><span class="field-name">screenshotToTexture</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToPng"><div class="plugin-name">clay</div><code><span class="field-name">screenshotToPng</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-native/String/) | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToPixels"><div class="plugin-name">clay</div><code><span class="field-name">screenshotToPixels</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">clay</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Screen backend instance.

## Private Members

<div class="signature field-var has-description has-plugin" id="nextScreenshotIndex"><div class="plugin-name">clay</div><code><span class="field-name">nextScreenshotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextScreenshotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index counter for generating unique screenshot identifiers.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitResize"><div class="plugin-name">clay</div><code><span class="field-name">emitResize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the screen/window is resized.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseDown"><div class="plugin-name">clay</div><code><span class="field-name">emitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a mouse button is pressed down.


| Name | Type | Description |
|------|------|-------------|
| `buttonId` | [Int](/api-docs/clay-native/Int/) | Mouse button ID (0=left, 1=middle, 2=right)  |
| `x` | [Float](/api-docs/clay-native/Float/) | Mouse X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Mouse Y coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseUp"><div class="plugin-name">clay</div><code><span class="field-name">emitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a mouse button is released.


| Name | Type | Description |
|------|------|-------------|
| `buttonId` | [Int](/api-docs/clay-native/Int/) | Mouse button ID (0=left, 1=middle, 2=right)  |
| `x` | [Float](/api-docs/clay-native/Float/) | Mouse X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Mouse Y coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseWheel"><div class="plugin-name">clay</div><code><span class="field-name">emitMouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the mouse wheel is scrolled.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Horizontal scroll amount  |
| `y` | [Float](/api-docs/clay-native/Float/) | Vertical scroll amount |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseMove"><div class="plugin-name">clay</div><code><span class="field-name">emitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the mouse cursor moves.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Mouse X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Mouse Y coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchDown"><div class="plugin-name">clay</div><code><span class="field-name">emitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a touch begins on the screen.


| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/clay-native/Int/) | Touch point index for multi-touch  |
| `x` | [Float](/api-docs/clay-native/Float/) | Touch X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Touch Y coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchUp"><div class="plugin-name">clay</div><code><span class="field-name">emitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a touch ends.


| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/clay-native/Int/) | Touch point index for multi-touch  |
| `x` | [Float](/api-docs/clay-native/Float/) | Touch X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Touch Y coordinate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchMove"><div class="plugin-name">clay</div><code><span class="field-name">emitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a touch point moves.


| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/clay-native/Int/) | Touch point index for multi-touch  |
| `x` | [Float](/api-docs/clay-native/Float/) | Touch X coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Touch Y coordinate |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


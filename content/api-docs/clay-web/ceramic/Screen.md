---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Screen
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Screen/
---

# Screen

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Screen.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Screen</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

Core screen management class that handles display properties, coordinate transformations, and input events.

Screen provides a unified interface for managing screen properties across different platforms,
handling logical vs native coordinates, and dispatching input events. It serves as the bridge
between the backend's native screen handling and Ceramic's logical coordinate system.

Key responsibilities:
- **Coordinate transformation**: Converts between native and logical coordinates
- **Screen scaling**: Manages different scaling modes (FIT, FILL, RESIZE, FIT_RESIZE)
- **Input handling**: Processes and dispatches mouse, touch, and pointer events
- **Visual hit testing**: Determines which visuals receive input events
- **Focus management**: Tracks and manages focused visuals
- **Screenshot capture**: Provides methods to capture screen content

The screen uses a matrix transformation system to handle scaling and positioning,
ensuring consistent behavior across different screen sizes and densities.

Example usage:
```haxe
// Access screen properties
trace('Screen size: ${screen.width} x ${screen.height}');
trace('Native size: ${screen.nativeWidth} x ${screen.nativeHeight}');

// Listen for screen events
screen.onResize(this, () -> {
    trace('Screen resized');
});

// Check input states
if (screen.mousePressed(MouseButton.LEFT)) {
    trace('Left mouse button pressed at ${screen.mouseX}, ${screen.mouseY}');
}
```

<div class="see"><strong>See:</strong> App#screen, <a href="/api-docs/clay-web/ceramic/ScreenScaling/">ScreenScaling</a>, <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a></div>


## Static Members

## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen density computed from app's logical width/height
settings and native width/height.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical width used in app to position elements.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical height used in app to position elements.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="actualWidth"><code><span class="field-name">actualWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#actualWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual width available on screen, including offsets, in the same unit as `width`.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="actualHeight"><code><span class="field-name">actualHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#actualHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual height available on screen, including offsets, in the same unit as `width`.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetX"><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical x offset.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetY"><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical y offset.
Updated when the screen is resized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeWidth"><code><span class="field-name">nativeWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nativeWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native width

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeHeight"><code><span class="field-name">nativeHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nativeHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native height

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeDensity"><code><span class="field-name">nativeDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#nativeDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native pixel ratio/density.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerX"><code><span class="field-name">pointerX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer x coordinate, computed from mouse and touch events.
When using multiple touch inputs at the same time, x will be
the mean value of all touches x value. Use this as a
convenience when you don't want to deal with multiple positions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerY"><code><span class="field-name">pointerY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer y coordinate, computed from mouse and touch events.
When using multiple touch inputs at the same time, y will be
the mean value of all touches y value. Use this as a
convenience when you don't want to deal with multiple positions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerDeltaX"><code><span class="field-name">pointerDeltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer x delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerDeltaY"><code><span class="field-name">pointerDeltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer y delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseX"><code><span class="field-name">mouseX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse x coordinate, computed from mouse events.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseY"><code><span class="field-name">mouseY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse y coordinate, computed from mouse events.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDeltaX"><code><span class="field-name">mouseDeltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse x delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseDeltaY"><code><span class="field-name">mouseDeltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse y delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseWheelDeltaX"><code><span class="field-name">mouseWheelDeltaX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseWheelDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse wheel x delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseWheelDeltaY"><code><span class="field-name">mouseWheelDeltaY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mouseWheelDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mouse wheel y delta since last frame

<hr class="field-separator" />

<div class="signature field-var has-description" id="touches"><code><span class="field-name">touches</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Touches/" class="type-link">Touches</a></code><a class="header-anchor" href="#touches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Touches x and y coordinates by touch index.

<hr class="field-separator" />

<div class="signature field-var has-description" id="focusedVisual"><code><span class="field-name">focusedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#focusedVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Focused visual

<hr class="field-separator" />

<div class="signature field-var has-description" id="texturesDensity"><code><span class="field-name">texturesDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#texturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ideal textures density, computed from settings
targetDensity and current screen state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isPointerDown"><code><span class="field-name">isPointerDown</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the screen is between a `pointer down` and an `pointer up` event or not.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateFocusedVisual"><code><span class="field-name">invalidateFocusedVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocusedVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTexturesDensity"><code><span class="field-name">invalidateTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="addHitVisual"><code><span class="field-name">addHitVisual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addHitVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registers a visual as a hit visual.

Hit visuals are special visuals that block input events from reaching
visuals behind them, even if they don't handle the events themselves.
This is useful for modal dialogs, overlays, or invisible blocking areas.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual to register as a hit visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeHitVisual"><code><span class="field-name">removeHitVisual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeHitVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unregisters a visual as a hit visual.

The visual will no longer block input events from reaching visuals
behind it unless it explicitly handles those events.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual to unregister |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isHitVisual"><code><span class="field-name">isHitVisual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHitVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a visual is registered as a hit visual.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the visual is a hit visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mouseAllowed"><code><span class="field-name">mouseAllowed</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseAllowed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if mouse events are currently allowed for the given entity.

This is primarily used with the elements plugin to ensure UI windows
can block events from reaching entities behind them. For most use cases,
this will always return true.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) | The entity to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the entity can receive mouse events |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mousePressed"><code><span class="field-name">mousePressed</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mousePressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseJustPressed"><code><span class="field-name">mouseJustPressed</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseJustPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseJustReleased"><code><span class="field-name">mouseJustReleased</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mouseJustReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchPressed"><code><span class="field-name">touchPressed</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchJustPressed"><code><span class="field-name">touchJustPressed</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchJustPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchJustReleased"><code><span class="field-name">touchJustReleased</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchJustReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="touchDeltaX"><code><span class="field-name">touchDeltaX</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#touchDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the X-axis movement delta for a specific touch since the last frame.



| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) | The index of the touch to check  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | The X delta in logical coordinates, or 0 if touch not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="touchDeltaY"><code><span class="field-name">touchDeltaY</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#touchDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the Y-axis movement delta for a specific touch since the last frame.



| Name | Type | Description |
|------|------|-------------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) | The index of the touch to check  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | The Y delta in logical coordinates, or 0 if touch not found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toTexture"><code><span class="field-name">toTexture</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures the current screen content as a texture.

This is an asynchronous operation that renders the current frame to a texture.
The resulting texture can be used for effects, transitions, or saving screenshots.



| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback that receives the captured texture, or null if capture failed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toPixels"><code><span class="field-name">toPixels</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures the current screen content as raw pixel data.

Returns the screen content as an array of RGBA pixels in row-major order.
This is useful for image processing or custom screenshot implementations.



| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback that receives pixel data, width, and height |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toPng"><code><span class="field-name">toPng</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Captures the current screen content as PNG data.

This overload returns the PNG data as bytes, which can be used
for further processing or transmission.



| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback that receives the PNG data as bytes |

## Private Members

<div class="signature field-var no-description" id="unobservedFocusedVisual"><code><span class="field-name">unobservedFocusedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#unobservedFocusedVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTexturesDensity"><code><span class="field-name">unobservedTexturesDensity</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="matrix"><code><span class="field-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#matrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Root matrix applied to every visual.
This is recomputed on screen resize but
can be changed otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="reverseMatrix"><code><span class="field-name">reverseMatrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#reverseMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal inverted matrix computed from root matrix.

<hr class="field-separator" />

<div class="signature field-var has-description" id="resizing"><code><span class="field-name">resizing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resizing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

In order to prevent nested resizes.

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedMouseButtons"><code><span class="field-name">pressedMouseButtons</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#pressedMouseButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pressedTouches"><code><span class="field-name">pressedTouches</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#pressedTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="prevTouchPositions"><code><span class="field-name">prevTouchPositions</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/IntFloatMap/" class="type-link">IntFloatMap</a></code><a class="header-anchor" href="#prevTouchPositions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="prevMouseX"><code><span class="field-name">prevMouseX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevMouseX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="prevMouseY"><code><span class="field-name">prevMouseY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevMouseY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="maxTouchIndex"><code><span class="field-name">maxTouchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTouchIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="visualsListenPointerOver"><code><span class="field-name">visualsListenPointerOver</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualsListenPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="matchedDownListeners"><code><span class="field-name">matchedDownListeners</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#matchedDownListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="matchedOverListeners"><code><span class="field-name">matchedOverListeners</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#matchedOverListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hitVisuals"><code><span class="field-name">hitVisuals</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hitVisuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Screen</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Screen](/api-docs/clay-web/ceramic/Screen/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFocusedVisualChange"><code><span class="field-name">emitFocusedVisualChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedVisualChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focusedVisual field changes.

| Name | Type |
|------|------|
| `current` | [Visual](/api-docs/clay-web/ceramic/Visual/) |
| `previous` | [Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTexturesDensityChange"><code><span class="field-name">emitTexturesDensityChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTexturesDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when texturesDensity field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitResize"><code><span class="field-name">emitResize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resize event occurs once at startup, then each time any
of native width, height or density changes.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMouseDown"><code><span class="field-name">emitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseDown event

| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMouseUp"><code><span class="field-name">emitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseUp event

| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMouseWheel"><code><span class="field-name">emitMouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseWheel event

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMouseMove"><code><span class="field-name">emitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseMove event

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTouchDown"><code><span class="field-name">emitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchDown event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTouchUp"><code><span class="field-name">emitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchUp event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTouchMove"><code><span class="field-name">emitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchMove event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerDown"><code><span class="field-name">emitPointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

pointerDown event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerUp"><code><span class="field-name">emitPointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

pointerUp event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerMove"><code><span class="field-name">emitPointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

pointerMove event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMultiTouchPointerDown"><code><span class="field-name">emitMultiTouchPointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMultiTouchPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

multiTouchPointerDown event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMultiTouchPointerUp"><code><span class="field-name">emitMultiTouchPointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMultiTouchPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

multiTouchPointerUp event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMultiTouchPointerMove"><code><span class="field-name">emitMultiTouchPointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMultiTouchPointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

multiTouchPointerMove event

| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFocus"><code><span class="field-name">emitFocus</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

focus event

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBlur"><code><span class="field-name">emitBlur</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBlur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

blur event

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="backendReady"><code><span class="field-name">backendReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#backendReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the screen after the backend is ready.

Sets up event listeners for native screen events, initializes coordinate
transformations, and configures settings observers. This method is called
automatically by the App during initialization.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updatePointerOverState"><code><span class="field-name">updatePointerOverState</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerOverState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates pointer over/out states for visuals.

Called each frame to track which visuals have pointers hovering over them,
triggering pointerOver and pointerOut events as needed.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame (unused) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles screen resize events.

Recalculates screen dimensions, scaling, and transformations based on
current settings and native screen properties. This method is called
automatically when the native screen size changes.

The resize process:
1. Updates scaling based on settings
2. Emits resize event (allowing custom handling)
3. Recomputes transformations
4. Updates texture density

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateTexturesDensity"><code><span class="field-name">updateTexturesDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTexturesDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the ideal texture density based on screen density and settings.

The texture density determines which resolution of assets should be loaded.
If targetDensity is set in settings, it overrides the calculated value.
Otherwise, density is rounded to the nearest integer (minimum 1).

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateScaling"><code><span class="field-name">updateScaling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recomputes screen dimensions and density based on scaling mode and native properties.

This method implements the different scaling modes:
- **FIT**: Scales to fit within target size, may show borders
- **FILL**: Scales to fill target size, may crop content
- **RESIZE**: Matches native size exactly
- **FIT_RESIZE**: Adjusts target size to match native aspect ratio

Updates width, height, actualWidth, actualHeight, density, offsetX, and offsetY.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateTransform"><code><span class="field-name">updateTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recomputes the root transformation matrix from current screen properties.

The matrix is used to transform all visual coordinates from logical
to native screen space. It applies scaling and translation to properly
position content on screen based on the current scaling mode.

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchFirstDownListener"><code><span class="field-name">matchFirstDownListener</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#matchFirstDownListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the topmost visual that should receive a pointer down event at the given coordinates.

This method performs hit testing through the visual hierarchy, respecting:
- Visual touchability and visibility
- Event interception by parents
- Special handling for hit visuals (visuals that block events behind them)



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | | X coordinate in logical screen space  |
| `y` | [Float](/api-docs/clay-web/Float/) | | Y coordinate in logical screen space  |
| `touchIndex` | [Int](/api-docs/clay-web/Int/) | `-1` | Touch index for touch events, -1 for mouse events  |
| `buttonId` | [Int](/api-docs/clay-web/Int/) | `-1` | Mouse button ID, -1 for touch events  |

| Returns | Description |
|---------|-------------|
| [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual that should receive the event, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchFirstOverListener"><code><span class="field-name">matchFirstOverListener</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#matchFirstOverListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the topmost visual that should receive pointer over events at the given coordinates.

Similar to matchFirstDownListener but for hover/over events. Only active
when at least one visual is listening for pointer over events.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X coordinate in logical screen space  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y coordinate in logical screen space  |

| Returns | Description |
|---------|-------------|
| [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual that should receive over events, or null if none found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prepareMultiTouchPointerDown"><code><span class="field-name">prepareMultiTouchPointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepareMultiTouchPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prepareMultiTouchPointerUp"><code><span class="field-name">prepareMultiTouchPointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepareMultiTouchPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prepareMultiTouchPointerMove"><code><span class="field-name">prepareMultiTouchPointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="operator">,</span> <span class="arg-name">isMouse</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepareMultiTouchPointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |
| `isMouse` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updatePointer"><code><span class="field-name">updatePointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="didEmitMouseDown"><code><span class="field-name">didEmitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="didEmitMouseUp"><code><span class="field-name">didEmitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateMouseOver"><code><span class="field-name">updateMouseOver</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateMouseOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="didEmitTouchDown"><code><span class="field-name">didEmitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="didEmitTouchUp"><code><span class="field-name">didEmitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateTouchOver"><code><span class="field-name">updateTouchOver</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTouchOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resetDeltas"><code><span class="field-name">resetDeltas</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetDeltas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets all input deltas to zero.

Called at the beginning of each frame to clear movement deltas
for pointer, mouse, and touch inputs. This ensures deltas only
reflect movement within the current frame.

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitMouseMove"><code><span class="field-name">willEmitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitMouseDown"><code><span class="field-name">willEmitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitMouseUp"><code><span class="field-name">willEmitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitMouseWheel"><code><span class="field-name">willEmitMouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitTouchMove"><code><span class="field-name">willEmitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitTouchDown"><code><span class="field-name">willEmitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitTouchUp"><code><span class="field-name">willEmitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Screen instance.

Typically not called directly - use the singleton instance via `app.screen`.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMultiTouchPointerDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMultiTouchPointerDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMultiTouchPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMultiTouchPointerMove"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMultiTouchPointerMove</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMultiTouchPointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMultiTouchPointerUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMultiTouchPointerUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMultiTouchPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMouseDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMouseMove"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitMouseUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitTouchDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitTouchMove"><div class="plugin-name">elements</div><code><span class="field-name">canEmitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitTouchUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitPointerDown"><div class="plugin-name">elements</div><code><span class="field-name">canEmitPointerDown</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitPointerMove"><div class="plugin-name">elements</div><code><span class="field-name">canEmitPointerMove</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitPointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canEmitPointerUp"><div class="plugin-name">elements</div><code><span class="field-name">canEmitPointerUp</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canEmitPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |


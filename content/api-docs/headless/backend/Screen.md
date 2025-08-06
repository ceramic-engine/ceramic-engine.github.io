---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Screen
target: Headless
permalink: api-docs/headless/backend/Screen/
---

# Screen

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Screen.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Screen</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/tracker/Events/">tracker.Events</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="getWidth"><div class="plugin-name">headless</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getHeight"><div class="plugin-name">headless</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getDensity"><div class="plugin-name">headless</div><code><span class="field-name">getDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBackground"><div class="plugin-name">headless</div><code><span class="field-name">setBackground</span><span class="parenthesis">(</span><span class="arg-name">background</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `background` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWindowTitle"><div class="plugin-name">headless</div><code><span class="field-name">setWindowTitle</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `title` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWindowFullscreen"><div class="plugin-name">headless</div><code><span class="field-name">setWindowFullscreen</span><span class="parenthesis">(</span><span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fullscreen` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToTexture"><div class="plugin-name">headless</div><code><span class="field-name">screenshotToTexture</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToPng"><div class="plugin-name">headless</div><code><span class="field-name">screenshotToPng</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/headless/String/) | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="screenshotToPixels"><div class="plugin-name">headless</div><code><span class="field-name">screenshotToPixels</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenshotToPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">headless</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="emitResize"><div class="plugin-name">headless</div><code><span class="field-name">emitResize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

resize event

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseDown"><div class="plugin-name">headless</div><code><span class="field-name">emitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseDown event

| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/headless/Int/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseUp"><div class="plugin-name">headless</div><code><span class="field-name">emitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseUp event

| Name | Type |
|------|------|
| `buttonId` | [Int](/api-docs/headless/Int/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseWheel"><div class="plugin-name">headless</div><code><span class="field-name">emitMouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseWheel event

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMouseMove"><div class="plugin-name">headless</div><code><span class="field-name">emitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

mouseMove event

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchDown"><div class="plugin-name">headless</div><code><span class="field-name">emitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchDown event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/headless/Int/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchUp"><div class="plugin-name">headless</div><code><span class="field-name">emitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchUp event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/headless/Int/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTouchMove"><div class="plugin-name">headless</div><code><span class="field-name">emitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

touchMove event

| Name | Type |
|------|------|
| `touchIndex` | [Int](/api-docs/headless/Int/) |
| `x` | [Float](/api-docs/headless/Float/) |
| `y` | [Float](/api-docs/headless/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


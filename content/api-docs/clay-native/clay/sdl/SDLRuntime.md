---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: SDLRuntime
target: Clay (Native)
permalink: api-docs/clay-native/clay/sdl/SDLRuntime/
---

# SDLRuntime

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/sdl/SDLRuntime.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/base/BaseRuntime/">clay.base.BaseRuntime</a> → <strong>clay.sdl.SDLRuntime</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="timestamp"><code><span class="field-name">timestamp</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultConfig"><code><span class="field-name">defaultConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RuntimeConfig/" class="type-link">clay.RuntimeConfig</a></code><a class="header-anchor" href="#defaultConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [clay.RuntimeConfig](/api-docs/clay-native/clay/RuntimeConfig/) |

## Instance Members

<div class="signature field-var no-description" id="gl"><code><span class="field-name">gl</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGLContext/" class="type-link">SDLGLContext</a></code><a class="header-anchor" href="#gl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="window"><code><span class="field-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a></code><a class="header-anchor" href="#window"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentSdlEvent"><code><span class="field-name">currentSdlEvent</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">SDLEvent</a></code><a class="header-anchor" href="#currentSdlEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skipMouseEvents"><code><span class="field-name">skipMouseEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipMouseEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skipKeyboardEvents"><code><span class="field-name">skipKeyboardEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipKeyboardEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="minFrameTime"><code><span class="field-name">minFrameTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minFrameTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ready"><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">immediate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `immediate` | [Bool](/api-docs/clay-native/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowDevicePixelRatio"><code><span class="field-name">windowDevicePixelRatio</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowDevicePixelRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowWidth"><code><span class="field-name">windowWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowHeight"><code><span class="field-name">windowHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowTitle"><code><span class="field-name">setWindowTitle</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `title` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowBorderless"><code><span class="field-name">setWindowBorderless</span><span class="parenthesis">(</span><span class="arg-name">borderless</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowBorderless"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `borderless` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startGamepadRumble"><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |
| `lowFrequency` | [Float](/api-docs/clay-native/Float/) |
| `highFrequency` | [Float](/api-docs/clay-native/Float/) |
| `duration` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stopGamepadRumble"><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getGamepadName"><code><span class="field-name">getGamepadName</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getGamepadName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFullscreen"><code><span class="field-name">setWindowFullscreen</span><span class="parenthesis">(</span><span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setWindowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fullscreen` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowSwap"><code><span class="field-name">windowSwap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#windowSwap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |

## Private Members

<div class="signature field-var no-description" id="timestampStart"><code><span class="field-name">timestampStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestampStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowW"><code><span class="field-name">windowW</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowH"><code><span class="field-name">windowH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowDpr"><code><span class="field-name">windowDpr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowDpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowFocused"><code><span class="field-name">windowFocused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#windowFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepads"><code><span class="field-name">gamepads</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadInstanceIds"><code><span class="field-name">gamepadInstanceIds</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadInstanceIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="joysticks"><code><span class="field-name">joysticks</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/sdl/SDLJoystickPointer/" class="type-link">SDLJoystickPointer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#joysticks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isSdlFullscreen"><code><span class="field-name">isSdlFullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSdlFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fingerIdList"><code><span class="field-name">fingerIdList</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#fingerIdList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextFingerId"><code><span class="field-name">nextFingerId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextFingerId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastFrameTime"><code><span class="field-name">lastFrameTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastFrameTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initSDL"><code><span class="field-name">initSDL</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initSDL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initCwd"><code><span class="field-name">initCwd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initCwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createWindow"><code><span class="field-name">createWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="applyGLAttributes"><code><span class="field-name">applyGLAttributes</span><span class="parenthesis">(</span><span class="arg-name">render</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">clay.RenderConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyGLAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `render` | [clay.RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowFlags"><code><span class="field-name">windowFlags</span><span class="parenthesis">(</span><span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">clay.WindowConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowFlags/" class="type-link">SDLWindowFlags</a></code><a class="header-anchor" href="#windowFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `config` | [clay.WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

| Returns |
|---------|
| [SDLWindowFlags](/api-docs/clay-native/clay/sdl/SDLWindowFlags/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createRenderContext"><code><span class="field-name">createRenderContext</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">render</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">clay.RenderConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#createRenderContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `render` | [clay.RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="postRenderContext"><code><span class="field-name">postRenderContext</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#postRenderContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVSync"><code><span class="field-name">setVSync</span><span class="parenthesis">(</span><span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setVSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enabled` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateWindowConfig"><code><span class="field-name">updateWindowConfig</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">clay.WindowConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/WindowConfig/" class="type-link">clay.WindowConfig</a></code><a class="header-anchor" href="#updateWindowConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `config` | [clay.WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

| Returns |
|---------|
| [clay.WindowConfig](/api-docs/clay-native/clay/WindowConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateRenderConfig"><code><span class="field-name">updateRenderConfig</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">render</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">clay.RenderConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfig/" class="type-link">clay.RenderConfig</a></code><a class="header-anchor" href="#updateRenderConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `render` | [clay.RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

| Returns |
|---------|
| [clay.RenderConfig](/api-docs/clay-native/clay/RenderConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clamp"><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loop"><code><span class="field-name">loop</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleInputEvent"><code><span class="field-name">handleInputEvent</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">SDLEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleInputEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toFingerId"><code><span class="field-name">toFingerId</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#toFingerId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cpp.Int64](/api-docs/clay-native/cpp/Int64/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeFingerId"><code><span class="field-name">removeFingerId</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFingerId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cpp.Int64](/api-docs/clay-native/cpp/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toPixels"><code><span class="field-name">toPixels</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#toPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toKeyMod"><code><span class="field-name">toKeyMod</span><span class="parenthesis">(</span><span class="arg-name">modValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">clay.ModState</a></code><a class="header-anchor" href="#toKeyMod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper to return a `ModState` (shift, ctrl etc) from a given `InputEvent`

| Name | Type |
|------|------|
| `modValue` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [clay.ModState](/api-docs/clay-native/clay/ModState/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleWindowEvent"><code><span class="field-name">handleWindowEvent</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">SDLEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleWindowEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkFullscreenState"><code><span class="field-name">checkFullscreenState</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">SDLEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkFullscreenState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:headerCode` | "#include \"linc_sdl.h\"" |
| `:access` | clay.Clay |
| `:access` | clay.Input |
| `:access` | clay.Screen |


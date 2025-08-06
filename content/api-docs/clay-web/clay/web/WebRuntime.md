---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WebRuntime
target: Clay (Web)
permalink: api-docs/clay-web/clay/web/WebRuntime/
---

# WebRuntime

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/web/WebRuntime.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/base/BaseRuntime/">clay.base.BaseRuntime</a> → <strong>clay.web.WebRuntime</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="timestamp"><code><span class="field-name">timestamp</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="defaultConfig"><code><span class="field-name">defaultConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RuntimeConfig/" class="type-link">clay.RuntimeConfig</a></code><a class="header-anchor" href="#defaultConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [clay.RuntimeConfig](/api-docs/clay-web/clay/RuntimeConfig/) |

## Instance Members

<div class="signature field-var no-description" id="gamepadsSupported"><code><span class="field-name">gamepadsSupported</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadsSupported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="window"><code><span class="field-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/WindowHandle/" class="type-link">WindowHandle</a></code><a class="header-anchor" href="#window"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The runtime window canvas

<hr class="field-separator" />

<div class="signature field-var has-description" id="webglVersion"><code><span class="field-name">webglVersion</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#webglVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual webgl version being used by the runtime

<hr class="field-separator" />

<div class="signature field-var has-description" id="skipMouseEvents"><code><span class="field-name">skipMouseEvents</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipMouseEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For advanced usage: disable handling of mouse events

<hr class="field-separator" />

<div class="signature field-var has-description" id="skipKeyboardEvents"><code><span class="field-name">skipKeyboardEvents</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipKeyboardEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For advanced usage: disable handling of keyboard events

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ready"><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowDevicePixelRatio"><code><span class="field-name">windowDevicePixelRatio</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowDevicePixelRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowWidth"><code><span class="field-name">windowWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowHeight"><code><span class="field-name">windowHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFullscreen"><code><span class="field-name">setWindowFullscreen</span><span class="parenthesis">(</span><span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setWindowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fullscreen` | [Bool](/api-docs/clay-web/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowTitle"><code><span class="field-name">setWindowTitle</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `title` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startGamepadRumble"><code><span class="field-name">startGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lowFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">highFrequency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) |
| `lowFrequency` | [Float](/api-docs/clay-web/Float/) |
| `highFrequency` | [Float](/api-docs/clay-web/Float/) |
| `duration` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stopGamepadRumble"><code><span class="field-name">stopGamepadRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepadId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopGamepadRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepadId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getGamepadName"><code><span class="field-name">getGamepadName</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getGamepadName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |

## Private Members

<div class="signature field-var has-description" id="timestampStart"><code><span class="field-name">timestampStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timestampStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

internal start time, allowing 0 based time values

<hr class="field-separator" />

<div class="signature field-var has-description" id="webWindowId"><code><span class="field-name">webWindowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#webWindowId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The window id to use for events

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowX"><code><span class="field-name">windowX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The window x position.
Internal, set by update_window_bounds

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowY"><code><span class="field-name">windowY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The window y position.
Internal, set by update_window_bounds

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowW"><code><span class="field-name">windowW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowH"><code><span class="field-name">windowH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="windowDpr"><code><span class="field-name">windowDpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowDpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="touches"><code><span class="field-name">touches</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/IntMap/" class="type-link">clay.IntMap</a></code><a class="header-anchor" href="#touches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadButtonCache"><code><span class="field-name">gamepadButtonCache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadButtonCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gamepadAxisCache"><code><span class="field-name">gamepadAxisCache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#gamepadAxisCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingKeyUps"><code><span class="field-name">pendingKeyUps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingKeyUps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="keyDownStates"><code><span class="field-name">keyDownStates</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/IntMap/" class="type-link">ceramic.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyDownStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didEmitTickOnce"><code><span class="field-name">didEmitTickOnce</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didEmitTickOnce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextFrameCallbacks"><code><span class="field-name">nextFrameCallbacks</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#nextFrameCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="loop"><code><span class="field-name">loop</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.016</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Runtime loop, run at every frame

| Name | Type | Default |
|------|------|---------|
| `t` | [Float](/api-docs/clay-web/Float/) | `0.016` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createWindow"><code><span class="field-name">createWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createRenderContext"><code><span class="field-name">createRenderContext</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/WindowHandle/" class="type-link">WindowHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#createRenderContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [WindowHandle](/api-docs/clay-web/clay/web/WindowHandle/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createRenderContextFailed"><code><span class="field-name">createRenderContextFailed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createRenderContextFailed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="applyGLAttributes"><code><span class="field-name">applyGLAttributes</span><span class="parenthesis">(</span><span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderConfig/" class="type-link">clay.RenderConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/webgl/ContextAttributes/" class="type-link">js.html.webgl.ContextAttributes</a></code><a class="header-anchor" href="#applyGLAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `config` | [clay.RenderConfig](/api-docs/clay-web/clay/RenderConfig/) |

| Returns |
|---------|
| [js.html.webgl.ContextAttributes](/api-docs/clay-web/js/html/webgl/ContextAttributes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="postRenderContext"><code><span class="field-name">postRenderContext</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/web/WindowHandle/" class="type-link">WindowHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#postRenderContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [WindowHandle](/api-docs/clay-web/clay/web/WindowHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setupEvents"><code><span class="field-name">setupEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setupEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleVisibilityChange"><code><span class="field-name">handleVisibilityChange</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleVisibilityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleContextMenu"><code><span class="field-name">handleContextMenu</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleContextMenu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleFullscreenChange"><code><span class="field-name">handleFullscreenChange</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Event/" class="type-link">js.html.Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleFullscreenChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.Event](/api-docs/clay-web/js/html/Event/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleFullscreenError"><code><span class="field-name">handleFullscreenError</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Event/" class="type-link">js.html.Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleFullscreenError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.Event](/api-docs/clay-web/js/html/Event/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMouseEnter"><code><span class="field-name">handleMouseEnter</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMouseEnter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMouseLeave"><code><span class="field-name">handleMouseLeave</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMouseLeave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMouseDown"><code><span class="field-name">handleMouseDown</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMouseUp"><code><span class="field-name">handleMouseUp</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMouseMove"><code><span class="field-name">handleMouseMove</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleWheel"><code><span class="field-name">handleWheel</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/WheelEvent/" class="type-link">js.html.WheelEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.WheelEvent](/api-docs/clay-web/js/html/WheelEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleTouchStart"><code><span class="field-name">handleTouchStart</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchEvent/" class="type-link">js.html.TouchEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTouchStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.TouchEvent](/api-docs/clay-web/js/html/TouchEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleTouchEnd"><code><span class="field-name">handleTouchEnd</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchEvent/" class="type-link">js.html.TouchEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTouchEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.TouchEvent](/api-docs/clay-web/js/html/TouchEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleTouchMove"><code><span class="field-name">handleTouchMove</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TouchEvent/" class="type-link">js.html.TouchEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.TouchEvent](/api-docs/clay-web/js/html/TouchEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearPendingKeyUps"><code><span class="field-name">clearPendingKeyUps</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearPendingKeyUps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleKeyDown"><code><span class="field-name">handleKeyDown</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/KeyboardEvent/" class="type-link">js.html.KeyboardEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.KeyboardEvent](/api-docs/clay-web/js/html/KeyboardEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleKeyUp"><code><span class="field-name">handleKeyUp</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/KeyboardEvent/" class="type-link">js.html.KeyboardEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.KeyboardEvent](/api-docs/clay-web/js/html/KeyboardEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleKeyPress"><code><span class="field-name">handleKeyPress</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/KeyboardEvent/" class="type-link">js.html.KeyboardEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.KeyboardEvent](/api-docs/clay-web/js/html/KeyboardEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleGamepadConnected"><code><span class="field-name">handleGamepadConnected</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/GamepadEvent/" class="type-link">js.html.GamepadEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleGamepadConnected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.GamepadEvent](/api-docs/clay-web/js/html/GamepadEvent/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleGamepadDisconnected"><code><span class="field-name">handleGamepadDisconnected</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/GamepadEvent/" class="type-link">js.html.GamepadEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleGamepadDisconnected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.GamepadEvent](/api-docs/clay-web/js/html/GamepadEvent/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertKeyCode"><code><span class="field-name">convertKeyCode</span><span class="parenthesis">(</span><span class="arg-name">domKeyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/KeyCode/" class="type-link">clay.KeyCode</a></code><a class="header-anchor" href="#convertKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This takes a *DOM* keycode and returns a clay KeyCode value

| Name | Type |
|------|------|
| `domKeyCode` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [clay.KeyCode](/api-docs/clay-web/clay/KeyCode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="convertScanCode"><code><span class="field-name">convertScanCode</span><span class="parenthesis">(</span><span class="arg-name">rawCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/KeyCode/" class="type-link">clay.KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ScanCode/" class="type-link">clay.ScanCode</a></code><a class="header-anchor" href="#convertScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This taks a KeyboardEvent.code value and returns a clay ScanCode value

| Name | Type |
|------|------|
| `rawCode` | [String](/api-docs/clay-web/String/) |
| `keyCode` | [clay.KeyCode](/api-docs/clay-web/clay/KeyCode/) |

| Returns |
|---------|
| [clay.ScanCode](/api-docs/clay-web/clay/ScanCode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="modStateFromEvent"><code><span class="field-name">modStateFromEvent</span><span class="parenthesis">(</span><span class="arg-name">keyEvent</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/KeyboardEvent/" class="type-link">js.html.KeyboardEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ModState/" class="type-link">clay.ModState</a></code><a class="header-anchor" href="#modStateFromEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyEvent` | [js.html.KeyboardEvent](/api-docs/clay-web/js/html/KeyboardEvent/) |

| Returns |
|---------|
| [clay.ModState](/api-docs/clay-web/clay/ModState/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowX"><code><span class="field-name">getWindowX</span><span class="parenthesis">(</span><span class="arg-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRect/" class="type-link">js.html.DOMRect</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWindowX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bounds` | [js.html.DOMRect](/api-docs/clay-web/js/html/DOMRect/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowY"><code><span class="field-name">getWindowY</span><span class="parenthesis">(</span><span class="arg-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DOMRect/" class="type-link">js.html.DOMRect</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWindowY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bounds` | [js.html.DOMRect](/api-docs/clay-web/js/html/DOMRect/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="translateMouseX"><code><span class="field-name">translateMouseX</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#translateMouseX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="translateMouseY"><code><span class="field-name">translateMouseY</span><span class="parenthesis">(</span><span class="arg-name">ev</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MouseEvent/" class="type-link">js.html.MouseEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#translateMouseY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ev` | [js.html.MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateWindowBounds"><code><span class="field-name">updateWindowBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWindowBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initGamepads"><code><span class="field-name">initGamepads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getGamepadList"><code><span class="field-name">getGamepadList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Gamepad/" class="type-link">js.html.Gamepad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getGamepadList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[js.html.Gamepad](/api-docs/clay-web/js/html/Gamepad/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="initGamepadCacheIfNeeded"><code><span class="field-name">initGamepadCacheIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Gamepad/" class="type-link">js.html.Gamepad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initGamepadCacheIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [js.html.Gamepad](/api-docs/clay-web/js/html/Gamepad/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deleteGamepadCache"><code><span class="field-name">deleteGamepadCache</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Gamepad/" class="type-link">js.html.Gamepad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteGamepadCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [js.html.Gamepad](/api-docs/clay-web/js/html/Gamepad/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pollGamepads"><code><span class="field-name">pollGamepads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pollGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="clamp"><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | clay.Clay |
| `:access` | clay.Input |
| `:access` | clay.Screen |


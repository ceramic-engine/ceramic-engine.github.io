---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: SDL_Extern
target: Clay (Native)
permalink: api-docs/clay-native/clay/sdl/SDL_Extern/
---

# SDL_Extern

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/sdl/SDL.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.sdl.SDL_Extern</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="bind"><code><span class="field-name">bind</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quit"><code><span class="field-name">quit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setHint"><code><span class="field-name">setHint</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setHint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |
| `value` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setLCNumericCLocale"><code><span class="field-name">setLCNumericCLocale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLCNumericCLocale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Expose this method to be able to patch locale as Std.parseFloat() may break otherwise.

<hr class="field-separator" />

<div class="signature field-method no-description" id="initSubSystem"><code><span class="field-name">initSubSystem</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#initSubSystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flags` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quitSubSystem"><code><span class="field-name">quitSubSystem</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quitSubSystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flags` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setVideoDriver"><code><span class="field-name">setVideoDriver</span><span class="parenthesis">(</span><span class="arg-name">driver</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setVideoDriver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `driver` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getError"><code><span class="field-name">getError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createWindow"><code><span class="field-name">createWindow</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowFlags/" class="type-link">SDLWindowFlags</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a></code><a class="header-anchor" href="#createWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `title` | [String](/api-docs/clay-native/String/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `width` | [Int](/api-docs/clay-native/Int/) |
| `height` | [Int](/api-docs/clay-native/Int/) |
| `flags` | [SDLWindowFlags](/api-docs/clay-native/clay/sdl/SDLWindowFlags/) |

| Returns |
|---------|
| [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowID"><code><span class="field-name">getWindowID</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowID/" class="type-link">SDLWindowID</a></code><a class="header-anchor" href="#getWindowID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [SDLWindowID](/api-docs/clay-native/clay/sdl/SDLWindowID/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowTitle"><code><span class="field-name">setWindowTitle</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `title` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowBordered"><code><span class="field-name">setWindowBordered</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">bordered</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowBordered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `bordered` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFullscreenMode"><code><span class="field-name">setWindowFullscreenMode</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/" class="type-link">SDLDisplayModeConstPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setWindowFullscreenMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `mode` | [SDLDisplayModeConstPointer](/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFullscreen"><code><span class="field-name">setWindowFullscreen</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setWindowFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `fullscreen` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowSize"><code><span class="field-name">getWindowSize</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLSize/" class="type-link">SDLSize</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `size` | [SDLSize](/api-docs/clay-native/clay/sdl/SDLSize/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowSizeInPixels"><code><span class="field-name">getWindowSizeInPixels</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLSize/" class="type-link">SDLSize</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getWindowSizeInPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `size` | [SDLSize](/api-docs/clay-native/clay/sdl/SDLSize/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowPosition"><code><span class="field-name">getWindowPosition</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLPoint/" class="type-link">SDLPoint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getWindowPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `position` | [SDLPoint](/api-docs/clay-native/clay/sdl/SDLPoint/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowFullscreenMode"><code><span class="field-name">getWindowFullscreenMode</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/" class="type-link">SDLDisplayModeConstPointer</a></code><a class="header-anchor" href="#getWindowFullscreenMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [SDLDisplayModeConstPointer](/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDesktopDisplayMode"><code><span class="field-name">getDesktopDisplayMode</span><span class="parenthesis">(</span><span class="arg-name">displayID</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayID/" class="type-link">SDLDisplayID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/" class="type-link">SDLDisplayModeConstPointer</a></code><a class="header-anchor" href="#getDesktopDisplayMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `displayID` | [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) |

| Returns |
|---------|
| [SDLDisplayModeConstPointer](/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPrimaryDisplay"><code><span class="field-name">getPrimaryDisplay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayID/" class="type-link">SDLDisplayID</a></code><a class="header-anchor" href="#getPrimaryDisplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDisplayForWindow"><code><span class="field-name">getDisplayForWindow</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayID/" class="type-link">SDLDisplayID</a></code><a class="header-anchor" href="#getDisplayForWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowFlags"><code><span class="field-name">getWindowFlags</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowFlagsPointer/" class="type-link">SDLWindowFlagsPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getWindowFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `flags` | [SDLWindowFlagsPointer](/api-docs/clay-native/clay/sdl/SDLWindowFlagsPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_SetAttribute"><code><span class="field-name">GL_SetAttribute</span><span class="parenthesis">(</span><span class="arg-name">attr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GL_SetAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attr` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_CreateContext"><code><span class="field-name">GL_CreateContext</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGLContext/" class="type-link">SDLGLContext</a></code><a class="header-anchor" href="#GL_CreateContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [SDLGLContext](/api-docs/clay-native/clay/sdl/SDLGLContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_GetCurrentContext"><code><span class="field-name">GL_GetCurrentContext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGLContext/" class="type-link">SDLGLContext</a></code><a class="header-anchor" href="#GL_GetCurrentContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [SDLGLContext](/api-docs/clay-native/clay/sdl/SDLGLContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_GetAttribute"><code><span class="field-name">GL_GetAttribute</span><span class="parenthesis">(</span><span class="arg-name">attr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GL_GetAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attr` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_MakeCurrent"><code><span class="field-name">GL_MakeCurrent</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGLContext/" class="type-link">SDLGLContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GL_MakeCurrent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `context` | [SDLGLContext](/api-docs/clay-native/clay/sdl/SDLGLContext/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_SwapWindow"><code><span class="field-name">GL_SwapWindow</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GL_SwapWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_SetSwapInterval"><code><span class="field-name">GL_SetSwapInterval</span><span class="parenthesis">(</span><span class="arg-name">interval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GL_SetSwapInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interval` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GL_DestroyContext"><code><span class="field-name">GL_DestroyContext</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGLContext/" class="type-link">SDLGLContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GL_DestroyContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLGLContext](/api-docs/clay-native/clay/sdl/SDLGLContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTicks"><code><span class="field-name">getTicks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a></code><a class="header-anchor" href="#getTicks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="delay"><code><span class="field-name">delay</span><span class="parenthesis">(</span><span class="arg-name">ms</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#delay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ms` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pollEvent"><code><span class="field-name">pollEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEventPointer/" class="type-link">SDLEventPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pollEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | [SDLEventPointer](/api-docs/clay-native/clay/sdl/SDLEventPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pumpEvents"><code><span class="field-name">pumpEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pumpEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getNumJoysticks"><code><span class="field-name">getNumJoysticks</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNumJoysticks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isGamepad"><code><span class="field-name">isGamepad</span><span class="parenthesis">(</span><span class="arg-name">instance_id</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance_id` | [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="openJoystick"><code><span class="field-name">openJoystick</span><span class="parenthesis">(</span><span class="arg-name">instance_id</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickPointer/" class="type-link">SDLJoystickPointer</a></code><a class="header-anchor" href="#openJoystick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance_id` | [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

| Returns |
|---------|
| [SDLJoystickPointer](/api-docs/clay-native/clay/sdl/SDLJoystickPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="closeJoystick"><code><span class="field-name">closeJoystick</span><span class="parenthesis">(</span><span class="arg-name">joystick</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickPointer/" class="type-link">SDLJoystickPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closeJoystick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `joystick` | [SDLJoystickPointer](/api-docs/clay-native/clay/sdl/SDLJoystickPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="openGamepad"><code><span class="field-name">openGamepad</span><span class="parenthesis">(</span><span class="arg-name">instance_id</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a></code><a class="header-anchor" href="#openGamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance_id` | [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

| Returns |
|---------|
| [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="closeGamepad"><code><span class="field-name">closeGamepad</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closeGamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getGamepadNameForID"><code><span class="field-name">getGamepadNameForID</span><span class="parenthesis">(</span><span class="arg-name">instance_id</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getGamepadNameForID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance_id` | [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getJoystickNameForID"><code><span class="field-name">getJoystickNameForID</span><span class="parenthesis">(</span><span class="arg-name">instance_id</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getJoystickNameForID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance_id` | [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadHasRumble"><code><span class="field-name">gamepadHasRumble</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#gamepadHasRumble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rumbleGamepad"><code><span class="field-name">rumbleGamepad</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a><span class="operator">,</span> <span class="arg-name">low_frequency_rumble</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">,</span> <span class="arg-name">high_frequency_rumble</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">,</span> <span class="arg-name">duration_ms</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rumbleGamepad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) |
| `low_frequency_rumble` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |
| `high_frequency_rumble` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |
| `duration_ms` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setGamepadSensorEnabled"><code><span class="field-name">setGamepadSensorEnabled</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLGamepadPointer/" class="type-link">SDLGamepadPointer</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setGamepadSensorEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) |
| `type` | [Int](/api-docs/clay-native/Int/) |
| `enabled` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getJoystickID"><code><span class="field-name">getJoystickID</span><span class="parenthesis">(</span><span class="arg-name">joystick</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickPointer/" class="type-link">SDLJoystickPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLJoystickID/" class="type-link">SDLJoystickID</a></code><a class="header-anchor" href="#getJoystickID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `joystick` | [SDLJoystickPointer](/api-docs/clay-native/clay/sdl/SDLJoystickPointer/) |

| Returns |
|---------|
| [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEventWatch"><code><span class="field-name">setEventWatch</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">eventWatcher</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Callable/" class="type-link">cpp.Callable</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setEventWatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `eventWatcher` | [cpp.Callable](/api-docs/clay-native/cpp/Callable/)<Function> |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDisplayContentScale"><code><span class="field-name">getDisplayContentScale</span><span class="parenthesis">(</span><span class="arg-name">displayID</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayID/" class="type-link">SDLDisplayID</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getDisplayContentScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `displayID` | [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDisplayUsableBounds"><code><span class="field-name">getDisplayUsableBounds</span><span class="parenthesis">(</span><span class="arg-name">displayID</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLDisplayID/" class="type-link">SDLDisplayID</a><span class="operator">,</span> <span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLRectPointer/" class="type-link">SDLRectPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getDisplayUsableBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `displayID` | [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) |
| `rect` | [SDLRectPointer](/api-docs/clay-native/clay/sdl/SDLRectPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowInFullscreenSpace"><code><span class="field-name">isWindowInFullscreenSpace</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowInFullscreenSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBasePath"><code><span class="field-name">getBasePath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getBasePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startTextInput"><code><span class="field-name">startTextInput</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stopTextInput"><code><span class="field-name">stopTextInput</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTextInputArea"><code><span class="field-name">setTextInputArea</span><span class="parenthesis">(</span><span class="arg-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLWindowPointer/" class="type-link">SDLWindowPointer</a><span class="operator">,</span> <span class="arg-name">rect</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLRectConstPointer/" class="type-link">SDLRectConstPointer</a><span class="operator">,</span> <span class="arg-name">cursor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextInputArea"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `window` | [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) |
| `rect` | [SDLRectConstPointer](/api-docs/clay-native/clay/sdl/SDLRectConstPointer/) |
| `cursor` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioFromFile"><code><span class="field-name">ioFromFile</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a></code><a class="header-anchor" href="#ioFromFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [String](/api-docs/clay-native/String/) |
| `mode` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioFromMem"><code><span class="field-name">ioFromMem</span><span class="parenthesis">(</span><span class="arg-name">mem</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a></code><a class="header-anchor" href="#ioFromMem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mem` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioRead"><code><span class="field-name">ioRead</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a><span class="operator">,</span> <span class="arg-name">dest</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ioRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |
| `dest` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioWrite"><code><span class="field-name">ioWrite</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ioWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |
| `src` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioSeek"><code><span class="field-name">ioSeek</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a><span class="operator">,</span> <span class="arg-name">whence</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#ioSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |
| `offset` | [cpp.Int64](/api-docs/clay-native/cpp/Int64/) |
| `whence` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [cpp.Int64](/api-docs/clay-native/cpp/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioTell"><code><span class="field-name">ioTell</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#ioTell"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |

| Returns |
|---------|
| [cpp.Int64](/api-docs/clay-native/cpp/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ioClose"><code><span class="field-name">ioClose</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/" class="type-link">SDLIOStreamPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ioClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPrefPath"><code><span class="field-name">getPrefPath</span><span class="parenthesis">(</span><span class="arg-name">org</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#getPrefPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `org` | [String](/api-docs/clay-native/String/) |
| `app` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasClipboardText"><code><span class="field-name">hasClipboardText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasClipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getClipboardText"><code><span class="field-name">getClipboardText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getClipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setClipboardText"><code><span class="field-name">setClipboardText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setClipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createRGBSurfaceFrom"><code><span class="field-name">createRGBSurfaceFrom</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rmask</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">gmask</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">bmask</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">amask</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLSurfacePointer/" class="type-link">SDLSurfacePointer</a></code><a class="header-anchor" href="#createRGBSurfaceFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pixels` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `width` | [Int](/api-docs/clay-native/Int/) |
| `height` | [Int](/api-docs/clay-native/Int/) |
| `depth` | [Int](/api-docs/clay-native/Int/) |
| `pitch` | [Int](/api-docs/clay-native/Int/) |
| `rmask` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `gmask` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `bmask` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `amask` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [SDLSurfacePointer](/api-docs/clay-native/clay/sdl/SDLSurfacePointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="freeSurface"><code><span class="field-name">freeSurface</span><span class="parenthesis">(</span><span class="arg-name">surface</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLSurfacePointer/" class="type-link">SDLSurfacePointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#freeSurface"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `surface` | [SDLSurfacePointer](/api-docs/clay-native/clay/sdl/SDLSurfacePointer/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | clay.sdl.Linc.touch() |
| `:build` | clay.sdl.Linc.xml("sdl", "../sdl") |
| `:include` | "linc_sdl.h" |


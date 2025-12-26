---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Backend
target: Clay (Native)
permalink: api-docs/clay-native/backend/Backend/
---

# Backend

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Backend.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Backend</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/spec/Backend/">spec.Backend</a>, <a href="/api-docs/clay-native/tracker/Events/">tracker.Events</a></div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="io"><div class="plugin-name">clay</div><code><span class="field-name">io</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/IO/" class="type-link">IO</a></code><a class="header-anchor" href="#io"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

File I/O operations backend service.
Handles reading/writing files and persistent key-value storage.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="info"><div class="plugin-name">clay</div><code><span class="field-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Info/" class="type-link">Info</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform information backend service.
Provides system information like platform type, version, etc.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="audio"><div class="plugin-name">clay</div><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Audio/" class="type-link">Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio backend service.
Handles sound loading, playback, and audio filters.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="draw"><div class="plugin-name">clay</div><code><span class="field-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Draw/" class="type-link">Draw</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering backend service.
Handles OpenGL/WebGL drawing operations, shaders, and render targets.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="texts"><div class="plugin-name">clay</div><code><span class="field-name">texts</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texts/" class="type-link">Texts</a></code><a class="header-anchor" href="#texts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text loading backend service.
Handles loading and processing of text files.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="binaries"><div class="plugin-name">clay</div><code><span class="field-name">binaries</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Binaries/" class="type-link">Binaries</a></code><a class="header-anchor" href="#binaries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binary data loading backend service.
Handles loading and processing of binary files.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textures"><div class="plugin-name">clay</div><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Textures/" class="type-link">Textures</a></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture management backend service.
Handles loading, creating, and managing OpenGL textures.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="shaders"><div class="plugin-name">clay</div><code><span class="field-name">shaders</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Shaders/" class="type-link">Shaders</a></code><a class="header-anchor" href="#shaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shader management backend service.
Handles loading, compiling, and managing OpenGL shaders.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="screen"><div class="plugin-name">clay</div><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Screen/" class="type-link">Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen/display backend service.
Handles window management, fullscreen, resolution, and display properties.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="input"><div class="plugin-name">clay</div><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Input/" class="type-link">Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Input handling backend service.
Handles keyboard, mouse, touch, and gamepad input events.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textInput"><div class="plugin-name">clay</div><code><span class="field-name">textInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/TextInput/" class="type-link">TextInput</a></code><a class="header-anchor" href="#textInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input backend service.
Handles on-screen keyboards and text input controls.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipboard"><div class="plugin-name">clay</div><code><span class="field-name">clipboard</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Clipboard/" class="type-link">Clipboard</a></code><a class="header-anchor" href="#clipboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clipboard backend service.
Handles system clipboard operations for cut/copy/paste functionality.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="init"><div class="plugin-name">clay</div><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/App/" class="type-link">ceramic.App</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the Clay backend with the given Ceramic application.

This method performs platform-specific initialization including:
- SDL binding (on SDL-enabled platforms)
- Disabling momentum scrolling on macOS
- Platform-specific native initialization



| Name | Type | Description |
|------|------|-------------|
| `app` | [ceramic.App](/api-docs/clay-native/ceramic/App/) | The Ceramic application instance to initialize with |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setTargetFps"><div class="plugin-name">clay</div><code><span class="field-name">setTargetFps</span><span class="parenthesis">(</span><span class="arg-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTargetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the target framerate for the application.

Controls the application update rate and minimum frame time:
- Updates Clay's update rate configuration
- Sets minimum frame time to 75% of target frame time on desktop platforms
- Use 0 or negative FPS to disable frame rate limiting



| Name | Type | Description |
|------|------|-------------|
| `fps` | [Int](/api-docs/clay-native/Int/) | Target frames per second (0 or negative to disable limiting) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">clay</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Clay backend instance.
All backend services are automatically instantiated.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="http"><div class="plugin-name">http</div><code><span class="field-name">http</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Http/" class="type-link">Http</a></code><a class="header-anchor" href="#http"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HTTP networking backend service.
Handles HTTP requests and responses (when http plugin is enabled).

## Private Members

<div class="signature field-method has-description has-plugin" id="emitReady"><div class="plugin-name">clay</div><code><span class="field-name">emitReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the backend is ready and fully initialized.
This event is emitted after all backend services are set up.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdate"><div class="plugin-name">clay</div><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired every frame during the update phase.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since the last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitRender"><div class="plugin-name">clay</div><code><span class="field-name">emitRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired every frame during the render phase.
This event is emitted after the update phase is complete.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSdlEvent"><div class="plugin-name">clay</div><code><span class="field-name">emitSdlEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/SDLEvent/" class="type-link">clay.sdl.SDLEvent</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSdlEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when an SDL event is received (SDL platforms only).
Provides direct access to low-level SDL events for advanced use cases.



| Name | Type | Description |
|------|------|-------------|
| `event` | [clay.sdl.SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) | The SDL event data |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="canRender"><div class="plugin-name">clay</div><code><span class="field-name">canRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:headerCode` | "#include \"linc_sdl.h\"" |
| `:allow` | backend.Main |
| `:allow` | backend.Textures |
| `:allow` | backend.ClayEvents |


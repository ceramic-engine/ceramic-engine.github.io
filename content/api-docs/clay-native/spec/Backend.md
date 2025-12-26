---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Backend
target: Clay (Native)
permalink: api-docs/clay-native/spec/Backend/
---

# Backend

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Backend.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Backend</strong> (Interface) → <a href="/api-docs/clay-native/backend/Backend/">backend.Backend</a></div>

Main backend interface that provides access to all platform-specific functionality.

This is the central contract that all backend implementations (Clay, Unity, Headless, Web)
must fulfill to run Ceramic applications. Each backend provides concrete implementations
of the various subsystem interfaces (audio, graphics, input, etc.).

The backend is initialized early in the application lifecycle and provides the bridge
between Ceramic's platform-agnostic code and the underlying platform APIs.

## Instance Members

<div class="signature field-var has-description" id="io"><code><span class="field-name">io</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/IO/" class="type-link">backend.IO</a></code><a class="header-anchor" href="#io"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

File system and asset loading operations.
Handles reading/writing files and loading assets from various sources.

<hr class="field-separator" />

<div class="signature field-var has-description" id="info"><code><span class="field-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Info/" class="type-link">backend.Info</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

System and platform information.
Provides details about the runtime environment, platform capabilities, and system state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="audio"><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Audio/" class="type-link">backend.Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Audio playback and processing system.
Manages sound loading, playback, effects, and bus routing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="draw"><code><span class="field-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Draw/" class="type-link">backend.Draw</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Graphics rendering system.
Handles all drawing operations, shader management, and GPU communication.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texts"><code><span class="field-name">texts</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Texts/" class="type-link">backend.Texts</a></code><a class="header-anchor" href="#texts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text rendering and font management.
Provides text measurement, rendering, and font handling capabilities.

<hr class="field-separator" />

<div class="signature field-var has-description" id="binaries"><code><span class="field-name">binaries</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Binaries/" class="type-link">backend.Binaries</a></code><a class="header-anchor" href="#binaries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binary data loading and management.
Handles loading raw binary files and data buffers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textures"><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Textures/" class="type-link">backend.Textures</a></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture loading and management.
Handles image loading, texture creation, and GPU texture operations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="screen"><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Screen/" class="type-link">backend.Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen and window management.
Controls display properties, window state, and screen-related events.

<hr class="field-separator" />

<div class="signature field-var has-description" id="http"><code><span class="field-name">http</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Http/" class="type-link">backend.Http</a></code><a class="header-anchor" href="#http"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HTTP networking operations (optional plugin).
Provides HTTP request/response functionality when the http plugin is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textInput"><code><span class="field-name">textInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/TextInput/" class="type-link">backend.TextInput</a></code><a class="header-anchor" href="#textInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text input and IME (Input Method Editor) support.
Handles keyboard text entry, virtual keyboards, and international input methods.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipboard"><code><span class="field-name">clipboard</span><span class="operator">:</span> <a href="/api-docs/clay-native/backend/Clipboard/" class="type-link">backend.Clipboard</a></code><a class="header-anchor" href="#clipboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

System clipboard operations.
Provides copy/paste functionality for text and data.

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/App/" class="type-link">ceramic.App</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the backend with the main application instance.
This is called once during application startup, before any other backend methods.
The backend should set up platform-specific systems and prepare for operation.


| Name | Type | Description |
|------|------|-------------|
| `app` | [ceramic.App](/api-docs/clay-native/ceramic/App/) | The main Ceramic application instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTargetFps"><code><span class="field-name">setTargetFps</span><span class="parenthesis">(</span><span class="arg-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTargetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the target frame rate for the application.
The backend should attempt to maintain this frame rate, though actual FPS
may vary based on system performance and vsync settings.


| Name | Type | Description |
|------|------|-------------|
| `fps` | [Int](/api-docs/clay-native/Int/) | The target frames per second (typically 30, 60, or 120) |


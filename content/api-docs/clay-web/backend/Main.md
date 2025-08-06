---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Main
target: Clay (Web)
permalink: api-docs/clay-web/backend/Main/
---

# Main

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Main.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Main</strong> (Class)</div>

Main entry point for Clay backend applications.

This class handles the initial setup and configuration of Clay applications,
including platform-specific initialization for web, desktop, and mobile targets.
It configures Clay's rendering settings, handles Electron integration,
manages window sizing and orientation, and sets up the Ceramic application lifecycle.

Key responsibilities:
- Clay framework initialization and configuration
- Platform-specific setup (web, desktop, mobile)
- Electron runner integration for development
- Window and viewport management
- Orientation handling for mobile devices
- Error handling and logging setup

## Static Members

<div class="signature field-method has-description has-plugin" id="main"><div class="plugin-name">clay</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main entry point for Clay backend applications.

Initializes the Clay framework with custom configuration and event handling.
This is called automatically when the application starts.

## Private Members

<div class="signature field-var has-description has-plugin" id="project"><div class="plugin-name">clay</div><code><span class="field-name">project</span><span class="operator">:</span> <a href="/api-docs/clay-web/Project/" class="type-link">Project</a></code><a class="header-anchor" href="#project"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic project instance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="events"><div class="plugin-name">clay</div><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/ClayEvents/" class="type-link">ClayEvents</a></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay events handler instance for managing application lifecycle events.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="app"><div class="plugin-name">clay</div><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/App/" class="type-link">ceramic.App</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The main Ceramic application instance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastResizeTime"><div class="plugin-name">clay</div><code><span class="field-name">lastResizeTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastResizeTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Timestamp of the last resize event (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastNewWidth"><div class="plugin-name">clay</div><code><span class="field-name">lastNewWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastNewWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width from the last resize event (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lastNewHeight"><div class="plugin-name">clay</div><code><span class="field-name">lastNewHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastNewHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height from the last resize event (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="readyToDisplay"><div class="plugin-name">clay</div><code><span class="field-name">readyToDisplay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readyToDisplay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the web application is ready to display (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="resizing"><div class="plugin-name">clay</div><code><span class="field-name">resizing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#resizing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Counter for ongoing resize operations (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="containerElId"><div class="plugin-name">clay</div><code><span class="field-name">containerElId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#containerElId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ID of the HTML container element (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="containerWidth"><div class="plugin-name">clay</div><code><span class="field-name">containerWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#containerWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current container width in pixels (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="containerHeight"><div class="plugin-name">clay</div><code><span class="field-name">containerHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#containerHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current container height in pixels (web only).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="containerPixelRatio"><div class="plugin-name">clay</div><code><span class="field-name">containerPixelRatio</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#containerPixelRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current container pixel ratio (web only).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="configure"><div class="plugin-name">clay</div><code><span class="field-name">configure</span><span class="parenthesis">(</span><span class="arg-name">config</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Config/" class="type-link">clay.Config</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures Clay framework settings for the Ceramic application.

This function handles:
- OpenGL/WebGL version configuration
- Platform-specific rendering settings
- Window configuration (size, fullscreen, resizable)
- Electron runner integration and development features
- Web-specific container and viewport handling
- Mobile platform optimizations
- Error handling setup



| Name | Type | Description |
|------|------|-------------|
| `config` | [clay.Config](/api-docs/clay-web/clay/Config/) | The Clay configuration object to customize |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="ready"><div class="plugin-name">clay</div><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the Clay backend is ready and initialized.

This function handles final initialization steps including:
- Key-value storage initialization
- Web-specific display setup and extension loading
- Electron runner communication
- Display readiness management

This method is called by ClayEvents and should not be called directly.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="configureOrientation"><div class="plugin-name">clay</div><code><span class="field-name">configureOrientation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures screen orientation for mobile devices (SDL platforms only).

This function converts Ceramic's orientation settings into SDL hints
to control which orientations are allowed on mobile platforms.

Supported orientations:
- Portrait (upright)
- Portrait upside down
- Landscape left
- Landscape right

Multiple orientations can be combined using bitwise OR operations.


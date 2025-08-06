---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Settings
target: Unity
permalink: api-docs/unity/ceramic/Settings/
---

# Settings

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Settings.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Settings</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

Central configuration hub for Ceramic applications.

Settings provides both compile-time and runtime configuration options that control
various aspects of your application, from window properties to rendering behavior.
Many settings are observable, allowing the app to react to changes dynamically.

Settings are typically configured during app initialization but many can be
modified at runtime to adjust behavior on the fly.

Key configuration areas:
- **Display**: Window size, fullscreen, scaling modes
- **Performance**: Target FPS, delta time handling
- **Rendering**: Background color, antialiasing, shaders
- **Assets**: Default assets, asset paths
- **Input**: Touch and mouse wheel behavior

Example usage:
```haxe
// Configure display
settings.targetWidth = 1280;
settings.targetHeight = 720;
settings.scaling = FIT;

// Set performance options
settings.targetFps = 60;
settings.maxDelta = 0.1;

// Configure rendering
settings.background = Color.GRAY;
settings.antialiasing = 4;
```

<div class="see"><strong>See:</strong> App#settings, <a href="/api-docs/unity/ceramic/ScreenScaling/">ScreenScaling</a>, <a href="/api-docs/unity/ceramic/Screen/">Screen</a></div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetWidth"><code><span class="field-name">targetWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target width. Affects window size at startup (unless `windowWidth` is specified)
and affects screen scaling at any time.
Ignored if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetHeight"><code><span class="field-name">targetHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target height. Affects window size at startup (unless `windowHeight` is specified)
and affects screen scaling at any time.
Ignored if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowWidth"><code><span class="field-name">windowWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target window width at startup
Uses `targetWidth` as fallback if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowHeight"><code><span class="field-name">windowHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target window height at startup
Uses `targetHeight` as fallback if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetDensity"><code><span class="field-name">targetDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target density. Affects the quality of textures
being loaded. Changing it at runtime will update
texture quality if needed.
Ignored if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="background"><code><span class="field-name">background</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#background"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background color.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaling"><code><span class="field-name">scaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#scaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Screen scaling (FIT, FILL, RESIZE or FIT_RESIZE).

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App window title.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullscreen"><code><span class="field-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fullscreen enabled or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetFps"><code><span class="field-name">targetFps</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target frames per second for the application.

Controls the desired frame rate:
- Values < 1: Use platform default (usually 60 FPS)
- Values >= 1: Attempt to match the specified FPS

Note: Actual FPS may vary based on device performance and vsync settings.
Higher values may increase CPU/GPU usage.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxDelta"><code><span class="field-name">maxDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum delta time per frame to prevent large time jumps.

Caps the time step between frames to prevent issues when the app
is paused/resumed or experiences frame drops. This helps maintain
stable physics, animations, and game logic.

When actual frame time exceeds maxDelta:
- `app.delta` is capped to this value
- `app.realDelta` contains the actual elapsed time

Default: 0.1 seconds (100ms)

<hr class="field-separator" />

<div class="signature field-var has-description" id="overrideDelta"><code><span class="field-name">overrideDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overrideDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forces a fixed delta time for all updates, ignoring actual frame timing.

When set to a positive value, all time-based operations (animations,
physics, timers) will use this fixed time step instead of real elapsed time.

Use cases:
- Deterministic simulations
- Replay systems
- Debug/testing with consistent timing

Values:
- \< 0: Disabled, use actual frame time (default)
- \> 0: Fixed time step in seconds

**Warning**: This affects all time-based systems. Use with caution.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preventDefaultMouseWheel"><code><span class="field-name">preventDefaultMouseWheel</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preventDefaultMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether mouse wheel events are consumed by the app.

When true (default), prevents mouse wheel events from bubbling to
the browser, stopping page scrolling when the app has focus.
This is especially important for apps embedded in iframes or
scrollable web pages.

Set to false if you want wheel events to scroll the parent page.

Can be overridden at compile time with `-D ceramic_allow_default_mouse_wheel`

<hr class="field-separator" />

<div class="signature field-var has-description" id="preventDefaultTouches"><code><span class="field-name">preventDefaultTouches</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preventDefaultTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether touch events are consumed by the app.

When true (default), prevents touch events from triggering browser
behaviors like scrolling, zooming, or text selection. Essential for
touch-based games and apps to function properly on mobile devices.

Set to false if you need touch events to trigger default browser
behaviors (rare).

Can be overridden at compile time with `-D ceramic_allow_default_mouse_wheel`

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientation"><code><span class="field-name">orientation</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScreenOrientation/" class="type-link">ScreenOrientation</a></code><a class="header-anchor" href="#orientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Supported screen orientations for mobile devices.

Controls which orientations the app supports on mobile platforms.
Multiple orientations can be combined using bitwise OR.

Desktop platforms typically ignore this setting.

Default: NONE (use platform defaults)

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/ScreenOrientation/">ScreenOrientation</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="appInfo"><code><span class="field-name">appInfo</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#appInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic application metadata.

Can store arbitrary application information, particularly useful
when the app is loaded dynamically or needs to pass configuration
from a loader or parent application.

The structure is application-specific.

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multisample antialiasing (MSAA) level.

Reduces jagged edges on rendered graphics:
- 0: Disabled (best performance)
- 2: 2x MSAA (light smoothing)
- 4: 4x MSAA (good quality/performance balance)
- 8: 8x MSAA (high quality, more GPU intensive)

Higher values provide smoother edges but impact performance.
Support varies by platform and GPU.

<hr class="field-separator" />

<div class="signature field-var has-description" id="resizable"><code><span class="field-name">resizable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether the application window can be resized by the user.

Only applies to desktop platforms. When true, users can drag
window edges/corners to resize. The app should handle resize
events appropriately.

Mobile and web platforms ignore this setting.

Default: false (fixed window size)

<hr class="field-separator" />

<div class="signature field-var has-description" id="assetsPath"><code><span class="field-name">assetsPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#assetsPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Root directory path for loading assets.

All asset loading is relative to this path. Can be:
- Relative path: 'assets' (default)
- Absolute path: '/usr/share/myapp/assets'
- URL: 'https://cdn.example.com/assets' (web platform)

Change this to load assets from custom locations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backend"><code><span class="field-name">backend</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#backend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform-specific backend configuration.

Allows passing custom settings to the underlying backend (Clay, Web, Unity).
The structure and available options depend on the current backend.

Examples might include:
- OpenGL context settings
- Platform-specific window flags
- Audio backend configuration

Consult backend documentation for available options.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultFont"><code><span class="field-name">defaultFont</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaultFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default font asset used for text rendering.

This font is used when creating Text visuals without specifying
a font. The font must be available in the assets directory.

Format: 'font:FontName' where FontName matches a font asset file.

Default: 'font:RobotoMedium' (Roboto Medium font)

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultShader"><code><span class="field-name">defaultShader</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaultShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default shader program for rendering.

Used for all visuals that don't explicitly specify a shader.
The shader must support basic textured quad rendering with
color tinting and alpha blending.

Format: 'shader:ShaderName' where ShaderName matches a shader asset.

Default: 'shader:textured' (standard textured shader)

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTargetWidth"><code><span class="field-name">invalidateTargetWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTargetWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTargetHeight"><code><span class="field-name">invalidateTargetHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTargetHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="targetSize"><code><span class="field-name">targetSize</span><span class="parenthesis">(</span><span class="arg-name">targetWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">targetHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#targetSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target width and height. Affects window size at startup
and affects screen scaling at any time.
Ignored if set to 0 (default)


| Name | Type | Description |
|------|------|-------------|
| `targetWidth` | [Int](/api-docs/unity/Int/) | Target width  |
| `targetHeight` | [Int](/api-docs/unity/Int/) | Target height |

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateWindowWidth"><code><span class="field-name">invalidateWindowWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateWindowHeight"><code><span class="field-name">invalidateWindowHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTargetDensity"><code><span class="field-name">invalidateTargetDensity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTargetDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateBackground"><code><span class="field-name">invalidateBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateScaling"><code><span class="field-name">invalidateScaling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTitle"><code><span class="field-name">invalidateTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateFullscreen"><code><span class="field-name">invalidateFullscreen</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTargetFps"><code><span class="field-name">invalidateTargetFps</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTargetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateMaxDelta"><code><span class="field-name">invalidateMaxDelta</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMaxDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateOverrideDelta"><code><span class="field-name">invalidateOverrideDelta</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOverrideDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidatePreventDefaultMouseWheel"><code><span class="field-name">invalidatePreventDefaultMouseWheel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePreventDefaultMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidatePreventDefaultTouches"><code><span class="field-name">invalidatePreventDefaultTouches</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePreventDefaultTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="collections"><code><span class="field-name">collections</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AutoCollections/" class="type-link">AutoCollections</a></code><a class="header-anchor" href="#collections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Factory function for creating app-wide collections.

When set, this function is called to create collection instances
that can be accessed throughout the application. Collections provide
organized storage for game entities, assets, or other data.

Typically set during app initialization.
| Returns |
|---------|
| [AutoCollections](/api-docs/unity/ceramic/AutoCollections/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindEvents"><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="unobservedTargetWidth"><code><span class="field-name">unobservedTargetWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTargetWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTargetHeight"><code><span class="field-name">unobservedTargetHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTargetHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedWindowWidth"><code><span class="field-name">unobservedWindowWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedWindowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedWindowHeight"><code><span class="field-name">unobservedWindowHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedWindowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTargetDensity"><code><span class="field-name">unobservedTargetDensity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTargetDensity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedBackground"><code><span class="field-name">unobservedBackground</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#unobservedBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedScaling"><code><span class="field-name">unobservedScaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTitle"><code><span class="field-name">unobservedTitle</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedFullscreen"><code><span class="field-name">unobservedFullscreen</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedFullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTargetFps"><code><span class="field-name">unobservedTargetFps</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedTargetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedMaxDelta"><code><span class="field-name">unobservedMaxDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedMaxDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedOverrideDelta"><code><span class="field-name">unobservedOverrideDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedOverrideDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedPreventDefaultMouseWheel"><code><span class="field-name">unobservedPreventDefaultMouseWheel</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedPreventDefaultMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedPreventDefaultTouches"><code><span class="field-name">unobservedPreventDefaultTouches</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedPreventDefaultTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Settings</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Settings](/api-docs/unity/ceramic/Settings/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTargetWidthChange"><code><span class="field-name">emitTargetWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTargetWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when targetWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTargetHeightChange"><code><span class="field-name">emitTargetHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTargetHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when targetHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWindowWidthChange"><code><span class="field-name">emitWindowWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWindowHeightChange"><code><span class="field-name">emitWindowHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTargetDensityChange"><code><span class="field-name">emitTargetDensityChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTargetDensityChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when targetDensity field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBackgroundChange"><code><span class="field-name">emitBackgroundChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBackgroundChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when background field changes.

| Name | Type |
|------|------|
| `current` | [Color](/api-docs/unity/ceramic/Color/) |
| `previous` | [Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitScalingChange"><code><span class="field-name">emitScalingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScalingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scaling field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTitleChange"><code><span class="field-name">emitTitleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTitleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when title field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFullscreenChange"><code><span class="field-name">emitFullscreenChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFullscreenChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when fullscreen field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTargetFpsChange"><code><span class="field-name">emitTargetFpsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTargetFpsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when targetFps field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitMaxDeltaChange"><code><span class="field-name">emitMaxDeltaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMaxDeltaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when maxDelta field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/unity/Float/) |
| `previous` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitOverrideDeltaChange"><code><span class="field-name">emitOverrideDeltaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverrideDeltaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when overrideDelta field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/unity/Float/) |
| `previous` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPreventDefaultMouseWheelChange"><code><span class="field-name">emitPreventDefaultMouseWheelChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPreventDefaultMouseWheelChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when preventDefaultMouseWheel field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPreventDefaultTouchesChange"><code><span class="field-name">emitPreventDefaultTouchesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPreventDefaultTouchesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when preventDefaultTouches field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


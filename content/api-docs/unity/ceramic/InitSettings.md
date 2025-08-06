---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InitSettings
target: Unity
permalink: api-docs/unity/ceramic/InitSettings/
---

# InitSettings

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InitSettings.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.InitSettings</strong> (Class)</div>

Same as Settings, but for app startup (inside Project.new(settings)).
Read-only values can still be edited at that stage.

InitSettings provides write access to all application settings during
the initialization phase. This includes settings that are normally
read-only after startup, such as window dimensions, antialiasing,
and backend configuration.

This class wraps the Settings instance and provides setters for
properties that are immutable after initialization. It's only
available in the Project constructor.

Example usage:
```haxe
class Project extends App {
    function new(settings:InitSettings) {
        settings.targetWidth = 1920;
        settings.targetHeight = 1080;
        settings.windowWidth = 1280;
        settings.windowHeight = 720;
        settings.antialiasing = 4;
        settings.title = "My Game";
        super();
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Settings/">Settings</a>, <a href="/api-docs/unity/ceramic/App/">App</a></div>


## Instance Members

<div class="signature field-var has-description" id="targetWidth"><code><span class="field-name">targetWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target width. Affects window size at startup
and affects screen scaling at any time.
Ignored if set to 0 (default)

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetHeight"><code><span class="field-name">targetHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target height. Affects window size at startup
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

Screen scaling (FIT, FILL, RESIZE, FIT_RESIZE).

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App window title.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fullscreen"><code><span class="field-name">fullscreen</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fullscreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fullscreen enabled or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="targetFps"><code><span class="field-name">targetFps</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#targetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target FPS. Using default FPS if value < 1 or try to match the given value if >= 1.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxDelta"><code><span class="field-name">maxDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum app update delta time.
During app update (at each frame), `app.delta` will be capped to `maxDelta`
if its value is above `maxDelta`.
If needed, use `app.realDelta` to get real elapsed time since last frame.

<hr class="field-separator" />

<div class="signature field-var has-description" id="overrideDelta"><code><span class="field-name">overrideDelta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overrideDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override app update delta time.
This can be used to ignore completely the actual elapsed time between frames
and replace it with an explicit delta time of your choice.
This will affect timers, tween, systems update etc...
Use with caution.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preventDefaultMouseWheel"><code><span class="field-name">preventDefaultMouseWheel</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preventDefaultMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true` (default). Default mouse wheel events
will be prevented. This is relevant when running the ceramic
app from an `iframe` inside a page that can scroll.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preventDefaultTouches"><code><span class="field-name">preventDefaultTouches</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preventDefaultTouches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true` (default). Default touch events
will be prevented. This is relevant when running the ceramic
app from an `iframe` inside a page that can scroll,
on a touchscreen device.

<hr class="field-separator" />

<div class="signature field-var has-description" id="orientation"><code><span class="field-name">orientation</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScreenOrientation/" class="type-link">ScreenOrientation</a></code><a class="header-anchor" href="#orientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setup screen orientation. Default is `NONE`,
meaning nothing is enforced and project defaults will be used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Antialiasing value (0 means disabled).

<hr class="field-separator" />

<div class="signature field-var has-description" id="appInfo"><code><span class="field-name">appInfo</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#appInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App info (useful when dynamically loaded, not needed otherwise).

<hr class="field-separator" />

<div class="signature field-var has-description" id="resizable"><code><span class="field-name">resizable</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be resized or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="assetsPath"><code><span class="field-name">assetsPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#assetsPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assets path.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backend"><code><span class="field-name">backend</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#backend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Settings passed to backend.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultFont"><code><span class="field-name">defaultFont</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaultFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default font asset

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultShader"><code><span class="field-name">defaultShader</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaultShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default shader asset

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

<div class="signature field-method has-description" id="windowSize"><code><span class="field-name">windowSize</span><span class="parenthesis">(</span><span class="arg-name">windowWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">windowHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#windowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target window width and height at startup
Uses `targetWidth` and `targetHeight` as fallback if set to 0 (default)


| Name | Type | Description |
|------|------|-------------|
| `windowWidth` | [Int](/api-docs/unity/Int/) | Window width  |
| `windowHeight` | [Int](/api-docs/unity/Int/) | Window height |

<hr class="field-separator" />

<div class="signature field-method has-description" id="collections"><code><span class="field-name">collections</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/AutoCollections/" class="type-link">AutoCollections</a></code><a class="header-anchor" href="#collections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App collections.
| Returns |
|---------|
| [AutoCollections](/api-docs/unity/ceramic/AutoCollections/) |

## Private Members

<div class="signature field-var has-description" id="settings"><code><span class="field-name">settings</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Settings/" class="type-link">Settings</a></code><a class="header-anchor" href="#settings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

App settings

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">settings</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Settings/" class="type-link">Settings</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `settings` | [Settings](/api-docs/unity/ceramic/Settings/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


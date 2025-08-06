---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: ResourceRequest
target: Unity
permalink: api-docs/unity/unityengine/ResourceRequest/
---

# ResourceRequest

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/ResourceRequest.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.ResourceRequest</strong> (extern class)</div>

Represents an asynchronous resource loading operation.
Returned by Resources.LoadAsync() for non-blocking asset loading.

In Ceramic's Unity backend, ResourceRequests enable loading
assets without freezing the main thread, important for:
- Loading large textures or audio files
- Smooth loading screens
- Streaming content during gameplay

The loading happens over multiple frames, allowing the game
to remain responsive while assets load in the background.

Async texture loading:
```haxe
var request = Resources.LoadAsync<Texture2D>("textures/large");
// Later, check if done:
if (request.isDone) {
    var texture = cast(request.asset, Texture2D);
}
```

<div class="see"><strong>See:</strong> Resources, <a href="/api-docs/unity/unityengine/Object/">Object</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">unity</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/Object/" class="type-link">Object</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded asset once loading is complete.

Null while loading (isDone = false).
Contains the loaded asset when isDone = true.

Must be cast to the expected type:
```haxe
var texture = cast(request.asset, Texture2D);
var audio = cast(request.asset, AudioClip);
```

Returns null if loading failed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowSceneActivation"><div class="plugin-name">unity</div><code><span class="field-name">allowSceneActivation</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowSceneActivation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically activate a loaded scene.

Only applies when loading scenes asynchronously.
When false, scene loads to 90% then waits for manual activation.

Not used for regular asset loading (textures, audio, etc.).
Included for API compatibility.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isDone"><div class="plugin-name">unity</div><code><span class="field-name">isDone</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the loading operation has completed.

Check this before accessing the asset property.
Once true, the asset is ready to use (or null if failed).

Polling for completion:
```haxe
function update() {
    if (request.isDone) {
        // Asset is ready
        useAsset(request.asset);
    }
}
```

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="priority"><div class="plugin-name">unity</div><code><span class="field-name">priority</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#priority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loading priority when multiple requests are queued.

Higher values = higher priority.
Default is 0.

Unity processes higher priority requests first
when multiple async loads are active.

Useful for prioritizing critical assets:
```haxe
uiRequest.priority = 1;  // Load UI first
bgRequest.priority = -1; // Load background last
```

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="progress"><div class="plugin-name">unity</div><code><span class="field-name">progress</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a></code><a class="header-anchor" href="#progress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loading progress from 0.0 to 1.0.

Useful for displaying loading bars:
- 0.0 = Just started
- 0.5 = Halfway loaded
- 1.0 = Fully loaded (isDone = true)

Note: Progress may not be linear and can jump.
For scenes, stops at 0.9 if allowSceneActivation = false.

Progress bar:
```haxe
loadingBar.scaleX = request.progress;
```

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


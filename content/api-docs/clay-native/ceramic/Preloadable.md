---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Preloadable
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Preloadable/
---

# Preloadable

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Preloadable.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Preloadable</strong> (Interface) → <a href="/api-docs/clay-native/ceramic/Scene/">Scene</a></div>

Interface for objects that can report their loading progress.

Any class that implements this interface can be used with a `Preloader`
to track loading progress. The preloadable object is responsible for
calling the update callback whenever its loading state changes.

This is typically used for assets, scenes, or other resources that
need to be loaded before being ready for use.

Example usage:
```haxe
class MyAsset implements Preloadable {
    var updatePreload:(Int, Int, PreloadStatus)->Void;
    public function requestPreloadUpdate(update) {
        this.updatePreload = update;
        // Start loading...
        updatePreload(0, 100, LOADING);
    }
    function onProgress(loaded:Int, total:Int) {
        updatePreload(loaded, total, LOADING);
    }
    function onComplete() {
        updatePreload(100, 100, SUCCESS);
    }
}
```

<div class="see"><strong>See:</strong> Preloader, <a href="/api-docs/clay-native/ceramic/PreloadStatus/">PreloadStatus</a></div>


## Instance Members

<div class="signature field-method has-description" id="requestPreloadUpdate"><code><span class="field-name">requestPreloadUpdate</span><span class="parenthesis">(</span><span class="arg-name">updatePreload</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#requestPreloadUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the preloader to register an update callback.

The preloadable object must store the provided callback and call it
whenever its loading progress changes. The callback should be called
with the current progress, total expected progress, and status.

The preloadable is expected to:
- Call the update callback immediately with the current state
- Continue calling it whenever progress changes
- Call it with status SUCCESS when loading completes
- Call it with status FAILED if loading fails



| Name | Type | Description |
|------|------|-------------|
| `updatePreload` | Function | Callback function to report progress. Parameters are: - progress: Current progress value (0 to total) - total: Total expected progress value - status: Current loading status |


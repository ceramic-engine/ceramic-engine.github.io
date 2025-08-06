---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SceneStatus
target: Headless
permalink: api-docs/headless/ceramic/SceneStatus/
---

# SceneStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SceneStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SceneStatus</strong> (Abstract)</div>

Represents the lifecycle status of a Scene in the Ceramic framework.

SceneStatus tracks a scene through its complete lifecycle, from initialization
through loading, creation, display, and eventual removal. Each status represents
a specific phase that scenes go through, allowing the framework and developers
to coordinate actions based on the scene's current state.

Lifecycle flow:
1. **NONE** → Initial state when scene is created
2. **PRELOAD** → Scene is preparing assets to load
3. **LOAD** → Assets are actively being loaded
4. **CREATE** → Scene content is being created
5. **FADE_IN** → Scene is transitioning to visible
6. **READY** → Scene is fully active and interactive
7. **FADE_OUT** → Scene is transitioning out
8. **DISABLED** → Scene is inactive and should be destroyed

The status progression is typically automatic, managed by the Scene class
and the framework's scene management system. Developers can override scene
methods (preload, create, fadeIn, fadeOut) to customize behavior at each phase.

Example usage:
```haxe
if (scene.status == SceneStatus.READY) {
    // Scene is fully loaded and interactive
    scene.handleUserInput();
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Scene/">Scene</a>, <a href="/api-docs/headless/ceramic/SceneSystem/">SceneSystem</a>, App#scene</div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


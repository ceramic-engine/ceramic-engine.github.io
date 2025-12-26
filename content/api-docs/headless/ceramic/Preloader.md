---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Preloader
target: Headless
permalink: api-docs/headless/ceramic/Preloader/
---

# Preloader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Preloader.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">Layer</a> → <a href="/api-docs/headless/ceramic/Scene/">Scene</a> → <strong>ceramic.Preloader</strong> (Class)</div>

A scene that displays loading progress for preloadable resources.

The Preloader scene provides a visual loading screen with:
- An animated Ceramic logo
- A progress bar showing loading progress
- Automatic transition to the loaded scene on completion

This is typically used as the initial scene when loading game assets
or other resources that implement the Preloadable interface.

Example usage:
```haxe
// Create a preloader for your main scene
var preloader = new Preloader(() -> {
    return new MainScene();
});

// The preloader will:
// 1. Display the Ceramic logo with animation
// 2. Initialize the preloadable (MainScene)
// 3. Show a progress bar
// 4. Automatically transition to MainScene when loaded

app.scenes.main = preloader;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Preloadable/">Preloadable</a>, <a href="/api-docs/headless/ceramic/PreloadStatus/">PreloadStatus</a></div>


## Instance Members

<div class="signature field-var has-description" id="preloadable"><code><span class="field-name">preloadable</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Preloadable/" class="type-link">Preloadable</a></code><a class="header-anchor" href="#preloadable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The preloadable object being loaded.
This is set automatically when the preloader initializes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="progress"><code><span class="field-name">progress</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#progress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current loading progress value (0 to total).

<hr class="field-separator" />

<div class="signature field-var has-description" id="total"><code><span class="field-name">total</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#total"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Total expected progress value.
Progress percentage can be calculated as: progress / total * 100

<hr class="field-separator" />

<div class="signature field-var has-description" id="preloadStatus"><code><span class="field-name">preloadStatus</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/PreloadStatus/" class="type-link">PreloadStatus</a></code><a class="header-anchor" href="#preloadStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current loading status.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/PreloadStatus/">PreloadStatus</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="ceramicLogo"><code><span class="field-name">ceramicLogo</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CeramicLogo/" class="type-link">CeramicLogo</a></code><a class="header-anchor" href="#ceramicLogo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic logo visual displayed during loading.
This is created automatically but can be accessed for customization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="progressForeground"><code><span class="field-name">progressForeground</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#progressForeground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The foreground (filled) portion of the progress bar.
Its width is updated to reflect loading progress.

<hr class="field-separator" />

<div class="signature field-var has-description" id="progressBackground"><code><span class="field-name">progressBackground</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#progressBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The background (empty) portion of the progress bar.

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update method called every frame.
Requests progress updates from the preloadable object.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/headless/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="updatePreload"><code><span class="field-name">updatePreload</span><span class="parenthesis">(</span><span class="arg-name">progress</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">total</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/PreloadStatus/" class="type-link">PreloadStatus</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePreload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update the preloader with current loading progress.
This method is called by the preloadable object to report its progress.



| Name | Type | Description |
|------|------|-------------|
| `progress` | [Int](/api-docs/headless/Int/) | Current progress value (0 to total)  |
| `total` | [Int](/api-docs/headless/Int/) | Total expected progress value  |
| `status` | [PreloadStatus](/api-docs/headless/ceramic/PreloadStatus/) | Current loading status |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">getPreloadable</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new preloader.



| Name | Type | Description |
|------|------|-------------|
| `getPreloadable` | Function | A function that returns the preloadable object to load. This function is called after the logo animation completes. The returned object must implement the Preloadable interface. |

## Private Members

<div class="signature field-var no-description" id="didCallUpdatePreload"><code><span class="field-name">didCallUpdatePreload</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didCallUpdatePreload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="preloaderIndex"><code><span class="field-name">preloaderIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#preloaderIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didSucceed"><code><span class="field-name">didSucceed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didSucceed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSuccess"><code><span class="field-name">emitSuccess</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSuccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the preloadable has successfully finished loading.
The preloader will automatically transition to the loaded scene after this event.

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPreloadable"><code><span class="field-name">getPreloadable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Preloadable/" class="type-link">Preloadable</a></code><a class="header-anchor" href="#getPreloadable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Preloadable](/api-docs/headless/ceramic/Preloadable/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the scene is created.
Initializes the loading screen graphics.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createGraphics"><code><span class="field-name">createGraphics</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createGraphics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create the loading screen graphics.
Override this method to customize the loading screen appearance.

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCeramicLogo"><code><span class="field-name">createCeramicLogo</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createCeramicLogo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create and animate the Ceramic logo.
The logo is centered horizontally and positioned at 42% of screen height.
After the animation completes, the preloadable is initialized and the progress bar is created.

<hr class="field-separator" />

<div class="signature field-method has-description" id="animateScale"><code><span class="field-name">animateScale</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">targetScale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">complete</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#animateScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Animate a visual's scale and alpha with an elastic ease effect.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) | | The visual to animate  |
| `targetScale` | [Float](/api-docs/headless/Float/) | | The final scale value  |
| `complete` | Function | *(optional)* | Optional callback when animation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createProgressBar"><code><span class="field-name">createProgressBar</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">yRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">widthRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">backgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a> <span class="operator">=</span> <span class="default-value">0x444444</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">foregroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a> <span class="operator">=</span> <span class="default-value">0xFFFFFF</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createProgressBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a progress bar that will be updated from current progress


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `yRatio` | [Float](/api-docs/headless/Float/) | `-1` | The vertical position of the progress bar, relative to screen height (from `0` (top) to `1` (bottom))  |
| `widthRatio` | [Float](/api-docs/headless/Float/) | `-1` | The progress bar width, relative to screen width (`1` meaning full width, `0.5` half width)  |
| `backgroundColor` | [Color](/api-docs/headless/ceramic/Color/) | `0x444444` | The progress bar background color  |
| `foregroundColor` | [Color](/api-docs/headless/ceramic/Color/) | `0xFFFFFF` | The progress bar foreground color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateProgressBar"><code><span class="field-name">updateProgressBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateProgressBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update the progress bar visual to reflect current loading progress.
The foreground width is scaled proportionally to the progress/total ratio.

<hr class="field-separator" />

<div class="signature field-method has-description" id="initPreloadable"><code><span class="field-name">initPreloadable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initPreloadable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize the preloadable object.
If the preloadable is a Scene, it's registered with the scene manager.

<hr class="field-separator" />

<div class="signature field-method has-description" id="willEmitSuccess"><code><span class="field-name">willEmitSuccess</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitSuccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called before the success event is emitted.
If the preloadable is a Scene, this triggers a scene transition to replace
the preloader with the loaded scene.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


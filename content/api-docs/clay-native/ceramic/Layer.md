---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Layer
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Layer/
---

# Layer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Layer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a> → <strong>ceramic.Layer</strong> (Class) → <a href="/api-docs/clay-native/ceramic/Filter/">Filter</a>, <a href="/api-docs/clay-native/ceramic/Fragment/">Fragment</a>, <a href="/api-docs/clay-native/ceramic/LowRes/">LowRes</a>, <a href="/api-docs/clay-native/ceramic/Scene/">Scene</a>, <a href="/api-docs/clay-native/ceramic/View/">View</a></div>

A specialized container for organizing and grouping visuals.

Layer extends Quad but is transparent by default, making it ideal for:
- Grouping related visuals together
- Creating scrollable areas
- Implementing UI panels and containers
- Managing z-ordering of visual groups
- Applying transforms to multiple visuals at once

Key features:
- Transparent by default (doesn't render itself)
- Resize event for responsive layouts
- Efficient batched resize notifications
- Can still be made visible with texture/color if needed

Layers are commonly used to organize your scene hierarchy and apply
transformations to groups of objects together.

```haxe
// Create a game layer that can be scrolled
var gameLayer = new Layer();
gameLayer.size(screen.width, screen.height);

// Add game objects to the layer
var player = new Quad();
gameLayer.add(player);

// Scroll the entire game world
gameLayer.x = camera.contentTranslateX;
gameLayer.y = camera.contentTranslateY;

// Create a UI layer that stays fixed
var uiLayer = new Layer();
uiLayer.size(screen.width, screen.height);
uiLayer.depth = 100; // Render on top
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a>, <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a></div>


## Instance Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="sizeDirty"><code><span class="field-name">sizeDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sizeDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitResize"><code><span class="field-name">emitResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the layer's size changes.
Useful for implementing responsive layouts and updating child positions.
The event is batched - multiple size changes in the same frame emit only once.


| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | New width of the layer  |
| `height` | [Float](/api-docs/clay-native/Float/) | New height of the layer |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitResizeIfNeeded"><code><span class="field-name">emitResizeIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitResizeIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="willEmitResize"><code><span class="field-name">willEmitResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called before emitting the resize event.
Override in subclasses to prepare for size changes.


| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | New width that will be emitted  |
| `height` | [Float](/api-docs/clay-native/Float/) | New height that will be emitted |

<hr class="field-separator" />

<div class="signature field-method has-description" id="didEmitResize"><code><span class="field-name">didEmitResize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitResize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called after emitting the resize event.
Override in subclasses to perform post-resize updates.


| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | New width that was emitted  |
| `height` | [Float](/api-docs/clay-native/Float/) | New height that was emitted |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


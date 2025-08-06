---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteSheet
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SpriteSheet/
---

# SpriteSheet

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSheet.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>ceramic.SpriteSheet</strong> (Class)</div>

Container for sprite animations and texture atlas data.
Manages frame-based animations with timing information and texture regions.

Can be created from:
- Aseprite JSON exports via SpriteAsset
- Manual configuration using grid-based animations
- Custom animation definitions

Example usage:
```haxe
// Load from asset
var sheet = assets.sheet("character");

// Or create manually with grid
var sheet = new SpriteSheet();
sheet.texture = myTexture;
sheet.grid(32, 32);
sheet.addGridAnimation("walk", 0, 3, 0.1);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="animations"><div class="plugin-name">sprite</div><code><span class="field-name">animations</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#animations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of animations available in this sprite sheet.
Each animation contains frames with timing information.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlas"><div class="plugin-name">sprite</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture atlas containing all sprite frames.
Automatically manages asset retention when changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridWidth"><div class="plugin-name">sprite</div><code><span class="field-name">gridWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid cell width for grid-based sprite sheets.
Set to -1 when not using grid layout.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gridHeight"><div class="plugin-name">sprite</div><code><span class="field-name">gridHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gridHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Grid cell height for grid-based sprite sheets.
Set to -1 when not using grid layout.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="texture"><div class="plugin-name">sprite</div><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture used to display sprites in this spritesheet.
Setting this creates an implicit atlas if one doesn't exist.
This is a convenience property for simple single-texture sprite sheets.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="source"><div class="plugin-name">sprite</div><code><span class="field-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#source"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The reference to the sprite sheet source file path.
Used for debugging and asset tracking.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">sprite</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteAsset/" class="type-link">SpriteAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The asset instance that loaded this sprite sheet.
Null if the sheet was created manually.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateAnimations"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateAnimations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateAtlas</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateGridWidth"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateGridWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateGridWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateGridHeight"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateGridHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateGridHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="grid"><div class="plugin-name">sprite</div><code><span class="field-name">grid</span><span class="parenthesis">(</span><span class="arg-name">gridWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gridHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#grid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configure the sprite sheet as a grid with uniform cell dimensions.
Required before using addGridAnimation().


| Name | Type | Description |
|------|------|-------------|
| `gridWidth` | [Int](/api-docs/clay-native/Int/) | Width of each cell in pixels  |
| `gridHeight` | [Int](/api-docs/clay-native/Int/) | Height of each cell in pixels |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSource"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">sprite</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="animation"><div class="plugin-name">sprite</div><code><span class="field-name">animation</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find an animation by name.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The animation name to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/)> | The animation if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addAnimation"><div class="plugin-name">sprite</div><code><span class="field-name">addAnimation</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a new animation to this sprite sheet.


| Name | Type | Description |
|------|------|-------------|
| `animation` | [SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/) | The animation to add |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addGridAnimation"><div class="plugin-name">sprite</div><code><span class="field-name">addGridAnimation</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">frameDuration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a></code><a class="header-anchor" href="#addGridAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add an animation using grid cell indices.
Requires grid dimensions to be set first via grid().
Cells are numbered left-to-right, top-to-bottom starting from 0.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | Name of the animation to add  |
| `start` | [Int](/api-docs/clay-native/Int/) | Start cell index (inclusive)  |
| `end` | [Int](/api-docs/clay-native/Int/) | End cell index (inclusive)  |
| `frameDuration` | [Float](/api-docs/clay-native/Float/) | Duration of each frame in seconds  |

| Returns | Description |
|---------|-------------|
| [SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/) | The created animation instance |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedAnimations"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedAnimations</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a></code><a class="header-anchor" href="#unobservedAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedGridWidth"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedGridWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedGridWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedGridHeight"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedGridHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedGridHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="implicitAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">implicitAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#implicitAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal: `true` if SpriteSheetAtlas instance was created
implicitly from assigning a texture object.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSource"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitAnimationsChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitAnimationsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAnimationsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when animations field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitAtlasChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitAtlasChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAtlasChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when atlas field changes.

| Name | Type |
|------|------|
| `current` | [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) |
| `previous` | [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGridWidthChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitGridWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGridWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when gridWidth field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitGridHeightChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitGridHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGridHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when gridHeight field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-native/Int/) |
| `previous` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSourceChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitSourceChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSourceChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when source field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="cellsFromStartEnd"><div class="plugin-name">sprite</div><code><span class="field-name">cellsFromStartEnd</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#cellsFromStartEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [Int](/api-docs/clay-native/Int/) |
| `end` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="replaceAtlas"><div class="plugin-name">sprite</div><code><span class="field-name">replaceAtlas</span><span class="parenthesis">(</span><span class="arg-name">newAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">prevAtlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceAtlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newAtlas` | [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) |
| `prevAtlas` | [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="replaceTexture"><div class="plugin-name">sprite</div><code><span class="field-name">replaceTexture</span><span class="parenthesis">(</span><span class="arg-name">newTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">prevTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#replaceTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `newTexture` | [Texture](/api-docs/clay-native/ceramic/Texture/) |
| `prevTexture` | [Texture](/api-docs/clay-native/ceramic/Texture/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |


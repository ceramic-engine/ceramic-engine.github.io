---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteSheetFrame
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SpriteSheetFrame/
---

# SpriteSheetFrame

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSheetFrame.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>ceramic.SpriteSheetFrame</strong> (Class)</div>

Represents a single frame within a sprite animation.
Contains the texture region to display and how long to display it.

Frames are the building blocks of animations, each pointing to
a specific area of the texture atlas with timing information.

## Instance Members

<div class="signature field-var has-description has-plugin" id="duration"><div class="plugin-name">sprite</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Duration to display this frame in seconds.
Used during animation playback to determine frame timing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="region"><div class="plugin-name">sprite</div><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture region (sub-rectangle) to display for this frame.
Points to a specific area within the texture atlas.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDuration"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateRegion"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateRegion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlas/" class="type-link">TextureAtlas</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new sprite sheet frame.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `atlas` | [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) | | The texture atlas containing the frame  |
| `name` | [String](/api-docs/clay-native/String/) | | Unique name for the texture region  |
| `page` | [Int](/api-docs/clay-native/Int/) | `0` | Atlas page index (default: 0)  |
| `region` | [TextureAtlasRegion](/api-docs/clay-native/ceramic/TextureAtlasRegion/) | *(optional)* | Optional pre-existing region to use |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedDuration"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedDuration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedRegion"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedRegion</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a></code><a class="header-anchor" href="#unobservedRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDurationChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitDurationChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDurationChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when duration field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitRegionChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitRegionChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRegionChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when region field changes.

| Name | Type |
|------|------|
| `current` | [TextureAtlasRegion](/api-docs/clay-native/ceramic/TextureAtlasRegion/) |
| `previous` | [TextureAtlasRegion](/api-docs/clay-native/ceramic/TextureAtlasRegion/) |

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


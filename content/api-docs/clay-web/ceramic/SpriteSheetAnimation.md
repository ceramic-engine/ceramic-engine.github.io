---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteSheetAnimation
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpriteSheetAnimation/
---

# SpriteSheetAnimation

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSheetAnimation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/tracker/Model/">tracker.Model</a> → <strong>ceramic.SpriteSheetAnimation</strong> (Class)</div>

Represents a named animation sequence within a sprite sheet.
Contains an ordered list of frames with timing information.

Animations are typically created by:
- Parsing from Aseprite JSON frame tags
- Using SpriteSheet.addGridAnimation() for grid-based sheets
- Manual construction for custom animations

The total duration is computed automatically from all frame durations.

## Instance Members

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">sprite</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The unique name identifier for this animation.
Used to reference the animation when playing sprites.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frames"><div class="plugin-name">sprite</div><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteSheetFrame/" class="type-link">SpriteSheetFrame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ordered array of frames that make up this animation.
Each frame contains a texture region and duration.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duration"><div class="plugin-name">sprite</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the total duration of this animation in seconds.
This is the sum of all individual frame durations.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateName"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFrames"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateFrames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDuration"><div class="plugin-name">sprite</div><code><span class="field-name">invalidateDuration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedName"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFrames"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedFrames</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteSheetFrame/" class="type-link">SpriteSheetFrame</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDuration"><div class="plugin-name">sprite</div><code><span class="field-name">unobservedDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitNameChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitNameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when name field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFramesChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitFramesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteSheetFrame/" class="type-link">SpriteSheetFrame</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/SpriteSheetFrame/" class="type-link">SpriteSheetFrame</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFramesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when frames field changes.

| Name | Type |
|------|------|
| `current` | [ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[SpriteSheetFrame](/api-docs/clay-web/ceramic/SpriteSheetFrame/)> |
| `previous` | [ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/)<[SpriteSheetFrame](/api-docs/clay-web/ceramic/SpriteSheetFrame/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDurationChange"><div class="plugin-name">sprite</div><code><span class="field-name">emitDurationChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDurationChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when duration field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

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


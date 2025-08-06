---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: SpriteSystem
target: Unity
permalink: api-docs/unity/ceramic/SpriteSystem/
---

# SpriteSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/System/">System</a> → <strong>ceramic.SpriteSystem</strong> (Class)</div>

System that manages automatic updates for all Sprite instances.
Handles animation frame progression and timing for sprites with autoUpdate enabled.

This system is automatically created as a singleton and runs during the
late update phase to ensure sprites are updated after all other logic.

Sprites are automatically registered/unregistered when created/destroyed.

## Static Members

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">sprite</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">SpriteSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared sprite system singleton.
Automatically created on first access.

## Private Members

<div class="signature field-var has-description has-plugin" id="sprites"><div class="plugin-name">sprite</div><code><span class="field-name">sprites</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#sprites"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal array of all active sprites.
Uses Dynamic type on C# target for compatibility.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lateUpdate"><div class="plugin-name">sprite</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update all sprites that have autoUpdate enabled and are not paused.
Works on a copy of the sprite list to avoid issues if sprites are
created or destroyed during iteration.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.Sprite |


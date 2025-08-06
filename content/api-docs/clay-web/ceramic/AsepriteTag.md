---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteTag
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteTag/
---

# AsepriteTag

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteTag.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteTag</strong> (Class)</div>

Represents an animation tag from an Aseprite file.

Tags define named animation sequences within the sprite's frames.
Each tag marks a range of frames that can be played as a loop or
one-shot animation with a specific playback direction.

Tags are commonly used to organize different character animations
like "idle", "walk", "jump", "attack" within a single Aseprite file.

<div class="see"><strong>See:</strong> AsepriteData for the parent data structure, SpriteSheet for animation playback using tags</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="fromChunk"><div class="plugin-name">ase</div><code><span class="field-name">fromChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/chunks/Tag/" class="type-link">ase.chunks.Tag</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AsepriteTag</a></code><a class="header-anchor" href="#fromChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an AsepriteTag from raw tag chunk data.

Converts the file format representation into a more convenient
structure for use in the engine.



| Name | Type | Description |
|------|------|-------------|
| `chunk` | [ase.chunks.Tag](/api-docs/clay-web/ase/chunks/Tag/) | The tag data from the Aseprite file  |

| Returns | Description |
|---------|-------------|
| [AsepriteTag](/api-docs/clay-web/ceramic/AsepriteTag/) | A new AsepriteTag instance |

## Instance Members

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">ase</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of this animation tag.
Used to identify and play specific animations (e.g., "walk", "idle").

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fromFrame"><div class="plugin-name">ase</div><code><span class="field-name">fromFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fromFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The first frame index of this animation (0-based, inclusive).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="toFrame"><div class="plugin-name">ase</div><code><span class="field-name">toFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#toFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The last frame index of this animation (0-based, inclusive).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="direction"><div class="plugin-name">ase</div><code><span class="field-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The playback direction for this animation:
- 0: Forward (play from fromFrame to toFrame)
- 1: Reverse (play from toFrame to fromFrame)
- 2: Ping-pong (play forward then reverse)

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ase</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fromFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">toFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | * The name of this animation tag. Used to identify and play specific animations (e.g., "walk", "idle"). |
| `fromFrame` | [Int](/api-docs/clay-web/Int/) | * The first frame index of this animation (0-based, inclusive). |
| `toFrame` | [Int](/api-docs/clay-web/Int/) | * The last frame index of this animation (0-based, inclusive). |
| `direction` | [Int](/api-docs/clay-web/Int/) | * The playback direction for this animation: - 0: Forward (play from fromFrame to toFrame) - 1: Reverse (play from toFrame to fromFrame) - 2: Ping-pong (play forward then reverse) |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


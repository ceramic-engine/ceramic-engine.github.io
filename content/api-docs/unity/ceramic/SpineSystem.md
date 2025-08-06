---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineSystem
target: Unity
permalink: api-docs/unity/ceramic/SpineSystem/
---

# SpineSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/System/">System</a> → <strong>ceramic.SpineSystem</strong> (Class)</div>

System responsible for updating all active Spine instances in the application.

SpineSystem is automatically created as a singleton and manages the update
lifecycle of all Spine animations. It runs during the late update phase
to ensure animations are updated after game logic but before rendering.

The system maintains a list of all Spine instances and updates them each
frame based on their autoUpdate and paused/frozen states. This centralized
update approach ensures consistent animation timing and efficient batch
processing.

Features:
- Automatic registration/unregistration of Spine instances
- Safe iteration that handles additions/removals during updates
- Respects pause/freeze states and autoUpdate flags
- Runs at lateUpdateOrder 4000 for proper timing

This system is used internally by the Spine class and typically doesn't
need to be accessed directly by user code.

## Static Members

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">spine</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">SpineSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shared singleton instance of the SpineSystem.

This instance is automatically created on first access and manages
all Spine instances in the application. The @lazy metadata ensures
it's only created when needed.

## Private Members

<div class="signature field-var has-description has-plugin" id="spines"><div class="plugin-name">spine</div><code><span class="field-name">spines</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Spine/" class="type-link">Spine</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#spines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Master list of all Spine instances registered with the system.
Spine instances are automatically added/removed when created/destroyed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lateUpdate"><div class="plugin-name">spine</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates all active Spine animations with the given time delta.

This method is called automatically each frame during the late update phase.
It iterates through all registered Spine instances and updates those that:
- Are not paused or frozen
- Have autoUpdate enabled

The update process uses a temporary array to ensure safe iteration even
if Spine instances are added or removed during the update cycle.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since the last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineSystem instance.

Sets the lateUpdateOrder to 4000, ensuring Spine animations are
updated after most game logic but before rendering begins.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.Spine |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ViewSystem
target: Unity
permalink: api-docs/unity/ceramic/ViewSystem/
---

# ViewSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ViewSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/System/">System</a> → <strong>ceramic.ViewSystem</strong> (Class)</div>

System responsible for managing and updating the UI view layout.

ViewSystem is automatically created and bound when the first View is instantiated.
It handles the layout computation phase during the engine's update cycle,
ensuring all views are properly sized and positioned before rendering.

Key responsibilities:
- Triggers layout computation for all dirty views
- Ensures layout updates happen at the right time in the frame
- Manages the global view layout update cycle

The system runs in the late update phase (order 7000) to ensure:
- All game logic has completed
- Views can be properly positioned before rendering
- Layout changes are batched efficiently

<div class="see"><strong>See:</strong> View The base view class that uses this system, System The base system class</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">ui</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">ViewSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared singleton instance of the ViewSystem.
Created lazily when first accessed (typically when the first View is created).
This ensures the system is only created when UI functionality is actually used.

## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new ViewSystem.
Sets the late update order to 7000 to ensure layout happens
after most game logic but before rendering.

## Private Members

<div class="signature field-method has-description has-plugin" id="bind"><div class="plugin-name">ui</div><code><span class="field-name">bind</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by View class to ensure the system is created and active.
This method exists to trigger the lazy initialization of the shared instance
without exposing system internals.

@private Only accessible by ceramic.View

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lateUpdate"><div class="plugin-name">ui</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called during the late update phase of each frame.
Triggers the layout computation for all views that need updating.
This ensures all view layouts are computed and applied before rendering.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/unity/Float/) | Time elapsed since last frame in seconds |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


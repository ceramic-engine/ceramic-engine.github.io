---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ImSystem
target: Clay (Web)
permalink: api-docs/clay-web/elements/ImSystem/
---

# ImSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ImSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/System/">ceramic.System</a> → <strong>elements.ImSystem</strong> (Class)</div>

The core system that manages the immediate mode UI rendering pipeline.

ImSystem extends Ceramic's System class to integrate with the engine's
update loop and provide:
- Render target management through filters
- Window focus tracking
- Frame lifecycle management
- Automatic layout updates

The system uses a Filter to render all Im UI to a separate texture,
allowing for proper layering and post-processing effects. It automatically
activates when windows are present and deactivates when no UI is shown.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/Im/">Im</a>, <a href="/api-docs/clay-web/elements/Window/">Window</a>, System</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="shared"><div class="plugin-name">elements</div><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">ImSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The shared singleton instance of ImSystem.
Lazily initialized on first access.

## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ImSystem instance.

Sets up the system with:
- Early update order of 100 (runs before most systems)
- Late update order of 6000 (runs after most systems)

This ensures Im.beginFrame() runs early and Im.endFrame() runs late
in the frame lifecycle.

## Private Members

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter that renders all Im UI to a separate texture.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="view"><div class="plugin-name">elements</div><code><span class="field-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Root view container for all Im windows and UI elements.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="makeFilterActive"><div class="plugin-name">elements</div><code><span class="field-name">makeFilterActive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#makeFilterActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

State counter for filter activation/deactivation.
Ranges from -2 (fully inactive) to 2 (fully active).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createView"><div class="plugin-name">elements</div><code><span class="field-name">createView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates the root view and filter for Im UI rendering.

This method:
- Creates a filter bound to native screen size for crisp rendering
- Sets up a transparent root view at depth 1000 (above most content)
- Configures automatic layout updates
- Tracks focus changes for window management

@allow elements.Im

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="requestRender"><div class="plugin-name">elements</div><code><span class="field-name">requestRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#requestRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests a render update for the Im UI.

Marks the filter's render texture as dirty, ensuring
the UI is re-rendered in the next frame.

@allow elements.Im

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleFocusedVisualChange"><div class="plugin-name">elements</div><code><span class="field-name">handleFocusedVisualChange</span><span class="parenthesis">(</span><span class="arg-name">focusedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">,</span> <span class="arg-name">prevFocusedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleFocusedVisualChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles focus changes to track which Im window has focus.

This method:
- Determines if the focused visual is within an Im window
- Handles special cases like color picker popovers
- Updates the context's focused window reference



| Name | Type | Description |
|------|------|-------------|
| `focusedVisual` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) | The visual that gained focus  |
| `prevFocusedVisual` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) | The visual that lost focus |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="earlyUpdate"><div class="plugin-name">elements</div><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Early update called at the beginning of each frame.

Updates view size to match filter dimensions and
calls Im.beginFrame() to start the Im rendering cycle.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lateUpdate"><div class="plugin-name">elements</div><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Late update called at the end of each frame.

Finalizes the Im frame and manages filter activation:
- Gradually activates filter when windows are present
- Gradually deactivates filter when no windows are shown
- Ensures smooth transitions to avoid visual glitches

The activation counter provides a 2-frame delay for stability.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame in seconds |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


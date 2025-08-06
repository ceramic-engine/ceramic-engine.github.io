---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: VisualContainerView
target: Clay (Web)
permalink: api-docs/clay-web/elements/VisualContainerView/
---

# VisualContainerView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/VisualContainerView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <strong>elements.VisualContainerView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A view container that displays and manages a single visual element with scaling and filtering options.

This class provides a wrapper view for displaying visual elements with various scaling modes,
content alignment options, and optional filter effects. It handles the lifecycle of the
contained visual and can automatically destroy it when removed.

## Features

- Multiple scaling modes: FIT, FILL, CUSTOM
- Content alignment control
- Optional filter effects
- Automatic visual lifecycle management
- Configurable destruction behavior

## Scaling Modes

- `FIT`: Scales the visual to fit within the container while maintaining aspect ratio
- `FILL`: Stretches the visual to completely fill the container
- `CUSTOM`: Uses a manually specified scale value

## Usage Examples

```haxe
// Create a container with a visual
var container = new VisualContainerView();
container.visual = mySprite;
container.scaling = VisualContainerViewScaling.FIT;
container.contentAlign = CENTER;

// Add a filter effect
var filter = new Filter();
container.filter = filter;

// Custom scaling
container.scaling = VisualContainerViewScaling.CUSTOM;
container.visualScale = 2.0; // 200% scale
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/VisualContainerViewScaling/">VisualContainerViewScaling</a>, Filter, Visual, LayoutAlign</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="destroyVisualOnRemove"><div class="plugin-name">elements</div><code><span class="field-name">destroyVisualOnRemove</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyVisualOnRemove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically destroy the visual when it's removed from this container.
When true, the visual will be destroyed when replaced or when the container is cleared.
When false, the visual will only be deactivated but not destroyed.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="destroyFilterOnRemove"><div class="plugin-name">elements</div><code><span class="field-name">destroyFilterOnRemove</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyFilterOnRemove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically destroy the filter when it's removed from this container.
When true, the filter will be destroyed when replaced or set to null.
When false, the filter will only be removed but not destroyed.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Filter/" class="type-link">ceramic.Filter</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional filter effect to apply to the contained visual.

When set, the visual is rendered through the filter, which can apply
various visual effects. The filter is automatically managed and can
be destroyed when replaced if destroyFilterOnRemove is true.

<div class="see"><strong>See:</strong> Filter</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="contentAlign"><div class="plugin-name">elements</div><code><span class="field-name">contentAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#contentAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls how the visual content is aligned within the container.

This property determines the positioning of the contained visual
when it doesn't fill the entire container space.

@default CENTER

<div class="see"><strong>See:</strong> LayoutAlign</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visualScale"><div class="plugin-name">elements</div><code><span class="field-name">visualScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#visualScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scale factor to apply to the visual when using CUSTOM scaling mode.

This value is only used when the scaling property is set to CUSTOM.
In other scaling modes, the scale is automatically calculated.

@default 1.0

<div class="see"><strong>See:</strong> scaling</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scaling"><div class="plugin-name">elements</div><code><span class="field-name">scaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#scaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines how the visual is scaled within the container.

- FIT: Scales the visual to fit within the container while maintaining aspect ratio
- FILL: Stretches the visual to completely fill the container (may distort aspect ratio)
- CUSTOM: Uses the manually specified visualScale value

@default FIT

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/VisualContainerViewScaling/">VisualContainerViewScaling</a>, visualScale</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visual"><div class="plugin-name">elements</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual element to display within this container.

When set, the visual is added to the container (or filter content if a filter is active)
and its lifecycle is managed according to the destroyVisualOnRemove setting.
The visual is automatically activated when added and positioned according to the
current scaling and alignment settings.

<div class="see"><strong>See:</strong> destroyVisualOnRemove, filter</div>


<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateContentAlign"><div class="plugin-name">elements</div><code><span class="field-name">invalidateContentAlign</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateContentAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateVisualScale"><div class="plugin-name">elements</div><code><span class="field-name">invalidateVisualScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateVisualScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateScaling"><div class="plugin-name">elements</div><code><span class="field-name">invalidateScaling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateVisual"><div class="plugin-name">elements</div><code><span class="field-name">invalidateVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">elements</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the container by removing the visual and calling the parent clear method.

This will destroy the visual if destroyVisualOnRemove is true,
or simply deactivate it if false.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">elements</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ViewLayoutMask/" class="type-link">ceramic.ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the size of the container and calculates the visual scale for FIT mode.

This method is called during layout to determine the container's size and
calculate the appropriate scale factor for the contained visual when using FIT scaling.

@private

| Name | Type | Description |
|------|------|-------------|
| `parentWidth` | [Float](/api-docs/clay-web/Float/) | Available width from the parent  |
| `parentHeight` | [Float](/api-docs/clay-web/Float/) | Available height from the parent  |
| `layoutMask` | [ceramic.ViewLayoutMask](/api-docs/clay-web/ceramic/ViewLayoutMask/) | Layout constraints mask  |
| `persist` | [Bool](/api-docs/clay-web/Bool/) | Whether to persist the computed values  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new visual container view.

Initializes the container with default settings and sets up automatic
visual scale updates when properties change.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedContentAlign"><div class="plugin-name">elements</div><code><span class="field-name">unobservedContentAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedContentAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedVisualScale"><div class="plugin-name">elements</div><code><span class="field-name">unobservedVisualScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedVisualScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedScaling"><div class="plugin-name">elements</div><code><span class="field-name">unobservedScaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedVisual"><div class="plugin-name">elements</div><code><span class="field-name">unobservedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#unobservedVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedVisualScale"><div class="plugin-name">elements</div><code><span class="field-name">computedVisualScale</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedVisualScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed scale value for FIT scaling mode.
This is calculated automatically based on the container and visual dimensions.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">VisualContainerView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [VisualContainerView](/api-docs/clay-web/elements/VisualContainerView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitContentAlignChange"><div class="plugin-name">elements</div><code><span class="field-name">emitContentAlignChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContentAlignChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when contentAlign field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitVisualScaleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitVisualScaleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitVisualScaleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when visualScale field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitScalingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitScalingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScalingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scaling field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitVisualChange"><div class="plugin-name">elements</div><code><span class="field-name">emitVisualChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitVisualChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when visual field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) |
| `previous` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateVisualScale"><div class="plugin-name">elements</div><code><span class="field-name">updateVisualScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateVisualScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual's scale based on the current scaling mode.

Calculates and applies the appropriate scale factor based on the scaling mode:
- CUSTOM: Uses the visualScale property
- FIT: Uses the computed scale to fit within the container
- FILL: Scale is handled in layout() for stretching

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs layout of the container's elements.

Positions and sizes the filter (if present) and the visual element.
For FILL scaling mode, applies separate X and Y scaling to stretch
the visual to completely fill the available space.

@private

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


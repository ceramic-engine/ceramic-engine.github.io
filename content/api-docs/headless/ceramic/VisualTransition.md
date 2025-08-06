---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: VisualTransition
target: Headless
permalink: api-docs/headless/ceramic/VisualTransition/
---

# VisualTransition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/VisualTransition.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.VisualTransition</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Component/">Component</a></div>

A component that enables smooth property transitions for Visual objects.

VisualTransition provides a declarative API for animating multiple visual
properties simultaneously with automatic interpolation and easing. It handles
the complexity of managing multiple concurrent tweens while providing a clean,
chainable interface.

Key features:
- Animate multiple properties in a single transition
- Automatic handling of transform interpolation
- Smart rotation with shortest-path calculation
- Property change detection to avoid unnecessary tweens
- Support for custom easing per transition
- "Eager" mode for immediate first-frame updates

Example usage:
```haxe
// Using the static extension method
myVisual.transition(EASE_IN_OUT, 0.5, props -> {
    props.x = 200;
    props.y = 100;
    props.scale(2.0);
    props.alpha = 0.5;
    props.rotation = 180;
});

// Or as a component
var transition = new VisualTransition(ELASTIC_EASE_OUT, 0.3);
myVisual.component('transition', transition);

transition.run(null, 0.5, props -> {
    props.pos(100, 200);
    props.size(300, 200);
});
```

Supported properties:
- Position: x, y, pos()
- Size: width, height, size()
- Scale: scaleX, scaleY, scale()
- Rotation: rotation (with shortest path)
- Transform: transform, translateX/Y, skewX/Y
- Appearance: alpha, color
- Anchor: anchorX, anchorY, anchor()
- Depth: depth
- View properties (when UI plugin is enabled)

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Visual/">Visual</a>, <a href="/api-docs/headless/ceramic/Tween/">Tween</a>, <a href="/api-docs/headless/ceramic/Transform/">Transform</a></div>


## Static Members

<div class="signature field-method has-description" id="transition"><code><span class="field-name">transition</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#transition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static extension method to run a transition on any Visual.

Creates a transition component if needed and runs the transition.
This is the most convenient way to use transitions:

```haxe
myVisual.transition(EASE_OUT, 0.5, props -> {
    props.x = 100;
    props.alpha = 0;
});
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) | | The visual to transition  |
| `easing` | Anonymous | *(optional)* | Optional easing function  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[Tween](/api-docs/headless/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerTransition"><code><span class="field-name">eagerTransition</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#eagerTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static extension method to run an eager transition on any Visual.

Same as transition() but updates on the first frame.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) | | The visual to transition  |
| `easing` | Anonymous | *(optional)* | Optional easing function  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[Tween](/api-docs/headless/ceramic/Tween/)> | The tween instance, or null if no properties changed |

## Instance Members

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Visual entity this transition component is attached to.
Set automatically when used as a component.

<hr class="field-separator" />

<div class="signature field-var has-description" id="easing"><code><span class="field-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default easing function for transitions.
Can be overridden per transition in run() or eagerRun().

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default duration for transitions in seconds.
Can be overridden per transition in run() or eagerRun().

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run a transition with the specified properties.

The callback receives a properties object where you can set
the target values for the transition. Only properties that
change from their current values will be animated.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Optional easing function (uses default if null)  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds (uses default if -1)  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[Tween](/api-docs/headless/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerRun"><code><span class="field-name">eagerRun</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#eagerRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run an "eager" transition that updates on the first frame.

Same as run() but ensures the visual updates immediately
instead of waiting for the next frame. Useful for preventing
visual "pops" when starting transitions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Optional easing function (uses default if null)  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds (uses default if -1)  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[Tween](/api-docs/headless/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.3</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new visual transition component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Default easing function for transitions  |
| `duration` | [Float](/api-docs/headless/Float/) | `0.3` | Default duration in seconds (default: 0.3) |

## Private Members

<div class="signature field-var no-description" id="anyPropertyChanged"><code><span class="field-name">anyPropertyChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anyPropertyChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="xChanged"><code><span class="field-name">xChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#xChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="xTween"><code><span class="field-name">xTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#xTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="xTarget"><code><span class="field-name">xTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="xStart"><code><span class="field-name">xStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="xEnd"><code><span class="field-name">xEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="yChanged"><code><span class="field-name">yChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#yChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="yTween"><code><span class="field-name">yTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#yTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="yTarget"><code><span class="field-name">yTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="yStart"><code><span class="field-name">yStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="yEnd"><code><span class="field-name">yEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depthChanged"><code><span class="field-name">depthChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depthTween"><code><span class="field-name">depthTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#depthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depthTarget"><code><span class="field-name">depthTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depthStart"><code><span class="field-name">depthStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="depthEnd"><code><span class="field-name">depthEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleXChanged"><code><span class="field-name">scaleXChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleXTween"><code><span class="field-name">scaleXTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#scaleXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleXTarget"><code><span class="field-name">scaleXTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleXStart"><code><span class="field-name">scaleXStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleXEnd"><code><span class="field-name">scaleXEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleYChanged"><code><span class="field-name">scaleYChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleYTween"><code><span class="field-name">scaleYTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#scaleYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleYTarget"><code><span class="field-name">scaleYTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleYStart"><code><span class="field-name">scaleYStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scaleYEnd"><code><span class="field-name">scaleYEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewXChanged"><code><span class="field-name">skewXChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skewXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewXTween"><code><span class="field-name">skewXTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#skewXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewXTarget"><code><span class="field-name">skewXTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewXStart"><code><span class="field-name">skewXStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewXEnd"><code><span class="field-name">skewXEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewYChanged"><code><span class="field-name">skewYChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skewYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewYTween"><code><span class="field-name">skewYTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#skewYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewYTarget"><code><span class="field-name">skewYTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewYStart"><code><span class="field-name">skewYStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="skewYEnd"><code><span class="field-name">skewYEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorXChanged"><code><span class="field-name">anchorXChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anchorXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorXTween"><code><span class="field-name">anchorXTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#anchorXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorXTarget"><code><span class="field-name">anchorXTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorXStart"><code><span class="field-name">anchorXStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorXEnd"><code><span class="field-name">anchorXEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorYChanged"><code><span class="field-name">anchorYChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anchorYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorYTween"><code><span class="field-name">anchorYTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#anchorYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorYTarget"><code><span class="field-name">anchorYTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorYStart"><code><span class="field-name">anchorYStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="anchorYEnd"><code><span class="field-name">anchorYEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rotationChanged"><code><span class="field-name">rotationChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotationChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rotationTween"><code><span class="field-name">rotationTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#rotationTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rotationTarget"><code><span class="field-name">rotationTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rotationStart"><code><span class="field-name">rotationStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rotationEnd"><code><span class="field-name">rotationEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="widthChanged"><code><span class="field-name">widthChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#widthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="widthTween"><code><span class="field-name">widthTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#widthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="widthTarget"><code><span class="field-name">widthTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="widthStart"><code><span class="field-name">widthStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="widthEnd"><code><span class="field-name">widthEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="heightChanged"><code><span class="field-name">heightChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#heightChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="heightTween"><code><span class="field-name">heightTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#heightTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="heightTarget"><code><span class="field-name">heightTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="heightStart"><code><span class="field-name">heightStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="heightEnd"><code><span class="field-name">heightEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorChanged"><code><span class="field-name">colorChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorTween"><code><span class="field-name">colorTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#colorTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorTarget"><code><span class="field-name">colorTarget</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorStart"><code><span class="field-name">colorStart</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorEnd"><code><span class="field-name">colorEnd</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alphaChanged"><code><span class="field-name">alphaChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#alphaChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alphaTween"><code><span class="field-name">alphaTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#alphaTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alphaTarget"><code><span class="field-name">alphaTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alphaStart"><code><span class="field-name">alphaStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alphaEnd"><code><span class="field-name">alphaEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateXChanged"><code><span class="field-name">translateXChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translateXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateXTween"><code><span class="field-name">translateXTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#translateXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateXTarget"><code><span class="field-name">translateXTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateXStart"><code><span class="field-name">translateXStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateXEnd"><code><span class="field-name">translateXEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateYChanged"><code><span class="field-name">translateYChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translateYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateYTween"><code><span class="field-name">translateYTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#translateYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateYTarget"><code><span class="field-name">translateYTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateYStart"><code><span class="field-name">translateYStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="translateYEnd"><code><span class="field-name">translateYEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformChanged"><code><span class="field-name">transformChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformAssigned"><code><span class="field-name">transformAssigned</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformAssigned"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformAssignedInstance"><code><span class="field-name">transformAssignedInstance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformAssignedInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformTween"><code><span class="field-name">transformTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#transformTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformTarget"><code><span class="field-name">transformTarget</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformStart"><code><span class="field-name">transformStart</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformEnd"><code><span class="field-name">transformEnd</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformEndToNull"><code><span class="field-name">transformEndToNull</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformEndToNull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="transformInTransition"><code><span class="field-name">transformInTransition</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformInTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetXChanged"><code><span class="field-name">offsetXChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#offsetXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetXTween"><code><span class="field-name">offsetXTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#offsetXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetXTarget"><code><span class="field-name">offsetXTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetXStart"><code><span class="field-name">offsetXStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetXEnd"><code><span class="field-name">offsetXEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetYChanged"><code><span class="field-name">offsetYChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#offsetYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetYTween"><code><span class="field-name">offsetYTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#offsetYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetYTarget"><code><span class="field-name">offsetYTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetYStart"><code><span class="field-name">offsetYStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="offsetYEnd"><code><span class="field-name">offsetYEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewWidthChanged"><code><span class="field-name">viewWidthChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#viewWidthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewWidthTween"><code><span class="field-name">viewWidthTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#viewWidthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewWidthTarget"><code><span class="field-name">viewWidthTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewWidthStart"><code><span class="field-name">viewWidthStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewWidthEnd"><code><span class="field-name">viewWidthEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewHeightChanged"><code><span class="field-name">viewHeightChanged</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#viewHeightChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewHeightTween"><code><span class="field-name">viewHeightTween</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#viewHeightTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewHeightTarget"><code><span class="field-name">viewHeightTarget</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewHeightStart"><code><span class="field-name">viewHeightStart</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="viewHeightEnd"><code><span class="field-name">viewHeightEnd</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isView"><code><span class="field-name">isView</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/headless/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.VisualTransitionProperties |


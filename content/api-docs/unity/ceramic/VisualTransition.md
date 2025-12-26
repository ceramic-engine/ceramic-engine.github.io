---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: VisualTransition
target: Unity
permalink: api-docs/unity/ceramic/VisualTransition/
---

# VisualTransition

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/VisualTransition.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.VisualTransition</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/Component/">Component</a></div>

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

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Visual/">Visual</a>, <a href="/api-docs/unity/ceramic/Tween/">Tween</a>, <a href="/api-docs/unity/ceramic/Transform/">Transform</a></div>


## Static Members

<div class="signature field-method has-description" id="transition"><code><span class="field-name">transition</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#transition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| `visual` | [Visual](/api-docs/unity/ceramic/Visual/) | | The visual to transition  |
| `easing` | Anonymous | *(optional)* | Optional easing function  |
| `duration` | [Float](/api-docs/unity/Float/) | | Duration in seconds  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Tween](/api-docs/unity/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerTransition"><code><span class="field-name">eagerTransition</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#eagerTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static extension method to run an eager transition on any Visual.

Same as transition() but updates on the first frame.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `visual` | [Visual](/api-docs/unity/ceramic/Visual/) | | The visual to transition  |
| `easing` | Anonymous | *(optional)* | Optional easing function  |
| `duration` | [Float](/api-docs/unity/Float/) | | Duration in seconds  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Tween](/api-docs/unity/ceramic/Tween/)> | The tween instance, or null if no properties changed |

## Instance Members

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Visual entity this transition component is attached to.
Set automatically when used as a component.

<hr class="field-separator" />

<div class="signature field-var has-description" id="easing"><code><span class="field-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default easing function for transitions.
Can be overridden per transition in run() or eagerRun().

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default duration for transitions in seconds.
Can be overridden per transition in run() or eagerRun().

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run a transition with the specified properties.

The callback receives a properties object where you can set
the target values for the transition. Only properties that
change from their current values will be animated.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Optional easing function (uses default if null)  |
| `duration` | [Float](/api-docs/unity/Float/) | | Duration in seconds (uses default if -1)  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Tween](/api-docs/unity/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerRun"><code><span class="field-name">eagerRun</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#eagerRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run an "eager" transition that updates on the first frame.

Same as run() but ensures the visual updates immediately
instead of waiting for the next frame. Useful for preventing
visual "pops" when starting transitions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Optional easing function (uses default if null)  |
| `duration` | [Float](/api-docs/unity/Float/) | | Duration in seconds (uses default if -1)  |
| `cb` | Function | | Callback to set target property values  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Tween](/api-docs/unity/ceramic/Tween/)> | The tween instance, or null if no properties changed |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.3</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new visual transition component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `easing` | Anonymous | *(optional)* | Default easing function for transitions  |
| `duration` | [Float](/api-docs/unity/Float/) | `0.3` | Default duration in seconds (default: 0.3) |

## Private Members

<div class="signature field-var has-description" id="anyPropertyChanged"><code><span class="field-name">anyPropertyChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anyPropertyChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if any property was modified in the current transition.
Used to determine if a tween needs to be created.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xChanged"><code><span class="field-name">xChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#xChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X position was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xTween"><code><span class="field-name">xTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#xTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xTarget"><code><span class="field-name">xTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X position value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xStart"><code><span class="field-name">xStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X position value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="xEnd"><code><span class="field-name">xEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#xEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X position value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yChanged"><code><span class="field-name">yChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#yChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y position was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yTween"><code><span class="field-name">yTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#yTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yTarget"><code><span class="field-name">yTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y position value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yStart"><code><span class="field-name">yStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y position value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="yEnd"><code><span class="field-name">yEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y position value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthChanged"><code><span class="field-name">depthChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the depth was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthTween"><code><span class="field-name">depthTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#depthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the depth value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthTarget"><code><span class="field-name">depthTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target depth value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthStart"><code><span class="field-name">depthStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial depth value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthEnd"><code><span class="field-name">depthEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final depth value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleXChanged"><code><span class="field-name">scaleXChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X scale was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleXTween"><code><span class="field-name">scaleXTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#scaleXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X scale.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleXTarget"><code><span class="field-name">scaleXTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X scale value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleXStart"><code><span class="field-name">scaleXStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X scale value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleXEnd"><code><span class="field-name">scaleXEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X scale value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleYChanged"><code><span class="field-name">scaleYChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scaleYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y scale was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleYTween"><code><span class="field-name">scaleYTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#scaleYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y scale.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleYTarget"><code><span class="field-name">scaleYTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y scale value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleYStart"><code><span class="field-name">scaleYStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y scale value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleYEnd"><code><span class="field-name">scaleYEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y scale value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewXChanged"><code><span class="field-name">skewXChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skewXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X skew was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewXTween"><code><span class="field-name">skewXTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#skewXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X skew.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewXTarget"><code><span class="field-name">skewXTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X skew value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewXStart"><code><span class="field-name">skewXStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X skew value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewXEnd"><code><span class="field-name">skewXEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X skew value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewYChanged"><code><span class="field-name">skewYChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skewYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y skew was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewYTween"><code><span class="field-name">skewYTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#skewYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y skew.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewYTarget"><code><span class="field-name">skewYTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y skew value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewYStart"><code><span class="field-name">skewYStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y skew value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewYEnd"><code><span class="field-name">skewYEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y skew value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorXChanged"><code><span class="field-name">anchorXChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anchorXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X anchor was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorXTween"><code><span class="field-name">anchorXTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#anchorXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X anchor point.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorXTarget"><code><span class="field-name">anchorXTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X anchor value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorXStart"><code><span class="field-name">anchorXStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X anchor value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorXEnd"><code><span class="field-name">anchorXEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X anchor value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorYChanged"><code><span class="field-name">anchorYChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anchorYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y anchor was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorYTween"><code><span class="field-name">anchorYTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#anchorYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y anchor point.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorYTarget"><code><span class="field-name">anchorYTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y anchor value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorYStart"><code><span class="field-name">anchorYStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y anchor value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorYEnd"><code><span class="field-name">anchorYEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y anchor value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationChanged"><code><span class="field-name">rotationChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotationChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the rotation was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationTween"><code><span class="field-name">rotationTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#rotationTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the rotation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationTarget"><code><span class="field-name">rotationTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target rotation value in degrees to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationStart"><code><span class="field-name">rotationStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial rotation value in degrees when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotationEnd"><code><span class="field-name">rotationEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotationEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final rotation value in degrees for the current tween segment (adjusted for shortest path).

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthChanged"><code><span class="field-name">widthChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#widthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the width was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthTween"><code><span class="field-name">widthTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#widthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the width.

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthTarget"><code><span class="field-name">widthTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target width value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthStart"><code><span class="field-name">widthStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial width value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthEnd"><code><span class="field-name">widthEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#widthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final width value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightChanged"><code><span class="field-name">heightChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#heightChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the height was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightTween"><code><span class="field-name">heightTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#heightTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the height.

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightTarget"><code><span class="field-name">heightTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target height value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightStart"><code><span class="field-name">heightStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial height value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightEnd"><code><span class="field-name">heightEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heightEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final height value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorChanged"><code><span class="field-name">colorChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the color was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorTween"><code><span class="field-name">colorTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#colorTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the color using RGB interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorTarget"><code><span class="field-name">colorTarget</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target color value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorStart"><code><span class="field-name">colorStart</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial color value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorEnd"><code><span class="field-name">colorEnd</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#colorEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final color value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaChanged"><code><span class="field-name">alphaChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#alphaChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the alpha was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaTween"><code><span class="field-name">alphaTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#alphaTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the alpha (opacity).

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaTarget"><code><span class="field-name">alphaTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target alpha value (0.0-1.0) to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaStart"><code><span class="field-name">alphaStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial alpha value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaEnd"><code><span class="field-name">alphaEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alphaEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final alpha value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateXChanged"><code><span class="field-name">translateXChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translateXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X translation was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateXTween"><code><span class="field-name">translateXTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#translateXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X translation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateXTarget"><code><span class="field-name">translateXTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X translation value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateXStart"><code><span class="field-name">translateXStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X translation value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateXEnd"><code><span class="field-name">translateXEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X translation value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateYChanged"><code><span class="field-name">translateYChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translateYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y translation was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateYTween"><code><span class="field-name">translateYTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#translateYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y translation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateYTarget"><code><span class="field-name">translateYTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y translation value to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateYStart"><code><span class="field-name">translateYStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y translation value when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateYEnd"><code><span class="field-name">translateYEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y translation value for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformChanged"><code><span class="field-name">transformChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the transform was modified in the current transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformAssigned"><code><span class="field-name">transformAssigned</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformAssigned"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if a transform instance was directly assigned (vs. modified).

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformAssignedInstance"><code><span class="field-name">transformAssignedInstance</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformAssignedInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transform instance that was directly assigned, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformTween"><code><span class="field-name">transformTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#transformTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the transform using matrix interpolation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformTarget"><code><span class="field-name">transformTarget</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target transform matrix to animate towards.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformStart"><code><span class="field-name">transformStart</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial transform matrix when the transition began.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformEnd"><code><span class="field-name">transformEnd</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final transform matrix for the current tween segment.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformEndToNull"><code><span class="field-name">transformEndToNull</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#transformEndToNull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the transform should be set to null at the end of the transition.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transformInTransition"><code><span class="field-name">transformInTransition</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transformInTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Temporary transform instance used during the transition to avoid allocations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetXChanged"><code><span class="field-name">offsetXChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#offsetXChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the X offset was modified in the current transition (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetXTween"><code><span class="field-name">offsetXTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#offsetXTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the X offset (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetXTarget"><code><span class="field-name">offsetXTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X offset value to animate towards (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetXStart"><code><span class="field-name">offsetXStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X offset value when the transition began (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetXEnd"><code><span class="field-name">offsetXEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetXEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final X offset value for the current tween segment (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetYChanged"><code><span class="field-name">offsetYChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#offsetYChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the Y offset was modified in the current transition (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetYTween"><code><span class="field-name">offsetYTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#offsetYTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the Y offset (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetYTarget"><code><span class="field-name">offsetYTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y offset value to animate towards (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetYStart"><code><span class="field-name">offsetYStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y offset value when the transition began (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="offsetYEnd"><code><span class="field-name">offsetYEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetYEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final Y offset value for the current tween segment (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewWidthChanged"><code><span class="field-name">viewWidthChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#viewWidthChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the view width was modified in the current transition (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewWidthTween"><code><span class="field-name">viewWidthTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#viewWidthTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the view width (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewWidthTarget"><code><span class="field-name">viewWidthTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target view width value to animate towards (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewWidthStart"><code><span class="field-name">viewWidthStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial view width value when the transition began (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewWidthEnd"><code><span class="field-name">viewWidthEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewWidthEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final view width value for the current tween segment (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewHeightChanged"><code><span class="field-name">viewHeightChanged</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#viewHeightChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the view height was modified in the current transition (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewHeightTween"><code><span class="field-name">viewHeightTween</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#viewHeightTween"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Active tween responsible for animating the view height (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewHeightTarget"><code><span class="field-name">viewHeightTarget</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target view height value to animate towards (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewHeightStart"><code><span class="field-name">viewHeightStart</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial view height value when the transition began (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="viewHeightEnd"><code><span class="field-name">viewHeightEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#viewHeightEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final view height value for the current tween segment (UI plugin only).

<hr class="field-separator" />

<div class="signature field-var has-description" id="isView"><code><span class="field-name">isView</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating if the entity is a View (UI plugin only). Set during component binding.

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.VisualTransitionProperties |


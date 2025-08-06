---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Tween
target: Headless
permalink: api-docs/headless/ceramic/Tween/
---

# Tween

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Tween.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.Tween</strong> (Class)</div>

A lightweight tweening engine for animating numeric values over time.

Tweens provide:
- Smooth transitions between values with easing functions
- Duration-based animations
- Automatic cleanup when complete or owner is destroyed
- Frame-perfect timing with delta time compensation

Features:
- 30+ built-in easing functions (quad, cubic, elastic, bounce, etc.)
- Custom easing function support
- Bezier curve easing
- "Eager" mode for immediate first frame updates
- Owner-based lifecycle management

Example usage:
```haxe
// Simple tween from 0 to 100 over 1 second
Tween.start(this, LINEAR, 1.0, 0, 100, (value, time) -> {
    myObject.x = value;
});

// With easing and completion callback
var tween = Tween.start(this, ELASTIC_EASE_OUT, 2.0, oldScale, newScale,
    (value, time) -> myObject.scale = value
);
tween.onceComplete(this, () -> trace("Animation complete!"));
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Easing/">Easing</a>, <a href="/api-docs/headless/ceramic/BezierEasing/">BezierEasing</a></div>


## Static Members

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">handleValueTime</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Tween</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start a new tween animation.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `owner` | [Null](/api-docs/headless/Null/)<[Entity](/api-docs/headless/ceramic/Entity/)> | | Optional owner entity. If provided and destroyed, the tween is also destroyed.  |
| `easing` | Anonymous | *(optional)* | The easing function to use. Defaults to QUAD_EASE_IN_OUT.  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds. If <= 0, completes immediately.  |
| `fromValue` | [Float](/api-docs/headless/Float/) | | Starting value  |
| `toValue` | [Float](/api-docs/headless/Float/) | | Ending value  |
| `handleValueTime` | Function | | Callback function called each frame with (value, time)  |

| Returns | Description |
|---------|-------------|
| [Tween](/api-docs/headless/ceramic/Tween/) | The created Tween instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eagerStart"><code><span class="field-name">eagerStart</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">handleValueTime</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Tween</a></code><a class="header-anchor" href="#eagerStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start a new "eager" tween animation.

Eager tweens update immediately on the first frame instead of waiting
for the next frame. This ensures the target property is set to an
interpolated value right away, preventing visual jumps.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `owner` | [Null](/api-docs/headless/Null/)<[Entity](/api-docs/headless/ceramic/Entity/)> | | Optional owner entity. If provided and destroyed, the tween is also destroyed.  |
| `easing` | Anonymous | *(optional)* | The easing function to use. Defaults to QUAD_EASE_IN_OUT.  |
| `duration` | [Float](/api-docs/headless/Float/) | | Duration in seconds. If <= 0, completes immediately.  |
| `fromValue` | [Float](/api-docs/headless/Float/) | | Starting value  |
| `toValue` | [Float](/api-docs/headless/Float/) | | Ending value  |
| `handleValueTime` | Function | | Callback function called each frame with (value, time)  |

| Returns | Description |
|---------|-------------|
| [Tween](/api-docs/headless/ceramic/Tween/) | The created Tween instance |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ease"><code><span class="field-name">ease</span><span class="parenthesis">(</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ease"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply an easing function to a normalized value (0-1).
Useful for custom animations without creating a full tween.



| Name | Type | Description |
|------|------|-------------|
| `easing` | Anonymous | The easing function to apply  |
| `value` | [Float](/api-docs/headless/Float/) | Input value (typically 0-1, but depends on the easing)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The eased value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="easingFunction"><code><span class="field-name">easingFunction</span><span class="parenthesis">(</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#easingFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert an Easing enum value to a standalone Float->Float function.
Useful when you need to apply easing outside of the tween system.



| Name | Type | Description |
|------|------|-------------|
| `easing` | Anonymous | The easing type to convert  |

| Returns | Description |
|---------|-------------|
| Function | A function that takes a value (0-1) and returns the eased value |

## Instance Members

<div class="signature field-var has-description" id="easing"><code><span class="field-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The easing function used for this tween.
Determines how the value transitions from start to end.

<hr class="field-separator" />

<div class="signature field-var has-description" id="duration"><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The total duration of this tween in seconds.
If duration is 0 or negative, the tween completes immediately.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current interpolated value.
Updated each frame between fromValue and toValue based on elapsed time and easing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="time"><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The elapsed time since the tween started (in seconds).
Ranges from 0 to duration.

<hr class="field-separator" />

<div class="signature field-method no-description" id="immediateStart"><code><span class="field-name">immediateStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#immediateStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="owner"><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="remaining"><code><span class="field-name">remaining</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#remaining"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fromValue"><code><span class="field-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fromValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="toValue"><code><span class="field-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#toValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="eager"><code><span class="field-name">eager</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#eager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didCallImmediateStart"><code><span class="field-name">didCallImmediateStart</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didCallImmediateStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didTickThisFrame"><code><span class="field-name">didTickThisFrame</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didTickThisFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endFrame"><code><span class="field-name">endFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeEasing"><code><span class="field-name">computeEasing</span><span class="parenthesis">(</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeEasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `easing` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitUpdate"><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered on each frame with the current interpolated value.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | The current interpolated value between fromValue and toValue  |
| `time` | [Float](/api-docs/headless/Float/) | The elapsed time since the tween started (in seconds) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitComplete"><code><span class="field-name">emitComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event triggered when the tween completes its full duration.
Not triggered if the tween is destroyed before completion.

<hr class="field-separator" />

<div class="signature field-method no-description" id="computedEasing"><code><span class="field-name">computedEasing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computedEasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="customEasing"><code><span class="field-name">customEasing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#customEasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateFromTick"><code><span class="field-name">updateFromTick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromTick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitUpdate"><code><span class="field-name">willEmitUpdate</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/headless/Float/) |
| `time` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="immediateComplete"><code><span class="field-name">immediateComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#immediateComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">fromValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">toValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `owner` | [Null](/api-docs/headless/Null/)<[Entity](/api-docs/headless/ceramic/Entity/)> |
| `easing` | Anonymous |
| `duration` | [Float](/api-docs/headless/Float/) |
| `fromValue` | [Float](/api-docs/headless/Float/) |
| `toValue` | [Float](/api-docs/headless/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |


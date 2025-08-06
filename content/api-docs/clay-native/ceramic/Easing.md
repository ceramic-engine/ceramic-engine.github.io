---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Easing
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Easing/
---

# Easing

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Easing.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Easing</strong> (Enum)</div>

Enumeration of standard easing functions for animations.

Easing functions control the rate of change of an animated value over time,
creating more natural and appealing motion than simple linear interpolation.
Each easing type comes in three variants:

- **EASE_IN**: Slow start, accelerating toward the end
- **EASE_OUT**: Fast start, decelerating toward the end
- **EASE_IN_OUT**: Slow start and end with acceleration in the middle

## Visual Guide

```
LINEAR:      ╱ (constant speed)
EASE_IN:     ╱ (slow → fast)
EASE_OUT:    ╱ (fast → slow)
EASE_IN_OUT: ∿ (slow → fast → slow)
```

## Usage Example

```haxe
// With Tween
var tween = new Tween();
tween.target = sprite;
tween.prop("x", 100, 0.5, Easing.QUAD_EASE_OUT);

// With Timeline
timeline.add(0, sprite, "alpha", 1.0, Easing.SINE_EASE_IN);

// Custom bezier curve
tween.prop("y", 200, 1.0, Easing.BEZIER(0.25, 0.1, 0.25, 1));

// Custom function
function myEasing(t:Float):Float {
    return t * t * t; // Custom cubic
}
tween.prop("scale", 2, 0.3, Easing.CUSTOM(myEasing));
```

<div class="see"><strong>See:</strong> ceramic.EasingUtils For the actual easing function implementations, ceramic.Tween For applying easings to animations, ceramic.Timeline For complex multi-property animations</div>


## Constructors

### NONE

```haxe
NONE
```

No easing applied. The value stays at its initial state.
Useful for instant changes or holding values.

### LINEAR

```haxe
LINEAR
```

Linear interpolation with constant rate of change.
Simple but often looks mechanical.

### BACK_EASE_IN

```haxe
BACK_EASE_IN
```

Back easing creates an overshoot effect.
The animation goes slightly past the target then returns.

### BACK_EASE_IN_OUT

```haxe
BACK_EASE_IN_OUT
```

### BACK_EASE_OUT

```haxe
BACK_EASE_OUT
```

### QUAD_EASE_IN

```haxe
QUAD_EASE_IN
```

Quadratic (t²) easing - gentle acceleration/deceleration.
Good general-purpose easing for UI elements.

### QUAD_EASE_IN_OUT

```haxe
QUAD_EASE_IN_OUT
```

### QUAD_EASE_OUT

```haxe
QUAD_EASE_OUT
```

### CUBIC_EASE_IN

```haxe
CUBIC_EASE_IN
```

Cubic (t³) easing - moderate acceleration/deceleration.
Slightly stronger than quadratic, still smooth.

### CUBIC_EASE_IN_OUT

```haxe
CUBIC_EASE_IN_OUT
```

### CUBIC_EASE_OUT

```haxe
CUBIC_EASE_OUT
```

### QUART_EASE_IN

```haxe
QUART_EASE_IN
```

Quartic (t⁴) easing - pronounced acceleration/deceleration.
More dramatic than cubic but not extreme.

### QUART_EASE_IN_OUT

```haxe
QUART_EASE_IN_OUT
```

### QUART_EASE_OUT

```haxe
QUART_EASE_OUT
```

### QUINT_EASE_IN

```haxe
QUINT_EASE_IN
```

Quintic (t⁵) easing - strong acceleration/deceleration.
Creates very smooth but dramatic motion.

### QUINT_EASE_IN_OUT

```haxe
QUINT_EASE_IN_OUT
```

### QUINT_EASE_OUT

```haxe
QUINT_EASE_OUT
```

### BOUNCE_EASE_IN

```haxe
BOUNCE_EASE_IN
```

Bounce easing simulates a bouncing ball effect.
Multiple diminishing bounces at the end.

### BOUNCE_EASE_IN_OUT

```haxe
BOUNCE_EASE_IN_OUT
```

### BOUNCE_EASE_OUT

```haxe
BOUNCE_EASE_OUT
```

### ELASTIC_EASE_IN

```haxe
ELASTIC_EASE_IN
```

Elastic easing creates a spring-like oscillation.
Overshoots with a wobble effect.

### ELASTIC_EASE_IN_OUT

```haxe
ELASTIC_EASE_IN_OUT
```

### ELASTIC_EASE_OUT

```haxe
ELASTIC_EASE_OUT
```

### EXPO_EASE_IN

```haxe
EXPO_EASE_IN
```

Exponential (2^t) easing - extreme acceleration/deceleration.
Very dramatic, use sparingly.

### EXPO_EASE_IN_OUT

```haxe
EXPO_EASE_IN_OUT
```

### EXPO_EASE_OUT

```haxe
EXPO_EASE_OUT
```

### SINE_EASE_IN

```haxe
SINE_EASE_IN
```

Sine wave easing - smooth and natural motion.
Based on sine curve, very gentle transitions.

### SINE_EASE_IN_OUT

```haxe
SINE_EASE_IN_OUT
```

### SINE_EASE_OUT

```haxe
SINE_EASE_OUT
```

### BEZIER

```haxe
BEZIER(x1: Float, y1: Float, x2: Float, y2: Float)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `x1` | [Float](/api-docs/clay-native/Float/) | X coordinate of first control point (0-1)  |
| `y1` | [Float](/api-docs/clay-native/Float/) | Y coordinate of first control point  |
| `x2` | [Float](/api-docs/clay-native/Float/) | X coordinate of second control point (0-1)  |
| `y2` | [Float](/api-docs/clay-native/Float/) | Y coordinate of second control point * ```haxe // Common bezier curves BEZIER(0.25, 0.1, 0.25, 1) // ease-out BEZIER(0.42, 0, 1, 1) // ease-in BEZIER(0.42, 0, 0.58, 1) // ease-in-out BEZIER(0.68, -0.55, 0.265, 1.55) // back ease-in-out ``` |

Custom bezier curve easing defined by two control points.

Uses cubic bezier curves like CSS transitions.
Control points define the curve shape between (0,0) and (1,1).

```haxe
// Common bezier curves
BEZIER(0.25, 0.1, 0.25, 1)    // ease-out
BEZIER(0.42, 0, 1, 1)          // ease-in
BEZIER(0.42, 0, 0.58, 1)       // ease-in-out
BEZIER(0.68, -0.55, 0.265, 1.55) // back ease-in-out
```

### CUSTOM

```haxe
CUSTOM(easing: Function)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `easing` | Function | Function that maps input t (0-1) to output (typically 0-1) * ```haxe // Simple custom easing function smoothStep(t:Float):Float { return t * t * (3 - 2 * t); } * // Use in animation tween.prop("x", 100, 1.0, CUSTOM(smoothStep)); ``` |

Custom easing function.

Provide your own easing function that takes a progress value
from 0 to 1 and returns the eased value (typically 0 to 1).

```haxe
// Simple custom easing
function smoothStep(t:Float):Float {
    return t * t * (3 - 2 * t);
}

// Use in animation
tween.prop("x", 100, 1.0, CUSTOM(smoothStep));
```


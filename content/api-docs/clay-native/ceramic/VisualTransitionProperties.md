---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: VisualTransitionProperties
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/VisualTransitionProperties/
---

# VisualTransitionProperties

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/VisualTransition.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.VisualTransitionProperties</strong> (Abstract)</div>

Property setter interface for visual transitions.

This abstract type provides a fluent API for setting target values
during a transition. Each property setter automatically marks the
property as changed and stores the target value.

The interface includes convenience methods for setting related
properties together:
- pos(x, y) - Set position
- size(width, height) - Set dimensions
- scale(x, y) - Set scale (y optional)
- anchor(x, y) - Set anchor point
- etc.

All numeric properties support interpolation with easing.
Color properties use RGB interpolation.
Transform properties use matrix interpolation.

## Type Conversions

**From:**
- `[ceramic.VisualTransition](/api-docs/clay-native/ceramic/VisualTransition/)`


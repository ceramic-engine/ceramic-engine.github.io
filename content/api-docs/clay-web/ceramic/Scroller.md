---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Scroller
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Scroller/
---

# Scroller

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Scroller.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <strong>ceramic.Scroller</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A scrollable container that allows smooth scrolling and dragging of content.

Supports touch/mouse dragging, momentum scrolling, bounce effects,
and optional paging. Can scroll vertically or horizontally.

## Static Members

<div class="signature field-var no-description" id="threshold"><code><span class="field-name">threshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#threshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The content visual that will be scrolled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollbar"><code><span class="field-name">scrollbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#scrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional scrollbar visual that indicates scroll position.
The scrollbar will be automatically positioned and sized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="direction"><code><span class="field-name">direction</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scroll direction: VERTICAL or HORIZONTAL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowPointerOutside"><code><span class="field-name">allowPointerOutside</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowPointerOutside"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to allow pointer events outside the scroller bounds.
When false, pointer events outside will be blocked.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollTransform"><code><span class="field-name">scrollTransform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#scrollTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform used to position the content for scrolling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollEnabled"><code><span class="field-name">scrollEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scrollEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether scrolling is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragEnabled"><code><span class="field-name">dragEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether dragging to scroll is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragThreshold"><code><span class="field-name">dragThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to a value above zero, dragging should reach that
value before the scroller start to actually move its content.
In case the same value (or `noDragThreshold` value if above zero) is reached in wrong direction (vertical vs horizontal),
scroll will be entirely cancelled for the current touch.
This can be useful if you want to perform custom behaviour depending
on the direction of the drag, or if you want to nest two scrollers
that have different directions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noDragThreshold"><code><span class="field-name">noDragThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#noDragThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to a value above zero, when reaching that value in wrong direction (vertical vs horizontal),
scroll will be entirely cancelled for the current touch.

<hr class="field-separator" />

<div class="signature field-var has-description" id="roundScrollWhenIdle"><code><span class="field-name">roundScrollWhenIdle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#roundScrollWhenIdle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to a value above zero, scrollX and scrollY will be rounded when scroller is idle.

```haxe
roundScrollWhenIdle = 0; // No rounding (default)
roundScrollWhenIdle = 1; // Pixel perfect rounding
roundScrollWhenIdle = 2; // Half-pixel rounding
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current status of the scroller.
Can be IDLE, TOUCHING, DRAGGING, or SCROLLING.

<hr class="field-separator" />

<div class="signature field-var has-description" id="verticalToHorizontalWheel"><code><span class="field-name">verticalToHorizontalWheel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#verticalToHorizontalWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When set to true, vertical mouse wheel events
will also work on horizontal scrollers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="deceleration"><code><span class="field-name">deceleration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#deceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deceleration rate for momentum scrolling (pixels per second squared).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wheelDeceleration"><code><span class="field-name">wheelDeceleration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#wheelDeceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deceleration rate for mouse wheel scrolling (pixels per second squared).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wheelFactor"><code><span class="field-name">wheelFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#wheelFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiplier for mouse wheel scroll speed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wheelMomentum"><code><span class="field-name">wheelMomentum</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wheelMomentum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply momentum to mouse wheel scrolling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="wheelEndDelay"><code><span class="field-name">wheelEndDelay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#wheelEndDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delay in seconds before wheel scrolling is considered ended.

<hr class="field-separator" />

<div class="signature field-var has-description" id="overScrollResistance"><code><span class="field-name">overScrollResistance</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overScrollResistance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resistance factor when scrolling beyond bounds.
Higher values make it harder to scroll past edges.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxClickMomentum"><code><span class="field-name">maxClickMomentum</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxClickMomentum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum momentum that still allows a click to register.
Higher momentum will cancel the click.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bounceMomentumFactor"><code><span class="field-name">bounceMomentumFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceMomentumFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Factor for converting momentum to bounce distance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bounceMinDuration"><code><span class="field-name">bounceMinDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceMinDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum duration for bounce animation in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bounceDurationFactor"><code><span class="field-name">bounceDurationFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceDurationFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Factor for calculating bounce duration based on momentum.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bounceNoMomentumDuration"><code><span class="field-name">bounceNoMomentumDuration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceNoMomentumDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Duration for bounce animation when there's no momentum.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragFactor"><code><span class="field-name">dragFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiplier for drag speed.
Values less than 1.0 make dragging slower.

<hr class="field-separator" />

<div class="signature field-var has-description" id="touchableStrictHierarchy"><code><span class="field-name">touchableStrictHierarchy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchableStrictHierarchy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to use strict hierarchy checking for touch events.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollX"><code><span class="field-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current horizontal scroll position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollY"><code><span class="field-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current vertical scroll position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollVelocity"><code><span class="field-name">scrollVelocity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Velocity/" class="type-link">Velocity</a></code><a class="header-anchor" href="#scrollVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current scroll velocity tracker.
Used to calculate momentum when dragging ends.

<hr class="field-separator" />

<div class="signature field-var has-description" id="momentum"><code><span class="field-name">momentum</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#momentum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current momentum value.
Positive values scroll down/right, negative up/left.

<hr class="field-separator" />

<div class="signature field-var has-description" id="animating"><code><span class="field-name">animating</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#animating"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the scroller is currently animating.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pagingEnabled"><code><span class="field-name">pagingEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pagingEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable paging of the scroller so that
everytime we stop dragging, it snaps to the closest page.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageSize"><code><span class="field-name">pageSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this is the size of a page.
If kept to `-1` (default), it will use the scroller size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageSpacing"><code><span class="field-name">pageSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this is the spacing
between each page.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pageMomentumThreshold"><code><span class="field-name">pageMomentumThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageMomentumThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this threshold value
will be used to move to a sibling page if the momentum
is equal or above it.
If kept to `-1` (default), it will use the page size.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateStatus"><code><span class="field-name">invalidateStatus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollToBounds"><code><span class="field-name">scrollToBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollToBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scroll to ensure content is within bounds.
If content is smaller than the scroller, it will be positioned at 0.
If scrolled beyond bounds, it will snap back to the nearest edge.

<hr class="field-separator" />

<div class="signature field-method has-description" id="isContentPositionInBounds"><code><span class="field-name">isContentPositionInBounds</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isContentPositionInBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if a content position is visible within the scroller bounds.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X position in content coordinates  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y position in content coordinates  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if the position is visible |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ensureContentPositionIsInBounds"><code><span class="field-name">ensureContentPositionIsInBounds</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureContentPositionIsInBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scroll to ensure a specific content position is visible.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X position in content coordinates to make visible  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y position in content coordinates to make visible |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isOverScrollingTop"><code><span class="field-name">isOverScrollingTop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOverScrollingTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if content is scrolled beyond the top edge.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if over-scrolled at top |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isOverScrollingBottom"><code><span class="field-name">isOverScrollingBottom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOverScrollingBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if content is scrolled beyond the bottom edge.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if over-scrolled at bottom |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isOverScrollingLeft"><code><span class="field-name">isOverScrollingLeft</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOverScrollingLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if content is scrolled beyond the left edge.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if over-scrolled at left |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isOverScrollingRight"><code><span class="field-name">isOverScrollingRight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOverScrollingRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if content is scrolled beyond the right edge.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if over-scrolled at right |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop all scrolling and animations immediately.

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopTweens"><code><span class="field-name">stopTweens</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopTweens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop any active scroll animations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="scrollTo"><code><span class="field-name">scrollTo</span><span class="parenthesis">(</span><span class="arg-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Immediately scroll to a specific position.



| Name | Type | Description |
|------|------|-------------|
| `scrollX` | [Float](/api-docs/clay-web/Float/) | Target horizontal scroll position  |
| `scrollY` | [Float](/api-docs/clay-web/Float/) | Target vertical scroll position |

<hr class="field-separator" />

<div class="signature field-method has-description" id="smoothScrollTo"><code><span class="field-name">smoothScrollTo</span><span class="parenthesis">(</span><span class="arg-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.15</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#smoothScrollTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Smoothly animate scroll to a specific position.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `scrollX` | [Float](/api-docs/clay-web/Float/) | | Target horizontal scroll position  |
| `scrollY` | [Float](/api-docs/clay-web/Float/) | | Target vertical scroll position  |
| `duration` | [Float](/api-docs/clay-web/Float/) | `0.15` | Animation duration in seconds (default: 0.15)  |
| `easing` | Anonymous | *(optional)* | Easing function to use (default: QUAD_EASE_IN_OUT) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="snapTo"><code><span class="field-name">snapTo</span><span class="parenthesis">(</span><span class="arg-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.15</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#snapTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `scrollX` | [Float](/api-docs/clay-web/Float/) | |
| `scrollY` | [Float](/api-docs/clay-web/Float/) | |
| `duration` | [Float](/api-docs/clay-web/Float/) | `0.15` |
| `easing` | Anonymous | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bounceScroll"><code><span class="field-name">bounceScroll</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bounceScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pageIndexFromScroll"><code><span class="field-name">pageIndexFromScroll</span><span class="parenthesis">(</span><span class="arg-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageIndexFromScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scrollX` | [Float](/api-docs/clay-web/Float/) |
| `scrollY` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeTargetPageIndex"><code><span class="field-name">computeTargetPageIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#computeTargetPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scrollToPageIndex"><code><span class="field-name">scrollToPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollToPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pageIndex` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="smoothScrollToPageIndex"><code><span class="field-name">smoothScrollToPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.15</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowOverscroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#smoothScrollToPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pageIndex` | [Int](/api-docs/clay-web/Int/) | |
| `duration` | [Float](/api-docs/clay-web/Float/) | `0.15` |
| `easing` | Anonymous | *(optional)* |
| `allowOverscroll` | [Bool](/api-docs/clay-web/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTargetScrollXForPageIndex"><code><span class="field-name">getTargetScrollXForPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowOverscroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollXForPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pageIndex` | [Int](/api-docs/clay-web/Int/) | |
| `allowOverscroll` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTargetScrollYForPageIndex"><code><span class="field-name">getTargetScrollYForPageIndex</span><span class="parenthesis">(</span><span class="arg-name">pageIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowOverscroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTargetScrollYForPageIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pageIndex` | [Int](/api-docs/clay-web/Int/) | |
| `allowOverscroll` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Scroller.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `content` | [Visual](/api-docs/clay-web/ceramic/Visual/) | *(optional)* | Optional content visual to scroll. If null, a new Visual is created. |

## Private Members

<div class="signature field-var no-description" id="unobservedStatus"><code><span class="field-name">unobservedStatus</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="prevPointerX"><code><span class="field-name">prevPointerX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevPointerX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="prevPointerY"><code><span class="field-name">prevPointerY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#prevPointerY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dragThresholdStatus"><code><span class="field-name">dragThresholdStatus</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ScrollerDragThresholdStatus/" class="type-link">ScrollerDragThresholdStatus</a></code><a class="header-anchor" href="#dragThresholdStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="contentStart"><code><span class="field-name">contentStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStart"><code><span class="field-name">pointerStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStartX"><code><span class="field-name">pointerStartX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStartY"><code><span class="field-name">pointerStartY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="touchIndex"><code><span class="field-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#touchIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="releaseSnap"><code><span class="field-name">releaseSnap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#releaseSnap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fromWheel"><code><span class="field-name">fromWheel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fromWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lastWheelEventTime"><code><span class="field-name">lastWheelEventTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lastWheelEventTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="canClick"><code><span class="field-name">canClick</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tweenX"><code><span class="field-name">tweenX</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#tweenX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tweenY"><code><span class="field-name">tweenY</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Tween/" class="type-link">Tween</a></code><a class="header-anchor" href="#tweenY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerOnScroller"><code><span class="field-name">pointerOnScroller</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointerOnScroller"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerOnScrollerChild"><code><span class="field-name">pointerOnScrollerChild</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointerOnScrollerChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="blockingDefaultScroll"><code><span class="field-name">blockingDefaultScroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#blockingDefaultScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scrollbarDownX"><code><span class="field-name">scrollbarDownX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollbarDownX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scrollbarDownY"><code><span class="field-name">scrollbarDownY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollbarDownY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scrollbarStartX"><code><span class="field-name">scrollbarStartX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollbarStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scrollbarStartY"><code><span class="field-name">scrollbarStartY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scrollbarStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pageIndexOnStartDrag"><code><span class="field-name">pageIndexOnStartDrag</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pageIndexOnStartDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Scroller</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Scroller](/api-docs/clay-web/ceramic/Scroller/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAnimateStart"><code><span class="field-name">emitAnimateStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAnimateStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when scroll animation starts.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAnimateEnd"><code><span class="field-name">emitAnimateEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAnimateEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when scroll animation ends.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDragStart"><code><span class="field-name">emitDragStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDragStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the user starts dragging.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDragEnd"><code><span class="field-name">emitDragEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDragEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the user stops dragging.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWheelStart"><code><span class="field-name">emitWheelStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWheelStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when mouse wheel scrolling starts.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWheelEnd"><code><span class="field-name">emitWheelEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWheelEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when mouse wheel scrolling ends.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitClick"><code><span class="field-name">emitClick</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the scroller is clicked (tap without scrolling).



| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) | Touch information for the click |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitScrollerPointerDown"><code><span class="field-name">emitScrollerPointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScrollerPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when pointer is pressed down on the scroller.



| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) | Touch information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitScrollerPointerUp"><code><span class="field-name">emitScrollerPointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScrollerPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when pointer is released from the scroller.



| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) | Touch information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStatusChange"><code><span class="field-name">emitStatusChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStatusChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when status field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="interceptPointerDown"><code><span class="field-name">interceptPointerDown</span><span class="parenthesis">(</span><span class="arg-name">hittingVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#interceptPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hittingVisual` | [Visual](/api-docs/clay-web/ceramic/Visual/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `touchIndex` | [Int](/api-docs/clay-web/Int/) |
| `buttonId` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="interceptPointerOver"><code><span class="field-name">interceptPointerOver</span><span class="parenthesis">(</span><span class="arg-name">hittingVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#interceptPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hittingVisual` | [Visual](/api-docs/clay-web/ceramic/Visual/) |
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="startTracking"><code><span class="field-name">startTracking</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startTracking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="stopTracking"><code><span class="field-name">stopTracking</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopTracking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointerOver"><code><span class="field-name">pointerOver</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointerOut"><code><span class="field-name">pointerOut</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pointerOut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseWheel"><code><span class="field-name">mouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointerDown"><code><span class="field-name">pointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pointerUp"><code><span class="field-name">pointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="screenFocus"><code><span class="field-name">screenFocus</span><span class="parenthesis">(</span><span class="arg-name">focusedVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `focusedVisual` | [Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="roundScrollIfNeeded"><code><span class="field-name">roundScrollIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#roundScrollIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateScrollbar"><code><span class="field-name">updateScrollbar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateScrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindScrollbar"><code><span class="field-name">bindScrollbar</span><span class="parenthesis">(</span><span class="arg-name">scrollbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindScrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scrollbar` | [Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleScrollbarDown"><code><span class="field-name">handleScrollbarDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleScrollbarDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleScrollbarUp"><code><span class="field-name">handleScrollbarUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleScrollbarUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleScrollbarMove"><code><span class="field-name">handleScrollbarMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleScrollbarMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scrollUpdate"><code><span class="field-name">scrollUpdate</span><span class="parenthesis">(</span><span class="arg-name">pointerX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">pointerY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minusDelta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pointerX` | [Float](/api-docs/clay-web/Float/) | |
| `pointerY` | [Float](/api-docs/clay-web/Float/) | |
| `delta` | [Float](/api-docs/clay-web/Float/) | |
| `minusDelta` | [Float](/api-docs/clay-web/Float/) | `0` |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


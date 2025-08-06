---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScrollerStatus
target: Headless
permalink: api-docs/headless/ceramic/ScrollerStatus/
---

# ScrollerStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ScrollerStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ScrollerStatus</strong> (Enum)</div>

Represents the current state of a Scroller component during user interaction.

ScrollerStatus tracks the different phases of touch/mouse interaction with
scrollable content, from initial touch through dragging to momentum scrolling.
This enum is essential for implementing proper scroll behavior and visual
feedback in scrollable UI components.

State transitions:
- IDLE → TOUCHING: User touches/clicks the scroller
- TOUCHING → DRAGGING: User moves beyond drag threshold
- TOUCHING → IDLE: User releases without dragging
- DRAGGING → SCROLLING: User releases after dragging (momentum scroll)
- DRAGGING → IDLE: User releases with no velocity
- SCROLLING → IDLE: Momentum scrolling completes
- SCROLLING → TOUCHING: User touches during momentum scroll

Example usage:
```haxe
scroller.onStatusChange(this, (status, prevStatus) -> {
    switch (status) {
        case IDLE:
            scrollbar.fadeOut();
        case TOUCHING:
            scrollbar.show();
        case DRAGGING:
            scrollbar.highlight();
        case SCROLLING:
            scrollbar.fadeIn();
    }
});
```

<div class="see"><strong>See:</strong> ceramic.Scroller The main scrolling component that uses this enum</div>


## Constructors

### IDLE

```haxe
IDLE
```

Nothing happening - no user interaction or animation.
The scroller is at rest and not being interacted with.

### TOUCHING

```haxe
TOUCHING
```

Being touched, but not dragging yet.
User has initiated contact but hasn't moved beyond the drag threshold.
This state helps distinguish between taps and drag attempts.

### DRAGGING

```haxe
DRAGGING
```

Being dragged by a touch/mouse event.
User is actively moving the content by dragging.
The content follows the touch/mouse position directly.

### SCROLLING

```haxe
SCROLLING
```

Scrolling after dragging has ended.
Momentum/inertial scrolling is in progress after the user released.
The content continues moving based on the release velocity.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |


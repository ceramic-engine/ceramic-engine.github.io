---
layout: guides
category: guides
menu: Handbook
title: Tweens
permalink: guides/tweens/
---
# Tweens

Tweens let you animate any value over time: a position, a scale, an alpha, a color component... **Ceramic** provides a lightweight tween system with a large catalog of easing functions.

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/tween-easings/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/tween-easings/">tween easings</a> example, showing every available easing side by side.</div>

## Creating a tween

The most direct way to create a tween is calling `tween()` on any visual (or entity):

<div class="codename">Animating a visual with tween()</div>

```haxe
// Animate from 0 to 300 in 0.5 seconds, with a bounce
visual.tween(BOUNCE_EASE_OUT, 0.5, 0, 300, (value, time) -> {
    visual.y = value;
});
```

The callback is called at every frame with the current `value` (interpolated between your `from` and `to` values) and the current `time` (in seconds, from `0` to the tween duration). What you do with that value is entirely up to you: assign it to a position, a rotation, a volume...

Beyond the animation itself, calling `tween()` on a visual (or any entity) **associates the tween with that entity**: the tween belongs to it. This ownership is what makes tweens safe to use: if the entity is destroyed while the tween is still running, the tween is automatically stopped and cleaned up. You never end up with a callback firing on a visual that no longer exists, and you don't have to track and cancel tweens by hand.

You can also use the static `Tween.start()` method, which does the same thing but lets you provide any entity as the owner explicitly:

<div class="codename">Creating a tween with Tween.start()</div>

```haxe
Tween.start(this, QUAD_EASE_IN_OUT, 1.0, 0, 1, (value, time) -> {
    someVisual.alpha = value;
});
```

<p class="extra-info">The <code>owner</code> (first argument) is exactly what <code>visual.tween(...)</code> sets to the visual for you: the entity the tween is tied to. When it is destroyed, its running tweens are stopped and cleaned up automatically.</p>

## Easing functions

The `Easing` enum provides the usual easing families, each with `_EASE_IN`, `_EASE_OUT` and `_EASE_IN_OUT` variants:

| Family | Feel |
|---|---|
| `LINEAR` | Constant speed |
| `QUAD`, `CUBIC`, `QUART`, `QUINT` | Polynomial acceleration, increasingly pronounced |
| `SINE` | Soft and natural |
| `EXPO` | Very sharp acceleration |
| `BACK` | Overshoots a little, then settles |
| `BOUNCE` | Bounces like a ball |
| `ELASTIC` | Springs around the target |

If none of these fit, you can provide your own cubic bezier curve or even a custom function:

<div class="codename">Custom easings</div>

```haxe
// A cubic bezier curve (like CSS transitions)
visual.tween(BEZIER(0.7, 0, 0.3, 1), 1.0, 0, 300, (value, time) -> {
    visual.x = value;
});

// Any function taking a value between 0 and 1
visual.tween(CUSTOM(myEasingFunction), 1.0, 0, 300, (value, time) -> {
    visual.x = value;
});
```

## Chaining tweens

A tween emits a `complete` event when it finishes. Use it to chain animations:

<div class="codename">Chaining animations with onceComplete()</div>

```haxe
visual.tween(QUAD_EASE_IN, 0.3, 0, 100, (value, time) -> {
    visual.y = value;
})
.onceComplete(this, () -> {
    // First tween finished, start another one
    visual.tween(BOUNCE_EASE_OUT, 0.6, 100, 400, (value, time) -> {
        visual.y = value;
    });
});
```

## Stopping a tween

Keep a reference to the tween if you need to interrupt it:

<div class="codename">Cancelling a running tween</div>

```haxe
var tween = visual.tween(LINEAR, 10.0, 0, 100, (value, time) -> {
    visual.x = value;
});

// Later:
tween.destroy();
```

<p class="extra-info">Also remember that a tween owned by an entity is destroyed with it: most of the time, you don't need to do anything.</p>

## Related examples

* [Tween easings](/examples/tween-easings/): every easing displayed side by side
* [Scene transitions](/examples/scene-transitions/): tweens used to fade scenes in and out

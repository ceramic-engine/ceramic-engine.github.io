---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineMontageAnimation
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpineMontageAnimation/
---

# SpineMontageAnimation

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineMontageAnimation.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineMontageAnimation</strong> (Class)</div>

Configuration data for a single animation within a SpineMontage.

This class defines all the parameters needed to play a Spine animation,
including playback settings, visual options, and lifecycle callbacks.
It's designed to be used with SpineMontage to create rich, interactive
animation sequences with automatic transitions and event handling.

The @:structInit metadata allows for convenient object literal syntax
when creating instances, making configuration clean and readable.

```haxe
var jumpAnimation:SpineMontageAnimation<HeroState> = {
    anim: "jump_animation",
    speed: 1.2,
    next: HeroState.Idle,
    begin: () -> playJumpSound(),
    complete: () -> trace("Jump completed!")
};
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="anim"><div class="plugin-name">spine</div><code><span class="field-name">anim</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#anim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the Spine animation to play.
This must match an animation name defined in the Spine skeleton data.
This is the only required field when creating an animation configuration.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skin"><div class="plugin-name">spine</div><code><span class="field-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#skin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skin to apply when playing this animation.

Skins in Spine allow you to swap out attachments (images) to create
variations of the same animation (e.g., different outfits, weapons).
If null, the current skin or default skin will be used.

"warrior", "mage", "red_armor"

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">spine</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this animation should loop continuously.

- true: Animation repeats indefinitely until explicitly stopped
- false: Animation plays once and triggers completion
- null: Uses the default loop setting from SpineMontageDefaults

Non-looping animations will trigger their complete callback and
potentially transition to the next animation when finished.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="time"><div class="plugin-name">spine</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starting position within the animation as a normalized value (0-1).

- 0: Start at the beginning (default)
- 0.5: Start halfway through
- 1: Start at the end

This is useful for synchronizing animations or creating seamless
transitions between related animations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="speed"><div class="plugin-name">spine</div><code><span class="field-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Playback speed multiplier for this animation.

- 1.0: Normal speed (default when using montage defaults)
- 2.0: Double speed
- 0.5: Half speed
- 0: Paused
- -1: Use default speed from SpineMontageDefaults

Negative values (except -1) will play the animation in reverse.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="track"><div class="plugin-name">spine</div><code><span class="field-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#track"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation track index to use for this animation.

Spine supports multiple animation tracks for layering animations
(e.g., running on track 0 while shooting on track 1).

- 0: Primary track (most common)
- 1+: Additional layered tracks
- -1: Use default track from SpineMontageDefaults

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="next"><div class="plugin-name">spine</div><code><span class="field-name">next</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontageAnimation.T</span></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation to automatically transition to when this one completes.

This enables creation of animation sequences and state machines.
Only applies to non-looping animations. The transition happens
immediately after the complete callback (if any) is executed.

Set to null for no automatic transition.

```haxe
animations: {
    "jump": { anim: "jump", next: "fall" },
    "fall": { anim: "fall", next: "land" },
    "land": { anim: "land", next: "idle" },
    "idle": { anim: "idle", loop: true }
}
```

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="begin"><div class="plugin-name">spine</div><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback function executed when this animation begins playing.

Called after the animation has been applied to the Spine instance
but before the beginAnimation event is emitted. Useful for:
- Playing sound effects
- Spawning particles
- Setting up animation-specific state
- Triggering UI updates

The callback receives no parameters and should not return a value.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="complete"><div class="plugin-name">spine</div><code><span class="field-name">complete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#complete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback function executed when this animation completes.

Only called for non-looping animations when they finish playing.
Executed before any transition to the next animation and before
the completeAnimation event is emitted. Useful for:
- Cleanup after animation
- Triggering game logic
- Scoring or achievement checks
- Queuing follow-up actions

The callback receives no parameters and should not return a value.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">anim</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">next</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontageAnimation.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">begin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">complete</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `anim` | [String](/api-docs/clay-web/String/) | | * The name of the Spine animation to play. This must match an animation name defined in the Spine skeleton data. This is the only required field when creating an animation configuration. |
| `skin` | [Null](/api-docs/clay-web/Null/)<[Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)>> | *(optional)* | * The skin to apply when playing this animation. * Skins in Spine allow you to swap out attachments (images) to create variations of the same animation (e.g., different outfits, weapons). If null, the current skin or default skin will be used. * "warrior", "mage", "red_armor" |
| `loop` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | * Whether this animation should loop continuously. * - true: Animation repeats indefinitely until explicitly stopped - false: Animation plays once and triggers completion - null: Uses the default loop setting from SpineMontageDefaults * Non-looping animations will trigger their complete callback and potentially transition to the next animation when finished. |
| `time` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * Starting position within the animation as a normalized value (0-1). * - 0: Start at the beginning (default) - 0.5: Start halfway through - 1: Start at the end * This is useful for synchronizing animations or creating seamless transitions between related animations. |
| `speed` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * Playback speed multiplier for this animation. * - 1.0: Normal speed (default when using montage defaults) - 2.0: Double speed - 0.5: Half speed - 0: Paused - -1: Use default speed from SpineMontageDefaults * Negative values (except -1) will play the animation in reverse. |
| `track` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * The animation track index to use for this animation. * Spine supports multiple animation tracks for layering animations (e.g., running on track 0 while shooting on track 1). * - 0: Primary track (most common) - 1+: Additional layered tracks - -1: Use default track from SpineMontageDefaults |
| `next` | [Null](/api-docs/clay-web/Null/)<ceramic.SpineMontageAnimation.T> | *(optional)* | * The animation to automatically transition to when this one completes. * This enables creation of animation sequences and state machines. Only applies to non-looping animations. The transition happens immediately after the complete callback (if any) is executed. * Set to null for no automatic transition. * ```haxe animations: { "jump": { anim: "jump", next: "fall" }, "fall": { anim: "fall", next: "land" }, "land": { anim: "land", next: "idle" }, "idle": { anim: "idle", loop: true } } ``` |
| `begin` | [Null](/api-docs/clay-web/Null/)<Function> | *(optional)* | * Callback function executed when this animation begins playing. * Called after the animation has been applied to the Spine instance but before the beginAnimation event is emitted. Useful for: - Playing sound effects - Spawning particles - Setting up animation-specific state - Triggering UI updates * The callback receives no parameters and should not return a value. |
| `complete` | [Null](/api-docs/clay-web/Null/)<Function> | *(optional)* | * Callback function executed when this animation completes. * Only called for non-looping animations when they finish playing. Executed before any transition to the next animation and before the completeAnimation event is emitted. Useful for: - Cleanup after animation - Triggering game logic - Scoring or achievement checks - Queuing follow-up actions * The callback receives no parameters and should not return a value. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


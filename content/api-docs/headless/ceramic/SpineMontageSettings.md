---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineMontageSettings
target: Headless
permalink: api-docs/headless/ceramic/SpineMontageSettings/
---

# SpineMontageSettings

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineMontageSettings.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineMontageSettings</strong> (Class)</div>

Complete configuration for initializing a SpineMontage.

This class provides a convenient way to configure all aspects of a SpineMontage
in a single object, which can be passed to the SpineMontage constructor.
It combines animation definitions, default settings, Spine instance configuration,
and initial state into one cohesive structure.

The @:structInit metadata enables object literal syntax for easy configuration.

Complete montage setup
```haxe
enum PlayerState {
    IDLE;
    WALK;
    RUN;
    JUMP;
    ATTACK;
}

var settings:SpineMontageSettings<PlayerState> = {
    spine: {
        data: playerSpineData,
        scale: 0.5,
        bound: true
    },
    defaults: {
        track: 0,
        speed: 1.0,
        loop: false
    },
    animations: {
        IDLE: { anim: "idle", loop: true },
        WALK: { anim: "walk", loop: true, speed: 1.0 },
        RUN: { anim: "run", loop: true, speed: 1.5 },
        JUMP: {
            anim: "jump",
            next: IDLE,
            begin: () -> playSound("jump")
        },
        ATTACK: {
            anim: "sword_swing",
            next: IDLE,
            complete: () -> dealDamage()
        }
    },
    start: Idle
};

var montage = new SpineMontage(settings);
```

Minimal setup with existing Spine instance
```haxe
var settings:SpineMontageSettings<String> = {
    spine: {
        instance: existingSpineObject,
        bound: false
    },
    animations: {
        "intro": { anim: "intro_animation" },
        "loop": { anim: "main_loop", loop: true }
    }
};
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="animations"><div class="plugin-name">spine</div><code><span class="field-name">animations</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#animations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation configurations that make up this montage.

This is a dynamic object where:
- Keys are string representations of your animation identifiers (T)
- Values are SpineMontageAnimation<T> configurations

For enum-based montages, use the enum constructor names as keys.
For string-based montages, use the string values directly.

Each animation configuration defines how that particular animation
should be played, including its Spine animation name, playback settings,
callbacks, and transitions.

```haxe
animations: {
    IDLE: { anim: "idle_loop", loop: true },
    WALK: { anim: "walk_cycle", loop: true, speed: 1.2 },
    ATTACK: { anim: "attack_01", next: IDLE }
}
```

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="defaults"><div class="plugin-name">spine</div><code><span class="field-name">defaults</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineMontageDefaults/" class="type-link">SpineMontageDefaults</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaults"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default configuration values that apply to all animations.

These defaults reduce repetition by providing common values that
animations will use unless they specify their own. Includes:
- Default track index
- Default playback speed
- Default loop behavior
- Default skin

Individual animations can override any of these defaults.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spine"><div class="plugin-name">spine</div><code><span class="field-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineMontageSpineSettings/" class="type-link">SpineMontageSpineSettings</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#spine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configuration for the Spine instance used by this montage.

This can either:
- Provide an existing Spine instance to use
- Specify SpineData to create a new instance
- Configure scale, depth, and binding behavior

If not provided, you must manually set the spine instance
on the montage after creation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="start"><div class="plugin-name">spine</div><code><span class="field-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontageSettings.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The initial animation to play when the montage is created.

This animation will be automatically started after the montage
is fully initialized. The animation begins on the next immediate
frame to ensure all setup is complete.

If null, no animation will play initially and you must call
play() manually to start an animation.

```haxe
start: PlayerState.IDLE  // For enum-based montages
start: "intro"          // For string-based montages
```

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">animations</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaults</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineMontageDefaults/" class="type-link">SpineMontageDefaults</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineMontageSpineSettings/" class="type-link">SpineMontageSpineSettings</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontageSettings.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animations` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)>> | *(optional)* | * The animation configurations that make up this montage. * This is a dynamic object where: - Keys are string representations of your animation identifiers (T) - Values are SpineMontageAnimation<T> configurations * For enum-based montages, use the enum constructor names as keys. For string-based montages, use the string values directly. * Each animation configuration defines how that particular animation should be played, including its Spine animation name, playback settings, callbacks, and transitions. * ```haxe animations: { IDLE: { anim: "idle_loop", loop: true }, WALK: { anim: "walk_cycle", loop: true, speed: 1.2 }, ATTACK: { anim: "attack_01", next: IDLE } } ``` |
| `defaults` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<[SpineMontageDefaults](/api-docs/headless/ceramic/SpineMontageDefaults/)>> | *(optional)* | * Default configuration values that apply to all animations. * These defaults reduce repetition by providing common values that animations will use unless they specify their own. Includes: - Default track index - Default playback speed - Default loop behavior - Default skin * Individual animations can override any of these defaults. |
| `spine` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<[SpineMontageSpineSettings](/api-docs/headless/ceramic/SpineMontageSpineSettings/)>> | *(optional)* | * Configuration for the Spine instance used by this montage. * This can either: - Provide an existing Spine instance to use - Specify SpineData to create a new instance - Configure scale, depth, and binding behavior * If not provided, you must manually set the spine instance on the montage after creation. |
| `start` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<ceramic.SpineMontageSettings.T>> | *(optional)* | * The initial animation to play when the montage is created. * This animation will be automatically started after the montage is fully initialized. The animation begins on the next immediate frame to ensure all setup is complete. * If null, no animation will play initially and you must call play() manually to start an animation. * ```haxe start: PlayerState.IDLE // For enum-based montages start: "intro" // For string-based montages ``` |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


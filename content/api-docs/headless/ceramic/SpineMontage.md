---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineMontage
target: Headless
permalink: api-docs/headless/ceramic/SpineMontage/
---

# SpineMontage

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineMontage.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.SpineMontage</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Component/">Component</a></div>

A powerful utility for managing and orchestrating Spine animations as a cohesive montage.

SpineMontage provides a high-level interface for configuring, sequencing, and controlling
Spine animations with predefined settings. It allows you to group related animations
together and define transitions, callbacks, and default behaviors for each animation state.

The class supports both enum-based and string-based animation keys through its generic
type parameter T, making it type-safe when used with enums while still flexible for
dynamic animation names.

Key features:
- Type-safe animation management with enum support
- Animation chaining and sequencing with automatic transitions
- Per-animation configuration (speed, loop, track, skin)
- Begin/complete callbacks for animation lifecycle events
- Default settings that apply to all animations
- Automatic Spine instance lifecycle management

Using with an enum
```haxe
enum HeroAnimation {
    IDLE;
    WALK;
    RUN;
    JUMP;
    ATTACK;
}

var montage = new SpineMontage<HeroAnimation>({
    spine: {
        data: heroSpineData,
        scale: 0.5
    },
    defaults: {
        track: 0,
        speed: 1.0
    },
    animations: {
        IDLE: { anim: "idle", loop: true },
        WALK: { anim: "walk", loop: true, speed: 1.2 },
        RUN: { anim: "run", loop: true, speed: 1.5 },
        JUMP: { anim: "jump", next: IDLE },
        ATTACK: {
            anim: "attack",
            next: IDLE,
            complete: () -> trace("Attack finished!")
        }
    },
    start: Idle
});

// Later in code
montage.play(Walk);
montage.play(Attack); // Will auto-transition to Idle when complete
```

Using with strings
```haxe
var montage = new SpineMontage<String>();
montage.createSpine(spineData);
montage.set("intro", { anim: "intro_animation", next: "loop" });
montage.set("loop", { anim: "loop_animation", loop: true });
montage.play("intro");
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="spine"><div class="plugin-name">spine</div><code><span class="field-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a></code><a class="header-anchor" href="#spine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine instance this montage controls.

When setting a new Spine instance:
- Previous instance event listeners are cleaned up
- If the previous instance was bound, it gets destroyed
- Current animation (if any) is reapplied to the new instance

The Spine instance can be bound to this montage's lifecycle,
meaning it will be automatically destroyed when the montage is destroyed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="animation"><div class="plugin-name">spine</div><code><span class="field-name">animation</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently playing animation in the montage.

Setting this property will:
1. Stop the current animation (if any)
2. Apply the new animation's configuration
3. Execute any begin callback
4. Emit the beginAnimation event
5. Start playing the animation on the Spine instance

Set to null to stop all animations and hide the Spine instance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="defaults"><div class="plugin-name">spine</div><code><span class="field-name">defaults</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageDefaults/" class="type-link">SpineMontageDefaults</a></code><a class="header-anchor" href="#defaults"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default animation settings that apply to all animations unless overridden.

These defaults include:
- track: The animation track to use (default: 0)
- speed: Time scale multiplier (default: 1.0)
- loop: Whether animations loop by default (default: false)
- skin: Default skin name to use (default: null)

Individual animations can override any of these defaults.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">spine</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">spine</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setAnimations"><div class="plugin-name">spine</div><code><span class="field-name">setAnimations</span><span class="parenthesis">(</span><span class="arg-name">animations</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets multiple animation configurations at once using a dynamic object.

Each field in the animations object should have a name matching the
animation key (as a string) and a value of type SpineMontageAnimation<T>
containing the configuration for that animation.



| Name | Type | Description |
|------|------|-------------|
| `animations` | [Dynamic](/api-docs/headless/Dynamic/) | Object with animation configurations keyed by name  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setDefaults"><div class="plugin-name">spine</div><code><span class="field-name">setDefaults</span><span class="parenthesis">(</span><span class="arg-name">defaults</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageDefaults/" class="type-link">SpineMontageDefaults</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDefaults"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the default animation parameters that apply to all animations.

These defaults are used as fallback values when an animation doesn't
specify its own value for a particular setting.



| Name | Type | Description |
|------|------|-------------|
| `defaults` | [SpineMontageDefaults](/api-docs/headless/ceramic/SpineMontageDefaults/) | The default configuration to use |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="useSpine"><div class="plugin-name">spine</div><code><span class="field-name">useSpine</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bound</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useSpine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Associates an existing Spine instance with this montage.

This method allows you to provide a pre-configured Spine instance
rather than creating a new one. Any previously associated Spine
instance will be properly cleaned up based on its binding status.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spine` | [Spine](/api-docs/headless/ceramic/Spine/) | | The Spine instance to use  |
| `bound` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to bind the Spine instance lifecycle to this montage. When true, destroying either object will destroy the other. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createSpine"><div class="plugin-name">spine</div><code><span class="field-name">createSpine</span><span class="parenthesis">(</span><span class="arg-name">spineData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineData/" class="type-link">SpineData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bound</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createSpine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Spine instance using the provided SpineData.

This is a convenience method that creates and configures a new Spine
instance with the given data. The created instance is automatically
set as inactive until an animation is played.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spineData` | [SpineData](/api-docs/headless/ceramic/SpineData/) | | The SpineData containing skeleton and atlas information  |
| `bound` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to bind the created Spine instance lifecycle to this montage. When true, destroying either object will destroy the other. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="stop"><div class="plugin-name">spine</div><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops the current animation and hides the Spine instance.

This is equivalent to setting `animation = null` and will:
- Stop any playing animation
- Hide the Spine instance (set active to false)
- Clear the current animation state

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="play"><div class="plugin-name">spine</div><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reset</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plays the specified animation.

This is the primary method for starting animations in the montage.
By default, if the same animation is already playing, it continues
without interruption. Use the reset parameter to force a restart.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | ceramic.SpineMontage.T | | The animation key to play  |
| `reset` | [Bool](/api-docs/headless/Bool/) | `false` | If true, forces the animation to restart from the beginning, even if it's already the current animation * ```haxe montage.play(HeroAnimation.Walk); montage.play(HeroAnimation.Jump, true); // Force restart ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="set"><div class="plugin-name">spine</div><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="operator">,</span> <span class="arg-name">animationInstance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageAnimation/" class="type-link">SpineMontageAnimation</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures a single animation in the montage.

Use this method to add or update the configuration for a specific
animation key. The configuration includes the actual Spine animation
name, playback settings, callbacks, and transition information.



| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.SpineMontage.T | The animation key to configure  |
| `animationInstance` | [SpineMontageAnimation](/api-docs/headless/ceramic/SpineMontageAnimation/)<ceramic.SpineMontage.T> | The configuration for this animation * ```haxe montage.set(HeroAnimation.Victory, { anim: "victory_dance", speed: 0.8, complete: () -> trace("Victory!"), next: HeroAnimation.Idle }); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">spine</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageAnimation/" class="type-link">SpineMontageAnimation</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the configuration for a specific animation key.



| Name | Type | Description |
|------|------|-------------|
| `key` | ceramic.SpineMontage.T | The animation key to look up  |

| Returns | Description |
|---------|-------------|
| [SpineMontageAnimation](/api-docs/headless/ceramic/SpineMontageAnimation/)<ceramic.SpineMontage.T> | The animation configuration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">settings</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageSettings/" class="type-link">SpineMontageSettings</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineMontage instance with optional initial configuration.

The settings parameter allows you to configure all aspects of the montage
at creation time, including:
- Creating or using an existing Spine instance
- Setting default animation parameters
- Defining all animation configurations
- Specifying an initial animation to play



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `settings` | [SpineMontageSettings](/api-docs/headless/ceramic/SpineMontageSettings/)<ceramic.SpineMontage.T> | *(optional)* | Optional configuration object containing spine setup, animation definitions, and default values. See `SpineMontageSettings` for detailed options. |

## Private Members

<div class="signature field-var has-description has-plugin" id="animationInstances"><div class="plugin-name">spine</div><code><span class="field-name">animationInstances</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#animationInstances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal storage for animation configurations mapped by their string representation.
For enum-based montages, enum values are converted to strings for storage.
This allows the same storage mechanism to work for both enum and string keys.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="currentAnimationInstance"><div class="plugin-name">spine</div><code><span class="field-name">currentAnimationInstance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageAnimation/" class="type-link">SpineMontageAnimation</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#currentAnimationInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation configuration currently being used to display an animation.
This holds the complete configuration including animation name, speed, loop settings, etc.
Will be null when no animation is playing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundToSpineInstance"><div class="plugin-name">spine</div><code><span class="field-name">boundToSpineInstance</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#boundToSpineInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether the Spine instance lifecycle is bound to this montage.
When true:
- Destroying the montage will also destroy the Spine instance
- Destroying the Spine instance will also destroy the montage
This creates a strong ownership relationship between the two objects.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="numSetAnimation"><div class="plugin-name">spine</div><code><span class="field-name">numSetAnimation</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numSetAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal counter tracking animation changes.
Used to detect when animations are changed externally during callbacks,
preventing the montage from overriding explicit animation changes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enumType"><div class="plugin-name">spine</div><code><span class="field-name">enumType</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the enum type when T is an enum.
Currently unused but reserved for potential future enum-specific features.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBeginAnimation"><div class="plugin-name">spine</div><code><span class="field-name">emitBeginAnimation</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when starting an animation.
This event is emitted after the animation has been applied to the Spine instance
and after any begin callback has been executed.



| Name | Type | Description |
|------|------|-------------|
| `animation` | ceramic.SpineMontage.T | The animation key that just started |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCompleteAnimation"><div class="plugin-name">spine</div><code><span class="field-name">emitCompleteAnimation</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCompleteAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when completing an animation.
This event is emitted when a non-looping animation finishes playing,
after any complete callback has been executed but before transitioning
to the next animation (if configured).



| Name | Type | Description |
|------|------|-------------|
| `animation` | ceramic.SpineMontage.T | The animation key that just completed |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindAsComponent"><div class="plugin-name">spine</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleSpineDestroy"><div class="plugin-name">spine</div><code><span class="field-name">handleSpineDestroy</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSpineDestroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleSpineComplete"><div class="plugin-name">spine</div><code><span class="field-name">handleSpineComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleSpineComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="applyCurrentAnimation"><div class="plugin-name">spine</div><code><span class="field-name">applyCurrentAnimation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyCurrentAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="keyToString"><div class="plugin-name">spine</div><code><span class="field-name">keyToString</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <span class="type-name">ceramic.SpineMontage.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#keyToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | ceramic.SpineMontage.T |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setByName"><div class="plugin-name">spine</div><code><span class="field-name">setByName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">animationInstance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageAnimation/" class="type-link">SpineMontageAnimation</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configure an animation for key matching name `name`.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |
| `animationInstance` | [SpineMontageAnimation](/api-docs/headless/ceramic/SpineMontageAnimation/)<ceramic.SpineMontage.T> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getByName"><div class="plugin-name">spine</div><code><span class="field-name">getByName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineMontageAnimation/" class="type-link">SpineMontageAnimation</a><span class="operator">&lt;</span><span class="type-name">ceramic.SpineMontage.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get configured animation for key matching name `name`

| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [SpineMontageAnimation](/api-docs/headless/ceramic/SpineMontageAnimation/)<ceramic.SpineMontage.T> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">spine</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">spine</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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


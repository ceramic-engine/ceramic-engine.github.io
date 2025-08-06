---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineMontageDefaults
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SpineMontageDefaults/
---

# SpineMontageDefaults

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineMontageDefaults.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineMontageDefaults</strong> (Class)</div>

Default configuration values for animations in a SpineMontage.

This class defines fallback values that are used when individual animations
don't specify their own values for certain properties. It helps reduce
repetition by establishing common settings that apply to most animations
in a montage.

Individual animations can override any of these defaults by providing
their own values in their SpineMontageAnimation configuration.

```haxe
var montage = new SpineMontage<HeroState>({
    defaults: {
        track: 0,
        speed: 1.0,
        loop: false,
        skin: "default"
    },
    animations: {
        // This will use all defaults
        IDLE: { anim: "idle_animation" },

        // This overrides just the loop default
        WALK: { anim: "walk_animation", loop: true },

        // This overrides speed and adds a specific skin
        RUN: { anim: "run_animation", speed: 1.5, skin: "armored" }
    }
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="skin"><div class="plugin-name">spine</div><code><span class="field-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#skin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The default skin to apply to animations.

Skins in Spine allow you to change the visual appearance of a skeleton
by swapping out attachments (images). Common uses include:
- Character customization (different outfits, equipment)
- Team colors in multiplayer games
- Seasonal variations

If null, the Spine skeleton's default skin will be used.
Individual animations can override this with their own skin setting.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">spine</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether animations should loop by default.

- false (default): Animations play once and stop, potentially triggering
completion callbacks and transitions to next animations
- true: Animations repeat indefinitely until explicitly stopped or changed

This is particularly useful when most animations in your montage are either
mostly looping (idle, walk, run) or mostly one-shot (jump, attack, death).
Set the default to match your most common case.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="speed"><div class="plugin-name">spine</div><code><span class="field-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The default playback speed multiplier for animations.

- 1.0 (default): Normal playback speed as designed in Spine
- 2.0: Double speed
- 0.5: Half speed
- 0: Paused (animations don't progress)

This is useful for:
- Adjusting all animations to match game speed
- Creating slow-motion or fast-forward effects
- Fine-tuning animation timing without re-exporting from Spine

Individual animations can override this to play at different speeds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="track"><div class="plugin-name">spine</div><code><span class="field-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#track"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The default animation track index to use.

Spine supports multiple animation tracks for layering animations:
- Track 0 (default): Primary animation track for main body movement
- Track 1+: Additional tracks for overlaying animations (e.g., facial
expressions, weapon swings, special effects)

In most cases, track 0 is the correct choice for primary animations.
Use higher tracks when you need animations to play simultaneously
(e.g., running while reloading a weapon).

Individual animations can specify their own track to enable complex
layered animation scenarios.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">track</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `skin` | [Null](/api-docs/clay-native/Null/)<[Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)>> | *(optional)* | * The default skin to apply to animations. * Skins in Spine allow you to change the visual appearance of a skeleton by swapping out attachments (images). Common uses include: - Character customization (different outfits, equipment) - Team colors in multiplayer games - Seasonal variations * If null, the Spine skeleton's default skin will be used. Individual animations can override this with their own skin setting. |
| `loop` | [Null](/api-docs/clay-native/Null/)<[Bool](/api-docs/clay-native/Bool/)> | *(optional)* | * Whether animations should loop by default. * - false (default): Animations play once and stop, potentially triggering completion callbacks and transitions to next animations - true: Animations repeat indefinitely until explicitly stopped or changed * This is particularly useful when most animations in your montage are either mostly looping (idle, walk, run) or mostly one-shot (jump, attack, death). Set the default to match your most common case. |
| `speed` | [Null](/api-docs/clay-native/Null/)<[Float](/api-docs/clay-native/Float/)> | *(optional)* | * The default playback speed multiplier for animations. * - 1.0 (default): Normal playback speed as designed in Spine - 2.0: Double speed - 0.5: Half speed - 0: Paused (animations don't progress) * This is useful for: - Adjusting all animations to match game speed - Creating slow-motion or fast-forward effects - Fine-tuning animation timing without re-exporting from Spine * Individual animations can override this to play at different speeds. |
| `track` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | * The default animation track index to use. * Spine supports multiple animation tracks for layering animations: - Track 0 (default): Primary animation track for main body movement - Track 1+: Additional tracks for overlaying animations (e.g., facial expressions, weapon swings, special effects) * In most cases, track 0 is the correct choice for primary animations. Use higher tracks when you need animations to play simultaneously (e.g., running while reloading a weapon). * Individual animations can specify their own track to enable complex layered animation scenarios. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


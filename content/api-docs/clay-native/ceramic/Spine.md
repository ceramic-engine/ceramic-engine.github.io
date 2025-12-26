---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Spine
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Spine/
---

# Spine

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/Spine.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <strong>ceramic.Spine</strong> (Class)</div>

Spine animation runtime for Ceramic engine.

This class provides full support for Spine 2D skeletal animations, including:
- Animation playback with mixing and blending
- Skin switching at runtime
- Slot customization and visibility control
- Hierarchical Spine composition (Spine within Spine)
- Attachment rendering (regions, meshes, clipping)
- Event handling and animation completion callbacks
- Tint black support for advanced coloring
- Bounding box hit testing

## Basic Usage

```haxe
var spine = new Spine();
spine.spineData = assets.spine('hero');
spine.animation = 'walk';
spine.loop = true;
add(spine);
```

## Advanced Features

- **Slot Control**: Hide/show specific slots, or use slot whitelists
- **Spine Binding**: Attach child Spine animations to parent slots
- **Custom Rendering**: Hook into slot update events for custom drawing
- **Performance**: Automatic freezing when animations complete

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/SpineData/">SpineData</a>, <a href="/api-docs/clay-native/ceramic/SpineAsset/">SpineAsset</a>, <a href="/api-docs/clay-native/ceramic/SpineSystem/">SpineSystem</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="globalSlotIndexForName"><div class="plugin-name">spine</div><code><span class="field-name">globalSlotIndexForName</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#globalSlotIndexForName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a globally unique slot index for the given slot name.

Global slot indices are consistent across all skeletons, unlike regular
slot indices which vary by skeleton structure. This enables efficient
slot operations across different Spine instances.

The same slot name always returns the same global index, making it
ideal for slot blacklists, whitelists, and cross-skeleton references.



| Name | Type | Description |
|------|------|-------------|
| `slotName` | [String](/api-docs/clay-native/String/) | The name of the slot  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | A unique global index for this slot name |

## Instance Members

<div class="signature field-var has-description has-plugin" id="renderDirtyAgressive"><div class="plugin-name">spine</div><code><span class="field-name">renderDirtyAgressive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderDirtyAgressive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag to know if render became dirty because of a skin change or a new animation was set.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="renderDirty"><div class="plugin-name">spine</div><code><span class="field-name">renderDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hasSlotsWithTintBlack"><div class="plugin-name">spine</div><code><span class="field-name">hasSlotsWithTintBlack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasSlotsWithTintBlack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether any slot in the skeleton uses tint black coloring.
This is automatically detected when the skeleton data is loaded.
When true, a special shader is used to support dark tinting.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skeletonOriginX"><div class="plugin-name">spine</div><code><span class="field-name">skeletonOriginX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skeletonOriginX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal origin point of the skeleton (0-1).
Determines the pivot point for positioning and transformations.
Default is 0.5 (center).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skeletonOriginY"><div class="plugin-name">spine</div><code><span class="field-name">skeletonOriginY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skeletonOriginY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The vertical origin point of the skeleton (0-1).
Determines the pivot point for positioning and transformations.
Default is 0.5 (center).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skeletonScale"><div class="plugin-name">spine</div><code><span class="field-name">skeletonScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skeletonScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uniform scale factor applied to the entire skeleton.
Use this to resize the skeleton without affecting individual bone scales.
Default is 1.0 (original size).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="forceTintBlack"><div class="plugin-name">spine</div><code><span class="field-name">forceTintBlack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#forceTintBlack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forces the use of tint black shader even if the skeleton doesn't require it.
Enable this if you need dark tinting support for dynamically created attachments.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hiddenSlots"><div class="plugin-name">spine</div><code><span class="field-name">hiddenSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a></code><a class="header-anchor" href="#hiddenSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of slot indices to hide (blacklist).
Slots in this map will not be rendered.
Use `Spine.globalSlotIndexForName()` to get slot indices.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visibleSlots"><div class="plugin-name">spine</div><code><span class="field-name">visibleSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a></code><a class="header-anchor" href="#visibleSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of slot indices to show (whitelist).
When set, only slots in this map will be rendered.
Use `Spine.globalSlotIndexForName()` to get slot indices.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabledSlots"><div class="plugin-name">spine</div><code><span class="field-name">disabledSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntBoolMap/" class="type-link">IntBoolMap</a></code><a class="header-anchor" href="#disabledSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of slot indices that are completely disabled.
Disabled slots are skipped entirely during rendering.
Use `Spine.globalSlotIndexForName()` to get slot indices.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="animationTriggers"><div class="plugin-name">spine</div><code><span class="field-name">animationTriggers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#animationTriggers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of animation names to trigger animations.
When an animation event matches a key in this map,
the corresponding animation will be triggered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hitWithSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">hitWithSlotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hitWithSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specifies which slot index to use for hit testing.
Set to -1 (default) to use the visual's bounds instead.
This allows precise hit detection using a specific slot's attachment.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hitWithFirstBoundingBox"><div class="plugin-name">spine</div><code><span class="field-name">hitWithFirstBoundingBox</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitWithFirstBoundingBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, uses the first bounding box attachment for hit testing.
This provides accurate collision detection for complex shapes.
Overrides `hitWithSlotIndex` when enabled.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderWhenInvisible"><div class="plugin-name">spine</div><code><span class="field-name">renderWhenInvisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderWhenInvisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, forces rendering even when the visual is not visible.
Useful for animations that need to continue updating off-screen.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hasParentSpine"><div class="plugin-name">spine</div><code><span class="field-name">hasParentSpine</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasParentSpine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this Spine instance is a child of another Spine animation.
Child animations are managed and rendered by their parent.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global tint color applied to the entire skeleton.
Multiplied with individual slot and attachment colors.
Default is WHITE (no tinting).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoRenderOnAnimate"><div class="plugin-name">spine</div><code><span class="field-name">autoRenderOnAnimate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoRenderOnAnimate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, forces an immediate render after calling `animate()`.
Useful for ensuring the first frame is displayed immediately.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spineData"><div class="plugin-name">spine</div><code><span class="field-name">spineData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpineData/" class="type-link">SpineData</a></code><a class="header-anchor" href="#spineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine skeleton data containing all animations, bones, and slots.
Setting this property loads a new skeleton and resets the animation state.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skin"><div class="plugin-name">spine</div><code><span class="field-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#skin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current skin applied to the skeleton.
Skins allow swapping attachment sets at runtime (e.g., different armor sets).
Set to null to use the default skin.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="animation"><div class="plugin-name">spine</div><code><span class="field-name">animation</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the currently playing animation.
Setting this property starts the animation immediately.
Set to null to clear the animation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nextAnimations"><div class="plugin-name">spine</div><code><span class="field-name">nextAnimations</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nextAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of animation names to play sequentially after the current animation.
Each animation in the chain will play once before moving to the next.
The `finishCurrentAnimationChain` event fires when all animations complete.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">spine</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the current animation should loop continuously.
Only applies to the main animation, not animations in `nextAnimations`.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skeleton"><div class="plugin-name">spine</div><code><span class="field-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skeleton/" class="type-link">spine.Skeleton</a></code><a class="header-anchor" href="#skeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine skeleton instance containing the current pose.
Provides access to bones, slots, and attachments for runtime manipulation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skeletonData"><div class="plugin-name">spine</div><code><span class="field-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SkeletonData/" class="type-link">spine.SkeletonData</a></code><a class="header-anchor" href="#skeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton data containing all setup pose information.
This includes bones, slots, animations, and skins definitions.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="state"><div class="plugin-name">spine</div><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/AnimationState/" class="type-link">spine.AnimationState</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The animation state managing animation playback and mixing.
Use this for advanced animation control like layering multiple animations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="stateData"><div class="plugin-name">spine</div><code><span class="field-name">stateData</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/AnimationStateData/" class="type-link">spine.AnimationStateData</a></code><a class="header-anchor" href="#stateData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configuration for animation mixing (crossfading) durations.
Defines how long transitions between animations should take.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoUpdate"><div class="plugin-name">spine</div><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls automatic animation updates each frame.
Set to false if you need manual control over update timing.
Note: Use `paused` to pause animations, not this property.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pausedOrFrozen"><div class="plugin-name">spine</div><code><span class="field-name">pausedOrFrozen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pausedOrFrozen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether the animation is currently paused or frozen.
This is a combination of the `paused` and `frozen` states.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoFreeze"><div class="plugin-name">spine</div><code><span class="field-name">autoFreeze</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoFreeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables automatic freezing when animations complete.
Frozen animations stop updating to improve performance.
The animation resumes when a new animation is set.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paused"><div class="plugin-name">spine</div><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses the animation at its current frame.
The animation can be resumed by setting this to false.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frozen"><div class="plugin-name">spine</div><code><span class="field-name">frozen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#frozen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether the animation is frozen (auto-paused after completion).
Frozen animations automatically resume when a new animation is set.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="resetAtChange"><div class="plugin-name">spine</div><code><span class="field-name">resetAtChange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resetAtChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, resets the skeleton to setup pose when animations change.
This ensures clean transitions between animations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="skeletonOrigin"><div class="plugin-name">spine</div><code><span class="field-name">skeletonOrigin</span><span class="parenthesis">(</span><span class="arg-name">skeletonOriginX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">skeletonOriginY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skeletonOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the skeleton's origin point for positioning.
Values are normalized (0-1) where 0.5 is center.



| Name | Type | Description |
|------|------|-------------|
| `skeletonOriginX` | [Float](/api-docs/clay-native/Float/) | Horizontal origin (0=left, 0.5=center, 1=right)  |
| `skeletonOriginY` | [Float](/api-docs/clay-native/Float/) | Vertical origin (0=top, 0.5=center, 1=bottom) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">spine</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeContent"><div class="plugin-name">spine</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeBounds"><div class="plugin-name">spine</div><code><span class="field-name">computeBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="animate"><div class="plugin-name">spine</div><code><span class="field-name">animate</span><span class="parenthesis">(</span><span class="arg-name">animationName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trackIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trackTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#animate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts playing an animation on the specified track.

This is the main method for controlling animation playback. Animations can be
played on multiple tracks for layering effects (e.g., walk + shoot).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `animationName` | [String](/api-docs/clay-native/String/) | | Name of the animation to play, or null for empty animation  |
| `loop` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether the animation should repeat continuously  |
| `trackIndex` | [Int](/api-docs/clay-native/Int/) | `0` | The track to play the animation on (default 0)  |
| `trackTime` | [Float](/api-docs/clay-native/Float/) | `-1` | Starting time of the animation in seconds (default -1 for beginning) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="forceRender"><div class="plugin-name">spine</div><code><span class="field-name">forceRender</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">muteEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forceRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forces an immediate render of the current animation state.

This bypasses normal update cycles and renders the skeleton immediately.
Useful for capturing specific animation frames or ensuring visual updates.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `muteEvents` | [Bool](/api-docs/clay-native/Bool/) | `true` | Whether to suppress animation events during rendering |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reset"><div class="plugin-name">spine</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the skeleton to its setup pose.

This clears all animation data and returns bones and slots to their
default positions and values as defined in the Spine project.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">spine</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the Spine animation by the given delta time.

This method is called automatically each frame if `autoUpdate` is true.
It updates the animation state, applies it to the skeleton, and renders
the result. Child Spine instances are updated by their parent.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="canFreeze"><div class="plugin-name">spine</div><code><span class="field-name">canFreeze</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canFreeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the animation can be frozen for performance optimization.

An animation can freeze when all tracks have completed their non-looping
animations. Frozen animations stop updating until a new animation is set.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if the animation has no active tracks that need updating |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="add"><div class="plugin-name">spine</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a child visual. If the child is a spine animation,
it will be managed by its parent and compositing becomes possible.

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remove"><div class="plugin-name">spine</div><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onUpdateSlotWithName"><div class="plugin-name">spine</div><code><span class="field-name">onUpdateSlotWithName</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onUpdateSlotWithName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registers a handler for updates to a specific slot by name.

This is more efficient than the general `updateSlot` event as it only
fires for the specified slot, reducing overhead for complex skeletons.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> | Optional owner entity for automatic cleanup  |
| `slotName` | [String](/api-docs/clay-native/String/) | Name of the slot to monitor  |
| `handleInfo` | Function | Handler function called when the slot updates |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onUpdateSlotWithGlobalIndex"><div class="plugin-name">spine</div><code><span class="field-name">onUpdateSlotWithGlobalIndex</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onUpdateSlotWithGlobalIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registers a handler for updates to a specific slot by global index.

This is the most efficient way to monitor specific slots, using
pre-computed global indices for direct lookup.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> | Optional owner entity for automatic cleanup  |
| `index` | [Int](/api-docs/clay-native/Int/) | Global slot index (use `globalSlotIndexForName()`)  |
| `handleInfo` | Function | Handler function called when the slot updates |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="offUpdateSlotWithName"><div class="plugin-name">spine</div><code><span class="field-name">offUpdateSlotWithName</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offUpdateSlotWithName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `slotName` | [String](/api-docs/clay-native/String/) | |
| `handleInfo` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="offUpdateSlotWithGlobalIndex"><div class="plugin-name">spine</div><code><span class="field-name">offUpdateSlotWithGlobalIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offUpdateSlotWithGlobalIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-native/Int/) | |
| `handleInfo` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onUpdateVisibleSlotWithName"><div class="plugin-name">spine</div><code><span class="field-name">onUpdateVisibleSlotWithName</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onUpdateVisibleSlotWithName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `onUpdateSlotWithName`, but fired only for visible slots (`drawDefault=true`)

| Name | Type |
|------|------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> |
| `slotName` | [String](/api-docs/clay-native/String/) |
| `handleInfo` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="onUpdateVisibleSlotWithGlobalIndex"><div class="plugin-name">spine</div><code><span class="field-name">onUpdateVisibleSlotWithGlobalIndex</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onUpdateVisibleSlotWithGlobalIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `onUpdateSlotWithGlobalIndex`, but fired only for visible slots (`drawDefault=true`)

| Name | Type |
|------|------|
| `owner` | [Null](/api-docs/clay-native/Null/)<[Entity](/api-docs/clay-native/ceramic/Entity/)> |
| `index` | [Int](/api-docs/clay-native/Int/) |
| `handleInfo` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="offUpdateVisibleSlotWithName"><div class="plugin-name">spine</div><code><span class="field-name">offUpdateVisibleSlotWithName</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offUpdateVisibleSlotWithName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `slotName` | [String](/api-docs/clay-native/String/) | |
| `handleInfo` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="offUpdateVisibleSlotWithGlobalIndex"><div class="plugin-name">spine</div><code><span class="field-name">offUpdateVisibleSlotWithGlobalIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleInfo</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offUpdateVisibleSlotWithGlobalIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-native/Int/) | |
| `handleInfo` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindParentSlot"><div class="plugin-name">spine</div><code><span class="field-name">bindParentSlot</span><span class="parenthesis">(</span><span class="arg-name">parentSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/BindSlotOptions/" class="type-link">BindSlotOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindParentSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a parent Spine slot to this child Spine instance.

This enables Spine-in-Spine composition, where child animations follow
parent slot transformations. Common uses include:
- Weapons attached to hands
- Armor pieces following body parts
- Modular character systems



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `parentSlot` | [String](/api-docs/clay-native/String/) | | Name of the parent slot to bind to  |
| `options` | [Null](/api-docs/clay-native/Null/)<[BindSlotOptions](/api-docs/clay-native/ceramic/BindSlotOptions/)> | *(optional)* | Optional binding configuration (local slot, flipping) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unbindParentSlot"><div class="plugin-name">spine</div><code><span class="field-name">unbindParentSlot</span><span class="parenthesis">(</span><span class="arg-name">parentSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindParentSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a parent slot binding.

This disconnects the child Spine from following the specified parent slot.



| Name | Type | Description |
|------|------|-------------|
| `parentSlot` | [String](/api-docs/clay-native/String/) | Name of the parent slot to unbind from |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="listener"><div class="plugin-name">spine</div><code><span class="field-name">listener</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpineListener/" class="type-link">SpineListener</a></code><a class="header-anchor" href="#listener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal listener that handles Spine animation state events.
Forwards animation callbacks to the appropriate event handlers.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slotMeshes"><div class="plugin-name">spine</div><code><span class="field-name">slotMeshes</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Mesh/" class="type-link">Mesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#slotMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps slot indices to their corresponding mesh objects.
Each slot that renders geometry gets a Mesh for efficient GPU rendering.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slotInfo"><div class="plugin-name">spine</div><code><span class="field-name">slotInfo</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SlotInfo/" class="type-link">SlotInfo</a></code><a class="header-anchor" href="#slotInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reusable SlotInfo object for slot update events.
Avoids creating new objects each frame for performance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="subSpines"><div class="plugin-name">spine</div><code><span class="field-name">subSpines</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Spine</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#subSpines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of child Spine animations attached to this parent.
Enables hierarchical animation composition where child animations follow parent slots.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="subDepthStep"><div class="plugin-name">spine</div><code><span class="field-name">subDepthStep</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#subDepthStep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Depth increment between sub-animations to prevent z-fighting.
Each child slot gets a slightly different depth for proper layering.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundParentSlots"><div class="plugin-name">spine</div><code><span class="field-name">boundParentSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/BindSlot/" class="type-link">ceramic._Spine.BindSlot</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundParentSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps parent slot indices to arrays of child slot binding information.
Used for Spine-in-Spine composition where child animations follow parent slots.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundChildSlots"><div class="plugin-name">spine</div><code><span class="field-name">boundChildSlots</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/BindSlot/" class="type-link">ceramic._Spine.BindSlot</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundChildSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps child slot indices to their parent binding information.
Computed from boundParentSlots for efficient lookup during rendering.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundChildSlotsDirty"><div class="plugin-name">spine</div><code><span class="field-name">boundChildSlotsDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#boundChildSlotsDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating that boundChildSlots needs to be recomputed.
Set when parent slot bindings are modified.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalBoundParentSlotGlobalIndex"><div class="plugin-name">spine</div><code><span class="field-name">globalBoundParentSlotGlobalIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#globalBoundParentSlotGlobalIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global index of the parent slot that this entire Spine follows.
When set, all child slots transform relative to this parent slot.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalBoundParentSlot"><div class="plugin-name">spine</div><code><span class="field-name">globalBoundParentSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Slot/" class="type-link">spine.Slot</a></code><a class="header-anchor" href="#globalBoundParentSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the actual parent slot object being followed.
Updated during rendering to track the parent slot's current state.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalBoundParentSlotDepth"><div class="plugin-name">spine</div><code><span class="field-name">globalBoundParentSlotDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#globalBoundParentSlotDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering depth of the global parent slot.
Child animations render relative to this depth.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalBoundParentSlotVisible"><div class="plugin-name">spine</div><code><span class="field-name">globalBoundParentSlotVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#globalBoundParentSlotVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the global parent slot is currently visible.
Child animations are hidden when their parent slot is not visible.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="setupBoneTransforms"><div class="plugin-name">spine</div><code><span class="field-name">setupBoneTransforms</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#setupBoneTransforms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores the setup pose transforms for each bone.
Used for accurate child animation positioning relative to parent slots.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="firstBoundingBoxSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">firstBoundingBoxSlotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#firstBoundingBoxSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the first slot with a bounding box attachment found during rendering.
Used for hitWithFirstBoundingBox functionality.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipper"><div class="plugin-name">spine</div><code><span class="field-name">clipper</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/utils/SkeletonClipping/" class="type-link">spine.utils.SkeletonClipping</a></code><a class="header-anchor" href="#clipper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles clipping attachment processing for rendering masked regions.
Clips slot geometry to defined shapes for visual effects.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="clipShape"><div class="plugin-name">spine</div><code><span class="field-name">clipShape</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Shape/" class="type-link">Shape</a></code><a class="header-anchor" href="#clipShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current clipping shape being applied during rendering.
Generated from clipping attachments in the skeleton.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slotClips"><div class="plugin-name">spine</div><code><span class="field-name">slotClips</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Shape/" class="type-link">Shape</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#slotClips"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps slot indices to their clipping shapes.
Caches clipping geometry for performance.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="muteEvents"><div class="plugin-name">spine</div><code><span class="field-name">muteEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#muteEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, suppresses animation events from being fired.
Used during forced rendering to prevent unwanted event callbacks.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="deferEvents"><div class="plugin-name">spine</div><code><span class="field-name">deferEvents</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#deferEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, defers event emission until the next frame.
Prevents issues with events fired during rendering.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderScheduled"><div class="plugin-name">spine</div><code><span class="field-name">renderScheduled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderScheduled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating whether a render operation is already scheduled.
Prevents multiple render operations from being queued.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="resetSkeleton"><div class="plugin-name">spine</div><code><span class="field-name">resetSkeleton</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resetSkeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flag indicating that the skeleton should be reset to setup pose on next update.
Set when resetAtChange is true and a new animation starts.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalSlotIndexFromSkeletonSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">globalSlotIndexFromSkeletonSlotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#globalSlotIndexFromSkeletonSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps skeleton-specific slot indices to global slot indices.
Enables efficient slot operations across different skeleton structures.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="updateSlotWithNameDispatchers"><div class="plugin-name">spine</div><code><span class="field-name">updateSlotWithNameDispatchers</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/DispatchSlotInfo/" class="type-link">ceramic._Spine.DispatchSlotInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#updateSlotWithNameDispatchers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps global slot indices to their event dispatchers for slot updates.
Enables efficient per-slot event handling without checking all slots.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="updateSlotWithNameDispatchersAsList"><div class="plugin-name">spine</div><code><span class="field-name">updateSlotWithNameDispatchersAsList</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/DispatchSlotInfo/" class="type-link">ceramic._Spine.DispatchSlotInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#updateSlotWithNameDispatchersAsList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array version of updateSlotWithNameDispatchers for efficient iteration.
Kept in sync with the map for cleanup operations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="updateVisibleSlotWithNameDispatchers"><div class="plugin-name">spine</div><code><span class="field-name">updateVisibleSlotWithNameDispatchers</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/IntMap/" class="type-link">IntMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/DispatchSlotInfo/" class="type-link">ceramic._Spine.DispatchSlotInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#updateVisibleSlotWithNameDispatchers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maps global slot indices to their event dispatchers for visible slot updates.
Only fires for slots that are actually being rendered.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="updateVisibleSlotWithNameDispatchersAsList"><div class="plugin-name">spine</div><code><span class="field-name">updateVisibleSlotWithNameDispatchersAsList</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/_Spine/DispatchSlotInfo/" class="type-link">ceramic._Spine.DispatchSlotInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#updateVisibleSlotWithNameDispatchersAsList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array version of updateVisibleSlotWithNameDispatchers for efficient iteration.
Kept in sync with the map for cleanup operations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="intToFloatColor"><div class="plugin-name">spine</div><code><span class="field-name">intToFloatColor</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#intToFloatColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes the ABGR int color as a float. The high bits are masked to avoid using floats in the NaN range, which unfortunately
 * means the full range of alpha cannot be used.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitComplete"><div class="plugin-name">spine</div><code><span class="field-name">emitComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a Spine animation completes a full cycle.
For looped animations, this is fired at the end of each loop.
For non-looped animations, this is fired when the animation reaches its end.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBeginRender"><div class="plugin-name">spine</div><code><span class="field-name">emitBeginRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBeginRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the Spine instance begins rendering its slots.
Use this to perform setup before slot rendering begins.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitEndRender"><div class="plugin-name">spine</div><code><span class="field-name">emitEndRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitEndRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the Spine instance finishes rendering all slots.
Use this to perform cleanup or post-processing after rendering.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateSlot"><div class="plugin-name">spine</div><code><span class="field-name">emitUpdateSlot</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SlotInfo/" class="type-link">SlotInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted for each slot that is about to be rendered.
This includes both visible and invisible slots.
Modify the `info` parameter to customize slot rendering.



| Name | Type | Description |
|------|------|-------------|
| `info` | [SlotInfo](/api-docs/clay-native/ceramic/SlotInfo/) | Contains slot data and transform information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateVisibleSlot"><div class="plugin-name">spine</div><code><span class="field-name">emitUpdateVisibleSlot</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SlotInfo/" class="type-link">SlotInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateVisibleSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted only for visible slots that will be rendered.
This is a filtered version of `updateSlot` that excludes hidden slots.



| Name | Type | Description |
|------|------|-------------|
| `info` | [SlotInfo](/api-docs/clay-native/ceramic/SlotInfo/) | Contains slot data and transform information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateSkeleton"><div class="plugin-name">spine</div><code><span class="field-name">emitUpdateSkeleton</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateSkeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted before the skeleton's animation state is updated.
Use this to modify skeleton properties before animation is applied.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdateWorldTransform"><div class="plugin-name">spine</div><code><span class="field-name">emitUpdateWorldTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdateWorldTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted before world transforms are calculated for all bones.
Hook into this event to apply custom bone transformations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFinishCurrentAnimationChain"><div class="plugin-name">spine</div><code><span class="field-name">emitFinishCurrentAnimationChain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFinishCurrentAnimationChain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a chain of animations completes without interruption.
This is fired when all animations in `nextAnimations` have finished.
If the animation chain is interrupted, this event is not fired.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitApplyNextAnimation"><div class="plugin-name">spine</div><code><span class="field-name">emitApplyNextAnimation</span><span class="parenthesis">(</span><span class="arg-name">animation</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitApplyNextAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an animation from `nextAnimations` is applied.
This allows tracking of animation transitions in a chain.



| Name | Type | Description |
|------|------|-------------|
| `animation` | [String](/api-docs/clay-native/String/) | The name of the animation being applied |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSpineEvent"><div class="plugin-name">spine</div><code><span class="field-name">emitSpineEvent</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/TrackEntry/" class="type-link">spine.TrackEntry</a><span class="operator">,</span> <span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Event/" class="type-link">spine.Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSpineEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a Spine event keyframe is triggered during animation.
Spine events are defined in the Spine editor and triggered at specific times.



| Name | Type | Description |
|------|------|-------------|
| `entry` | [spine.TrackEntry](/api-docs/clay-native/spine/TrackEntry/) | The track entry that triggered the event  |
| `event` | [spine.Event](/api-docs/clay-native/spine/Event/) | The Spine event data |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="runScheduledRender"><div class="plugin-name">spine</div><code><span class="field-name">runScheduledRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runScheduledRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="runScheduledRenderDyn"><div class="plugin-name">spine</div><code><span class="field-name">runScheduledRenderDyn</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runScheduledRenderDyn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic reference to the scheduled render function.
Cached to avoid creating new closures each time.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearMeshes"><div class="plugin-name">spine</div><code><span class="field-name">clearMeshes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="emitCompleteIfNotDestroyed"><div class="plugin-name">spine</div><code><span class="field-name">emitCompleteIfNotDestroyed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCompleteIfNotDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitComplete"><div class="plugin-name">spine</div><code><span class="field-name">willEmitComplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitComplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateSkeleton"><div class="plugin-name">spine</div><code><span class="field-name">updateSkeleton</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSkeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update skeleton with the given delta time.

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="render"><div class="plugin-name">spine</div><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">setup</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Process spine draw order and output quads and meshes.

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-native/Float/) |
| `z` | [Float](/api-docs/clay-native/Float/) |
| `setup` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateSlotIndexMappings"><div class="plugin-name">spine</div><code><span class="field-name">updateSlotIndexMappings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSlotIndexMappings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitUpdateSlot"><div class="plugin-name">spine</div><code><span class="field-name">willEmitUpdateSlot</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SlotInfo/" class="type-link">SlotInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitUpdateSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [SlotInfo](/api-docs/clay-native/ceramic/SlotInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitUpdateVisibleSlot"><div class="plugin-name">spine</div><code><span class="field-name">willEmitUpdateVisibleSlot</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SlotInfo/" class="type-link">SlotInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitUpdateVisibleSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [SlotInfo](/api-docs/clay-native/ceramic/SlotInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeBoundChildSlots"><div class="plugin-name">spine</div><code><span class="field-name">computeBoundChildSlots</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeBoundChildSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute `boundChildSlots` from `boundParentSlots` to make it more efficient
to gather parent slot transformations when drawing child animation.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="spineComputeVisibility"><div class="plugin-name">spine</div><code><span class="field-name">spineComputeVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#spineComputeVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeVisibility"><div class="plugin-name">spine</div><code><span class="field-name">computeVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hitTest"><div class="plugin-name">spine</div><code><span class="field-name">hitTest</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `matrix` | [Transform](/api-docs/clay-native/ceramic/Transform/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


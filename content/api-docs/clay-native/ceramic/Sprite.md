---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: Sprite
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Sprite/
---

# Sprite

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/Sprite.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <strong>ceramic.Sprite</strong> (Class)</div>

Sprite visual that displays animations from sprite sheets.
Supports frame-by-frame animation playback with timing control,
easing, and automatic size computation from frames.

The sprite can play animations from SpriteSheet data which can be
loaded from various formats including Aseprite JSON exports.

Example usage:
```haxe
var sprite = new Sprite();
sprite.sheet = assets.sheet("character");
sprite.animation = "walk";
sprite.loop = true;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="autoComputeSize"><div class="plugin-name">sprite</div><code><span class="field-name">autoComputeSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoComputeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to automatically compute the sprite's size from the
current animation frame. When true, the sprite will resize
itself to match the original frame dimensions.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="region"><div class="plugin-name">sprite</div><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureAtlasRegion/" class="type-link">TextureAtlasRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current texture region being displayed.
This is automatically updated during animation playback.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="animationName"><div class="plugin-name">sprite</div><code><span class="field-name">animationName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#animationName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the current animation as a string.
This is the string representation of the `animation` property.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="easing"><div class="plugin-name">sprite</div><code><span class="field-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional easing function to apply to animation playback.
When set, the animation timeline will be transformed by this easing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="timeScale"><div class="plugin-name">sprite</div><code><span class="field-name">timeScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#timeScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time scale multiplier for animation playback speed.
Values > 1.0 speed up the animation, < 1.0 slow it down.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="animation"><div class="plugin-name">sprite</div><code><span class="field-name">animation</span><span class="operator">:</span> <span class="type-name">ceramic.Sprite.T</span></code><a class="header-anchor" href="#animation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current animation being played.
Can be a String or an enum value depending on the type parameter T.
Setting this property resets the animation time to 0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frameOffsetX"><div class="plugin-name">sprite</div><code><span class="field-name">frameOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset applied to the frame position.
Useful for fine-tuning sprite alignment.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frameOffsetY"><div class="plugin-name">sprite</div><code><span class="field-name">frameOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frameOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset applied to the frame position.
Useful for fine-tuning sprite alignment.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sheet"><div class="plugin-name">sprite</div><code><span class="field-name">sheet</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a></code><a class="header-anchor" href="#sheet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sprite sheet containing animation data.
Setting this property resets the animation time.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="autoUpdate"><div class="plugin-name">sprite</div><code><span class="field-name">autoUpdate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` if you want to disable auto update on this sprite object.
If auto update is disabled, you become responsible to explicitly call
`update(delta)` at every frame yourself. Use this if you want to have control over
when the animation update is actually happening. Don't use it to pause animation.
(animation can be paused with `paused` property instead)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paused"><div class="plugin-name">sprite</div><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is this sprite paused?
When true, animation playback is suspended but time is preserved.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loop"><div class="plugin-name">sprite</div><code><span class="field-name">loop</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is this sprite looping?
When true, animation restarts from beginning after completion.
When false, animation stops on the last frame.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="quad"><div class="plugin-name">sprite</div><code><span class="field-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The internal quad used to render the sprite frame.
This is automatically managed by the sprite.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="time"><div class="plugin-name">sprite</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current playback time in seconds within the animation.
Automatically increments during update unless paused.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="currentAnimation"><div class="plugin-name">sprite</div><code><span class="field-name">currentAnimation</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/" class="type-link">SpriteSheetAnimation</a></code><a class="header-anchor" href="#currentAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current animation data from the sprite sheet.
Automatically resolved from animationName when accessed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="frameOffset"><div class="plugin-name">sprite</div><code><span class="field-name">frameOffset</span><span class="parenthesis">(</span><span class="arg-name">frameOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frameOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#frameOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set both frame offset values at once.


| Name | Type | Description |
|------|------|-------------|
| `frameOffsetX` | [Float](/api-docs/clay-native/Float/) | Horizontal offset  |
| `frameOffsetY` | [Float](/api-docs/clay-native/Float/) | Vertical offset |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSizeFromAnimation"><div class="plugin-name">sprite</div><code><span class="field-name">computeSizeFromAnimation</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSizeFromAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the sprite size based on the first frame of the current animation.
This is called automatically when autoComputeSize is true and an animation is set.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">sprite</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update the sprite animation.
This is called automatically each frame if autoUpdate is true.


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last update in seconds |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeContent"><div class="plugin-name">sprite</div><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the visual content of the sprite.
Updates the internal quad position and texture based on the current frame.
This is called automatically when contentDirty is true.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">sprite</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy this sprite and remove it from the update system.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Sprite instance.
The sprite is automatically added to the SpriteSystem for updates.

## Private Members

<div class="signature field-var has-description has-plugin" id="currentAnimationDirty"><div class="plugin-name">sprite</div><code><span class="field-name">currentAnimationDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#currentAnimationDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag tracking when animation data needs to be refreshed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="currentAnimationFrame"><div class="plugin-name">sprite</div><code><span class="field-name">currentAnimationFrame</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/SpriteSheetFrame/" class="type-link">SpriteSheetFrame</a></code><a class="header-anchor" href="#currentAnimationFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current frame being displayed from the animation.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AudioMixer
target: Unity
permalink: api-docs/unity/ceramic/AudioMixer/
---

# AudioMixer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AudioMixer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.AudioMixer</strong> (Class)</div>

Controls audio properties for a group of sounds.

AudioMixer allows collective control over sounds assigned to the same group,
making it easy to adjust volume, pan, pitch, or mute entire categories of sounds
(e.g., music, sound effects, UI sounds) independently.

Mixers are created automatically when accessed through `app.audio.mixer(index)`
or when a sound's group property is set.

The mixer's settings are multiplied with individual sound settings:
- Final volume = sound.volume × mixer.volume × 2
- Final pan = sound.pan + mixer.pan
- Final pitch = sound.pitch + (mixer.pitch - 1)

```haxe
// Control all sounds in group 1 (e.g., music)
var musicMixer = app.audio.mixer(1);
musicMixer.volume = 0.3;
musicMixer.mute = false;

// Assign sounds to the music group
var bgMusic = assets.sound('background');
bgMusic.group = 1;
bgMusic.play(0, true);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Audio/">Audio</a>, <a href="/api-docs/unity/ceramic/Sound/">Sound</a></div>


## Instance Members

<div class="signature field-var has-description" id="volume"><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Master volume for all sounds in this group.
Range: 0.0 (silent) to 1.0 (full volume)
Default: 0.5
This is multiplied by 2 then multiplied with each sound's individual volume.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pan"><code><span class="field-name">pan</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Master pan adjustment for all sounds in this group.
Range: -1.0 (full left) to 1.0 (full right)
Default: 0.0 (center)
This is added to each sound's individual pan value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pitch"><code><span class="field-name">pitch</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Master pitch adjustment for all sounds in this group.
Default: 1.0 (no change)
The adjustment (pitch - 1) is added to each sound's individual pitch.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mute"><code><span class="field-name">mute</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mute all sounds in this group.
When true, sounds in this group won't play at all.
Useful for quickly toggling categories of sounds on/off.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The group index this mixer controls.
Read-only - set when the mixer is created.

## Private Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Private constructor - mixers are created by the Audio system.
Use `app.audio.mixer(index)` to get or create a mixer.


| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The group index for this mixer |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


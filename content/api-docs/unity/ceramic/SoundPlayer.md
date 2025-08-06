---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SoundPlayer
target: Unity
permalink: api-docs/unity/ceramic/SoundPlayer/
---

# SoundPlayer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SoundPlayer.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SoundPlayer</strong> (Abstract)</div>

Controls an individual sound playback instance.

SoundPlayer represents a single playing instance of a Sound.
It allows real-time control over playback parameters like
volume, pan, pitch, and position.

Instances are created by calling `sound.play()` and remain
valid until the sound finishes playing or is explicitly stopped.

```haxe
// Play a sound and control it
var player = sound.play();
player.volume = 0.8;
player.pan = -0.5;

// Pause and resume
player.pause();
Timer.delay(null, 2.0, () -> player.resume());

// Fade out over 1 second
player.fadeOut(1.0);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Sound/">Sound</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


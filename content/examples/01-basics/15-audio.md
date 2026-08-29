---
layout: examples
category: examples
menu: Basics
title: Audio
permalink: examples/audio/
sample: audio
description: Play sound effects and looped music synthesized at runtime, control volume, pitch, pan, and mute everything with a mixer.
---

Play sound effects and looped music, control `volume`, `pitch` and `pan` live, and mute everything at once with a mixer.

```haxe
// Play a sound
someSound.play();

// Play a looped music and keep a handle on the player
var player = musicSound.play(0, true, 0.5);
player.pitch = 1.2;
player.pan = -0.5;

// Mute every sound of mixer group 0 (the default group)
audio.mixer(0).mute = true;
```

Bonus: every sound of this sample is **synthesized in Haxe at runtime** with `Sound.fromSamplesBuffer()` (see `Synth.hx`), so the whole sample doesn't need a single audio file. In a real project, you would usually load audio files instead: put them in `assets/` and use `assets.add(Sounds.MY_SOUND)`.

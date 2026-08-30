---
layout: examples
category: examples
menu: Basics
title: Audio Filters
permalink: examples/audio-filters/
sample: audio-filters
description: Hold and drag to sweep a low-pass filter over the music in real time, DJ style, while a logo pulses in sync with the beat.
---

**Hold & drag** to sweep a low-pass filter over the music in real time, DJ style: left/right controls the `cutoffFrequency`, up/down the `resonance`. Release to remove the filter.

Audio filters are attached to a **bus**: here the music plays on bus 1 and the filter is added to that same bus, so pressing `B` plays a blip on the default bus 0 that never gets filtered.

```haxe
// Play the music on bus 1
// play(position, loop, volume, pan, pitch, bus)
musicPlayer = musicSound.play(0, true, 0.5, null, null, 1);

// A low-pass filter processing bus 1: only the music gets filtered
var lowPass = new LowPassFilter();
audio.addFilter(lowPass, 1);

// Filter params can be changed live, while the filter is running:
// this is what the pointer sweeps in this example
lowPass.cutoffFrequency = 800;
lowPass.resonance = 2.5;

// When released, the filter is not removed: its params are just reset
// to neutral values that let the sound through unchanged
lowPass.cutoffFrequency = 20000; // well above the audible range
lowPass.resonance = 0.707;       // no resonance
```

The logo pulses on the music beat. Instead of a separate timer that would drift away from the audio, the current beat is derived from the **actual playback position** of the music player, so the pulse stays in sync with what you hear:

```haxe
// In update(): the synth music is 120 BPM, one beat every 0.5 second
var beat = Std.int(musicPlayer.position / 0.5);
if (beat != lastBeat) {
    lastBeat = beat;
    // ... pulse! ...
}
```

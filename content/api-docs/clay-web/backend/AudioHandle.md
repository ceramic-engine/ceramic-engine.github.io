---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioHandle
target: Clay (Web)
permalink: api-docs/clay-web/backend/AudioHandle/
---

# AudioHandle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/AudioHandle.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioHandle</strong> (Typedef)</div>

Handle to an individual audio playback instance in the Clay audio system.

An AudioHandle represents a playing or paused sound instance that can be
controlled independently. Each handle allows you to:
- Control playback (play, pause, stop)
- Adjust volume and pitch
- Query playback position and state
- Apply real-time effects

Handles are obtained when playing a sound through the Audio system and
remain valid until the sound completes or is explicitly stopped. The
handle becomes invalid after the sound finishes playing.

<div class="see"><strong>See:</strong> Audio.play() To obtain an AudioHandle, AudioResource For the underlying audio data</div>



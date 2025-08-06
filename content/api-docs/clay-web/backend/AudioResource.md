---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioResource
target: Clay (Web)
permalink: api-docs/clay-web/backend/AudioResource/
---

# AudioResource

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/AudioResource.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioResource</strong> (Typedef)</div>

Represents loaded audio data in the Clay backend audio system.

An AudioResource contains the decoded audio data that can be played back
multiple times. It serves as the source data for audio playback and is
typically loaded from audio files (WAV, OGG, MP3, etc.).

Key characteristics:
- Immutable after loading - the audio data doesn't change
- Can be played multiple times simultaneously
- Manages memory efficiently with reference counting
- Supports both streaming and preloaded audio data

AudioResource instances are created by the backend when loading audio
assets and are managed by the Ceramic Assets system.

<div class="see"><strong>See:</strong> Audio.play() To play an AudioResource, AudioHandle For controlling individual playback instances, SoundAsset For the high-level audio asset interface</div>



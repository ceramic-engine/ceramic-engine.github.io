---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: AudioFilterBuffer
target: Clay (Native)
permalink: api-docs/clay-native/backend/AudioFilterBuffer/
---

# AudioFilterBuffer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/AudioFilterBuffer.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.AudioFilterBuffer</strong> (Typedef)</div>

Platform-specific audio filter buffer implementation for real-time audio processing.

This abstract type provides a unified interface for accessing audio sample data
across different platforms:
- C++ targets: Uses native pointer access for optimal performance
- JavaScript/Web targets: Uses Float32Array for Web Audio API compatibility

The buffer contains interleaved audio samples as 32-bit floating point values,
typically in the range [-1.0, 1.0]. Audio filters use these buffers to process
audio data in real-time, applying effects like low-pass, high-pass, or custom
DSP algorithms.

<div class="see"><strong>See:</strong> AudioFilter For the filter interface that processes these buffers, AudioFilterWorklet For Web Audio worklet implementations</div>



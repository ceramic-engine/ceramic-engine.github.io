---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Float32Array
target: Clay (Web)
permalink: api-docs/clay-web/backend/Float32Array/
---

# Float32Array

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Float32Array.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Float32Array</strong> (Typedef)</div>

Type alias for Clay's Float32Array implementation.

Float32Array provides a typed array of 32-bit floating point values,
commonly used for:
- WebGL vertex data (positions, colors, texture coordinates)
- Audio sample data processing
- High-performance numeric computations
- Matrix and vector math operations

This maps to the platform-specific implementation:
- JavaScript/Web: Native Float32Array
- C++: Custom buffer implementation with float pointer access

The array provides direct memory access for optimal performance
when interfacing with graphics APIs and audio systems.

<div class="see"><strong>See:</strong> ceramic.Float32Array For the high-level cross-platform interface, UInt8Array For byte-level data access</div>



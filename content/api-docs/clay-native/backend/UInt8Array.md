---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: UInt8Array
target: Clay (Native)
permalink: api-docs/clay-native/backend/UInt8Array/
---

# UInt8Array

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/UInt8Array.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.UInt8Array</strong> (Typedef)</div>

Type alias for Clay's UInt8Array implementation.

UInt8Array provides a typed array of 8-bit unsigned integers (bytes),
commonly used for:
- Raw binary data manipulation
- Image pixel data (RGBA channels)
- File I/O operations
- Network packet construction
- Audio data in 8-bit formats

This maps to the platform-specific implementation:
- JavaScript/Web: Native Uint8Array
- C++: Custom buffer implementation with byte pointer access

The array provides efficient byte-level access to binary data
and is essential for low-level data operations.

<div class="see"><strong>See:</strong> ceramic.UInt8Array For the high-level cross-platform interface, Float32Array For floating-point data arrays</div>



---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: UInt8Array
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/UInt8Array/
---

# UInt8Array

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/UInt8Array.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.UInt8Array</strong> (Typedef)</div>

Platform-specific implementation of an 8-bit unsigned integer array.

This is a type alias that maps to the backend's UInt8Array implementation,
providing a consistent API across different platforms (web, native, Unity).

On web platforms, this typically maps to JavaScript's Uint8Array.
On native platforms, this may map to a custom implementation or haxe.io.Bytes.

UInt8Array is commonly used for:
- Raw binary data manipulation
- Image pixel data (RGBA channels)
- File I/O operations
- Network data buffers
- Audio sample data

Example usage:
```haxe
// Create an array of 256 bytes
var bytes = new UInt8Array(256);

// Set values
bytes[0] = 255;  // Maximum value for uint8
bytes[1] = 128;  // Mid-range value

// Read values
var firstByte = bytes[0];
```

<div class="see"><strong>See:</strong> backend.UInt8Array for the actual implementation, ceramic.Float32Array for 32-bit float arrays</div>



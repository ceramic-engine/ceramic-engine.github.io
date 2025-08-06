---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Flags
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Flags/
---

# Flags

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Flags.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Flags</strong> (Abstract)</div>

Efficient bit flag storage using a single integer.

The Flags abstract provides a type-safe way to store and manipulate boolean
flags using bit operations. Each bit in the underlying integer represents
a boolean value, allowing up to 32 flags to be stored in a single Int.

This is particularly useful for:
- Storing multiple boolean states efficiently
- Passing multiple boolean parameters compactly
- Optimizing memory usage in data structures
- Creating bit masks for filtering operations

Example:
```haxe
var flags = new Flags();
flags.setBool(0, true);  // Set first flag
flags.setBool(2, true);  // Set third flag

if (flags.bool(0)) {
    trace("First flag is set");
}

// Create flags from values
var flags2 = Flags.fromValues(true, false, true); // bits: 101
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/scriptable/ScriptableFlags/">ceramic.scriptable.ScriptableFlags</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`


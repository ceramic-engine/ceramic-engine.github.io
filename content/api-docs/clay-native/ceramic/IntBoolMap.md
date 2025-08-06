---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: IntBoolMap
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/IntBoolMap/
---

# IntBoolMap

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/IntBoolMap.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.IntBoolMap</strong> (Abstract)</div>

A map that uses int as keys and booleans as values.

IntBoolMap is a high-performance map optimized for storing boolean values
with integer keys. It's implemented as an abstract over IntIntMap, storing
booleans as 0 and 1 internally.

Features:
- O(1) average case get/set operations
- Minimal memory overhead
- Optional iteration support
- Zero allocation for boolean operations

Example usage:
```haxe
var flags = new IntBoolMap();
flags.set(42, true);
flags.set(10, false);

if (flags.get(42)) {
    trace("Flag 42 is set");
}

// With iteration support
var iterableFlags = new IntBoolMap(16, 0.5, true);
for (key in iterableFlags.keys()) {
    trace('Flag $key = ${iterableFlags.get(key)}');
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/IntIntMap/">IntIntMap</a>, <a href="/api-docs/clay-native/ceramic/IntFloatMap/">IntFloatMap</a>, <a href="/api-docs/clay-native/ceramic/IntMap/">IntMap</a></div>



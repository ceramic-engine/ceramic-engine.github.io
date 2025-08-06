---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ArrayPointer
target: Headless
permalink: api-docs/headless/elements/ArrayPointer/
---

# ArrayPointer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ArrayPointer.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ArrayPointer</strong> (Typedef)</div>

Function type for accessing and manipulating arrays by reference.

This type definition allows passing arrays between UI elements and field systems
in a functional way, where the array can be both read and written.

Usage example:
```haxe
var myArray = [1, 2, 3];
var pointer:ArrayPointer = (val, erase) -> {
    if (erase) myArray = [];
    else if (val != null) myArray = val;
    return myArray;
};

// Read current value
var current = pointer();

// Set new value
pointer([4, 5, 6]);

// Clear array
pointer(null, true);
```


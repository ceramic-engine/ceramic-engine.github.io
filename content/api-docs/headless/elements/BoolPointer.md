---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: BoolPointer
target: Headless
permalink: api-docs/headless/elements/BoolPointer/
---

# BoolPointer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/BoolPointer.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.BoolPointer</strong> (Typedef)</div>

Function type for accessing and modifying boolean values by reference.

This type definition enables functional-style boolean value manipulation,
commonly used in the elements UI system for two-way data binding between
UI components and data models.

Usage example:
```haxe
var myBool = true;
var pointer:BoolPointer = (val) -> {
    if (val != null) myBool = val;
    return myBool;
};

// Read current value
var current = pointer();

// Set new value
pointer(false);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/BooleanFieldView/">BooleanFieldView</a>, <a href="/api-docs/headless/elements/FieldView/">FieldView</a></div>



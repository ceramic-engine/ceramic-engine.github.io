---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: FloatPointer
target: Clay (Web)
permalink: api-docs/clay-web/elements/FloatPointer/
---

# FloatPointer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/FloatPointer.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.FloatPointer</strong> (Typedef)</div>

Function type for accessing and modifying floating-point values by reference.

This type definition enables functional-style float value manipulation,
commonly used in the elements UI system for two-way data binding between
UI components and numeric data models.

Usage example:
```haxe
var myFloat = 3.14;
var pointer:FloatPointer = (val) -> {
    if (val != null) myFloat = val;
    return myFloat;
};

// Read current value
var current = pointer();

// Set new value
pointer(2.71);
```

<div class="see"><strong>See:</strong> NumberFieldView, SliderView, <a href="/api-docs/clay-web/elements/FieldView/">FieldView</a></div>



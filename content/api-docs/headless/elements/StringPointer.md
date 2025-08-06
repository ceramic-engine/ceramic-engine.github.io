---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: StringPointer
target: Headless
permalink: api-docs/headless/elements/StringPointer/
---

# StringPointer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/StringPointer.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.StringPointer</strong> (Typedef)</div>

Function type for accessing and modifying string values by reference.

This type definition enables functional-style string value manipulation,
commonly used in the elements UI system for two-way data binding between
UI components and text data models. Unlike other pointer types, this includes
an additional erase parameter for special text operations.

Usage example:
```haxe
var myString = "Hello";
var pointer:StringPointer = (val, erase) -> {
    if (val != null) myString = val;
    // Handle erase operation if needed
    if (erase == true) myString = "";
    return myString;
};

// Read current value
var current = pointer();

// Set new value
pointer("World");

// Erase content
pointer(null, true);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/TextFieldView/">TextFieldView</a>, <a href="/api-docs/headless/elements/FieldView/">FieldView</a></div>



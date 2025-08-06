---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: EnumValuePointer
target: Unity
permalink: api-docs/unity/elements/EnumValuePointer/
---

# EnumValuePointer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/EnumValuePointer.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.EnumValuePointer</strong> (Typedef)</div>

Type alias for enum value pointers in the elements UI system.

This type definition represents a pointer to any enum value, used for
generic enum handling in UI components where the specific enum type
is not known at compile time. It provides type-safe access to enum
values while maintaining flexibility for different enum types.

The actual implementation depends on the context where it's used,
typically following the same getter/setter pattern as other pointer
types but with enum-specific value handling.

Usage example:
```haxe
enum Color {
    Red;
    Green;
    Blue;
}

var myColor = Color.Red;
var pointer:EnumValuePointer = myColor;

// Used in enum selection components
// that can work with any enum type
```

<div class="see"><strong>See:</strong> EnumFieldView, <a href="/api-docs/unity/elements/FieldView/">FieldView</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


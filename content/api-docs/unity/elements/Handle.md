---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Handle
target: Unity
permalink: api-docs/unity/elements/Handle/
---

# Handle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Handle.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.Handle</strong> (Typedef)</div>

A type alias for integer handles used throughout the Elements UI framework.

Handles are used as lightweight references to UI elements, resources, or
other objects that need to be identified by a unique integer value.
This pattern is commonly used for:
- Window management systems
- Resource tracking
- Event system identifiers
- Component registration

Using a typedef allows the code to be more self-documenting, as `Handle`
is more meaningful than raw `Int` values in function signatures.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


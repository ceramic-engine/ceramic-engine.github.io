---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TabState
target: Clay (Native)
permalink: api-docs/clay-native/elements/TabState/
---

# TabState

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TabState.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.TabState</strong> (Abstract)</div>

Represents the possible states of a tab in a tab control.

This enum abstract defines the various states that a tab can be in,
which affects how the tab is displayed and whether it can be interacted with.
Used primarily by tab navigation components to control tab appearance and behavior.

## Usage Example

```haxe
// Create a tab with default state
var myTab = new Tab();
myTab.state = TabState.DEFAULT;

// Disable a tab
myTab.state = TabState.DISABLED;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/TabsLayout/">TabsLayout</a>, <a href="/api-docs/clay-native/elements/TabFocus/">TabFocus</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


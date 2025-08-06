---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScreenOrientation
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ScreenOrientation/
---

# ScreenOrientation

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ScreenOrientation.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ScreenOrientation</strong> (Abstract)</div>

Defines screen orientation modes for mobile and desktop applications.

ScreenOrientation uses bit flags to allow combining multiple orientations,
enabling applications to specify which orientations they support. This is
particularly important for mobile apps where device rotation is common.

The orientation values can be combined using bitwise OR operations to
create orientation masks that support multiple modes.

Example usage:
```haxe
// Support only portrait orientations
app.settings.orientation = ScreenOrientation.PORTRAIT;

// Support all orientations
app.settings.orientation = ScreenOrientation.PORTRAIT | ScreenOrientation.LANDSCAPE;

// Support specific orientations
app.settings.orientation = ScreenOrientation.PORTRAIT_UPRIGHT | ScreenOrientation.LANDSCAPE_LEFT;
```

<div class="see"><strong>See:</strong> Settings#orientation, <a href="/api-docs/clay-native/ceramic/Screen/">Screen</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/clay-native/Int/)`

**To:**
- `[Int](/api-docs/clay-native/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


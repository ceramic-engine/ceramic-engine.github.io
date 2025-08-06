---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Entypo
target: Headless
permalink: api-docs/headless/elements/Entypo/
---

# Entypo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Entypo.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.Entypo</strong> (Abstract)</div>

Entypo icon font character codes.

This enum provides constant values for all available icons in the Entypo icon font.
The values correspond to Unicode code points that map to specific icon glyphs when
using the Entypo font face.

Entypo is a suite of 411 carefully crafted premium pictograms by Daniel Bruce.
The font includes icons for:
- User interface elements (arrows, controls, windows)
- Media controls (play, pause, stop, volume)
- Communication (mail, chat, phone)
- Social media platforms
- File and document types
- Creative Commons licenses
- Common objects and symbols

Usage example:
```haxe
var icon = new EntypoIconView();
icon.icon = Entypo.HEART;
icon.iconColor = Color.RED;
```

The icon codes start at 59392 (0xE800) for regular icons and 62208 (0xF300) for
social media brand icons.

<div class="see"><strong>See:</strong> EntypoIconView for displaying these icons</div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


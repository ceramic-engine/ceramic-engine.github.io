---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: KeyCode
target: Headless
permalink: api-docs/headless/ceramic/KeyCode/
---

# KeyCode

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/KeyCode.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.KeyCode</strong> (Abstract)</div>

Keyboard key codes representing the character/symbol associated with a key.

KeyCode values represent the actual character or symbol that would be generated
by pressing a key, taking into account the current keyboard layout and modifiers.
This is different from ScanCode which represents the physical key position.

For example, pressing the 'A' key will always generate KeyCode.KEY_A (97),
but the physical scan code may vary based on keyboard layout.

Key codes are layout-dependent and represent the "virtual" key value.
For physical key positions, use ScanCode instead.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/ScanCode/">ScanCode</a>, <a href="/api-docs/headless/ceramic/Key/">Key</a>, <a href="/api-docs/headless/ceramic/Input/">Input</a></div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


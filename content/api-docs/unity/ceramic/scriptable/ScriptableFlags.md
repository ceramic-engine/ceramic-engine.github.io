---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableFlags
target: Unity
permalink: api-docs/unity/ceramic/scriptable/ScriptableFlags/
---

# ScriptableFlags

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableFlags.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableFlags</strong> (Class)</div>

Scriptable wrapper for Flags to expose bit flag operations to scripts.

This class provides utility methods for working with bit flags, which are
commonly used to store multiple boolean values in a single integer.
In scripts, this type is exposed as `Flags` (without the Scriptable prefix).

Bit flags allow efficient storage of up to 32 boolean values in a single
integer, where each bit position represents a different flag.

## Usage in Scripts

```haxe
// Define flag positions as constants
var FLAG_ACTIVE = 0;      // Bit 0
var FLAG_VISIBLE = 1;     // Bit 1
var FLAG_ENABLED = 2;     // Bit 2

// Start with no flags set
var flags = 0;

// Set the ACTIVE flag to true
flags = Flags.setBoolAndGetFlags(flags, FLAG_ACTIVE, true);

// Set multiple flags
flags = Flags.setBoolAndGetFlags(flags, FLAG_VISIBLE, true);
flags = Flags.setBoolAndGetFlags(flags, FLAG_ENABLED, false);

// Check if a flag is set
if (Flags.getBool(flags, FLAG_ACTIVE)) {
    trace("Object is active");
}

// Toggle a flag
var isVisible = Flags.getBool(flags, FLAG_VISIBLE);
flags = Flags.setBoolAndGetFlags(flags, FLAG_VISIBLE, !isVisible);
```

## Bit Positions

- Bit 0: Rightmost bit, value 1
- Bit 1: Second bit, value 2
- Bit 2: Third bit, value 4
- And so on up to bit 31

<div class="see"><strong>See:</strong> ceramic.Flags The actual implementation</div>


## Static Members

<div class="signature field-method has-description" id="getBool"><code><span class="field-name">getBool</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bit</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if a specific bit flag is set.



| Name | Type | Description |
|------|------|-------------|
| `flags` | [Int](/api-docs/unity/Int/) | The integer containing the bit flags  |
| `bit` | [Int](/api-docs/unity/Int/) | The bit position to check (0-31)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if the bit is set (1), false if not set (0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBoolAndGetFlags"><code><span class="field-name">setBoolAndGetFlags</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bit</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bool</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#setBoolAndGetFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set or clear a specific bit flag and return the updated flags value.

This method does not modify the input flags parameter, but returns
a new integer with the specified bit updated.



| Name | Type | Description |
|------|------|-------------|
| `flags` | [Int](/api-docs/unity/Int/) | The integer containing the bit flags  |
| `bit` | [Int](/api-docs/unity/Int/) | The bit position to modify (0-31)  |
| `bool` | [Bool](/api-docs/unity/Bool/) | True to set the bit (1), false to clear it (0)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | The updated flags value with the bit modified |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Enums
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Enums/
---

# Enums

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Enums.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Enums</strong> (Class)</div>

Macro utilities for working with enum values at compile time.

This class provides compile-time macros for enum comparison and validation,
offering more readable and maintainable code than manual string comparisons.

## Features

- **Compile-time Safety**: Enum names are validated at compile time
- **Null-safe**: Handles null enum values gracefully
- **Clean Syntax**: More readable than manual getName() comparisons

## Usage Example

```haxe
enum GameState {
    MENU;
    PLAYING;
    PAUSED;
    GAME_OVER;
}

var state = GameState.PLAYING;

// Using Enums utility
if (Enums.isEnumWithName(state, PLAYING)) {
    trace("Game is running");
}

// Equivalent to (but cleaner than):
if (state != null && state.getName() == "PLAYING") {
    trace("Game is running");
}
```

<div class="see"><strong>See:</strong> Type.enumConstructor For runtime enum name access</div>


## Static Members

<div class="signature field-method has-description" id="isEnumWithName"><code><span class="field-name">isEnumWithName</span><span class="parenthesis">(</span><span class="arg-name">valueExpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">isEnumWithName.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">nameExpr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#isEnumWithName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given enum value has its name equal to the given name.

This macro provides a clean way to check if an enum value matches a
specific constructor name. The name parameter is converted to a string
at compile time, providing type safety and auto-completion support.

## Null Safety

The macro generates null-safe code, returning false if the enum value
is null rather than throwing an exception.



| Name | Type | Description |
|------|------|-------------|
| `valueExpr` | [Enum](/api-docs/clay-web/Enum/)<isEnumWithName.T> | The enum value to check (can be null)  |
| `nameExpr` | [Dynamic](/api-docs/clay-web/Dynamic/) | The constructor name to match against (without quotes)  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | True if the enum value's name matches, false if null or different * ```haxe enum Direction { NORTH; SOUTH; EAST; WEST; } * var dir:Direction = NORTH; * if (Enums.isEnumWithName(dir, NORTH)) { player.moveUp(); } * // Works with null values var nullDir:Direction = null; Enums.isEnumWithName(nullDir, NORTH); // false, no error * // Can use with switch alternatives var action = if (Enums.isEnumWithName(state, MENU)) { showMenu(); } else if (Enums.isEnumWithName(state, PLAYING)) { updateGame(); } ``` |


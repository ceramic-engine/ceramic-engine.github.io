---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: EnumAbstractMacro
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/macros/EnumAbstractMacro/
---

# EnumAbstractMacro

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/macros/EnumAbstractMacro.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.macros.EnumAbstractMacro</strong> (Class)</div>

Utility macros for working with enum abstracts at compile time.
Enum abstracts are Haxe's way of creating type-safe enumerations with
custom underlying types. This macro provides tools to:
- Get all values of an enum abstract as an array
- Convert enum abstract values to/from strings

These utilities are particularly useful for serialization, UI generation,
and validation where you need to work with all possible enum values.

Example usage:
```haxe
var allStates = EnumAbstractMacro.getValues(MyState);
var stateStr = EnumAbstractMacro.toStringSwitch(MyState, currentState);
var state = EnumAbstractMacro.fromStringSwitch(MyState, "IDLE");
```

## Static Members

<div class="signature field-method has-description" id="getValues"><code><span class="field-name">getValues</span><span class="parenthesis">(</span><span class="arg-name">typePath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing all values of an enum abstract.
This macro examines the enum abstract at compile time and generates
code that creates an array of all its values.

Example:
```haxe
@:enum abstract Color(Int) {
    var RED = 0xFF0000;
    var GREEN = 0x00FF00;
    var BLUE = 0x0000FF;
}

var colors = EnumAbstractMacro.getValues(Color); // [RED, GREEN, BLUE]
```



| Name | Type | Description |
|------|------|-------------|
| `typePath` | [Dynamic](/api-docs/clay-web/Dynamic/) | Expression representing the enum abstract type  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression that evaluates to an array of all enum values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toStringSwitch"><code><span class="field-name">toStringSwitch</span><span class="parenthesis">(</span><span class="arg-name">typePath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toStringSwitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a switch expression that converts an enum abstract value to its string name.
Creates an exhaustive switch that maps each enum value to its identifier as a string.

Example:
```haxe
var state = PLAYING;
var name = EnumAbstractMacro.toStringSwitch(GameState, state); // "PLAYING"
```

This is useful for serialization, debugging, and displaying enum values in UIs.



| Name | Type | Description |
|------|------|-------------|
| `typePath` | [Dynamic](/api-docs/clay-web/Dynamic/) | Expression representing the enum abstract type  |
| `e` | [Dynamic](/api-docs/clay-web/Dynamic/) | Expression of the enum value to convert  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Switch expression that evaluates to the string name |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromStringSwitch"><code><span class="field-name">fromStringSwitch</span><span class="parenthesis">(</span><span class="arg-name">typePath</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#fromStringSwitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a switch expression that converts a string to an enum abstract value.
Creates an exhaustive switch that maps string names to their corresponding enum values.
Throws an exception if the string doesn't match any enum value.

Example:
```haxe
var state = EnumAbstractMacro.fromStringSwitch(GameState, "PLAYING"); // GameState.PLAYING
// Throws: Cannot convert "INVALID" to GameState
```

This is the inverse of toStringSwitch and is useful for deserialization
and parsing user input.



| Name | Type | Description |
|------|------|-------------|
| `typePath` | [Dynamic](/api-docs/clay-web/Dynamic/) | Expression representing the enum abstract type  |
| `e` | [Dynamic](/api-docs/clay-web/Dynamic/) | Expression of the string to convert  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Block expression that evaluates to the enum value or throws |


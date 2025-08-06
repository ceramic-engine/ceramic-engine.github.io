---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableStd
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/scriptable/ScriptableStd/
---

# ScriptableStd

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableStd.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableStd</strong> (Class)</div>

Scriptable wrapper for Std to expose standard library functions to scripts.

This class provides essential utility functions from Haxe's standard library
for type conversion, parsing, and random number generation. In scripts,
this type is exposed as `Std` (without the Scriptable prefix).

## Usage in Scripts

```haxe
// Convert float to integer (truncates decimal)
var score = Std.int(95.7);  // 95
var floor = Std.int(-2.9);  // -2

// Convert any value to string
var text = Std.string(42);        // "42"
var bool = Std.string(true);      // "true"
var obj = Std.string({x: 10});    // "{x: 10}"

// Parse strings to numbers
var num = Std.parseInt("123");    // 123
var bad = Std.parseInt("abc");    // null
var hex = Std.parseInt("0xFF");   // 255

var pi = Std.parseFloat("3.14");  // 3.14
var exp = Std.parseFloat("1e3");  // 1000
var nan = Std.parseFloat("xyz");  // NaN

// Generate random integers
var dice = Std.random(6) + 1;     // 1-6
var coin = Std.random(2);         // 0 or 1
var pct = Std.random(100);        // 0-99
```

## Function Reference

- **int()**: Truncates float to integer (towards zero)
- **string()**: Converts any value to its string representation
- **parseInt()**: Parses integer from string, returns null on failure
- **parseFloat()**: Parses float from string, returns NaN on failure
- **random()**: Returns random integer from 0 to x-1

<div class="see"><strong>See:</strong> Std The actual Haxe standard library</div>


## Static Members

<div class="signature field-method has-description" id="int"><code><span class="field-name">int</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a Float to an Int by truncating the decimal part.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | The float value to convert  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The integer part of x |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string"><code><span class="field-name">string</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts any value to a String representation.



| Name | Type | Description |
|------|------|-------------|
| `s` | [Dynamic](/api-docs/clay-web/Dynamic/) | The value to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String representation of the value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseInt"><code><span class="field-name">parseInt</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses an integer from a string.

Supports decimal and hexadecimal (0x prefix) formats.
Stops parsing at the first non-numeric character.



| Name | Type | Description |
|------|------|-------------|
| `s` | [String](/api-docs/clay-web/String/) | The string to parse  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | The parsed integer, or null if parsing fails |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseFloat"><code><span class="field-name">parseFloat</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parseFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a floating-point number from a string.

Supports decimal notation and scientific notation (e.g., "1.23e4").



| Name | Type | Description |
|------|------|-------------|
| `s` | [String](/api-docs/clay-web/String/) | The string to parse  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | The parsed float, or NaN if parsing fails |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a random integer between 0 (inclusive) and x (exclusive).



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-web/Int/) | The upper bound (exclusive)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Random integer in range [0, x) |


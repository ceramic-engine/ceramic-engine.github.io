---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Sanitize
target: Clay (Web)
permalink: api-docs/clay-web/elements/Sanitize/
---

# Sanitize

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Sanitize.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.Sanitize</strong> (Class)</div>

Utility class for sanitizing and converting text input to numeric values.

The Sanitize class provides safe conversion methods for transforming
user input strings into numeric types with proper validation and
error handling. It handles various input formats and edge cases
commonly encountered in user interfaces.

Features:
- Safe string to float conversion with validation
- Handles different decimal separators (comma and period)
- Graceful handling of invalid input
- Preservation of trailing decimal points during editing
- NaN and infinity checking for robust validation

Example usage:
```haxe
var value = Sanitize.stringToFloat("123.45");   // Returns 123.45
var value = Sanitize.stringToFloat("123,45");   // Returns 123.45 (comma converted)
var value = Sanitize.stringToFloat("invalid");  // Returns 0.0
var value = Sanitize.stringToFloat("");         // Returns 0.0
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/SanitizeTextField/">SanitizeTextField</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="stringToFloat"><div class="plugin-name">elements</div><code><span class="field-name">stringToFloat</span><span class="parenthesis">(</span><span class="arg-name">textValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#stringToFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a string to a Float value with safe validation.

This method performs several sanitization steps:
1. Trims whitespace from the input
2. Converts comma decimal separators to periods
3. Handles trailing decimal points gracefully
4. Validates the result for NaN and infinity
5. Returns 0.0 for any invalid input

The method preserves trailing decimal points by temporarily removing
them before parsing, which is useful for interactive editing scenarios
where users are in the process of typing a decimal number.



| Name | Type | Description |
|------|------|-------------|
| `textValue` | [String](/api-docs/clay-web/String/) | The string to convert to a float  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | A valid float value, or 0.0 if the input is invalid |


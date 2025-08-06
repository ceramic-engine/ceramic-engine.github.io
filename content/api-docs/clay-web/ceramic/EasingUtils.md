---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: EasingUtils
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/EasingUtils/
---

# EasingUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/EasingUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.EasingUtils</strong> (Class)</div>

Utility functions for converting between Easing enum values and strings.

This class provides serialization support for easing functions, allowing
them to be stored in configuration files, transmitted over networks, or
used in any context requiring string representation.

## Usage Example

```haxe
// Convert easing to string for storage
var easing = Easing.QUAD_EASE_OUT;
var str = EasingUtils.easingToString(easing); // "QUAD_EASE_OUT"

// Restore easing from string
var restored = EasingUtils.easingFromString("QUAD_EASE_OUT");

// Use with configuration
config.animationEasing = EasingUtils.easingToString(myEasing);
var loadedEasing = EasingUtils.easingFromString(config.animationEasing);
```

## Limitations

- BEZIER and CUSTOM easings are not yet supported for serialization
- Invalid string names will throw an exception

<div class="see"><strong>See:</strong> ceramic.Easing For the easing enumeration</div>


## Static Members

<div class="signature field-method has-description" id="easingFromString"><code><span class="field-name">easingFromString</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#easingFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a string representation to an Easing enum value.

The string must exactly match an Easing enum constructor name
(e.g., "LINEAR", "QUAD_EASE_IN_OUT", etc.).



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/clay-web/String/) | The string name of the easing function  |

| Returns | Description |
|---------|-------------|
| Anonymous | The corresponding Easing enum value  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="easingToString"><code><span class="field-name">easingToString</span><span class="parenthesis">(</span><span class="arg-name">easing</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#easingToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an Easing enum value to its string representation.

Returns the exact constructor name of the enum value, which can
be used with easingFromString() to recreate the easing.



| Name | Type | Description |
|------|------|-------------|
| `easing` | Anonymous | The Easing enum value to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The string name of the easing constructor * ```haxe var str1 = EasingUtils.easingToString(Easing.LINEAR); // "LINEAR" var str2 = EasingUtils.easingToString(Easing.ELASTIC_EASE_IN); // "ELASTIC_EASE_IN" * // Round-trip conversion var original = Easing.SINE_EASE_OUT; var str = EasingUtils.easingToString(original); var restored = EasingUtils.easingFromString(str); // original == restored ``` * TODO: Add support for BEZIER easing serialization |

## Private Members


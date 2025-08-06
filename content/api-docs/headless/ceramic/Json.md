---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Json
target: Headless
permalink: api-docs/headless/ceramic/Json/
---

# Json

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Json.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Json</strong> (Class)</div>

JSON utility class that provides a unified interface for JSON operations across all Ceramic targets.

This class wraps the standard Haxe JSON functionality, ensuring consistent behavior
when serializing and deserializing data structures in Ceramic applications.
All methods are inlined for optimal performance.

<div class="see"><strong>See:</strong> ceramic.PersistentData For saving/loading JSON data persistently, ceramic.Http For sending/receiving JSON over HTTP</div>


## Static Members

<div class="signature field-method has-description" id="stringify"><code><span class="field-name">stringify</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">replacer</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#stringify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a Haxe object into a JSON string representation.

This method serializes Haxe objects, arrays, and primitive values into JSON format.
The resulting string can be saved to files, sent over network, or stored in databases.

Example usage:
```haxe
var data = {
    name: "Player",
    score: 1000,
    items: ["sword", "shield"]
};
var jsonString = Json.stringify(data);
// Result: {"name":"Player","score":1000,"items":["sword","shield"]}

// With formatting:
var prettyJson = Json.stringify(data, null, "  ");
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/headless/Dynamic/) | | The value to convert to JSON. Can be any Haxe object, array, or primitive. Objects with circular references will cause an error.  |
| `replacer` | Function | *(optional)* | Optional function to transform values during serialization. Called for each property with (key, value) and should return the transformed value. Return `null` to exclude a property from the output.  |
| `space` | [String](/api-docs/headless/String/) | *(optional)* | Optional string or number of spaces for pretty-printing. Pass " " for 2-space indentation or "\t" for tabs. If null or omitted, produces compact JSON without whitespace.  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The JSON string representation of the value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a JSON string and returns the corresponding Haxe value.

This method deserializes JSON strings into native Haxe objects and arrays.
The resulting value can be cast to specific types or accessed dynamically.

Example usage:
```haxe
var jsonString = '{"name":"Player","score":1000}';
var data = Json.parse(jsonString);
trace(data.name); // "Player"
trace(data.score); // 1000

// Type-safe access:
var player:PlayerData = cast Json.parse(jsonString);
```

Note: This method throws an exception if the JSON string is malformed.
Consider wrapping calls in try-catch blocks when parsing untrusted input:
```haxe
try {
    var data = Json.parse(untrustedJson);
} catch (e:Dynamic) {
    trace("Invalid JSON: " + e);
}
```



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/headless/String/) | The JSON string to parse. Must be valid JSON format.  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | The parsed value as a Dynamic object. Arrays become Array<Dynamic>, objects become anonymous structures, primitives retain their types.  |


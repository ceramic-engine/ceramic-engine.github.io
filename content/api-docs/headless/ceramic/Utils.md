---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Utils
target: Headless
permalink: api-docs/headless/ceramic/Utils/
---

# Utils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Utils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Utils</strong> (Class)</div>

Various utilities. Some of them are used by ceramic itself or its backends.

This class provides a collection of utility functions for common tasks including:
- Path manipulation and resolution
- ID generation (unique, random, persistent)
- String conversions (camelCase, UPPER_CASE)
- Mathematical operations (interpolation, trigonometry)
- Platform detection (iOS, Android)
- Stack trace handling
- Command execution
- And many more general-purpose utilities

Most methods are static and can be called directly without instantiation.

## Static Members

<div class="signature field-method has-description" id="realPath"><code><span class="field-name">realPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#realPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a relative asset path to an absolute path.
If the path is already absolute or is an HTTP(S) URL, it is returned unchanged.
Otherwise, it is resolved relative to the app's assets path.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | The path to resolve  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The absolute path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRtti"><code><span class="field-name">getRtti</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/headless/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getRtti.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/rtti/Classdef/" class="type-link">haxe.rtti.Classdef</a></code><a class="header-anchor" href="#getRtti"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get runtime type information (RTTI) for a class.
This provides metadata about the class structure, fields, and methods.



| Name | Type | Description |
|------|------|-------------|
| `c` | [Class](/api-docs/headless/Class/)<getRtti.T> | The class to get RTTI for  |

| Returns | Description |
|---------|-------------|
| [haxe.rtti.Classdef](/api-docs/headless/haxe/rtti/Classdef/) | The class definition metadata |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uniqueId"><code><span class="field-name">uniqueId</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#uniqueId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides an identifier which is guaranteed to be unique on this local device.
It however doesn't guarantee that this identifier is not predictable.

The ID format is: `base62-base62-base62-base62-base62-base62-base62`

Thread-safe on platforms that support threading.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A unique identifier string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="randomId"><code><span class="field-name">randomId</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">32</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#randomId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides a random identifier which should be fairly unpredictable and
should have an extremely low chance to provide the same identifier twice.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `size` | [Int](/api-docs/headless/Int/) | `32` | The length of the ID to generate (default: 32)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A random identifier string of the specified length |

<hr class="field-separator" />

<div class="signature field-method has-description" id="persistentId"><code><span class="field-name">persistentId</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">32</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#persistentId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a persistent identifier for this device. The identifier is expected
to stay the same as long as the user keeps the app installed.
Multiple identifiers can be generated/retrieved by using different slots (default 0).
Size of the persistent identifier can be provided, but will only have effect when
generating a new identifier.

The ID is stored on disk and retrieved on subsequent calls.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `slot` | [Int](/api-docs/headless/Int/) | `0` | The slot number for storing multiple IDs (default: 0)  |
| `size` | [Int](/api-docs/headless/Int/) | `32` | The length of the ID when generating a new one (default: 32)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The persistent identifier for this device and slot |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resetPersistentId"><code><span class="field-name">resetPersistentId</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetPersistentId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset (delete) a persistent identifier for the given slot.
The next call to persistentId() for this slot will generate a new ID.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `slot` | [Int](/api-docs/headless/Int/) | `0` | The slot number to reset (default: 0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="base62Id"><code><span class="field-name">base62Id</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#base62Id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a base62 encoded string from an integer value.
Base62 uses 0-9, A-Z, and a-z characters.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `val` | [Int](/api-docs/headless/Int/) | *(optional)* | The integer to encode, or null to use a random value  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A base62 encoded string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="println"><code><span class="field-name">println</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#println"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Print a line to the console/output.
Handles different platforms appropriately (console.log on web, Sys.println on native).



| Name | Type | Description |
|------|------|-------------|
| `data` | [String](/api-docs/headless/String/) | The string to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printStackTrace"><code><span class="field-name">printStackTrace</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">returnOnly</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#printStackTrace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Print or return the current stack trace.
Useful for debugging to see the call hierarchy.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `returnOnly` | [Bool](/api-docs/headless/Bool/) | `false` | If true, only returns the stack trace string without printing  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The stack trace as a string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stackItemToString"><code><span class="field-name">stackItemToString</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#stackItemToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a stack trace item to a human-readable string.
Handles source map resolution on JavaScript platforms.



| Name | Type | Description |
|------|------|-------------|
| `item` | Anonymous | The stack item to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A formatted string representation of the stack item |

<hr class="field-separator" />

<div class="signature field-method has-description" id="radToDeg"><code><span class="field-name">radToDeg</span><span class="parenthesis">(</span><span class="arg-name">rad</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radToDeg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert radians to degrees.



| Name | Type | Description |
|------|------|-------------|
| `rad` | [Float](/api-docs/headless/Float/) | Angle in radians  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | Angle in degrees |

<hr class="field-separator" />

<div class="signature field-method has-description" id="degToRad"><code><span class="field-name">degToRad</span><span class="parenthesis">(</span><span class="arg-name">deg</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#degToRad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert degrees to radians.



| Name | Type | Description |
|------|------|-------------|
| `deg` | [Float](/api-docs/headless/Float/) | Angle in degrees  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | Angle in radians |

<hr class="field-separator" />

<div class="signature field-method has-description" id="round"><code><span class="field-name">round</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">decimals</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#round"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Round a float value to a specified number of decimal places.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | | The value to round  |
| `decimals` | [Int](/api-docs/headless/Int/) | `0` | Number of decimal places (default: 0)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The rounded value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hashCode"><code><span class="field-name">hashCode</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hashCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Java's String.hashCode() method implemented in Haxe.
Generates a 32-bit integer hash from a string.

source: https://github.com/rjanicek/janicek-core-haxe/blob/master/src/co/janicek/core/math/HashCore.hx



| Name | Type | Description |
|------|------|-------------|
| `s` | [String](/api-docs/headless/String/) | The string to hash  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | A 32-bit integer hash code |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uniformFrequencyList"><code><span class="field-name">uniformFrequencyList</span><span class="parenthesis">(</span><span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">frequencies</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#uniformFrequencyList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a uniform list of the requested size,
containing values uniformly distributed based on frequencies.

This creates a list where values appear proportionally to their frequencies,
but distributed as evenly as possible throughout the list.



| Name | Type | Description |
|------|------|-------------|
| `values` | [Array](/api-docs/headless/Array/)<[Int](/api-docs/headless/Int/)> | The values to put in the list  |
| `frequencies` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | The corresponding frequency for each value  |
| `size` | [Int](/api-docs/headless/Int/) | The size of the final list  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[Int](/api-docs/headless/Int/)> | An array with values distributed according to their frequencies |

<hr class="field-separator" />

<div class="signature field-method has-description" id="upperCaseToCamelCase"><code><span class="field-name">upperCaseToCamelCase</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">firstLetterUppercase</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#upperCaseToCamelCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms `SOME_IDENTIFIER` to `SomeIdentifier` (PascalCase) or `someIdentifier` (camelCase).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `input` | [String](/api-docs/headless/String/) | | The UPPER_CASE string to convert  |
| `firstLetterUppercase` | [Bool](/api-docs/headless/Bool/) | `true` | If true, produces PascalCase; if false, produces camelCase  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The converted string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="camelCaseToUpperCase"><code><span class="field-name">camelCaseToUpperCase</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">firstLetterUppercase</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#camelCaseToUpperCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms `SomeIdentifier`/`someIdentifier`/`some identifier` to `SOME_IDENTIFIER`.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `input` | [String](/api-docs/headless/String/) | | The camelCase/PascalCase string to convert  |
| `firstLetterUppercase` | [Bool](/api-docs/headless/Bool/) | `true` | Not used in this function (kept for API compatibility)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The UPPER_CASE string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="functionEquals"><code><span class="field-name">functionEquals</span><span class="parenthesis">(</span><span class="arg-name">functionA</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">functionB</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#functionEquals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if two function references are equal.
Platform-specific implementation for optimal performance.



| Name | Type | Description |
|------|------|-------------|
| `functionA` | [Dynamic](/api-docs/headless/Dynamic/) | First function reference  |
| `functionB` | [Dynamic](/api-docs/headless/Dynamic/) | Second function reference  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if the functions are the same reference |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decodeUriParams"><code><span class="field-name">decodeUriParams</span><span class="parenthesis">(</span><span class="arg-name">raw</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#decodeUriParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decode URL-encoded parameters into a key-value map.

Example: `"foo=bar&hello=world"` becomes `{"foo" => "bar", "hello" => "world"}`



| Name | Type | Description |
|------|------|-------------|
| `raw` | [String](/api-docs/headless/String/) | The raw URL parameter string  |

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/headless/Map/) | A map of decoded parameter names to values |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sinRatio"><code><span class="field-name">sinRatio</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sinRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms a value between 0 and 1 to another value between 0 and 1 following a sinusoidal curve.
Useful for creating smooth, wave-like animations.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | A value between 0 and 1. If giving a value > 1, its modulo 1 will be used.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | A value between 0 and 1 following a sine wave pattern |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cosRatio"><code><span class="field-name">cosRatio</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cosRatio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms a value between 0 and 1 to another value between 0 and 1 following a cosinusoidal curve.
Useful for creating smooth, wave-like animations.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | A value between 0 and 1. If giving a value > 1, its modulo 1 will be used.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | A value between 0 and 1 following a cosine wave pattern |

<hr class="field-separator" />

<div class="signature field-method has-description" id="valueFromInterpolatedKey"><code><span class="field-name">valueFromInterpolatedKey</span><span class="parenthesis">(</span><span class="arg-name">keys</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">interpolatedKey</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#valueFromInterpolatedKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given an array of keys and an array of matching values, interpolate a new value from interpolatedKey.
Performs linear interpolation between adjacent key-value pairs.

Example: keys=[0, 10, 20], values=[100, 200, 150], interpolatedKey=5 returns 150



| Name | Type | Description |
|------|------|-------------|
| `keys` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | A sorted list of keys  |
| `values` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | A list of values corresponding to each key  |
| `interpolatedKey` | [Float](/api-docs/headless/Float/) | The key to interpolate a value for  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The interpolated value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="yFromInterpolatedX"><code><span class="field-name">yFromInterpolatedX</span><span class="parenthesis">(</span><span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">interpolatedX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#yFromInterpolatedX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Given an array of X and Y values, interpolate a new Y value from interpolated X.
The points array should contain alternating X and Y values: [x0, y0, x1, y1, x2, y2, ...]



| Name | Type | Description |
|------|------|-------------|
| `points` | [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> | A list of X and Y values (must have even length)  |
| `interpolatedX` | [Float](/api-docs/headless/Float/) | The X value to interpolate a Y value for  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The interpolated Y value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="command"><code><span class="field-name">command</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#command"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute a system command asynchronously.
Platform-specific implementation using Process on native platforms or child_process on Node.js.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cmd` | [String](/api-docs/headless/String/) | | The command to execute  |
| `args` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* | Optional array of command arguments  |
| `options` | AnonStruct | *(optional)* | Optional execution options: - cwd: Working directory for the command - detached: Whether to detach the process  |
| `result` | Function | | Callback with (exitCode, stdout, stderr) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replaceIdentifier"><code><span class="field-name">replaceIdentifier</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">word</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">replacement</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#replaceIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replace whole-word occurrences of an identifier in a string.
Only replaces the word when it's not part of a larger identifier.

Example: replaceIdentifier("foo + fooBar", "foo", "bar") returns "bar + fooBar"



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/headless/String/) | The string to search in  |
| `word` | [String](/api-docs/headless/String/) | The identifier to replace  |
| `replacement` | [String](/api-docs/headless/String/) | The replacement string  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The string with identifiers replaced |

<hr class="field-separator" />

<div class="signature field-method has-description" id="imageTypeFromBytes"><code><span class="field-name">imageTypeFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ImageType/" class="type-link">ImageType</a></code><a class="header-anchor" href="#imageTypeFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Detect the image type from the first few bytes of image data.
Checks for PNG and JPEG magic bytes.



| Name | Type | Description |
|------|------|-------------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | The image file bytes  |

| Returns | Description |
|---------|-------------|
| [ImageType](/api-docs/headless/ceramic/ImageType/) | The detected ImageType (PNG, JPEG) or null if unknown |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lerp"><code><span class="field-name">lerp</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lerp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Linear interpolation between two values.



| Name | Type | Description |
|------|------|-------------|
| `a` | [Float](/api-docs/headless/Float/) | Start value (returned when t=0)  |
| `b` | [Float](/api-docs/headless/Float/) | End value (returned when t=1)  |
| `t` | [Float](/api-docs/headless/Float/) | Interpolation factor (0 to 1)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | The interpolated value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isIos"><code><span class="field-name">isIos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isIos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the current platform is iOS, which is the case
when we are running a native iOS app or when we are running
on web from an iOS mobile browser.

The result is cached for performance on web platforms.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if running on iOS |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAndroid"><code><span class="field-name">isAndroid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAndroid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the current platform is Android, which is the case
when we are running a native Android app or when we are running
on web from an Android mobile browser.

The result is cached for performance on web platforms.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if running on Android |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sign"><code><span class="field-name">sign</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#sign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the sign of a number.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/headless/Float/) | The number to check  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | 1 if the value is above or equal to zero, -1 otherwise |

## Private Members

<div class="signature field-var no-description" id="RE_ASCII_CHAR"><code><span class="field-name">RE_ASCII_CHAR</span><span class="operator">:</span> <a href="/api-docs/headless/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_ASCII_CHAR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RE_MODULE_AT"><code><span class="field-name">RE_MODULE_AT</span><span class="operator">:</span> <a href="/api-docs/headless/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_MODULE_AT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


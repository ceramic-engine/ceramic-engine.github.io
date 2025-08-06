---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Equal
target: Unity
permalink: api-docs/unity/ceramic/Equal/
---

# Equal

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Equal.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Equal</strong> (Class)</div>

Deep equality comparison utilities for various data types.

Equal provides comprehensive equality checking that goes beyond simple
reference comparison. It supports deep comparison of arrays, maps,
and anonymous objects, making it useful for data validation, testing,
and change detection.

## Supported Types

- **Arrays**: Element-by-element comparison (shallow)
- **StringMap**: Key-value comparison
- **IntMap**: Key-value comparison
- **Anonymous Objects**: Field-by-field comparison (recursive)
- **Primitives**: Standard equality

## Usage Examples

```haxe
// Array comparison
var a1 = [1, 2, 3];
var a2 = [1, 2, 3];
Equal.equal(a1, a2); // true

// Object comparison
var o1 = {x: 10, y: 20, data: [1, 2]};
var o2 = {x: 10, y: 20, data: [1, 2]};
Equal.equal(o1, o2); // true

// Map comparison
var m1 = new StringMap<Int>();
m1.set("a", 1);
var m2 = new StringMap<Int>();
m2.set("a", 1);
Equal.equal(m1, m2); // true
```

## Limitations

- Array comparison is shallow (doesn't recurse into nested arrays)
- Class instances are compared by reference only
- Circular references will cause infinite recursion

<div class="see"><strong>See:</strong> ceramic.Extensions For array utility methods</div>


## Static Members

<div class="signature field-method has-description" id="equal"><code><span class="field-name">equal</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#equal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs deep equality comparison between two values.

Compares values based on their type:
- Same reference: true
- Arrays: Element-by-element comparison
- Maps: Key-value comparison
- Anonymous objects: Field comparison (recursive)
- Other: Reference equality



| Name | Type | Description |
|------|------|-------------|
| `a` | [Dynamic](/api-docs/unity/Dynamic/) | First value to compare  |
| `b` | [Dynamic](/api-docs/unity/Dynamic/) | Second value to compare  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if values are deeply equal, false otherwise * ```haxe // Simple values Equal.equal(5, 5); // true Equal.equal("hello", "hello"); // true * // Arrays Equal.equal([1, 2, 3], [1, 2, 3]); // true Equal.equal([1, 2], [1, 2, 3]); // false * // Objects Equal.equal( {name: "John", age: 30}, {name: "John", age: 30} ); // true ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="objectFieldsEqual"><code><span class="field-name">objectFieldsEqual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#objectFieldsEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two anonymous objects by their fields.

Performs recursive comparison of all fields in both objects.
Objects are considered equal if they have the same fields
with equal values (using the equal() function).



| Name | Type | Description |
|------|------|-------------|
| `a` | [Any](/api-docs/unity/Any/) | First object to compare  |
| `b` | [Any](/api-docs/unity/Any/) | Second object to compare  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if all fields match, false otherwise * ```haxe var obj1 = {x: 10, y: {z: 20}}; var obj2 = {x: 10, y: {z: 20}}; Equal.objectFieldsEqual(obj1, obj2); // true * var obj3 = {x: 10, y: 20, extra: true}; Equal.objectFieldsEqual(obj1, obj3); // false (different fields) ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="arrayEqual"><code><span class="field-name">arrayEqual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#arrayEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Specialized array comparison for C# string arrays.
Works around C# type system limitations.

| Name | Type |
|------|------|
| `a` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |
| `b` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stringMapEqual"><code><span class="field-name">stringMapEqual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stringMapEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two StringMaps by their key-value pairs.

Maps are equal if they have the same keys and all values
for corresponding keys are equal (using == comparison).



| Name | Type | Description |
|------|------|-------------|
| `a` | [haxe.ds.StringMap](/api-docs/unity/haxe/ds/StringMap/)<[Any](/api-docs/unity/Any/)> | First StringMap  |
| `b` | [haxe.ds.StringMap](/api-docs/unity/haxe/ds/StringMap/)<[Any](/api-docs/unity/Any/)> | Second StringMap  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if maps have identical key-value pairs * ```haxe var map1 = new StringMap<Int>(); map1.set("a", 1); map1.set("b", 2); * var map2 = new StringMap<Int>(); map2.set("b", 2); map2.set("a", 1); * Equal.stringMapEqual(map1, map2); // true (order doesn't matter) ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="intMapEqual"><code><span class="field-name">intMapEqual</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/ds/IntMap/" class="type-link">haxe.ds.IntMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intMapEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares two IntMaps by their key-value pairs.

Maps are equal if they have the same keys and all values
for corresponding keys are equal (using == comparison).



| Name | Type | Description |
|------|------|-------------|
| `a` | [haxe.ds.IntMap](/api-docs/unity/haxe/ds/IntMap/)<[Any](/api-docs/unity/Any/)> | First IntMap  |
| `b` | [haxe.ds.IntMap](/api-docs/unity/haxe/ds/IntMap/)<[Any](/api-docs/unity/Any/)> | Second IntMap  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if maps have identical key-value pairs * ```haxe var map1 = new IntMap<String>(); map1.set(1, "one"); map1.set(2, "two"); * var map2 = new IntMap<String>(); map2.set(2, "two"); map2.set(1, "one"); * Equal.intMapEqual(map1, map2); // true ``` |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


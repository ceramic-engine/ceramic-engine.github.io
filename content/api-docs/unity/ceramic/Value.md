---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Value
target: Unity
permalink: api-docs/unity/ceramic/Value/
---

# Value

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Value.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Value</strong> (Class)</div>

An object that can hold any value.

This is a simple generic container class that wraps a single value of any type.
It's useful when you need a mutable reference to a value, particularly in contexts
where you want to pass a value by reference rather than by value.

Common use cases:
- Sharing mutable state between closures
- Returning multiple values from a function (using multiple Value objects)
- Creating observable values when combined with event systems
- Wrapping primitive types to make them nullable

Example usage:
```haxe
// Basic usage
var counter = new Value<Int>(0);
counter.value++;
trace(counter.value); // 1

// Sharing state between functions
var shared = new Value<String>("Hello");
function updateValue() {
    shared.value = "World";
}
updateValue();
trace(shared.value); // "World"

// As a nullable wrapper
var maybeNumber = new Value<Float>();
if (someCondition) {
    maybeNumber.value = 42.0;
}
```


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.Value.T</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The stored value.
Can be read and written directly.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.Value.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Value container.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | ceramic.Value.T | *(optional)* | The initial value to store (optional). If provided and not null, it will be stored. If not provided or null, the value property remains uninitialized. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


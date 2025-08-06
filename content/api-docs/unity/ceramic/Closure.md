---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Closure
target: Unity
permalink: api-docs/unity/ceramic/Closure/
---

# Closure

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Closure.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Closure</strong> (Class)</div>

A simple closure implementation for storing a function with pre-bound arguments.

This class provides a way to capture a function reference along with its
arguments, allowing for delayed execution. Useful for callbacks, event
handlers, and situations where you need to pass a pre-configured function.

## Usage Example

```haxe
// Store a function with arguments
function greet(name:String, age:Int) {
    trace('Hello $name, age $age');
}

var closure = new Closure(greet, ["Alice", 30]);

// Execute later
closure.call(); // Outputs: "Hello Alice, age 30"

// Can also store instance methods
var closure2 = new Closure(myObject.doSomething, [param1, param2]);
closure2.call();
```

<div class="see"><strong>See:</strong> ceramic.Timer For delayed execution, ceramic.App#onceImmediate For deferred execution</div>


## Instance Members

<div class="signature field-var has-description" id="method"><code><span class="field-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The function or method to be called.
Can be a static function, instance method, or any callable reference.

<hr class="field-separator" />

<div class="signature field-var has-description" id="args"><code><span class="field-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#args"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Arguments to pass to the method when called.
These are bound at construction time and passed during execution.

<hr class="field-separator" />

<div class="signature field-method has-description" id="call"><code><span class="field-name">call</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#call"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes the stored method with the bound arguments.

Uses reflection to call the method, which allows it to work with
any type of function or method reference.


| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | The return value from the called method, or null if the method returns Void * ```haxe var closure = new Closure(Math.max, [5, 10]); var result = closure.call(); // Returns 10 ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new closure with the specified method and arguments.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `method` | [Any](/api-docs/unity/Any/) | | The function or method to store. Can be any callable reference.  |
| `args` | [Array](/api-docs/unity/Array/)<[Any](/api-docs/unity/Any/)> | *(optional)* | Optional array of arguments to pass when the method is called. If not provided, an empty array is used. * ```haxe // Simple function var c1 = new Closure(trace, ["Hello"]); * // Instance method var c2 = new Closure(sprite.moveTo, [100, 200]); * // No arguments var c3 = new Closure(doCleanup); ``` |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Exception
target: Unity
permalink: api-docs/unity/haxe/Exception/
---

# Exception

<div class="type-hierarchy"><a href="/api-docs/unity/haxe/_Exception/NativeException/">haxe._Exception.NativeException</a> → <strong>haxe.Exception</strong> (Class) → <a href="/api-docs/unity/haxe/ValueException/">ValueException</a>, <a href="/api-docs/unity/haxe/exceptions/PosException/">haxe.exceptions.PosException</a>, <a href="/api-docs/unity/sys/thread/NoEventLoopException/">sys.thread.NoEventLoopException</a></div>

Base class for exceptions.

If this class (or derivatives) is used to catch an exception, then
`haxe.CallStack.exceptionStack()` will not return a stack for the exception
caught. Use `haxe.Exception.stack` property instead:
```haxe
try {
throwSomething();
} catch(e:Exception) {
trace(e.stack);
}
```

Custom exceptions should extend this class:
```haxe
class MyException extends haxe.Exception {}
//...
throw new MyException('terrible exception');
```

`haxe.Exception` is also a wildcard type to catch any exception:
```haxe
try {
throw 'Catch me!';
} catch(e:haxe.Exception) {
trace(e.message); // Output: Catch me!
}
```

To rethrow an exception just throw it again.
Haxe will try to rethrow an original native exception whenever possible.
```haxe
try {
var a:Array<Int> = null;
a.push(1); // generates target-specific null-pointer exception
} catch(e:haxe.Exception) {
throw e; // rethrows native exception instead of haxe.Exception
}
```

## Static Members

<div class="signature field-method no-description" id="caught"><code><span class="field-name">caught</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Exception</a></code><a class="header-anchor" href="#caught"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Exception](/api-docs/unity/haxe/Exception/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="thrown"><code><span class="field-name">thrown</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#thrown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

## Instance Members

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exception message.

<hr class="field-separator" />

<div class="signature field-var has-description" id="native"><code><span class="field-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#native"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native exception, which caused this exception.

<hr class="field-separator" />

<div class="signature field-method no-description" id="unwrap"><code><span class="field-name">unwrap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#unwrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns exception message.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">previous</span><span class="operator">:</span> <a href="#" class="type-link">Exception</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Exception instance.

The `previous` argument could be used for exception chaining.

The `native` argument is for internal usage only.
There is no need to provide `native` argument manually and no need to keep it
upon extending `haxe.Exception` unless you know what you're doing.

| Name | Type | Default |
|------|------|---------|
| `message` | [String](/api-docs/unity/String/) | |
| `previous` | [Exception](/api-docs/unity/haxe/Exception/) | *(optional)* |
| `native` | [Any](/api-docs/unity/Any/) | *(optional)* |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


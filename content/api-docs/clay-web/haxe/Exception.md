---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Exception
target: Clay (Web)
permalink: api-docs/clay-web/haxe/Exception/
---

# Exception

<div class="type-hierarchy"><a href="/api-docs/clay-web/haxe/_Exception/NativeException/">haxe._Exception.NativeException</a> → <strong>haxe.Exception</strong> (Class) → <a href="/api-docs/clay-web/haxe/ValueException/">ValueException</a>, <a href="/api-docs/clay-web/haxe/exceptions/PosException/">haxe.exceptions.PosException</a></div>

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

## Instance Members

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exception message.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/CallStack/" class="type-link">CallStack</a></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The call stack at the moment of the exception creation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="native"><code><span class="field-name">native</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#native"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native exception, which caused this exception.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns exception message.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">previous</span><span class="operator">:</span> <a href="#" class="type-link">Exception</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Exception instance.

The `previous` argument could be used for exception chaining.

The `native` argument is for internal usage only.
There is no need to provide `native` argument manually and no need to keep it
upon extending `haxe.Exception` unless you know what you're doing.

| Name | Type | Default |
|------|------|---------|
| `message` | [String](/api-docs/clay-web/String/) | |
| `previous` | [Exception](/api-docs/clay-web/haxe/Exception/) | *(optional)* |
| `native` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

## Private Members

<div class="signature field-method no-description" id="caught"><code><span class="field-name">caught</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Exception</a></code><a class="header-anchor" href="#caught"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Exception](/api-docs/clay-web/haxe/Exception/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="thrown"><code><span class="field-name">thrown</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#thrown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Any](/api-docs/clay-web/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unwrap"><code><span class="field-name">unwrap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#unwrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Any](/api-docs/clay-web/Any/) |


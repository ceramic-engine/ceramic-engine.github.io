---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ValueException
target: Clay (Web)
permalink: api-docs/clay-web/haxe/ValueException/
---

# ValueException

<div class="type-hierarchy"><a href="/api-docs/clay-web/haxe/_Exception/NativeException/">haxe._Exception.NativeException</a> → <a href="/api-docs/clay-web/haxe/Exception/">Exception</a> → <strong>haxe.ValueException</strong> (Class)</div>

An exception containing arbitrary value.

This class is automatically used for throwing values, which don't extend `haxe.Exception`
or native exception type.
For example:
```haxe
throw "Terrible error";
```
will be compiled to
```haxe
throw new ValueException("Terrible error");
```

## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thrown value.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Exception/" class="type-link">Exception</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Any](/api-docs/clay-web/Any/) | |
| `previous` | [Exception](/api-docs/clay-web/haxe/Exception/) | *(optional)* |
| `native` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

## Private Members

<div class="signature field-method has-description" id="unwrap"><code><span class="field-name">unwrap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#unwrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extract an originally thrown value.

This method must return the same value on subsequent calls.
Used internally for catching non-native exceptions.
Do _not_ override unless you know what you are doing.
| Returns |
|---------|
| [Any](/api-docs/clay-web/Any/) |


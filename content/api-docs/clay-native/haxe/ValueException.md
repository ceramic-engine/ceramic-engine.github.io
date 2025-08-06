---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ValueException
target: Clay (Native)
permalink: api-docs/clay-native/haxe/ValueException/
---

# ValueException

<div class="type-hierarchy"><a href="/api-docs/clay-native/haxe/Exception/">Exception</a> → <strong>haxe.ValueException</strong> (Class)</div>

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

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thrown value.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Exception/" class="type-link">Exception</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Any](/api-docs/clay-native/Any/) | |
| `previous` | [Exception](/api-docs/clay-native/haxe/Exception/) | *(optional)* |
| `native` | [Any](/api-docs/clay-native/Any/) | *(optional)* |


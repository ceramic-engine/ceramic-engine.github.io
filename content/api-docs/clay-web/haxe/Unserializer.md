---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Unserializer
target: Clay (Web)
permalink: api-docs/clay-web/haxe/Unserializer/
---

# Unserializer

<div class="type-hierarchy"><strong>haxe.Unserializer</strong> (Class)</div>

The `Unserializer` class is the complement to the `Serializer` class. It parses
a serialization `String` and creates objects from the contained data.

This class can be used in two ways:

- create a `new Unserializer()` instance with a given serialization
String, then call its `unserialize()` method until all values are
extracted
- call `Unserializer.run()`  to unserialize a single value from a given
String

The specification of the serialization format can be found here:
<https://haxe.org/manual/serialization/format>

## Static Members

<div class="signature field-var has-description" id="DEFAULT_RESOLVER"><code><span class="field-name">DEFAULT_RESOLVER</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/TypeResolver/" class="type-link">TypeResolver</a></code><a class="header-anchor" href="#DEFAULT_RESOLVER"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This value can be set to use custom type resolvers.

A type resolver finds a `Class` or `Enum` instance from a given `String`.
By default, the Haxe `Type` Api is used.

A type resolver must provide two methods:

1. `resolveClass(name:String):Class<Dynamic>` is called to determine a
`Class` from a class name
2. `resolveEnum(name:String):Enum<Dynamic>` is called to determine an
`Enum` from an enum name

This value is applied when a new `Unserializer` instance is created.
Changing it afterwards has no effect on previously created instances.

## Instance Members

<div class="signature field-method has-description" id="unserialize"><code><span class="field-name">unserialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#unserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unserializes the next part of `this` Unserializer instance and returns
the according value.

This function may call `this.resolver.resolveClass` to determine a
Class from a String, and `this.resolver.resolveEnum` to determine an
Enum from a String.

If `this` Unserializer instance contains no more or invalid data, an
exception is thrown.

This operation may fail on structurally valid data if a type cannot be
resolved or if a field cannot be set. This can happen when unserializing
Strings that were serialized on a different Haxe target, in which the
serialization side has to make sure not to include platform-specific
data.

Classes are created from `Type.createEmptyInstance`, which means their
constructors are not called.
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Unserializer instance, with its internal buffer
initialized to `buf`.

This does not parse `buf` immediately. It is parsed only when calls to
`this.unserialize` are made.

Each Unserializer instance maintains its own cache.

| Name | Type |
|------|------|
| `buf` | [String](/api-docs/clay-web/String/) |

## Private Members

<div class="signature field-var no-description" id="BASE64"><code><span class="field-name">BASE64</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#BASE64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CODES"><code><span class="field-name">CODES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#CODES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pos"><code><span class="field-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cache"><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scache"><code><span class="field-name">scache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#scache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="resolver"><code><span class="field-name">resolver</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/TypeResolver/" class="type-link">TypeResolver</a></code><a class="header-anchor" href="#resolver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="initCodes"><code><span class="field-name">initCodes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#initCodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fastLength"><code><span class="field-name">fastLength</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fastLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fastCharAt"><code><span class="field-name">fastCharAt</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fastCharAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fastSubstr"><code><span class="field-name">fastSubstr</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fastSubstr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |
| `pos` | [Int](/api-docs/clay-web/Int/) |
| `length` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readDigits"><code><span class="field-name">readDigits</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readDigits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readFloat"><code><span class="field-name">readFloat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unserializeObject"><code><span class="field-name">unserializeObject</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unserializeObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `o` | AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unserializeEnum"><code><span class="field-name">unserializeEnum</span><span class="parenthesis">(</span><span class="arg-name">edecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">unserializeEnum.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">tag</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">unserializeEnum.T</span></code><a class="header-anchor" href="#unserializeEnum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `edecl` | [Enum](/api-docs/clay-web/Enum/)<unserializeEnum.T> |
| `tag` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| unserializeEnum.T |


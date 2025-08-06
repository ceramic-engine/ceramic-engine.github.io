---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Serializer
target: Headless
permalink: api-docs/headless/haxe/Serializer/
---

# Serializer

<div class="type-hierarchy"><strong>haxe.Serializer</strong> (Class)</div>

The Serializer class can be used to encode values and objects into a `String`,
from which the `Unserializer` class can recreate the original representation.

This class can be used in two ways:

- create a `new Serializer()` instance, call its `serialize()` method with
any argument and finally retrieve the String representation from
`toString()`
- call `Serializer.run()` to obtain the serialized representation of a
single argument

Serialization is guaranteed to work for all haxe-defined classes, but may
or may not work for instances of external/native classes.

The specification of the serialization format can be found here:
<https://haxe.org/manual/std-serialization-format.html>

## Static Members

<div class="signature field-var has-description" id="USE_CACHE"><code><span class="field-name">USE_CACHE</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#USE_CACHE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the values you are serializing can contain circular references or
objects repetitions, you should set `USE_CACHE` to true to prevent
infinite loops.

This may also reduce the size of serialization Strings at the expense of
performance.

This value can be changed for individual instances of `Serializer` by
setting their `useCache` field.

<hr class="field-separator" />

<div class="signature field-var has-description" id="USE_ENUM_INDEX"><code><span class="field-name">USE_ENUM_INDEX</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#USE_ENUM_INDEX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Use constructor indexes for enums instead of names.

This may reduce the size of serialization Strings, but makes them less
suited for long-term storage: If constructors are removed or added from
the enum, the indices may no longer match.

This value can be changed for individual instances of `Serializer` by
setting their `useEnumIndex` field.

## Instance Members

<div class="signature field-var has-description" id="useCache"><code><span class="field-name">useCache</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The individual cache setting for `this` Serializer instance.

See `USE_CACHE` for a complete description.

<hr class="field-separator" />

<div class="signature field-var has-description" id="useEnumIndex"><code><span class="field-name">useEnumIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useEnumIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The individual enum index setting for `this` Serializer instance.

See `USE_ENUM_INDEX` for a complete description.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the String representation of `this` Serializer.

The exact format specification can be found here:
https://haxe.org/manual/serialization/format
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serialize"><code><span class="field-name">serialize</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#serialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes `v`.

All haxe-defined values and objects with the exception of functions can
be serialized. Serialization of external/native objects is not
guaranteed to work.

The values of `this.useCache` and `this.useEnumIndex` may affect
serialization output.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Serializer instance.

Subsequent calls to `this.serialize` will append values to the
internal buffer of this String. Once complete, the contents can be
retrieved through a call to `this.toString`.

Each `Serializer` instance maintains its own cache if `this.useCache` is
`true`.

## Private Members

<div class="signature field-var no-description" id="BASE64"><code><span class="field-name">BASE64</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#BASE64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BASE64_CODES"><code><span class="field-name">BASE64_CODES</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/ds/Vector/" class="type-link">haxe.ds.Vector</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#BASE64_CODES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/StringBuf/" class="type-link">StringBuf</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cache"><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="shash"><code><span class="field-name">shash</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/StringMap/" class="type-link">haxe.ds.StringMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#shash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scount"><code><span class="field-name">scount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeString"><code><span class="field-name">serializeString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#serializeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeRef"><code><span class="field-name">serializeRef</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#serializeRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeFields"><code><span class="field-name">serializeFields</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#serializeFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | AnonStruct |


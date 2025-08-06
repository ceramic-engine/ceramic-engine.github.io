---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Reflect
target: Unity
permalink: api-docs/unity/Reflect/
---

# Reflect

<div class="type-hierarchy"><strong>Reflect</strong> (Class)</div>

The Reflect API is a way to manipulate values dynamically through an
abstract interface in an untyped manner. Use with care.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-reflection.html</div>


## Static Members

<div class="signature field-method has-description" id="hasField"><code><span class="field-name">hasField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if structure `o` has a field named `field`.

This is only guaranteed to work for anonymous structures. Refer to
`Type.getInstanceFields` for a function supporting class instances.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="field"><code><span class="field-name">field</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#field"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the field named `field` on object `o`.

If `o` is not an object or has no field named `field`, the result is
null.

If the field is defined as a property, its accessors are ignored. Refer
to `Reflect.getProperty` for a function supporting property accessors.

If `field` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setField"><code><span class="field-name">setField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the field named `field` of object `o` to value `value`.

If `o` has no field named `field`, this function is only guaranteed to
work for anonymous structures.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getProperty"><code><span class="field-name">getProperty</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the field named `field` on object `o`, taking
property getter functions into account.

If the field is not a property, this function behaves like
`Reflect.field`, but might be slower.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setProperty"><code><span class="field-name">setProperty</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the field named `field` of object `o` to value `value`, taking
property setter functions into account.

If the field is not a property, this function behaves like
`Reflect.setField`, but might be slower.

If `field` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="callMethod"><code><span class="field-name">callMethod</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#callMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call a method `func` with the given arguments `args`.

The object `o` is ignored in most cases. It serves as the `this`-context in the following
situations:

(neko) Allows switching the context to `o` in all cases.
(macro) Same as neko for Haxe 3. No context switching in Haxe 4.
(js, lua) Require the `o` argument if `func` does not, but should have a context.
This can occur by accessing a function field natively, e.g. through `Reflect.field`
or by using `(object : Dynamic).field`. However, if `func` has a context, `o` is
ignored like on other targets.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `func` | [haxe.Function](/api-docs/unity/haxe/Function/) |
| `args` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fields"><code><span class="field-name">fields</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the fields of structure `o`.

This method is only guaranteed to work on anonymous structures. Refer to
`Type.getInstanceFields` for a function supporting class instances.

If `o` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFunction"><code><span class="field-name">isFunction</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if `f` is a function, false otherwise.

If `f` is null, the result is false.

| Name | Type |
|------|------|
| `f` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">compare.T</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">compare.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares `a` and `b`.

If `a` is less than `b`, the result is negative. If `b` is less than
`a`, the result is positive. If `a` and `b` are equal, the result is 0.

This function is only defined if `a` and `b` are of the same type.

If that type is a function, the result is unspecified and
`Reflect.compareMethods` should be used instead.

For all other types, the result is 0 if `a` and `b` are equal. If they
are not equal, the result depends on the type and is negative if:

- Numeric types: a is less than b
- String: a is lexicographically less than b
- Other: unspecified

If `a` and `b` are null, the result is 0. If only one of them is null,
the result is unspecified.

| Name | Type |
|------|------|
| `a` | compare.T |
| `b` | compare.T |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compareMethods"><code><span class="field-name">compareMethods</span><span class="parenthesis">(</span><span class="arg-name">f1</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f2</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compareMethods"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares the functions `f1` and `f2`.

If `f1` or `f2` are null, the result is false.
If `f1` or `f2` are not functions, the result is unspecified.

Otherwise the result is true if `f1` and the `f2` are physically equal,
false otherwise.

If `f1` or `f2` are member method closures, the result is true if they
are closures of the same method on the same object value, false otherwise.

| Name | Type |
|------|------|
| `f1` | [Dynamic](/api-docs/unity/Dynamic/) |
| `f2` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isObject"><code><span class="field-name">isObject</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `v` is an object.

The result is true if `v` is one of the following:

- class instance
- structure
- `Class<T>`
- `Enum<T>`

Otherwise, including if `v` is null, the result is false.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEnumValue"><code><span class="field-name">isEnumValue</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEnumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `v` is an enum value.

The result is true if `v` is of type EnumValue, i.e. an enum
constructor.

Otherwise, including if `v` is null, the result is false.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteField"><code><span class="field-name">deleteField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#deleteField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the field named `field` from structure `o`.

This method is only guaranteed to work on anonymous structures.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/unity/Dynamic/) |
| `field` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">copy.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">copy.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the fields of structure `o`.

This is only guaranteed to work on anonymous structures.

If `o` is null, the result is `null`.

| Name | Type |
|------|------|
| `o` | [Null](/api-docs/unity/Null/)<copy.T> |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<copy.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makeVarArgs"><code><span class="field-name">makeVarArgs</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#makeVarArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a function taking an array of arguments into a function that can
be called with any number of arguments.

| Name | Type |
|------|------|
| `f` | Function |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

## Private Members

<div class="signature field-method no-description" id="instanceFields"><code><span class="field-name">instanceFields</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instanceFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Class](/api-docs/unity/Class/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


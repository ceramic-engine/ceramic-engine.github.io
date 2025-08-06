---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Reflect
target: Headless
permalink: api-docs/headless/Reflect/
---

# Reflect

<div class="type-hierarchy"><strong>Reflect</strong> (Class)</div>

The Reflect API is a way to manipulate values dynamically through an
abstract interface in an untyped manner. Use with care.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-reflection.html</div>


## Static Members

<div class="signature field-method has-description" id="hasField"><code><span class="field-name">hasField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if structure `o` has a field named `field`.

This is only guaranteed to work for anonymous structures. Refer to
`Type.getInstanceFields` for a function supporting class instances.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="field"><code><span class="field-name">field</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#field"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the field named `field` on object `o`.

If `o` is not an object or has no field named `field`, the result is
null.

If the field is defined as a property, its accessors are ignored. Refer
to `Reflect.getProperty` for a function supporting property accessors.

If `field` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setField"><code><span class="field-name">setField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the field named `field` of object `o` to value `value`.

If `o` has no field named `field`, this function is only guaranteed to
work for anonymous structures.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getProperty"><code><span class="field-name">getProperty</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the field named `field` on object `o`, taking
property getter functions into account.

If the field is not a property, this function behaves like
`Reflect.field`, but might be slower.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setProperty"><code><span class="field-name">setProperty</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the field named `field` of object `o` to value `value`, taking
property setter functions into account.

If the field is not a property, this function behaves like
`Reflect.setField`, but might be slower.

If `field` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="callMethod"><code><span class="field-name">callMethod</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#callMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `func` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `args` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fields"><code><span class="field-name">fields</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the fields of structure `o`.

This method is only guaranteed to work on anonymous structures. Refer to
`Type.getInstanceFields` for a function supporting class instances.

If `o` is null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFunction"><code><span class="field-name">isFunction</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if `f` is a function, false otherwise.

If `f` is null, the result is false.

| Name | Type |
|------|------|
| `f` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="compare"><code><span class="field-name">compare</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">compare.T</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">compare.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isObject"><code><span class="field-name">isObject</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `v` is an object.

The result is true if `v` is one of the following:

- class instance
- structure
- `Class<T>`
- `Enum<T>`

Otherwise, including if `v` is null, the result is false.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEnumValue"><code><span class="field-name">isEnumValue</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEnumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `v` is an enum value.

The result is true if `v` is of type EnumValue, i.e. an enum
constructor.

Otherwise, including if `v` is null, the result is false.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteField"><code><span class="field-name">deleteField</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#deleteField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the field named `field` from structure `o`.

This method is only guaranteed to work on anonymous structures.

If `o` or `field` are null, the result is unspecified.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |
| `field` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">copy.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">copy.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the fields of structure `o`.

This is only guaranteed to work on anonymous structures.

If `o` is null, the result is `null`.

| Name | Type |
|------|------|
| `o` | [Null](/api-docs/headless/Null/)<copy.T> |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<copy.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="makeVarArgs"><code><span class="field-name">makeVarArgs</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#makeVarArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a function taking an array of arguments into a function that can
be called with any number of arguments.

| Name | Type |
|------|------|
| `f` | Function |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |


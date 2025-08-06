---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Type
target: Clay (Web)
permalink: api-docs/clay-web/Type/
---

# Type

<div class="type-hierarchy"><strong>Type</strong> (Class)</div>

The Haxe Reflection API allows retrieval of type information at runtime.

This class complements the more lightweight Reflect class, with a focus on
class and enum instances.

<div class="see"><strong>See:</strong> https://haxe.org/manual/types.html, https://haxe.org/manual/std-reflection.html</div>


## Static Members

<div class="signature field-method has-description" id="getClass"><code><span class="field-name">getClass</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <span class="type-name">getClass.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getClass.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the class of `o`, if `o` is a class instance.

If `o` is null or of a different type, null is returned.

In general, type parameter information cannot be obtained at runtime.

| Name | Type |
|------|------|
| `o` | getClass.T |

| Returns |
|---------|
| [Class](/api-docs/clay-web/Class/)<getClass.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSuperClass"><code><span class="field-name">getSuperClass</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSuperClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the super-class of class `c`.

If `c` has no super class, null is returned.

If `c` is null, the result is unspecified.

In general, type parameter information cannot be obtained at runtime.

| Name | Type |
|------|------|
| `c` | [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getClassName"><code><span class="field-name">getClassName</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getClassName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of class `c`, including its path.

If `c` is inside a package, the package structure is returned dot-
separated, with another dot separating the class name:
`pack1.pack2.(...).packN.ClassName`
If `c` is a sub-type of a Haxe module, that module is not part of the
package structure.

If `c` has no package, the class name is returned.

If `c` is null, the result is unspecified.

The class name does not include any type parameters.

| Name | Type |
|------|------|
| `c` | [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEnumName"><code><span class="field-name">getEnumName</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getEnumName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of enum `e`, including its path.

If `e` is inside a package, the package structure is returned dot-
separated, with another dot separating the enum name:
`pack1.pack2.(...).packN.EnumName`
If `e` is a sub-type of a Haxe module, that module is not part of the
package structure.

If `e` has no package, the enum name is returned.

If `e` is null, the result is unspecified.

The enum name does not include any type parameters.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/clay-web/Enum/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveClass"><code><span class="field-name">resolveClass</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves a class by name.

If `name` is the path of an existing class, that class is returned.

Otherwise null is returned.

If `name` is null or the path to a different type, the result is
unspecified.

The class name must not include any type parameters.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveEnum"><code><span class="field-name">resolveEnum</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveEnum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves an enum by name.

If `name` is the path of an existing enum, that enum is returned.

Otherwise null is returned.

If `name` is null the result is unspecified.

If `name` is the path to a different type, null is returned.

The enum name must not include any type parameters.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Enum](/api-docs/clay-web/Enum/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createInstance"><code><span class="field-name">createInstance</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">createInstance.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">createInstance.T</span></code><a class="header-anchor" href="#createInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an instance of class `cl`, using `args` as arguments to the
class constructor.

This function guarantees that the class constructor is called.

Default values of constructors arguments are not guaranteed to be
taken into account.

If `cl` or `args` are null, or if the number of elements in `args` does
not match the expected number of constructor arguments, or if any
argument has an invalid type,  or if `cl` has no own constructor, the
result is unspecified.

In particular, default values of constructor arguments are not
guaranteed to be taken into account.

| Name | Type |
|------|------|
| `cl` | [Class](/api-docs/clay-web/Class/)<createInstance.T> |
| `args` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| createInstance.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createEmptyInstance"><code><span class="field-name">createEmptyInstance</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">createEmptyInstance.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">createEmptyInstance.T</span></code><a class="header-anchor" href="#createEmptyInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an instance of class `cl`.

This function guarantees that the class constructor is not called.

If `cl` is null, the result is unspecified.

| Name | Type |
|------|------|
| `cl` | [Class](/api-docs/clay-web/Class/)<createEmptyInstance.T> |

| Returns |
|---------|
| createEmptyInstance.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createEnum"><code><span class="field-name">createEnum</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">createEnum.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">constr</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">createEnum.T</span></code><a class="header-anchor" href="#createEnum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an instance of enum `e` by calling its constructor `constr` with
arguments `params`.

If `e` or `constr` is null, or if enum `e` has no constructor named
`constr`, or if the number of elements in `params` does not match the
expected number of constructor arguments, or if any argument has an
invalid type, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `e` | [Enum](/api-docs/clay-web/Enum/)<createEnum.T> | |
| `constr` | [String](/api-docs/clay-web/String/) | |
| `params` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | *(optional)* |

| Returns |
|---------|
| createEnum.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInstanceFields"><code><span class="field-name">getInstanceFields</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getInstanceFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the instance fields of class `c`, including
inherited fields.

This only includes fields which are known at compile-time. In
particular, using `getInstanceFields(getClass(obj))` will not include
any fields which were added to `obj` at runtime.

The order of the fields in the returned Array is unspecified.

If `c` is null, the result is unspecified.

| Name | Type |
|------|------|
| `c` | [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEnumConstructs"><code><span class="field-name">getEnumConstructs</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEnumConstructs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the names of all constructors of enum `e`.

The order of the constructor names in the returned Array is preserved
from the original syntax.

If `e` is null, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/clay-web/Enum/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeof"><code><span class="field-name">typeof</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#typeof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the runtime type of value `v`.

The result corresponds to the type `v` has at runtime, which may vary
per platform. Assumptions regarding this should be minimized to avoid
surprises.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enumEq"><code><span class="field-name">enumEq</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <span class="type-name">enumEq.T</span><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <span class="type-name">enumEq.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enumEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively compares two enum instances `a` and `b` by value.

Unlike `a == b`, this function performs a deep equality check on the
arguments of the constructors, if exists.

If `a` or `b` are null, the result is unspecified.

| Name | Type |
|------|------|
| `a` | enumEq.T |
| `b` | enumEq.T |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enumConstructor"><code><span class="field-name">enumConstructor</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#enumConstructor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the constructor name of enum instance `e`.

The result String does not contain any constructor arguments.

If `e` is null, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/clay-web/EnumValue/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enumParameters"><code><span class="field-name">enumParameters</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumParameters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the constructor arguments of enum instance `e`.

If `e` has no arguments, the result is [].

Otherwise the result are the values that were used as arguments to `e`,
in the order of their declaration.

If `e` is null, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/clay-web/EnumValue/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enumIndex"><code><span class="field-name">enumIndex</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/EnumValue/" class="type-link">EnumValue</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#enumIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the index of enum instance `e`.

This corresponds to the original syntactic position of `e`. The index of
the first declared constructor is 0, the next one is 1 etc.

If `e` is null, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [EnumValue](/api-docs/clay-web/EnumValue/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allEnums"><code><span class="field-name">allEnums</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-web/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">allEnums.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">allEnums.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#allEnums"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of all constructors of enum `e` that require no
arguments.

This may return the empty Array `[]` if all constructors of `e` require
arguments.

Otherwise an instance of `e` constructed through each of its non-
argument constructors is returned, in the order of the constructor
declaration.

If `e` is null, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/clay-web/Enum/)<allEnums.T> |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<allEnums.T> |


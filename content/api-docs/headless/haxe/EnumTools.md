---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EnumTools
target: Headless
permalink: api-docs/headless/haxe/EnumTools/
---

# EnumTools

<div class="type-hierarchy"><strong>haxe.EnumTools</strong> (extern class)</div>

This class provides advanced methods on enums. It is ideally used with
`using EnumTools` and then acts as an
[extension](https://haxe.org/manual/lf-static-extension.html) to the
`enum` types.

If the first argument to any of the methods is `null`, the result is
unspecified.

## Static Members

<div class="signature field-method has-description" id="getName"><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">getName.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of enum `e`, including its path.

If `e` is inside a package, the package structure is returned dot-
separated, with another dot separating the enum name:

pack1.pack2.(...).packN.EnumName

If `e` is a sub-type of a Haxe module, that module is not part of the
package structure.

If `e` has no package, the enum name is returned.

If `e` is `null`, the result is unspecified.

The enum name does not include any type parameters.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/headless/Enum/)<getName.T> |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createByName"><code><span class="field-name">createByName</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">createByName.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">constr</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">params</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">createByName.T</span></code><a class="header-anchor" href="#createByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an instance of enum `e` by calling its constructor `constr` with
arguments `params`.

If `e` or `constr` is `null`, or if enum `e` has no constructor named
`constr`, or if the number of elements in `params` does not match the
expected number of constructor arguments, or if any argument has an
invalid type, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `e` | [Enum](/api-docs/headless/Enum/)<createByName.T> | |
| `constr` | [String](/api-docs/headless/String/) | |
| `params` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> | *(optional)* |

| Returns |
|---------|
| createByName.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createByIndex"><code><span class="field-name">createByIndex</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">createByIndex.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">params</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">createByIndex.T</span></code><a class="header-anchor" href="#createByIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an instance of enum `e` by calling its constructor number
`index` with arguments `params`.

The constructor indices are preserved from Haxe syntax, so the first
declared is index 0, the next index 1 etc.

If `e` or `index` is `null`, or if enum `e` has no constructor
corresponding to index `index`, or if the number of elements in `params`
does not match the expected number of constructor arguments, or if any
argument has an invalid type, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `e` | [Enum](/api-docs/headless/Enum/)<createByIndex.T> | |
| `index` | [Int](/api-docs/headless/Int/) | |
| `params` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> | *(optional)* |

| Returns |
|---------|
| createByIndex.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAll"><code><span class="field-name">createAll</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">createAll.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">createAll.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#createAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of all constructors of enum `e` that require no
arguments.

This may return the empty Array `[]` if all constructors of `e` require
arguments.

Otherwise an instance of `e` constructed through each of its non-
argument constructors is returned, in the order of the constructor
declaration.

If `e` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/headless/Enum/)<createAll.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<createAll.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getConstructors"><code><span class="field-name">getConstructors</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/headless/Enum/" class="type-link">Enum</a><span class="operator">&lt;</span><span class="type-name">getConstructors.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getConstructors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of the names of all constructors of enum `e`.

The order of the constructor names in the returned Array is preserved
from the original syntax.

If `c` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `e` | [Enum](/api-docs/headless/Enum/)<getConstructors.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |


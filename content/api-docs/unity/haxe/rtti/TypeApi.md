---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: TypeApi
target: Unity
permalink: api-docs/unity/haxe/rtti/TypeApi/
---

# TypeApi

<div class="type-hierarchy"><strong>haxe.rtti.TypeApi</strong> (Class)</div>

Contains type and equality checks functionalities for RTTI.

## Static Members

<div class="signature field-method no-description" id="typeInfos"><code><span class="field-name">typeInfos</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/TypeInfos/" class="type-link">TypeInfos</a></code><a class="header-anchor" href="#typeInfos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | Anonymous |

| Returns |
|---------|
| [TypeInfos](/api-docs/unity/haxe/rtti/TypeInfos/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rightsEq"><code><span class="field-name">rightsEq</span><span class="parenthesis">(</span><span class="arg-name">r1</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">r2</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rightsEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unlike `r1 == r2`, this function performs a deep equality check on
the given `Rights` instances.

If `r1` or `r2` are `null`, the result is unspecified.

| Name | Type |
|------|------|
| `r1` | Anonymous |
| `r2` | Anonymous |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeEq"><code><span class="field-name">typeEq</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#typeEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unlike `t1 == t2`, this function performs a deep equality check on
the given `CType` instances.

If `t1` or `t2` are `null`, the result is unspecified.

| Name | Type |
|------|------|
| `t1` | Anonymous |
| `t2` | Anonymous |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fieldEq"><code><span class="field-name">fieldEq</span><span class="parenthesis">(</span><span class="arg-name">f1</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="operator">,</span> <span class="arg-name">f2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/ClassField/" class="type-link">ClassField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#fieldEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unlike `f1 == f2`, this function performs a deep equality check on
the given `ClassField` instances.

If `f1` or `f2` are `null`, the result is unspecified.

| Name | Type |
|------|------|
| `f1` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |
| `f2` | [ClassField](/api-docs/unity/haxe/rtti/ClassField/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="constructorEq"><code><span class="field-name">constructorEq</span><span class="parenthesis">(</span><span class="arg-name">c1</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/EnumField/" class="type-link">EnumField</a><span class="operator">,</span> <span class="arg-name">c2</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/rtti/EnumField/" class="type-link">EnumField</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#constructorEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unlike `c1 == c2`, this function performs a deep equality check on
the arguments of the enum constructors, if exists.

If `c1` or `c2` are `null`, the result is unspecified.

| Name | Type |
|------|------|
| `c1` | [EnumField](/api-docs/unity/haxe/rtti/EnumField/) |
| `c2` | [EnumField](/api-docs/unity/haxe/rtti/EnumField/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Private Members

<div class="signature field-method no-description" id="leq"><code><span class="field-name">leq</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">l1</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">leq.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">l2</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">leq.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#leq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `f` | Function |
| `l1` | [Array](/api-docs/unity/Array/)<leq.T> |
| `l2` | [Array](/api-docs/unity/Array/)<leq.T> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


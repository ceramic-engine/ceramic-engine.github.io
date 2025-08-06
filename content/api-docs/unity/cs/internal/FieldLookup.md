---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FieldLookup
target: Unity
permalink: api-docs/unity/cs/internal/FieldLookup/
---

# FieldLookup

<div class="type-hierarchy"><strong>cs.internal.FieldLookup</strong> (final class)</div>

## Static Members

<div class="signature field-method no-description" id="lookupHash"><code><span class="field-name">lookupHash</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#lookupHash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hash"><code><span class="field-name">hash</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findHash"><code><span class="field-name">findHash</span><span class="parenthesis">(</span><span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hashs</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findHash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hash` | [Int](/api-docs/unity/Int/) |
| `hashs` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `length` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeInt"><code><span class="field-name">removeInt</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeFloat"><code><span class="field-name">removeFloat</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeDynamic"><code><span class="field-name">removeDynamic</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeDynamic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertInt"><code><span class="field-name">insertInt</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#insertInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |
| `x` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertFloat"><code><span class="field-name">insertFloat</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#insertFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |
| `x` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertDynamic"><code><span class="field-name">insertDynamic</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#insertDynamic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |
| `x` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertString"><code><span class="field-name">insertString</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#insertString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |
| `length` | [Int](/api-docs/unity/Int/) |
| `pos` | [Int](/api-docs/unity/Int/) |
| `x` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getHashConflict"><code><span class="field-name">getHashConflict</span><span class="parenthesis">(</span><span class="arg-name">head</span><span class="operator">:</span> <a href="/api-docs/unity/cs/internal/FieldHashConflict/" class="type-link">FieldHashConflict</a><span class="operator">,</span> <span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/internal/FieldHashConflict/" class="type-link">FieldHashConflict</a></code><a class="header-anchor" href="#getHashConflict"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `head` | [FieldHashConflict](/api-docs/unity/cs/internal/FieldHashConflict/) |
| `hash` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FieldHashConflict](/api-docs/unity/cs/internal/FieldHashConflict/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setHashConflict"><code><span class="field-name">setHashConflict</span><span class="parenthesis">(</span><span class="arg-name">head</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHashConflict"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `head` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `hash` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deleteHashConflict"><code><span class="field-name">deleteHashConflict</span><span class="parenthesis">(</span><span class="arg-name">head</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#deleteHashConflict"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `head` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `hash` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addHashConflictNames"><code><span class="field-name">addHashConflictNames</span><span class="parenthesis">(</span><span class="arg-name">head</span><span class="operator">:</span> <a href="/api-docs/unity/cs/internal/FieldHashConflict/" class="type-link">FieldHashConflict</a><span class="operator">,</span> <span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addHashConflictNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `head` | [FieldHashConflict](/api-docs/unity/cs/internal/FieldHashConflict/) |
| `arr` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

## Private Members

<div class="signature field-var no-description" id="fieldIds"><code><span class="field-name">fieldIds</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fieldIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fields"><code><span class="field-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addFields"><code><span class="field-name">addFields</span><span class="parenthesis">(</span><span class="arg-name">nids</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">nfields</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nids` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `nfields` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doHash"><code><span class="field-name">doHash</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#doHash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:classCode` | "#pragma warning disable 628\n" |
| `:nativeGen` | - |
| `:static` | - |


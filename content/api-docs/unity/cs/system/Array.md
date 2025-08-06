---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Array
target: Unity
permalink: api-docs/unity/cs/system/Array/
---

# Array

<div class="type-hierarchy"><strong>cs.system.Array</strong> (extern class) → <a href="/api-docs/unity/cs/NativeArray/">cs.NativeArray</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">ICloneable</a>, <a href="/api-docs/unity/cs/system/collections/ICollection/">cs.system.collections.ICollection</a>, <a href="/api-docs/unity/cs/system/collections/IEnumerable/">cs.system.collections.IEnumerable</a>, <a href="/api-docs/unity/cs/system/collections/IList/">cs.system.collections.IList</a></div>

## Static Members

<div class="signature field-method no-description" id="CreateInstance"><code><span class="field-name">CreateInstance</span><span class="parenthesis">(</span><span class="arg-name">elementType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Array</a></code><a class="header-anchor" href="#CreateInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elementType` | [Type](/api-docs/unity/cs/system/Type/) |
| `length` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Array](/api-docs/unity/cs/system/Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BinarySearch"><code><span class="field-name">BinarySearch</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BinarySearch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/unity/cs/system/Array/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Copy"><code><span class="field-name">Copy</span><span class="parenthesis">(</span><span class="arg-name">sourceArray</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">destinationArray</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceArray` | [Array](/api-docs/unity/cs/system/Array/) |
| `destinationArray` | [Array](/api-docs/unity/cs/system/Array/) |
| `length` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LastIndexOf"><code><span class="field-name">LastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/unity/cs/system/Array/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reverse"><code><span class="field-name">Reverse</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/unity/cs/system/Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Sort"><code><span class="field-name">Sort</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/unity/cs/system/Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Resize"><code><span class="field-name">Resize</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">newSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `newSize` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="TrueForAll"><code><span class="field-name">TrueForAll</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/TrueForAll/M0/" class="type-link">TrueForAll.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/TrueForAll/M0/" class="type-link">TrueForAll.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#TrueForAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[TrueForAll.M0](/api-docs/unity/TrueForAll/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[TrueForAll.M0](/api-docs/unity/TrueForAll/M0/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ForEach"><code><span class="field-name">ForEach</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ForEach/M0/" class="type-link">ForEach.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">action</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Action_1/" class="type-link">Action_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/ForEach/M0/" class="type-link">ForEach.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ForEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ForEach.M0](/api-docs/unity/ForEach/M0/)> |
| `action` | [Action_1](/api-docs/unity/cs/system/Action_1/)<[ForEach.M0](/api-docs/unity/ForEach/M0/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ConvertAll"><code><span class="field-name">ConvertAll</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ConvertAll/M0/" class="type-link">ConvertAll.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">converter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Converter_2/" class="type-link">Converter_2</a><span class="operator">&lt;</span><a href="/api-docs/unity/ConvertAll/M0/" class="type-link">ConvertAll.M0</a><span class="operator">,</span> <a href="/api-docs/unity/ConvertAll/M1/" class="type-link">ConvertAll.M1</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ConvertAll/M1/" class="type-link">ConvertAll.M1</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ConvertAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ConvertAll.M0](/api-docs/unity/ConvertAll/M0/)> |
| `converter` | [Converter_2](/api-docs/unity/cs/system/Converter_2/)<[ConvertAll.M0](/api-docs/unity/ConvertAll/M0/), [ConvertAll.M1](/api-docs/unity/ConvertAll/M1/)> |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ConvertAll.M1](/api-docs/unity/ConvertAll/M1/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FindLastIndex"><code><span class="field-name">FindLastIndex</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindLastIndex/M0/" class="type-link">FindLastIndex.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindLastIndex/M0/" class="type-link">FindLastIndex.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FindLastIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FindLastIndex.M0](/api-docs/unity/FindLastIndex/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[FindLastIndex.M0](/api-docs/unity/FindLastIndex/M0/)> |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FindIndex"><code><span class="field-name">FindIndex</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindIndex/M0/" class="type-link">FindIndex.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindIndex/M0/" class="type-link">FindIndex.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FindIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FindIndex.M0](/api-docs/unity/FindIndex/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[FindIndex.M0](/api-docs/unity/FindIndex/M0/)> |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FindAll"><code><span class="field-name">FindAll</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindAll/M0/" class="type-link">FindAll.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindAll/M0/" class="type-link">FindAll.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindAll/M0/" class="type-link">FindAll.M0</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#FindAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FindAll.M0](/api-docs/unity/FindAll/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[FindAll.M0](/api-docs/unity/FindAll/M0/)> |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FindAll.M0](/api-docs/unity/FindAll/M0/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Exists"><code><span class="field-name">Exists</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Exists/M0/" class="type-link">Exists.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/Exists/M0/" class="type-link">Exists.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Exists.M0](/api-docs/unity/Exists/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[Exists.M0](/api-docs/unity/Exists/M0/)> |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AsReadOnly"><code><span class="field-name">AsReadOnly</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/AsReadOnly/M0/" class="type-link">AsReadOnly.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/objectmodel/ReadOnlyCollection_1/" class="type-link">cs.system.collections.objectmodel.ReadOnlyCollection_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/AsReadOnly/M0/" class="type-link">AsReadOnly.M0</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#AsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[AsReadOnly.M0](/api-docs/unity/AsReadOnly/M0/)> |

| Returns |
|---------|
| [cs.system.collections.objectmodel.ReadOnlyCollection_1](/api-docs/unity/cs/system/collections/objectmodel/ReadOnlyCollection_1/)<[AsReadOnly.M0](/api-docs/unity/AsReadOnly/M0/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Find"><code><span class="field-name">Find</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Find/M0/" class="type-link">Find.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/Find/M0/" class="type-link">Find.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Find/M0/" class="type-link">Find.M0</a></code><a class="header-anchor" href="#Find"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Find.M0](/api-docs/unity/Find/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[Find.M0](/api-docs/unity/Find/M0/)> |

| Returns |
|---------|
| [Find.M0](/api-docs/unity/Find/M0/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FindLast"><code><span class="field-name">FindLast</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindLast/M0/" class="type-link">FindLast.M0</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Predicate_1/" class="type-link">Predicate_1</a><span class="operator">&lt;</span><a href="/api-docs/unity/FindLast/M0/" class="type-link">FindLast.M0</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/FindLast/M0/" class="type-link">FindLast.M0</a></code><a class="header-anchor" href="#FindLast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FindLast.M0](/api-docs/unity/FindLast/M0/)> |
| `match` | [Predicate_1](/api-docs/unity/cs/system/Predicate_1/)<[FindLast.M0](/api-docs/unity/FindLast/M0/)> |

| Returns |
|---------|
| [FindLast.M0](/api-docs/unity/FindLast/M0/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ConstrainedCopy"><code><span class="field-name">ConstrainedCopy</span><span class="parenthesis">(</span><span class="arg-name">sourceArray</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">sourceIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">destinationArray</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">destinationIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ConstrainedCopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceArray` | [Array](/api-docs/unity/cs/system/Array/) |
| `sourceIndex` | [Int](/api-docs/unity/Int/) |
| `destinationArray` | [Array](/api-docs/unity/cs/system/Array/) |
| `destinationIndex` | [Int](/api-docs/unity/Int/) |
| `length` | [Int](/api-docs/unity/Int/) |

## Instance Members

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFixedSize"><code><span class="field-name">IsFixedSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFixedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SyncRoot"><code><span class="field-name">SyncRoot</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#SyncRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSynchronized"><code><span class="field-name">IsSynchronized</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSynchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Rank"><code><span class="field-name">Rank</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Rank"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LongLength"><code><span class="field-name">LongLength</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#LongLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Length"><code><span class="field-name">Length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLength"><code><span class="field-name">GetLength</span><span class="parenthesis">(</span><span class="arg-name">dimension</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dimension` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLongLength"><code><span class="field-name">GetLongLength</span><span class="parenthesis">(</span><span class="arg-name">dimension</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#GetLongLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dimension` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLowerBound"><code><span class="field-name">GetLowerBound</span><span class="parenthesis">(</span><span class="arg-name">dimension</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetLowerBound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dimension` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetValue"><code><span class="field-name">GetValue</span><span class="parenthesis">(</span><span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `indices` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetValue"><code><span class="field-name">SetValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `indices` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">cs.system.collections.IEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.collections.IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUpperBound"><code><span class="field-name">GetUpperBound</span><span class="parenthesis">(</span><span class="arg-name">dimension</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetUpperBound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dimension` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Initialize"><code><span class="field-name">Initialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Initialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CopyTo"><code><span class="field-name">CopyTo</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="#" class="type-link">Array</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CopyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/unity/cs/system/Array/) |
| `index` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |


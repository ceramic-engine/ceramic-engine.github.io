---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ArrayList
target: Unity
permalink: api-docs/unity/cs/system/collections/ArrayList/
---

# ArrayList

<div class="type-hierarchy"><strong>cs.system.collections.ArrayList</strong> (extern class) → <a href="/api-docs/unity/cs/system/collections/ArrayList_ArrayListAdapter/">ArrayList_ArrayListAdapter</a>, <a href="/api-docs/unity/cs/system/collections/ArrayList_ArrayListWrapper/">ArrayList_ArrayListWrapper</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">cs.system.ICloneable</a>, <a href="/api-docs/unity/cs/system/collections/ICollection/">ICollection</a>, <a href="/api-docs/unity/cs/system/collections/IEnumerable/">IEnumerable</a>, <a href="/api-docs/unity/cs/system/collections/IList/">IList</a></div>

## Static Members

<div class="signature field-method no-description" id="Adapter"><code><span class="field-name">Adapter</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IList/" class="type-link">IList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#Adapter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `list` | [IList](/api-docs/unity/cs/system/collections/IList/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Synchronized"><code><span class="field-name">Synchronized</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#Synchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `list` | [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadOnly"><code><span class="field-name">ReadOnly</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#ReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `list` | [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FixedSize"><code><span class="field-name">FixedSize</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#FixedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `list` | [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Repeat"><code><span class="field-name">Repeat</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#Repeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `count` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

## Instance Members

<div class="signature field-var no-description" id="SyncRoot"><code><span class="field-name">SyncRoot</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#SyncRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSynchronized"><code><span class="field-name">IsSynchronized</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSynchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFixedSize"><code><span class="field-name">IsFixedSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFixedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Capacity"><code><span class="field-name">Capacity</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Capacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Count"><code><span class="field-name">Count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Add"><code><span class="field-name">Add</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clear"><code><span class="field-name">Clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Contains"><code><span class="field-name">Contains</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IndexOf"><code><span class="field-name">IndexOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#IndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LastIndexOf"><code><span class="field-name">LastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Insert"><code><span class="field-name">Insert</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Insert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InsertRange"><code><span class="field-name">InsertRange</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/ICollection/" class="type-link">ICollection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#InsertRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `c` | [ICollection](/api-docs/unity/cs/system/collections/ICollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Remove"><code><span class="field-name">Remove</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAt"><code><span class="field-name">RemoveAt</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveRange"><code><span class="field-name">RemoveRange</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reverse"><code><span class="field-name">Reverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CopyTo"><code><span class="field-name">CopyTo</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CopyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">IEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddRange"><code><span class="field-name">AddRange</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/ICollection/" class="type-link">ICollection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [ICollection](/api-docs/unity/cs/system/collections/ICollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BinarySearch"><code><span class="field-name">BinarySearch</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BinarySearch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRange"><code><span class="field-name">GetRange</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ArrayList</a></code><a class="header-anchor" href="#GetRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetRange"><code><span class="field-name">SetRange</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/ICollection/" class="type-link">ICollection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `c` | [ICollection](/api-docs/unity/cs/system/collections/ICollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="TrimToSize"><code><span class="field-name">TrimToSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#TrimToSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Sort"><code><span class="field-name">Sort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToArray"><code><span class="field-name">ToArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ToArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


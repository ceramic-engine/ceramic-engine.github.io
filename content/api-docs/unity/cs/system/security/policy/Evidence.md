---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Evidence
target: Unity
permalink: api-docs/unity/cs/system/security/policy/Evidence/
---

# Evidence

<div class="type-hierarchy"><strong>cs.system.security.policy.Evidence</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/collections/ICollection/">cs.system.collections.ICollection</a>, <a href="/api-docs/unity/cs/system/collections/IEnumerable/">cs.system.collections.IEnumerable</a></div>

## Instance Members

<div class="signature field-var no-description" id="SyncRoot"><code><span class="field-name">SyncRoot</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#SyncRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Locked"><code><span class="field-name">Locked</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Locked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSynchronized"><code><span class="field-name">IsSynchronized</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSynchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Count"><code><span class="field-name">Count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddAssembly"><code><span class="field-name">AddAssembly</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddHost"><code><span class="field-name">AddHost</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddHost"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clear"><code><span class="field-name">Clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CopyTo"><code><span class="field-name">CopyTo</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CopyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |
| `index` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">cs.system.collections.IEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.collections.IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAssemblyEnumerator"><code><span class="field-name">GetAssemblyEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">cs.system.collections.IEnumerator</a></code><a class="header-anchor" href="#GetAssemblyEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.collections.IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetHostEnumerator"><code><span class="field-name">GetHostEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">cs.system.collections.IEnumerator</a></code><a class="header-anchor" href="#GetHostEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.collections.IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Merge"><code><span class="field-name">Merge</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="#" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Merge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveType"><code><span class="field-name">RemoveType</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


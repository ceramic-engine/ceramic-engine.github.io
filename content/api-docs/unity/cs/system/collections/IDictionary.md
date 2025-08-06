---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: IDictionary
target: Unity
permalink: api-docs/unity/cs/system/collections/IDictionary/
---

# IDictionary

<div class="type-hierarchy"><strong>cs.system.collections.IDictionary</strong> (extern interface) → <a href="/api-docs/unity/cs/system/collections/Hashtable/">Hashtable</a></div>

## Instance Members

<div class="signature field-var no-description" id="Values"><code><span class="field-name">Values</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/ICollection/" class="type-link">ICollection</a></code><a class="header-anchor" href="#Values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Keys"><code><span class="field-name">Keys</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/ICollection/" class="type-link">ICollection</a></code><a class="header-anchor" href="#Keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsFixedSize"><code><span class="field-name">IsFixedSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFixedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Add"><code><span class="field-name">Add</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/unity/Dynamic/) |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clear"><code><span class="field-name">Clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Contains"><code><span class="field-name">Contains</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IDictionaryEnumerator/" class="type-link">IDictionaryEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IDictionaryEnumerator](/api-docs/unity/cs/system/collections/IDictionaryEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Remove"><code><span class="field-name">Remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Dynamic](/api-docs/unity/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |


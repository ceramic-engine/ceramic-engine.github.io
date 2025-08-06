---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: GeomPolyIterator
target: Unity
permalink: api-docs/unity/nape/geom/GeomPolyIterator/
---

# GeomPolyIterator

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/GeomPolyIterator.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.GeomPolyIterator</strong> (final class)</div>

Haxe Iterator<T> compatible iterator over Nape list.

## Static Members

<div class="signature field-var has-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">GeomPolyIterator</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">list</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">GeomPolyIterator</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create iterator for Nape list.
<br/><br/>
There is no specific reason to use this over: <code>list.iterator()</code>
especcialy since this requires writing the class name :)
(This function is used internally)



| Name | Type | Description |
|------|------|-------------|
| `list` | [GeomPolyList](/api-docs/unity/nape/geom/GeomPolyList/) | The Nape list to create iterator for.  |

| Returns | Description |
|---------|-------------|
| [GeomPolyIterator](/api-docs/unity/nape/geom/GeomPolyIterator/) | An iterator over the Nape list. |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/GeomPolyList/" class="type-link">GeomPolyList</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_i"><div class="plugin-name">nape</div><code><span class="field-name">zpp_i</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#zpp_i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_critical"><div class="plugin-name">nape</div><code><span class="field-name">zpp_critical</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_critical"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_next"><div class="plugin-name">nape</div><code><span class="field-name">zpp_next</span><span class="operator">:</span> <a href="#" class="type-link">GeomPolyIterator</a></code><a class="header-anchor" href="#zpp_next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hasNext"><div class="plugin-name">nape</div><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if there are any elements remaining.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | True if there are more elements to iterator over. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="next"><div class="plugin-name">nape</div><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/GeomPoly/" class="type-link">GeomPoly</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return next element in list.


| Returns | Description |
|---------|-------------|
| [GeomPoly](/api-docs/unity/nape/geom/GeomPoly/) | The next element in iteration. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |


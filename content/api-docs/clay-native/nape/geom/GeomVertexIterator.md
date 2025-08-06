---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: GeomVertexIterator
target: Clay (Native)
permalink: api-docs/clay-native/nape/geom/GeomVertexIterator/
---

# GeomVertexIterator

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/GeomVertexIterator.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.GeomVertexIterator</strong> (Class)</div>

Haxe compatible iterator over vertices of GeomPoly.
<br/><br/>
Vec2's intrinsically tied to the vertices are exposed through
the iterator which does not modify the state of the polygon.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_GeomVertexIterator/" class="type-link">zpp_nape.geom.ZPP_GeomVertexIterator</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hasNext"><div class="plugin-name">nape</div><code><span class="field-name">hasNext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if there are any vertices remaining.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | True if there are more vertices to iterate over. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="next"><div class="plugin-name">nape</div><code><span class="field-name">next</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#next"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return next vertex in list.
<br/><br/>
The vertex is represented by an intrinsically linked Vec2
unique to that vertex, which cannot be diposed of.


| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | The next vertex in iteration. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private


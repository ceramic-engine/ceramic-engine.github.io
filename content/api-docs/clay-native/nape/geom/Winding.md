---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Winding
target: Clay (Native)
permalink: api-docs/clay-native/nape/geom/Winding/
---

# Winding

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Winding.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Winding</strong> (final class)</div>

Enumeration represents the winding of a Polygon.
<br/><br/>
To appreciate what the winding of a polygon means, think of a polygon who's
vertices are the numbers on a clock face.

If the vertices are ordered <code>12 -&gt; 1 -&gt; 2 ... -&gt; 12</code>
then this polygon is clockwise wound. The reverse order would mean the
polygon is wound anticlockwise.

## Static Members

<div class="signature field-var has-description has-plugin" id="UNDEFINED"><div class="plugin-name">nape</div><code><span class="field-name">UNDEFINED</span><span class="operator">:</span> <a href="#" class="type-link">Winding</a></code><a class="header-anchor" href="#UNDEFINED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value represents that the polygon has no discernible, or ambiguous winding
<br/><br/>
This may be because the polygon is degenerate, or because it is self
intersecting. In either case it is not well defined to say that the winding
is either clockwise or anticlockwise.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="CLOCKWISE"><div class="plugin-name">nape</div><code><span class="field-name">CLOCKWISE</span><span class="operator">:</span> <a href="#" class="type-link">Winding</a></code><a class="header-anchor" href="#CLOCKWISE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value represents that the polygon is wound clockwise.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ANTICLOCKWISE"><div class="plugin-name">nape</div><code><span class="field-name">ANTICLOCKWISE</span><span class="operator">:</span> <a href="#" class="type-link">Winding</a></code><a class="header-anchor" href="#ANTICLOCKWISE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Value represents that the polygon is wound anticlockwise.

## Instance Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


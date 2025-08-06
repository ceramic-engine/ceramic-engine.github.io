---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Edge
target: Headless
permalink: api-docs/headless/nape/shape/Edge/
---

# Edge

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/shape/Edge.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.shape.Edge</strong> (final class)</div>

Edge class providing internal details of Polygon.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/shape/ZPP_Edge/" class="type-link">zpp_nape.shape.ZPP_Edge</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="polygon"><div class="plugin-name">nape</div><code><span class="field-name">polygon</span><span class="operator">:</span> <a href="/api-docs/headless/nape/shape/Polygon/" class="type-link">Polygon</a></code><a class="header-anchor" href="#polygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to Polygon this Edge belongs to.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localNormal"><div class="plugin-name">nape</div><code><span class="field-name">localNormal</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normal of edge in local coordinates.
<br/><br/>
This Vec2 is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldNormal"><div class="plugin-name">nape</div><code><span class="field-name">worldNormal</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normal of edge in world coordinates.
<br/><br/>
This Vec2 is immutable, and may be accessed even if the related Polygon
is not part of a Body but queries to its values will result in a debug
build error.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="length"><div class="plugin-name">nape</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localProjection"><div class="plugin-name">nape</div><code><span class="field-name">localProjection</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#localProjection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Local projection of polygon onto edge axis.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldProjection"><div class="plugin-name">nape</div><code><span class="field-name">worldProjection</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#worldProjection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World projection of polygon to edge axis.
<br/><br/>
This value can only be accessed if related Polygon is part of a Body.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localVertex1"><div class="plugin-name">nape</div><code><span class="field-name">localVertex1</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localVertex1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to first local vertex for edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="localVertex2"><div class="plugin-name">nape</div><code><span class="field-name">localVertex2</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#localVertex2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to second local vertex for edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldVertex1"><div class="plugin-name">nape</div><code><span class="field-name">worldVertex1</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldVertex1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to first world vertex for edge.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldVertex2"><div class="plugin-name">nape</div><code><span class="field-name">worldVertex2</span><span class="operator">:</span> <a href="/api-docs/headless/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a></code><a class="header-anchor" href="#worldVertex2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to second world vertex for edge.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


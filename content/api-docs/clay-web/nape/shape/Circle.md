---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Circle
target: Clay (Web)
permalink: api-docs/clay-web/nape/shape/Circle/
---

# Circle

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/shape/Circle.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/nape/phys/Interactor/">nape.phys.Interactor</a> → <a href="/api-docs/clay-web/nape/shape/Shape/">Shape</a> → <strong>nape.shape.Circle</strong> (final class)</div>

Shape subtype representing a Circle

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/shape/ZPP_Circle/" class="type-link">zpp_nape.shape.ZPP_Circle</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="radius"><div class="plugin-name">nape</div><code><span class="field-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#radius"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of circle
<br/><br/>
This value must be strictly positive, and attempting to set this value
whilst this Circle is part of a static Body inside a Space will result
in a debug time error.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">localCOM</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/geom/Vec2/" class="type-link">nape.geom.Vec2</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/Material/" class="type-link">nape.phys.Material</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/dynamics/InteractionFilter/" class="type-link">nape.dynamics.InteractionFilter</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Circle



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `radius` | [Float](/api-docs/clay-web/Float/) | | The radius of the circle, this value must be positive.  |
| `localCOM` | [nape.geom.Vec2](/api-docs/clay-web/nape/geom/Vec2/) | `null` | The local offset for the circle. (default &#40;0,0&#41;)  |
| `material` | [nape.phys.Material](/api-docs/clay-web/nape/phys/Material/) | `null` | The material for this circle. (default new Material&#40;&#41;)  |
| `filter` | [nape.dynamics.InteractionFilter](/api-docs/clay-web/nape/dynamics/InteractionFilter/) | `null` | The interaction filter for this circle. (default new InteractionFilter&#40;&#41;)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: AABB
target: Clay (Native)
permalink: api-docs/clay-native/nape/geom/AABB/
---

# AABB

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/AABB.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.AABB</strong> (final class)</div>

Axis Aligned Bounding Box (AABB)
<br/><br/>
Note that in many cases of an AABB object being returned by a Nape function
the AABB object will be marked internally as an 'immutable' AABB. This will
always be documented and trying to mutate such an AABB will result in an
error being thrown.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/geom/ZPP_AABB/" class="type-link">zpp_nape.geom.ZPP_AABB</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="min"><div class="plugin-name">nape</div><code><span class="field-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The minimum bounds for the AABB.
<br/><br/>
Euivalent to the top-left corner.
<br/>
This Vec2 is intrinsically linked to the AABB so that modifications
to this object are reflected in changes to the AABB and vice-versa.
<br/><br/>
If the AABB is immutable, then this Vec2 will also be immutable.
<br/><br/>
This value can be set with the = operator, equivalent to performing
<code>aabb.min.set(value)</code>.
@default (0, 0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="max"><div class="plugin-name">nape</div><code><span class="field-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum bounds for the AABB.
<br/><br/>
Euivalent to the bottom-right corner.
<br/>
This Vec2 is intrinsically linked to the AABB so that modifications
to this object are reflected in changes to the AABB and vice-versa.
<br/><br/>
If the AABB is immutable, then this Vec2 will also be immutable.
<br/><br/>
This value can be set with the = operator, equivalent to performing
<code>aabb.max.set(value)</code>.
@default (0, 0)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">nape</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x coordinate of the AABB's top-left corner.
<br/><br/>
Equivalent to accessing/mutating min.x.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">nape</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y coordinate of the AABB's top-left corner.
<br/><br/>
Equivalent to accessing/mutating min.y.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">nape</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

width of AABB.
<br/><br/>
This value is and must always be positive.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">nape</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

height of AABB.
<br/><br/>
This value is and must always be positive.
@default 0

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AABB</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this AABB.
<br/><br/>
As would be expected, if you produce a copy of an 'immutable' AABB then
the copy will be 'mutable'.


| Returns | Description |
|---------|-------------|
| [AABB](/api-docs/clay-native/nape/geom/AABB/) | The copy of this AABB. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new AABB.
<br/><br/>
As input width/height are permitted to be negative it is not guaranteed
that the resultant AABB will have the same parameters as those
specified as the AABB parameters are guaranteed to always have positive
width/height, and for x/y to always be the top-left corner.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | `0` | The x coordinate of the top-left corner of the AABB. (default 0)  |
| `y` | [Float](/api-docs/clay-native/Float/) | `0` | The y coordinate of the top-left corner of the AABB (default 0)  |
| `width` | [Float](/api-docs/clay-native/Float/) | `0` | The width of the AABB. This value may be negative. (default 0)  |
| `height` | [Float](/api-docs/clay-native/Float/) | `0` | The height of the AABB. This value may be negative. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |


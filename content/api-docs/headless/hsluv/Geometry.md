---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hsluv
title: Geometry
target: Headless
permalink: api-docs/headless/hsluv/Geometry/
---

# Geometry

<div class="view-source"><a href="https://github.com/ceramic-engine/hsluv/blob/master/haxe/src/hsluv/Geometry.hx">View source</a></div>

<div class="type-hierarchy"><strong>hsluv.Geometry</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="intersectLineLine"><code><span class="field-name">intersectLineLine</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Point/" class="type-link">Point</a></code><a class="header-anchor" href="#intersectLineLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Line](/api-docs/headless/hsluv/Line/) |
| `b` | [Line](/api-docs/headless/hsluv/Line/) |

| Returns |
|---------|
| [Point](/api-docs/headless/hsluv/Point/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="distanceFromOrigin"><code><span class="field-name">distanceFromOrigin</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceFromOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `point` | [Point](/api-docs/headless/hsluv/Point/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="distanceLineFromOrigin"><code><span class="field-name">distanceLineFromOrigin</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#distanceLineFromOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `line` | [Line](/api-docs/headless/hsluv/Line/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="perpendicularThroughPoint"><code><span class="field-name">perpendicularThroughPoint</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a><span class="operator">,</span> <span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a></code><a class="header-anchor" href="#perpendicularThroughPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `line` | [Line](/api-docs/headless/hsluv/Line/) |
| `point` | [Point](/api-docs/headless/hsluv/Point/) |

| Returns |
|---------|
| [Line](/api-docs/headless/hsluv/Line/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="angleFromOrigin"><code><span class="field-name">angleFromOrigin</span><span class="parenthesis">(</span><span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Point/" class="type-link">Point</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Angle/" class="type-link">Angle</a></code><a class="header-anchor" href="#angleFromOrigin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `point` | [Point](/api-docs/headless/hsluv/Point/) |

| Returns |
|---------|
| [Angle](/api-docs/headless/hsluv/Angle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="normalizeAngle"><code><span class="field-name">normalizeAngle</span><span class="parenthesis">(</span><span class="arg-name">angle</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Angle/" class="type-link">Angle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Angle/" class="type-link">Angle</a></code><a class="header-anchor" href="#normalizeAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `angle` | [Angle](/api-docs/headless/hsluv/Angle/) |

| Returns |
|---------|
| [Angle](/api-docs/headless/hsluv/Angle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lengthOfRayUntilIntersect"><code><span class="field-name">lengthOfRayUntilIntersect</span><span class="parenthesis">(</span><span class="arg-name">theta</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Angle/" class="type-link">Angle</a><span class="operator">,</span> <span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/hsluv/Line/" class="type-link">Line</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lengthOfRayUntilIntersect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `theta` | [Angle](/api-docs/headless/hsluv/Angle/) |
| `line` | [Line](/api-docs/headless/hsluv/Line/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: PolyPathD
target: Unity
permalink: api-docs/unity/clipper/PolyPathD/
---

# PolyPathD

<div class="type-hierarchy"><a href="/api-docs/unity/clipper/PolyPathBase/">PolyPathBase</a> → <strong>clipper.PolyPathD</strong> (Class) → <a href="/api-docs/unity/clipper/PolyTreeD/">PolyTreeD</a></div>

## Instance Members

<div class="signature field-var no-description" id="scale"><code><span class="field-name">scale</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="polygon"><code><span class="field-name">polygon</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/clipper/PathD/" class="type-link">PathD</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#polygon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="addChild"><code><span class="field-name">addChild</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PolyPathBase/" class="type-link">PolyPathBase</a></code><a class="header-anchor" href="#addChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [Path64](/api-docs/unity/clipper/Path64/) |

| Returns |
|---------|
| [PolyPathBase](/api-docs/unity/clipper/PolyPathBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addChildD"><code><span class="field-name">addChildD</span><span class="parenthesis">(</span><span class="arg-name">p</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PathD/" class="type-link">PathD</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PolyPathBase/" class="type-link">PolyPathBase</a></code><a class="header-anchor" href="#addChildD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `p` | [PathD](/api-docs/unity/clipper/PathD/) |

| Returns |
|---------|
| [PolyPathBase](/api-docs/unity/clipper/PolyPathBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getChild"><code><span class="field-name">getChild</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PolyPathD</a></code><a class="header-anchor" href="#getChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [PolyPathD](/api-docs/unity/clipper/PolyPathD/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="area"><code><span class="field-name">area</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#area"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PolyPathBase/" class="type-link">PolyPathBase</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `parent` | [PolyPathBase](/api-docs/unity/clipper/PolyPathBase/) | *(optional)* |

## Private Members

<div class="signature field-method no-description" id="scalePathD"><code><span class="field-name">scalePathD</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Path64/" class="type-link">Path64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PathD/" class="type-link">PathD</a></code><a class="header-anchor" href="#scalePathD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [Path64](/api-docs/unity/clipper/Path64/) |

| Returns |
|---------|
| [PathD](/api-docs/unity/clipper/PathD/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


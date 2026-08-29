---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: Clipper64
target: Unity
permalink: api-docs/unity/clipper/Clipper64/
---

# Clipper64

<div class="type-hierarchy"><a href="/api-docs/unity/clipper/ClipperBase/">ClipperBase</a> → <strong>clipper.Clipper64</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="addSubjectPaths"><code><span class="field-name">addSubjectPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSubjectPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/unity/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addOpenSubjectPaths"><code><span class="field-name">addOpenSubjectPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addOpenSubjectPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/unity/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addClipPaths"><code><span class="field-name">addClipPaths</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addClipPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `paths` | [Paths64](/api-docs/unity/clipper/Paths64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="execute"><code><span class="field-name">execute</span><span class="parenthesis">(</span><span class="arg-name">clipType</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/ClipType/" class="type-link">ClipType</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="arg-name">solutionClosed</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">solutionOpen</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#execute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `clipType` | [ClipType](/api-docs/unity/clipper/ClipType/) | |
| `fillRule` | [FillRule](/api-docs/unity/clipper/FillRule/) | |
| `solutionClosed` | [Paths64](/api-docs/unity/clipper/Paths64/) | |
| `solutionOpen` | [Null](/api-docs/unity/Null/)<[Paths64](/api-docs/unity/clipper/Paths64/)> | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="executeTree"><code><span class="field-name">executeTree</span><span class="parenthesis">(</span><span class="arg-name">clipType</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/ClipType/" class="type-link">ClipType</a><span class="operator">,</span> <span class="arg-name">fillRule</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/FillRule/" class="type-link">FillRule</a><span class="operator">,</span> <span class="arg-name">polytree</span><span class="operator">:</span> <a href="/api-docs/unity/clipper/PolyTree64/" class="type-link">PolyTree64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">openPaths</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/clipper/Paths64/" class="type-link">Paths64</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#executeTree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `clipType` | [ClipType](/api-docs/unity/clipper/ClipType/) | |
| `fillRule` | [FillRule](/api-docs/unity/clipper/FillRule/) | |
| `polytree` | [PolyTree64](/api-docs/unity/clipper/PolyTree64/) | |
| `openPaths` | [Null](/api-docs/unity/Null/)<[Paths64](/api-docs/unity/clipper/Paths64/)> | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


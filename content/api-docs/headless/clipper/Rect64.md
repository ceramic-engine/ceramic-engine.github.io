---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clipper
title: Rect64
target: Headless
permalink: api-docs/headless/clipper/Rect64/
---

# Rect64

<div class="type-hierarchy"><strong>clipper.Rect64</strong> (Class)</div>

Rectangle with 64-bit integer coordinates.

## Static Members

<div class="signature field-method no-description" id="createInvalid"><code><span class="field-name">createInvalid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Rect64</a></code><a class="header-anchor" href="#createInvalid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Rect64](/api-docs/headless/clipper/Rect64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">rec</span><span class="operator">:</span> <a href="#" class="type-link">Rect64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Rect64</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rec` | [Rect64](/api-docs/headless/clipper/Rect64/) |

| Returns |
|---------|
| [Rect64](/api-docs/headless/clipper/Rect64/) |

## Instance Members

<div class="signature field-var no-description" id="left"><code><span class="field-name">left</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#left"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="top"><code><span class="field-name">top</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#top"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="right"><code><span class="field-name">right</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#right"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bottom"><code><span class="field-name">bottom</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#bottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="isEmpty"><code><span class="field-name">isEmpty</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmpty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValid"><code><span class="field-name">isValid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="midPoint"><code><span class="field-name">midPoint</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a></code><a class="header-anchor" href="#midPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Point64](/api-docs/headless/clipper/Point64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">pt</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Point64/" class="type-link">Point64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pt` | [Point64](/api-docs/headless/clipper/Point64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="containsRect"><code><span class="field-name">containsRect</span><span class="parenthesis">(</span><span class="arg-name">rec</span><span class="operator">:</span> <a href="#" class="type-link">Rect64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#containsRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rec` | [Rect64](/api-docs/headless/clipper/Rect64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="intersects"><code><span class="field-name">intersects</span><span class="parenthesis">(</span><span class="arg-name">rec</span><span class="operator">:</span> <a href="#" class="type-link">Rect64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#intersects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rec` | [Rect64](/api-docs/headless/clipper/Rect64/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="asPath"><code><span class="field-name">asPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/Path64/" class="type-link">Path64</a></code><a class="header-anchor" href="#asPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Path64](/api-docs/headless/clipper/Path64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">l</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/clipper/ClipperInt64/" class="type-link">ClipperInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `l` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) | *(optional)* |
| `t` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) | *(optional)* |
| `r` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) | *(optional)* |
| `b` | [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) | *(optional)* |

## Private Members


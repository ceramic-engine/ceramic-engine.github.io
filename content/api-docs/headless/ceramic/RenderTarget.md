---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: RenderTarget
target: Headless
permalink: api-docs/headless/ceramic/RenderTarget/
---

# RenderTarget

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/RenderTarget.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.RenderTarget</strong> (Interface) → <a href="/api-docs/headless/ceramic/RenderTexture/">RenderTexture</a>, <a href="/api-docs/headless/ceramic/Screen/">Screen</a></div>

A destination a `Visual` can be rendered into: the `screen`, or a `RenderTexture`.

A visual without parent is **mounted** (updated, rendered, hit-tested) only when
its `renderTarget` is set to one of these. A visual with a parent follows its
parent instead, its own `renderTarget` then only redirecting where it is drawn.

```haxe
screen.add(visual);           // same as: visual.renderTarget = screen
renderTexture.add(visual);    // same as: visual.renderTarget = renderTexture
```

## Instance Members

<div class="signature field-var has-description" id="visuals"><code><span class="field-name">visuals</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#visuals"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visuals added directly to this render target (via `add()` or `visual.renderTarget = target`).
Like a visual's `children`, this lists direct additions only, not their descendants.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a visual to this render target so that it gets mounted and rendered into it.
If the visual has a parent, it is removed from it first.

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove a visual previously added to this render target (unmounts it).

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) |


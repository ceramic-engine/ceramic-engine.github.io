---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TransformPool
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TransformPool/
---

# TransformPool

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TransformPool.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TransformPool</strong> (Class)</div>

An utility to reuse transform matrix object at application level.

TransformPool provides object pooling for Transform instances to reduce
garbage collection pressure and improve performance when working with
many temporary transform matrices.

Features:
- Get pooled Transform instances instead of creating new ones
- Recycle transforms when done to return them to the pool
- Automatic cleanup of recycled transforms
- Static pool shared across the application

Example usage:
```haxe
// Get a transform from the pool
var transform = TransformPool.get();

// Use the transform
transform.translate(100, 200);
visual.transform = transform;

// When done, recycle it back to the pool
TransformPool.recycle(transform);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Transform/">Transform</a></div>


## Static Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get or create a transform. The transform object is ready to be used.
| Returns |
|---------|
| [Transform](/api-docs/clay-web/ceramic/Transform/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="recycle"><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recycle an existing transform. The transform will be cleaned up.

| Name | Type |
|------|------|
| `transform` | [Transform](/api-docs/clay-web/ceramic/Transform/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the pool, removing all available transforms.
Use this to free memory if the pool has grown too large.

## Private Members

<div class="signature field-var no-description" id="availableTransforms"><code><span class="field-name">availableTransforms</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#availableTransforms"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


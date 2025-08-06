---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonLoader
target: Headless
permalink: api-docs/headless/spine/SkeletonLoader/
---

# SkeletonLoader

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SkeletonLoader.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.SkeletonLoader</strong> (Class) → <a href="/api-docs/headless/spine/SkeletonJson/">SkeletonJson</a></div>

Base class for loading skeleton data from a file.
<p>
See <a href="http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data">JSON and binary data</a> in the
Spine Runtimes Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="attachmentLoader"><div class="plugin-name">spine</div><code><span class="field-name">attachmentLoader</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/AttachmentLoader/" class="type-link">spine.attachments.AttachmentLoader</a></code><a class="header-anchor" href="#attachmentLoader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scale"><div class="plugin-name">spine</div><code><span class="field-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="linkedMeshes"><div class="plugin-name">spine</div><code><span class="field-name">linkedMeshes</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/spine/LinkedMesh/" class="type-link">LinkedMesh</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#linkedMeshes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScale"><div class="plugin-name">spine</div><code><span class="field-name">getScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
runtime than were used in Spine.
<p>
See <a href="http://esotericsoftware.com/spine-loading-skeleton-data#Scaling">Scaling</a> in the Spine Runtimes Guide.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScale"><div class="plugin-name">spine</div><code><span class="field-name">setScale</span><span class="parenthesis">(</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scale` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">attachmentLoader</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/AttachmentLoader/" class="type-link">spine.attachments.AttachmentLoader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a skeleton loader that loads attachments using the specified attachment loader.
<p>
See <a href='http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data'>Loading skeleton data</a> in the
Spine Runtimes Guide.

| Name | Type |
|------|------|
| `attachmentLoader` | [spine.attachments.AttachmentLoader](/api-docs/headless/spine/attachments/AttachmentLoader/) |


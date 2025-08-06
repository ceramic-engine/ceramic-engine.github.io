---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: AtlasAttachmentLoader
target: Unity
permalink: api-docs/unity/spine/attachments/AtlasAttachmentLoader/
---

# AtlasAttachmentLoader

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/AtlasAttachmentLoader.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.attachments.AtlasAttachmentLoader</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/spine/attachments/AttachmentLoader/">AttachmentLoader</a></div>

An {@link AttachmentLoader} that configures attachments using texture regions from an {@link Atlas}.
<p>
See <a href='http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data'>Loading skeleton data</a> in the
Spine Runtimes Guide.

## Instance Members

<div class="signature field-method no-description has-plugin" id="newRegionAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newRegionAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/RegionAttachment/" class="type-link">RegionAttachment</a></code><a class="header-anchor" href="#newRegionAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [RegionAttachment](/api-docs/unity/spine/attachments/RegionAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="newMeshAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newMeshAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/MeshAttachment/" class="type-link">MeshAttachment</a></code><a class="header-anchor" href="#newMeshAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="newBoundingBoxAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newBoundingBoxAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">BoundingBoxAttachment</a></code><a class="header-anchor" href="#newBoundingBoxAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="newClippingAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newClippingAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/ClippingAttachment/" class="type-link">ClippingAttachment</a></code><a class="header-anchor" href="#newClippingAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [ClippingAttachment](/api-docs/unity/spine/attachments/ClippingAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="newPathAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newPathAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/PathAttachment/" class="type-link">PathAttachment</a></code><a class="header-anchor" href="#newPathAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [PathAttachment](/api-docs/unity/spine/attachments/PathAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="newPointAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newPointAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/PointAttachment/" class="type-link">PointAttachment</a></code><a class="header-anchor" href="#newPointAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [PointAttachment](/api-docs/unity/spine/attachments/PointAttachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureAtlas/" class="type-link">spine.support.graphics.TextureAtlas</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `atlas` | [spine.support.graphics.TextureAtlas](/api-docs/unity/spine/support/graphics/TextureAtlas/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="atlas"><div class="plugin-name">spine</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/TextureAtlas/" class="type-link">spine.support.graphics.TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `SuppressWarnings` | "javadoc" |


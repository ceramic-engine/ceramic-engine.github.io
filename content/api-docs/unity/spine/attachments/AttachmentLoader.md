---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: AttachmentLoader
target: Unity
permalink: api-docs/unity/spine/attachments/AttachmentLoader/
---

# AttachmentLoader

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/AttachmentLoader.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.attachments.AttachmentLoader</strong> (Interface) → <a href="/api-docs/unity/spine/attachments/AtlasAttachmentLoader/">AtlasAttachmentLoader</a></div>

The interface which can be implemented to customize creating and populating attachments.
<p>
See <a href='http://esotericsoftware.com/spine-loading-skeleton-data#AttachmentLoader'>Loading skeleton data</a> in the Spine
Runtimes Guide.

## Instance Members

<div class="signature field-method has-description has-plugin" id="newRegionAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newRegionAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/RegionAttachment/" class="type-link">RegionAttachment</a></code><a class="header-anchor" href="#newRegionAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |
| `path` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [RegionAttachment](/api-docs/unity/spine/attachments/RegionAttachment/) | May be null to not load the attachment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newMeshAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newMeshAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/MeshAttachment/" class="type-link">MeshAttachment</a></code><a class="header-anchor" href="#newMeshAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |
| `path` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) | May be null to not load the attachment. In that case null should also be returned for child meshes. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newBoundingBoxAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newBoundingBoxAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/BoundingBoxAttachment/" class="type-link">BoundingBoxAttachment</a></code><a class="header-anchor" href="#newBoundingBoxAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) | May be null to not load the attachment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newClippingAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newClippingAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/ClippingAttachment/" class="type-link">ClippingAttachment</a></code><a class="header-anchor" href="#newClippingAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [ClippingAttachment](/api-docs/unity/spine/attachments/ClippingAttachment/) | May be null to not load the attachment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newPathAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newPathAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/PathAttachment/" class="type-link">PathAttachment</a></code><a class="header-anchor" href="#newPathAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [PathAttachment](/api-docs/unity/spine/attachments/PathAttachment/) | May be null to not load the attachment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newPointAttachment"><div class="plugin-name">spine</div><code><span class="field-name">newPointAttachment</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skin/" class="type-link">spine.Skin</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/PointAttachment/" class="type-link">PointAttachment</a></code><a class="header-anchor" href="#newPointAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [spine.Skin](/api-docs/unity/spine/Skin/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns | Description |
|---------|-------------|
| [PointAttachment](/api-docs/unity/spine/attachments/PointAttachment/) | May be null to not load the attachment. |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


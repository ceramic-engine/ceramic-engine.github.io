---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Skin
target: Unity
permalink: api-docs/unity/spine/Skin/
---

# Skin

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Skin.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Skin</strong> (Class)</div>

Stores attachments by slot index and attachment name.
<p>
See SkeletonData {@link SkeletonData#defaultSkin}, Skeleton {@link Skeleton#skin}, and
<a href="http://esotericsoftware.com/spine-runtime-skins">Runtime skins</a> in the Spine Runtimes Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachments"><div class="plugin-name">spine</div><code><span class="field-name">attachments</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/AttachmentSet/" class="type-link">spine.support.utils.AttachmentSet</a></code><a class="header-anchor" href="#attachments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="constraints"><div class="plugin-name">spine</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/ConstraintData/" class="type-link">ConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setAttachment"><div class="plugin-name">spine</div><code><span class="field-name">setAttachment</span><span class="parenthesis">(</span><span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an attachment to the skin for the specified slot index and name.

| Name | Type |
|------|------|
| `slotIndex` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |
| `attachment` | [spine.attachments.Attachment](/api-docs/unity/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addSkin"><div class="plugin-name">spine</div><code><span class="field-name">addSkin</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="#" class="type-link">Skin</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds all attachments, bones, and constraints from the specified skin to this skin.

| Name | Type |
|------|------|
| `skin` | [Skin](/api-docs/unity/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copySkin"><div class="plugin-name">spine</div><code><span class="field-name">copySkin</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="#" class="type-link">Skin</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copySkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not
copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals.

| Name | Type |
|------|------|
| `skin` | [Skin](/api-docs/unity/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachment"><div class="plugin-name">spine</div><code><span class="field-name">getAttachment</span><span class="parenthesis">(</span><span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#getAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the attachment for the specified slot index and name, or null.

| Name | Type |
|------|------|
| `slotIndex` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/unity/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeAttachment"><div class="plugin-name">spine</div><code><span class="field-name">removeAttachment</span><span class="parenthesis">(</span><span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the attachment in the skin for the specified slot index and name, if any.

| Name | Type |
|------|------|
| `slotIndex` | [Int](/api-docs/unity/Int/) |
| `name` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachments"><div class="plugin-name">spine</div><code><span class="field-name">getAttachments</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/SkinEntry/" class="type-link">SkinEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAttachments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all attachments in this skin.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[SkinEntry](/api-docs/unity/spine/SkinEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentsInSkinForSlot"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentsInSkinForSlot</span><span class="parenthesis">(</span><span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachments</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/SkinEntry/" class="type-link">SkinEntry</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getAttachmentsInSkinForSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all attachments in this skin for the specified slot index.

| Name | Type |
|------|------|
| `slotIndex` | [Int](/api-docs/unity/Int/) |
| `attachments` | [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[SkinEntry](/api-docs/unity/spine/SkinEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">spine</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears all attachments, bones, and constraints.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[BoneData](/api-docs/unity/spine/BoneData/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/spine/ConstraintData/" class="type-link">ConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/unity/spine/support/utils/Array/)<[ConstraintData](/api-docs/unity/spine/ConstraintData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skin's name, which is unique across all skins in the skeleton.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="attachAll"><div class="plugin-name">spine</div><code><span class="field-name">attachAll</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">oldSkin</span><span class="operator">:</span> <a href="#" class="type-link">Skin</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#attachAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Attach each attachment in this skin if the corresponding attachment in the old skin is currently attached.

| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/unity/spine/Skeleton/) |
| `oldSkin` | [Skin](/api-docs/unity/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="lookup"><div class="plugin-name">spine</div><code><span class="field-name">lookup</span><span class="operator">:</span> <a href="/api-docs/unity/spine/SkinEntry/" class="type-link">SkinEntry</a></code><a class="header-anchor" href="#lookup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


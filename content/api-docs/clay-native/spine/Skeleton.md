---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Skeleton
target: Clay (Native)
permalink: api-docs/clay-native/spine/Skeleton/
---

# Skeleton

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Skeleton.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Skeleton</strong> (Class)</div>

Stores the current pose for a skeleton.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-architecture#Instance-objects">Instance objects</a> in the Spine
Runtimes Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="slots"><div class="plugin-name">spine</div><code><span class="field-name">slots</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#slots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="drawOrder"><div class="plugin-name">spine</div><code><span class="field-name">drawOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#drawOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ikConstraints"><div class="plugin-name">spine</div><code><span class="field-name">ikConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/IkConstraint/" class="type-link">IkConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ikConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="transformConstraints"><div class="plugin-name">spine</div><code><span class="field-name">transformConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/TransformConstraint/" class="type-link">TransformConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#transformConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pathConstraints"><div class="plugin-name">spine</div><code><span class="field-name">pathConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/PathConstraint/" class="type-link">PathConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pathConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cache"><div class="plugin-name">spine</div><code><span class="field-name">cache</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Updatable/" class="type-link">Updatable</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#cache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="skin"><div class="plugin-name">spine</div><code><span class="field-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skin/" class="type-link">Skin</a></code><a class="header-anchor" href="#skin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="time"><div class="plugin-name">spine</div><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleX"><div class="plugin-name">spine</div><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="scaleY"><div class="plugin-name">spine</div><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="x"><div class="plugin-name">spine</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">spine</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateCache"><div class="plugin-name">spine</div><code><span class="field-name">updateCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Caches information about bones and constraints. Must be called if the {@link #getSkin()} is modified or if bones,
constraints, or weighted path attachments are added or removed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateWorldTransform"><div class="plugin-name">spine</div><code><span class="field-name">updateWorldTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWorldTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the world transform for each bone and applies all constraints.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
Runtimes Guide.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateWorldTransformWithParent"><div class="plugin-name">spine</div><code><span class="field-name">updateWorldTransformWithParent</span><span class="parenthesis">(</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWorldTransformWithParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Temporarily sets the root bone as a child of the specified bone, then updates the world transform for each bone and applies
all constraints.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
Runtimes Guide.

| Name | Type |
|------|------|
| `parent` | [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setToSetupPose"><div class="plugin-name">spine</div><code><span class="field-name">setToSetupPose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setToSetupPose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the bones, constraints, slots, and draw order to their setup pose values.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBonesToSetupPose"><div class="plugin-name">spine</div><code><span class="field-name">setBonesToSetupPose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBonesToSetupPose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the bones and constraints to their setup pose values.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setSlotsToSetupPose"><div class="plugin-name">spine</div><code><span class="field-name">setSlotsToSetupPose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSlotsToSetupPose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the slots and draw order to their setup pose values.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SkeletonData/" class="type-link">SkeletonData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's setup pose data.
| Returns |
|---------|
| [SkeletonData](/api-docs/clay-native/spine/SkeletonData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's bones, sorted parent first. The root bone is always the first bone.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Bone](/api-docs/clay-native/spine/Bone/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getUpdateCache"><div class="plugin-name">spine</div><code><span class="field-name">getUpdateCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Updatable/" class="type-link">Updatable</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getUpdateCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The list of bones and constraints, sorted in the order they should be updated, as computed by {@link #updateCache()}.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Updatable](/api-docs/clay-native/spine/Updatable/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getRootBone"><div class="plugin-name">spine</div><code><span class="field-name">getRootBone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#getRootBone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the root bone, or null if the skeleton has no bones.
| Returns |
|---------|
| [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findBone"><div class="plugin-name">spine</div><code><span class="field-name">findBone</span><span class="parenthesis">(</span><span class="arg-name">boneName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#findBone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
repeatedly.

| Name | Type |
|------|------|
| `boneName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSlots"><div class="plugin-name">spine</div><code><span class="field-name">getSlots</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's slots.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Slot](/api-docs/clay-native/spine/Slot/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findSlot"><div class="plugin-name">spine</div><code><span class="field-name">findSlot</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a></code><a class="header-anchor" href="#findSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
repeatedly.

| Name | Type |
|------|------|
| `slotName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Slot](/api-docs/clay-native/spine/Slot/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDrawOrder"><div class="plugin-name">spine</div><code><span class="field-name">getDrawOrder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getDrawOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Slot](/api-docs/clay-native/spine/Slot/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDrawOrder"><div class="plugin-name">spine</div><code><span class="field-name">setDrawOrder</span><span class="parenthesis">(</span><span class="arg-name">drawOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Slot/" class="type-link">Slot</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDrawOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `drawOrder` | [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Slot](/api-docs/clay-native/spine/Slot/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkin"><div class="plugin-name">spine</div><code><span class="field-name">getSkin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skin/" class="type-link">Skin</a></code><a class="header-anchor" href="#getSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's current skin.
| Returns |
|---------|
| [Skin](/api-docs/clay-native/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setSkinByName"><div class="plugin-name">spine</div><code><span class="field-name">setSkinByName</span><span class="parenthesis">(</span><span class="arg-name">skinName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkinByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a skin by name.
<p>
See {@link #setSkin(Skin)}.

| Name | Type |
|------|------|
| `skinName` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setSkin"><div class="plugin-name">spine</div><code><span class="field-name">setSkin</span><span class="parenthesis">(</span><span class="arg-name">newSkin</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skin/" class="type-link">Skin</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the skin used to look up attachments before looking in the {@link SkeletonData#getDefaultSkin() default skin}. If the
skin is changed, {@link #updateCache()} is called.
<p>
Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no
old skin, each slot's setup mode attachment is attached from the new skin.
<p>
After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling
{@link #setSlotsToSetupPose()}. Also, often {@link AnimationState#apply(Skeleton)} is called before the next time the
skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new
skin.

| Name | Type |
|------|------|
| `newSkin` | [Skin](/api-docs/clay-native/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentWithSlotName"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentWithSlotName</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#getAttachmentWithSlotName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot name and attachment
name.
<p>
See {@link #getAttachment(int, String)}.

| Name | Type |
|------|------|
| `slotName` | [String](/api-docs/clay-native/String/) |
| `attachmentName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/clay-native/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachment"><div class="plugin-name">spine</div><code><span class="field-name">getAttachment</span><span class="parenthesis">(</span><span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#getAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot index and
attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-skins">Runtime skins</a> in the Spine Runtimes Guide.

| Name | Type |
|------|------|
| `slotIndex` | [Int](/api-docs/clay-native/Int/) |
| `attachmentName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/clay-native/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setAttachment"><div class="plugin-name">spine</div><code><span class="field-name">setAttachment</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A convenience method to set an attachment by finding the slot with {@link #findSlot(String)}, finding the attachment with
{@link #getAttachment(int, String)}, then setting the slot's {@link Slot#attachment}.


| Name | Type | Description |
|------|------|-------------|
| `slotName` | [String](/api-docs/clay-native/String/) |  |
| `attachmentName` | [String](/api-docs/clay-native/String/) | May be null to clear the slot's attachment. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIkConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getIkConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/IkConstraint/" class="type-link">IkConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getIkConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's IK constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[IkConstraint](/api-docs/clay-native/spine/IkConstraint/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findIkConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findIkConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/IkConstraint/" class="type-link">IkConstraint</a></code><a class="header-anchor" href="#findIkConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
than to call it repeatedly.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [IkConstraint](/api-docs/clay-native/spine/IkConstraint/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTransformConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getTransformConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/TransformConstraint/" class="type-link">TransformConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getTransformConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's transform constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[TransformConstraint](/api-docs/clay-native/spine/TransformConstraint/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findTransformConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findTransformConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/TransformConstraint/" class="type-link">TransformConstraint</a></code><a class="header-anchor" href="#findTransformConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
this method than to call it repeatedly.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [TransformConstraint](/api-docs/clay-native/spine/TransformConstraint/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPathConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getPathConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/PathConstraint/" class="type-link">PathConstraint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPathConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's path constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[PathConstraint](/api-docs/clay-native/spine/PathConstraint/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findPathConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findPathConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/PathConstraint/" class="type-link">PathConstraint</a></code><a class="header-anchor" href="#findPathConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
than to call it repeatedly.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [PathConstraint](/api-docs/clay-native/spine/PathConstraint/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBounds"><div class="plugin-name">spine</div><code><span class="field-name">getBounds</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/math/Vector2/" class="type-link">spine.support.math.Vector2</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/math/Vector2/" class="type-link">spine.support.math.Vector2</a><span class="operator">,</span> <span class="arg-name">temp</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.


| Name | Type | Description |
|------|------|-------------|
| `offset` | [spine.support.math.Vector2](/api-docs/clay-native/spine/support/math/Vector2/) | An output value, the distance from the skeleton origin to the bottom left corner of the AABB.  |
| `size` | [spine.support.math.Vector2](/api-docs/clay-native/spine/support/math/Vector2/) | An output value, the width and height of the AABB.  |
| `temp` | [spine.support.utils.FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) | Working memory to temporarily store attachments' computed world vertices. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color to tint all the skeleton's attachments.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-native/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColor"><div class="plugin-name">spine</div><code><span class="field-name">setColor</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A convenience method for setting the skeleton color. The color can also be set by modifying {@link #getColor()}.

| Name | Type |
|------|------|
| `color` | [spine.support.graphics.Color](/api-docs/clay-native/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setColorWithRGBA"><div class="plugin-name">spine</div><code><span class="field-name">setColorWithRGBA</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorWithRGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A convenience method for setting the skeleton color. The color can also be set by modifying {@link #getColor()}.

| Name | Type |
|------|------|
| `r` | [Float](/api-docs/clay-native/Float/) |
| `g` | [Float](/api-docs/clay-native/Float/) |
| `b` | [Float](/api-docs/clay-native/Float/) |
| `a` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleX"><div class="plugin-name">spine</div><code><span class="field-name">getScaleX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales the entire skeleton on the X axis. This affects all bones, even if the bone's transform mode disallows scale
inheritance.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleX"><div class="plugin-name">spine</div><code><span class="field-name">setScaleX</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleX` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getScaleY"><div class="plugin-name">spine</div><code><span class="field-name">getScaleY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scales the entire skeleton on the Y axis. This affects all bones, even if the bone's transform mode disallows scale
inheritance.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScaleY"><div class="plugin-name">spine</div><code><span class="field-name">setScaleY</span><span class="parenthesis">(</span><span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setScale"><div class="plugin-name">spine</div><code><span class="field-name">setScale</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scaleX` | [Float](/api-docs/clay-native/Float/) |
| `scaleY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getX"><div class="plugin-name">spine</div><code><span class="field-name">getX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the skeleton X position, which is added to the root bone worldX position.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setX"><div class="plugin-name">spine</div><code><span class="field-name">setX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getY"><div class="plugin-name">spine</div><code><span class="field-name">getY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the skeleton Y position, which is added to the root bone worldY position.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setY"><div class="plugin-name">spine</div><code><span class="field-name">setY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setPosition"><div class="plugin-name">spine</div><code><span class="field-name">setPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the skeleton X and Y position, which is added to the root bone worldX and worldY position.

| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTime"><div class="plugin-name">spine</div><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the skeleton's time. This can be used for tracking, such as with Slot {@link Slot#getAttachmentTime()}.
<p>
See {@link #update(float)}.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTime"><div class="plugin-name">spine</div><code><span class="field-name">setTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Increments the skeleton's {@link #time}.

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/SkeletonData/" class="type-link">SkeletonData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [SkeletonData](/api-docs/clay-native/spine/SkeletonData/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="sortIkConstraint"><div class="plugin-name">spine</div><code><span class="field-name">sortIkConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraint</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/IkConstraint/" class="type-link">IkConstraint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortIkConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `constraint` | [IkConstraint](/api-docs/clay-native/spine/IkConstraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortPathConstraint"><div class="plugin-name">spine</div><code><span class="field-name">sortPathConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraint</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/PathConstraint/" class="type-link">PathConstraint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortPathConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `constraint` | [PathConstraint](/api-docs/clay-native/spine/PathConstraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortTransformConstraint"><div class="plugin-name">spine</div><code><span class="field-name">sortTransformConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraint</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/TransformConstraint/" class="type-link">TransformConstraint</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortTransformConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `constraint` | [TransformConstraint](/api-docs/clay-native/spine/TransformConstraint/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortPathConstraintAttachmentWithSkin"><div class="plugin-name">spine</div><code><span class="field-name">sortPathConstraintAttachmentWithSkin</span><span class="parenthesis">(</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Skin/" class="type-link">Skin</a><span class="operator">,</span> <span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">slotBone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortPathConstraintAttachmentWithSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skin` | [Skin](/api-docs/clay-native/spine/Skin/) |
| `slotIndex` | [Int](/api-docs/clay-native/Int/) |
| `slotBone` | [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortPathConstraintAttachment"><div class="plugin-name">spine</div><code><span class="field-name">sortPathConstraintAttachment</span><span class="parenthesis">(</span><span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a><span class="operator">,</span> <span class="arg-name">slotBone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortPathConstraintAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attachment` | [spine.attachments.Attachment](/api-docs/clay-native/spine/attachments/Attachment/) |
| `slotBone` | [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortBone"><div class="plugin-name">spine</div><code><span class="field-name">sortBone</span><span class="parenthesis">(</span><span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortBone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bone` | [Bone](/api-docs/clay-native/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="sortReset"><div class="plugin-name">spine</div><code><span class="field-name">sortReset</span><span class="parenthesis">(</span><span class="arg-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/spine/Bone/" class="type-link">Bone</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bones` | [spine.support.utils.Array](/api-docs/clay-native/spine/support/utils/Array/)<[Bone](/api-docs/clay-native/spine/Bone/)> |


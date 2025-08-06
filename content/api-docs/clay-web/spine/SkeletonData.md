---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SkeletonData
target: Clay (Web)
permalink: api-docs/clay-web/spine/SkeletonData/
---

# SkeletonData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SkeletonData.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.SkeletonData</strong> (Class)</div>

Stores the setup pose and all of the stateless data for a skeleton.
<p>
See <a href="http://esotericsoftware.com/spine-runtime-architecture#Data-objects">Data objects</a> in the Spine Runtimes
Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bones"><div class="plugin-name">spine</div><code><span class="field-name">bones</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="slots"><div class="plugin-name">spine</div><code><span class="field-name">slots</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#slots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="skins"><div class="plugin-name">spine</div><code><span class="field-name">skins</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#skins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="defaultSkin"><div class="plugin-name">spine</div><code><span class="field-name">defaultSkin</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a></code><a class="header-anchor" href="#defaultSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="events"><div class="plugin-name">spine</div><code><span class="field-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/EventData/" class="type-link">EventData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="animations"><div class="plugin-name">spine</div><code><span class="field-name">animations</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#animations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ikConstraints"><div class="plugin-name">spine</div><code><span class="field-name">ikConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ikConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="transformConstraints"><div class="plugin-name">spine</div><code><span class="field-name">transformConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#transformConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pathConstraints"><div class="plugin-name">spine</div><code><span class="field-name">pathConstraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pathConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="x"><div class="plugin-name">spine</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="y"><div class="plugin-name">spine</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="width"><div class="plugin-name">spine</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="height"><div class="plugin-name">spine</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="version"><div class="plugin-name">spine</div><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hash"><div class="plugin-name">spine</div><code><span class="field-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="fps"><div class="plugin-name">spine</div><code><span class="field-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="imagesPath"><div class="plugin-name">spine</div><code><span class="field-name">imagesPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#imagesPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="audioPath"><div class="plugin-name">spine</div><code><span class="field-name">audioPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#audioPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBones"><div class="plugin-name">spine</div><code><span class="field-name">getBones</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/BoneData/" class="type-link">BoneData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBones"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's bones, sorted parent first. The root bone is always the first bone.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[BoneData](/api-docs/clay-web/spine/BoneData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findBone"><div class="plugin-name">spine</div><code><span class="field-name">findBone</span><span class="parenthesis">(</span><span class="arg-name">boneName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/BoneData/" class="type-link">BoneData</a></code><a class="header-anchor" href="#findBone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
multiple times.

| Name | Type |
|------|------|
| `boneName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [BoneData](/api-docs/clay-web/spine/BoneData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSlots"><div class="plugin-name">spine</div><code><span class="field-name">getSlots</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSlots"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's slots.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[SlotData](/api-docs/clay-web/spine/SlotData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findSlot"><div class="plugin-name">spine</div><code><span class="field-name">findSlot</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a></code><a class="header-anchor" href="#findSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
multiple times.

| Name | Type |
|------|------|
| `slotName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [SlotData](/api-docs/clay-web/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDefaultSkin"><div class="plugin-name">spine</div><code><span class="field-name">getDefaultSkin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a></code><a class="header-anchor" href="#getDefaultSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.
<p>
See {@link Skeleton#getAttachment(int, String)}.
| Returns |
|---------|
| [Skin](/api-docs/clay-web/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDefaultSkin"><div class="plugin-name">spine</div><code><span class="field-name">setDefaultSkin</span><span class="parenthesis">(</span><span class="arg-name">defaultSkin</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDefaultSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `defaultSkin` | [Skin](/api-docs/clay-web/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findSkin"><div class="plugin-name">spine</div><code><span class="field-name">findSkin</span><span class="parenthesis">(</span><span class="arg-name">skinName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a></code><a class="header-anchor" href="#findSkin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it
multiple times.

| Name | Type |
|------|------|
| `skinName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Skin](/api-docs/clay-web/spine/Skin/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkins"><div class="plugin-name">spine</div><code><span class="field-name">getSkins</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Skin/" class="type-link">Skin</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getSkins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All skins, including the default skin.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Skin](/api-docs/clay-web/spine/Skin/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findEvent"><div class="plugin-name">spine</div><code><span class="field-name">findEvent</span><span class="parenthesis">(</span><span class="arg-name">eventDataName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/EventData/" class="type-link">EventData</a></code><a class="header-anchor" href="#findEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it
multiple times.

| Name | Type |
|------|------|
| `eventDataName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [EventData](/api-docs/clay-web/spine/EventData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEvents"><div class="plugin-name">spine</div><code><span class="field-name">getEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/EventData/" class="type-link">EventData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's events.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[EventData](/api-docs/clay-web/spine/EventData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAnimations"><div class="plugin-name">spine</div><code><span class="field-name">getAnimations</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAnimations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's animations.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Animation](/api-docs/clay-web/spine/Animation/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findAnimation"><div class="plugin-name">spine</div><code><span class="field-name">findAnimation</span><span class="parenthesis">(</span><span class="arg-name">animationName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Animation/" class="type-link">Animation</a></code><a class="header-anchor" href="#findAnimation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to
call it multiple times.

| Name | Type |
|------|------|
| `animationName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Animation](/api-docs/clay-web/spine/Animation/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIkConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getIkConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getIkConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's IK constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[IkConstraintData](/api-docs/clay-web/spine/IkConstraintData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findIkConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findIkConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/IkConstraintData/" class="type-link">IkConstraintData</a></code><a class="header-anchor" href="#findIkConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
than to call it multiple times.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [IkConstraintData](/api-docs/clay-web/spine/IkConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTransformConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getTransformConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getTransformConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's transform constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[TransformConstraintData](/api-docs/clay-web/spine/TransformConstraintData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findTransformConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findTransformConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/TransformConstraintData/" class="type-link">TransformConstraintData</a></code><a class="header-anchor" href="#findTransformConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
this method than to call it multiple times.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [TransformConstraintData](/api-docs/clay-web/spine/TransformConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPathConstraints"><div class="plugin-name">spine</div><code><span class="field-name">getPathConstraints</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPathConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's path constraints.
| Returns |
|---------|
| [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[PathConstraintData](/api-docs/clay-web/spine/PathConstraintData/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findPathConstraint"><div class="plugin-name">spine</div><code><span class="field-name">findPathConstraint</span><span class="parenthesis">(</span><span class="arg-name">constraintName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/PathConstraintData/" class="type-link">PathConstraintData</a></code><a class="header-anchor" href="#findPathConstraint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
than to call it multiple times.

| Name | Type |
|------|------|
| `constraintName` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [PathConstraintData](/api-docs/clay-web/spine/PathConstraintData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton's name, which by default is the name of the skeleton data file when possible, or null when a name hasn't been
set.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setName"><div class="plugin-name">spine</div><code><span class="field-name">setName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getX"><div class="plugin-name">spine</div><code><span class="field-name">getX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the skeleton's axis aligned bounding box in the setup pose.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setX"><div class="plugin-name">spine</div><code><span class="field-name">setX</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getY"><div class="plugin-name">spine</div><code><span class="field-name">getY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the skeleton's axis aligned bounding box in the setup pose.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setY"><div class="plugin-name">spine</div><code><span class="field-name">setY</span><span class="parenthesis">(</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `y` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getWidth"><div class="plugin-name">spine</div><code><span class="field-name">getWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the skeleton's axis aligned bounding box in the setup pose.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setWidth"><div class="plugin-name">spine</div><code><span class="field-name">setWidth</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHeight"><div class="plugin-name">spine</div><code><span class="field-name">getHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the skeleton's axis aligned bounding box in the setup pose.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHeight"><div class="plugin-name">spine</div><code><span class="field-name">setHeight</span><span class="parenthesis">(</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `height` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getVersion"><div class="plugin-name">spine</div><code><span class="field-name">getVersion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine version used to export the skeleton data, or null.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setVersion"><div class="plugin-name">spine</div><code><span class="field-name">setVersion</span><span class="parenthesis">(</span><span class="arg-name">version</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `version` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getHash"><div class="plugin-name">spine</div><code><span class="field-name">getHash</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getHash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton data hash. This value will change if any of the skeleton data has changed.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setHash"><div class="plugin-name">spine</div><code><span class="field-name">setHash</span><span class="parenthesis">(</span><span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hash` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getImagesPath"><div class="plugin-name">spine</div><code><span class="field-name">getImagesPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getImagesPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path to the images directory as defined in Spine, or null if nonessential data was not exported.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setImagesPath"><div class="plugin-name">spine</div><code><span class="field-name">setImagesPath</span><span class="parenthesis">(</span><span class="arg-name">imagesPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setImagesPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `imagesPath` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAudioPath"><div class="plugin-name">spine</div><code><span class="field-name">getAudioPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAudioPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path to the audio directory as defined in Spine, or null if nonessential data was not exported.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAudioPath"><div class="plugin-name">spine</div><code><span class="field-name">setAudioPath</span><span class="parenthesis">(</span><span class="arg-name">audioPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAudioPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `audioPath` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getFps"><div class="plugin-name">spine</div><code><span class="field-name">getFps</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dopesheet FPS in Spine, or zero if nonessential data was not exported.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setFps"><div class="plugin-name">spine</div><code><span class="field-name">setFps</span><span class="parenthesis">(</span><span class="arg-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fps` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


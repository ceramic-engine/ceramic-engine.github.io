---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Slot
target: Clay (Web)
permalink: api-docs/clay-web/spine/Slot/
---

# Slot

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Slot.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Slot</strong> (Class)</div>

Stores a slot's current pose. Slots organize attachments for {@link Skeleton#drawOrder} purposes and provide a place to store
state for an attachment. State cannot be stored in an attachment itself because attachments are stateless and may be shared
across multiple skeletons.

## Instance Members

<div class="signature field-var no-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bone"><div class="plugin-name">spine</div><code><span class="field-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#bone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="darkColor"><div class="plugin-name">spine</div><code><span class="field-name">darkColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#darkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachment"><div class="plugin-name">spine</div><code><span class="field-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#attachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachmentState"><div class="plugin-name">spine</div><code><span class="field-name">attachmentState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#attachmentState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getData"><div class="plugin-name">spine</div><code><span class="field-name">getData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a></code><a class="header-anchor" href="#getData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The slot's setup pose data.
| Returns |
|---------|
| [SlotData](/api-docs/clay-web/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBone"><div class="plugin-name">spine</div><code><span class="field-name">getBone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a></code><a class="header-anchor" href="#getBone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bone this slot belongs to.
| Returns |
|---------|
| [Bone](/api-docs/clay-web/spine/Bone/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkeleton"><div class="plugin-name">spine</div><code><span class="field-name">getSkeleton</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a></code><a class="header-anchor" href="#getSkeleton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The skeleton this slot belongs to.
| Returns |
|---------|
| [Skeleton](/api-docs/clay-web/spine/Skeleton/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
color tinting.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-web/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDarkColor"><div class="plugin-name">spine</div><code><span class="field-name">getDarkColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getDarkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
color's alpha is not used.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/clay-web/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachment"><div class="plugin-name">spine</div><code><span class="field-name">getAttachment</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a></code><a class="header-anchor" href="#getAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current attachment for the slot, or null if the slot has no attachment.
| Returns |
|---------|
| [spine.attachments.Attachment](/api-docs/clay-web/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setAttachment"><div class="plugin-name">spine</div><code><span class="field-name">setAttachment</span><span class="parenthesis">(</span><span class="arg-name">attachment</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/attachments/Attachment/" class="type-link">spine.attachments.Attachment</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the slot's attachment and, if the attachment changed, resets {@link #attachmentTime} and clears the {@link #deform}.
The deform is not cleared if the old attachment has the same {@link VertexAttachment#getDeformAttachment()} as the specified
attachment.

| Name | Type |
|------|------|
| `attachment` | [spine.attachments.Attachment](/api-docs/clay-web/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentTime"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getAttachmentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The time that has elapsed since the last time the attachment was set or cleared. Relies on Skeleton
{@link Skeleton#time}.
| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAttachmentTime"><div class="plugin-name">spine</div><code><span class="field-name">setAttachmentTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachmentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDeform"><div class="plugin-name">spine</div><code><span class="field-name">getDeform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getDeform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a
weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions.
<p>
See {@link VertexAttachment#computeWorldVertices(Slot, int, int, float[], int, int)} and {@link DeformTimeline}.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDeform"><div class="plugin-name">spine</div><code><span class="field-name">setDeform</span><span class="parenthesis">(</span><span class="arg-name">deform</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDeform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `deform` | [spine.support.utils.FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setToSetupPose"><div class="plugin-name">spine</div><code><span class="field-name">setToSetupPose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setToSetupPose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets this slot to the setup pose.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/SlotData/" class="type-link">SlotData</a><span class="operator">,</span> <span class="arg-name">bone</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Bone/" class="type-link">Bone</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `data` | [SlotData](/api-docs/clay-web/spine/SlotData/) |
| `bone` | [Bone](/api-docs/clay-web/spine/Bone/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="attachmentTime"><div class="plugin-name">spine</div><code><span class="field-name">attachmentTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#attachmentTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="deform"><div class="plugin-name">spine</div><code><span class="field-name">deform</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#deform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


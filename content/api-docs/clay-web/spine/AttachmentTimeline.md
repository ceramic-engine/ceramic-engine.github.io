---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: AttachmentTimeline
target: Clay (Web)
permalink: api-docs/clay-web/spine/AttachmentTimeline/
---

# AttachmentTimeline

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Animation.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/spine/Timeline/">Timeline</a> → <strong>spine.AttachmentTimeline</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/SlotTimeline/">SlotTimeline</a></div>

Changes a slot's {@link Slot#getAttachment()}.

## Instance Members

<div class="signature field-var no-description has-plugin" id="slotIndex"><div class="plugin-name">spine</div><code><span class="field-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#slotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachmentNames"><div class="plugin-name">spine</div><code><span class="field-name">attachmentNames</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#attachmentNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getFrameCount"><div class="plugin-name">spine</div><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">getSlotIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentNames"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/StringArray/" class="type-link">spine.support.utils.StringArray</a></code><a class="header-anchor" href="#getAttachmentNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The attachment name for each frame. May contain null values to clear the attachment.
| Returns |
|---------|
| [spine.support.utils.StringArray](/api-docs/clay-web/spine/support/utils/StringArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setFrame"><div class="plugin-name">spine</div><code><span class="field-name">setFrame</span><span class="parenthesis">(</span><span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the time and attachment name for the specified frame.


| Name | Type | Description |
|------|------|-------------|
| `frame` | [Int](/api-docs/clay-web/Int/) | Between 0 and <code>frameCount</code>, inclusive.  |
| `time` | [Float](/api-docs/clay-web/Float/) | The frame time in seconds. |
| `attachmentName` | [String](/api-docs/clay-web/String/) |  |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="apply"><div class="plugin-name">spine</div><code><span class="field-name">apply</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">lastTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">events</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/utils/Array/" class="type-link">spine.support.utils.Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/Event/" class="type-link">Event</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blend</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixBlend/" class="type-link">MixBlend</a><span class="operator">,</span> <span class="arg-name">direction</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/MixDirection/" class="type-link">MixDirection</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) |
| `lastTime` | [Float](/api-docs/clay-web/Float/) |
| `time` | [Float](/api-docs/clay-web/Float/) |
| `events` | [spine.support.utils.Array](/api-docs/clay-web/spine/support/utils/Array/)<[Event](/api-docs/clay-web/spine/Event/)> |
| `alpha` | [Float](/api-docs/clay-web/Float/) |
| `blend` | [MixBlend](/api-docs/clay-web/spine/MixBlend/) |
| `direction` | [MixDirection](/api-docs/clay-web/spine/MixDirection/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">frameCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">slotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `frameCount` | [Int](/api-docs/clay-web/Int/) |
| `slotIndex` | [Int](/api-docs/clay-web/Int/) |

## Private Members

<div class="signature field-method no-description has-plugin" id="setAttachment"><div class="plugin-name">spine</div><code><span class="field-name">setAttachment</span><span class="parenthesis">(</span><span class="arg-name">skeleton</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Skeleton/" class="type-link">Skeleton</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">Slot</a><span class="operator">,</span> <span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skeleton` | [Skeleton](/api-docs/clay-web/spine/Skeleton/) |
| `slot` | [Slot](/api-docs/clay-web/spine/Slot/) |
| `attachmentName` | [String](/api-docs/clay-web/String/) |


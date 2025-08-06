---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: ClippingAttachment
target: Headless
permalink: api-docs/headless/spine/attachments/ClippingAttachment/
---

# ClippingAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/ClippingAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/spine/attachments/Attachment/">Attachment</a> → <a href="/api-docs/headless/spine/attachments/VertexAttachment/">VertexAttachment</a> → <strong>spine.attachments.ClippingAttachment</strong> (Class)</div>

An attachment with vertices that make up a polygon used for clipping the rendering of other attachments.

## Instance Members

<div class="signature field-var no-description has-plugin" id="endSlot"><div class="plugin-name">spine</div><code><span class="field-name">endSlot</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SlotData/" class="type-link">spine.SlotData</a></code><a class="header-anchor" href="#endSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEndSlot"><div class="plugin-name">spine</div><code><span class="field-name">getEndSlot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SlotData/" class="type-link">spine.SlotData</a></code><a class="header-anchor" href="#getEndSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clipping is performed between the clipping attachment's slot and the end slot. If null clipping is done until the end of
the skeleton's rendering.
| Returns |
|---------|
| [spine.SlotData](/api-docs/headless/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEndSlot"><div class="plugin-name">spine</div><code><span class="field-name">setEndSlot</span><span class="parenthesis">(</span><span class="arg-name">endSlot</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SlotData/" class="type-link">spine.SlotData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEndSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `endSlot` | [spine.SlotData](/api-docs/headless/spine/SlotData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the clipping attachment as it was in Spine, or a default color if nonessential data was not exported. Clipping
attachments are not usually rendered at runtime.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/headless/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copy"><div class="plugin-name">spine</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/attachments/Attachment/" class="type-link">Attachment</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Attachment](/api-docs/headless/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |


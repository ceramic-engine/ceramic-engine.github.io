---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SlotData
target: Headless
permalink: api-docs/headless/spine/SlotData/
---

# SlotData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/SlotData.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.SlotData</strong> (Class)</div>

Stores the setup pose for a {@link Slot}.

## Instance Members

<div class="signature field-var no-description has-plugin" id="index"><div class="plugin-name">spine</div><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="boneData"><div class="plugin-name">spine</div><code><span class="field-name">boneData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BoneData/" class="type-link">BoneData</a></code><a class="header-anchor" href="#boneData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="darkColor"><div class="plugin-name">spine</div><code><span class="field-name">darkColor</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#darkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="attachmentName"><div class="plugin-name">spine</div><code><span class="field-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#attachmentName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="blendMode"><div class="plugin-name">spine</div><code><span class="field-name">blendMode</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#blendMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIndex"><div class="plugin-name">spine</div><code><span class="field-name">getIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of the slot in {@link Skeleton#getSlots()}.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the slot, which is unique across all slots in the skeleton.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBoneData"><div class="plugin-name">spine</div><code><span class="field-name">getBoneData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BoneData/" class="type-link">BoneData</a></code><a class="header-anchor" href="#getBoneData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bone this slot belongs to.
| Returns |
|---------|
| [BoneData](/api-docs/headless/spine/BoneData/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
color tinting.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/headless/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDarkColor"><div class="plugin-name">spine</div><code><span class="field-name">getDarkColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getDarkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
color's alpha is not used.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/headless/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setDarkColor"><div class="plugin-name">spine</div><code><span class="field-name">setDarkColor</span><span class="parenthesis">(</span><span class="arg-name">darkColor</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDarkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `darkColor` | [spine.support.graphics.Color](/api-docs/headless/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setAttachmentName"><div class="plugin-name">spine</div><code><span class="field-name">setAttachmentName</span><span class="parenthesis">(</span><span class="arg-name">attachmentName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAttachmentName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attachmentName` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getAttachmentName"><div class="plugin-name">spine</div><code><span class="field-name">getAttachmentName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAttachmentName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getBlendMode"><div class="plugin-name">spine</div><code><span class="field-name">getBlendMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BlendMode/" class="type-link">BlendMode</a></code><a class="header-anchor" href="#getBlendMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The blend mode for drawing the slot's attachment.
| Returns |
|---------|
| [BlendMode](/api-docs/headless/spine/BlendMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBlendMode"><div class="plugin-name">spine</div><code><span class="field-name">setBlendMode</span><span class="parenthesis">(</span><span class="arg-name">blendMode</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BlendMode/" class="type-link">BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `blendMode` | [BlendMode](/api-docs/headless/spine/BlendMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">boneData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/BoneData/" class="type-link">BoneData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/headless/Int/) |
| `name` | [String](/api-docs/headless/String/) |
| `boneData` | [BoneData](/api-docs/headless/spine/BoneData/) |


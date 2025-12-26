---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: BindSlot
target: Unity
permalink: api-docs/unity/ceramic/_Spine/BindSlot/
---

# BindSlot

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/Spine.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._Spine.BindSlot</strong> (private class)</div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="fromParentSlot"><div class="plugin-name">spine</div><code><span class="field-name">fromParentSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fromParentSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global index of the parent slot that this binding follows.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="toLocalSlot"><div class="plugin-name">spine</div><code><span class="field-name">toLocalSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#toLocalSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global index of the local child slot being bound to the parent.
-1 means the entire child Spine follows the parent slot.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentDepth"><div class="plugin-name">spine</div><code><span class="field-name">parentDepth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parentDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rendering depth of the parent slot during the last update.
Used to position child elements at the correct depth.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentVisible"><div class="plugin-name">spine</div><code><span class="field-name">parentVisible</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#parentVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the parent slot was visible during the last update.
Child elements are hidden when their parent is not visible.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentTransform"><div class="plugin-name">spine</div><code><span class="field-name">parentTransform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">ceramic.Transform</a></code><a class="header-anchor" href="#parentTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

World transform of the parent slot.
Child elements apply this transform to follow the parent.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentSlot"><div class="plugin-name">spine</div><code><span class="field-name">parentSlot</span><span class="operator">:</span> <a href="/api-docs/unity/spine/Slot/" class="type-link">spine.Slot</a></code><a class="header-anchor" href="#parentSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the actual parent slot object.
Provides access to parent slot properties like color and attachment.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flipXOnConcat"><div class="plugin-name">spine</div><code><span class="field-name">flipXOnConcat</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flipXOnConcat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply horizontal flipping when concatenating transforms.
Useful for mirroring child animations relative to parent orientation.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flipYOnConcat"><div class="plugin-name">spine</div><code><span class="field-name">flipYOnConcat</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flipYOnConcat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply vertical flipping when concatenating transforms.
Useful for inverting child animations relative to parent orientation.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | ceramic.Spine |


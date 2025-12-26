---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SlotInfo
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SlotInfo/
---

# SlotInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/Spine.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SlotInfo</strong> (Class)</div>

Information about a slot being updated during rendering.

This class is passed to slot update handlers and contains all the data
needed to customize or override slot rendering. You can modify properties
to affect how the slot is drawn.

## Usage Example

```haxe
spine.onUpdateSlotWithName(this, "weapon", function(info) {
    // Apply custom transform to weapon slot
    info.customTransform = new Transform();
    info.customTransform.rotate(Math.PI * 0.25);

    // Or disable rendering
    info.drawDefault = false;
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="slot"><div class="plugin-name">spine</div><code><span class="field-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/Slot/" class="type-link">spine.Slot</a></code><a class="header-anchor" href="#slot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine slot being updated.
Contains attachment, color, and bone information.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="globalSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">globalSlotIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#globalSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global index for this slot name.
Use this for efficient slot identification across skeletons.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customTransform"><div class="plugin-name">spine</div><code><span class="field-name">customTransform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#customTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional custom transform to apply to this slot.
Set this to override the slot's normal positioning.
Defaults to null (no custom transform).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="transform"><div class="plugin-name">spine</div><code><span class="field-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed world transform for this slot.
Includes bone transforms and parent hierarchy.
Read-only - modify customTransform instead.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="drawDefault"><div class="plugin-name">spine</div><code><span class="field-name">drawDefault</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#drawDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether this slot's attachment should be rendered.
Set to false to hide the slot while still processing it.
Useful for custom rendering or selective visibility.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="depth"><div class="plugin-name">spine</div><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The rendering depth (z-order) for this slot.
Higher values render on top of lower values.
Can be modified to change rendering order.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


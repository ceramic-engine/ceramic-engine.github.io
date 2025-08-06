---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineBindVisual
target: Headless
permalink: api-docs/headless/ceramic/SpineBindVisual/
---

# SpineBindVisual

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineBindVisual.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineBindVisual</strong> (Class)</div>

Utility class for binding Ceramic visuals to Spine skeleton slots.

This class provides static methods to:
- Show/hide specific slots
- Attach Ceramic visuals (Text, Quad, Mesh, etc.) to Spine slots
- Synchronize visual properties with slot transforms and colors

Common use cases include:
- Attaching particle effects to bones
- Displaying dynamic text on characters
- Overlaying custom graphics on skeleton parts
- Creating hybrid Spine/Ceramic animations

## Usage Example

```haxe
// Attach a text label to a character's head
var nameText = new Text();
nameText.content = "Player 1";
SpineBindVisual.bindVisual(spine, "head_slot", nameText, 0, -50);

// Hide a slot
SpineBindVisual.hideSlot(spine, "weapon_slot");
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/SpineBindVisualOptions/">SpineBindVisualOptions</a>, <a href="/api-docs/headless/ceramic/Spine/">Spine</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="hideSlot"><div class="plugin-name">spine</div><code><span class="field-name">hideSlot</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hideSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hides a specific slot in the Spine skeleton.

The slot will not be rendered but continues to be updated.
Use this to dynamically hide equipment, body parts, etc.



| Name | Type | Description |
|------|------|-------------|
| `spine` | [Spine](/api-docs/headless/ceramic/Spine/) | The Spine instance  |
| `slotName` | [String](/api-docs/headless/String/) | Name of the slot to hide |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="showSlot"><div class="plugin-name">spine</div><code><span class="field-name">showSlot</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shows a previously hidden slot in the Spine skeleton.

Reverses the effect of `hideSlot()`.



| Name | Type | Description |
|------|------|-------------|
| `spine` | [Spine](/api-docs/headless/ceramic/Spine/) | The Spine instance  |
| `slotName` | [String](/api-docs/headless/String/) | Name of the slot to show |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindVisual"><div class="plugin-name">spine</div><code><span class="field-name">bindVisual</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineBindVisualOptions/" class="type-link">SpineBindVisualOptions</a></code><a class="header-anchor" href="#bindVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a Ceramic visual to a Spine slot.

The visual will follow the slot's transform (position, rotation, scale)
and optionally inherit its color and alpha. The visual becomes a child
of the Spine instance for proper rendering order.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spine` | [Spine](/api-docs/headless/ceramic/Spine/) | | The Spine instance to bind to  |
| `slotName` | [String](/api-docs/headless/String/) | | Name of the slot to follow  |
| `visual` | [Visual](/api-docs/headless/ceramic/Visual/) | | The Ceramic visual to attach  |
| `offsetX` | [Float](/api-docs/headless/Float/) | `0.0` | Horizontal offset from the slot position  |
| `offsetY` | [Float](/api-docs/headless/Float/) | `0.0` | Vertical offset from the slot position  |

| Returns | Description |
|---------|-------------|
| [SpineBindVisualOptions](/api-docs/headless/ceramic/SpineBindVisualOptions/) | Configuration options for customizing the binding behavior |


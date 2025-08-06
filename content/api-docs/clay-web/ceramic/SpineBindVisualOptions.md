---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineBindVisualOptions
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpineBindVisualOptions/
---

# SpineBindVisualOptions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineBindVisualOptions.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineBindVisualOptions</strong> (Class)</div>

Configuration options for binding a Ceramic visual to a Spine slot.

This class controls how a visual synchronizes with a Spine slot's properties.
It's returned by `SpineBindVisual.bindVisual()` and allows fine-tuning the
binding behavior after creation.

## Usage Example

```haxe
var options = SpineBindVisual.bindVisual(spine, "weapon", sword);

// Customize binding behavior
options.drawDefault = true; // Show original slot attachment too
options.bindColor = false;  // Don't sync color
options.offsetY = -10;      // Adjust position

// Later, unbind the visual
options.unbind();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/SpineBindVisual/">SpineBindVisual</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="drawDefault"><div class="plugin-name">spine</div><code><span class="field-name">drawDefault</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#drawDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to render the original slot attachment.
Set to true to display both the original attachment and the bound visual.
Default is false (only show the bound visual).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetX"><div class="plugin-name">spine</div><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset from the slot's position in pixels.
Positive values move the visual to the right.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetY"><div class="plugin-name">spine</div><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset from the slot's position in pixels.
Positive values move the visual down.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bindTransform"><div class="plugin-name">spine</div><code><span class="field-name">bindTransform</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply the slot's transform (position, rotation, scale) to the visual.
Disable this if you only want to sync other properties like color.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bindColor"><div class="plugin-name">spine</div><code><span class="field-name">bindColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply the slot's color tint to the visual.
Works with Text, Quad, Mesh, and any visual with a color property.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bindAlpha"><div class="plugin-name">spine</div><code><span class="field-name">bindAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply the slot's alpha transparency to the visual.
The slot's alpha is multiplied with the visual's existing alpha.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bindDepth"><div class="plugin-name">spine</div><code><span class="field-name">bindDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply the slot's rendering depth (z-order) to the visual.
Ensures the visual renders at the correct layer relative to other slots.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bindBlending"><div class="plugin-name">spine</div><code><span class="field-name">bindBlending</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bindBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply the slot's blend mode to the visual.
Synchronizes additive blending when the slot uses it.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="compensateRegionRotation"><div class="plugin-name">spine</div><code><span class="field-name">compensateRegionRotation</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#compensateRegionRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to compensate for region attachment rotation.
Enable this if your visual appears rotated incorrectly when bound
to slots with rotated region attachments.
Default is false.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="manageActiveProperty"><div class="plugin-name">spine</div><code><span class="field-name">manageActiveProperty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#manageActiveProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the visual's active state based on slot visibility.
When true, sets visual.active = false when the slot has no attachment,
and visual.active = true when it does.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skipIfInvisible"><div class="plugin-name">spine</div><code><span class="field-name">skipIfInvisible</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skipIfInvisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Skip updating the visual if it's not visible.
This optimization avoids unnecessary calculations for hidden visuals.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="resetTransformOnUnbind"><div class="plugin-name">spine</div><code><span class="field-name">resetTransformOnUnbind</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#resetTransformOnUnbind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to reset the visual's transform to identity when unbinding.
Prevents the visual from keeping the last slot transform.
Default is true.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="destroyVisualOnUnbind"><div class="plugin-name">spine</div><code><span class="field-name">destroyVisualOnUnbind</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyVisualOnUnbind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to destroy the visual when unbinding.
Use this for temporary visuals that should be cleaned up automatically.
Default is false.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="slotName"><div class="plugin-name">spine</div><code><span class="field-name">slotName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#slotName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the slot this binding is attached to.
Set automatically by SpineBindVisual.bindVisual().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spine"><div class="plugin-name">spine</div><code><span class="field-name">spine</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Spine/" class="type-link">Spine</a></code><a class="header-anchor" href="#spine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine instance this binding is attached to.
Set automatically by SpineBindVisual.bindVisual().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="spineData"><div class="plugin-name">spine</div><code><span class="field-name">spineData</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SpineData/" class="type-link">SpineData</a></code><a class="header-anchor" href="#spineData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The SpineData of the bound Spine instance.
Set automatically by SpineBindVisual.bindVisual().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visual"><div class="plugin-name">spine</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual being controlled by this binding.
Set automatically by SpineBindVisual.bindVisual().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textVisual"><div class="plugin-name">spine</div><code><span class="field-name">textVisual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Text/" class="type-link">Text</a></code><a class="header-anchor" href="#textVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If the visual is a Text instance, this contains the type-cast reference.
Used internally for optimized text property access.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unbind"><div class="plugin-name">spine</div><code><span class="field-name">unbind</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the binding between the visual and the Spine slot.

This method:
- Unregisters all event handlers
- Optionally resets the visual's transform (see `resetTransformOnUnbind`)
- Optionally destroys the visual (see `destroyVisualOnUnbind`)

After calling unbind(), this options object should not be used again.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="didUpdateSlot"><div class="plugin-name">spine</div><code><span class="field-name">didUpdateSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didUpdateSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleUpdateSlot"><div class="plugin-name">spine</div><code><span class="field-name">handleUpdateSlot</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleUpdateSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleBeginRender"><div class="plugin-name">spine</div><code><span class="field-name">handleBeginRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleBeginRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleEndRender"><div class="plugin-name">spine</div><code><span class="field-name">handleEndRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleEndRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.SpineBindVisual |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: VisibleBounds
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/VisibleBounds/
---

# VisibleBounds

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/VisibleBounds.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.VisibleBounds</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

A component that displays the visible bounds of a visual entity.

VisibleBounds is a debugging utility that overlays a visual representation
of an entity's bounding box. This is useful for:
- Debugging layout and positioning issues
- Visualizing collision boundaries
- Understanding the actual size of transformed visuals
- Checking alignment and spacing

The component automatically updates the bounds visual to match the
entity's current dimensions, making it ideal for dynamic content.

```haxe
// Add a red border to show bounds
var border = new Quad();
border.color = Color.RED;
border.borderWidth = 2;
border.transparent = true;

var boundsComponent = new VisibleBounds(border);
myVisual.component('bounds', boundsComponent);

// Remove bounds display
myVisual.removeComponent('bounds');
```

<div class="see"><strong>See:</strong> Visual The visual entities this component can be attached to, Component The component interface this class implements</div>


## Instance Members

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this component is attached to.
Set automatically when the component is bound.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new VisibleBounds component.



| Name | Type | Description |
|------|------|-------------|
| `bounds` | [Visual](/api-docs/clay-web/ceramic/Visual/) | The visual to use for displaying bounds. Common choices: - Quad with borderWidth for outlines - Quad with alpha < 1 for semi-transparent overlay - Mesh for custom bounds visualization * ```haxe // Create bounds with dashed line (using a texture) var dashedQuad = new Quad(); dashedQuad.texture = dashedLineTexture; var bounds = new VisibleBounds(dashedQuad); ``` |

## Private Members

<div class="signature field-var has-description" id="bounds"><code><span class="field-name">bounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#bounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual used to display the bounds.
This visual is added as a child to the entity and
resized to match the entity's dimensions.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this component is attached to an entity.

Sets up the bounds visual as a child of the entity and
starts listening for update events to sync the bounds size.
The bounds are immediately updated to match the entity.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateBounds"><code><span class="field-name">updateBounds</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the bounds visual to match the entity's dimensions.

Called every frame to ensure the bounds accurately reflect
the entity's current size. The bounds visual is positioned
at (0,0) relative to the entity and sized to match exactly.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame (unused but required by update callback) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


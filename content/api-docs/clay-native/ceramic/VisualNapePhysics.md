---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: VisualNapePhysics
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/VisualNapePhysics/
---

# VisualNapePhysics

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/nape/runtime/src/ceramic/VisualNapePhysics.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.VisualNapePhysics</strong> (Class)</div>

Component that links a Ceramic Visual to a Nape physics body.

This class manages the relationship between the visual representation
and the physics simulation. The physics body drives the visual's
position and rotation after each physics update.

```haxe
// Create a dynamic physics box
var visual = new Quad();
visual.size(100, 100);
visual.anchor(0.5, 0.5);
visual.pos(400, 300);

visual.nape = new VisualNapePhysics(
    DYNAMIC,        // Body type
    null,           // Default box shape
    null,           // No additional shapes
    null,           // Default material
    visual.x,       // X position
    visual.y,       // Y position
    visual.width,   // Width
    visual.height,  // Height
    visual.rotation // Rotation
);

// Add to physics space
visual.nape.body.space = app.nape.space;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="visual"><div class="plugin-name">nape</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual that this physics component is attached to.
Set automatically when assigned to a visual's `nape` property.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body"><div class="plugin-name">nape</div><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Body/" class="type-link">nape.phys.Body</a></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Nape physics body that controls the visual's transform.
Can be added to a Space to enable physics simulation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">nape</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys the physics component and removes the body from simulation.

- Removes body from its physics space
- Clears the visual's nape reference
- Unregisters from the physics system

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">bodyType</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shapes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Material/" class="type-link">nape.phys.Material</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new physics body linked to a visual.

If no shape is provided, creates a box shape matching the dimensions.
The body is not automatically added to any physics space.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `bodyType` | Anonymous | | Type of physics body (STATIC, KINEMATIC, or DYNAMIC)  |
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | *(optional)* | Optional single shape for the body  |
| `shapes` | [Array](/api-docs/clay-native/Array/)<[nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/)> | *(optional)* | Optional array of shapes for compound bodies  |
| `material` | [nape.phys.Material](/api-docs/clay-native/nape/phys/Material/) | *(optional)* | Physics material defining friction, elasticity, etc.  |
| `x` | [Float](/api-docs/clay-native/Float/) | | Initial X position (center)  |
| `y` | [Float](/api-docs/clay-native/Float/) | | Initial Y position (center)  |
| `width` | [Float](/api-docs/clay-native/Float/) | | Width for default box shape  |
| `height` | [Float](/api-docs/clay-native/Float/) | | Height for default box shape  |
| `rotation` | [Float](/api-docs/clay-native/Float/) | | Initial rotation in degrees |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


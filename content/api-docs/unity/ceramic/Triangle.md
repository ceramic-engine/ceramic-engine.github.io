---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Triangle
target: Unity
permalink: api-docs/unity/ceramic/Triangle/
---

# Triangle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Triangle.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Triangle</strong> (Class)</div>

A simple colored triangle shape that fits within the specified dimensions.

Triangle extends Mesh to provide an easy way to create triangular graphics.
The triangle points upward and automatically adjusts its vertices when
width or height changes.

Vertex layout:
- Bottom-left corner at (0, height)
- Top center at (width/2, 0)
- Bottom-right corner at (width, height)

Common uses:
- UI arrows and indicators
- Play buttons
- Direction indicators
- Simple decorative elements
- Tooltips and speech bubble tails

```haxe
// Create a simple triangle
var triangle = new Triangle();
triangle.size(50, 40);
triangle.color = Color.RED;

// Create a play button icon
var playButton = new Triangle();
playButton.size(30, 30);
playButton.rotation = 90; // Point right
playButton.color = Color.WHITE;

// Animated direction indicator
var arrow = new Triangle();
arrow.size(20, 30);
arrow.anchor(0.5, 0.5);
arrow.color = Color.YELLOW;
app.onUpdate(this, delta -> {
    arrow.y = arrow.y + Math.sin(Timer.now * 2) * 2;
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Mesh/">Mesh</a></div>


## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new triangle.

The triangle is initialized with white color and
vertices that will be positioned based on width/height.

## Private Members

<div class="signature field-method has-description" id="updateVertices"><code><span class="field-name">updateVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates vertex positions based on current width and height.

Positions the three vertices to form an upward-pointing
triangle that fits exactly within the bounds.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


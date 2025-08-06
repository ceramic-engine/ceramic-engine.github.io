---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Repeat
target: Unity
permalink: api-docs/unity/ceramic/Repeat/
---

# Repeat

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Repeat.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <strong>ceramic.Repeat</strong> (Class)</div>

A visual component that repeats a texture pattern to fill a specified area.

The Repeat class efficiently tiles a texture (or texture region) across a
rectangular area, creating patterns like tiled backgrounds, repeating borders,
or texture fills. It automatically manages Quad instances from an object pool
to minimize memory allocation and improve performance.

Key features:
- Automatic texture tiling in X and/or Y directions
- Optional mirroring for seamless patterns
- Spacing between tiles
- Efficient object pooling of Quad instances
- Support for TextureTile regions

Example usage:
```haxe
// Create a repeating background pattern
var background = new Repeat();
background.texture = assets.texture("pattern");
background.size(screen.width, screen.height);
background.spacing(2, 2); // 2px gap between tiles

// Create a horizontally repeating border
var border = new Repeat();
border.tile = atlas.get("border_segment");
border.size(400, 32);
border.repeatY = false; // Only repeat horizontally

// Create a mirrored pattern for seamless tiling
var seamless = new Repeat();
seamless.texture = assets.texture("tile");
seamless.mirror(true, true); // Mirror in both directions
seamless.size(800, 600);
```

Performance note: The class reuses Quad instances from a pool, so creating
and destroying Repeat objects frequently has minimal performance impact.

<div class="see"><strong>See:</strong> ceramic.Quad For the underlying visual elements, ceramic.TextureTile For texture region support, ceramic.NineSlice For non-repeating scalable graphics</div>


## Instance Members

<div class="signature field-var has-description" id="quads"><code><span class="field-name">quads</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Quad/" class="type-link">Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#quads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of Quad instances used to render the repeated pattern.
Managed automatically by the class - do not modify directly.

<hr class="field-separator" />

<div class="signature field-var has-description" id="spacingX"><code><span class="field-name">spacingX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#spacingX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal spacing between repeated tiles in pixels.
Positive values create gaps between tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="spacingY"><code><span class="field-name">spacingY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#spacingY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical spacing between repeated tiles in pixels.
Positive values create gaps between tiles.

<hr class="field-separator" />

<div class="signature field-var has-description" id="repeatX"><code><span class="field-name">repeatX</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#repeatX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to repeat the texture horizontally.
When false, the texture is stretched to fill the width instead of tiling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="repeatY"><code><span class="field-name">repeatY</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#repeatY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to repeat the texture vertically.
When false, the texture is stretched to fill the height instead of tiling.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mirrorX"><code><span class="field-name">mirrorX</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mirrorX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to mirror alternate tiles horizontally.
Creates a seamless pattern by flipping every other column.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mirrorY"><code><span class="field-name">mirrorY</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#mirrorY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to mirror alternate tiles vertically.
Creates a seamless pattern by flipping every other row.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture to repeat across the area.
Setting this will clear any previously set tile.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotateFrame"><code><span class="field-name">rotateFrame</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rotateFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the texture frame is rotated 90 degrees.
Used internally for texture atlas optimization.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tile"><code><span class="field-name">tile</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextureTile/" class="type-link">TextureTile</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A texture tile (region) to repeat instead of a full texture.
Setting this will automatically update the texture and frame properties.

<hr class="field-separator" />

<div class="signature field-var has-description" id="color"><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color tint applied to all repeated tiles.
White (0xFFFFFF) means no tinting.

<hr class="field-separator" />

<div class="signature field-method has-description" id="spacing"><code><span class="field-name">spacing</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets spacing between tiles.
@overload function(value:Float):Void Sets both X and Y spacing to the same value
@overload function(spacingX:Float, spacingY:Float):Void Sets X and Y spacing independently

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="repeat"><code><span class="field-name">repeat</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#repeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls texture repetition.
@overload function(value:Bool):Void Enable/disable repetition in both directions
@overload function(repeatX:Bool, repeatY:Bool):Void Control X and Y repetition independently

| Name | Type |
|------|------|
| `value` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mirror"><code><span class="field-name">mirror</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mirror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls texture mirroring for seamless patterns.
@overload function(value:Bool):Void Enable/disable mirroring in both directions
@overload function(mirrorX:Bool, mirrorY:Bool):Void Control X and Y mirroring independently

| Name | Type |
|------|------|
| `value` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recomputes the tiled pattern based on current properties.
Called automatically when properties change.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Repeat instance.
Initializes with a single Quad that will be replicated as needed.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


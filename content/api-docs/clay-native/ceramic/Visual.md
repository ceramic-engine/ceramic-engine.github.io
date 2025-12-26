---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Visual
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Visual/
---

# Visual

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Visual.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Visual</strong> (Class) → <a href="/api-docs/clay-native/ceramic/Graphics/">Graphics</a>, <a href="/api-docs/clay-native/ceramic/Mesh/">Mesh</a>, <a href="/api-docs/clay-native/ceramic/NineSlice/">NineSlice</a>, <a href="/api-docs/clay-native/ceramic/Particles/">Particles</a>, <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a>, <a href="/api-docs/clay-native/ceramic/Repeat/">Repeat</a>, <a href="/api-docs/clay-native/ceramic/Scroller/">Scroller</a>, <a href="/api-docs/clay-native/ceramic/Spine/">Spine</a>, <a href="/api-docs/clay-native/ceramic/Sprite/">Sprite</a>, <a href="/api-docs/clay-native/ceramic/Text/">Text</a>, <a href="/api-docs/clay-native/ceramic/TilemapLayer/">TilemapLayer</a>, <a href="/api-docs/clay-native/ceramic/Zoomer/">Zoomer</a>, <a href="/api-docs/clay-native/elements/CrossX/">elements.CrossX</a>, <a href="/api-docs/clay-native/elements/Scrollbar/">elements.Scrollbar</a>, <a href="/api-docs/clay-native/elements/Tooltip/">elements.Tooltip</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/arcade/Collidable/">arcade.Collidable</a></div>

Base class for all visual elements in Ceramic.

Visuals are the building blocks to display things on screen. While a raw Visual
doesn't render anything by itself, it serves as a container for other visuals
and provides core functionality like transformation, hierarchy, and event handling.

Specialized visual classes like Quad, Mesh, Text, etc. extend this class to
provide actual rendering capabilities.

Key features:
- Hierarchical parent-child relationships
- Transform properties (position, scale, rotation, skew)
- Event handling (pointer events, focus)
- Depth sorting and rendering order
- Hit testing and touch input
- Shader and blend mode support

Example usage:
```haxe
var visual = new Visual();
visual.pos(100, 100);
visual.size(200, 150);
visual.onPointerDown(this, info -> {
    trace('Visual clicked at ${info.x}, ${info.y}');
});
```

## Instance Members

<div class="signature field-var has-description" id="asQuad"><code><span class="field-name">asQuad</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#asQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get this visual typed as `Quad` or null if it isn't a `Quad`

<hr class="field-separator" />

<div class="signature field-var has-description" id="asMesh"><code><span class="field-name">asMesh</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Mesh/" class="type-link">Mesh</a></code><a class="header-anchor" href="#asMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get this visual typed as `Mesh` or null if it isn't a `Mesh`

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiTouch"><code><span class="field-name">multiTouch</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiTouch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When enabled, this visual will receive as many up/down/click/over/out events as
there are fingers or mouse pointer interacting with it.
Default is `false`, ensuring there is never multiple up/down/click/over/out that
overlap each other. In that case, it triggers `pointer down` when the first finger/pointer hits
the visual and trigger `pointer up` when the last finger/pointer stops touching it. Behavior is
similar for `pointer over` and `pointer out` events.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isPointerDown"><code><span class="field-name">isPointerDown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this visual is between a `pointer down` and an `pointer up` event or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="isPointerOver"><code><span class="field-name">isPointerOver</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this visual is between a `pointer over` and an `pointer out` event or not.

<hr class="field-separator" />

<div class="signature field-var has-description" id="clip"><code><span class="field-name">clip</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a></code><a class="header-anchor" href="#clip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Use the given visual's bounds as clipping area for itself and **every children**.
Clipping areas cannot be combined. That means if `clip` is not null and current
visual instance is already clipped by a parent visual, its children's won't be clipped
by it anymore as they are instead clipped by this `clip` property instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="inheritAlpha"><code><span class="field-name">inheritAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inheritAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this visual should inherit its parent alpha value or not.
If it inherits, parent alpha value will be multiplied with current visual's own `alpha` property.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translatesOnly"><code><span class="field-name">translatesOnly</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translatesOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed flag that tells whether this visual is only translated,
thus not rotated, skewed nor scaled.
When this is `true`, matrix computation may be a bit faster as it
will skip some unneeded matrix computation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translatesOnlyDirty"><code><span class="field-name">translatesOnlyDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#translatesOnlyDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether we should re-check if this visual is only translating or having a more complex transform

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentDirty"><code><span class="field-name">contentDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contentDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual to recompute its displayed content

<hr class="field-separator" />

<div class="signature field-var has-description" id="matrixDirty"><code><span class="field-name">matrixDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matrixDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual's matrix to be re-computed

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderTargetDirty"><code><span class="field-name">renderTargetDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderTargetDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual's computed render target to be re-computed

<hr class="field-separator" />

<div class="signature field-var has-description" id="visibilityDirty"><code><span class="field-name">visibilityDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visibilityDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual to compute it's visility in hierarchy

<hr class="field-separator" />

<div class="signature field-var has-description" id="touchableDirty"><code><span class="field-name">touchableDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchableDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual to compute it's touchability in hierarchy

<hr class="field-separator" />

<div class="signature field-var has-description" id="clipDirty"><code><span class="field-name">clipDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clipDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Setting this to true will force the visual to compute it's clipping state in hierarchy

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderTarget"><code><span class="field-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#renderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set, the visual will be rendered into this target RenderTexture instance
instead of being drawn onto screen directly.

<hr class="field-separator" />

<div class="signature field-var has-description" id="blending"><code><span class="field-name">blending</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#blending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The blending to use for this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="visible"><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` to make this visual (and all of its children) invisible and not rendered.

<hr class="field-separator" />

<div class="signature field-var has-description" id="touchable"><code><span class="field-name">touchable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#touchable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` to make this visual (and all of its children) not touchable

<hr class="field-separator" />

<div class="signature field-var has-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set this visual's depth.
Visuals are rendered from back to front of the screen.
Given two visuals, a visual with higher depth will be rendered **above** a visual with lower depth.
In practice, it is advised to use integer values like `1`, `2`, `3`... to order your visuals,
like you would do with z-index on CSS elements.

<hr class="field-separator" />

<div class="signature field-var has-description" id="depthRange"><code><span class="field-name">depthRange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `1` (default), children will be sort by depth and their computed depth
will be within range [parent.depth, parent.depth + depthRange].
You'll usually won't need to change this value,
unless you want to do advanced drawing where different
hierarchies of visuals are blending with each other.

```haxe
// Children computed depths will be relative to their parent visual depth.
// This is the default value and recommended approach in most situations as
// its behaviour is similar to display trees, z-index etc...
visual.depthRange = 1;

// More advanced, two visuals: visual2 above visual1 because of higher depth, but
// visual1's depth range is `8`, so its children computed depths will be distributed
// between `1` and `1 + 8` (9 excluded). That means some of visual1's children
// can be above visual2's children. Can be useful on some specific edge cases,
// but not recommended in general.
visual1.depthRange = 8;
visual1.depth = 1;
visual2.depth = 2;

// Another case: two visuals with the same depth and depthRange.
// There children will share the same computed depth space, so a child of visual1 at `depth = 6`
// will be above a child of visual2 at `depth = 4`.
// Resulting computed depths will be between `1` and `1 + 16` (17 excluded).
visual1.depthRange = 16
visual2.depthRange = 16
visual1.depth = 1;
visual2.depth = 1;

// Children computed depths won't be relative to their parent visual depth.
// Instead, it will be relative to the higher parent (of the parent) in hierarchy that has a positive `depthRange` value,
visual.depthRange = -1;
```

<hr class="field-separator" />

<div class="signature field-var has-description" id="x"><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **x** position of this visual.
Relative to its parent, or screen if this visual has no parent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="y"><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **y** position of this visual.
Relative to its parent, or screen if this visual has no parent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleX"><code><span class="field-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **scaleX** value of this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scaleY"><code><span class="field-name">scaleY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scaleY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **scaleY** value of this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewX"><code><span class="field-name">skewX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **skewX** value of this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="skewY"><code><span class="field-name">skewY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **skewY** value of this visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorX"><code><span class="field-name">anchorX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **anchorX** value of this visual.
Affects how position, scale, rotation and skew of the visual are rendered.
Default is `0`, which means: anchor relative to the **left** of the visual.
Use `1` to make it relative to the **right** of the visual, or `0.5` to make it
relative to the **horizontal center** of the visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="anchorY"><code><span class="field-name">anchorY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#anchorY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **anchorY** value of this visual.
Affects how position, scale, rotation and skew of the visual are rendered.
Default is `0`, which means: anchor relative to the **top** of the visual.
Use `1` to make it relative to the **bottom** of the visual, or `0.5` to make it
relative to the **vertical center** of the visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **width** of the visual.
Default is `0`. Can be set to an explicit value.
Some subclasses of `Visual` are computing it automatically
like `Text` from its textual content or `Quad` when a texture is assigned to it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **height** of the visual.
Default is `0`. Can be set to an explicit value.
Some subclasses of `Visual` are computing it automatically
like `Text` from its textual content or `Quad` when a texture is assigned to it.

<hr class="field-separator" />

<div class="signature field-var has-description" id="roundTranslation"><code><span class="field-name">roundTranslation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#roundTranslation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to a value above zero, matrix translation (tx & ty) will be rounded.

```haxe
roundTranslation = 0; // No rounding (default)
roundTranslation = 1; // Pixel perfect rounding
roundTranslation = 2; // Half-pixel rounding
```

May be useful to render pixel perfect scenes onto `ceramic.Filter`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rotation"><code><span class="field-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rotation of the visual in degrees.
The center of the rotation depends on `anchorX` and `anchorY`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alpha"><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alpha of the visual. Must be a value between `0` (transparent) and `1` (fully opaque)

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateX"><code><span class="field-name">translateX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual X translation.
This is a shorthand equivalent to assigning a `Transform` object to
the visual with a `tx` value of `translateX`.
Only recommended for advanced usage as `x` property should be used in general instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="translateY"><code><span class="field-name">translateY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#translateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual Y translation.
This is a shorthand equivalent to assigning a `Transform` object to
the visual with a `ty` value of `translateY`.
Only recommended for advanced usage as `y` property should be used in general instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="transform"><code><span class="field-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#transform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set additional matrix-based transform to this visual. Default is `null`.
A `Transform` object will affect of the visual is rendered.
The transform is applied after visual's properties (position, rotation, scale, skew).

<hr class="field-separator" />

<div class="signature field-var has-description" id="shader"><code><span class="field-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#shader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assign a shader to this visual.
When none is assigned, default shader will be used.

<hr class="field-separator" />

<div class="signature field-var has-description" id="active"><code><span class="field-name">active</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#active"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this visual is `active`. Default is **true**. When setting it to **false**,
the visual won't be `visible` nor `touchable` anymore (these get set to **false**).
When restoring `active` to **true**, `visible` and `touchable` will also get back
their previous state.
If you want to keep a visual around without it being displayed or interactive, simply
set its `active` property to `false`. It will be almost like it doesn't exist and its
impact on rendering will be minimal.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedVisible"><code><span class="field-name">computedVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#computedVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed visible value. This is `true` if this visual is `visible` and all
of its parents are `visible`. If you want to know if a visual is visible on screen,
you should check with this property and not `visible` property, which doesn't account
for parent visibility.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedAlpha"><code><span class="field-name">computedAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed alpha value. This is the combination of this visual's alpha and its parent alpha
if `inheritAlpha` is `true`

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedDepth"><code><span class="field-name">computedDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed depth value. This is the final depth used by rendering, computed from this visual's `depth`
and `depthRange` properties and its hierarchy of parent visuals.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedRenderTarget"><code><span class="field-name">computedRenderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#computedRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed render target. When a visual has a `renderTarget` assigned, its `computedRenderTarget` will
be assigned with the same instance, and its children's `computedRenderTarget` property as well.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedTouchable"><code><span class="field-name">computedTouchable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#computedTouchable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed touchable value. This is `true` if this visual is `touchable` and all
of its parents are `touchable`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="computedClip"><code><span class="field-name">computedClip</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a></code><a class="header-anchor" href="#computedClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If any parent of this visual has a `clip` visual assigned, this will be the computed/resolved visual.

<hr class="field-separator" />

<div class="signature field-var has-description" id="children"><code><span class="field-name">children</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Visual</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A visual can have **children**.
Children positions and transformations are relative to their parent.
This property is read only. Use `add()` to add children to this visual
and `remove()` to remove them.
The order on the visuals in `children` should not be used to predict the order in which visuals are rendered.
If you want to control the order of rendering of visuals, use `depth` property on the children instead.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parent"><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The **parent visual** if there is any, or `null` if this visual doesn't have any parent.

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop this visual, whatever that means (override in subclasses).
When arcade physics are enabled, visual's body is stopped from this call.

<hr class="field-separator" />

<div class="signature field-method has-description" id="flag"><code><span class="field-name">flag</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and write arbitrary boolean flags on this visual.
Index should be between 0 (included) and 16 (excluded) or result is undefined.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `index` | [Int](/api-docs/clay-native/Int/) | | The index of the flag to change, between 0 (included) and 16 (excluded)  |
| `value` | [Bool](/api-docs/clay-native/Bool/) | *(optional)* | (optional) The boolean value to set, or no value to simply read current value  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | The existing value if just reading, or the new value if writing |

<hr class="field-separator" />

<div class="signature field-method has-description" id="size"><code><span class="field-name">size</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `width` and `height` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-native/Float/) | The width to set to the visual  |
| `height` | [Float](/api-docs/clay-native/Float/) | The height to set to the visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="anchor"><code><span class="field-name">anchor</span><span class="parenthesis">(</span><span class="arg-name">anchorX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">anchorY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#anchor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `anchorX` and `anchorY` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `anchorX` | [Float](/api-docs/clay-native/Float/) | The anchor to set to the visual on **x** axis  |
| `anchorY` | [Float](/api-docs/clay-native/Float/) | The anchor to set to the visual on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pos"><code><span class="field-name">pos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `x` and `y` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | The x position to set to the visual  |
| `y` | [Float](/api-docs/clay-native/Float/) | The y position to set to the visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scale"><code><span class="field-name">scale</span><span class="parenthesis">(</span><span class="arg-name">scaleX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `scaleX` and `scaleY` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `scaleX` | [Float](/api-docs/clay-native/Float/) | The scale to set to the visual on **x** axis  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="skew"><code><span class="field-name">skew</span><span class="parenthesis">(</span><span class="arg-name">skewX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">skewY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#skew"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `skewX` and `skewY` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `skewX` | [Float](/api-docs/clay-native/Float/) | The skew to set to the visual on **x** axis  |
| `skewY` | [Float](/api-docs/clay-native/Float/) | The skew to set to the visual on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translate"><code><span class="field-name">translate</span><span class="parenthesis">(</span><span class="arg-name">translateX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">translateY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#translate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand to set `translateX` and `translateY` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `translateX` | [Float](/api-docs/clay-native/Float/) | The translation to set to the visual on **x** axis  |
| `translateY` | [Float](/api-docs/clay-native/Float/) | The translation to set to the visual on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="anchorKeepPosition"><code><span class="field-name">anchorKeepPosition</span><span class="parenthesis">(</span><span class="arg-name">anchorX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">anchorY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#anchorKeepPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change the visual's anchor but ensure the visual keeps its current position.
This is similar to `anchor(anchorX, anchorY)` but visual with have its `x` and `y` properties
updated to ensure it stays at the same position as before changing anchor.


| Name | Type | Description |
|------|------|-------------|
| `anchorX` | [Float](/api-docs/clay-native/Float/) | The anchor to set to the visual on **x** axis  |
| `anchorY` | [Float](/api-docs/clay-native/Float/) | The anchor to set to the visual on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description" id="childWithId"><code><span class="field-name">childWithId</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a></code><a class="header-anchor" href="#childWithId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first child matching the requested `id` or `null` otherwise.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [String](/api-docs/clay-native/String/) | | The requested id  |
| `recursive` | [Bool](/api-docs/clay-native/Bool/) | `true` | (optional) Recursive search in children  |

| Returns | Description |
|---------|-------------|
| [Visual](/api-docs/clay-native/ceramic/Visual/) | A matching visual or `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="childWithType"><code><span class="field-name">childWithType</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">childWithType.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">childWithType.T</span></code><a class="header-anchor" href="#childWithType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first child matching the requested type or `null` otherwise.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | [Class](/api-docs/clay-native/Class/)<childWithType.T> | | The requested type  |
| `recursive` | [Bool](/api-docs/clay-native/Bool/) | `true` | (optional) Recursive search in children  |

| Returns | Description |
|---------|-------------|
| childWithType.T | A matching visual or `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy the visual.
When a visual is destroyed, `clear()` is called,
which means all children are removed and destroyed.
Events owned by this visual and events on this visual are
unbound so they don't need to be unbound explicitly.
As soon as `destroy()` is called, the `destroyed` property
becomes `true`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove and destroy all children.

<hr class="field-separator" />

<div class="signature field-method has-description" id="hits"><code><span class="field-name">hits</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if screen (x, y) screen coordinates hit/intersect this visual visible bounds


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Screen **x** coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Screen **y** coordinate  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if it hits |

<hr class="field-separator" />

<div class="signature field-method has-description" id="screenToVisual"><code><span class="field-name">screenToVisual</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Point/" class="type-link">Point</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleFilters</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#screenToVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assign **x** and **y** to given point after converting them from screen coordinates to current visual coordinates.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | | The **x** coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | | The **y** coordinate  |
| `point` | [Point](/api-docs/clay-native/ceramic/Point/) | | The point in which resulting x and y coordinate are stored  |
| `handleFilters` | [Bool](/api-docs/clay-native/Bool/) | `true` | (optional) Make it `false` if you want to skip nested filter transformations |

<hr class="field-separator" />

<div class="signature field-method has-description" id="visualToScreen"><code><span class="field-name">visualToScreen</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">point</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Point/" class="type-link">Point</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleFilters</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visualToScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assign **x** and **y** to given point after converting them from current visual coordinates to screen coordinates.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | | The **x** coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | | The **y** coordinate  |
| `point` | [Point](/api-docs/clay-native/ceramic/Point/) | | The point in which resulting x and y coordinate are stored  |
| `handleFilters` | [Bool](/api-docs/clay-native/Bool/) | `true` | (optional) Make it `false` if you want to skip nested filter transformations |

<hr class="field-separator" />

<div class="signature field-method has-description" id="visualToTransform"><code><span class="field-name">visualToTransform</span><span class="parenthesis">(</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visualToTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extract current visual transformation and write it into the given `transform`


| Name | Type | Description |
|------|------|-------------|
| `transform` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The transform object to write data into |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeContent"><code><span class="field-name">computeContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute content on this visual.
This method is expected to be overrided in `Visual` subclasses
to compute actual content (raw `Visual` class doesn't do anything).

<hr class="field-separator" />

<div class="signature field-method has-description" id="autoChildrenDepth"><code><span class="field-name">autoChildrenDepth</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#autoChildrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Will walk on every children and set their depths starting from
`start` and incrementing depth by `step`.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `start` | [Float](/api-docs/clay-native/Float/) | `1` | The depth starting value (default 1). First child will have this depth, next child `depthStart + depthStep` etc...  |
| `step` | [Float](/api-docs/clay-native/Float/) | `1` | The depth step to use when increment depth for each child |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sortChildrenByDepth"><code><span class="field-name">sortChildrenByDepth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortChildrenByDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sort children by depth in ascending order.
This will simply reorder children in `children` array.
No depth value will be changed on any child.

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalizeChildrenDepth"><code><span class="field-name">normalizeChildrenDepth</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#normalizeChildrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the equivalent of calling `sortChildrenByDepth()` followed with `autoChildrenDepth()`


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `start` | [Float](/api-docs/clay-native/Float/) | `1` | The depth starting value (default 1). First child will have this depth, next child `depthStart + depthStep` etc...  |
| `step` | [Float](/api-docs/clay-native/Float/) | `1` | The depth step to use when increment depth for each child |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasIndirectParent"><code><span class="field-name">hasIndirectParent</span><span class="parenthesis">(</span><span class="arg-name">targetParent</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasIndirectParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if current visual has `targetParent` as parent visual. The parent can possibly
be indirect, meaning it can be the parent of the parent of the visual etc...


| Name | Type | Description |
|------|------|-------------|
| `targetParent` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The target parent to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if the visual has the given target parent as indirect parent |

<hr class="field-separator" />

<div class="signature field-method has-description" id="firstParentWithClass"><code><span class="field-name">firstParentWithClass</span><span class="parenthesis">(</span><span class="arg-name">clazz</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">firstParentWithClass.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">firstParentWithClass.T</span></code><a class="header-anchor" href="#firstParentWithClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first parent (can be indirect) of this visual that matches
the given class or `null` if none is matching


| Name | Type | Description |
|------|------|-------------|
| `clazz` | [Class](/api-docs/clay-native/Class/)<firstParentWithClass.T> | The requested class  |

| Returns | Description |
|---------|-------------|
| firstParentWithClass.T | A matching parent or `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add the given visual as a child.
When a visual is added as a child, it's `parent` property is updated
and it will follow parent transformation in addition to its own.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The visual to add |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addBefore"><code><span class="field-name">addBefore</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">referenceVisual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBefore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |
| `referenceVisual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addAfter"><code><span class="field-name">addAfter</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">referenceVisual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addAfter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |
| `referenceVisual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove the child from current visual.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The child to remove |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">child</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the current visual contains this child.
When `recursive` option is `true`, will return `true` if
the current visual contains this child or one of
its direct or indirect children does.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `child` | [Visual](/api-docs/clay-native/ceramic/Visual/) | | The child to check in hierarchy  |
| `recursive` | [Bool](/api-docs/clay-native/Bool/) | `false` | (optional) Set to `true` to search recursively on indirect children  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if the current visual contains this child |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeBounds"><code><span class="field-name">computeBounds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute bounds from children this visual contains.
This overwrites width, height, anchorX and anchorY properties accordingly.
Warning: this may be an expensive operation.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindToNativeScreenSize"><code><span class="field-name">bindToNativeScreenSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToNativeScreenSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Will set this visual size to native screen size.
This is different than `bindToScreenSize()` because it will ignore
logical screen scaling. Use that if you want to provide visuals
that should keep the same pixel size when the window changes size and scales its content.
If needed, a `Transform` instance will be created and assigned to `transform` property.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindToScreenSize"><code><span class="field-name">bindToScreenSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToScreenSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Will set this visual size to screen size

| Name | Type | Default |
|------|------|---------|
| `factor` | [Float](/api-docs/clay-native/Float/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindToTargetSize"><code><span class="field-name">bindToTargetSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToTargetSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Will set this visual size to target size (`settings.targetWidth` and `settings.targetHeight`)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new `Visual`

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="arcade"><div class="plugin-name">arcade</div><code><span class="field-name">arcade</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/VisualArcadePhysics/" class="type-link">VisualArcadePhysics</a></code><a class="header-anchor" href="#arcade"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The arcade physics body bound to this visual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="body"><div class="plugin-name">arcade</div><code><span class="field-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a></code><a class="header-anchor" href="#body"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The arcade physics body linked to this visual

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowRotation"><div class="plugin-name">arcade</div><code><span class="field-name">allowRotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowRotation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allow this visual to be rotated by arcade physics, via `angularVelocity`, etc...

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="immovable"><div class="plugin-name">arcade</div><code><span class="field-name">immovable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#immovable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An immovable visual will not receive any impacts from other visual bodies. **Two** immovable visuas can't separate or exchange momentum and will pass through each other.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="forceX"><div class="plugin-name">arcade</div><code><span class="field-name">forceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#forceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If set to `true`, arcade world will always separate on the X axis before Y when this body is involved. Otherwise it will check gravity totals first.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="velocityX"><div class="plugin-name">arcade</div><code><span class="field-name">velocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x velocity, or rate of change the visual position. Measured in points per second.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="velocityY"><div class="plugin-name">arcade</div><code><span class="field-name">velocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#velocityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y velocity, or rate of change the visual position. Measured in points per second.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxVelocityX"><div class="plugin-name">arcade</div><code><span class="field-name">maxVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxVelocityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum x velocity that the visual can reach.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxVelocityY"><div class="plugin-name">arcade</div><code><span class="field-name">maxVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxVelocityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum y velocity that the visual can reach.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="accelerationX"><div class="plugin-name">arcade</div><code><span class="field-name">accelerationX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x acceleration is the rate of change of the x velocity. Measured in points per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="accelerationY"><div class="plugin-name">arcade</div><code><span class="field-name">accelerationY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#accelerationY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y acceleration is the rate of change of the y velocity. Measured in points per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowDrag"><div class="plugin-name">arcade</div><code><span class="field-name">allowDrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allow this visual to be influenced by drag

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragX"><div class="plugin-name">arcade</div><code><span class="field-name">dragX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x drag is the rate of reduction of the x velocity, kind of deceleration. Measured in points per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragY"><div class="plugin-name">arcade</div><code><span class="field-name">dragY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y drag is the rate of reduction of the y velocity, kind of deceleration. Measured in points per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bounceX"><div class="plugin-name">arcade</div><code><span class="field-name">bounceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x elasticity of the visual when colliding. `bounceX = 1` means full rebound, `bounceX = 0.5` means 50% rebound velocity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bounceY"><div class="plugin-name">arcade</div><code><span class="field-name">bounceY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#bounceY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y elasticity of the visual when colliding. `bounceY = 1` means full rebound, `bounceY = 0.5` means 50% rebound velocity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="useWorldBounce"><div class="plugin-name">arcade</div><code><span class="field-name">useWorldBounce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useWorldBounce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable world bounds specific bounce value with `worldBounceX` and `worldBounceY`.
Disabled by default, meaning `bounceX` and `bounceY` are used by default.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldBounceX"><div class="plugin-name">arcade</div><code><span class="field-name">worldBounceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#worldBounceX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x elasticity of the visual when colliding with world bounds. Ignored if `useWorldBounce` is `false` (`bounceX` used instead).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="worldBounceY"><div class="plugin-name">arcade</div><code><span class="field-name">worldBounceY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#worldBounceY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y elasticity of the visual when colliding with world bounds. Ignored if `useWorldBounce` is `false` (`bounceY` used instead).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxDeltaX"><div class="plugin-name">arcade</div><code><span class="field-name">maxDeltaX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDeltaX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum x delta per frame. `0` (default) means no maximum delta.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxDeltaY"><div class="plugin-name">arcade</div><code><span class="field-name">maxDeltaY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDeltaY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum y delta per frame. `0` (default) means no maximum delta.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowGravity"><div class="plugin-name">arcade</div><code><span class="field-name">allowGravity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowGravity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allow this visual to be influenced by gravity, either world or local.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravityX"><div class="plugin-name">arcade</div><code><span class="field-name">gravityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravityX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This visual's local y gravity, **added** to any world gravity, unless `allowGravity` is set to false.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gravityY"><div class="plugin-name">arcade</div><code><span class="field-name">gravityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#gravityY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This visual's local x gravity, **added** to any world gravity, unless `allowGravity` is set to false.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frictionX"><div class="plugin-name">arcade</div><code><span class="field-name">frictionX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frictionX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this visual is `immovable` and moving, and another visual body is 'riding' this one, this is the amount of motion the riding body receives on **x** axis.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="frictionY"><div class="plugin-name">arcade</div><code><span class="field-name">frictionY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#frictionY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this visual is `immovable` and moving, and another visual body is 'riding' this one, this is the amount of motion the riding body receives on **y** axis.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angularVelocity"><div class="plugin-name">arcade</div><code><span class="field-name">angularVelocity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular velocity is the rate of change of the visual's rotation. It is measured in degrees per second.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxAngularVelocity"><div class="plugin-name">arcade</div><code><span class="field-name">maxAngularVelocity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxAngularVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum angular velocity in degrees per second that the visual can reach.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angularAcceleration"><div class="plugin-name">arcade</div><code><span class="field-name">angularAcceleration</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularAcceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular acceleration is the rate of change of the angular velocity. Measured in degrees per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="angularDrag"><div class="plugin-name">arcade</div><code><span class="field-name">angularDrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#angularDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The angular drag is the rate of reduction of the angular velocity. Measured in degrees per second squared.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mass"><div class="plugin-name">arcade</div><code><span class="field-name">mass</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The mass of the visual's body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="speed"><div class="plugin-name">arcade</div><code><span class="field-name">speed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#speed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The speed of the visual's body (read only). Equal to the magnitude of the velocity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="moves"><div class="plugin-name">arcade</div><code><span class="field-name">moves</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#moves"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the physics system should update the visual's position and rotation based on its velocity, acceleration, drag, and gravity.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlapX"><div class="plugin-name">arcade</div><code><span class="field-name">overlapX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlapX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When this visual's body collides with another, the amount of overlap (x axis) is stored here.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlapY"><div class="plugin-name">arcade</div><code><span class="field-name">overlapY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlapY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When this visual's body collides with another, the amount of overlap (y axis) is stored here.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="embedded"><div class="plugin-name">arcade</div><code><span class="field-name">embedded</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#embedded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If a visual's body is overlapping with another body, but neither of them are moving (maybe they spawned on-top of each other?) this is set to `true`.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collideWorldBounds"><div class="plugin-name">arcade</div><code><span class="field-name">collideWorldBounds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collideWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A visual body can be set to collide against the world bounds automatically and rebound back into the world if this is set to true. Otherwise it will leave the world.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initArcadePhysics"><div class="plugin-name">arcade</div><code><span class="field-name">initArcadePhysics</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">world</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ArcadeWorld/" class="type-link">ArcadeWorld</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/VisualArcadePhysics/" class="type-link">VisualArcadePhysics</a></code><a class="header-anchor" href="#initArcadePhysics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Init arcade physics (body) bound to this visual.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `world` | [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | *(optional)* | * (optional) A world instance where the body will be attached. If none is provided, default world (app.arcade.world) will be used.  |

| Returns | Description |
|---------|-------------|
| [VisualArcadePhysics](/api-docs/clay-native/ceramic/VisualArcadePhysics/) | A `VisualArcadePhysics` instance |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="velocity"><div class="plugin-name">arcade</div><code><span class="field-name">velocity</span><span class="parenthesis">(</span><span class="arg-name">velocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">velocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#velocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set velocity, or rate of change of the visual position. Measured in points per second.


| Name | Type | Description |
|------|------|-------------|
| `velocityX` | [Float](/api-docs/clay-native/Float/) | The velocity on **x** axis  |
| `velocityY` | [Float](/api-docs/clay-native/Float/) | The velocity on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxVelocity"><div class="plugin-name">arcade</div><code><span class="field-name">maxVelocity</span><span class="parenthesis">(</span><span class="arg-name">maxVelocityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxVelocityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#maxVelocity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set maximum velocity that the visual can reach.


| Name | Type | Description |
|------|------|-------------|
| `maxVelocityX` | [Float](/api-docs/clay-native/Float/) | The max velocity on **x** axis  |
| `maxVelocityY` | [Float](/api-docs/clay-native/Float/) | The max velocity on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="acceleration"><div class="plugin-name">arcade</div><code><span class="field-name">acceleration</span><span class="parenthesis">(</span><span class="arg-name">accelerationX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">accelerationY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#acceleration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set acceleration, which is the rate of change of the velocity. Measured in points per second squared.


| Name | Type | Description |
|------|------|-------------|
| `accelerationX` | [Float](/api-docs/clay-native/Float/) | The acceleration on **x** axis  |
| `accelerationY` | [Float](/api-docs/clay-native/Float/) | The acceleration on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="drag"><div class="plugin-name">arcade</div><code><span class="field-name">drag</span><span class="parenthesis">(</span><span class="arg-name">dragX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dragY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set drag, which is the rate of reduction of the velocity, kind of deceleration. Measured in points per second squared.


| Name | Type | Description |
|------|------|-------------|
| `dragX` | [Float](/api-docs/clay-native/Float/) | The drag value on **x** axis  |
| `dragY` | [Float](/api-docs/clay-native/Float/) | The drag value on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bounce"><div class="plugin-name">arcade</div><code><span class="field-name">bounce</span><span class="parenthesis">(</span><span class="arg-name">bounceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bounceY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bounce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set elasticity of the visual when colliding. `1` means full rebound, `0.5` means 50% rebound velocity.


| Name | Type | Description |
|------|------|-------------|
| `bounceX` | [Float](/api-docs/clay-native/Float/) | The bounce value on **x** axis  |
| `bounceY` | [Float](/api-docs/clay-native/Float/) | The bounce value on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="worldBounce"><div class="plugin-name">arcade</div><code><span class="field-name">worldBounce</span><span class="parenthesis">(</span><span class="arg-name">worldBounceX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">worldBounceY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#worldBounce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The elasticity of the visual when colliding with world bounds. Ignored if `useWorldBounce` is `false` (`bounceY` used instead).


| Name | Type | Description |
|------|------|-------------|
| `worldBounceX` | [Float](/api-docs/clay-native/Float/) | The elasticity value on **x** axis  |
| `worldBounceY` | [Float](/api-docs/clay-native/Float/) | The elasticity value on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxDelta"><div class="plugin-name">arcade</div><code><span class="field-name">maxDelta</span><span class="parenthesis">(</span><span class="arg-name">maxDeltaX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxDeltaY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#maxDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The max delta, or rate of change the visual position. Measured in points per second.


| Name | Type | Description |
|------|------|-------------|
| `maxDeltaX` | [Float](/api-docs/clay-native/Float/) | The max delta value on **x** axis  |
| `maxDeltaY` | [Float](/api-docs/clay-native/Float/) | The max delta value on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="gravity"><div class="plugin-name">arcade</div><code><span class="field-name">gravity</span><span class="parenthesis">(</span><span class="arg-name">gravityX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">gravityY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gravity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This visual's local gravity, **added** to any world gravity, unless `allowGravity` is set to false.


| Name | Type | Description |
|------|------|-------------|
| `gravityX` | [Float](/api-docs/clay-native/Float/) | The gravity on **x** axis  |
| `gravityY` | [Float](/api-docs/clay-native/Float/) | The gravity on **y** axis |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="friction"><div class="plugin-name">arcade</div><code><span class="field-name">friction</span><span class="parenthesis">(</span><span class="arg-name">frictionX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">frictionY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#friction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this visual is `immovable` and moving, and another visual body is 'riding' this one, this is the amount of motion the riding body receives on x & y axis.


| Name | Type | Description |
|------|------|-------------|
| `frictionX` | [Float](/api-docs/clay-native/Float/) | The friction on **x** axis  |
| `frictionY` | [Float](/api-docs/clay-native/Float/) | The friction on **y** axis |

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nape"><div class="plugin-name">nape</div><code><span class="field-name">nape</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/VisualNapePhysics/" class="type-link">VisualNapePhysics</a></code><a class="header-anchor" href="#nape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The nape physics (body) of this visual.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initNapePhysics"><div class="plugin-name">nape</div><code><span class="field-name">initNapePhysics</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/space/Space/" class="type-link">nape.space.Space</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shape</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shapes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">material</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/phys/Material/" class="type-link">nape.phys.Material</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/VisualNapePhysics/" class="type-link">VisualNapePhysics</a></code><a class="header-anchor" href="#initNapePhysics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Init nape physics body bound to this visual.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | Anonymous | | Physics body type (`STATIC`, `KINEMATIC` or `DYNAMIC`)  |
| `space` | [nape.space.Space](/api-docs/clay-native/nape/space/Space/) | *(optional)* | (optional) Related nape spaces. Will use default space if not provided.  |
| `shape` | [nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/) | *(optional)* | (optional) Shape used for this body. Default is a box matching visual bounds.  |
| `shapes` | [Array](/api-docs/clay-native/Array/)<[nape.shape.Shape](/api-docs/clay-native/nape/shape/Shape/)> | *(optional)* | (optional) Array of shapes used for this body.  |
| `material` | [nape.phys.Material](/api-docs/clay-native/nape/phys/Material/) | *(optional)* | (optional) A custom material to use with this body.  |

| Returns | Description |
|---------|-------------|
| [VisualNapePhysics](/api-docs/clay-native/ceramic/VisualNapePhysics/) | A `VisualNapePhysics` instance |

## Private Members

<div class="signature field-var no-description" id="FLAG_NOT_ACTIVE"><code><span class="field-name">FLAG_NOT_ACTIVE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_NOT_ACTIVE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_VISIBLE_WHEN_ACTIVE"><code><span class="field-name">FLAG_VISIBLE_WHEN_ACTIVE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_VISIBLE_WHEN_ACTIVE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_TOUCHABLE_WHEN_ACTIVE"><code><span class="field-name">FLAG_TOUCHABLE_WHEN_ACTIVE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_TOUCHABLE_WHEN_ACTIVE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_IS_HIT_VISUAL"><code><span class="field-name">FLAG_IS_HIT_VISUAL</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_IS_HIT_VISUAL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FLAG_ARCADE_BODY_ENABLE"><code><span class="field-name">FLAG_ARCADE_BODY_ENABLE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FLAG_ARCADE_BODY_ENABLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Flags/" class="type-link">Flags</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Just a way to store some flags.
32 boolean values stored inside an `Int`.

<hr class="field-separator" />

<div class="signature field-var no-description" id="isHitVisual"><code><span class="field-name">isHitVisual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHitVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeChildrenDepth"><code><span class="field-name">computeChildrenDepth</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeChildrenDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute children depth. The result depends on whether
a parent defines a custom `depthRange` value or not.

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeMinMaxDepths"><code><span class="field-name">computeMinMaxDepths</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMinMaxDepths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="multiplyDepths"><code><span class="field-name">multiplyDepths</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">startDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">targetRange</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#multiplyDepths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |
| `startDepth` | [Float](/api-docs/clay-native/Float/) |
| `targetRange` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerDown"><code><span class="field-name">emitPointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a pointer (touch or mouse) is down on the visual


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | The info related to this pointer event |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerUp"><code><span class="field-name">emitPointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a pointer (touch or mouse) was down on the visual and is not anymore


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | The info related to this pointer event |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerOver"><code><span class="field-name">emitPointerOver</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a pointer (touch or mouse) is over the visual


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | The info related to this pointer event |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerOut"><code><span class="field-name">emitPointerOut</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerOut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a pointer (touch or mouse) was over the visual and is not anymore


| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | The info related to this pointer event |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFocus"><code><span class="field-name">emitFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when this visual gains focus (after handling a pointer event)

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitBlur"><code><span class="field-name">emitBlur</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBlur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when this visual loses focus

<hr class="field-separator" />

<div class="signature field-method no-description" id="willListenPointerOver"><code><span class="field-name">willListenPointerOver</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willListenPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitCollide"><code><span class="field-name">emitCollide</span><span class="parenthesis">(</span><span class="arg-name">visual1</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">visual2</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual body collides with another visual's body.


| Name | Type | Description |
|------|------|-------------|
| `visual1` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `visual2` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The other colliding visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitOverlap"><code><span class="field-name">emitOverlap</span><span class="parenthesis">(</span><span class="arg-name">visual1</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">visual2</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual body overlaps with another visual's body.


| Name | Type | Description |
|------|------|-------------|
| `visual1` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `visual2` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The other overlapping visual |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitCollideBody"><code><span class="field-name">emitCollideBody</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollideBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual body collides with another body.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `body` | [arcade.Body](/api-docs/clay-native/arcade/Body/) | The other colliding body |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitOverlapBody"><code><span class="field-name">emitOverlapBody</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/arcade/Body/" class="type-link">arcade.Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlapBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual body overlaps with another body.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The visual  |
| `body` | [arcade.Body](/api-docs/clay-native/arcade/Body/) | The other overlapping body |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWorldBounds"><code><span class="field-name">emitWorldBounds</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">up</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">down</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWorldBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatched when this visual body collides with the world bounds.


| Name | Type | Description |
|------|------|-------------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | This visual  |
| `up` | [Bool](/api-docs/clay-native/Bool/) | `true` if visual collides up with bounds  |
| `down` | [Bool](/api-docs/clay-native/Bool/) | `true` if visual collides down with bounds  |
| `left` | [Bool](/api-docs/clay-native/Bool/) | `true` if visual collides left with bounds  |
| `right` | [Bool](/api-docs/clay-native/Bool/) | `true` if visual collides right with bounds |

<hr class="field-separator" />

<div class="signature field-method has-description" id="internalFlag"><code><span class="field-name">internalFlag</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#internalFlag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read and write arbitrary boolean flags on this visual.
Index should be between 0 (included) and 16 (excluded) or result is undefined.
/!\ Reserved for internal use

| Name | Type | Default |
|------|------|---------|
| `index` | [Int](/api-docs/clay-native/Int/) | |
| `value` | [Bool](/api-docs/clay-native/Bool/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformDidChange"><code><span class="field-name">transformDidChange</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this visual's transform has changed

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeMatrix"><code><span class="field-name">computeMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this visual's matrix needs to be recomputed

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeTranslatesOnly"><code><span class="field-name">computeTranslatesOnly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeTranslatesOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="doComputeMatrix"><code><span class="field-name">doComputeMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doComputeMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="hitTest"><code><span class="field-name">hitTest</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hitTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual hit test performed on the visual.
If needed to change how hit test is performed
on a visual subclass, this is the method to override.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Screen **x** coordinate  |
| `y` | [Float](/api-docs/clay-native/Float/) | Screen **y** coordinate  |
| `matrix` | [Transform](/api-docs/clay-native/ceramic/Transform/) | The matrix being applied to visual, relative to screen space  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if it hits |

<hr class="field-separator" />

<div class="signature field-method has-description" id="interceptPointerDown"><code><span class="field-name">interceptPointerDown</span><span class="parenthesis">(</span><span class="arg-name">hittingVisual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#interceptPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override this method in subclasses to intercept hitting pointer down events on this visual's children (any level in sub-hierarchy).
Return `true` to stop an event from being triggered on the hitting child, `false` (default) otherwise.


| Name | Type | Description |
|------|------|-------------|
| `hittingVisual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The hitting visual, meaning the visual on which the event applies  |
| `x` | [Float](/api-docs/clay-native/Float/) | The **x** coordinate of the event  |
| `y` | [Float](/api-docs/clay-native/Float/) | The **y** coordinate of the event  |
| `touchIndex` | [Int](/api-docs/clay-native/Int/) | The **touch index** of the event (or `-1` if it is not a touch event)  |
| `buttonId` | [Int](/api-docs/clay-native/Int/) | The **button id** of the event (or `-1` if it is not a mouse event)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if the event is intercepted |

<hr class="field-separator" />

<div class="signature field-method has-description" id="interceptPointerOver"><code><span class="field-name">interceptPointerOver</span><span class="parenthesis">(</span><span class="arg-name">hittingVisual</span><span class="operator">:</span> <a href="#" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#interceptPointerOver"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Override this method in subclasses to intercept hitting pointer over events on this visual's children (any level in sub-hierarchy).
Return `true` to stop an event from being triggered on the hitting child, `false` (default) otherwise.


| Name | Type | Description |
|------|------|-------------|
| `hittingVisual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | The hitting visual, meaning the visual on which the event applies  |
| `x` | [Float](/api-docs/clay-native/Float/) | The **x** coordinate of the event  |
| `y` | [Float](/api-docs/clay-native/Float/) | The **y** coordinate of the event  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` if the event is intercepted |

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeVisibility"><code><span class="field-name">computeVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeClip"><code><span class="field-name">computeClip</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeTouchable"><code><span class="field-name">computeTouchable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeTouchable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeRenderTarget"><code><span class="field-name">computeRenderTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |
| `:allow` | ceramic.Screen |
| `:allow` | ceramic.MeshPool |


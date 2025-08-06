---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ImageView
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImageView/
---

# ImageView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ImageView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">View</a> → <strong>ceramic.ImageView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

A view component for displaying and laying out images with flexible scaling options.

ImageView provides automatic image loading from asset IDs and supports multiple
scaling modes to fit images within their container. It handles texture management
and cleanup automatically.

Features:
- Automatic asset loading from image paths or asset IDs
- Multiple scaling modes (FIT, FILL, CUSTOM)
- Proper texture lifecycle management
- Reactive updates when image or scaling properties change

```haxe
var imageView = new ImageView();
imageView.size(200, 150);
imageView.image = "hero.png";
imageView.scaling = FIT; // Scale to fit within bounds

// Or use FILL to cover the entire area
imageView.scaling = FILL;

// Or use custom scaling
imageView.scaling = CUSTOM;
imageView.imageScale = 2.0;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ImageViewScaling/">ImageViewScaling</a>, <a href="/api-docs/clay-native/ceramic/View/">View</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">ui</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="imageScale"><div class="plugin-name">ui</div><code><span class="field-name">imageScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#imageScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom scale factor for the image.
Only applied when scaling mode is set to CUSTOM.
Default is 1.0 (original size).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scaling"><div class="plugin-name">ui</div><code><span class="field-name">scaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#scaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines how the image is scaled within the view bounds.
- FIT: Scale to fit within bounds while maintaining aspect ratio
- FILL: Scale to fill the entire bounds, cropping if necessary
- CUSTOM: Use the imageScale value
Default is FIT.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="image"><div class="plugin-name">ui</div><code><span class="field-name">image</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The image to display, specified as an asset ID or path.
Setting this will automatically load the image texture.
Set to null to clear the image.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="imageQuadInheritsAlpha"><div class="plugin-name">ui</div><code><span class="field-name">imageQuadInheritsAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#imageQuadInheritsAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the internal image quad inherits the view's alpha value.
When true, the image opacity is multiplied by the view's alpha.
Default follows the quad's inheritAlpha setting.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateImageScale"><div class="plugin-name">ui</div><code><span class="field-name">invalidateImageScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateImageScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateScaling"><div class="plugin-name">ui</div><code><span class="field-name">invalidateScaling</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateImage"><div class="plugin-name">ui</div><code><span class="field-name">invalidateImage</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setImageTexture"><div class="plugin-name">ui</div><code><span class="field-name">setImageTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setImageTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Directly sets the image texture without going through asset loading.
Useful when you already have a texture reference.
Handles cleanup of previously loaded textures.



| Name | Type | Description |
|------|------|-------------|
| `texture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | The texture to display, or null to clear |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">ui</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">ui</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the view size based on the image dimensions and constraints.
Calculates the appropriate scale factor for FIT mode.

| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/clay-native/Float/) |
| `parentHeight` | [Float](/api-docs/clay-native/Float/) |
| `layoutMask` | [ViewLayoutMask](/api-docs/clay-native/ceramic/ViewLayoutMask/) |
| `persist` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ImageView with default settings.
The view is transparent by default and contains a centered image quad.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedImageScale"><div class="plugin-name">ui</div><code><span class="field-name">unobservedImageScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedImageScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedScaling"><div class="plugin-name">ui</div><code><span class="field-name">unobservedScaling</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedScaling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedImage"><div class="plugin-name">ui</div><code><span class="field-name">unobservedImage</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="imageQuad"><div class="plugin-name">ui</div><code><span class="field-name">imageQuad</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#imageQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The internal quad used to render the image texture.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedImageScale"><div class="plugin-name">ui</div><code><span class="field-name">computedImageScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedImageScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed scale factor based on FIT scaling mode.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loadedTexture"><div class="plugin-name">ui</div><code><span class="field-name">loadedTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#loadedTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the currently loaded texture for lifecycle management.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">ui</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">ImageView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [ImageView](/api-docs/clay-native/ceramic/ImageView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitImageScaleChange"><div class="plugin-name">ui</div><code><span class="field-name">emitImageScaleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitImageScaleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when imageScale field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitScalingChange"><div class="plugin-name">ui</div><code><span class="field-name">emitScalingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScalingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scaling field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitImageChange"><div class="plugin-name">ui</div><code><span class="field-name">emitImageChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/AssetId/" class="type-link">AssetId</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitImageChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when image field changes.

| Name | Type |
|------|------|
| `current` | [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)> |
| `previous` | [AssetId](/api-docs/clay-native/ceramic/AssetId/)<[String](/api-docs/clay-native/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateImageScale"><div class="plugin-name">ui</div><code><span class="field-name">updateImageScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateImageScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the image quad scale based on the current scaling mode.
Called automatically when scaling or imageScale properties change.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateImage"><div class="plugin-name">ui</div><code><span class="field-name">updateImage</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads and sets the image texture based on the current image property.
Handles asset loading, texture management, and cleanup of previous textures.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Positions and sizes the image quad within the view bounds.
Handles different scaling modes including cropping for FILL mode.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


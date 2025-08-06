---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasPage
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TextureAtlasPage/
---

# TextureAtlasPage

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasPage.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TextureAtlasPage</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

Represents a single texture page within a texture atlas.

TextureAtlasPage holds the actual GPU texture containing packed images
and metadata about the page dimensions and filtering. Large atlases may
consist of multiple pages when images don't fit within texture size limits.

Pages are observable, allowing UI or debugging tools to react to changes
in texture assignment or filtering modes. Each page is referenced by
regions via their page index.

Features:
- Observable properties for reactive updates
- Automatic dimension detection from texture
- Filter mode propagation to texture
- Named identification for debugging

```haxe
// Access a page from an atlas
var page = atlas.pages[0];
trace('Page ${page.name}: ${page.width}x${page.height}');

// Change filtering for all regions on this page
page.filter = NEAREST; // For pixel art
```

<div class="see"><strong>See:</strong> TextureAtlas Container that manages pages, TextureAtlasRegion References pages by index, Texture The GPU texture resource</div>


## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this page.

Typically in format like "page0", "atlas_0", or custom names.
Used for debugging and in some atlas formats for page references.

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of this page in pixels.

Set explicitly or auto-detected from the texture.
Observable to allow reactive updates when page size changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of this page in pixels.

Set explicitly or auto-detected from the texture.
Observable to allow reactive updates when page size changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="filter"><code><span class="field-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Texture filtering mode for this page.

Controls how the texture is sampled:
- LINEAR: Smooth interpolation (default)
- NEAREST: Pixel-perfect sampling

When changed, automatically updates the associated texture.
All regions on this page share the same filter setting.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texture"><code><span class="field-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The GPU texture containing the packed images.

This texture holds all regions assigned to this page.
When set, automatically updates width/height if not already specified.
Observable to allow monitoring texture changes or hot-reloading.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateName"><code><span class="field-name">invalidateName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateWidth"><code><span class="field-name">invalidateWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateHeight"><code><span class="field-name">invalidateHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateFilter"><code><span class="field-name">invalidateFilter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateTexture"><code><span class="field-name">invalidateTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindEvents"><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span> <span class="operator">=</span> <span class="default-value">LINEAR</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new texture atlas page.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | | Identifier for this page  |
| `width` | [Float](/api-docs/clay-native/Float/) | `0` | Page width in pixels (0 to auto-detect from texture)  |
| `height` | [Float](/api-docs/clay-native/Float/) | `0` | Page height in pixels (0 to auto-detect from texture)  |
| `filter` | Anonymous | `LINEAR` | Texture filtering mode (default: LINEAR)  |
| `texture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | `null` | Optional texture to assign immediately |

## Private Members

<div class="signature field-var no-description" id="unobservedName"><code><span class="field-name">unobservedName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedWidth"><code><span class="field-name">unobservedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedHeight"><code><span class="field-name">unobservedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedFilter"><code><span class="field-name">unobservedFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedTexture"><code><span class="field-name">unobservedTexture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#unobservedTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">TextureAtlasPage</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [TextureAtlasPage](/api-docs/clay-native/ceramic/TextureAtlasPage/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitNameChange"><code><span class="field-name">emitNameChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitNameChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when name field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-native/String/) |
| `previous` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWidthChange"><code><span class="field-name">emitWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when width field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitHeightChange"><code><span class="field-name">emitHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when height field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFilterChange"><code><span class="field-name">emitFilterChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFilterChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when filter field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTextureChange"><code><span class="field-name">emitTextureChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTextureChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when texture field changes.

| Name | Type |
|------|------|
| `current` | [Texture](/api-docs/clay-native/ceramic/Texture/) |
| `previous` | [Texture](/api-docs/clay-native/ceramic/Texture/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |


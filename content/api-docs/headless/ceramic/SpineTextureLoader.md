---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineTextureLoader
target: Headless
permalink: api-docs/headless/ceramic/SpineTextureLoader/
---

# SpineTextureLoader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineTextureLoader.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineTextureLoader</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spine/support/graphics/TextureLoader/">spine.support.graphics.TextureLoader</a></div>

Custom texture loader implementation for integrating Spine with Ceramic's asset system.

This class implements Spine's TextureLoader interface to handle texture loading
for Spine animations. It acts as a bridge between Spine's texture atlas system
and Ceramic's asset management, ensuring textures are loaded through Ceramic's
pipeline with proper caching, hot-reloading, and resource management.

The loader is used internally by SpineAsset when parsing texture atlases.
It delegates the actual loading work to the SpineAsset instance, which
handles the integration with Ceramic's texture loading system.

Key responsibilities:
- Loading texture pages (images) referenced in Spine atlases
- Managing texture lifecycle (load/unload)
- Handling path resolution with optional base paths

<div class="see"><strong>See:</strong> SpineAsset for the actual texture loading implementation</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="loadPage"><div class="plugin-name">spine</div><code><span class="field-name">loadPage</span><span class="parenthesis">(</span><span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/AtlasPage/" class="type-link">spine.support.graphics.AtlasPage</a><span class="operator">,</span> <span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads a texture page (image) for the atlas.

This method is called by the Spine runtime when parsing an atlas file.
It delegates to the SpineAsset to load the texture through Ceramic's
asset system, ensuring proper caching and resource management.



| Name | Type | Description |
|------|------|-------------|
| `page` | [spine.support.graphics.AtlasPage](/api-docs/headless/spine/support/graphics/AtlasPage/) | The AtlasPage to load the texture for. The loader should set the page's rendererObject to the loaded texture.  |
| `path` | [String](/api-docs/headless/String/) | The path to the texture file as specified in the atlas |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="loadRegion"><div class="plugin-name">spine</div><code><span class="field-name">loadRegion</span><span class="parenthesis">(</span><span class="arg-name">region</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/AtlasRegion/" class="type-link">spine.support.graphics.AtlasRegion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called after a region is loaded from the atlas.

This method is part of the TextureLoader interface but is not used
in Ceramic's implementation. Region setup is handled automatically
by the Spine runtime after the page texture is loaded.



| Name | Type | Description |
|------|------|-------------|
| `region` | [spine.support.graphics.AtlasRegion](/api-docs/headless/spine/support/graphics/AtlasRegion/) | The atlas region that was just loaded |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unloadPage"><div class="plugin-name">spine</div><code><span class="field-name">unloadPage</span><span class="parenthesis">(</span><span class="arg-name">page</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/AtlasPage/" class="type-link">spine.support.graphics.AtlasPage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unloadPage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unloads a texture page to free resources.

This method is called when an atlas is being disposed. It delegates
to the SpineAsset to properly clean up the texture and remove it
from Ceramic's texture cache.



| Name | Type | Description |
|------|------|-------------|
| `page` | [spine.support.graphics.AtlasPage](/api-docs/headless/spine/support/graphics/AtlasPage/) | The AtlasPage whose texture should be unloaded |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">asset</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineAsset/" class="type-link">SpineAsset</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">basePath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineTextureLoader instance.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `asset` | [SpineAsset](/api-docs/headless/ceramic/SpineAsset/) | | The SpineAsset that will handle texture loading operations  |
| `basePath` | [String](/api-docs/headless/String/) | *(optional)* | Optional base path to prepend to texture paths in the atlas |

## Private Members

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">spine</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineAsset/" class="type-link">SpineAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The SpineAsset instance that handles the actual texture loading.
This asset manages the integration with Ceramic's asset system.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="basePath"><div class="plugin-name">spine</div><code><span class="field-name">basePath</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#basePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional base path prepended to texture paths in the atlas.

This allows atlases to use relative paths while the actual texture
files are located in a specific directory. For example, if basePath
is "characters/hero/", a texture path "body.png" in the atlas would
resolve to "characters/hero/body.png".

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.SpineAsset |


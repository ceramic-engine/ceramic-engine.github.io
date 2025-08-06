---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableBlending
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/scriptable/ScriptableBlending/
---

# ScriptableBlending

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableBlending.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableBlending</strong> (Class)</div>

Scriptable wrapper for Blending enum to expose blending modes to scripts.

This class provides constants representing different pixel blending modes
that can be used when rendering visuals. In scripts, this type is exposed
as `Blending` (without the Scriptable prefix).

Blending modes control how pixels from a source (the visual being drawn)
are combined with pixels from the destination (what's already on screen).

## Usage in Scripts

```haxe
// Set a visual to use additive blending
myVisual.blending = Blending.ADD;

// Reset to default blending
myVisual.blending = Blending.AUTO;
```

## Available Modes

- **AUTO**: Default blending, automatically chosen by Ceramic
- **PREMULTIPLIED_ALPHA**: Standard premultiplied alpha blending
- **ADD**: Additive blending (brightens the destination)
- **ALPHA**: Traditional alpha blending (rarely needed)
- **SET**: Replace destination pixels without blending
- **RENDER_TO_TEXTURE**: Special mode for render textures

<div class="see"><strong>See:</strong> ceramic.Blending The actual implementation, ceramic.Visual For setting blending on visuals</div>


## Static Members

<div class="signature field-var has-description" id="AUTO"><code><span class="field-name">AUTO</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#AUTO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Automatic/default blending in ceramic. Internally, this translates to premultiplied alpha blending as textures
are already transformed for this blending at asset copy phase, except in some situations (render to texture) where
ceramic may use some more specific blendings as needed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="PREMULTIPLIED_ALPHA"><code><span class="field-name">PREMULTIPLIED_ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PREMULTIPLIED_ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Explicit premultiplied alpha blending

<hr class="field-separator" />

<div class="signature field-var has-description" id="ADD"><code><span class="field-name">ADD</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ADD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additive blending

<hr class="field-separator" />

<div class="signature field-var has-description" id="SET"><code><span class="field-name">SET</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SET"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set blending

<hr class="field-separator" />

<div class="signature field-var has-description" id="RENDER_TO_TEXTURE"><code><span class="field-name">RENDER_TO_TEXTURE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RENDER_TO_TEXTURE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Blending used by ceramic when rendering to texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ALPHA"><code><span class="field-name">ALPHA</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ALPHA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Traditional alpha blending. This should only be used on very specific cases. Used instead of `NORMAL` blending
when the visual is drawing a RenderTexture.


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Texture
target: Clay (Web)
permalink: api-docs/clay-web/backend/Texture/
---

# Texture

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Texture.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Texture</strong> (Typedef)</div>

Represents a GPU texture resource in the Clay backend.

Textures are image data stored in GPU memory that can be used for:
- Rendering sprites and visual elements
- Texture mapping on 3D models
- Render targets for off-screen rendering
- Post-processing effects

This type wraps Clay's internal texture representation and provides
implicit conversions for seamless integration. The actual texture
format and capabilities depend on the graphics API (OpenGL/WebGL).

Textures are managed by the backend and automatically cleaned up
when no longer referenced.

<div class="see"><strong>See:</strong> ceramic.Texture For the high-level texture API, Textures For the texture loading subsystem</div>



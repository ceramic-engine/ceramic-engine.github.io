---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: TextureId
target: Clay (Web)
permalink: api-docs/clay-web/backend/TextureId/
---

# TextureId

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/TextureId.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.TextureId</strong> (Typedef)</div>

Represents a GPU texture identifier in the Clay backend.

TextureId is a lightweight handle that references a texture resource
on the GPU. It's used internally by the rendering system to bind
textures for drawing operations.

This abstract type provides:
- Type-safe texture references
- Default "no texture" constant
- ImGui integration for texture display in debug UI

The actual value is typically an OpenGL texture handle or similar
GPU-specific identifier.


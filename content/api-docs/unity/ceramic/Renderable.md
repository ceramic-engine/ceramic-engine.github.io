---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Renderable
target: Unity
permalink: api-docs/unity/ceramic/Renderable/
---

# Renderable

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Renderable.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <strong>ceramic.Renderable</strong> (Class) → <a href="/api-docs/unity/ceramic/ImGuiRenderable/">ImGuiRenderable</a></div>

A Visual whose rendering is delegated to a custom `render()` callback.

`Renderable` participates naturally in Ceramic's render texture dependency
ordering via the existing topological sort in `App.computeRenderTexturesPriority()`.

Subclasses (e.g. `Renderer3D` in the Star plugin) override `computeUsedTextures()`
to populate `usedTextures` with the textures they sample from, and `render()`
to perform their custom draw calls via `backend.Draw` (2D) and/or the 3D backend.

Like Quad and Mesh, Renderable can optionally render off-screen by setting
`this.renderTarget`. If not set, it renders directly to the current framebuffer.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/Visual/">Visual</a>, <a href="/api-docs/unity/ceramic/Renderer/">Renderer</a></div>


## Instance Members

<div class="signature field-var has-description" id="usedTextures"><code><span class="field-name">usedTextures</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Texture/" class="type-link">Texture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only view of the textures this Renderable samples from during `render()`.
Populated by `computeUsedTextures()`. Access `.original` to manipulate from subclasses.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedTexturesDirty"><code><span class="field-name">usedTexturesDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usedTexturesDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `true` when the set of textures used by this Renderable has changed
(e.g. a new material was assigned, a model was loaded).

When `true`, the render target dependency registration in `App.updateVisuals()`
will call `computeUsedTextures()` to refresh `usedTextures`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Draw/" class="type-link">backend.Draw</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by `Renderer.hx` during the draw pass. At this point:
- The render target is bound (if `this.renderTarget` is set)
- Blending, clip, and stencil state have been applied
- Any render textures this Renderable depends on have already been rendered

The `draw` parameter is the CONCRETE low-level 2D backend (`backend.Draw`,
not the `spec.Draw` interface), like the rest of `Renderer.hx`, this bypasses
interface dispatch so the backend's inline methods stay inlined.

| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/unity/backend/Draw/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeUsedTextures"><code><span class="field-name">computeUsedTextures</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeUsedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

(Re)populate `this.usedTextures` with all textures this Renderable will
sample from during `render()`. Called when `usedTexturesDirty` is `true`.

Subclasses MUST override this if they use textures:
- Clear the existing array: `usedTextures.original.resize(0)`
- Push textures: `usedTextures.original.push(myTexture)`
- Do NOT replace the array reference
- Set `usedTexturesDirty = true` whenever the texture set changes

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |


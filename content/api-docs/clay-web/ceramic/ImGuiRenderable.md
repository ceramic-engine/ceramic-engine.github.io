---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiRenderable
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ImGuiRenderable/
---

# ImGuiRenderable

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiRenderable.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Renderable/">Renderable</a> → <strong>ceramic.ImGuiRenderable</strong> (Class)</div>

Renders Dear ImGui's draw data THROUGH ceramic's own 2D pipeline - no
imgui_impl_* platform renderer involved, which is what makes the plugin
cross-backend (clay native, clay web, unity share this exact code).

A `Renderable` gets the concrete `backend.Draw` in `render()`: ImGui's
per-command model (scissor rect + texture + a vertex/index slice) maps 1:1
onto `enableScissor` / `bindTexture` / `putPos...` / `flush`. The engine's
`drawRenderable` bracket flushes and dirties the 2D state afterwards, so the
regular pipeline resumes untouched.

Coordinates are logical (ImGui's `DisplaySize` is ceramic's logical screen
size; the backend applies density to both geometry and scissor). Vertex
colors are premultiplied CPU-side to match ceramic's premultiplied-alpha
compositing.

## Instance Members

<div class="signature field-method no-description has-plugin" id="computeUsedTextures"><div class="plugin-name">imgui</div><code><span class="field-name">computeUsedTextures</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeUsedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="render"><div class="plugin-name">imgui</div><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">imgui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="heapU16"><div class="plugin-name">imgui</div><code><span class="field-name">heapU16</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heapU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push one draw command's geometry. The command's indices reference a
window of the list's vertex buffer: we locate that [min..max] window,
push those vertices once, and rebase the indices. Windows larger than
the batcher's capacity fall back to per-triangle pushes.

| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="heapF32"><div class="plugin-name">imgui</div><code><span class="field-name">heapF32</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#heapF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="heapU32"><div class="plugin-name">imgui</div><code><span class="field-name">heapU32</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heapU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pushCommand"><div class="plugin-name">imgui</div><code><span class="field-name">pushCommand</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">multiTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">vtx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vtxOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">elemCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushCommand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `multiTexture` | [Bool](/api-docs/clay-web/Bool/) |
| `vtx` | [Int](/api-docs/clay-web/Int/) |
| `idx` | [Int](/api-docs/clay-web/Int/) |
| `vertSize` | [Int](/api-docs/clay-web/Int/) |
| `vtxOffset` | [Int](/api-docs/clay-web/Int/) |
| `idxOffset` | [Int](/api-docs/clay-web/Int/) |
| `elemCount` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putVertex"><div class="plugin-name">imgui</div><code><span class="field-name">putVertex</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">multiTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">vertAddr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `multiTexture` | [Bool](/api-docs/clay-web/Bool/) |
| `vertAddr` | [Int](/api-docs/clay-web/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


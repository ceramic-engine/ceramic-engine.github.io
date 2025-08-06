---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Renderer
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Renderer/
---

# Renderer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Renderer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.Renderer</strong> (Class)</div>

The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the screen.

This implementation-independent renderer works with backend draw implementations to:
- Batch draw calls for optimal GPU performance
- Manage render state (textures, shaders, blend modes)
- Handle render-to-texture operations
- Implement stencil-based clipping
- Support multi-texture batching when available

The renderer uses several optimization strategies:
- **State batching**: Groups visuals with the same rendering state
- **Texture atlasing**: Batches multiple textures in a single draw call
- **Vertex buffering**: Minimizes GPU state changes
- **Z-ordering**: Maintains proper visual layering

Rendering pipeline:
1. Sort visuals by depth and rendering state
2. Group visuals into batches with matching states
3. Submit batches to GPU with minimal state changes
4. Handle special cases (stencil clipping, render targets)

```haxe
// The renderer is typically managed by the App
var renderer = app.renderer;
renderer.render(true, app.visuals);
```

<div class="see"><strong>See:</strong> Visual The base class for all renderable objects, backend.Draw The backend interface for GPU operations, Shader For custom GPU shader programs, RenderTexture For off-screen rendering</div>


## Instance Members

<div class="signature field-method has-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="arg-name">isMainRender</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">ceramicVisuals</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders a list of visuals to the screen or render target.

This is the main entry point for the rendering pipeline. It:
1. Initializes rendering state
2. Processes each visual in order
3. Batches visuals with matching states
4. Handles special rendering modes (clipping, render targets)
5. Submits draw calls to the GPU



| Name | Type | Description |
|------|------|-------------|
| `isMainRender` | [Bool](/api-docs/clay-web/Bool/) | Whether this is the main render pass (vs render-to-texture)  |
| `ceramicVisuals` | [Array](/api-docs/clay-web/Array/)<[Visual](/api-docs/clay-web/ceramic/Visual/)> | Array of visuals to render, pre-sorted by depth |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="drawCalls"><code><span class="field-name">drawCalls</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#drawCalls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of draw calls made in the current frame.
Lower values indicate better batching performance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeShader"><code><span class="field-name">activeShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Shader/" class="type-link">backend.Shader</a></code><a class="header-anchor" href="#activeShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Currently active GPU shader program.

<hr class="field-separator" />

<div class="signature field-var has-description" id="customFloatAttributesSize"><code><span class="field-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#customFloatAttributesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of custom float attributes per vertex for the active shader.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencilClip"><code><span class="field-name">stencilClip</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stencilClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether we're currently rendering to the stencil buffer for clipping.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastTexture"><code><span class="field-name">lastTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#lastTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last used texture to detect state changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastTextureId"><code><span class="field-name">lastTextureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/TextureId/" class="type-link">backend.TextureId</a></code><a class="header-anchor" href="#lastTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backend ID of the last used texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastShader"><code><span class="field-name">lastShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a></code><a class="header-anchor" href="#lastShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last used shader to detect state changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastRenderTarget"><code><span class="field-name">lastRenderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#lastRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last used render target to detect state changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastComputedBlending"><code><span class="field-name">lastComputedBlending</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#lastComputedBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last computed blending mode to detect state changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastClip"><code><span class="field-name">lastClip</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#lastClip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last clipping visual to detect state changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lastClipIsRegular"><code><span class="field-name">lastClipIsRegular</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lastClipIsRegular"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the last clip was a regular quad (can use scissor test).

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeTextureSlot"><code><span class="field-name">activeTextureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#activeTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Currently active texture slot for multi-texturing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendTextures"><code><span class="field-name">backendTextures</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Textures/" class="type-link">backend.Textures</a></code><a class="header-anchor" href="#backendTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backend texture management interface.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendShaders"><code><span class="field-name">backendShaders</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Shaders/" class="type-link">backend.Shaders</a></code><a class="header-anchor" href="#backendShaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Backend shader management interface.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texWidth"><code><span class="field-name">texWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical width of the current texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texHeight"><code><span class="field-name">texHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logical height of the current texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texWidthActual"><code><span class="field-name">texWidthActual</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual GPU width of the current texture (may be power of 2).

<hr class="field-separator" />

<div class="signature field-var has-description" id="texHeightActual"><code><span class="field-name">texHeightActual</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#texHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Actual GPU height of the current texture (may be power of 2).

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultTexturedShader"><code><span class="field-name">defaultTexturedShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Shader/" class="type-link">backend.Shader</a></code><a class="header-anchor" href="#defaultTexturedShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default shader for textured rendering.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultWhiteTexture"><code><span class="field-name">defaultWhiteTexture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#defaultWhiteTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default white texture used when no texture is specified.

<hr class="field-separator" />

<div class="signature field-var has-description" id="quad"><code><span class="field-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#quad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current quad being processed (for type casting optimization).

<hr class="field-separator" />

<div class="signature field-var has-description" id="mesh"><code><span class="field-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a></code><a class="header-anchor" href="#mesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current mesh being processed (for type casting optimization).

<hr class="field-separator" />

<div class="signature field-var has-description" id="stateDirty"><code><span class="field-name">stateDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stateDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the rendering state needs to be updated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="z"><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current Z depth value for layering visuals.
Incremented slightly for each visual to maintain order.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedTextureIndexes"><code><span class="field-name">usedTextureIndexes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedTextureIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indexes of textures used in the current batch.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedTextures"><code><span class="field-name">usedTextures</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#usedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of textures currently bound for multi-texturing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxUsableTexturesInBatch"><code><span class="field-name">maxUsableTexturesInBatch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxUsableTexturesInBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of textures that can be used in a single batch.
Determined by GPU capabilities and shader limitations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="activeShaderCanBatchMultipleTextures"><code><span class="field-name">activeShaderCanBatchMultipleTextures</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#activeShaderCanBatchMultipleTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the active shader supports multi-texture batching.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedRenderTarget"><code><span class="field-name">usedRenderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a></code><a class="header-anchor" href="#usedRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Currently active render target.

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawQuad"><code><span class="field-name">drawQuad</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draws a single quad to the current render target.

Optimized for the most common rendering case. Handles:
- Texture binding and UV mapping
- Color and alpha blending
- Matrix transformations
- Custom shader attributes
- Batching with previous quads when possible



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `quad` | [Quad](/api-docs/clay-web/ceramic/Quad/) | The quad visual to render |

<hr class="field-separator" />

<div class="signature field-method has-description" id="drawMesh"><code><span class="field-name">drawMesh</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draws a mesh with arbitrary vertices and triangles.

More flexible than drawQuad but with similar optimizations:
- Vertex buffer management
- Color mapping (per-mesh, per-triangle, or per-vertex)
- Custom vertex attributes
- Large mesh splitting across multiple draw calls



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `mesh` | [Mesh](/api-docs/clay-web/ceramic/Mesh/) | The mesh visual to render |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flushes pending draw commands to the GPU.

Called when:
- Render state changes (texture, shader, blend mode)
- Buffer capacity is reached
- Rendering is complete



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if anything was flushed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeQuadBlending"><code><span class="field-name">computeQuadBlending</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#computeQuadBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the actual blending mode for a quad.

Resolves AUTO blending based on render target:
- Regular rendering: PREMULTIPLIED_ALPHA
- Render-to-texture: RENDER_TO_TEXTURE



| Name | Type | Description |
|------|------|-------------|
| `quad` | [Quad](/api-docs/clay-web/ceramic/Quad/) | The quad to compute blending for  |

| Returns | Description |
|---------|-------------|
| [Blending](/api-docs/clay-web/ceramic/Blending/) | The resolved blending mode |

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeMeshBlending"><code><span class="field-name">computeMeshBlending</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">Mesh</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Blending/" class="type-link">Blending</a></code><a class="header-anchor" href="#computeMeshBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes the actual blending mode for a mesh.

Similar to computeQuadBlending but for mesh visuals.



| Name | Type | Description |
|------|------|-------------|
| `mesh` | [Mesh](/api-docs/clay-web/ceramic/Mesh/) | The mesh to compute blending for  |

| Returns | Description |
|---------|-------------|
| [Blending](/api-docs/clay-web/ceramic/Blending/) | The resolved blending mode |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSameShader"><code><span class="field-name">isSameShader</span><span class="parenthesis">(</span><span class="arg-name">shaderA</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a><span class="operator">,</span> <span class="arg-name">shaderB</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSameShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shaderA` | [Shader](/api-docs/clay-web/ceramic/Shader/) |
| `shaderB` | [Shader](/api-docs/clay-web/ceramic/Shader/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useShader"><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Shader/" class="type-link">backend.Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Activates a shader program for subsequent draw calls.

Updates:
- Active shader state
- Multi-texture capability flags
- Custom attribute configuration



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `shader` | [backend.Shader](/api-docs/clay-web/backend/Shader/) | Backend shader to activate (null for default) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useBlending"><code><span class="field-name">useBlending</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">blending</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Blending/" class="type-link">Blending</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures GPU blending mode for transparency and compositing.

Supports various blend modes:
- PREMULTIPLIED_ALPHA: Standard alpha blending
- ADD: Additive blending for light effects
- ALPHA: Non-premultiplied alpha
- RENDER_TO_TEXTURE: Special mode for render targets



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `blending` | [Blending](/api-docs/clay-web/ceramic/Blending/) | The blending mode to apply |

<hr class="field-separator" />

<div class="signature field-method no-description" id="scissorWithQuad"><code><span class="field-name">scissorWithQuad</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scissorWithQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `quad` | [Quad](/api-docs/clay-web/ceramic/Quad/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isNotRenderedRenderTexture"><code><span class="field-name">isNotRenderedRenderTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNotRenderedRenderTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useRenderTarget"><code><span class="field-name">useRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">RenderTexture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the render target for subsequent draw calls.



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `renderTarget` | [RenderTexture](/api-docs/clay-web/ceramic/RenderTexture/) | Texture to render to (null for screen) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="useFirstTextureInBatch"><code><span class="field-name">useFirstTextureInBatch</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useFirstTextureInBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="useTexture"><code><span class="field-name">useTexture</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">reusing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) |
| `reusing` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="canUseTextureInSameBatch"><code><span class="field-name">canUseTextureInSameBatch</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canUseTextureInSameBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a texture can be added to the current batch.

For multi-texture batching, checks if:
- Texture is already bound in a slot
- Free texture slots are available



| Name | Type | Description |
|------|------|-------------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) | Backend draw interface  |
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) | Texture to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if batching can continue |

<hr class="field-separator" />

<div class="signature field-method no-description" id="useTextureInSameBatch"><code><span class="field-name">useTextureInSameBatch</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="operator">,</span> <span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useTextureInSameBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |
| `texture` | [Texture](/api-docs/clay-web/ceramic/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindUsedTextures"><code><span class="field-name">unbindUsedTextures</span><span class="parenthesis">(</span><span class="arg-name">draw</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Draw/" class="type-link">backend.Draw</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindUsedTextures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `draw` | [backend.Draw](/api-docs/clay-web/backend/Draw/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |


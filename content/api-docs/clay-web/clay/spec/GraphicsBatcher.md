---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GraphicsBatcher
target: Clay (Web)
permalink: api-docs/clay-web/clay/spec/GraphicsBatcher/
---

# GraphicsBatcher

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/spec/GraphicsBatcher.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.spec.GraphicsBatcher</strong> (Interface) → <a href="/api-docs/clay-web/clay/opengl/GLGraphicsBatcher/">clay.opengl.GLGraphicsBatcher</a></div>

Interface for graphics batcher implementations.

Provides a unified API for batched rendering across different graphics backends
(OpenGL, D3D12, etc.). Each backend would implement this interface with
platform-specific optimizations.

The graphics batcher manages vertex/index data accumulation and submission to the GPU.
It handles buffer cycling to prevent GPU stalls and supports multi-texture batching.

Typical usage flow:
1. initBuffers() - Initialize at startup
2. beginRender() - Start frame
3. Configure state (shader, textures, blend mode)
4. Submit vertices via putVertex(), putUVs(), putColor(), putIndex()
5. flush() when buffers full or state changes
6. endRender() - End frame

## Instance Members

<div class="signature field-method has-description" id="initBuffers"><code><span class="field-name">initBuffers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes vertex and index buffers.
Called once during startup to allocate GPU resources.

<hr class="field-separator" />

<div class="signature field-method has-description" id="beginRender"><code><span class="field-name">beginRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a new rendering frame.
Enables vertex attributes and prepares for draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="endRender"><code><span class="field-name">endRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends the current rendering frame.
Performs any cleanup or finalization needed after all draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setVertexLayout"><code><span class="field-name">setVertexLayout</span><span class="parenthesis">(</span><span class="arg-name">hasTextureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setVertexLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures the vertex layout for the current shader.

This determines how vertex data is structured in the buffer,
including support for multi-texture batching and custom attributes.



| Name | Type | Description |
|------|------|-------------|
| `hasTextureSlot` | [Bool](/api-docs/clay-web/Bool/) | Whether vertices include a texture slot for multi-texture batching  |
| `customFloatAttributesSize` | [Int](/api-docs/clay-web/Int/) | Number of custom float attributes per vertex |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCustomAttributes"><code><span class="field-name">setCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">attributes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the custom shader attributes for vertex layout.

These attributes define how custom per-vertex data is structured
in the position buffer. Used by shaders that require additional
vertex data beyond position, UV, and color.



| Name | Type | Description |
|------|------|-------------|
| `attributes` | [Array](/api-docs/clay-web/Array/)<[Dynamic](/api-docs/clay-web/Dynamic/)> | Array of shader attributes (objects with 'size' field), or null for none |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putVertex"><code><span class="field-name">putVertex</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putVertex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a vertex position to the buffer.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X coordinate in screen space  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y coordinate in screen space  |
| `z` | [Float](/api-docs/clay-web/Float/) | Z coordinate for depth ordering |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putVertexWithTextureSlot"><code><span class="field-name">putVertexWithTextureSlot</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putVertexWithTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a vertex position with texture slot for multi-texture batching.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X coordinate in screen space  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y coordinate in screen space  |
| `z` | [Float](/api-docs/clay-web/Float/) | Z coordinate for depth ordering  |
| `textureSlot` | [Float](/api-docs/clay-web/Float/) | Texture slot index for multi-texture batching |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putUVs"><code><span class="field-name">putUVs</span><span class="parenthesis">(</span><span class="arg-name">u</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds texture coordinates for the current vertex.



| Name | Type | Description |
|------|------|-------------|
| `u` | [Float](/api-docs/clay-web/Float/) | Horizontal texture coordinate (0.0 to 1.0)  |
| `v` | [Float](/api-docs/clay-web/Float/) | Vertical texture coordinate (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putColor"><code><span class="field-name">putColor</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds color data for the current vertex.



| Name | Type | Description |
|------|------|-------------|
| `r` | [Float](/api-docs/clay-web/Float/) | Red component (0.0 to 1.0)  |
| `g` | [Float](/api-docs/clay-web/Float/) | Green component (0.0 to 1.0)  |
| `b` | [Float](/api-docs/clay-web/Float/) | Blue component (0.0 to 1.0)  |
| `a` | [Float](/api-docs/clay-web/Float/) | Alpha component (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putIndex"><code><span class="field-name">putIndex</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an index to the index buffer.
Indices reference vertices in the vertex buffer to form primitives.



| Name | Type | Description |
|------|------|-------------|
| `i` | [Int](/api-docs/clay-web/Int/) | Vertex index |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putFloatAttribute"><code><span class="field-name">putFloatAttribute</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putFloatAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a custom float attribute value for the current vertex.
Used with custom shaders that require additional per-vertex data.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | Attribute index (as defined by the shader)  |
| `value` | [Float](/api-docs/clay-web/Float/) | Attribute value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endFloatAttributes"><code><span class="field-name">endFloatAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFloatAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Signals the end of custom float attributes for the current vertex.
Must be called after all putFloatAttribute() calls for a vertex.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNumVertices"><code><span class="field-name">getNumVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNumVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the number of vertices currently in the buffer.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Current vertex count |

<hr class="field-separator" />

<div class="signature field-method has-description" id="shouldFlush"><code><span class="field-name">shouldFlush</span><span class="parenthesis">(</span><span class="arg-name">numVerticesAfter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numIndicesAfter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the buffer should be flushed before adding more geometry.



| Name | Type | Description |
|------|------|-------------|
| `numVerticesAfter` | [Int](/api-docs/clay-web/Int/) | Number of vertices to be added  |
| `numIndicesAfter` | [Int](/api-docs/clay-web/Int/) | Number of indices to be added  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if flush is needed before adding the geometry |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remainingVertices"><code><span class="field-name">remainingVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the remaining vertex capacity in the buffer.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Number of vertices that can still be added |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remainingIndices"><code><span class="field-name">remainingIndices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the remaining index capacity in the buffer.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Number of indices that can still be added |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasAnythingToFlush"><code><span class="field-name">hasAnythingToFlush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAnythingToFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if there is any geometry in the buffer to flush.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if there are vertices/indices waiting to be submitted |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flushes all buffered geometry to the GPU.

Submits accumulated vertex and index data as a draw call.
Should be called when:
- Buffers are full
- Render state changes (texture, shader, blend mode)
- Frame is complete

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">clearDepth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the current render target.



| Name | Type | Description |
|------|------|-------------|
| `r` | [Float](/api-docs/clay-web/Float/) | Red component of clear color (0.0 to 1.0)  |
| `g` | [Float](/api-docs/clay-web/Float/) | Green component of clear color (0.0 to 1.0)  |
| `b` | [Float](/api-docs/clay-web/Float/) | Blue component of clear color (0.0 to 1.0)  |
| `a` | [Float](/api-docs/clay-web/Float/) | Alpha component of clear color (0.0 to 1.0)  |
| `clearDepth` | [Bool](/api-docs/clay-web/Bool/) | Whether to also clear the depth buffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setViewport"><code><span class="field-name">setViewport</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the viewport dimensions.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Int](/api-docs/clay-web/Int/) | Left edge of viewport  |
| `y` | [Int](/api-docs/clay-web/Int/) | Bottom edge of viewport  |
| `width` | [Int](/api-docs/clay-web/Int/) | Viewport width in pixels  |
| `height` | [Int](/api-docs/clay-web/Int/) | Viewport height in pixels |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPrimitiveType"><code><span class="field-name">setPrimitiveType</span><span class="parenthesis">(</span><span class="arg-name">primitiveType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPrimitiveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the primitive type for rendering.



| Name | Type | Description |
|------|------|-------------|
| `primitiveType` | [Int](/api-docs/clay-web/Int/) | 0 for triangles, 1 for lines |

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableBlending"><code><span class="field-name">enableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables alpha blending for subsequent draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="disableBlending"><code><span class="field-name">disableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables alpha blending for subsequent draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBlendFuncSeparate"><code><span class="field-name">setBlendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets separate blend functions for RGB and alpha channels.



| Name | Type | Description |
|------|------|-------------|
| `srcRgb` | [Int](/api-docs/clay-web/Int/) | Source blend factor for RGB channels  |
| `dstRgb` | [Int](/api-docs/clay-web/Int/) | Destination blend factor for RGB channels  |
| `srcAlpha` | [Int](/api-docs/clay-web/Int/) | Source blend factor for alpha channel  |
| `dstAlpha` | [Int](/api-docs/clay-web/Int/) | Destination blend factor for alpha channel |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setActiveTexture"><code><span class="field-name">setActiveTexture</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the active texture slot for multi-texturing.



| Name | Type | Description |
|------|------|-------------|
| `slot` | [Int](/api-docs/clay-web/Int/) | Texture slot index (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindTexture"><code><span class="field-name">bindTexture</span><span class="parenthesis">(</span><span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextureId/" class="type-link">clay.TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a texture to the current texture slot.



| Name | Type | Description |
|------|------|-------------|
| `textureId` | [clay.TextureId](/api-docs/clay-web/clay/TextureId/) | Texture identifier to bind |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindNoTexture"><code><span class="field-name">bindNoTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindNoTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unbinds any texture from the current texture slot.
On some platforms, binds a default white texture instead.

<hr class="field-separator" />

<div class="signature field-method has-description" id="shouldFlipRenderTargetY"><code><span class="field-name">shouldFlipRenderTargetY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldFlipRenderTargetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if render target
MVP matrix should be flipped vertically.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRenderTarget"><code><span class="field-name">setRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the render target for subsequent draw operations.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | Render target to draw into, or null for main framebuffer |

<hr class="field-separator" />

<div class="signature field-method has-description" id="blitRenderTargetBuffers"><code><span class="field-name">blitRenderTargetBuffers</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blitRenderTargetBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves MSAA render target buffers.
Called when switching away from an antialiased render target.



| Name | Type | Description |
|------|------|-------------|
| `renderTarget` | [clay.RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | The render target to resolve  |
| `width` | [Int](/api-docs/clay-web/Int/) | Width of the render target  |
| `height` | [Int](/api-docs/clay-web/Int/) | Height of the render target |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useShader"><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GpuShader/" class="type-link">clay.GpuShader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Activates a shader program for subsequent draw operations.



| Name | Type | Description |
|------|------|-------------|
| `shader` | [clay.GpuShader](/api-docs/clay-web/clay/GpuShader/) | Shader program to use |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setProjectionMatrix"><code><span class="field-name">setProjectionMatrix</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setProjectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the projection matrix uniform.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | 4x4 projection matrix as Float32Array (16 elements) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setModelViewMatrix"><code><span class="field-name">setModelViewMatrix</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Float32Array/" class="type-link">clay.buffers.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setModelViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the model-view matrix uniform.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [clay.buffers.Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | 4x4 model-view matrix as Float32Array (16 elements) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beginStencilWrite"><code><span class="field-name">beginStencilWrite</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginStencilWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins writing to the stencil buffer.
Subsequent draw calls will write to stencil instead of color buffer.

<hr class="field-separator" />

<div class="signature field-method has-description" id="endStencilWrite"><code><span class="field-name">endStencilWrite</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endStencilWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends writing to the stencil buffer.
Returns to normal color buffer rendering.

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableStencilTest"><code><span class="field-name">enableStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables stencil testing for subsequent draw operations.
Only pixels passing the stencil test will be rendered.

<hr class="field-separator" />

<div class="signature field-method has-description" id="disableStencilTest"><code><span class="field-name">disableStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables stencil testing for subsequent draw operations.

<hr class="field-separator" />

<div class="signature field-method has-description" id="enableScissor"><code><span class="field-name">enableScissor</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables scissor testing with the specified rectangle.
Only pixels within this rectangle will be rendered.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | Left edge of scissor rectangle  |
| `y` | [Float](/api-docs/clay-web/Float/) | Top edge of scissor rectangle  |
| `width` | [Float](/api-docs/clay-web/Float/) | Width of scissor rectangle  |
| `height` | [Float](/api-docs/clay-web/Float/) | Height of scissor rectangle |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disableScissor"><code><span class="field-name">disableScissor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables scissor testing.


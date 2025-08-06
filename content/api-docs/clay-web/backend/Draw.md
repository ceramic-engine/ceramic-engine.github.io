---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Draw
target: Clay (Web)
permalink: api-docs/clay-web/backend/Draw/
---

# Draw

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Draw.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Draw</strong> (Class)</div>

## Instance Members

<div class="signature field-method has-description has-plugin" id="draw"><div class="plugin-name">clay</div><code><span class="field-name">draw</span><span class="parenthesis">(</span><span class="arg-name">visuals</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renders an array of visual objects.

On iOS, this method checks if the app is in background to prevent
GPU operations that could cause crashes when the app is not active.



| Name | Type | Description |
|------|------|-------------|
| `visuals` | [Array](/api-docs/clay-web/Array/)<[ceramic.Visual](/api-docs/clay-web/ceramic/Visual/)> | Array of Visual objects to render |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="swap"><div class="plugin-name">clay</div><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Swaps the front and back buffers (unused in Clay backend).
Buffer swapping is handled automatically by Clay framework.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initBuffers"><div class="plugin-name">clay</div><code><span class="field-name">initBuffers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the vertex and index buffers for rendering.

This method sets up the buffer management system and prepares
the first set of buffers for use. Should be called before any
rendering operations begin.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginRender"><div class="plugin-name">clay</div><code><span class="field-name">beginRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a rendering pass by enabling vertex attributes.

Enables the core vertex attributes used by all shaders:
- Position (x, y, z)
- Texture coordinates (u, v)
- Color (r, g, b, a)

Additional attributes are enabled dynamically based on the active shader.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">clay</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the current render target to transparent white.

This method clears the color buffer with a transparent white background.
When rendering to a texture, this marks the render target as updated.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clearAndApplyBackground"><div class="plugin-name">clay</div><code><span class="field-name">clearAndApplyBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearAndApplyBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the current render target and applies the application background color.

This method clears the color buffer with the application's configured
background color (fully opaque). Used for the main screen clearing.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="enableBlending"><div class="plugin-name">clay</div><code><span class="field-name">enableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables alpha blending for transparent rendering.

This activates the GPU's blending functionality, allowing pixels to be
combined based on their alpha values. Must be enabled for transparency
to work correctly.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="disableBlending"><div class="plugin-name">clay</div><code><span class="field-name">disableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables alpha blending.

When disabled, pixels are rendered opaque regardless of alpha values.
This can improve performance when rendering fully opaque content.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setActiveTexture"><div class="plugin-name">clay</div><code><span class="field-name">setActiveTexture</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the active texture unit slot for multi-texturing.

Modern GPUs support multiple texture units, allowing shaders to sample
from multiple textures simultaneously. This method selects which texture
unit subsequent texture operations will affect.



| Name | Type | Description |
|------|------|-------------|
| `slot` | [Int](/api-docs/clay-web/Int/) | The texture unit index (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setPrimitiveType"><div class="plugin-name">clay</div><code><span class="field-name">setPrimitiveType</span><span class="parenthesis">(</span><span class="arg-name">primitiveType</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderPrimitiveType/" class="type-link">ceramic.RenderPrimitiveType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPrimitiveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the primitive type for rendering.

Determines how vertices are interpreted:
- TRIANGLE: Every 3 vertices form a triangle (default)
- LINE: Every 2 vertices form a line



| Name | Type | Description |
|------|------|-------------|
| `primitiveType` | [ceramic.RenderPrimitiveType](/api-docs/clay-web/ceramic/RenderPrimitiveType/) | The primitive type to use for subsequent draw calls |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getActiveTexture"><div class="plugin-name">clay</div><code><span class="field-name">getActiveTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the currently active texture unit slot.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | The index of the active texture unit |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setRenderTarget"><div class="plugin-name">clay</div><code><span class="field-name">setRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RenderTexture/" class="type-link">ceramic.RenderTexture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the active render target for subsequent drawing operations.

This method switches between rendering to a texture (off-screen) or to the
main screen buffer. When switching targets, it handles:
- MSAA buffer blitting for antialiased render targets
- Projection and view matrix updates
- Viewport configuration
- Optional automatic clearing

When renderTarget is null, rendering switches back to the main screen.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `renderTarget` | [ceramic.RenderTexture](/api-docs/clay-web/ceramic/RenderTexture/) | | The render texture to render to, or null for main screen  |
| `force` | [Bool](/api-docs/clay-web/Bool/) | `false` | Force the render target switch even if it's the same target |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="useShader"><div class="plugin-name">clay</div><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Shader/" class="type-link">Shader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Activates a shader program for rendering.

This method:
- Sets the shader as the active GPU program
- Uploads projection and modelview matrices as uniforms
- Configures vertex layout based on shader attributes
- Determines if multi-texture batching is supported
- Calculates maximum vertices per batch based on attribute size

The vertex size calculation includes:
- 3 floats for position (x, y, z)
- Custom float attributes defined by the shader
- 1 float for texture slot (if multi-texturing is enabled)



| Name | Type | Description |
|------|------|-------------|
| `shader` | [Shader](/api-docs/clay-web/backend/Shader/) | The shader to activate |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setBlendFuncSeparate"><div class="plugin-name">clay</div><code><span class="field-name">setBlendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/BlendMode/" class="type-link">BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets separate blend functions for RGB and alpha channels.

This allows fine control over how colors are blended, with different
blend modes for color (RGB) and transparency (alpha) channels.

Common blend modes:
- ONE: Use source value as-is
- ZERO: Ignore value (multiply by 0)
- SRC_ALPHA: Multiply by source alpha
- ONE_MINUS_SRC_ALPHA: Multiply by (1 - source alpha)



| Name | Type | Description |
|------|------|-------------|
| `srcRgb` | [BlendMode](/api-docs/clay-web/backend/BlendMode/) | Blend factor for source RGB  |
| `dstRgb` | [BlendMode](/api-docs/clay-web/backend/BlendMode/) | Blend factor for destination RGB  |
| `srcAlpha` | [BlendMode](/api-docs/clay-web/backend/BlendMode/) | Blend factor for source alpha  |
| `dstAlpha` | [BlendMode](/api-docs/clay-web/backend/BlendMode/) | Blend factor for destination alpha |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginDrawQuad"><div class="plugin-name">clay</div><code><span class="field-name">beginDrawQuad</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">ceramic.Quad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called before drawing a quad (currently unused).

Reserved for future optimizations or quad-specific setup.



| Name | Type | Description |
|------|------|-------------|
| `quad` | [ceramic.Quad](/api-docs/clay-web/ceramic/Quad/) | The quad about to be drawn |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endDrawQuad"><div class="plugin-name">clay</div><code><span class="field-name">endDrawQuad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called after drawing a quad (currently unused).

Reserved for future optimizations or quad-specific cleanup.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginDrawMesh"><div class="plugin-name">clay</div><code><span class="field-name">beginDrawMesh</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Mesh/" class="type-link">ceramic.Mesh</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mesh` | [ceramic.Mesh](/api-docs/clay-web/ceramic/Mesh/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endDrawMesh"><div class="plugin-name">clay</div><code><span class="field-name">endDrawMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="enableScissor"><div class="plugin-name">clay</div><code><span class="field-name">enableScissor</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables scissor testing to clip rendering to a rectangular area.

Scissor testing restricts rendering to pixels within the specified
rectangle. Any pixels outside this area are discarded by the GPU.

The coordinates are transformed by the current modelview matrix and
adjusted for screen density. When rendering to a texture, the Y
coordinate is flipped to account for texture coordinate differences.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | Left edge of the scissor rectangle in logical coordinates  |
| `y` | [Float](/api-docs/clay-web/Float/) | Top edge of the scissor rectangle in logical coordinates  |
| `width` | [Float](/api-docs/clay-web/Float/) | Width of the scissor rectangle in logical pixels  |
| `height` | [Float](/api-docs/clay-web/Float/) | Height of the scissor rectangle in logical pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="disableScissor"><div class="plugin-name">clay</div><code><span class="field-name">disableScissor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables scissor testing.

After calling this, rendering is no longer clipped to a rectangular area.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="drawWithStencilTest"><div class="plugin-name">clay</div><code><span class="field-name">drawWithStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawWithStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables stencil testing for masked rendering.

This configures the stencil test to only render pixels where the
stencil buffer equals 1. Used after drawing to the stencil buffer
to render content only within the stenciled area.

Stencil configuration:
- Test: Passes when stencil buffer equals 1
- Mask: Stencil buffer is read-only (0x00)
- Color: All color channels are written

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="drawWithoutStencilTest"><div class="plugin-name">clay</div><code><span class="field-name">drawWithoutStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawWithoutStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables stencil testing for normal rendering.

Resets stencil configuration to default values where all pixels
pass the stencil test and the stencil buffer can be written to.

Stencil configuration:
- Test: Always passes
- Mask: Stencil buffer is writable (0xFF)
- Color: All color channels are written

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginDrawingInStencilBuffer"><div class="plugin-name">clay</div><code><span class="field-name">beginDrawingInStencilBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawingInStencilBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins drawing to the stencil buffer for masking operations.

This sets up the GPU to write to the stencil buffer instead of
the color buffer. Pixels drawn will mark areas in the stencil
buffer with a value of 1, creating a mask for subsequent rendering.

Stencil configuration:
- Clears stencil buffer to 0xFF
- Writes 1 to stencil buffer where pixels are drawn
- Disables color output (only stencil is affected)
- Always passes stencil test during mask creation

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endDrawingInStencilBuffer"><div class="plugin-name">clay</div><code><span class="field-name">endDrawingInStencilBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawingInStencilBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindTexture"><div class="plugin-name">clay</div><code><span class="field-name">bindTexture</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds a texture to the current texture unit.

Makes the texture available for sampling in shaders. The texture
will be bound to the currently active texture unit.



| Name | Type | Description |
|------|------|-------------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) | The texture to bind |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindNoTexture"><div class="plugin-name">clay</div><code><span class="field-name">bindNoTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindNoTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds no texture or a default white texture.

On web targets, binds a 1x1 white texture because WebGL requires
a texture to be bound. On native targets, unbinds any texture.

Used when rendering untextured geometry or solid colors.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="textureBackendItemMatchesId"><div class="plugin-name">clay</div><code><span class="field-name">textureBackendItemMatchesId</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/TextureId/" class="type-link">TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textureBackendItemMatchesId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |
| `textureId` | [TextureId](/api-docs/clay-web/backend/TextureId/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureId"><div class="plugin-name">clay</div><code><span class="field-name">getTextureId</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/TextureId/" class="type-link">TextureId</a></code><a class="header-anchor" href="#getTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |

| Returns |
|---------|
| [TextureId](/api-docs/clay-web/backend/TextureId/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidth"><div class="plugin-name">clay</div><code><span class="field-name">getTextureWidth</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeight"><div class="plugin-name">clay</div><code><span class="field-name">getTextureHeight</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidthActual"><div class="plugin-name">clay</div><code><span class="field-name">getTextureWidthActual</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeightActual"><div class="plugin-name">clay</div><code><span class="field-name">getTextureHeightActual</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/clay-web/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/clay-web/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getNumPos"><div class="plugin-name">clay</div><code><span class="field-name">getNumPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNumPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="putPos"><div class="plugin-name">clay</div><code><span class="field-name">putPos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a vertex position to the current batch.

On C++ targets, uses direct memory access for performance.
On other targets, uses array access.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-web/Float/) | X coordinate in screen space  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y coordinate in screen space  |
| `z` | [Float](/api-docs/clay-web/Float/) | Z coordinate for depth ordering (0-1 range typically) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putPosAndTextureSlot"><div class="plugin-name">clay</div><code><span class="field-name">putPosAndTextureSlot</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putPosAndTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |
| `textureSlot` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginFloatAttributes"><div class="plugin-name">clay</div><code><span class="field-name">beginFloatAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginFloatAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putFloatAttribute"><div class="plugin-name">clay</div><code><span class="field-name">putFloatAttribute</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putFloatAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endFloatAttributes"><div class="plugin-name">clay</div><code><span class="field-name">endFloatAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFloatAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putIndice"><div class="plugin-name">clay</div><code><span class="field-name">putIndice</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putUVs"><div class="plugin-name">clay</div><code><span class="field-name">putUVs</span><span class="parenthesis">(</span><span class="arg-name">uvX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">uvY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uvX` | [Float](/api-docs/clay-web/Float/) |
| `uvY` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="putColor"><div class="plugin-name">clay</div><code><span class="field-name">putColor</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a vertex color to the current batch.

Colors are stored as floating-point values from 0.0 to 1.0.
The color will be interpolated across the triangle/line.



| Name | Type | Description |
|------|------|-------------|
| `r` | [Float](/api-docs/clay-web/Float/) | Red component (0.0 to 1.0)  |
| `g` | [Float](/api-docs/clay-web/Float/) | Green component (0.0 to 1.0)  |
| `b` | [Float](/api-docs/clay-web/Float/) | Blue component (0.0 to 1.0)  |
| `a` | [Float](/api-docs/clay-web/Float/) | Alpha component (0.0 to 1.0) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hasAnythingToFlush"><div class="plugin-name">clay</div><code><span class="field-name">hasAnythingToFlush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAnythingToFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldFlush"><div class="plugin-name">clay</div><code><span class="field-name">shouldFlush</span><span class="parenthesis">(</span><span class="arg-name">numVerticesAfter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numIndicesAfter</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the current batch should be flushed before adding more vertices.

Returns true if adding the specified number of vertices or indices
would exceed buffer capacity, indicating that the current batch
should be sent to the GPU before continuing.



| Name | Type | Description |
|------|------|-------------|
| `numVerticesAfter` | [Int](/api-docs/clay-web/Int/) | Number of vertices to be added  |
| `numIndicesAfter` | [Int](/api-docs/clay-web/Int/) | Number of indices to be added  |
| `customFloatAttributesSize` | [Int](/api-docs/clay-web/Int/) | Size of custom attributes (unused)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if flush is needed, false otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remainingVertices"><div class="plugin-name">clay</div><code><span class="field-name">remainingVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remainingIndices"><div class="plugin-name">clay</div><code><span class="field-name">remainingIndices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flush"><div class="plugin-name">clay</div><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flushes the current batch of vertices to the GPU.

This is the core rendering method that:
1. Creates GPU buffers from the accumulated vertex data
2. Configures vertex attributes for the shader
3. Handles multi-texture batching if supported
4. Sets up custom shader attributes
5. Issues the draw call to render all triangles/lines
6. Cleans up temporary buffers
7. Prepares for the next batch

The method uses temporary GPU buffers that are deleted after
rendering to avoid memory leaks. Buffer data is uploaded as
STREAM_DRAW for optimal performance with dynamic geometry.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Draw backend instance.
Initializes the Ceramic renderer for handling visual rendering.

## Private Members

<div class="signature field-var has-description has-plugin" id="MAX_VERTS_SIZE"><div class="plugin-name">clay</div><code><span class="field-name">MAX_VERTS_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VERTS_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of vertices that can be stored in a single buffer.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="MAX_INDICES"><div class="plugin-name">clay</div><code><span class="field-name">MAX_INDICES</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_INDICES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of indices that can be stored in a single buffer.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="MAX_BUFFERS"><div class="plugin-name">clay</div><code><span class="field-name">MAX_BUFFERS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_BUFFERS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum number of buffer sets to cycle through.
Buffer cycling prevents GPU stalls by using multiple buffer sets.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ATTRIBUTE_POS"><div class="plugin-name">clay</div><code><span class="field-name">ATTRIBUTE_POS</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ATTRIBUTE_POS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex attribute location for position data (x, y, z).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ATTRIBUTE_UV"><div class="plugin-name">clay</div><code><span class="field-name">ATTRIBUTE_UV</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ATTRIBUTE_UV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex attribute location for texture coordinate data (u, v).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ATTRIBUTE_COLOR"><div class="plugin-name">clay</div><code><span class="field-name">ATTRIBUTE_COLOR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ATTRIBUTE_COLOR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex attribute location for color data (r, g, b, a).

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="debugShader"><div class="plugin-name">clay</div><code><span class="field-name">debugShader</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/graphics/Shader/" class="type-link">clay.graphics.Shader</a></code><a class="header-anchor" href="#debugShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="renderer"><div class="plugin-name">clay</div><code><span class="field-name">renderer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Renderer/" class="type-link">ceramic.Renderer</a></code><a class="header-anchor" href="#renderer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Ceramic renderer instance used for high-level rendering operations.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="begin"><div class="plugin-name">clay</div><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a rendering frame (currently unused).
Reserved for future use or platform-specific initialization.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="end"><div class="plugin-name">clay</div><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends a rendering frame (currently unused).
Reserved for future use or platform-specific cleanup.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="prepareNextBuffers"><div class="plugin-name">clay</div><code><span class="field-name">prepareNextBuffers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepareNextBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prepares the next set of vertex buffers for use.

This implements a buffer cycling system to avoid GPU stalls. Instead of
reusing the same buffer immediately (which could cause the GPU to wait),
it cycles through multiple buffer sets.

Buffer allocation:
- Position buffer: Full vertex capacity (MAX_VERTS_SIZE)
- UV buffer: 2/3 of vertex capacity (optimized for quads)
- Color buffer: Full vertex capacity (4 floats per vertex)
- Index buffer: MAX_INDICES * 2 capacity

On C++ targets, additional ArrayBufferView objects are created for
efficient memory access without copying.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resetIndexes"><div class="plugin-name">clay</div><code><span class="field-name">resetIndexes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets all vertex buffer indexes to zero.

This prepares the buffers for a new batch of vertices.
Called when starting a new draw batch or after flushing.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateProjectionMatrix"><div class="plugin-name">clay</div><code><span class="field-name">updateProjectionMatrix</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateProjectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the projection matrix for orthographic rendering.

Creates an orthographic projection matrix that maps logical
coordinates to normalized device coordinates (-1 to 1).

The projection uses:
- Origin at top-left (0,0)
- X increases rightward
- Y increases downward
- Z range from -1000 to 1000 for layering



| Name | Type | Description |
|------|------|-------------|
| `width` | [Float](/api-docs/clay-web/Float/) | Viewport width in logical pixels  |
| `height` | [Float](/api-docs/clay-web/Float/) | Viewport height in logical pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateViewMatrix"><div class="plugin-name">clay</div><code><span class="field-name">updateViewMatrix</span><span class="parenthesis">(</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flipY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the view matrix for camera transformations.

The view matrix handles:
- Camera position and rotation (via transform parameter)
- Screen density scaling for high-DPI displays
- Y-axis flipping for render-to-texture (textures have inverted Y)

The matrix is inverted at the end because the view matrix
represents the inverse of the camera transform.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `density` | [Float](/api-docs/clay-web/Float/) | | Screen density multiplier (e.g., 2 for retina)  |
| `width` | [Float](/api-docs/clay-web/Float/) | | Viewport width in logical pixels  |
| `height` | [Float](/api-docs/clay-web/Float/) | | Viewport height in logical pixels  |
| `transform` | [ceramic.Transform](/api-docs/clay-web/ceramic/Transform/) | *(optional)* | Optional camera transform  |
| `flipY` | [Float](/api-docs/clay-web/Float/) | `1` | -1 to flip Y axis (for render targets), 1 for normal |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="matrixIdentity"><div class="plugin-name">clay</div><code><span class="field-name">matrixIdentity</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Float32Array/" class="type-link">ceramic.Float32Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#matrixIdentity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [ceramic.Float32Array](/api-docs/clay-web/ceramic/Float32Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setMatrixToTransform"><div class="plugin-name">clay</div><code><span class="field-name">setMatrixToTransform</span><span class="parenthesis">(</span><span class="arg-name">m</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Float32Array/" class="type-link">ceramic.Float32Array</a><span class="operator">,</span> <span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMatrixToTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `m` | [ceramic.Float32Array](/api-docs/clay-web/ceramic/Float32Array/) |
| `transform` | [ceramic.Transform](/api-docs/clay-web/ceramic/Transform/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | backend.Backend |
| `:access` | backend.Backend |


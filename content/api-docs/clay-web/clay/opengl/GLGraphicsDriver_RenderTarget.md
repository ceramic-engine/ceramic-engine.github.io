---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GLGraphicsDriver_RenderTarget
target: Clay (Web)
permalink: api-docs/clay-web/clay/opengl/GLGraphicsDriver_RenderTarget/
---

# GLGraphicsDriver_RenderTarget

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/opengl/GLGraphicsDriver.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.opengl.GLGraphicsDriver_RenderTarget</strong> (Class)</div>

OpenGL render target implementation.

Stores framebuffer and renderbuffer handles for off-screen rendering,
including MSAA support with resolve buffers.

## Instance Members

<div class="signature field-var has-description" id="framebuffer"><code><span class="field-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#framebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The final rendering destination of this texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderbuffer"><code><span class="field-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#renderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The buffer used for offscreen rendering (depth, stencil, or color).

<hr class="field-separator" />

<div class="signature field-var has-description" id="msResolveFramebuffer"><code><span class="field-name">msResolveFramebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#msResolveFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional framebuffer used when multisampling is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="msResolveColorRenderbuffer"><code><span class="field-name">msResolveColorRenderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#msResolveColorRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional renderbuffer used when multisampling is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="msDepthStencilRenderbuffer"><code><span class="field-name">msDepthStencilRenderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#msDepthStencilRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional renderbuffer for depth/stencil when multisampling is enabled.

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | clay.opengl.GLGraphicsDriver |


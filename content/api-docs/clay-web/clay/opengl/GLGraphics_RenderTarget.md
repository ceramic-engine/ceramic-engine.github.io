---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: GLGraphics_RenderTarget
target: Clay (Web)
permalink: api-docs/clay-web/clay/opengl/GLGraphics_RenderTarget/
---

# GLGraphics_RenderTarget

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/opengl/GLGraphics.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.opengl.GLGraphics_RenderTarget</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="framebuffer"><code><span class="field-name">framebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#framebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The final rendering destination of this texture
Needed for render target interface

<hr class="field-separator" />

<div class="signature field-var has-description" id="renderbuffer"><code><span class="field-name">renderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#renderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The buffer used for offscreen rendering, which can include depth, stencil buffer...
Needed for render target interface

<hr class="field-separator" />

<div class="signature field-var has-description" id="msResolveFramebuffer"><code><span class="field-name">msResolveFramebuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLFramebuffer/" class="type-link">GLFramebuffer</a></code><a class="header-anchor" href="#msResolveFramebuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

additional frame buffer used when multisampling is enabled

<hr class="field-separator" />

<div class="signature field-var has-description" id="msResolveColorRenderbuffer"><code><span class="field-name">msResolveColorRenderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#msResolveColorRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional render buffer used when multisampling is enabled

<hr class="field-separator" />

<div class="signature field-var has-description" id="msDepthStencilRenderbuffer"><code><span class="field-name">msDepthStencilRenderbuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/opengl/GLRenderbuffer/" class="type-link">GLRenderbuffer</a></code><a class="header-anchor" href="#msDepthStencilRenderbuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional render buffer used when multisampling is enabled with depth and/or stencil enabled as well

## Private Members

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | clay.opengl.GLGraphics |


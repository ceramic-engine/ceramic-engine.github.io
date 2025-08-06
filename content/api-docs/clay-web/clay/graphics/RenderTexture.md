---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: RenderTexture
target: Clay (Web)
permalink: api-docs/clay-web/clay/graphics/RenderTexture/
---

# RenderTexture

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/graphics/RenderTexture.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/Resource/">clay.Resource</a> → <a href="/api-docs/clay-web/clay/graphics/Texture/">Texture</a> → <strong>clay.graphics.RenderTexture</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="renderTarget"><code><span class="field-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/RenderTarget/" class="type-link">clay.RenderTarget</a></code><a class="header-anchor" href="#renderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the actual render target (data may vary depending on the rendering backend)

<hr class="field-separator" />

<div class="signature field-var has-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `true` to also allocate a depth buffer on this render target

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencil"><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `true` to also allocate a stencil buffer on this render target

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Antialiasing value. Set it to `2`, `4` or `8` to enable antialiasing/multisampling.
Requires OpenGL ES 3 / WebGL 2 or above to work
@warning NOT IMPLEMENTED, so this doesn't have any effect for now!

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


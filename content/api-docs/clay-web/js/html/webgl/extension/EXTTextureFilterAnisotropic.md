---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EXTTextureFilterAnisotropic
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/EXTTextureFilterAnisotropic/
---

# EXTTextureFilterAnisotropic

<div class="type-hierarchy"><strong>js.html.webgl.extension.EXTTextureFilterAnisotropic</strong> (extern class)</div>

The `EXT_texture_filter_anisotropic` extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF).

Documentation [EXT_texture_filter_anisotropic](https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic></div>


## Static Members

<div class="signature field-var has-description" id="TEXTURE_MAX_ANISOTROPY_EXT"><code><span class="field-name">TEXTURE_MAX_ANISOTROPY_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TEXTURE_MAX_ANISOTROPY_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the `pname` argument to the `WebGLRenderingContext.getTexParameter` and `WebGLRenderingContext.texParameterf` / `WebGLRenderingContext.texParameteri` calls and sets the desired maximum anisotropy for a texture.

<hr class="field-separator" />

<div class="signature field-var has-description" id="MAX_TEXTURE_MAX_ANISOTROPY_EXT"><code><span class="field-name">MAX_TEXTURE_MAX_ANISOTROPY_EXT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_TEXTURE_MAX_ANISOTROPY_EXT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the `pname` argument to the `WebGLRenderingContext.getParameter` call, and it returns the maximum available anisotropy.


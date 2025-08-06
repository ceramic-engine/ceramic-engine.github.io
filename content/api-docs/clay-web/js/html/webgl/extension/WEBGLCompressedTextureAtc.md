---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WEBGLCompressedTextureAtc
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureAtc/
---

# WEBGLCompressedTextureAtc

<div class="type-hierarchy"><strong>js.html.webgl.extension.WEBGLCompressedTextureAtc</strong> (extern class)</div>

The `WEBGL_compressed_texture_atc` extension is part of the WebGL API and exposes 3 ATC compressed texture formats. ATC is a proprietary compression algorithm for compressing textures on handheld devices.

Documentation [WEBGL_compressed_texture_atc](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_atc) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_atc$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_atc></div>


## Static Members

<div class="signature field-var has-description" id="COMPRESSED_RGB_ATC_WEBGL"><code><span class="field-name">COMPRESSED_RGB_ATC_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGB_ATC_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses RGB textures with no alpha channel.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"><code><span class="field-name">COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"><code><span class="field-name">COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient).


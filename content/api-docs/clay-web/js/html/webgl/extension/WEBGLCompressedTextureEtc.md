---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: WEBGLCompressedTextureEtc
target: Clay (Web)
permalink: api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureEtc/
---

# WEBGLCompressedTextureEtc

<div class="type-hierarchy"><strong>js.html.webgl.extension.WEBGLCompressedTextureEtc</strong> (extern class)</div>

The `WEBGL_compressed_texture_etc` extension is part of the WebGL API and exposes 10 ETC/EAC compressed texture formats.

Documentation [WEBGL_compressed_texture_etc](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_etc></div>


## Static Members

<div class="signature field-var has-description" id="COMPRESSED_R11_EAC"><code><span class="field-name">COMPRESSED_R11_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_R11_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

One-channel (red) unsigned format compression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_SIGNED_R11_EAC"><code><span class="field-name">COMPRESSED_SIGNED_R11_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_SIGNED_R11_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

One-channel (red) signed format compression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RG11_EAC"><code><span class="field-name">COMPRESSED_RG11_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RG11_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Two-channel (red and green) unsigned format compression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_SIGNED_RG11_EAC"><code><span class="field-name">COMPRESSED_SIGNED_RG11_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_SIGNED_RG11_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Two-channel (red and green) signed format compression.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RGB8_ETC2"><code><span class="field-name">COMPRESSED_RGB8_ETC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGB8_ETC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses RGB8 data with no alpha channel.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_SRGB8_ETC2"><code><span class="field-name">COMPRESSED_SRGB8_ETC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_SRGB8_ETC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses sRGB8 data with no alpha channel.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"><code><span class="field-name">COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Similar to `RGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"><code><span class="field-name">COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Similar to `SRGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_RGBA8_ETC2_EAC"><code><span class="field-name">COMPRESSED_RGBA8_ETC2_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_RGBA8_ETC2_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses RGBA8 data. The RGB part is encoded the same as `RGB_ETC2`, but the alpha part is encoded separately.

<hr class="field-separator" />

<div class="signature field-var has-description" id="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"><code><span class="field-name">COMPRESSED_SRGB8_ALPHA8_ETC2_EAC</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compresses sRGBA8 data. The sRGB part is encoded the same as `SRGB_ETC2`, but the alpha part is encoded separately.


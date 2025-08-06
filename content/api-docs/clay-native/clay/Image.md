---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Image
target: Clay (Native)
permalink: api-docs/clay-native/clay/Image/
---

# Image

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Image.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Image</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Image width from source image

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Image height from source image

<hr class="field-separator" />

<div class="signature field-var has-description" id="widthActual"><code><span class="field-name">widthActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#widthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual width, used when image is automatically padded to POT

<hr class="field-separator" />

<div class="signature field-var has-description" id="heightActual"><code><span class="field-name">heightActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual height, used when image is automatically padded to POT

<hr class="field-separator" />

<div class="signature field-var has-description" id="bitsPerPixel"><code><span class="field-name">bitsPerPixel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bitsPerPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

used bits per pixel

<hr class="field-separator" />

<div class="signature field-var has-description" id="sourceBitsPerPixel"><code><span class="field-name">sourceBitsPerPixel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sourceBitsPerPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

source bits per pixel

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixels"><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

image pixel data

<hr class="field-separator" />

<div class="signature field-method no-description" id="premultiplyAlpha"><code><span class="field-name">premultiplyAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="reversePremultiplyAlpha"><code><span class="field-name">reversePremultiplyAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reversePremultiplyAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">widthActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">heightActual</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bitsPerPixel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sourceBitsPerPixel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `width` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Image width from source image |
| `height` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Image height from source image |
| `widthActual` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | The actual width, used when image is automatically padded to POT |
| `heightActual` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | The actual height, used when image is automatically padded to POT |
| `bitsPerPixel` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | used bits per pixel |
| `sourceBitsPerPixel` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | source bits per pixel |
| `pixels` | [Null](/api-docs/clay-native/Null/)<[clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/)> | *(optional)* | image pixel data |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |


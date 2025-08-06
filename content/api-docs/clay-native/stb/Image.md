---
layout: api-docs
category: api-docs
subCategory: doc
menu: Stb
title: Image
target: Clay (Native)
permalink: api-docs/clay-native/stb/Image/
---

# Image

<div class="view-source"><a href="https://github.com/ceramic-engine/linc_stb/blob/master/./stb/Image.hx">View source</a></div>

<div class="type-hierarchy"><strong>stb.Image</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="info"><code><span class="field-name">info</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageInfo/" class="type-link">StbImageInfo</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `filename` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [StbImageInfo](/api-docs/clay-native/stb/StbImageInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="info_from_memory"><code><span class="field-name">info_from_memory</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageInfo/" class="type-link">StbImageInfo</a></code><a class="header-anchor" href="#info_from_memory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [StbImageInfo](/api-docs/clay-native/stb/StbImageInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">req_comp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageData/" class="type-link">StbImageData</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `filename` | [String](/api-docs/clay-native/String/) | |
| `req_comp` | [Int](/api-docs/clay-native/Int/) | `0` |

| Returns |
|---------|
| [StbImageData](/api-docs/clay-native/stb/StbImageData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="load_from_memory"><code><span class="field-name">load_from_memory</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">req_comp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageData/" class="type-link">StbImageData</a></code><a class="header-anchor" href="#load_from_memory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) | |
| `length` | [Int](/api-docs/clay-native/Int/) | |
| `req_comp` | [Int](/api-docs/clay-native/Int/) | `0` |

| Returns |
|---------|
| [StbImageData](/api-docs/clay-native/stb/StbImageData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="failure_reason"><code><span class="field-name">failure_reason</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#failure_reason"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stbi_set_flip_vertically_on_load"><code><span class="field-name">stbi_set_flip_vertically_on_load</span><span class="parenthesis">(</span><span class="arg-name">flag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stbi_set_flip_vertically_on_load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flag` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadf"><code><span class="field-name">loadf</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">req_comp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageData/" class="type-link">StbImageData</a></code><a class="header-anchor" href="#loadf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `filename` | [String](/api-docs/clay-native/String/) | |
| `req_comp` | [Int](/api-docs/clay-native/Int/) | `0` |

| Returns |
|---------|
| [StbImageData](/api-docs/clay-native/stb/StbImageData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadf_from_memory"><code><span class="field-name">loadf_from_memory</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">req_comp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/stb/StbImageData/" class="type-link">StbImageData</a></code><a class="header-anchor" href="#loadf_from_memory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) | |
| `length` | [Int](/api-docs/clay-native/Int/) | |
| `req_comp` | [Int](/api-docs/clay-native/Int/) | `0` |

| Returns |
|---------|
| [StbImageData](/api-docs/clay-native/stb/StbImageData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="is_hdr"><code><span class="field-name">is_hdr</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#is_hdr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `filename` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="is_hdr_from_memory"><code><span class="field-name">is_hdr_from_memory</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#is_hdr_from_memory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bytes` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hdr_to_ldr_gamma"><code><span class="field-name">hdr_to_ldr_gamma</span><span class="parenthesis">(</span><span class="arg-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hdr_to_ldr_gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamma` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hdr_to_ldr_scale"><code><span class="field-name">hdr_to_ldr_scale</span><span class="parenthesis">(</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hdr_to_ldr_scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scale` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ldr_to_hdr_gamma"><code><span class="field-name">ldr_to_hdr_gamma</span><span class="parenthesis">(</span><span class="arg-name">gamma</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ldr_to_hdr_gamma"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamma` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ldr_to_hdr_scale"><code><span class="field-name">ldr_to_hdr_scale</span><span class="parenthesis">(</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ldr_to_hdr_scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scale` | [Float](/api-docs/clay-native/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | linc.Linc.touch() |
| `:build` | linc.Linc.xml("stb_image") |
| `:include` | "linc_stb_image.h" |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImTextureRef
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImTextureRef/
---

# ImTextureRef

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImTextureRef</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="fromID"><code><span class="field-name">fromID</span><span class="parenthesis">(</span><span class="arg-name">texID</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ImTextureRef</a></code><a class="header-anchor" href="#fromID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct an ImTextureRef from a raw ImTextureID.

| Name | Type |
|------|------|
| `texID` | [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

| Returns |
|---------|
| [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTexID"><code><span class="field-name">getTexID</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a></code><a class="header-anchor" href="#getTexID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

== (_TexData ? _TexData->TexID : _TexID) // Implemented below in the file.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

## Instance Members

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


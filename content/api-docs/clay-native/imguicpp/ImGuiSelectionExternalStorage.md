---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiSelectionExternalStorage
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiSelectionExternalStorage/
---

# ImGuiSelectionExternalStorage

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiSelectionExternalStorage</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="applyRequests"><code><span class="field-name">applyRequests</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">msIo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRequests"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply selection requests by using AdapterSetItemSelected() calls

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `msIo` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

## Instance Members

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User data for use by adapter function                                // e.g. selection.UserData = (void*)my_items;

<hr class="field-separator" />

<div class="signature field-var has-description" id="adapterSetItemSelected"><code><span class="field-name">adapterSetItemSelected</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#adapterSetItemSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

e.g. AdapterSetItemSelected = [](ImGuiSelectionExternalStorage* self, int idx, bool selected) { ((MyItems**)self->UserData)[idx]->Selected = selected; }

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


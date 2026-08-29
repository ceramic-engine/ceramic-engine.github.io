---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiTableSortSpecs
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiTableSortSpecs/
---

# ImGuiTableSortSpecs

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiTableSortSpecs</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="specs"><code><span class="field-name">specs</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#specs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to sort spec array.

<hr class="field-separator" />

<div class="signature field-var has-description" id="specsCount"><code><span class="field-name">specsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#specsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sort spec count. Most often 1. May be > 1 when ImGuiTableFlags_SortMulti is enabled. May be == 0 when ImGuiTableFlags_SortTristate is enabled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="specsDirty"><code><span class="field-name">specsDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#specsDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to true when specs have changed since last time! Use this to sort again, then clear the flag.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiTableColumnSortSpecs
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiTableColumnSortSpecs/
---

# ImGuiTableColumnSortSpecs

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiTableColumnSortSpecs</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="columnUserID"><code><span class="field-name">columnUserID</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#columnUserID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User id of the column (if specified by a TableSetupColumn() call)

<hr class="field-separator" />

<div class="signature field-var has-description" id="columnIndex"><code><span class="field-name">columnIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int16/" class="type-link">cpp.Int16</a></code><a class="header-anchor" href="#columnIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the column

<hr class="field-separator" />

<div class="signature field-var has-description" id="sortOrder"><code><span class="field-name">sortOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int16/" class="type-link">cpp.Int16</a></code><a class="header-anchor" href="#sortOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index within parent ImGuiTableSortSpecs (always stored in order starting from 0, tables sorted on a single criteria will always have a 0 here)

<hr class="field-separator" />

<div class="signature field-var has-description" id="sortDirection"><code><span class="field-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt8/" class="type-link">cpp.UInt8</a></code><a class="header-anchor" href="#sortDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ImGuiSortDirection_Ascending or ImGuiSortDirection_Descending

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


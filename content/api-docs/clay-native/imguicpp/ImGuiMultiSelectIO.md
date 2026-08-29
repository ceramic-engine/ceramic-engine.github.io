---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiMultiSelectIO
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiMultiSelectIO/
---

# ImGuiMultiSelectIO

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiMultiSelectIO</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="requests"><code><span class="field-name">requests</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImGuiSelectionRequest/" class="type-link">ImVector_ImGuiSelectionRequest</a></code><a class="header-anchor" href="#requests"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /  ms:w  app:r   // Requests to apply to your selection data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeSrcItem"><code><span class="field-name">rangeSrcItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#rangeSrcItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w  app:r     /                // (If using clipper) Begin: Source item (often the first selected item) must never be clipped: use clipper.IncludeItemByIndex() to ensure it is submitted.

<hr class="field-separator" />

<div class="signature field-var has-description" id="navIdItem"><code><span class="field-name">navIdItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#navIdItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /                // (If using deletion) Last known SetNextItemSelectionUserData() value for NavId (if part of submitted items).

<hr class="field-separator" />

<div class="signature field-var has-description" id="navIdSelected"><code><span class="field-name">navIdSelected</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#navIdSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /        app:r   // (If using deletion) Last known selection state for NavId (if part of submitted items).

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeSrcReset"><code><span class="field-name">rangeSrcReset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rangeSrcReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

app:w     /  ms:r          // (If using deletion) Set before EndMultiSelect() to reset ResetSrcItem (e.g. if deleted selection).

<hr class="field-separator" />

<div class="signature field-var has-description" id="itemsCount"><code><span class="field-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#itemsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /        app:r   // 'int items_count' parameter to BeginMultiSelect() is copied here for convenience, allowing simpler calls to your ApplyRequests handler. Not used internally.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


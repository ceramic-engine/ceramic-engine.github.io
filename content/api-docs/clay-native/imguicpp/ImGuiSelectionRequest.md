---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiSelectionRequest
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiSelectionRequest/
---

# ImGuiSelectionRequest

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiSelectionRequest</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiSelectionRequestType/" class="type-link">ImGuiSelectionRequestType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /  ms:w, app:r   // Request type. You'll most often receive 1 Clear + 1 SetRange with a single-item range.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selected"><code><span class="field-name">selected</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ms:w, app:r     /  ms:w, app:r   // Parameter for SetAll/SetRange requests (true = select, false = unselect)

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeDirection"><code><span class="field-name">rangeDirection</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int8/" class="type-link">cpp.Int8</a></code><a class="header-anchor" href="#rangeDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

/  ms:w  app:r   // Parameter for SetRange request: +1 when RangeFirstItem comes before RangeLastItem, -1 otherwise. Useful if you want to preserve selection order on a backward Shift+Click.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeFirstItem"><code><span class="field-name">rangeFirstItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#rangeFirstItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

/  ms:w, app:r   // Parameter for SetRange request (this is generally == RangeSrcItem when shift selecting from top to bottom).

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeLastItem"><code><span class="field-name">rangeLastItem</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int64/" class="type-link">cpp.Int64</a></code><a class="header-anchor" href="#rangeLastItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

/  ms:w, app:r   // Parameter for SetRange request (this is generally == RangeSrcItem when shift selecting from bottom to top). Inclusive!

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


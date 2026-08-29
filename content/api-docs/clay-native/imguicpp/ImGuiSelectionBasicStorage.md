---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiSelectionBasicStorage
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiSelectionBasicStorage/
---

# ImGuiSelectionBasicStorage

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiSelectionBasicStorage</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="applyRequests"><code><span class="field-name">applyRequests</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">msIo</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyRequests"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply selection requests coming from BeginMultiSelect() and EndMultiSelect() functions. It uses 'items_count' passed to BeginMultiSelect()

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `msIo` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="contains"><code><span class="field-name">contains</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query if an item id is in selection.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `id` | [UInt](/api-docs/clay-native/UInt/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear selection

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="swap"><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Swap two selections

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `r` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setItemSelected"><code><span class="field-name">setItemSelected</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">selected</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setItemSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add/remove an item from selection (generally done by ApplyRequests() function)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `id` | [UInt](/api-docs/clay-native/UInt/) |
| `selected` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNextSelectedItem"><code><span class="field-name">getNextSelectedItem</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">opaqueIt</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Void/" class="type-link">Void</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">outId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getNextSelectedItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterate selection with 'void* it = NULL; ImGuiID id; while (selection.GetNextSelectedItem(&it, &id)) { ... }'

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `opaqueIt` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/Void/)> |
| `outId` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getStorageIdFromIndex"><code><span class="field-name">getStorageIdFromIndex</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#getStorageIdFromIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert index to item id based on provided adapter.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `idx` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UInt](/api-docs/clay-native/UInt/) |

## Instance Members

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// Number of selected items, maintained by this helper.

<hr class="field-separator" />

<div class="signature field-var has-description" id="preserveOrder"><code><span class="field-name">preserveOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#preserveOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= false  // GetNextSelectedItem() will return ordered selection (currently implemented by two additional sorts of selection. Could be improved)

<hr class="field-separator" />

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

= NULL   // User data for use by adapter function        // e.g. selection.UserData = (void*)my_items;

<hr class="field-separator" />

<div class="signature field-var has-description" id="adapterIndexToStorageId"><code><span class="field-name">adapterIndexToStorageId</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a></code><a class="header-anchor" href="#adapterIndexToStorageId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

e.g. selection.AdapterIndexToStorageId = [](ImGuiSelectionBasicStorage* self, int idx) { return ((MyItems**)self->UserData)[idx]->ID; };

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |


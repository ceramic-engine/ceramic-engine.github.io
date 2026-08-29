---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: NativeStructs
target: Headless
permalink: api-docs/headless/imgui/NativeStructs/
---

# NativeStructs

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/NativeStructs.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.NativeStructs</strong> (Class)</div>

Portable creation of the few ImGui helper structs that user code owns
(the generator binds their fields and member functions, but cannot emit
constructors: C++ ctor semantics are replicated here per target).

Also provides raw native memory helpers for the rare APIs taking a
buffer + size (drag and drop payloads, polyline points...).

## Static Members

<div class="signature field-method has-description" id="createListClipper"><code><span class="field-name">createListClipper</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImGuiListClipper/" class="type-link">ImGuiListClipper</a></code><a class="header-anchor" href="#createListClipper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate an ImGuiListClipper (C++ ctor semantics in imgui 1.92: plain
zeroing). Destroy it with `destroyListClipper` when done, or keep one
per call site for its lifetime (clippers are reusable).
| Returns |
|---------|
| [ImGuiListClipper](/api-docs/headless/imgui/ImGuiListClipper/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyListClipper"><code><span class="field-name">destroyListClipper</span><span class="parenthesis">(</span><span class="arg-name">clipper</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImGuiListClipper/" class="type-link">ImGuiListClipper</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyListClipper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `clipper` | [ImGuiListClipper](/api-docs/headless/imgui/ImGuiListClipper/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSelectionBasicStorage"><code><span class="field-name">createSelectionBasicStorage</span><span class="parenthesis">(</span><span class="arg-name">adapter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImGuiSelectionBasicStorage/" class="type-link">ImGuiSelectionBasicStorage</a></code><a class="header-anchor" href="#createSelectionBasicStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create an ImGuiSelectionBasicStorage. `adapter` is the index-to-storage-id
function pointer (use imgui.ImGuiCallbacks.selectionAdapter to install a
Haxe handler); the C++ constructor installs an identity adapter, but the
bindings replicate the ctor per target so the adapter is always set here.

| Name | Type |
|------|------|
| `adapter` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ImGuiSelectionBasicStorage](/api-docs/headless/imgui/ImGuiSelectionBasicStorage/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroySelectionBasicStorage"><code><span class="field-name">destroySelectionBasicStorage</span><span class="parenthesis">(</span><span class="arg-name">storage</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImGuiSelectionBasicStorage/" class="type-link">ImGuiSelectionBasicStorage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroySelectionBasicStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `storage` | [ImGuiSelectionBasicStorage](/api-docs/headless/imgui/ImGuiSelectionBasicStorage/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFontConfig"><code><span class="field-name">createFontConfig</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImFontConfig/" class="type-link">ImFontConfig</a></code><a class="header-anchor" href="#createFontConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate an ImFontConfig (C++ ctor semantics replicated per target:
fontDataOwnedByAtlas=true, glyphMaxAdvanceX=FLT_MAX, rasterizer
multiply/density=1). Destroy it with `destroyFontConfig` when done
(the atlas copies the config during AddFont* calls).
| Returns |
|---------|
| [ImFontConfig](/api-docs/headless/imgui/ImFontConfig/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyFontConfig"><code><span class="field-name">destroyFontConfig</span><span class="parenthesis">(</span><span class="arg-name">cfg</span><span class="operator">:</span> <a href="/api-docs/headless/imgui/ImFontConfig/" class="type-link">ImFontConfig</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyFontConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cfg` | [ImFontConfig](/api-docs/headless/imgui/ImFontConfig/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allocBytesFromHaxe"><code><span class="field-name">allocBytesFromHaxe</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#allocBytesFromHaxe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate native bytes and copy a haxe.io.Bytes into them (fast per
target: memcpy / HEAPU8.set / Marshal.Copy). Suited to font files and
other large blobs. The returned buffer is never freed automatically.

| Name | Type |
|------|------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allocBytes"><code><span class="field-name">allocBytes</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#allocBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate raw native bytes (for payloads, point buffers...). The address
type follows the target's convention (cpp pointer, js Int, cs Float);
use the Bytes* helpers below to read/write portably.

| Name | Type |
|------|------|
| `size` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setU8"><code><span class="field-name">setU8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setU8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getU8"><code><span class="field-name">getU8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getU8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setI32"><code><span class="field-name">setI32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setI32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getI32"><code><span class="field-name">getI32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getI32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setI16"><code><span class="field-name">setI16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setI16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getI16"><code><span class="field-name">getI16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getI16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setI64"><code><span class="field-name">setI64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setI64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

64-bit integers cross as Haxe Float (53-bit precision, fine for UI demo values).

| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getI64"><code><span class="field-name">getI64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getI64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setF64"><code><span class="field-name">setF64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getF64"><code><span class="field-name">getF64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setF32"><code><span class="field-name">setF32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getF32"><code><span class="field-name">getF32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [Int](/api-docs/headless/Int/) |
| `offset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |


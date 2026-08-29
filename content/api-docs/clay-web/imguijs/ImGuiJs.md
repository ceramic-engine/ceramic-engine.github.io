---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiJs
target: Clay (Web)
permalink: api-docs/clay-web/imguijs/ImGuiJs/
---

# ImGuiJs

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguijs/ImGuiJs.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguijs.ImGuiJs</strong> (Class)</div>

js-target runtime support for the generated bindings (`imguijs.ImGui`):
holds the emscripten-built dcimgui module and the scratch memory used to
marshal strings, out-params and small arrays - nothing here allocates
garbage per frame (bump offsets into persistent wasm heap blocks).

The module must be loaded and passed to `init()` before any ImGui call
(the ceramic imgui plugin does this at startup).

## Static Members

<div class="signature field-var has-description" id="M"><code><span class="field-name">M</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#M"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The emscripten module (result of the `DCImGui()` factory promise).

<hr class="field-separator" />

<div class="signature field-var has-description" id="vecScratch"><code><span class="field-name">vecScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vecScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

16-byte block for by-value struct returns (ImVec2/ImVec4/ImTextureRef).

<hr class="field-separator" />

<div class="signature field-var has-description" id="numScratch"><code><span class="field-name">numScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

64-byte block for scalar out-params (widget macros; 8 bytes per slot).

<hr class="field-separator" />

<div class="signature field-var has-description" id="arrScratchA"><code><span class="field-name">arrScratchA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#arrScratchA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Two 16-byte blocks for fixed-size array args (float[2..4], int[2..4]).

<hr class="field-separator" />

<div class="signature field-var no-description" id="arrScratchB"><code><span class="field-name">arrScratchB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#arrScratchB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="ptrSize"><code><span class="field-name">ptrSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ptrSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native pointer size in bytes (wasm32).

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `module` | [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strReset"><code><span class="field-name">strReset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#strReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the call-scoped string bump region (start of each binding call).

<hr class="field-separator" />

<div class="signature field-method has-description" id="str"><code><span class="field-name">str</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#str"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy a Haxe string as UTF-8 into the bump region, return its address (0 for null).

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="u64"><code><span class="field-name">u64</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#u64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

u64 boundary: wasm i64 params take a BigInt (WASM_BIGINT).

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="num64"><code><span class="field-name">num64</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#num64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

u64 boundary: BigInt result back to a Haxe Float.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getF32"><code><span class="field-name">getF32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setF32"><code><span class="field-name">setF32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |
| `v` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getF64"><code><span class="field-name">getF64</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setF64"><code><span class="field-name">setF64</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |
| `v` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getI32"><code><span class="field-name">getI32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getI32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setI32"><code><span class="field-name">setI32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setI32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |
| `v` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getU32"><code><span class="field-name">getU32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setU32"><code><span class="field-name">setU32</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |
| `v` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getU16"><code><span class="field-name">getU16</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getU8"><code><span class="field-name">getU8</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getU8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setU8"><code><span class="field-name">setU8</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setU8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |
| `v` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="floatsDyn"><code><span class="field-name">floatsDyn</span><span class="parenthesis">(</span><span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#floatsDyn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy a Haxe Array<Float> into a persistent native f32 buffer; returns its address.

| Name | Type |
|------|------|
| `values` | [Array](/api-docs/clay-web/Array/)<[Float](/api-docs/clay-web/Float/)> |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readPtr"><code><span class="field-name">readPtr</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a native pointer at addr.

| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getU64"><code><span class="field-name">getU64</span><span class="parenthesis">(</span><span class="arg-name">addr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getU64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a u64 at addr as a Haxe Float (registry ids are small: low half wins).

| Name | Type |
|------|------|
| `addr` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strBufPut"><code><span class="field-name">strBufPut</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">maxLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#strBufPut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy `s` (UTF-8, clamped to maxLength bytes on a codepoint boundary,
zero-terminated) into the persistent buffer; returns its address.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |
| `maxLength` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strBufChanged"><code><span class="field-name">strBufChanged</span><span class="parenthesis">(</span><span class="arg-name">original</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strBufChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the persistent buffer differs from `original` (no allocation).

| Name | Type |
|------|------|
| `original` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strBufRead"><code><span class="field-name">strBufRead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#strBufRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The persistent buffer content as a Haxe String (allocates - call on change only).
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Private Members

<div class="signature field-var no-description" id="strBase"><code><span class="field-name">strBase</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#strBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="strCap"><code><span class="field-name">strCap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#strCap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="strOffset"><code><span class="field-name">strOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#strOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bufBase"><code><span class="field-name">bufBase</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bufBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bufCap"><code><span class="field-name">bufCap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bufCap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dynFloats"><code><span class="field-name">dynFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dynFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dynFloatsCap"><code><span class="field-name">dynFloatsCap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dynFloatsCap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


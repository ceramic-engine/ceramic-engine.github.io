---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: Marshal
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/Marshal/
---

# Marshal

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/Marshal.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.Marshal</strong> (Class)</div>

cpp-target scratch storage used by the generated portable facade
(`imgui.ImGui`). All scratch lives in unmanaged (malloc'd) memory so no
hxcpp GC interaction can ever invalidate a pointer mid-call, and nothing
here allocates garbage per frame.

NOT thread-safe - but neither is Dear ImGui (single context, main thread).

## Private Members

<div class="signature field-var no-description" id="floatsA"><code><span class="field-name">floatsA</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#floatsA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="floatsB"><code><span class="field-name">floatsB</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#floatsB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="intsA"><code><span class="field-name">intsA</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intsA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="intsB"><code><span class="field-name">intsB</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intsB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dynFloats"><code><span class="field-name">dynFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#dynFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dynFloatsCap"><code><span class="field-name">dynFloatsCap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dynFloatsCap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="strBuf"><code><span class="field-name">strBuf</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Char/" class="type-link">cpp.Char</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#strBuf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="strBufSize"><code><span class="field-name">strBufSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#strBufSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadFloats"><code><span class="field-name">loadFloats</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `src` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |
| `n` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="storeFloats"><code><span class="field-name">storeFloats</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#storeFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dst` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |
| `n` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadInts"><code><span class="field-name">loadInts</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadInts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `src` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |
| `n` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="storeInts"><code><span class="field-name">storeInts</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#storeInts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `dst` | [Array](/api-docs/clay-native/Array/)<[Int](/api-docs/clay-native/Int/)> |
| `n` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="floatsDyn"><code><span class="field-name">floatsDyn</span><span class="parenthesis">(</span><span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#floatsDyn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `values` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |

| Returns |
|---------|
| [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strScratch"><code><span class="field-name">strScratch</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">maxLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#strScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy the UTF-8 bytes of `s` (clamped to `maxLength` BYTES, on a codepoint
boundary) into the scratch buffer and return it, zero-terminated.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |
| `maxLength` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strChanged"><code><span class="field-name">strChanged</span><span class="parenthesis">(</span><span class="arg-name">original</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strChanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the scratch buffer content differs from `original` (no allocation).

| Name | Type |
|------|------|
| `original` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strRead"><code><span class="field-name">strRead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#strRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scratch buffer content as a Haxe String (allocates - call only on change).
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | imgui.ImGui |


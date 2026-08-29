---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WasmSimd
target: Clay (Web)
permalink: api-docs/clay-web/clay/simd/wasm/WasmSimd/
---

# WasmSimd

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/simd/wasm/WasmSimd.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.simd.wasm.WasmSimd</strong> (Class)</div>

Loader and memory manager for the wasm emission kernels (web target).

The kernels are embedded as base64 (see kernel.c / build.sh) and
instantiated asynchronously at startup: until `ready` is true, callers
fall back to the plain js batched path. Feature detection picks the
SIMD build when the engine supports wasm SIMD (all evergreen browsers
since 2021, Safari 16.4+), the scalar wasm build otherwise.

Memory model: this class owns the module's linear memory and hands out
regions through a simple bump allocator (`alloc`). The GL batcher
allocates its staging buffers as views over this memory, so the kernels
write in place and `gl.bufferData(view)` uploads with zero extra
copies. Per-part *source* copies (vertices/colors/uvs/indices into the
scratch regions) are done with typed-array `set` where possible, which
is nearly free browser-side.

Growing the memory detaches every existing view: `memoryGeneration` is
bumped on growth and view holders (the batcher, the scratch views here)
must re-derive their views from their stored offsets when it changes.

## Static Members

<div class="signature field-var has-description" id="ready"><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True once the module is instantiated and usable.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usingSimd"><code><span class="field-name">usingSimd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usingSimd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

True when the SIMD build of the kernels is in use.

<hr class="field-separator" />

<div class="signature field-var has-description" id="memoryGeneration"><code><span class="field-name">memoryGeneration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#memoryGeneration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bumped every time the wasm memory grows (views must be re-derived).

<hr class="field-separator" />

<div class="signature field-var has-description" id="memoryBuffer"><code><span class="field-name">memoryBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">js.lib.ArrayBuffer</a></code><a class="header-anchor" href="#memoryBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The wasm memory's ArrayBuffer (compare with a view's buffer to know if it is wasm-backed).

<hr class="field-separator" />

<div class="signature field-var has-description" id="vertsScratch"><code><span class="field-name">vertsScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#vertsScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scratch views (valid after `requireScratch`, until the next memory growth).

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorsScratch"><code><span class="field-name">colorsScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#colorsScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="packedScratch"><code><span class="field-name">packedScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint32Array/" class="type-link">js.lib.Uint32Array</a></code><a class="header-anchor" href="#packedScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uvsScratch"><code><span class="field-name">uvsScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#uvsScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indicesScratch"><code><span class="field-name">indicesScratch</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a></code><a class="header-anchor" href="#indicesScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="vertsScratchByteOffset"><code><span class="field-name">vertsScratchByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vertsScratchByteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scratch byte offsets (stable across growth).

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorsScratchByteOffset"><code><span class="field-name">colorsScratchByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorsScratchByteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uvsScratchByteOffset"><code><span class="field-name">uvsScratchByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uvsScratchByteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indicesScratchByteOffset"><code><span class="field-name">indicesScratchByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indicesScratchByteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts loading the kernels. Safe to call multiple times.

<hr class="field-separator" />

<div class="signature field-method has-description" id="alloc"><code><span class="field-name">alloc</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#alloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocates `bytes` from the module memory (16-byte aligned).
Returns the byte offset, or -1 if the memory limit was reached
(in which case the whole wasm path is permanently disabled and
callers keep using the plain js path). Regions are never freed.

| Name | Type |
|------|------|
| `bytes` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="requireScratch"><code><span class="field-name">requireScratch</span><span class="parenthesis">(</span><span class="arg-name">numVertFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numColorFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numUvFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numIndices</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#requireScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scratch source regions for one mesh part, sized for at least
`numVertFloats` position floats, `numColorFloats` color floats,
`numUvFloats` uv floats and `numIndices` indices. Views are reused
across parts within a frame and re-derived after memory growth.

| Name | Type |
|------|------|
| `numVertFloats` | [Int](/api-docs/clay-web/Int/) |
| `numColorFloats` | [Int](/api-docs/clay-web/Int/) |
| `numUvFloats` | [Int](/api-docs/clay-web/Int/) |
| `numIndices` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="meshPartF32"><code><span class="field-name">meshPartF32</span><span class="parenthesis">(</span><span class="arg-name">posByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">posStride</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">colByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uvByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxBase</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertsByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertStride</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">floatColorsByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">packedColorsByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uvsByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indicesByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">colorMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">singleR</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">singleG</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">singleB</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">singleA</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">hasUvs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">ufx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">ufy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">srcAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#meshPartF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Runs the fused mesh-part kernel. All offsets are byte offsets into
the module memory; see kernel.c for parameter semantics.

| Name | Type |
|------|------|
| `posByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `posStride` | [Int](/api-docs/clay-web/Int/) |
| `colByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `uvByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `idxByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `idxBase` | [Int](/api-docs/clay-web/Int/) |
| `vertsByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `vertStride` | [Int](/api-docs/clay-web/Int/) |
| `floatColorsByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `packedColorsByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `uvsByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `indicesByteOffset` | [Int](/api-docs/clay-web/Int/) |
| `start` | [Int](/api-docs/clay-web/Int/) |
| `end` | [Int](/api-docs/clay-web/Int/) |
| `a` | [Float](/api-docs/clay-web/Float/) |
| `b` | [Float](/api-docs/clay-web/Float/) |
| `c` | [Float](/api-docs/clay-web/Float/) |
| `d` | [Float](/api-docs/clay-web/Float/) |
| `tx` | [Float](/api-docs/clay-web/Float/) |
| `ty` | [Float](/api-docs/clay-web/Float/) |
| `z` | [Float](/api-docs/clay-web/Float/) |
| `textureSlot` | [Float](/api-docs/clay-web/Float/) |
| `writeSlot` | [Bool](/api-docs/clay-web/Bool/) |
| `colorMode` | [Int](/api-docs/clay-web/Int/) |
| `singleR` | [Float](/api-docs/clay-web/Float/) |
| `singleG` | [Float](/api-docs/clay-web/Float/) |
| `singleB` | [Float](/api-docs/clay-web/Float/) |
| `singleA` | [Float](/api-docs/clay-web/Float/) |
| `globalAlpha` | [Float](/api-docs/clay-web/Float/) |
| `premultiply` | [Bool](/api-docs/clay-web/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/clay-web/Bool/) |
| `hasUvs` | [Bool](/api-docs/clay-web/Bool/) |
| `ufx` | [Float](/api-docs/clay-web/Float/) |
| `ufy` | [Float](/api-docs/clay-web/Float/) |
| `srcAttrCount` | [Int](/api-docs/clay-web/Int/) |
| `dstAttrCount` | [Int](/api-docs/clay-web/Int/) |

## Private Members

<div class="signature field-var no-description" id="memory"><code><span class="field-name">memory</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#memory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="meshPartF32Fn"><code><span class="field-name">meshPartF32Fn</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#meshPartF32Fn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bumpOffset"><code><span class="field-name">bumpOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bumpOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="memoryBytes"><code><span class="field-name">memoryBytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#memoryBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertsScratchOffset"><code><span class="field-name">vertsScratchOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vertsScratchOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertsScratchFloats"><code><span class="field-name">vertsScratchFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#vertsScratchFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorsScratchOffset"><code><span class="field-name">colorsScratchOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorsScratchOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorsScratchFloats"><code><span class="field-name">colorsScratchFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorsScratchFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uvsScratchOffset"><code><span class="field-name">uvsScratchOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uvsScratchOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uvsScratchFloats"><code><span class="field-name">uvsScratchFloats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uvsScratchFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indicesScratchOffset"><code><span class="field-name">indicesScratchOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indicesScratchOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indicesScratchInts"><code><span class="field-name">indicesScratchInts</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indicesScratchInts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertsScratchView"><code><span class="field-name">vertsScratchView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#vertsScratchView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="colorsScratchView"><code><span class="field-name">colorsScratchView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#colorsScratchView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="packedScratchView"><code><span class="field-name">packedScratchView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Uint32Array/" class="type-link">js.lib.Uint32Array</a></code><a class="header-anchor" href="#packedScratchView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uvsScratchView"><code><span class="field-name">uvsScratchView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Float32Array/" class="type-link">js.lib.Float32Array</a></code><a class="header-anchor" href="#uvsScratchView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="indicesScratchView"><code><span class="field-name">indicesScratchView</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Int32Array/" class="type-link">js.lib.Int32Array</a></code><a class="header-anchor" href="#indicesScratchView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="scratchGeneration"><code><span class="field-name">scratchGeneration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#scratchGeneration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureCapacity"><code><span class="field-name">ensureCapacity</span><span class="parenthesis">(</span><span class="arg-name">needed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ensureCapacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `needed` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nextPow2"><code><span class="field-name">nextPow2</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextPow2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |


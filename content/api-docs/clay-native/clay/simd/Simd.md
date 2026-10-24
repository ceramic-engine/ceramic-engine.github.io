---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Simd
target: Clay (Native)
permalink: api-docs/clay-native/clay/simd/Simd/
---

# Simd

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/simd/Simd.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.simd.Simd</strong> (extern class)</div>

Batched geometry kernels operating on raw pointers (native C++).

Every function is a leaf call: no allocation, no callback into haxe,
so no GC collection can happen while the provided pointers are in use.
Callers must acquire pointers right before the call, keep the owning
haxe objects alive on the stack for the duration of the call, and
never cache raw pointers across calls.

The vectorized implementations (SSE2 on x86, NEON on ARM) are picked
at compile time, with a plain C++ fallback. Define
`linc_simd_force_scalar` to force the plain C++ path everywhere
(useful to measure batching gains without vectorization).

## Static Members

<div class="signature field-method has-description" id="mode"><code><span class="field-name">mode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Which implementation was compiled in: 0 = scalar, 1 = SSE2, 2 = NEON
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformAffineIndexedF32"><code><span class="field-name">transformAffineIndexedF32</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformAffineIndexedF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms `indexCount` points gathered from `verts` (32-bit floats)
via `indices` with the 2x3 affine matrix (a,b,c,d,tx,ty), writing
sequential strided vertices [x y z (slot)] into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `verts` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `vertStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformAffineIndexedF64"><code><span class="field-name">transformAffineIndexedF64</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformAffineIndexedF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `transformAffineIndexedF32` with a 64-bit float source
(haxe `Array<Float>` holds 64-bit values on this target).

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `verts` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Float](/api-docs/clay-native/Float/)> |
| `vertStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformAffineIndexedAttrsF32"><code><span class="field-name">transformAffineIndexedAttrsF32</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">srcAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformAffineIndexedAttrsF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `transformAffineIndexedF32` for meshes carrying custom float
attributes interleaved with positions ([x y attr0..attrN] source,
[x y z (slot) attr0..attrM] destination, zero-padded).

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `verts` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `vertStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |
| `srcAttrCount` | [Int](/api-docs/clay-native/Int/) |
| `dstAttrCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformAffineIndexedAttrsF64"><code><span class="field-name">transformAffineIndexedAttrsF64</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">srcAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstAttrCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformAffineIndexedAttrsF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `transformAffineIndexedAttrsF32` with a 64-bit float source.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `verts` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Float](/api-docs/clay-native/Float/)> |
| `vertStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |
| `srcAttrCount` | [Int](/api-docs/clay-native/Int/) |
| `dstAttrCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="transformQuadCorners"><code><span class="field-name">transformQuadCorners</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">flipOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transformQuadCorners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms the 4 corners of a (w,h) rectangle with the 2x3 affine
matrix and writes 4 strided vertices [x y z (slot)] into `dst`.
Corner order: flipOrder=true -> br, bl, tl, tr ; false -> tl, tr, br, bl.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `w` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `h` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |
| `flipOrder` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="scaleUVIndexedF64"><code><span class="field-name">scaleUVIndexedF64</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uvFactorX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">uvFactorY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleUVIndexedF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gathers `indexCount` UV pairs from `uvs` (64-bit source, stride 2)
via `indices`, multiplies by (uvFactorX, uvFactorY) in 64-bit and
writes sequential 32-bit pairs into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `uvs` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Float](/api-docs/clay-native/Float/)> |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `uvFactorX` | [Float](/api-docs/clay-native/Float/) |
| `uvFactorY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="premultiplyRGBA"><code><span class="field-name">premultiplyRGBA</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyRGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads `count` sequential RGBA colors from `src`, computes
outA = globalAlpha * srcA, multiplies RGB by outA when `premultiply`
is set, forces the stored alpha to 0 when `zeroAlpha` is set (RGB
keep the premultiplied values), and writes sequential RGBA into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `count` | [Int](/api-docs/clay-native/Int/) |
| `globalAlpha` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `premultiply` | [Bool](/api-docs/clay-native/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="premultiplyRGBAIndexed"><code><span class="field-name">premultiplyRGBAIndexed</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyRGBAIndexed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `premultiplyRGBA` but colors are gathered from `src` via `indices`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `globalAlpha` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `premultiply` | [Bool](/api-docs/clay-native/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="premultiplyARGB32"><code><span class="field-name">premultiplyARGB32</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyARGB32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `premultiplyRGBA` but the source colors are packed 32-bit
integers laid out as 0xAARRGGBB, decoded to floats in [0,1].

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt32](/api-docs/clay-native/cpp/UInt32/)> |
| `count` | [Int](/api-docs/clay-native/Int/) |
| `globalAlpha` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `premultiply` | [Bool](/api-docs/clay-native/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="premultiplyARGB32Indexed"><code><span class="field-name">premultiplyARGB32Indexed</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#premultiplyARGB32Indexed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `premultiplyARGB32` but colors are gathered from `src` via `indices`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt32](/api-docs/clay-native/cpp/UInt32/)> |
| `indices` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `indexCount` | [Int](/api-docs/clay-native/Int/) |
| `globalAlpha` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `premultiply` | [Bool](/api-docs/clay-native/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fillColorRGBA"><code><span class="field-name">fillColorRGBA</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillColorRGBA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `count` copies of the RGBA color into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `count` | [Int](/api-docs/clay-native/Int/) |
| `r` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `g` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fillFloats"><code><span class="field-name">fillFloats</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillFloats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `count` copies of `value` into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `count` | [Int](/api-docs/clay-native/Int/) |
| `value` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fillIndicesSequentialU16"><code><span class="field-name">fillIndicesSequentialU16</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillIndicesSequentialU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `count` sequential indices start, start+1, ... into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `count` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyIndicesOffsetU16"><code><span class="field-name">copyIndicesOffsetU16</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyIndicesOffsetU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes `count` indices `base + src[i]` into `dst`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `src` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Int](/api-docs/clay-native/Int/)> |
| `count` | [Int](/api-docs/clay-native/Int/) |
| `base` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putQuadIndicesU16"><code><span class="field-name">putQuadIndicesU16</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putQuadIndicesU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes the 6 indices of a quad (two triangles):
base, base+1, base+2, base, base+2, base+3.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `base` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="putQuadWireframeIndicesU16"><code><span class="field-name">putQuadWireframeIndicesU16</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putQuadWireframeIndicesU16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes the 12 line indices of a quad wireframe:
(b,b+1),(b+1,b+2),(b+2,b),(b,b+2),(b+2,b+3),(b+3,b).

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `base` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fillQuadAttrsF64"><code><span class="field-name">fillQuadAttrsF64</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">dstStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attrOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attrs</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">srcCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dstCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fillQuadAttrsF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes the same attribute values on the 4 corners of a quad, at
`attrOffset` floats inside each vertex of stride `dstStrideFloats`,
reading `srcCount` values from `attrs` (may be null when 0) and
zero-padding up to `dstCount`.

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `dstStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `attrOffset` | [Int](/api-docs/clay-native/Int/) |
| `attrs` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Float](/api-docs/clay-native/Float/)> |
| `srcCount` | [Int](/api-docs/clay-native/Int/) |
| `dstCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitQuad"><code><span class="field-name">emitQuad</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">posStrideFloats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">indexBase</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">tx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">ty</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">flipOrder</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">wireframe</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">colR</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">colG</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">colB</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">colA</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u2</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v2</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u3</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v3</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emits a complete quad in a single call: indices (6 triangle indices,
or 12 line indices when `wireframe` is set), 4 transformed corners,
4 identical colors and 4 uv pairs. One call per quad keeps the
per-call overhead negligible compared to the quad's small workload.

| Name | Type |
|------|------|
| `pos` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `posStrideFloats` | [Int](/api-docs/clay-native/Int/) |
| `idx` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.UInt16](/api-docs/clay-native/cpp/UInt16/)> |
| `indexBase` | [Int](/api-docs/clay-native/Int/) |
| `color` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `uv` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `w` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `h` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `a` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `b` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `c` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `d` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `tx` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `ty` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `z` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `textureSlot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `writeSlot` | [Bool](/api-docs/clay-native/Bool/) |
| `flipOrder` | [Bool](/api-docs/clay-native/Bool/) |
| `wireframe` | [Bool](/api-docs/clay-native/Bool/) |
| `colR` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `colG` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `colB` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `colA` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u0` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v0` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u1` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v1` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u2` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v2` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u3` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v3` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="storeUV4"><code><span class="field-name">storeUV4</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">u0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v0</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v1</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u2</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v2</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">u3</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">v3</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#storeUV4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes 4 finished UV pairs into `dst` (8 contiguous floats).

| Name | Type |
|------|------|
| `dst` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `u0` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v0` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u1` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v1` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u2` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v2` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `u3` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `v3` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | clay.simd.Linc.touch() |
| `:build` | clay.simd.Linc.xml("simd", "../simd") |
| `:include` | "linc_simd.h" |


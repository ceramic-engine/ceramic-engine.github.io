---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: CeramicSimdKernels
target: Unity
permalink: api-docs/unity/backend/CeramicSimdKernels/
---

# CeramicSimdKernels

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Draw.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.CeramicSimdKernels</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="MeshPartF32"><div class="plugin-name">unity</div><code><span class="field-name">MeshPartF32</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">dstOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertexSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">idxDst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/UInt16Array/" class="type-link">UInt16Array</a><span class="operator">,</span> <span class="arg-name">idxOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxBase</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">vertStride</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">colorMode</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">floatColors</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">packedColors</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">hasUvs</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">uvFactorX</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">uvFactorY</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">meshAttrCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">shaderAttrCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mA</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mB</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mC</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mD</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mTX</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mTY</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MeshPartF32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dst` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `dstOffset` | [Int](/api-docs/unity/Int/) |
| `vertexSize` | [Int](/api-docs/unity/Int/) |
| `writeSlot` | [Bool](/api-docs/unity/Bool/) |
| `idxDst` | [UInt16Array](/api-docs/unity/backend/UInt16Array/) |
| `idxOffset` | [Int](/api-docs/unity/Int/) |
| `idxBase` | [Int](/api-docs/unity/Int/) |
| `verts` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `vertStride` | [Int](/api-docs/unity/Int/) |
| `indices` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `start` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |
| `colorMode` | [Int](/api-docs/unity/Int/) |
| `floatColors` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `packedColors` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `r` | [Single](/api-docs/unity/Single/) |
| `g` | [Single](/api-docs/unity/Single/) |
| `b` | [Single](/api-docs/unity/Single/) |
| `a` | [Single](/api-docs/unity/Single/) |
| `globalAlpha` | [Single](/api-docs/unity/Single/) |
| `premultiply` | [Bool](/api-docs/unity/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/unity/Bool/) |
| `hasUvs` | [Bool](/api-docs/unity/Bool/) |
| `uvs` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |
| `uvFactorX` | [Single](/api-docs/unity/Single/) |
| `uvFactorY` | [Single](/api-docs/unity/Single/) |
| `meshAttrCount` | [Int](/api-docs/unity/Int/) |
| `shaderAttrCount` | [Int](/api-docs/unity/Int/) |
| `mA` | [Single](/api-docs/unity/Single/) |
| `mB` | [Single](/api-docs/unity/Single/) |
| `mC` | [Single](/api-docs/unity/Single/) |
| `mD` | [Single](/api-docs/unity/Single/) |
| `mTX` | [Single](/api-docs/unity/Single/) |
| `mTY` | [Single](/api-docs/unity/Single/) |
| `z` | [Single](/api-docs/unity/Single/) |
| `slot` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="MeshPartF64"><div class="plugin-name">unity</div><code><span class="field-name">MeshPartF64</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">dstOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertexSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">idxDst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/UInt16Array/" class="type-link">UInt16Array</a><span class="operator">,</span> <span class="arg-name">idxOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxBase</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verts</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">vertStride</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">indices</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">colorMode</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">floatColors</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">packedColors</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">globalAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">premultiply</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">zeroAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">hasUvs</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">uvs</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">uvFactorX</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">uvFactorY</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">meshAttrCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">shaderAttrCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mA</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mB</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mC</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mD</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mTX</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">mTY</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="operator">,</span> <span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MeshPartF64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dst` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `dstOffset` | [Int](/api-docs/unity/Int/) |
| `vertexSize` | [Int](/api-docs/unity/Int/) |
| `writeSlot` | [Bool](/api-docs/unity/Bool/) |
| `idxDst` | [UInt16Array](/api-docs/unity/backend/UInt16Array/) |
| `idxOffset` | [Int](/api-docs/unity/Int/) |
| `idxBase` | [Int](/api-docs/unity/Int/) |
| `verts` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |
| `vertStride` | [Int](/api-docs/unity/Int/) |
| `indices` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `start` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |
| `colorMode` | [Int](/api-docs/unity/Int/) |
| `floatColors` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `packedColors` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `r` | [Single](/api-docs/unity/Single/) |
| `g` | [Single](/api-docs/unity/Single/) |
| `b` | [Single](/api-docs/unity/Single/) |
| `a` | [Single](/api-docs/unity/Single/) |
| `globalAlpha` | [Single](/api-docs/unity/Single/) |
| `premultiply` | [Bool](/api-docs/unity/Bool/) |
| `zeroAlpha` | [Bool](/api-docs/unity/Bool/) |
| `hasUvs` | [Bool](/api-docs/unity/Bool/) |
| `uvs` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Float](/api-docs/unity/Float/)> |
| `uvFactorX` | [Single](/api-docs/unity/Single/) |
| `uvFactorY` | [Single](/api-docs/unity/Single/) |
| `meshAttrCount` | [Int](/api-docs/unity/Int/) |
| `shaderAttrCount` | [Int](/api-docs/unity/Int/) |
| `mA` | [Single](/api-docs/unity/Single/) |
| `mB` | [Single](/api-docs/unity/Single/) |
| `mC` | [Single](/api-docs/unity/Single/) |
| `mD` | [Single](/api-docs/unity/Single/) |
| `mTX` | [Single](/api-docs/unity/Single/) |
| `mTY` | [Single](/api-docs/unity/Single/) |
| `z` | [Single](/api-docs/unity/Single/) |
| `slot` | [Single](/api-docs/unity/Single/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="QuadsFlush"><div class="plugin-name">unity</div><code><span class="field-name">QuadsFlush</span><span class="parenthesis">(</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">dstOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vertexSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">writeSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">idxDst</span><span class="operator">:</span> <a href="/api-docs/unity/backend/UInt16Array/" class="type-link">UInt16Array</a><span class="operator">,</span> <span class="arg-name">idxOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">idxBase</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">records</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Float32Array/" class="type-link">Float32Array</a><span class="operator">,</span> <span class="arg-name">recordSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attrCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">quadCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#QuadsFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dst` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `dstOffset` | [Int](/api-docs/unity/Int/) |
| `vertexSize` | [Int](/api-docs/unity/Int/) |
| `writeSlot` | [Bool](/api-docs/unity/Bool/) |
| `idxDst` | [UInt16Array](/api-docs/unity/backend/UInt16Array/) |
| `idxOffset` | [Int](/api-docs/unity/Int/) |
| `idxBase` | [Int](/api-docs/unity/Int/) |
| `records` | [Float32Array](/api-docs/unity/backend/Float32Array/) |
| `recordSize` | [Int](/api-docs/unity/Int/) |
| `attrCount` | [Int](/api-docs/unity/Int/) |
| `quadCount` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: ArrayBufferIO
target: Clay (Native)
permalink: api-docs/clay-native/clay/buffers/ArrayBufferIO/
---

# ArrayBufferIO

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/buffers/ArrayBufferIO.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.buffers.ArrayBufferIO</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="getInt8"><code><span class="field-name">getInt8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt8"><code><span class="field-name">setInt8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint8"><code><span class="field-name">getUint8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a></code><a class="header-anchor" href="#getUint8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint8Clamped"><code><span class="field-name">setUint8Clamped</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint8Clamped"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint8"><code><span class="field-name">setUint8</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt16"><code><span class="field-name">getInt16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt16_BE"><code><span class="field-name">getInt16_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt16_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt16"><code><span class="field-name">setInt16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt16_BE"><code><span class="field-name">setInt16_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt16_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint16"><code><span class="field-name">getUint16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a></code><a class="header-anchor" href="#getUint16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint16_BE"><code><span class="field-name">getUint16_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a></code><a class="header-anchor" href="#getUint16_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint16"><code><span class="field-name">setUint16</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint16_BE"><code><span class="field-name">setUint16_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint16_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt32"><code><span class="field-name">getInt32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt32_BE"><code><span class="field-name">getInt32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt32"><code><span class="field-name">setInt32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt32_BE"><code><span class="field-name">setInt32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint32"><code><span class="field-name">getUint32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a></code><a class="header-anchor" href="#getUint32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint32_BE"><code><span class="field-name">getUint32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a></code><a class="header-anchor" href="#getUint32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint32"><code><span class="field-name">setUint32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint32_BE"><code><span class="field-name">setUint32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/UINT/" class="type-link">UINT</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [UINT](/api-docs/clay-native/clay/buffers/UINT/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat32"><code><span class="field-name">getFloat32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getFloat32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat32_BE"><code><span class="field-name">getFloat32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getFloat32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat32"><code><span class="field-name">setFloat32</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat32_BE"><code><span class="field-name">setFloat32_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat32_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat64"><code><span class="field-name">getFloat64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat64_BE"><code><span class="field-name">getFloat64_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat64_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat64"><code><span class="field-name">setFloat64</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat64_BE"><code><span class="field-name">setFloat64_BE</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat64_BE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) |
| `byteOffset` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Float](/api-docs/clay-native/Float/) |

## Private Members


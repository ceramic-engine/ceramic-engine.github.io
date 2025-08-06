---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: ArrayBufferViewImpl
target: Clay (Native)
permalink: api-docs/clay-native/clay/buffers/ArrayBufferViewImpl/
---

# ArrayBufferViewImpl

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/buffers/ArrayBufferView.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.buffers.ArrayBufferViewImpl</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="byteOffset"><code><span class="field-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="byteLength"><code><span class="field-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `view` | [Null](/api-docs/clay-native/Null/)<[ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/)> | *(optional)* |
| `array` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> | *(optional)* |
| `offset` | [Int](/api-docs/clay-native/Int/) | `0` |

## Private Members

<div class="signature field-var no-description" id="bytesPerElement"><code><span class="field-name">bytesPerElement</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bytesPerElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromElements"><code><span class="field-name">fromElements</span><span class="parenthesis">(</span><span class="arg-name">_type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="operator">,</span> <span class="arg-name">_elements</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a></code><a class="header-anchor" href="#fromElements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) |
| `_elements` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromView"><code><span class="field-name">fromView</span><span class="parenthesis">(</span><span class="arg-name">_type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="operator">,</span> <span class="arg-name">_other</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a></code><a class="header-anchor" href="#fromView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) |
| `_other` | [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |

| Returns |
|---------|
| [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromBuffer"><code><span class="field-name">fromBuffer</span><span class="parenthesis">(</span><span class="arg-name">_type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="operator">,</span> <span class="arg-name">_buffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="arg-name">_byte_offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">_byte_length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">_view</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a></code><a class="header-anchor" href="#fromBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `_type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) | |
| `_buffer` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) | |
| `_byte_offset` | [Int](/api-docs/clay-native/Int/) | |
| `_byte_length` | [Int](/api-docs/clay-native/Int/) | |
| `_view` | [Null](/api-docs/clay-native/Null/)<[ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/)> | *(optional)* |

| Returns |
|---------|
| [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fromArray"><code><span class="field-name">fromArray</span><span class="parenthesis">(</span><span class="arg-name">_type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="operator">,</span> <span class="arg-name">_array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">ArrayBufferView</a></code><a class="header-anchor" href="#fromArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) |
| `_array` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> |

| Returns |
|---------|
| [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cloneBuffer"><code><span class="field-name">cloneBuffer</span><span class="parenthesis">(</span><span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">srcByteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cloneBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `src` | [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) | |
| `srcByteOffset` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="subarray"><code><span class="field-name">subarray</span><span class="parenthesis">(</span><span class="arg-name">begin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/subarray/T_subarray/" class="type-link">subarray.T_subarray</a></code><a class="header-anchor" href="#subarray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `begin` | [Int](/api-docs/clay-native/Int/) | |
| `end` | [Int](/api-docs/clay-native/Int/) | `null` |

| Returns |
|---------|
| [subarray.T_subarray](/api-docs/clay-native/subarray/T_subarray/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bytesForType"><code><span class="field-name">bytesForType</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bytesForType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="toByteLength"><code><span class="field-name">toByteLength</span><span class="parenthesis">(</span><span class="arg-name">elemCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#toByteLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `elemCount` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copyFromArray"><code><span class="field-name">copyFromArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyFromArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `array` | [Array](/api-docs/clay-native/Array/)<[Float](/api-docs/clay-native/Float/)> | |
| `offset` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">in_type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/TypedArrayType/" class="type-link">TypedArrayType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `in_type` | [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) |


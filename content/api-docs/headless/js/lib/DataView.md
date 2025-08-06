---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: DataView
target: Headless
permalink: api-docs/headless/js/lib/DataView/
---

# DataView

<div class="type-hierarchy"><strong>js.lib.DataView</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/js/lib/ArrayBufferView/">ArrayBufferView</a></div>

## Instance Members

<div class="signature field-var no-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/ArrayBuffer/" class="type-link">ArrayBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="byteOffset"><code><span class="field-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="byteLength"><code><span class="field-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt8"><code><span class="field-name">getInt8</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `byteOffset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint8"><code><span class="field-name">getUint8</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUint8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `byteOffset` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt16"><code><span class="field-name">getInt16</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint16"><code><span class="field-name">getUint16</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUint16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getInt32"><code><span class="field-name">getInt32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getUint32"><code><span class="field-name">getUint32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUint32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat32"><code><span class="field-name">getFloat32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFloat64"><code><span class="field-name">getFloat64</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFloat64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt8"><code><span class="field-name">setInt8</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `byteOffset` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint8"><code><span class="field-name">setUint8</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint8"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `byteOffset` | [Int](/api-docs/headless/Int/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt16"><code><span class="field-name">setInt16</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint16"><code><span class="field-name">setUint16</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint16"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setInt32"><code><span class="field-name">setInt32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setInt32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUint32"><code><span class="field-name">setUint32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUint32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Int](/api-docs/headless/Int/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat32"><code><span class="field-name">setFloat32</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Float](/api-docs/headless/Float/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setFloat64"><code><span class="field-name">setFloat64</span><span class="parenthesis">(</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">littleEndian</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFloat64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `byteOffset` | [Int](/api-docs/headless/Int/) | |
| `value` | [Float](/api-docs/headless/Float/) | |
| `littleEndian` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `buffer` | [ArrayBuffer](/api-docs/headless/js/lib/ArrayBuffer/) | |
| `byteOffset` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `byteLength` | [Int](/api-docs/headless/Int/) | *(optional)* |


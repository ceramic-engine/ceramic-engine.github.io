---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NativeArray
target: Clay (Native)
permalink: api-docs/clay-native/cpp/NativeArray/
---

# NativeArray

<div class="type-hierarchy"><strong>cpp.NativeArray</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">create.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `length` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<create.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blit"><code><span class="field-name">blit</span><span class="parenthesis">(</span><span class="arg-name">ioDestArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">blit.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inDestElement</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inSourceArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">blit.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inSourceElement</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inElementCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#blit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ioDestArray` | [Array](/api-docs/clay-native/Array/)<blit.T> |
| `inDestElement` | [Int](/api-docs/clay-native/Int/) |
| `inSourceArray` | [Array](/api-docs/clay-native/Array/)<blit.T> |
| `inSourceElement` | [Int](/api-docs/clay-native/Int/) |
| `inElementCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBase"><code><span class="field-name">getBase</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ArrayBase/" class="type-link">ArrayBase</a></code><a class="header-anchor" href="#getBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> |

| Returns |
|---------|
| [ArrayBase](/api-docs/clay-native/cpp/ArrayBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reserve"><code><span class="field-name">reserve</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">reserve.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inElements</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<reserve.T> |
| `inElements` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="capacity"><code><span class="field-name">capacity</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">capacity.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#capacity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<capacity.T> |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getElementSize"><code><span class="field-name">getElementSize</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">getElementSize.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getElementSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<getElementSize.T> |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="address"><code><span class="field-name">address</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">address.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">address.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#address"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<address.T> |
| `inIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<address.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setData"><code><span class="field-name">setData</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">setData.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><span class="type-name">setData.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inElementCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<setData.T> |
| `inData` | [Pointer](/api-docs/clay-native/cpp/Pointer/)<setData.T> |
| `inElementCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setUnmanagedData"><code><span class="field-name">setUnmanagedData</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">setUnmanagedData.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstPointer/" class="type-link">ConstPointer</a><span class="operator">&lt;</span><span class="type-name">setUnmanagedData.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inElementCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUnmanagedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<setUnmanagedData.T> |
| `inData` | [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/)<setUnmanagedData.T> |
| `inElementCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="zero"><code><span class="field-name">zero</span><span class="parenthesis">(</span><span class="arg-name">ioDestArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">zero.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inFirst</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">inElements</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#zero"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ioDestArray` | [Array](/api-docs/clay-native/Array/)<zero.T> | |
| `inFirst` | [Int](/api-docs/clay-native/Int/) | *(optional)* |
| `inElements` | [Int](/api-docs/clay-native/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeAt"><code><span class="field-name">removeAt</span><span class="parenthesis">(</span><span class="arg-name">ioDestArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">removeAt.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ioDestArray` | [Array](/api-docs/clay-native/Array/)<removeAt.T> |
| `inIndex` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="memcmp"><code><span class="field-name">memcmp</span><span class="parenthesis">(</span><span class="arg-name">inArrayA</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">memcmp.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inArrayB</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">memcmp.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#memcmp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArrayA` | [Array](/api-docs/clay-native/Array/)<memcmp.T> |
| `inArrayB` | [Array](/api-docs/clay-native/Array/)<memcmp.T> |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveVirtualArray"><code><span class="field-name">resolveVirtualArray</span><span class="parenthesis">(</span><span class="arg-name">inArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#resolveVirtualArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inArray` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unsafeGet"><code><span class="field-name">unsafeGet</span><span class="parenthesis">(</span><span class="arg-name">inDestArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">unsafeGet.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">unsafeGet.T</span></code><a class="header-anchor" href="#unsafeGet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inDestArray` | [Array](/api-docs/clay-native/Array/)<unsafeGet.T> |
| `inIndex` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| unsafeGet.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unsafeSet"><code><span class="field-name">unsafeSet</span><span class="parenthesis">(</span><span class="arg-name">ioDestArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">unsafeSet.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inValue</span><span class="operator">:</span> <span class="type-name">unsafeSet.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">unsafeSet.T</span></code><a class="header-anchor" href="#unsafeSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ioDestArray` | [Array](/api-docs/clay-native/Array/)<unsafeSet.T> |
| `inIndex` | [Int](/api-docs/clay-native/Int/) |
| `inValue` | unsafeSet.T |

| Returns |
|---------|
| unsafeSet.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setSize"><code><span class="field-name">setSize</span><span class="parenthesis">(</span><span class="arg-name">ioArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">setSize.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">setSize.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#setSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ioArray` | [Array](/api-docs/clay-native/Array/)<setSize.T> |
| `inSize` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<setSize.T> |


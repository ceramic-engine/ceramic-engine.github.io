---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ExecutionContext
target: Unity
permalink: api-docs/unity/cs/system/threading/ExecutionContext/
---

# ExecutionContext

<div class="type-hierarchy"><strong>cs.system.threading.ExecutionContext</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-method no-description" id="Capture"><code><span class="field-name">Capture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ExecutionContext</a></code><a class="header-anchor" href="#Capture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ExecutionContext](/api-docs/unity/cs/system/threading/ExecutionContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsFlowSuppressed"><code><span class="field-name">IsFlowSuppressed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFlowSuppressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RestoreFlow"><code><span class="field-name">RestoreFlow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RestoreFlow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Run"><code><span class="field-name">Run</span><span class="parenthesis">(</span><span class="arg-name">executionContext</span><span class="operator">:</span> <a href="#" class="type-link">ExecutionContext</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/ContextCallback/" class="type-link">ContextCallback</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `executionContext` | [ExecutionContext](/api-docs/unity/cs/system/threading/ExecutionContext/) |
| `callback` | [ContextCallback](/api-docs/unity/cs/system/threading/ContextCallback/) |
| `state` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SuppressFlow"><code><span class="field-name">SuppressFlow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/AsyncFlowControl/" class="type-link">AsyncFlowControl</a></code><a class="header-anchor" href="#SuppressFlow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [AsyncFlowControl](/api-docs/unity/cs/system/threading/AsyncFlowControl/) |

## Instance Members

<div class="signature field-method no-description" id="CreateCopy"><code><span class="field-name">CreateCopy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ExecutionContext</a></code><a class="header-anchor" href="#CreateCopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ExecutionContext](/api-docs/unity/cs/system/threading/ExecutionContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


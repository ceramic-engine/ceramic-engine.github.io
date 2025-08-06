---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ObjRef
target: Unity
permalink: api-docs/unity/cs/system/runtime/remoting/ObjRef/
---

# ObjRef

<div class="type-hierarchy"><strong>cs.system.runtime.remoting.ObjRef</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/serialization/IObjectReference/">cs.system.runtime.serialization.IObjectReference</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Instance Members

<div class="signature field-var no-description" id="URI"><code><span class="field-name">URI</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#URI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TypeInfo"><code><span class="field-name">TypeInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/IRemotingTypeInfo/" class="type-link">IRemotingTypeInfo</a></code><a class="header-anchor" href="#TypeInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EnvoyInfo"><code><span class="field-name">EnvoyInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/IEnvoyInfo/" class="type-link">IEnvoyInfo</a></code><a class="header-anchor" href="#EnvoyInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ChannelInfo"><code><span class="field-name">ChannelInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/IChannelInfo/" class="type-link">IChannelInfo</a></code><a class="header-anchor" href="#ChannelInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetRealObject"><code><span class="field-name">GetRealObject</span><span class="parenthesis">(</span><span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetRealObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsFromThisAppDomain"><code><span class="field-name">IsFromThisAppDomain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFromThisAppDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsFromThisProcess"><code><span class="field-name">IsFromThisProcess</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsFromThisProcess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: OperatingSystem
target: Unity
permalink: api-docs/unity/cs/system/OperatingSystem/
---

# OperatingSystem

<div class="type-hierarchy"><strong>cs.system.OperatingSystem</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">ICloneable</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Instance Members

<div class="signature field-var no-description" id="VersionString"><code><span class="field-name">VersionString</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#VersionString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ServicePack"><code><span class="field-name">ServicePack</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ServicePack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Version"><code><span class="field-name">Version</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Version/" class="type-link">Version</a></code><a class="header-anchor" href="#Version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Platform"><code><span class="field-name">Platform</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Platform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">platform</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">version</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Version/" class="type-link">Version</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `platform` | Anonymous |
| `version` | [Version](/api-docs/unity/cs/system/Version/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


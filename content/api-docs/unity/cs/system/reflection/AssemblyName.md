---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: AssemblyName
target: Unity
permalink: api-docs/unity/cs/system/reflection/AssemblyName/
---

# AssemblyName

<div class="type-hierarchy"><strong>cs.system.reflection.AssemblyName</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">cs.system.ICloneable</a>, <a href="/api-docs/unity/cs/system/runtime/interopservices/_AssemblyName/">cs.system.runtime.interopservices._AssemblyName</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/IDeserializationCallback/">cs.system.runtime.serialization.IDeserializationCallback</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-method no-description" id="ReferenceMatchesDefinition"><code><span class="field-name">ReferenceMatchesDefinition</span><span class="parenthesis">(</span><span class="arg-name">reference</span><span class="operator">:</span> <a href="#" class="type-link">AssemblyName</a><span class="operator">,</span> <span class="arg-name">definition</span><span class="operator">:</span> <a href="#" class="type-link">AssemblyName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ReferenceMatchesDefinition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `reference` | [AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |
| `definition` | [AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAssemblyName"><code><span class="field-name">GetAssemblyName</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AssemblyName</a></code><a class="header-anchor" href="#GetAssemblyName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |

## Instance Members

<div class="signature field-var no-description" id="VersionCompatibility"><code><span class="field-name">VersionCompatibility</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#VersionCompatibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Version"><code><span class="field-name">Version</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Version/" class="type-link">cs.system.Version</a></code><a class="header-anchor" href="#Version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="KeyPair"><code><span class="field-name">KeyPair</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/StrongNameKeyPair/" class="type-link">StrongNameKeyPair</a></code><a class="header-anchor" href="#KeyPair"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HashAlgorithm"><code><span class="field-name">HashAlgorithm</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#HashAlgorithm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullName"><code><span class="field-name">FullName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Flags"><code><span class="field-name">Flags</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CultureInfo"><code><span class="field-name">CultureInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a></code><a class="header-anchor" href="#CultureInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EscapedCodeBase"><code><span class="field-name">EscapedCodeBase</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#EscapedCodeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CodeBase"><code><span class="field-name">CodeBase</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#CodeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ProcessorArchitecture"><code><span class="field-name">ProcessorArchitecture</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#ProcessorArchitecture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetPublicKey"><code><span class="field-name">GetPublicKey</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetPublicKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetPublicKeyToken"><code><span class="field-name">GetPublicKeyToken</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetPublicKeyToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetPublicKey"><code><span class="field-name">SetPublicKey</span><span class="parenthesis">(</span><span class="arg-name">publicKey</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPublicKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `publicKey` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetPublicKeyToken"><code><span class="field-name">SetPublicKeyToken</span><span class="parenthesis">(</span><span class="arg-name">publicKeyToken</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetPublicKeyToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `publicKeyToken` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OnDeserialization"><code><span class="field-name">OnDeserialization</span><span class="parenthesis">(</span><span class="arg-name">sender</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#OnDeserialization"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sender` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Module
target: Unity
permalink: api-docs/unity/cs/system/reflection/Module/
---

# Module

<div class="type-hierarchy"><strong>cs.system.reflection.Module</strong> (extern class) → <a href="/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/">cs.system.reflection.emit.ModuleBuilder</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/reflection/ICustomAttributeProvider/">ICustomAttributeProvider</a>, <a href="/api-docs/unity/cs/system/runtime/interopservices/_Module/">cs.system.runtime.interopservices._Module</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-var no-description" id="FilterTypeNameIgnoreCase"><code><span class="field-name">FilterTypeNameIgnoreCase</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/TypeFilter/" class="type-link">TypeFilter</a></code><a class="header-anchor" href="#FilterTypeNameIgnoreCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FilterTypeName"><code><span class="field-name">FilterTypeName</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/TypeFilter/" class="type-link">TypeFilter</a></code><a class="header-anchor" href="#FilterTypeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="MetadataToken"><code><span class="field-name">MetadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MetadataToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullyQualifiedName"><code><span class="field-name">FullyQualifiedName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullyQualifiedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ModuleVersionId"><code><span class="field-name">ModuleVersionId</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a></code><a class="header-anchor" href="#ModuleVersionId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MDStreamVersion"><code><span class="field-name">MDStreamVersion</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MDStreamVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ScopeName"><code><span class="field-name">ScopeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ScopeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Assembly"><code><span class="field-name">Assembly</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">Assembly</a></code><a class="header-anchor" href="#Assembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ModuleHandle"><code><span class="field-name">ModuleHandle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/ModuleHandle/" class="type-link">cs.system.ModuleHandle</a></code><a class="header-anchor" href="#ModuleHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetField"><code><span class="field-name">GetField</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a></code><a class="header-anchor" href="#GetField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFields"><code><span class="field-name">GetFields</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethod"><code><span class="field-name">GetMethod</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethods"><code><span class="field-name">GetMethods</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetMethods"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetType"><code><span class="field-name">GetType</span><span class="parenthesis">(</span><span class="arg-name">className</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#GetType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `className` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveField"><code><span class="field-name">ResolveField</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a></code><a class="header-anchor" href="#ResolveField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveMember"><code><span class="field-name">ResolveMember</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MemberInfo/" class="type-link">MemberInfo</a></code><a class="header-anchor" href="#ResolveMember"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [MemberInfo](/api-docs/unity/cs/system/reflection/MemberInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveMethod"><code><span class="field-name">ResolveMethod</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodBase/" class="type-link">MethodBase</a></code><a class="header-anchor" href="#ResolveMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveType"><code><span class="field-name">ResolveType</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#ResolveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsResource"><code><span class="field-name">IsResource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FindTypes"><code><span class="field-name">FindTypes</span><span class="parenthesis">(</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/TypeFilter/" class="type-link">TypeFilter</a><span class="operator">,</span> <span class="arg-name">filterCriteria</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#FindTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `filter` | [TypeFilter](/api-docs/unity/cs/system/reflection/TypeFilter/) |
| `filterCriteria` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodImpl"><code><span class="field-name">GetMethodImpl</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">binder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Binder/" class="type-link">Binder</a><span class="operator">,</span> <span class="arg-name">callConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">modifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterModifier/" class="type-link">ParameterModifier</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#GetMethodImpl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `bindingAttr` | Anonymous |
| `binder` | [Binder](/api-docs/unity/cs/system/reflection/Binder/) |
| `callConvention` | Anonymous |
| `types` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |
| `modifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/)> |

| Returns |
|---------|
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetPEKind"><code><span class="field-name">GetPEKind</span><span class="parenthesis">(</span><span class="arg-name">peKind</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="operator">,</span> <span class="arg-name">machine</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetPEKind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `peKind` | [cs.Out](/api-docs/unity/cs/Out/) |
| `machine` | [cs.Out](/api-docs/unity/cs/Out/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefined"><code><span class="field-name">IsDefined</span><span class="parenthesis">(</span><span class="arg-name">attributeType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `attributeType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveString"><code><span class="field-name">ResolveString</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ResolveString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveSignature"><code><span class="field-name">ResolveSignature</span><span class="parenthesis">(</span><span class="arg-name">metadataToken</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ResolveSignature"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `metadataToken` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSignerCertificate"><code><span class="field-name">GetSignerCertificate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/cryptography/x509certificates/X509Certificate/" class="type-link">cs.system.security.cryptography.x509certificates.X509Certificate</a></code><a class="header-anchor" href="#GetSignerCertificate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.cryptography.x509certificates.X509Certificate](/api-docs/unity/cs/system/security/cryptography/x509certificates/X509Certificate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypes"><code><span class="field-name">GetTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


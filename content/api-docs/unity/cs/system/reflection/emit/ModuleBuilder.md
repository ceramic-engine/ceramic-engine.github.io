---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ModuleBuilder
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/ModuleBuilder/
---

# ModuleBuilder

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/Module/">cs.system.reflection.Module</a> → <strong>cs.system.reflection.emit.ModuleBuilder</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_ModuleBuilder/">cs.system.runtime.interopservices._ModuleBuilder</a></div>

## Instance Members

<div class="signature field-var no-description" id="FullyQualifiedName"><code><span class="field-name">FullyQualifiedName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullyQualifiedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsTransient"><code><span class="field-name">IsTransient</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsTransient"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateGlobalFunctions"><code><span class="field-name">CreateGlobalFunctions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CreateGlobalFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineInitializedData"><code><span class="field-name">DefineInitializedData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/FieldBuilder/" class="type-link">FieldBuilder</a></code><a class="header-anchor" href="#DefineInitializedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `attributes` | Anonymous |

| Returns |
|---------|
| [FieldBuilder](/api-docs/unity/cs/system/reflection/emit/FieldBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineUninitializedData"><code><span class="field-name">DefineUninitializedData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/FieldBuilder/" class="type-link">FieldBuilder</a></code><a class="header-anchor" href="#DefineUninitializedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `size` | [Int](/api-docs/unity/Int/) |
| `attributes` | Anonymous |

| Returns |
|---------|
| [FieldBuilder](/api-docs/unity/cs/system/reflection/emit/FieldBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineGlobalMethod"><code><span class="field-name">DefineGlobalMethod</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/" class="type-link">MethodBuilder</a></code><a class="header-anchor" href="#DefineGlobalMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

| Returns |
|---------|
| [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefinePInvokeMethod"><code><span class="field-name">DefinePInvokeMethod</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dllName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">callingConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">nativeCallConv</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">nativeCharSet</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodBuilder/" class="type-link">MethodBuilder</a></code><a class="header-anchor" href="#DefinePInvokeMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `dllName` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `callingConvention` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |
| `nativeCallConv` | Anonymous |
| `nativeCharSet` | Anonymous |

| Returns |
|---------|
| [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineType"><code><span class="field-name">DefineType</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/TypeBuilder/" class="type-link">TypeBuilder</a></code><a class="header-anchor" href="#DefineType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [TypeBuilder](/api-docs/unity/cs/system/reflection/emit/TypeBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetArrayMethod"><code><span class="field-name">GetArrayMethod</span><span class="parenthesis">(</span><span class="arg-name">arrayClass</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">methodName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callingConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#GetArrayMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arrayClass` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `methodName` | [String](/api-docs/unity/String/) |
| `callingConvention` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

| Returns |
|---------|
| [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineEnum"><code><span class="field-name">DefineEnum</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">visibility</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">underlyingType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/EnumBuilder/" class="type-link">EnumBuilder</a></code><a class="header-anchor" href="#DefineEnum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `visibility` | Anonymous |
| `underlyingType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [EnumBuilder](/api-docs/unity/cs/system/reflection/emit/EnumBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetType"><code><span class="field-name">GetType</span><span class="parenthesis">(</span><span class="arg-name">className</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#GetType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `className` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCustomAttribute"><code><span class="field-name">SetCustomAttribute</span><span class="parenthesis">(</span><span class="arg-name">customBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/" class="type-link">CustomAttributeBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCustomAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `customBuilder` | [CustomAttributeBuilder](/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSymWriter"><code><span class="field-name">GetSymWriter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolWriter/" class="type-link">cs.system.diagnostics.symbolstore.ISymbolWriter</a></code><a class="header-anchor" href="#GetSymWriter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.diagnostics.symbolstore.ISymbolWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineDocument"><code><span class="field-name">DefineDocument</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">language</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="operator">,</span> <span class="arg-name">languageVendor</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="operator">,</span> <span class="arg-name">documentType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">cs.system.diagnostics.symbolstore.ISymbolDocumentWriter</a></code><a class="header-anchor" href="#DefineDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/unity/String/) |
| `language` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |
| `languageVendor` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |
| `documentType` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |

| Returns |
|---------|
| [cs.system.diagnostics.symbolstore.ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypes"><code><span class="field-name">GetTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineResource"><code><span class="field-name">DefineResource</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">description</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attribute</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/resources/IResourceWriter/" class="type-link">cs.system.resources.IResourceWriter</a></code><a class="header-anchor" href="#DefineResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `description` | [String](/api-docs/unity/String/) |
| `attribute` | Anonymous |

| Returns |
|---------|
| [cs.system.resources.IResourceWriter](/api-docs/unity/cs/system/resources/IResourceWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineUnmanagedResource"><code><span class="field-name">DefineUnmanagedResource</span><span class="parenthesis">(</span><span class="arg-name">resource</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineUnmanagedResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resource` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineManifestResource"><code><span class="field-name">DefineManifestResource</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/Stream/" class="type-link">cs.system.io.Stream</a><span class="operator">,</span> <span class="arg-name">attribute</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineManifestResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `stream` | [cs.system.io.Stream](/api-docs/unity/cs/system/io/Stream/) |
| `attribute` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetSymCustomAttribute"><code><span class="field-name">SetSymCustomAttribute</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSymCustomAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetUserEntryPoint"><code><span class="field-name">SetUserEntryPoint</span><span class="parenthesis">(</span><span class="arg-name">entryPoint</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetUserEntryPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entryPoint` | [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodToken"><code><span class="field-name">GetMethodToken</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodToken/" class="type-link">MethodToken</a></code><a class="header-anchor" href="#GetMethodToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `method` | [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

| Returns |
|---------|
| [MethodToken](/api-docs/unity/cs/system/reflection/emit/MethodToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetArrayMethodToken"><code><span class="field-name">GetArrayMethodToken</span><span class="parenthesis">(</span><span class="arg-name">arrayClass</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">methodName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callingConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodToken/" class="type-link">MethodToken</a></code><a class="header-anchor" href="#GetArrayMethodToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arrayClass` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `methodName` | [String](/api-docs/unity/String/) |
| `callingConvention` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

| Returns |
|---------|
| [MethodToken](/api-docs/unity/cs/system/reflection/emit/MethodToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetConstructorToken"><code><span class="field-name">GetConstructorToken</span><span class="parenthesis">(</span><span class="arg-name">con</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ConstructorInfo/" class="type-link">cs.system.reflection.ConstructorInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/MethodToken/" class="type-link">MethodToken</a></code><a class="header-anchor" href="#GetConstructorToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `con` | [cs.system.reflection.ConstructorInfo](/api-docs/unity/cs/system/reflection/ConstructorInfo/) |

| Returns |
|---------|
| [MethodToken](/api-docs/unity/cs/system/reflection/emit/MethodToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFieldToken"><code><span class="field-name">GetFieldToken</span><span class="parenthesis">(</span><span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">cs.system.reflection.FieldInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/FieldToken/" class="type-link">FieldToken</a></code><a class="header-anchor" href="#GetFieldToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `field` | [cs.system.reflection.FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

| Returns |
|---------|
| [FieldToken](/api-docs/unity/cs/system/reflection/emit/FieldToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSignatureToken"><code><span class="field-name">GetSignatureToken</span><span class="parenthesis">(</span><span class="arg-name">sigBytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">sigLength</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/SignatureToken/" class="type-link">SignatureToken</a></code><a class="header-anchor" href="#GetSignatureToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sigBytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `sigLength` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [SignatureToken](/api-docs/unity/cs/system/reflection/emit/SignatureToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetStringConstant"><code><span class="field-name">GetStringConstant</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/StringToken/" class="type-link">StringToken</a></code><a class="header-anchor" href="#GetStringConstant"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `str` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [StringToken](/api-docs/unity/cs/system/reflection/emit/StringToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeToken"><code><span class="field-name">GetTypeToken</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/TypeToken/" class="type-link">TypeToken</a></code><a class="header-anchor" href="#GetTypeToken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [TypeToken](/api-docs/unity/cs/system/reflection/emit/TypeToken/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


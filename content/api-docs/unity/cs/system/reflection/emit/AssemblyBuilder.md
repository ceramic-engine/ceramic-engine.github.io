---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: AssemblyBuilder
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/AssemblyBuilder/
---

# AssemblyBuilder

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/reflection/Assembly/">cs.system.reflection.Assembly</a> → <strong>cs.system.reflection.emit.AssemblyBuilder</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_AssemblyBuilder/">cs.system.runtime.interopservices._AssemblyBuilder</a></div>

## Instance Members

<div class="signature field-var no-description" id="ReflectionOnly"><code><span class="field-name">ReflectionOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ReflectionOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ImageRuntimeVersion"><code><span class="field-name">ImageRuntimeVersion</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ImageRuntimeVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Location"><code><span class="field-name">Location</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Location"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EntryPoint"><code><span class="field-name">EntryPoint</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a></code><a class="header-anchor" href="#EntryPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CodeBase"><code><span class="field-name">CodeBase</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#CodeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddResourceFile"><code><span class="field-name">AddResourceFile</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddResourceFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `fileName` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineDynamicModule"><code><span class="field-name">DefineDynamicModule</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/" class="type-link">ModuleBuilder</a></code><a class="header-anchor" href="#DefineDynamicModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [ModuleBuilder](/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineResource"><code><span class="field-name">DefineResource</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">description</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/resources/IResourceWriter/" class="type-link">cs.system.resources.IResourceWriter</a></code><a class="header-anchor" href="#DefineResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `description` | [String](/api-docs/unity/String/) |
| `fileName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.resources.IResourceWriter](/api-docs/unity/cs/system/resources/IResourceWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineUnmanagedResource"><code><span class="field-name">DefineUnmanagedResource</span><span class="parenthesis">(</span><span class="arg-name">resource</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineUnmanagedResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resource` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineVersionInfoResource"><code><span class="field-name">DefineVersionInfoResource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineVersionInfoResource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDynamicModule"><code><span class="field-name">GetDynamicModule</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/" class="type-link">ModuleBuilder</a></code><a class="header-anchor" href="#GetDynamicModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [ModuleBuilder](/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetExportedTypes"><code><span class="field-name">GetExportedTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetExportedTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFile"><code><span class="field-name">GetFile</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">cs.system.io.FileStream</a></code><a class="header-anchor" href="#GetFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.io.FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFiles"><code><span class="field-name">GetFiles</span><span class="parenthesis">(</span><span class="arg-name">getResourceModules</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">cs.system.io.FileStream</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `getResourceModules` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.io.FileStream](/api-docs/unity/cs/system/io/FileStream/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceInfo"><code><span class="field-name">GetManifestResourceInfo</span><span class="parenthesis">(</span><span class="arg-name">resourceName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ManifestResourceInfo/" class="type-link">cs.system.reflection.ManifestResourceInfo</a></code><a class="header-anchor" href="#GetManifestResourceInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resourceName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.reflection.ManifestResourceInfo](/api-docs/unity/cs/system/reflection/ManifestResourceInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceNames"><code><span class="field-name">GetManifestResourceNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetManifestResourceNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceStream"><code><span class="field-name">GetManifestResourceStream</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/Stream/" class="type-link">cs.system.io.Stream</a></code><a class="header-anchor" href="#GetManifestResourceStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.io.Stream](/api-docs/unity/cs/system/io/Stream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Save"><code><span class="field-name">Save</span><span class="parenthesis">(</span><span class="arg-name">assemblyFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">portableExecutableKind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">imageFileMachine</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Save"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFileName` | [String](/api-docs/unity/String/) |
| `portableExecutableKind` | Anonymous |
| `imageFileMachine` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetEntryPoint"><code><span class="field-name">SetEntryPoint</span><span class="parenthesis">(</span><span class="arg-name">entryMethod</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetEntryPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entryMethod` | [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCustomAttribute"><code><span class="field-name">SetCustomAttribute</span><span class="parenthesis">(</span><span class="arg-name">customBuilder</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/" class="type-link">CustomAttributeBuilder</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCustomAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `customBuilder` | [CustomAttributeBuilder](/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


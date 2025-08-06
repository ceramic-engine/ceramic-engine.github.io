---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Assembly
target: Unity
permalink: api-docs/unity/cs/system/reflection/Assembly/
---

# Assembly

<div class="type-hierarchy"><strong>cs.system.reflection.Assembly</strong> (extern class) → <a href="/api-docs/unity/cs/system/reflection/emit/AssemblyBuilder/">cs.system.reflection.emit.AssemblyBuilder</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/reflection/ICustomAttributeProvider/">ICustomAttributeProvider</a>, <a href="/api-docs/unity/cs/system/runtime/interopservices/_Assembly/">cs.system.runtime.interopservices._Assembly</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a>, <a href="/api-docs/unity/cs/system/security/IEvidenceFactory/">cs.system.security.IEvidenceFactory</a></div>

## Static Members

<div class="signature field-method no-description" id="CreateQualifiedName"><code><span class="field-name">CreateQualifiedName</span><span class="parenthesis">(</span><span class="arg-name">assemblyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#CreateQualifiedName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyName` | [String](/api-docs/unity/String/) |
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAssembly"><code><span class="field-name">GetAssembly</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#GetAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEntryAssembly"><code><span class="field-name">GetEntryAssembly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#GetEntryAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LoadFrom"><code><span class="field-name">LoadFrom</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#LoadFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LoadFile"><code><span class="field-name">LoadFile</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">securityEvidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#LoadFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `securityEvidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Load"><code><span class="field-name">Load</span><span class="parenthesis">(</span><span class="arg-name">assemblyString</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#Load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyString` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReflectionOnlyLoad"><code><span class="field-name">ReflectionOnlyLoad</span><span class="parenthesis">(</span><span class="arg-name">rawAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#ReflectionOnlyLoad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rawAssembly` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReflectionOnlyLoadFrom"><code><span class="field-name">ReflectionOnlyLoadFrom</span><span class="parenthesis">(</span><span class="arg-name">assemblyFile</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#ReflectionOnlyLoadFrom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `assemblyFile` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LoadWithPartialName"><code><span class="field-name">LoadWithPartialName</span><span class="parenthesis">(</span><span class="arg-name">partialName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#LoadWithPartialName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `partialName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetExecutingAssembly"><code><span class="field-name">GetExecutingAssembly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#GetExecutingAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCallingAssembly"><code><span class="field-name">GetCallingAssembly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#GetCallingAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

## Instance Members

<div class="signature field-var no-description" id="ModuleResolve"><code><span class="field-name">ModuleResolve</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/" class="type-link">ModuleResolveEventHandler</a></code><a class="header-anchor" href="#ModuleResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GlobalAssemblyCache"><code><span class="field-name">GlobalAssemblyCache</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GlobalAssemblyCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ManifestModule"><code><span class="field-name">ManifestModule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a></code><a class="header-anchor" href="#ManifestModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReflectionOnly"><code><span class="field-name">ReflectionOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ReflectionOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HostContext"><code><span class="field-name">HostContext</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#HostContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ImageRuntimeVersion"><code><span class="field-name">ImageRuntimeVersion</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ImageRuntimeVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Location"><code><span class="field-name">Location</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Location"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Evidence"><code><span class="field-name">Evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a></code><a class="header-anchor" href="#Evidence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EntryPoint"><code><span class="field-name">EntryPoint</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">MethodInfo</a></code><a class="header-anchor" href="#EntryPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullName"><code><span class="field-name">FullName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EscapedCodeBase"><code><span class="field-name">EscapedCodeBase</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#EscapedCodeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CodeBase"><code><span class="field-name">CodeBase</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#CodeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_ModuleResolve"><code><span class="field-name">add_ModuleResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/" class="type-link">ModuleResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_ModuleResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ModuleResolveEventHandler](/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_ModuleResolve"><code><span class="field-name">remove_ModuleResolve</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/" class="type-link">ModuleResolveEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_ModuleResolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [ModuleResolveEventHandler](/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetObjectData"><code><span class="field-name">GetObjectData</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/" class="type-link">cs.system.runtime.serialization.SerializationInfo</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/serialization/StreamingContext/" class="type-link">cs.system.runtime.serialization.StreamingContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#GetObjectData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [cs.system.runtime.serialization.SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) |
| `context` | [cs.system.runtime.serialization.StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) |

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

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">inherit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inherit` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFiles"><code><span class="field-name">GetFiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">cs.system.io.FileStream</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.io.FileStream](/api-docs/unity/cs/system/io/FileStream/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFile"><code><span class="field-name">GetFile</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">cs.system.io.FileStream</a></code><a class="header-anchor" href="#GetFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.io.FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceStream"><code><span class="field-name">GetManifestResourceStream</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/Stream/" class="type-link">cs.system.io.Stream</a></code><a class="header-anchor" href="#GetManifestResourceStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.io.Stream](/api-docs/unity/cs/system/io/Stream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypes"><code><span class="field-name">GetTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetExportedTypes"><code><span class="field-name">GetExportedTypes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetExportedTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetName"><code><span class="field-name">GetName</span><span class="parenthesis">(</span><span class="arg-name">copiedName</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/AssemblyName/" class="type-link">AssemblyName</a></code><a class="header-anchor" href="#GetName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `copiedName` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LoadModule"><code><span class="field-name">LoadModule</span><span class="parenthesis">(</span><span class="arg-name">moduleName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">rawModule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a></code><a class="header-anchor" href="#LoadModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `moduleName` | [String](/api-docs/unity/String/) |
| `rawModule` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

| Returns |
|---------|
| [Module](/api-docs/unity/cs/system/reflection/Module/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateInstance"><code><span class="field-name">CreateInstance</span><span class="parenthesis">(</span><span class="arg-name">typeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#CreateInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `typeName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLoadedModules"><code><span class="field-name">GetLoadedModules</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetLoadedModules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Module](/api-docs/unity/cs/system/reflection/Module/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetModules"><code><span class="field-name">GetModules</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetModules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Module](/api-docs/unity/cs/system/reflection/Module/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceNames"><code><span class="field-name">GetManifestResourceNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetManifestResourceNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetManifestResourceInfo"><code><span class="field-name">GetManifestResourceInfo</span><span class="parenthesis">(</span><span class="arg-name">resourceName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ManifestResourceInfo/" class="type-link">ManifestResourceInfo</a></code><a class="header-anchor" href="#GetManifestResourceInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `resourceName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [ManifestResourceInfo](/api-docs/unity/cs/system/reflection/ManifestResourceInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetModule"><code><span class="field-name">GetModule</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">Module</a></code><a class="header-anchor" href="#GetModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Module](/api-docs/unity/cs/system/reflection/Module/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetReferencedAssemblies"><code><span class="field-name">GetReferencedAssemblies</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/AssemblyName/" class="type-link">AssemblyName</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetReferencedAssemblies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSatelliteAssembly"><code><span class="field-name">GetSatelliteAssembly</span><span class="parenthesis">(</span><span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Assembly</a></code><a class="header-anchor" href="#GetSatelliteAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

| Returns |
|---------|
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


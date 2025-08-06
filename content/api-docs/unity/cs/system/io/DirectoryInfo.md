---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: DirectoryInfo
target: Unity
permalink: api-docs/unity/cs/system/io/DirectoryInfo/
---

# DirectoryInfo

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <a href="/api-docs/unity/cs/system/io/FileSystemInfo/">FileSystemInfo</a> → <strong>cs.system.io.DirectoryInfo</strong> (extern final class)</div>

## Instance Members

<div class="signature field-var no-description" id="Root"><code><span class="field-name">Root</span><span class="operator">:</span> <a href="#" class="type-link">DirectoryInfo</a></code><a class="header-anchor" href="#Root"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Parent"><code><span class="field-name">Parent</span><span class="operator">:</span> <a href="#" class="type-link">DirectoryInfo</a></code><a class="header-anchor" href="#Parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Exists"><code><span class="field-name">Exists</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Create"><code><span class="field-name">Create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateSubdirectory"><code><span class="field-name">CreateSubdirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DirectoryInfo</a></code><a class="header-anchor" href="#CreateSubdirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [DirectoryInfo](/api-docs/unity/cs/system/io/DirectoryInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFiles"><code><span class="field-name">GetFiles</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/io/FileInfo/" class="type-link">FileInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FileInfo](/api-docs/unity/cs/system/io/FileInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDirectories"><code><span class="field-name">GetDirectories</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">DirectoryInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetDirectories"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[DirectoryInfo](/api-docs/unity/cs/system/io/DirectoryInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFileSystemInfos"><code><span class="field-name">GetFileSystemInfos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/io/FileSystemInfo/" class="type-link">FileSystemInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetFileSystemInfos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FileSystemInfo](/api-docs/unity/cs/system/io/FileSystemInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Delete"><code><span class="field-name">Delete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="MoveTo"><code><span class="field-name">MoveTo</span><span class="parenthesis">(</span><span class="arg-name">destDirName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MoveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `destDirName` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAccessControl"><code><span class="field-name">GetAccessControl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/DirectorySecurity/" class="type-link">cs.system.security.accesscontrol.DirectorySecurity</a></code><a class="header-anchor" href="#GetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.accesscontrol.DirectorySecurity](/api-docs/unity/cs/system/security/accesscontrol/DirectorySecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessControl"><code><span class="field-name">SetAccessControl</span><span class="parenthesis">(</span><span class="arg-name">directorySecurity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/DirectorySecurity/" class="type-link">cs.system.security.accesscontrol.DirectorySecurity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `directorySecurity` | [cs.system.security.accesscontrol.DirectorySecurity](/api-docs/unity/cs/system/security/accesscontrol/DirectorySecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |


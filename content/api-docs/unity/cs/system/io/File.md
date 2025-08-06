---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: File
target: Unity
permalink: api-docs/unity/cs/system/io/File/
---

# File

<div class="type-hierarchy"><strong>cs.system.io.File</strong> (extern final class)</div>

## Static Members

<div class="signature field-method no-description" id="AppendAllText"><code><span class="field-name">AppendAllText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">contents</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AppendAllText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `contents` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AppendText"><code><span class="field-name">AppendText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamWriter/" class="type-link">StreamWriter</a></code><a class="header-anchor" href="#AppendText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [StreamWriter](/api-docs/unity/cs/system/io/StreamWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Copy"><code><span class="field-name">Copy</span><span class="parenthesis">(</span><span class="arg-name">sourceFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">destFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceFileName` | [String](/api-docs/unity/String/) |
| `destFileName` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Create"><code><span class="field-name">Create</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">FileStream</a></code><a class="header-anchor" href="#Create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateText"><code><span class="field-name">CreateText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamWriter/" class="type-link">StreamWriter</a></code><a class="header-anchor" href="#CreateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [StreamWriter](/api-docs/unity/cs/system/io/StreamWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Delete"><code><span class="field-name">Delete</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Exists"><code><span class="field-name">Exists</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAccessControl"><code><span class="field-name">GetAccessControl</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/FileSecurity/" class="type-link">cs.system.security.accesscontrol.FileSecurity</a></code><a class="header-anchor" href="#GetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.security.accesscontrol.FileSecurity](/api-docs/unity/cs/system/security/accesscontrol/FileSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAttributes"><code><span class="field-name">GetAttributes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCreationTime"><code><span class="field-name">GetCreationTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetCreationTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCreationTimeUtc"><code><span class="field-name">GetCreationTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetCreationTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLastAccessTime"><code><span class="field-name">GetLastAccessTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetLastAccessTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLastAccessTimeUtc"><code><span class="field-name">GetLastAccessTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetLastAccessTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLastWriteTime"><code><span class="field-name">GetLastWriteTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetLastWriteTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLastWriteTimeUtc"><code><span class="field-name">GetLastWriteTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#GetLastWriteTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Move"><code><span class="field-name">Move</span><span class="parenthesis">(</span><span class="arg-name">sourceFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">destFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Move"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceFileName` | [String](/api-docs/unity/String/) |
| `destFileName` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Open"><code><span class="field-name">Open</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">FileStream</a></code><a class="header-anchor" href="#Open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `mode` | Anonymous |

| Returns |
|---------|
| [FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenRead"><code><span class="field-name">OpenRead</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">FileStream</a></code><a class="header-anchor" href="#OpenRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenText"><code><span class="field-name">OpenText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamReader/" class="type-link">StreamReader</a></code><a class="header-anchor" href="#OpenText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [StreamReader](/api-docs/unity/cs/system/io/StreamReader/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenWrite"><code><span class="field-name">OpenWrite</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/FileStream/" class="type-link">FileStream</a></code><a class="header-anchor" href="#OpenWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FileStream](/api-docs/unity/cs/system/io/FileStream/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Replace"><code><span class="field-name">Replace</span><span class="parenthesis">(</span><span class="arg-name">sourceFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">destinationFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">destinationBackupFileName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sourceFileName` | [String](/api-docs/unity/String/) |
| `destinationFileName` | [String](/api-docs/unity/String/) |
| `destinationBackupFileName` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessControl"><code><span class="field-name">SetAccessControl</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fileSecurity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/FileSecurity/" class="type-link">cs.system.security.accesscontrol.FileSecurity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `fileSecurity` | [cs.system.security.accesscontrol.FileSecurity](/api-docs/unity/cs/system/security/accesscontrol/FileSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAttributes"><code><span class="field-name">SetAttributes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fileAttributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `fileAttributes` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCreationTime"><code><span class="field-name">SetCreationTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">creationTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCreationTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `creationTime` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetCreationTimeUtc"><code><span class="field-name">SetCreationTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">creationTimeUtc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetCreationTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `creationTimeUtc` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetLastAccessTime"><code><span class="field-name">SetLastAccessTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">lastAccessTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetLastAccessTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `lastAccessTime` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetLastAccessTimeUtc"><code><span class="field-name">SetLastAccessTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">lastAccessTimeUtc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetLastAccessTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `lastAccessTimeUtc` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetLastWriteTime"><code><span class="field-name">SetLastWriteTime</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">lastWriteTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetLastWriteTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `lastWriteTime` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetLastWriteTimeUtc"><code><span class="field-name">SetLastWriteTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">lastWriteTimeUtc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetLastWriteTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `lastWriteTimeUtc` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadAllBytes"><code><span class="field-name">ReadAllBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ReadAllBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadAllLines"><code><span class="field-name">ReadAllLines</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ReadAllLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadAllText"><code><span class="field-name">ReadAllText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ReadAllText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteAllBytes"><code><span class="field-name">WriteAllBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteAllBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `bytes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteAllLines"><code><span class="field-name">WriteAllLines</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">contents</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteAllLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `contents` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteAllText"><code><span class="field-name">WriteAllText</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">contents</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteAllText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `contents` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Encrypt"><code><span class="field-name">Encrypt</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Encrypt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Decrypt"><code><span class="field-name">Decrypt</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Decrypt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |


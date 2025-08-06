---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FileSystem
target: Clay (Native)
permalink: api-docs/clay-native/sys/FileSystem/
---

# FileSystem

<div class="type-hierarchy"><strong>sys.FileSystem</strong> (Class)</div>

This class provides information about files and directories.

If `null` is passed as a file path to any function in this class, the
result is unspecified, and may differ from target to target.

See `sys.io.File` for the complementary file API.

## Static Members

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the file or directory specified by `path` exists.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stat"><code><span class="field-name">stat</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/FileStat/" class="type-link">FileStat</a></code><a class="header-anchor" href="#stat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `FileStat` information for the file or directory specified by
`path`.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [FileStat](/api-docs/clay-native/sys/FileStat/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDirectory"><code><span class="field-name">isDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the file or directory specified by `path` is a directory.

If `path` is not a valid file system entry or if its destination is not
accessible, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDirectory"><code><span class="field-name">createDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a directory specified by `path`.

This method is recursive: The parent directories don't have to exist.

If the directory cannot be created, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteFile"><code><span class="field-name">deleteFile</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the file specified by `path`.

If `path` does not denote a valid file, or if that file cannot be
deleted, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteDirectory"><code><span class="field-name">deleteDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the directory specified by `path`. Only empty directories can
be deleted.

If `path` does not denote a valid directory, or if that directory cannot
be deleted, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readDirectory"><code><span class="field-name">readDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the names of all files and directories in the directory specified
by `path`. `"."` and `".."` are not included in the output.

If `path` does not denote a valid directory, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

## Private Members

<div class="signature field-method no-description" id="kind"><code><span class="field-name">kind</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="makeCompatiblePath"><code><span class="field-name">makeCompatiblePath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#makeCompatiblePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |


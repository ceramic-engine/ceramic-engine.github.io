---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: FileSystem
target: Unity
permalink: api-docs/unity/sys/FileSystem/
---

# FileSystem

<div class="type-hierarchy"><strong>sys.FileSystem</strong> (Class)</div>

This class provides information about files and directories.

If `null` is passed as a file path to any function in this class, the
result is unspecified, and may differ from target to target.

See `sys.io.File` for the complementary file API.

## Static Members

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the file or directory specified by `path` exists.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rename"><code><span class="field-name">rename</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">newPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Renames/moves the file or directory specified by `path` to `newPath`.

If `path` is not a valid file system entry, or if it is not accessible,
or if `newPath` is not accessible, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `newPath` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stat"><code><span class="field-name">stat</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/sys/FileStat/" class="type-link">FileStat</a></code><a class="header-anchor" href="#stat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `FileStat` information for the file or directory specified by
`path`.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [FileStat](/api-docs/unity/sys/FileStat/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fullPath"><code><span class="field-name">fullPath</span><span class="parenthesis">(</span><span class="arg-name">relPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#fullPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the full path of the file or directory specified by `relPath`,
which is relative to the current working directory. Symlinks will be
followed and the path will be normalized.

| Name | Type |
|------|------|
| `relPath` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDirectory"><code><span class="field-name">isDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the file or directory specified by `path` is a directory.

If `path` is not a valid file system entry or if its destination is not
accessible, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDirectory"><code><span class="field-name">createDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a directory specified by `path`.

This method is recursive: The parent directories don't have to exist.

If the directory cannot be created, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteFile"><code><span class="field-name">deleteFile</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the file specified by `path`.

If `path` does not denote a valid file, or if that file cannot be
deleted, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteDirectory"><code><span class="field-name">deleteDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes the directory specified by `path`. Only empty directories can
be deleted.

If `path` does not denote a valid directory, or if that directory cannot
be deleted, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readDirectory"><code><span class="field-name">readDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the names of all files and directories in the directory specified
by `path`. `"."` and `".."` are not included in the output.

If `path` does not denote a valid directory, an exception is thrown.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


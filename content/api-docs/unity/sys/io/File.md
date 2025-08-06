---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: File
target: Unity
permalink: api-docs/unity/sys/io/File/
---

# File

<div class="type-hierarchy"><strong>sys.io.File</strong> (Class)</div>

API for reading and writing files.

See `sys.FileSystem` for the complementary file system API.

## Static Members

<div class="signature field-method has-description" id="getContent"><code><span class="field-name">getContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the content of the file specified by `path` as a String.

If the file does not exist or can not be read, an exception is thrown.

`sys.FileSystem.exists` can be used to check for existence.

If `path` is null, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saveContent"><code><span class="field-name">saveContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores `content` in the file specified by `path`.

If the file cannot be written to, an exception is thrown.

If `path` or `content` are null, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `content` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBytes"><code><span class="field-name">getBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#getBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves the binary content of the file specified by `path`.

If the file does not exist or can not be read, an exception is thrown.

`sys.FileSystem.exists` can be used to check for existence.

If `path` is null, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saveBytes"><code><span class="field-name">saveBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores `bytes` in the file specified by `path` in binary mode.

If the file cannot be written to, an exception is thrown.

If `path` or `bytes` are null, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `bytes` | [haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">binary</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/sys/io/FileInput/" class="type-link">FileInput</a></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `FileInput` handle to the file specified by `path`.

If `binary` is true, the file is opened in binary mode. Otherwise it is
opened in non-binary mode.

If the file does not exist or can not be read, an exception is thrown.

Operations on the returned `FileInput` handle read on the opened file.

File handles should be closed via `FileInput.close` once the operation
is complete.

If `path` is null, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/unity/String/) | |
| `binary` | [Bool](/api-docs/unity/Bool/) | `true` |

| Returns |
|---------|
| [FileInput](/api-docs/unity/sys/io/FileInput/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">binary</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/sys/io/FileOutput/" class="type-link">FileOutput</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `FileOutput` handle to the file specified by `path`.

If `binary` is true, the file is opened in binary mode. Otherwise it is
opened in non-binary mode.

If the file cannot be written to, an exception is thrown.

Operations on the returned `FileOutput` handle write to the opened file.
If the file existed, its previous content is overwritten.

File handles should be closed via `FileOutput.close` once the operation
is complete.

If `path` is null, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/unity/String/) | |
| `binary` | [Bool](/api-docs/unity/Bool/) | `true` |

| Returns |
|---------|
| [FileOutput](/api-docs/unity/sys/io/FileOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">srcPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dstPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the contents of the file specified by `srcPath` to the file
specified by `dstPath`.

If the `srcPath` does not exist or cannot be read, or if the `dstPath`
file cannot be written to, an exception is thrown.

If the file at `dstPath` exists, its contents are overwritten.

If `srcPath` or `dstPath` are null, the result is unspecified.

| Name | Type |
|------|------|
| `srcPath` | [String](/api-docs/unity/String/) |
| `dstPath` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


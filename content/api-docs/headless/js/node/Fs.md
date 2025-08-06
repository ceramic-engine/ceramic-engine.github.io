---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Fs
target: Headless
permalink: api-docs/headless/js/node/Fs/
---

# Fs

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Fs.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Fs</strong> (extern class)</div>

File I/O is provided by simple wrappers around standard POSIX functions.
All the methods have asynchronous and synchronous forms.

The asynchronous form always take a completion callback as its last argument.
The arguments passed to the completion callback depend on the method,
but the first argument is always reserved for an exception.

If the operation was completed successfully, then the first argument will be null.

When using the synchronous form any exceptions are immediately thrown.
You can use try/catch to handle exceptions or allow them to bubble up.

## Static Members

<div class="signature field-var has-description" id="constants"><code><span class="field-name">constants</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsConstants/" class="type-link">FsConstants</a></code><a class="header-anchor" href="#constants"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An object containing commonly used constants for file system operations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="F_OK"><code><span class="field-name">F_OK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#F_OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mode flag for `access` and `accessSync` methods:

File is visible to the calling process.
This is useful for determining if a file exists, but says nothing about rwx permissions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="R_OK"><code><span class="field-name">R_OK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#R_OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mode flag for `access` and `accessSync` methods:

File can be read by the calling process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="W_OK"><code><span class="field-name">W_OK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#W_OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mode flag for `access` and `accessSync` methods:

File can be written by the calling process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="X_OK"><code><span class="field-name">X_OK</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#X_OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A mode flag for `access` and `accessSync` methods:

File can be executed by the calling process.
This has no effect on Windows.

<hr class="field-separator" />

<div class="signature field-method has-description" id="rename"><code><span class="field-name">rename</span><span class="parenthesis">(</span><span class="arg-name">oldPath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">newPath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous rename(2).

| Name | Type |
|------|------|
| `oldPath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `newPath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="renameSync"><code><span class="field-name">renameSync</span><span class="parenthesis">(</span><span class="arg-name">oldPath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">newPath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#renameSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous rename(2).

| Name | Type |
|------|------|
| `oldPath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `newPath` | [FsPath](/api-docs/headless/js/node/FsPath/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ftruncate"><code><span class="field-name">ftruncate</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ftruncate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous ftruncate(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `len` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ftruncateSync"><code><span class="field-name">ftruncateSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ftruncateSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous ftruncate(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `len` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="truncate"><code><span class="field-name">truncate</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#truncate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous truncate(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `len` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="truncateSync"><code><span class="field-name">truncateSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#truncateSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous truncate(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `len` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="chown"><code><span class="field-name">chown</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#chown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous chown(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="chownSync"><code><span class="field-name">chownSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#chownSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous chown(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fchown"><code><span class="field-name">fchown</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fchown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous fchown(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fchownSync"><code><span class="field-name">fchownSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fchownSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous fchown(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchown"><code><span class="field-name">lchown</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lchown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous lchown(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchownSync"><code><span class="field-name">lchownSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lchownSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous lchown(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `uid` | [Int](/api-docs/headless/Int/) |
| `gid` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="chmod"><code><span class="field-name">chmod</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#chmod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous chmod(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="chmodSync"><code><span class="field-name">chmodSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#chmodSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous chmod(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fchmod"><code><span class="field-name">fchmod</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fchmod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous fchmod(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fchmodSync"><code><span class="field-name">fchmodSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fchmodSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous fchmod(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchmod"><code><span class="field-name">lchmod</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lchmod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous lchmod(2).
Only available on Mac OS X.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lchmodSync"><code><span class="field-name">lchmodSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lchmodSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous lchmod(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stat"><code><span class="field-name">stat</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous stat(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lstat"><code><span class="field-name">lstat</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lstat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous lstat(2).

lstat() is identical to stat(), except that if path is a symbolic link,
then the link itself is stat-ed, not the file that it refers to.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fstat"><code><span class="field-name">fstat</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fstat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous fstat(2).

fstat() is identical to stat(), except that the file to be stat-ed
is specified by the file descriptor fd.

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="statSync"><code><span class="field-name">statSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/Stats/" class="type-link">js.node.fs.Stats</a></code><a class="header-anchor" href="#statSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous stat(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

| Returns |
|---------|
| [js.node.fs.Stats](/api-docs/headless/js/node/fs/Stats/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lstatSync"><code><span class="field-name">lstatSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/Stats/" class="type-link">js.node.fs.Stats</a></code><a class="header-anchor" href="#lstatSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous lstat(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

| Returns |
|---------|
| [js.node.fs.Stats](/api-docs/headless/js/node/fs/Stats/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fstatSync"><code><span class="field-name">fstatSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/Stats/" class="type-link">js.node.fs.Stats</a></code><a class="header-anchor" href="#fstatSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous fstat(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [js.node.fs.Stats](/api-docs/headless/js/node/fs/Stats/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="link"><code><span class="field-name">link</span><span class="parenthesis">(</span><span class="arg-name">srcpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">dstpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#link"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous link(2).

| Name | Type |
|------|------|
| `srcpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `dstpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="linkSync"><code><span class="field-name">linkSync</span><span class="parenthesis">(</span><span class="arg-name">srcpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">dstpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#linkSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous link(2).

| Name | Type |
|------|------|
| `srcpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `dstpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="symlink"><code><span class="field-name">symlink</span><span class="parenthesis">(</span><span class="arg-name">srcpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">dstpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/SymlinkType/" class="type-link">SymlinkType</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#symlink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous symlink(2).

The `type` argument can be set to 'dir', 'file', or 'junction' (default is 'file')
and is only available on Windows (ignored on other platforms). Note that Windows junction
points require the destination path to be absolute. When using 'junction', the destination
argument will automatically be normalized to absolute path.

| Name | Type |
|------|------|
| `srcpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `dstpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `type` | [SymlinkType](/api-docs/headless/js/node/SymlinkType/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="symlinkSync"><code><span class="field-name">symlinkSync</span><span class="parenthesis">(</span><span class="arg-name">srcpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">dstpath</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/SymlinkType/" class="type-link">SymlinkType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#symlinkSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous symlink(2).

| Name | Type |
|------|------|
| `srcpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `dstpath` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `type` | [SymlinkType](/api-docs/headless/js/node/SymlinkType/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readlink"><code><span class="field-name">readlink</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readlink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous readlink(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readlinkSync"><code><span class="field-name">readlinkSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#readlinkSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous readlink(2).
Returns the symbolic link's string value.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="realpath"><code><span class="field-name">realpath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#realpath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous realpath(2).

The callback gets two arguments (err, resolvedPath).

May use process.cwd to resolve relative paths.

`cache` is an object literal of mapped paths that can be used to force a specific path resolution
or avoid additional `stat` calls for known real paths.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `cache` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[String](/api-docs/headless/String/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="realpathSync"><code><span class="field-name">realpathSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">cache</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#realpathSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous realpath(2).
Returns the resolved path.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `cache` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[String](/api-docs/headless/String/)> |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unlink"><code><span class="field-name">unlink</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unlink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous unlink(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unlinkSync"><code><span class="field-name">unlinkSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unlinkSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous unlink(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rmdir"><code><span class="field-name">rmdir</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsRmdirOptions/" class="type-link">FsRmdirOptions</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rmdir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous rmdir(2).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `options` | [FsRmdirOptions](/api-docs/headless/js/node/FsRmdirOptions/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rmdirSync"><code><span class="field-name">rmdirSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/FsRmdirOptions/" class="type-link">FsRmdirOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rmdirSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous rmdir(2).

| Name | Type | Default |
|------|------|---------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `options` | [Null](/api-docs/headless/Null/)<[FsRmdirOptions](/api-docs/headless/js/node/FsRmdirOptions/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mkdir"><code><span class="field-name">mkdir</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mkdir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous mkdir(2).
`mode` defaults to 0777.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mkdirSync"><code><span class="field-name">mkdirSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mkdirSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous mkdir(2).

| Name | Type | Default |
|------|------|---------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `mode` | [Null](/api-docs/headless/Null/)<[FsMode](/api-docs/headless/js/node/FsMode/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mkdtemp"><code><span class="field-name">mkdtemp</span><span class="parenthesis">(</span><span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mkdtemp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a unique temporary directory.

Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

The created folder path is passed as a string to the `callback`'s second parameter.

| Name | Type |
|------|------|
| `prefix` | [String](/api-docs/headless/String/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="mkdtempSync"><code><span class="field-name">mkdtempSync</span><span class="parenthesis">(</span><span class="arg-name">template</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#mkdtempSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The synchronous version of `mkdtemp`.

Returns the created folder path.

| Name | Type |
|------|------|
| `template` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readdir"><code><span class="field-name">readdir</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readdir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous readdir(3).
Reads the contents of a directory.

The callback gets two arguments (err, files) where files is an array of the
names of the files in the directory excluding '.' and '..'.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readdirSync"><code><span class="field-name">readdirSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readdirSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous readdir(3).
Returns an array of filenames excluding '.' and '..'.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous close(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="closeSync"><code><span class="field-name">closeSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closeSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous close(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsOpenFlag/" class="type-link">FsOpenFlag</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous file open. See open(2).

See `FsOpenFlag` for description of possible `flags`.

`mode` sets the file mode (permission and sticky bits), but only if the file was created.
It defaults to 0666, readable and writeable.

The `callback` gets two arguments (err, fd).

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `flags` | [FsOpenFlag](/api-docs/headless/js/node/FsOpenFlag/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="openSync"><code><span class="field-name">openSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsOpenFlag/" class="type-link">FsOpenFlag</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsMode/" class="type-link">FsMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#openSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of open().

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `flags` | [FsOpenFlag](/api-docs/headless/js/node/FsOpenFlag/) |
| `mode` | [FsMode](/api-docs/headless/js/node/FsMode/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="utimes"><code><span class="field-name">utimes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">atime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">mtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#utimes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change file timestamps of the file referenced by the supplied path.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `atime` | [Date](/api-docs/headless/Date/) |
| `mtime` | [Date](/api-docs/headless/Date/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="utimesSync"><code><span class="field-name">utimesSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">atime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">mtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#utimesSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change file timestamps of the file referenced by the supplied path.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `atime` | [Date](/api-docs/headless/Date/) |
| `mtime` | [Date](/api-docs/headless/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="futimes"><code><span class="field-name">futimes</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">atime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">mtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#futimes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change the file timestamps of a file referenced by the supplied file descriptor.

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `atime` | [Date](/api-docs/headless/Date/) |
| `mtime` | [Date](/api-docs/headless/Date/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="futimesSync"><code><span class="field-name">futimesSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">atime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="operator">,</span> <span class="arg-name">mtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#futimesSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change the file timestamps of a file referenced by the supplied file descriptor.

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `atime` | [Date](/api-docs/headless/Date/) |
| `mtime` | [Date](/api-docs/headless/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fsync"><code><span class="field-name">fsync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fsync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous fsync(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fsyncSync"><code><span class="field-name">fsyncSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fsyncSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous fsync(2).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Documentation for the overloads with the `buffer` argument:

Write `buffer` to the file specified by `fd`.

`offset` and `length` determine the part of the `buffer` to be written.

`position` refers to the offset from the beginning of the file where this data should be written.
If position is null, the data will be written at the current position. See pwrite(2).

The `callback` will be given three arguments (err, written, buffer)
where `written` specifies how many bytes were written from `buffer`.

---

Documentation for the overloads with the `data` argument:

Write `data` to the file specified by `fd`. If `data` is not a `Buffer` instance then
the value will be coerced to a string.

`position` refers to the offset from the beginning of the file where this data should be written.
If omitted, the data will be written at the current position. See pwrite(2).

`encoding` is the expected string encoding.

The `callback` will receive the arguments (err, written, string) where written specifies how many bytes
the passed string required to be written. Note that bytes written is not the same as string characters.
See `Buffer.byteLength`.

Unlike when writing `buffer`, the entire string must be written. No substring may be specified.
This is because the byte offset of the resulting data may not be the same as the string offset.

---

Common notes:

Note that it is unsafe to use `write` multiple times on the same file without waiting for the callback.
For this scenario, `createWriteStream` is strongly recommended.

On Linux, positional writes don't work when the file is opened in append mode. The kernel ignores the position
argument and always appends the data to the end of the file.

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `buffer` | [Buffer](/api-docs/headless/js/node/Buffer/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `length` | [Int](/api-docs/headless/Int/) |
| `position` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeSync"><code><span class="field-name">writeSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writeSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `write`. Returns the number of bytes written.

| Name | Type | Default |
|------|------|---------|
| `fd` | [Int](/api-docs/headless/Int/) | |
| `buffer` | [Buffer](/api-docs/headless/js/node/Buffer/) | |
| `offset` | [Int](/api-docs/headless/Int/) | |
| `length` | [Int](/api-docs/headless/Int/) | |
| `position` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read data from the file specified by `fd`.

`buffer` is the buffer that the data will be written to.

`offset` is the offset in the `buffer` to start writing at.

`length` is an integer specifying the number of bytes to read.

`position` is an integer specifying where to begin reading from in the file.
If position is null, data will be read from the current file position.

The `callback` is given the three arguments, (err, bytesRead, buffer).

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `buffer` | [Buffer](/api-docs/headless/js/node/Buffer/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `length` | [Int](/api-docs/headless/Int/) |
| `position` | [Null](/api-docs/headless/Null/)<[Int](/api-docs/headless/Int/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readSync"><code><span class="field-name">readSync</span><span class="parenthesis">(</span><span class="arg-name">fd</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `read`. Returns the number of bytes read.

| Name | Type |
|------|------|
| `fd` | [Int](/api-docs/headless/Int/) |
| `buffer` | [Buffer](/api-docs/headless/js/node/Buffer/) |
| `offset` | [Int](/api-docs/headless/Int/) |
| `length` | [Int](/api-docs/headless/Int/) |
| `position` | [Null](/api-docs/headless/Null/)<[Int](/api-docs/headless/Int/)> |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFile"><code><span class="field-name">readFile</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronously reads the entire contents of a file.

The `callback` is passed two arguments (err, data), where data is the contents of the file.
If no `encoding` is specified, then the raw buffer is returned.

If `options` is a string, then it specifies the encoding.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `options` | AnonStruct |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readFileSync"><code><span class="field-name">readFileSync</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#readFileSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `readFile`. Returns the contents of the filename.
If the `encoding` option is specified then this function returns a string. Otherwise it returns a buffer.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `options` | AnonStruct |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFile"><code><span class="field-name">writeFile</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/FsWriteFileOptions/" class="type-link">FsWriteFileOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronously writes data to a file, replacing the file if it already exists.

`data` can be a string or a buffer.

The encoding option is ignored if data is a buffer. It defaults to 'utf8'.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `data` | [String](/api-docs/headless/String/) |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [FsWriteFileOptions](/api-docs/headless/js/node/FsWriteFileOptions/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeFileSync"><code><span class="field-name">writeFileSync</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/FsWriteFileOptions/" class="type-link">FsWriteFileOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFileSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The synchronous version of `writeFile`.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `data` | [String](/api-docs/headless/String/) |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [FsWriteFileOptions](/api-docs/headless/js/node/FsWriteFileOptions/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendFile"><code><span class="field-name">appendFile</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/FsWriteFileOptions/" class="type-link">FsWriteFileOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#appendFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronously append data to a file, creating the file if it not yet exists.
`data` can be a string or a buffer.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `data` | [String](/api-docs/headless/String/) |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [FsWriteFileOptions](/api-docs/headless/js/node/FsWriteFileOptions/)> |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="appendFileSync"><code><span class="field-name">appendFileSync</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/FsWriteFileOptions/" class="type-link">FsWriteFileOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#appendFileSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The synchronous version of `appendFile`.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `data` | [String](/api-docs/headless/String/) |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [FsWriteFileOptions](/api-docs/headless/js/node/FsWriteFileOptions/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="watchFile"><code><span class="field-name">watchFile</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsWatchFileOptions/" class="type-link">FsWatchFileOptions</a><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#watchFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unstable. Use `watch` instead, if possible.

Watch for changes on `filename`.
The callback `listener` will be called each time the file is accessed.

The `options` if provided should be an object containing two members:
- `persistent` indicates whether the process should continue to run as long as files are being watched.
- `interval` indicates how often the target should be polled, in milliseconds.
The default is { persistent: true, interval: 5007 }.

The `listener` gets two arguments: the current stat object and the previous stat object.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `options` | [FsWatchFileOptions](/api-docs/headless/js/node/FsWatchFileOptions/) |
| `listener` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unwatchFile"><code><span class="field-name">unwatchFile</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unwatchFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unstable. Use `watch` instead, if possible.

Stop watching for changes on filename.
If `listener` is specified, only that particular listener is removed.
Otherwise, all listeners are removed and you have effectively stopped watching filename.
Calling `unwatchFile` with a `filename` that is not being watched is a no-op, not an error.

| Name | Type | Default |
|------|------|---------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `listener` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="watch"><code><span class="field-name">watch</span><span class="parenthesis">(</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/FSWatcher/" class="type-link">js.node.fs.FSWatcher</a></code><a class="header-anchor" href="#watch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Watch for changes on `filename`, where filename is either a file or a directory.

`persistent` indicates whether the process should continue to run as long as files are being watched. Default is `true`.

The `listener` callback gets two arguments (event, filename). event is either 'rename' or 'change', and filename
is the name of the file which triggered the event.

| Name | Type |
|------|------|
| `filename` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `listener` | Function |

| Returns |
|---------|
| [js.node.fs.FSWatcher](/api-docs/headless/js/node/fs/FSWatcher/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Test whether or not the given `path` exists by checking with the file system.
Then call the `callback` argument with either `true` or `false`.

`exists` is an anachronism and exists only for historical reasons.
There should almost never be a reason to use it in your own code.

In particular, checking if a file exists before opening it is an anti-pattern that leaves you vulnerable to race conditions:
another process may remove the file between the calls to `exists` and `open`.

Just open the file and handle the error when it's not there.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="existsSync"><code><span class="field-name">existsSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#existsSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `exists`.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="access"><code><span class="field-name">access</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#access"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests a user's permissions for the file or directory specified by `path`.

The `mode` argument is an optional integer that specifies the accessibility checks to be performed.
The following constants define the possible values of `mode`. It is possible to create a mask consisting
of the bitwise OR of two or more values.

`Fs.constants.F_OK` - path is visible to the calling process. This is useful for determining if a file exists,
but says nothing about `rwx` permissions. Default if no `mode` is specified.
`Fs.constants.R_OK` - path can be read by the calling process.
`Fs.constants.W_OK` - path can be written by the calling process.
`Fs.constants.X_OK` - path can be executed by the calling process.
This has no effect on Windows (will behave like `Fs.constants.F_OK`).

The final argument, `callback`, is a callback function that is invoked with a possible error argument.
If any of the accessibility checks fail, the error argument will be populated.

| Name | Type |
|------|------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) |
| `mode` | [Int](/api-docs/headless/Int/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="accessSync"><code><span class="field-name">accessSync</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#accessSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `access`.
This throws if any accessibility checks fail, and does nothing otherwise.

| Name | Type | Default |
|------|------|---------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `mode` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createReadStream"><code><span class="field-name">createReadStream</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/FsCreateReadStreamOptions/" class="type-link">FsCreateReadStreamOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/ReadStream/" class="type-link">js.node.fs.ReadStream</a></code><a class="header-anchor" href="#createReadStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new ReadStream object (See Readable Stream).

`options` can include `start` and `end` values to read a range of bytes from the file instead of the entire file.
Both `start` and `end` are inclusive and start at 0.

The encoding can be 'utf8', 'ascii', or 'base64'.

If `autoClose` is `false`, then the file descriptor won't be closed, even if there's an error.
It is your responsiblity to close it and make sure there's no file descriptor leak.
If `autoClose` is set to true (default behavior), on error or end the file descriptor will be closed automatically.

| Name | Type | Default |
|------|------|---------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [FsCreateReadStreamOptions](/api-docs/headless/js/node/FsCreateReadStreamOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.fs.ReadStream](/api-docs/headless/js/node/fs/ReadStream/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createWriteStream"><code><span class="field-name">createWriteStream</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">FsPath</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/FsCreateWriteStreamOptions/" class="type-link">FsCreateWriteStreamOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/fs/WriteStream/" class="type-link">js.node.fs.WriteStream</a></code><a class="header-anchor" href="#createWriteStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new WriteStream object (See Writable Stream).

`options` may also include a `start` option to allow writing data at some position past the beginning of the file.

Modifying a file rather than replacing it may require a flags mode of r+ rather than the default mode w.

| Name | Type | Default |
|------|------|---------|
| `path` | [FsPath](/api-docs/headless/js/node/FsPath/) | |
| `options` | [Null](/api-docs/headless/Null/)<[FsCreateWriteStreamOptions](/api-docs/headless/js/node/FsCreateWriteStreamOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.node.fs.WriteStream](/api-docs/headless/js/node/fs/WriteStream/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "fs" |


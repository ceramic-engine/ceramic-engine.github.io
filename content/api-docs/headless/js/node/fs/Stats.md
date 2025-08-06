---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Stats
target: Headless
permalink: api-docs/headless/js/node/fs/Stats/
---

# Stats

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/fs/Stats.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.fs.Stats</strong> (extern class)</div>

Objects returned from `Fs.stat`, `Fs.lstat` and `Fs.fstat` and their synchronous counterparts are of this type.

## Instance Members

<div class="signature field-var no-description" id="dev"><code><span class="field-name">dev</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ino"><code><span class="field-name">ino</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ino"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mode"><code><span class="field-name">mode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#mode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nlink"><code><span class="field-name">nlink</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nlink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="uid"><code><span class="field-name">uid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="gid"><code><span class="field-name">gid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rdev"><code><span class="field-name">rdev</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rdev"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="blksize"><code><span class="field-name">blksize</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#blksize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="blocks"><code><span class="field-name">blocks</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#blocks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="atime"><code><span class="field-name">atime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a></code><a class="header-anchor" href="#atime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

"Access Time" - Time when file data last accessed.

Changed by the mknod(2), utimes(2), and read(2) system calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mtime"><code><span class="field-name">mtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a></code><a class="header-anchor" href="#mtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

"Modified Time" - Time when file data last modified.

Changed by the mknod(2), utimes(2), and write(2) system calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ctime"><code><span class="field-name">ctime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a></code><a class="header-anchor" href="#ctime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

"Change Time" - Time when file status was last changed (inode data modification).

Changed by the chmod(2), chown(2), link(2), mknod(2), rename(2), unlink(2), utimes(2), read(2), and write(2) system calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="birthtime"><code><span class="field-name">birthtime</span><span class="operator">:</span> <a href="/api-docs/headless/Date/" class="type-link">Date</a></code><a class="header-anchor" href="#birthtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

"Birth Time" - Time of file creation. Set once when the file is created.

On filesystems where birthtime is not available, this field may instead hold either the ctime or 1970-01-01T00:00Z (ie, unix epoch timestamp 0).
Note that this value may be greater than `atime` or `mtime` in this case. On Darwin and other FreeBSD variants,
also set if the `atime` is explicitly set to an earlier value than the current birthtime using the utimes(2) system call.

<hr class="field-separator" />

<div class="signature field-method no-description" id="isFile"><code><span class="field-name">isFile</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isDirectory"><code><span class="field-name">isDirectory</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isBlockDevice"><code><span class="field-name">isBlockDevice</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBlockDevice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isCharacterDevice"><code><span class="field-name">isCharacterDevice</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCharacterDevice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isSymbolicLink"><code><span class="field-name">isSymbolicLink</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSymbolicLink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Only valid with `Fs.lstat`.
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isFIFO"><code><span class="field-name">isFIFO</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFIFO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSocket"><code><span class="field-name">isSocket</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSocket"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |


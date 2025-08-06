---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: FsOpenFlag
target: Headless
permalink: api-docs/headless/js/node/FsOpenFlag/
---

# FsOpenFlag

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Fs.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.FsOpenFlag</strong> (Abstract)</div>

Enumeration of possible flags for opening file.

The exclusive flag 'x' (O_EXCL flag in open(2)) ensures that path is newly created.
On POSIX systems, path is considered to exist even if it is a symlink to a non-existent file.
The exclusive flag may or may not work with network file systems.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to the end of the file.

## Type Conversions

**From:**
- `[String](/api-docs/headless/String/)`

**To:**
- `[String](/api-docs/headless/String/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |


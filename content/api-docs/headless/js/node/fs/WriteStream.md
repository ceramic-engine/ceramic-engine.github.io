---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: WriteStream
target: Headless
permalink: api-docs/headless/js/node/fs/WriteStream/
---

# WriteStream

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/fs/WriteStream.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <a href="/api-docs/headless/js/node/stream/Writable/">js.node.stream.Writable</a> → <strong>js.node.fs.WriteStream</strong> (extern class)</div>

Writable file stream.

## Instance Members

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">js.node.FsPath</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path to the file the stream is writing to as specified in the first argument to `Fs.createWriteStream`.
If path is passed as a string, then writeStream.path will be a string.
If path is passed as a Buffer, then writeStream.path will be a Buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bytesWritten"><code><span class="field-name">bytesWritten</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bytesWritten"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of bytes written so far.
Does not include data that is still queued for writing.


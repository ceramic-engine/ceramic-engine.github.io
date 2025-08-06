---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: ReadStream
target: Headless
permalink: api-docs/headless/js/node/fs/ReadStream/
---

# ReadStream

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/fs/ReadStream.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <a href="/api-docs/headless/js/node/stream/Readable/">js.node.stream.Readable</a> → <strong>js.node.fs.ReadStream</strong> (extern class)</div>

Readable file stream.

## Instance Members

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/FsPath/" class="type-link">js.node.FsPath</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path to the file the stream is reading from as specified in the first argument to `Fs.createReadStream`.

If path is passed as a string, then readStream.path will be a string.
If path is passed as a Buffer, then readStream.path will be a Buffer.


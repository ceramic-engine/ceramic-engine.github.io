---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Readable
target: Headless
permalink: api-docs/headless/js/node/stream/Readable/
---

# Readable

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/stream/Readable.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <strong>js.node.stream.Readable</strong> (extern class) → <a href="/api-docs/headless/js/node/fs/ReadStream/">js.node.fs.ReadStream</a>, <a href="/api-docs/headless/js/node/stream/Duplex/">Duplex</a></div>

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_class_stream_readable</div>


## Instance Members

<div class="signature field-var has-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` after `readable.destroy()` has been called.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_destroyed</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readable"><code><span class="field-name">readable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if it is safe to call `readable.read()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readable</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readableEncoding"><code><span class="field-name">readableEncoding</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readableEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Getter for the property `encoding` of a given `Readable` stream.
The `encoding` property can be set using the `readable.setEncoding()` method.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readableencoding</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readableEnded"><code><span class="field-name">readableEnded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readableEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Becomes `true` when `'end'` event is emitted.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readableended</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readableHighWaterMark"><code><span class="field-name">readableHighWaterMark</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readableHighWaterMark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of `highWaterMark` passed when constructing this `Readable`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readablehighwatermark</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readableLength"><code><span class="field-name">readableLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readableLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property contains the number of bytes (or objects) in the queue ready to be read.
The value provides introspection data regarding the status of the `highWaterMark`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readablelength</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="readableObjectMode"><code><span class="field-name">readableObjectMode</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readableObjectMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Getter for the property `objectMode` of a given `Readable` stream.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_readableobjectmode</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="isTTY"><code><span class="field-name">isTTY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Terminal read streams (i.e. process.stdin) have this property set to true.
It is false for any other read streams.

<div class="see"><strong>See:</strong> https://nodejs.org/api/tty.html#tty_readstream_istty</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Error/" class="type-link">js.lib.Error</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Readable/TSelf/" class="type-link">js.node.stream.Readable.TSelf</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event unless `emitClose` is set in `false`.
After this call, the readable stream will release any internal resources and subsequent calls to `push()` will be ignored.
Implementors should not override this method, but instead implement `readable._destroy()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_destroy_error</div>


| Name | Type | Default |
|------|------|---------|
| `error` | [js.lib.Error](/api-docs/headless/js/lib/Error/) | *(optional)* |

| Returns |
|---------|
| [js.node.stream.Readable.TSelf](/api-docs/headless/js/node/stream/Readable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isPaused"><code><span class="field-name">isPaused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPaused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_ispaused</div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Readable/TSelf/" class="type-link">js.node.stream.Readable.TSelf</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.pause()` method will cause a stream in flowing mode to stop emitting `'data'` events,
switching out of flowing mode. Any data that becomes available will remain in the internal buffer.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_pause</div>

| Returns |
|---------|
| [js.node.stream.Readable.TSelf](/api-docs/headless/js/node/stream/Readable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pipe"><code><span class="field-name">pipe</span><span class="parenthesis">(</span><span class="arg-name">destination</span><span class="operator">:</span> <span class="type-name">pipe.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">pipe.T</span></code><a class="header-anchor" href="#pipe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.pipe()` method attaches a `Writable` stream to the `readable`,
causing it to switch automatically into flowing mode and push all of its data to the attached `Writable`.
The flow of data will be automatically managed so that the destination `Writable` stream
is not overwhelmed by a faster `Readable` stream.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options</div>


| Name | Type | Default |
|------|------|---------|
| `destination` | pipe.T | |
| `options` | AnonStruct | *(optional)* |

| Returns |
|---------|
| pipe.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.read()` method pulls some data out of the internal buffer and returns it.
If no data available to be read, `null` is returned. By default,
the data will be returned as a `Buffer` object unless an encoding has been specified using
the `readable.setEncoding()` method or the stream is operating in object mode.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_read_size</div>


| Name | Type | Default |
|------|------|---------|
| `size` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Readable/TSelf/" class="type-link">js.node.stream.Readable.TSelf</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.resume()` method causes an explicitly paused `Readable` stream to resume emitting `'data'` events,
switching the stream into flowing mode.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_resume</div>

| Returns |
|---------|
| [js.node.stream.Readable.TSelf](/api-docs/headless/js/node/stream/Readable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setEncoding"><code><span class="field-name">setEncoding</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Readable/TSelf/" class="type-link">js.node.stream.Readable.TSelf</a></code><a class="header-anchor" href="#setEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.setEncoding()` method sets the character encoding for data read from the `Readable` stream.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_setencoding_encoding</div>


| Name | Type |
|------|------|
| `encoding` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [js.node.stream.Readable.TSelf](/api-docs/headless/js/node/stream/Readable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unpipe"><code><span class="field-name">unpipe</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">destination</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">IWritable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Readable/TSelf/" class="type-link">js.node.stream.Readable.TSelf</a></code><a class="header-anchor" href="#unpipe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.unpipe()` method detaches a `Writable` stream previously attached using the `stream.pipe()` method.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_unpipe_destination</div>


| Name | Type | Default |
|------|------|---------|
| `destination` | [IWritable](/api-docs/headless/js/node/stream/IWritable/) | *(optional)* |

| Returns |
|---------|
| [js.node.stream.Readable.TSelf](/api-docs/headless/js/node/stream/Readable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unshift"><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Passing `chunk` as `null` signals the end of the stream (EOF), after which no more data can be written.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_unshift_chunk_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)> | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="wrap"><code><span class="field-name">wrap</span><span class="parenthesis">(</span><span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">IReadable</a></code><a class="header-anchor" href="#wrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prior to Node.js 0.10, streams did not implement the entire `stream` module API as it is currently defined.
(See Compatibility for more information.)

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_wrap_stream</div>


| Name | Type |
|------|------|
| `stream` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `readable.push()` method is intended be called only by `Readable` implementers,
and only from within the `readable._read()` method.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_readable_push_chunk_encoding</div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Null](/api-docs/headless/Null/)<[Dynamic](/api-docs/headless/Dynamic/)> | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/stream/ReadableNewOptions/" class="type-link">ReadableNewOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_new_stream_readable_options</div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/headless/Null/)<[ReadableNewOptions](/api-docs/headless/js/node/stream/ReadableNewOptions/)> | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "stream", "Readable" |


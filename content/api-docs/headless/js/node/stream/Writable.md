---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Writable
target: Headless
permalink: api-docs/headless/js/node/stream/Writable/
---

# Writable

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/stream/Writable.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a> → <strong>js.node.stream.Writable</strong> (extern class) → <a href="/api-docs/headless/js/node/fs/WriteStream/">js.node.fs.WriteStream</a></div>

The Writable stream interface is an abstraction for a destination that you are writing data to.

Examples of writable streams include:

- http requests, on the client
- http responses, on the server
- fs write streams
- zlib streams
- crypto streams
- tcp sockets
- child process stdin
- process.stdout, process.stderr

## Instance Members

<div class="signature field-var has-description" id="destroyed"><code><span class="field-name">destroyed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` after `writable.destroy()` has been called.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_destroyed</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writable"><code><span class="field-name">writable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` if it is safe to call `writable.write()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writable</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writableEnded"><code><span class="field-name">writableEnded</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use
`writable.writableFinished` instead.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writableended</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writableFinished"><code><span class="field-name">writableFinished</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableFinished"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is set to `true` immediately before the 'finish' event is emitted.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writablefinished</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writablehighWaterMark"><code><span class="field-name">writablehighWaterMark</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writablehighWaterMark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return the value of `highWaterMark` passed when constructing this `Writable`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writablehighwatermark</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writableLength"><code><span class="field-name">writableLength</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#writableLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This property contains the number of bytes (or objects) in the queue ready to be written.
The value provides introspection data regarding the status of the `highWaterMark`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writablelength</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="writableObjectMode"><code><span class="field-name">writableObjectMode</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#writableObjectMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Getter for the property `objectMode` of a given `Writable` stream.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_writableobjectmode</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="isTTY"><code><span class="field-name">isTTY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Terminal write streams (i.e. process.stdout) have this property set to true.
It is false for any other write streams.

<div class="see"><strong>See:</strong> https://nodejs.org/api/tty.html#tty_writestream_istty</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="cork"><code><span class="field-name">cork</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cork"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the `stream.uncork()` or `stream.end()` methods are called.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_cork</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Error/" class="type-link">js.lib.Error</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Writable/TSelf/" class="type-link">js.node.stream.Writable.TSelf</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event unless `emitClose` is set in `false`.
After this call, the writable stream has ended and subsequent calls to `write()` or `end()` will result in an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to `write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for the `'drain'` event before destroying the stream.
Implementors should not override this method, but instead implement `writable._destroy()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_destroy_error</div>


| Name | Type | Default |
|------|------|---------|
| `error` | [js.lib.Error](/api-docs/headless/js/lib/Error/) | *(optional)* |

| Returns |
|---------|
| [js.node.stream.Writable.TSelf](/api-docs/headless/js/node/stream/Writable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">,</span> <span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calling the `writable.end()` method signals that no more data will be written to the Writable.
The optional `chunk` and `encoding` arguments allow one final additional chunk of data to be written immediately before closing the stream.
If provided, the optional `callback` function is attached as a listener for the 'finish' event.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_end_chunk_encoding_callback</div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |
| `callback` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<Function, Function> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDefaultEncoding"><code><span class="field-name">setDefaultEncoding</span><span class="parenthesis">(</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/Writable/TSelf/" class="type-link">js.node.stream.Writable.TSelf</a></code><a class="header-anchor" href="#setDefaultEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `writable.setDefaultEncoding()` method sets the default `encoding` for a Writable stream.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_setdefaultencoding_encoding</div>


| Name | Type |
|------|------|
| `encoding` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [js.node.stream.Writable.TSelf](/api-docs/headless/js/node/stream/Writable/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uncork"><code><span class="field-name">uncork</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uncork"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `writable.uncork()` method flushes all data buffered since `stream.cork()` was called.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_uncork</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">chunk</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">encoding</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">,</span> <span class="type-name">Function</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `writable.write()` method writes some data to the stream, and calls the supplied `callback` once the data has been fully handled.
If an error occurs, the `callback` may or may not be called with the error as its first argument.
To reliably detect write errors, add a listener for the `'error'` event.

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback</div>


| Name | Type | Default |
|------|------|---------|
| `chunk` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `encoding` | [String](/api-docs/headless/String/) | *(optional)* |
| `callback` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<Function, Function> | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/WritableNewOptionsAdapter/" class="type-link">WritableNewOptionsAdapter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options</div>


| Name | Type | Default |
|------|------|---------|
| `options` | [WritableNewOptionsAdapter](/api-docs/headless/js/node/stream/WritableNewOptionsAdapter/) | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "stream", "Writable" |


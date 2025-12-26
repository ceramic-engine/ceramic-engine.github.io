---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Socket
target: Clay (Native)
permalink: api-docs/clay-native/sys/net/Socket/
---

# Socket

<div class="type-hierarchy"><strong>sys.net.Socket</strong> (Class) → <a href="/api-docs/clay-native/sys/ssl/Socket/">sys.ssl.Socket</a></div>

A TCP socket class : allow you to both connect to a given server and exchange messages or start your own server and wait for connections.

## Instance Members

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The stream on which you can read available data. By default the stream is blocking until the requested data is available,
use `setBlocking(false)` or `setTimeout` to prevent infinite waiting.

<hr class="field-separator" />

<div class="signature field-var has-description" id="output"><code><span class="field-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Output/" class="type-link">haxe.io.Output</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The stream on which you can send data. Please note that in case the output buffer you will block while writing the data, use `setBlocking(false)` or `setTimeout` to prevent that.

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Closes the socket : make sure to properly close all your sockets or you will crash when you run out of file descriptors.

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write the whole data to the socket output.

Note*: this is **not** meant to be used together with `setBlocking(false)`, as
`haxe.io.Error.Blocked` may be thrown mid-write with no indication of how many bytes have been written.
`output.writeBytes()` should be used instead as it returns this information.

| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="connect"><code><span class="field-name">connect</span><span class="parenthesis">(</span><span class="arg-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/net/Host/" class="type-link">Host</a><span class="operator">,</span> <span class="arg-name">port</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#connect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Connect to the given server host/port. Throw an exception in case we couldn't successfully connect.

| Name | Type |
|------|------|
| `host` | [Host](/api-docs/clay-native/sys/net/Host/) |
| `port` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="arg-name">read</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">write</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shutdown the socket, either for reading or writing.

| Name | Type |
|------|------|
| `read` | [Bool](/api-docs/clay-native/Bool/) |
| `write` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTimeout"><code><span class="field-name">setTimeout</span><span class="parenthesis">(</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives a timeout (in seconds) after which blocking socket operations (such as reading and writing) will abort and throw an exception.

| Name | Type |
|------|------|
| `timeout` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setBlocking"><code><span class="field-name">setBlocking</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlocking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Change the blocking mode of the socket. A blocking socket is the default behavior. A non-blocking socket will abort blocking operations immediately by throwing a haxe.io.Error.Blocked value.

| Name | Type |
|------|------|
| `b` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFastSend"><code><span class="field-name">setFastSend</span><span class="parenthesis">(</span><span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFastSend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows the socket to immediately send the data when written to its output : this will cause less ping but might increase the number of packets / data size, especially when doing a lot of small writes.

| Name | Type |
|------|------|
| `b` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new unconnected socket.

## Private Members

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


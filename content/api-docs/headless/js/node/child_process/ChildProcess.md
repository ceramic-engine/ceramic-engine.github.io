---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: ChildProcess
target: Headless
permalink: api-docs/headless/js/node/child_process/ChildProcess/
---

# ChildProcess

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/child_process/ChildProcess.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <strong>js.node.child_process.ChildProcess</strong> (extern class)</div>

An object representing a child process.

The `ChildProcess` class is not intended to be used directly. Use the spawn() or fork() module methods
to create a `ChildProcess` instance.

## Instance Members

<div class="signature field-var has-description" id="stdin"><code><span class="field-name">stdin</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a></code><a class="header-anchor" href="#stdin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Writable Stream that represents the child process's stdin.
Closing this stream via `end` often causes the child process to terminate.

If the child stdio streams are shared with the parent, then this will not be set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stdout"><code><span class="field-name">stdout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">js.node.stream.IReadable</a></code><a class="header-anchor" href="#stdout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Readable Stream that represents the child process's stdout.

If the child stdio streams are shared with the parent, then this will not be set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stderr"><code><span class="field-name">stderr</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">js.node.stream.IReadable</a></code><a class="header-anchor" href="#stderr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Readable Stream that represents the child process's stderr.

If the child stdio streams are shared with the parent, then this will not be set.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stdio"><code><span class="field-name">stdio</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/IStream/" class="type-link">js.node.IStream</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stdio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent end of the stdio pipes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pid"><code><span class="field-name">pid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The PID of the child process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="connected"><code><span class="field-name">connected</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#connected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to false after `disconnect' is called
If `connected` is false, it is no longer possible to send messages.

<hr class="field-separator" />

<div class="signature field-method has-description" id="kill"><code><span class="field-name">kill</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">signal</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#kill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Send a signal to the child process.

If no argument is given, the process will be sent 'SIGTERM'.
See signal(7) for a list of available signals.

May emit an 'error' event when the signal cannot be delivered.

Sending a signal to a child process that has already exited is not an error
but may have unforeseen consequences: if the PID (the process ID) has been reassigned to another process,
the signal will be delivered to that process instead. What happens next is anyone's guess.

Note that while the function is called `kill`, the signal delivered to the child process may not actually kill it.
`kill` really just sends a signal to a process. See kill(2)

| Name | Type | Default |
|------|------|---------|
| `signal` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="send"><code><span class="field-name">send</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#send"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When using `fork` you can write to the child using `send` and messages are received by a 'message' event on the child.

In the child the `Process` object will have a `send` method, and process will emit objects each time it receives
a message on its channel.

Please note that the `send` method on both the parent and child are synchronous - sending large chunks of data is
not advised (pipes can be used instead, see `spawn`).

There is a special case when sending a {cmd: 'NODE_foo'} `message`. All messages containing a `NODE_` prefix in
its cmd property will not be emitted in the 'message' event, since they are internal messages used by node core.
Messages containing the prefix are emitted in the 'internalMessage' event, you should by all means avoid using
this feature, it is subject to change without notice.

The `sendHandle` option is for sending a TCP server or socket object to another process.
The child will receive the object as its second argument to the message event.

The `callback` option is a function that is invoked after the message is sent but before the target may have received it.
It is called with a single argument: null on success, or an `Error` object on failure.

Emits an 'error' event if the message cannot be sent, for example because the child process has already exited.

Returns true under normal circumstances or false when the backlog of unsent messages exceeds a threshold that
makes it unwise to send more. Use the callback mechanism to implement flow control.

| Name | Type | Default |
|------|------|---------|
| `message` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disconnect"><code><span class="field-name">disconnect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disconnect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the IPC channel between parent and child, allowing the child to exit gracefully once there are no other
connections keeping it alive.

After calling this method the `connected` flag will be set to false in both the parent and child,
and it is no longer possible to send messages.

The 'disconnect' event will be emitted when there are no messages in the process of being received,
most likely immediately.

Note that you can also call `process.disconnect` in the child process.

<hr class="field-separator" />

<div class="signature field-method has-description" id="unref"><code><span class="field-name">unref</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

By default, the parent will wait for the detached child to exit.
To prevent the parent from waiting for a given child, use the `unref` method,
and the parent's event loop will not include the child in its reference count.


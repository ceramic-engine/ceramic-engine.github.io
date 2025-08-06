---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: EventEmitter
target: Headless
permalink: api-docs/headless/js/node/events/EventEmitter/
---

# EventEmitter

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/events/EventEmitter.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.events.EventEmitter</strong> (extern class) → <a href="/api-docs/headless/js/node/Process/">js.node.Process</a>, <a href="/api-docs/headless/js/node/Stream/">js.node.Stream</a>, <a href="/api-docs/headless/js/node/child_process/ChildProcess/">js.node.child_process.ChildProcess</a>, <a href="/api-docs/headless/js/node/fs/FSWatcher/">js.node.fs.FSWatcher</a></div>

The `EventEmitter` class is defined and exposed by the `events` module:

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_class_eventemitter</div>


## Static Members

<div class="signature field-var has-description" id="defaultMaxListeners"><code><span class="field-name">defaultMaxListeners</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#defaultMaxListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for all `EventEmitter` instances, the `EventEmitter.defaultMaxListeners`
property can be used. If this value is not a positive number, a `TypeError`
will be thrown.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_eventemitter_defaultmaxlisteners</div>


## Instance Members

<div class="signature field-method has-description" id="addListener"><code><span class="field-name">addListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">addListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">addListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#addListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias for `emitter.on(eventName, listener)`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_addlistener_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<addListener.T> |
| `listener` | addListener.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emit"><code><span class="field-name">emit</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">emit.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronously calls each of the listeners registered for the event named
`eventName`, in the order they were registered, passing the supplied arguments
to each.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_emit_eventname_args</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<emit.T> |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="eventNames"><code><span class="field-name">eventNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/lib/Symbol/" class="type-link">js.lib.Symbol</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#eventNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array listing the events for which the emitter has registered
listeners. The values in the array will be strings or `Symbol`s.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_eventnames</div>

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [js.lib.Symbol](/api-docs/headless/js/lib/Symbol/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMaxListeners"><code><span class="field-name">getMaxListeners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMaxListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to
`EventEmitter.defaultMaxListeners`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_getmaxlisteners</div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="listenerCount"><code><span class="field-name">listenerCount</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">listenerCount.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#listenerCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of listeners listening to the event named `eventName`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_listenercount_eventname</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<listenerCount.T> |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="listeners"><code><span class="field-name">listeners</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">listeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">listeners.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a copy of the array of listeners for the event named `eventName`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_listeners_eventname</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<listeners.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<listeners.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="off"><code><span class="field-name">off</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">off.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">off.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#off"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias for `emitter.removeListener()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_off_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<off.T> |
| `listener` | off.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="on"><code><span class="field-name">on</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">on.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">on.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#on"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_on_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<on.T> |
| `listener` | on.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="once"><code><span class="field-name">once</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">once.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">once.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#once"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a one-time `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_once_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<once.T> |
| `listener` | once.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prependListener"><code><span class="field-name">prependListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">prependListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">prependListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#prependListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the `listener` function to the beginning of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple
times.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<prependListener.T> |
| `listener` | prependListener.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prependOnceListener"><code><span class="field-name">prependOnceListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">prependOnceListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">prependOnceListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#prependOnceListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a one-time `listener` function for the event named `eventName` to the
beginning of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_prependoncelistener_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<prependOnceListener.T> |
| `listener` | prependOnceListener.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeAllListeners"><code><span class="field-name">removeAllListeners</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">removeAllListeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#removeAllListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all listeners, or those of the specified `eventName`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname</div>


| Name | Type | Default |
|------|------|---------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<removeAllListeners.T> | *(optional)* |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeListener"><code><span class="field-name">removeListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">removeListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">removeListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/EventEmitter/TSelf/" class="type-link">js.node.events.EventEmitter.TSelf</a></code><a class="header-anchor" href="#removeListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the specified `listener` from the listener array for the event named
`eventName`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_removelistener_eventname_listener</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<removeListener.T> |
| `listener` | removeListener.T |

| Returns |
|---------|
| [js.node.events.EventEmitter.TSelf](/api-docs/headless/js/node/events/EventEmitter/TSelf/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMaxListeners"><code><span class="field-name">setMaxListeners</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMaxListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. Obviously, not all events should be limited to just 10 listeners.
The `emitter.setMaxListeners()` method allows the limit to be modified for this
specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`)
to indicate an unlimited number of listeners.

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n</div>


| Name | Type |
|------|------|
| `n` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rawListeners"><code><span class="field-name">rawListeners</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">rawListeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">rawListeners.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#rawListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

<div class="see"><strong>See:</strong> https://nodejs.org/api/events.html#events_emitter_rawlisteners_eventname</div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<rawListeners.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<rawListeners.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "events", "EventEmitter" |


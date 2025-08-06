---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: IEventEmitter
target: Headless
permalink: api-docs/headless/js/node/events/IEventEmitter/
---

# IEventEmitter

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/events/EventEmitter.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.events.IEventEmitter</strong> (extern interface)</div>

`IEventEmitter` interface is used as "any EventEmitter".

See `EventEmitter` for actual class documentation.

## Instance Members

<div class="signature field-method no-description" id="addListener"><code><span class="field-name">addListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">addListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">addListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#addListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<addListener.T> |
| `listener` | addListener.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emit"><code><span class="field-name">emit</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">emit.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#emit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<emit.T> |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="eventNames"><code><span class="field-name">eventNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/lib/Symbol/" class="type-link">js.lib.Symbol</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#eventNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [js.lib.Symbol](/api-docs/headless/js/lib/Symbol/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMaxListeners"><code><span class="field-name">getMaxListeners</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMaxListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listenerCount"><code><span class="field-name">listenerCount</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">listenerCount.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#listenerCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<listenerCount.T> |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listeners"><code><span class="field-name">listeners</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">listeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">listeners.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#listeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<listeners.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<listeners.T> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="off"><code><span class="field-name">off</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">off.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">off.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#off"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<off.T> |
| `listener` | off.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="on"><code><span class="field-name">on</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">on.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">on.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#on"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<on.T> |
| `listener` | on.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="once"><code><span class="field-name">once</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">once.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">once.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#once"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<once.T> |
| `listener` | once.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prependListener"><code><span class="field-name">prependListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">prependListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">prependListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#prependListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<prependListener.T> |
| `listener` | prependListener.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="prependOnceListener"><code><span class="field-name">prependOnceListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">prependOnceListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">prependOnceListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#prependOnceListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<prependOnceListener.T> |
| `listener` | prependOnceListener.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeAllListeners"><code><span class="field-name">removeAllListeners</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">removeAllListeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#removeAllListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<removeAllListeners.T> | *(optional)* |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeListener"><code><span class="field-name">removeListener</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">removeListener.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <span class="type-name">removeListener.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">IEventEmitter</a></code><a class="header-anchor" href="#removeListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<removeListener.T> |
| `listener` | removeListener.T |

| Returns |
|---------|
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMaxListeners"><code><span class="field-name">setMaxListeners</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMaxListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="rawListeners"><code><span class="field-name">rawListeners</span><span class="parenthesis">(</span><span class="arg-name">eventName</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/events/Event/" class="type-link">Event</a><span class="operator">&lt;</span><span class="type-name">rawListeners.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">rawListeners.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#rawListeners"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventName` | [Event](/api-docs/headless/js/node/events/Event/)<rawListeners.T> |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<rawListeners.T> |

## Metadata

| Name | Parameters |
|------|------------|
| `:remove` | - |


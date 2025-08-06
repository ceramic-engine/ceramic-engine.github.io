---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Timers
target: Headless
permalink: api-docs/headless/js/node/Timers/
---

# Timers

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Timers.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Timers</strong> (extern class)</div>

The `timer` module exposes a global API for scheduling functions to be called at some future period of time.
Because the timer functions are globals, there is no need to call `require('timers')` to use the API.

The timer functions within Node.js implement a similar API as the timers API provided by Web Browsers
but use a different internal implementation that is built around the Node.js Event Loop.

## Static Members

<div class="signature field-method has-description" id="setImmediate"><code><span class="field-name">setImmediate</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Immediate/" class="type-link">Immediate</a></code><a class="header-anchor" href="#setImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules the "immediate" execution of the callback after I/O events' callbacks.

When multiple calls to `setImmediate()` are made, the `callback` functions are queued for execution
in the order in which they are created. The entire callback queue is processed every event loop iteration.
If an immediate timer is queued from inside an executing callback, that timer will not be triggered until
the next event loop iteration.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `util.promisify()`.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Immediate](/api-docs/headless/js/node/Immediate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInterval"><code><span class="field-name">setInterval</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">Timeout</a></code><a class="header-anchor" href="#setInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules repeated execution of `callback` every `delay` milliseconds.

When delay is larger than `2147483647` or less than `1`, the `delay` will be set to `1`.
Non-integer delays are truncated to an integer.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `util.promisify()`.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `delay` | [Int](/api-docs/headless/Int/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTimeout"><code><span class="field-name">setTimeout</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">Timeout</a></code><a class="header-anchor" href="#setTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Schedules execution of a one-time `callback` after `delay` milliseconds.

The `callback` will likely not be invoked in precisely `delay` milliseconds.
Node.js makes no guarantees about the exact timing of when callbacks will fire, nor of their ordering.
The callback will be called as close as possible to the time specified.

When delay is larger than `2147483647` or less than `1`, the delay will be set to `1`.
Non-integer delays are truncated to an integer.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `util.promisify()`.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `delay` | [Int](/api-docs/headless/Int/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearImmediate"><code><span class="field-name">clearImmediate</span><span class="parenthesis">(</span><span class="arg-name">immediate</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Immediate/" class="type-link">Immediate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels an Immediate object created by `setImmediate()`.

| Name | Type |
|------|------|
| `immediate` | [Immediate](/api-docs/headless/js/node/Immediate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearInterval"><code><span class="field-name">clearInterval</span><span class="parenthesis">(</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">Timeout</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels a Timeout object created by `setInterval()`.

| Name | Type |
|------|------|
| `timeout` | [Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearTimeout"><code><span class="field-name">clearTimeout</span><span class="parenthesis">(</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">Timeout</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancels a Timeout object created by `setTimeout()`.

| Name | Type |
|------|------|
| `timeout` | [Timeout](/api-docs/headless/js/node/Timeout/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "timers" |


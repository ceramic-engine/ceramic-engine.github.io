---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Timer
target: Clay (Web)
permalink: api-docs/clay-web/haxe/Timer/
---

# Timer

<div class="type-hierarchy"><strong>haxe.Timer</strong> (Class)</div>

The `Timer` class allows you to create asynchronous timers on platforms that
support events.

The intended usage is to create an instance of the `Timer` class with a given
interval, set its `run()` method to a custom function to be invoked and
eventually call `stop()` to stop the `Timer`.

Note that a running `Timer` may or may not prevent the program to exit
automatically when `main()` returns.

It is also possible to extend this class and override its `run()` method in
the child class.

Notice for threaded targets:
`Timer` instances require threads they were created in to run with Haxe's event loops.
Main thread of a Haxe program always contains an event loop. For other cases use
`sys.thread.Thread.createWithEventLoop` and `sys.thread.Thread.runWithEventLoop` methods.

## Static Members

<div class="signature field-method has-description" id="delay"><code><span class="field-name">delay</span><span class="parenthesis">(</span><span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">time_ms</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Timer</a></code><a class="header-anchor" href="#delay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Invokes `f` after `time_ms` milliseconds.

This is a convenience function for creating a new Timer instance with
`time_ms` as argument, binding its `run()` method to `f` and then stopping
`this` Timer upon the first invocation.

If `f` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `f` | Function |
| `time_ms` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Timer](/api-docs/clay-web/haxe/Timer/) |

## Instance Members

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops `this` Timer.

After calling this method, no additional invocations of `this.run`
will occur.

It is not possible to restart `this` Timer once stopped.

<hr class="field-separator" />

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method is invoked repeatedly on `this` Timer.

It can be overridden in a subclass, or rebound directly to a custom
function:

```haxe
var timer = new haxe.Timer(1000); // 1000ms delay
timer.run = function() { ... }
```

Once bound, it can still be rebound to different functions until `this`
Timer is stopped through a call to `this.stop`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">time_ms</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new timer that will run every `time_ms` milliseconds.

After creating the Timer instance, it calls `this.run` repeatedly,
with delays of `time_ms` milliseconds, until `this.stop` is called.

The first invocation occurs after `time_ms` milliseconds, not
immediately.

The accuracy of this may be platform-dependent.

| Name | Type |
|------|------|
| `time_ms` | [Int](/api-docs/clay-web/Int/) |

## Private Members

<div class="signature field-var no-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


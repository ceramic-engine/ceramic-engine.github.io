---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Timer
target: Unity
permalink: api-docs/unity/haxe/Timer/
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

<div class="signature field-method has-description" id="stamp"><code><span class="field-name">stamp</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#stamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a timestamp, in seconds with fractions.

The value itself might differ depending on platforms, only differences
between two values make sense.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |


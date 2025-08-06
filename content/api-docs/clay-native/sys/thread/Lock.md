---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Lock
target: Clay (Native)
permalink: api-docs/clay-native/sys/thread/Lock/
---

# Lock

<div class="type-hierarchy"><strong>sys.thread.Lock</strong> (Class)</div>

A Lock allows blocking execution until it has been unlocked. It keeps track
of how often `release` has been called, and blocks exactly as many `wait`
calls.

The order of the `release` and `wait` calls is irrelevant. That is, a Lock
can be released before anyone waits for it. In that case, the `wait` call
will execute immediately.

Usage example:

```haxe
var lock = new Lock();
var elements = [1, 2, 3];
for (element in elements) {
// Create one thread per element
new Thread(function() {
trace(element);
Sys.sleep(1);
// Release once per thread = 3 times
lock.release();
});
}
for (_ in elements) {
// Wait 3 times
lock.wait();
}
trace("All threads finished");
```

## Instance Members

<div class="signature field-method has-description" id="wait"><code><span class="field-name">wait</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wait"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Waits for the lock to be released, or `timeout` (in seconds)
to expire. Returns `true` if the lock is released and `false`
if a time-out occurs.

| Name | Type | Default |
|------|------|---------|
| `timeout` | [Float](/api-docs/clay-native/Float/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Lock which is initially locked.

## Private Members

<div class="signature field-var no-description" id="l"><code><span class="field-name">l</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#l"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


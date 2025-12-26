---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: WaitCallbacks
target: Headless
permalink: api-docs/headless/ceramic/WaitCallbacks/
---

# WaitCallbacks

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/WaitCallbacks.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.WaitCallbacks</strong> (Class)</div>

Utility to create and wait for multiple callbacks and call
a final one after every other callback has been called.

This class is useful for coordinating multiple asynchronous operations,
ensuring that a completion handler is called only after all individual
operations have finished. Each callback can only be called once.

Common use cases:
- Loading multiple assets in parallel
- Waiting for multiple animations to complete
- Coordinating multiple async operations before proceeding

Example usage:
```haxe
var wait = new WaitCallbacks(() -> {
    trace("All operations completed!");
});

// Register callbacks for async operations
var cb1 = wait.callback();
var cb2 = wait.callback();
var cb3 = wait.callback();

// Start async operations
loadAsset("image1.png", cb1);
loadAsset("image2.png", cb2);
loadAsset("sound.ogg", cb3);

// The completion callback will fire after all three callbacks are invoked
```

Note: Once all callbacks have been called and the completion handler has fired,
no new callbacks can be registered.

## Instance Members

<div class="signature field-var has-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the number of callbacks still pending.
This decreases as callbacks are invoked.

<hr class="field-separator" />

<div class="signature field-var has-description" id="complete"><code><span class="field-name">complete</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#complete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if all callbacks have completed.
Once true, no new callbacks can be registered.

<hr class="field-separator" />

<div class="signature field-method no-description" id="completionCallback"><code><span class="field-name">completionCallback</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#completionCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="callback"><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new callback to wait for.
Returns a function that should be called when this particular task is done.

The returned callback:
- Can only be called once (subsequent calls are ignored)
- Decrements the pending counter when called
- Triggers the completion callback when it's the last pending callback


| Returns | Description |
|---------|-------------|
| Function | A callback function to be called when the associated task completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">completionCallback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new WaitCallbacks instance.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `completionCallback` | Function | *(optional)* | The function to call when all registered callbacks have been invoked |


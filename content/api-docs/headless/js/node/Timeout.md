---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Timeout
target: Headless
permalink: api-docs/headless/js/node/Timeout/
---

# Timeout

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Timers.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Timeout</strong> (extern class)</div>

This object is created internally and is returned from `setTimeout()` and `setInterval()`.
It can be passed to either `clearTimeout()` or `clearInterval()` in order to cancel the scheduled actions.

## Instance Members

<div class="signature field-method has-description" id="hasRef"><code><span class="field-name">hasRef</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, the `Timeout` object will keep the Node.js event loop active.
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ref"><code><span class="field-name">ref</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Timeout</a></code><a class="header-anchor" href="#ref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When called, the active `Timeout` object will not require the Node.js event loop to remain active.
If there is no other activity keeping the event loop running, the process may exit before the `Timeout` object's
callback is invoked. Calling `timeout.unref()` multiple times will have no effect.

Calling `timeout.unref()` creates an internal timer that will wake the Node.js event loop.
Creating too many of these can adversely impact performance of the Node.js application.
| Returns |
|---------|
| [Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="refresh"><code><span class="field-name">refresh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Timeout</a></code><a class="header-anchor" href="#refresh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the timer's start time to the current time, and reschedules the timer to call its callback at the previously
specified duration adjusted to the current time. This is useful for refreshing a timer without allocating
a new JavaScript object.

Using this on a timer that has already called its callback will reactivate the timer.
| Returns |
|---------|
| [Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unref"><code><span class="field-name">unref</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Timeout</a></code><a class="header-anchor" href="#unref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When called, the active `Timeout` object will not require the Node.js event loop to remain active.
If there is no other activity keeping the event loop running, the process may exit before the `Timeout` object's
callback is invoked. Calling `timeout.unref()` multiple times will have no effect.

Calling `timeout.unref()` creates an internal timer that will wake the Node.js event loop.
Creating too many of these can adversely impact performance of the Node.js application.
| Returns |
|---------|
| [Timeout](/api-docs/headless/js/node/Timeout/) |


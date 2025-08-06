---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Immediate
target: Headless
permalink: api-docs/headless/js/node/Immediate/
---

# Immediate

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Timers.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Immediate</strong> (extern class)</div>

This object is created internally and is returned from `setImmediate()`.
It can be passed to `clearImmediate()` in order to cancel the scheduled actions.

## Instance Members

<div class="signature field-method has-description" id="hasRef"><code><span class="field-name">hasRef</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, the `Immediate` object will keep the Node.js event loop active.
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ref"><code><span class="field-name">ref</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Immediate</a></code><a class="header-anchor" href="#ref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When called, requests that the Node.js event loop not exit so long as the `Immediate` is active.
Calling `immediate.ref()` multiple times will have no effect.

By default, all `Immediate` objects are "ref'ed", making it normally unnecessary to call `immediate.ref()`
unless `immediate.unref()` had been called previously.
| Returns |
|---------|
| [Immediate](/api-docs/headless/js/node/Immediate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unref"><code><span class="field-name">unref</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Immediate</a></code><a class="header-anchor" href="#unref"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When called, the active `Immediate` object will not require the Node.js event loop to remain active.
If there is no other activity keeping the event loop running, the process may exit before the `Immediate` object's
callback is invoked. Calling immediate.unref() multiple times will have no effect.
| Returns |
|---------|
| [Immediate](/api-docs/headless/js/node/Immediate/) |


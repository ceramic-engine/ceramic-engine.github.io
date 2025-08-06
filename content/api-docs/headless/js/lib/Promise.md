---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Promise
target: Headless
permalink: api-docs/headless/js/lib/Promise/
---

# Promise

<div class="type-hierarchy"><strong>js.lib.Promise</strong> (extern class)</div>

The Promise object represents the eventual completion (or failure) of an
asynchronous operation and its resulting value.

Documentation [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-method has-description" id="resolve"><code><span class="field-name">resolve</span><span class="parenthesis">(</span><span class="arg-name">thenable</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Thenable/" class="type-link">Thenable</a><span class="operator">&lt;</span><span class="type-name">resolve.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">resolve.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Promise object that is resolved with the given value. If the
value is Thenable, the returned promise will "follow" that
thenable, adopting its eventual state;
otherwise the returned promise will be fulfilled with the value.
Generally, when it's unknown when value is a promise or not,
use `Promise.resolve(value)` instead and work with the return value as
a promise.

| Name | Type |
|------|------|
| `thenable` | [Thenable](/api-docs/headless/js/lib/Thenable/)<resolve.T> |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<resolve.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reject"><code><span class="field-name">reject</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">reject.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#reject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Promise object that is rejected with the given reason.

| Name | Type | Default |
|------|------|---------|
| `reason` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<reject.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="all"><code><span class="field-name">all</span><span class="parenthesis">(</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">all.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">all.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a promise that either fulfills when all of the promises in the
iterable argument have fulfilled or rejects as soon as one of the
promises in the iterable argument rejects. If the returned promise
fulfills, it is fulfilled with an array of the values from the
fulfilled promises in the same order as defined in the iterable.
If the returned promise rejects, it is rejected with the reason from
the first promise in the iterable that rejected. This method can be
useful for aggregating results of multiple promises.

| Name | Type |
|------|------|
| `iterable` | [Array](/api-docs/headless/Array/)<[Promise](/api-docs/headless/js/lib/Promise/)<all.T>> |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<[Array](/api-docs/headless/Array/)<all.T>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="allSettled"><code><span class="field-name">allSettled</span><span class="parenthesis">(</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">allSettled.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/PromiseSettleOutcome/" class="type-link">PromiseSettleOutcome</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#allSettled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a promise that resolves after all of the given promises have either fulfilled or rejected,
with an array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent on one another
to complete successfully, or you'd always like to know the result of each promise.

In comparison, the Promise returned by `Promise.all` may be more appropriate if the tasks are dependent
on each other / if you'd like to immediately reject upon any of them rejecting.

| Name | Type |
|------|------|
| `iterable` | [Array](/api-docs/headless/Array/)<[Promise](/api-docs/headless/js/lib/Promise/)<allSettled.T>> |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<[Array](/api-docs/headless/Array/)<[PromiseSettleOutcome](/api-docs/headless/js/lib/PromiseSettleOutcome/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="race"><code><span class="field-name">race</span><span class="parenthesis">(</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">race.T</span><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">race.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#race"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a promise that fulfills or rejects as soon as one of the
promises in the iterable fulfills or rejects, with the value or reason
from that promise.

| Name | Type |
|------|------|
| `iterable` | [Array](/api-docs/headless/Array/)<[Promise](/api-docs/headless/js/lib/Promise/)<race.T>> |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<race.T> |

## Instance Members

<div class="signature field-method has-description" id="then"><code><span class="field-name">then</span><span class="parenthesis">(</span><span class="arg-name">onFulfilled</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/PromiseHandler/" class="type-link">PromiseHandler</a><span class="operator">&lt;</span><span class="type-name">js.lib.Promise.T</span><span class="operator">,</span> <a href="/api-docs/headless/then/TOut/" class="type-link">then.TOut</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">onRejected</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/PromiseHandler/" class="type-link">PromiseHandler</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <a href="/api-docs/headless/then/TOut/" class="type-link">then.TOut</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/then/TOut/" class="type-link">then.TOut</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#then"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends fulfillment and rejection handlers to the promise and returns a
new promise resolving to the return value of the called handler, or to
its original settled value if the promise was not handled
(i.e. if the relevant handler onFulfilled or onRejected is not a function).

| Name | Type | Default |
|------|------|---------|
| `onFulfilled` | [Null](/api-docs/headless/Null/)<[PromiseHandler](/api-docs/headless/js/lib/PromiseHandler/)<js.lib.Promise.T, [then.TOut](/api-docs/headless/then/TOut/)>> | |
| `onRejected` | [PromiseHandler](/api-docs/headless/js/lib/PromiseHandler/)<[Dynamic](/api-docs/headless/Dynamic/), [then.TOut](/api-docs/headless/then/TOut/)> | *(optional)* |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<[then.TOut](/api-docs/headless/then/TOut/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="catchError"><code><span class="field-name">catchError</span><span class="parenthesis">(</span><span class="arg-name">onRejected</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/PromiseHandler/" class="type-link">PromiseHandler</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="type-name">js.lib.Promise.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">js.lib.Promise.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#catchError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Appends a rejection handler callback to the promise, and returns a new
promise resolving to the return value of the callback if it is called,
or to its original fulfillment value if the promise is instead fulfilled.

| Name | Type |
|------|------|
| `onRejected` | [PromiseHandler](/api-docs/headless/js/lib/PromiseHandler/)<[Dynamic](/api-docs/headless/Dynamic/), js.lib.Promise.T> |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<js.lib.Promise.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="finally"><code><span class="field-name">finally</span><span class="parenthesis">(</span><span class="arg-name">onFinally</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Promise</a><span class="operator">&lt;</span><span class="type-name">js.lib.Promise.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#finally"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Promise. When the promise is settled, i.e either fulfilled or rejected,
the specified callback function is executed. This provides a way for code to be run
whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

| Name | Type |
|------|------|
| `onFinally` | Function |

| Returns |
|---------|
| [Promise](/api-docs/headless/js/lib/Promise/)<js.lib.Promise.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">init</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `init` | Function |


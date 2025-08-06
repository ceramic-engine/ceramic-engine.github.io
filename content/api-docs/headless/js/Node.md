---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Node
target: Headless
permalink: api-docs/headless/js/Node/
---

# Node

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/Node.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.Node</strong> (extern class)</div>

Node.js globals

## Static Members

<div class="signature field-var has-description" id="console"><code><span class="field-name">console</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/console/Console/" class="type-link">js.node.console.Console</a></code><a class="header-anchor" href="#console"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used to print to stdout and stderr. See the [console](https://nodejs.org/api/console.html) section.

<hr class="field-separator" />

<div class="signature field-var has-description" id="exports"><code><span class="field-name">exports</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#exports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This variable may appear to be global but is not. See [exports](https://nodejs.org/api/modules.html#modules_exports).

<hr class="field-separator" />

<div class="signature field-var has-description" id="global"><code><span class="field-name">global</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#global"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

In browsers, the top-level scope is the global scope.
This means that within the browser `var something` will define a new global variable.
In Node.js this is different. The top-level scope is not the global scope; `var something` inside a Node.js module
will be local to that module.

<hr class="field-separator" />

<div class="signature field-var has-description" id="module"><code><span class="field-name">module</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Module/" class="type-link">js.node.Module</a></code><a class="header-anchor" href="#module"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This variable may appear to be global but is not. See [module](https://nodejs.org/api/modules.html#modules_module).

<hr class="field-separator" />

<div class="signature field-var has-description" id="process"><code><span class="field-name">process</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Process/" class="type-link">js.node.Process</a></code><a class="header-anchor" href="#process"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The process object. See the [process object](https://nodejs.org/api/process.html#process_process) section.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearImmediate"><code><span class="field-name">clearImmediate</span><span class="parenthesis">(</span><span class="arg-name">immediate</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Immediate/" class="type-link">js.node.Immediate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`clearImmediate` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `immediate` | [js.node.Immediate](/api-docs/headless/js/node/Immediate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearInterval"><code><span class="field-name">clearInterval</span><span class="parenthesis">(</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">js.node.Timeout</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`clearInterval` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `timeout` | [js.node.Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clearTimeout"><code><span class="field-name">clearTimeout</span><span class="parenthesis">(</span><span class="arg-name">timeout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">js.node.Timeout</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`clearTimeout` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `timeout` | [js.node.Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queueMicrotask"><code><span class="field-name">queueMicrotask</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#queueMicrotask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `queueMicrotask()` method queues a microtask to invoke `callback`.
If `callback` throws an exception, the [process object](https://nodejs.org/api/process.html#process_process) 'uncaughtException' event will be emitted.

The microtask queue is managed by V8 and may be used in a similar manner to the `Process.nextTick()` queue,
which is managed by Node.js.
The `Process.nextTick()` queue is always processed before the microtask queue within each turn of the Node.js event loop.

| Name | Type |
|------|------|
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="require"><code><span class="field-name">require</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#require"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This variable may appear to be global but is not. See [require()](https://nodejs.org/api/modules.html#modules_require_id).

| Name | Type |
|------|------|
| `module` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setImmediate"><code><span class="field-name">setImmediate</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Immediate/" class="type-link">js.node.Immediate</a></code><a class="header-anchor" href="#setImmediate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`setImmediate` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [js.node.Immediate](/api-docs/headless/js/node/Immediate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setInterval"><code><span class="field-name">setInterval</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">js.node.Timeout</a></code><a class="header-anchor" href="#setInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`setInterval` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `delay` | [Int](/api-docs/headless/Int/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [js.node.Timeout](/api-docs/headless/js/node/Timeout/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTimeout"><code><span class="field-name">setTimeout</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Timeout/" class="type-link">js.node.Timeout</a></code><a class="header-anchor" href="#setTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`setTimeout` is described in the [timers](https://nodejs.org/api/timers.html) section.

| Name | Type |
|------|------|
| `callback` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `delay` | [Int](/api-docs/headless/Int/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [js.node.Timeout](/api-docs/headless/js/node/Timeout/) |

